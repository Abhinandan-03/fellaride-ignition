import type { User, UserRole } from '../models/types';
import { storage } from './storage';

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

export interface GoogleAuthStatus {
  isConfigured: boolean;
  clientId?: string;
  instructions: string;
}

class AuthService {
  /**
   * Register a new user account.
   */
  signUp(name: string, email: string, role: UserRole = 'Both'): AuthResult {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    if (!trimmedName || trimmedName.length < 2) {
      return { success: false, error: 'Please enter a valid full name (at least 2 characters).' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    // Duplicate check
    const existing = storage.findUserByEmail(trimmedEmail);
    if (existing) {
      return { success: false, error: 'An account with this email address already exists. Please log in.' };
    }

    // Default to the first seed community (Northside) if none specified
    const initialCommunityId = 'community-northside';

    const newUser: User = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: trimmedName,
      email: trimmedEmail,
      role,
      plan: 'Free',
      communityIds: [initialCommunityId],
      selectedCommunityId: initialCommunityId,
      typicalCorridor: 'Northside · Central District',
      createdAt: new Date().toISOString(),
    };

    storage.saveUser(newUser);
    storage.setCurrentSessionUserId(newUser.id);

    return { success: true, user: newUser };
  }

  /**
   * Authenticate an existing user by email.
   */
  login(email: string): AuthResult {
    const trimmedEmail = email.trim().toLowerCase();
    const user = storage.findUserByEmail(trimmedEmail);

    if (!user) {
      return {
        success: false,
        error: 'No account found matching this email. Please check your spelling or sign up.',
      };
    }

    storage.setCurrentSessionUserId(user.id);
    return { success: true, user };
  }

  /**
   * Log in with a specific user ID directly (used for demo switches).
   */
  loginAsUser(userId: string): AuthResult {
    const user = storage.findUserById(userId);
    if (!user) {
      return { success: false, error: 'User profile not found.' };
    }
    storage.setCurrentSessionUserId(user.id);
    return { success: true, user };
  }

  /**
   * Log out the current user session.
   */
  logout(): void {
    storage.clearSession();
  }

  /**
   * Get the currently authenticated user from active session.
   */
  getCurrentUser(): User | null {
    const sessionUserId = storage.getCurrentSessionUserId();
    if (!sessionUserId) return null;
    return storage.findUserById(sessionUserId);
  }

  /**
   * Check if Google OAuth provider configuration is set up.
   * Real OAuth requires VITE_GOOGLE_CLIENT_ID in the environment.
   */
  getGoogleAuthStatus(): GoogleAuthStatus {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const isConfigured = Boolean(clientId && clientId !== 'YOUR_GOOGLE_CLIENT_ID');

    return {
      isConfigured,
      clientId: isConfigured ? clientId : undefined,
      instructions:
        'To enable Google Sign-In, add VITE_GOOGLE_CLIENT_ID=<your-client-id> to your .env file and configure authorized JavaScript origins in your Google Cloud Console.',
    };
  }
}

export const auth = new AuthService();
export const getGoogleAuthStatus = () => auth.getGoogleAuthStatus();
