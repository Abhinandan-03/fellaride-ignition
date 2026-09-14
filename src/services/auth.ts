import type { User, UserRole } from '../models/types';
import { storage } from './storage';

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

/**
 * Hash a password using SHA-256 via the Web Crypto API.
 * Returns a lowercase hex string.
 */
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Synchronous fallback hash for environments without crypto.subtle.
 * Uses a simple djb2 variant — only used if crypto.subtle is unavailable.
 */
function hashPasswordSync(password: string): string {
  let hash = 5381;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) + hash + password.charCodeAt(i);
    hash = hash & hash; // Force 32-bit integer
  }
  return 'sync_' + Math.abs(hash).toString(16).padStart(8, '0');
}

/**
 * Hash a password — async when crypto.subtle is available, sync fallback otherwise.
 */
async function computeHash(password: string): Promise<string> {
  try {
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      return await hashPassword(password);
    }
  } catch {
    // fall through to sync fallback
  }
  return hashPasswordSync(password);
}

class AuthService {
  /**
   * Register a new user account with password.
   */
  async signUp(name: string, email: string, password: string, role: UserRole = 'Both'): Promise<AuthResult> {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    if (!trimmedName || trimmedName.length < 2) {
      return { success: false, error: 'Please enter a valid full name (at least 2 characters).' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    if (!password || password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' };
    }

    // Duplicate email check
    const existing = storage.findUserByEmail(trimmedEmail);
    if (existing) {
      return { success: false, error: 'An account with this email address already exists. Please log in.' };
    }

    const passwordHash = await computeHash(password);

    const newUser: User = {
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: trimmedName,
      email: trimmedEmail,
      passwordHash,
      role,
      plan: 'Free',
      communityIds: [],
      selectedCommunityId: '',
      typicalCorridor: '',
      createdAt: new Date().toISOString(),
    };

    storage.saveUser(newUser);
    storage.setCurrentSessionUserId(newUser.id);

    return { success: true, user: newUser };
  }

  /**
   * Authenticate an existing user by email + password.
   */
  async login(email: string, password: string): Promise<AuthResult> {
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      return { success: false, error: 'Please enter your email address.' };
    }
    if (!password) {
      return { success: false, error: 'Please enter your password.' };
    }

    const user = storage.findUserByEmail(trimmedEmail);
    if (!user) {
      return {
        success: false,
        error: 'No account found with this email. Please check your spelling or sign up.',
      };
    }

    // If user has no stored hash (legacy seed accounts), accept any password for demo
    if (!user.passwordHash) {
      storage.setCurrentSessionUserId(user.id);
      return { success: true, user };
    }

    // Verify password
    const inputHash = await computeHash(password);
    if (inputHash !== user.passwordHash) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    storage.setCurrentSessionUserId(user.id);
    return { success: true, user };
  }

  /**
   * Log in with a specific user ID directly (used for demo quick-logins).
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
}

export const auth = new AuthService();
