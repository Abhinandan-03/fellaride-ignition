import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Community, DemandOpportunity, Ride, Route, User, UserPlan, UserRole } from '../models/types';
import { auth, type AuthResult } from '../services/auth';
import { storage } from '../services/storage';
import { CANONICAL_DEMAND, POST_ACTIVATION_STATE } from './mockData';

interface CreateCommunityData {
  name: string;
  description: string;
  location: string;
  corridor: string;
  category?: 'residential' | 'colleges' | 'enterprise' | 'emerging';
}

interface AppContextType {
  // User & Auth
  currentUser: User | null;
  signUp: (name: string, email: string, password: string, role?: UserRole) => Promise<AuthResult>;
  login: (email: string, password: string) => Promise<AuthResult>;
  loginAsUser: (userId: string) => AuthResult;
  logout: () => void;
  updateRidePreference: (role: UserRole) => void;
  updateUserPlan: (plan: UserPlan) => void;

  // Capabilities & Permissions
  canOfferRide: boolean;
  canJoinRide: boolean;
  canCreateCommunity: boolean;

  // Communities
  communities: Community[];
  userCommunities: Community[];
  selectedCommunity: Community;
  community: Community; // alias for backwards compatibility
  switchCommunity: (communityId: string) => void;
  selectCommunity: (communityId: string) => void;
  joinCommunity: (communityId: string, autoSwitch?: boolean) => void;
  leaveCommunity: (communityId: string) => void;
  createCommunity: (data: CreateCommunityData) => Community;
  isMember: (communityId: string) => boolean;

  // Routes
  communityRoutes: Route[];
  createRoute: (startPoint: string, destination: string, name?: string) => Route;

  // Rides
  rides: Ride[]; // all rides
  communityRides: Ride[]; // rides in selected community
  confirmedRide: Ride | null;
  offerRide: (rideData: Omit<Ride, 'id' | 'status' | 'passengerIds' | 'driverId' | 'communityId'> & { communityId?: string }) => Ride | null;
  joinRide: (rideId: string) => boolean;
  confirmRide: (rideId: string) => void;

  // Growth & Simulation
  demand: DemandOpportunity;
  isActivated: boolean;
  growthStage: number;
  activateCommunity: () => void;
  replayGrowth: (stage?: number) => void;
  improveCommunityHealth: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Fallback community used when no real community is available
const FALLBACK_COMMUNITY: Community = {
  id: 'community-fallback',
  name: 'Local Hub',
  potentialScore: 80,
  potentialMembers: 1000,
  potentialDrivers: 10,
  potentialPassengers: 40,
  potentialConnectors: 2,
  isActivated: false,
  state: {
    activeMembers: 0,
    drivers: 0,
    passengers: 0,
    rides: 0,
    health: {
      score: 50,
      activeParticipation: 0,
      driverSupply: 0,
      rideActivity: 0,
      repeatUsage: 0,
      trend: 'stable',
      previousScore: 50,
    },
  },
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Auth state initialized from persistent session
  const [currentUser, setCurrentUser] = useState<User | null>(() => auth.getCurrentUser());

  // Data collections from persistent storage
  const [communities, setCommunities] = useState<Community[]>(() => storage.getCommunities());
  const [routes, setRoutes] = useState<Route[]>(() => storage.getRoutes());
  const [rides, setRides] = useState<Ride[]>(() => storage.getRides());

  // UI state
  const [confirmedRide, setConfirmedRide] = useState<Ride | null>(null);
  const [growthStage, setGrowthStage] = useState(4);
  const [demand] = useState<DemandOpportunity>(CANONICAL_DEMAND);

  // Sync session on mount
  useEffect(() => {
    const user = auth.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Compute active user's communities (only their memberships)
  const userCommunities = communities.filter((c) =>
    currentUser ? currentUser.communityIds.includes(c.id) : false
  );

  // Compute currently selected community (must be one they're a member of)
  const selectedCommunity =
    (currentUser && communities.find((c) => c.id === currentUser.selectedCommunityId && currentUser.communityIds.includes(c.id))) ||
    userCommunities[0] ||
    communities[0] ||
    FALLBACK_COMMUNITY;

  // Compute strictly scoped community rides & routes
  const communityRides = rides.filter((r) => r.communityId === selectedCommunity.id);
  const communityRoutes = routes.filter((r) => r.communityId === selectedCommunity.id);

  // Dynamic activation state
  const isActivated = selectedCommunity.isActivated;

  // Permissions / Capabilities
  const canOfferRide = currentUser ? currentUser.role === 'Offer' || currentUser.role === 'Both' : false;
  const canJoinRide = currentUser ? currentUser.role === 'Find' || currentUser.role === 'Both' : false;
  const canCreateCommunity = Boolean(currentUser);

  // Check if current user is member of a community
  const isMember = (communityId: string): boolean => {
    if (!currentUser) return false;
    return currentUser.communityIds.includes(communityId);
  };

  // Auth Handlers (async)
  const signUp = async (name: string, email: string, password: string, role: UserRole = 'Both'): Promise<AuthResult> => {
    const res = await auth.signUp(name, email, password, role);
    if (res.success && res.user) {
      setCurrentUser(res.user);
    }
    return res;
  };

  const login = async (email: string, password: string): Promise<AuthResult> => {
    const res = await auth.login(email, password);
    if (res.success && res.user) {
      setCurrentUser(res.user);
      // Refresh communities/rides/routes in case data changed
      setCommunities(storage.getCommunities());
      setRoutes(storage.getRoutes());
      setRides(storage.getRides());
    }
    return res;
  };

  const loginAsUser = (userId: string): AuthResult => {
    const res = auth.loginAsUser(userId);
    if (res.success && res.user) {
      setCurrentUser(res.user);
      setCommunities(storage.getCommunities());
      setRoutes(storage.getRoutes());
      setRides(storage.getRides());
    }
    return res;
  };

  const logout = () => {
    auth.logout();
    setCurrentUser(null);
    setConfirmedRide(null);
  };

  const updateRidePreference = (role: UserRole) => {
    if (!currentUser) return;
    const updatedUser: User = {
      ...currentUser,
      role,
    };
    storage.saveUser(updatedUser);
    setCurrentUser(updatedUser);
  };

  const updateUserPlan = (plan: UserPlan) => {
    if (!currentUser) return;
    const updatedUser: User = {
      ...currentUser,
      plan,
    };
    storage.saveUser(updatedUser);
    setCurrentUser(updatedUser);
  };

  // Community Management

  /**
   * SWITCH community — only allowed if user is already a MEMBER.
   * Does NOT auto-join. This enforces Switch ≠ Join.
   */
  const switchCommunity = (communityId: string) => {
    if (!currentUser) return;
    const target = communities.find((c) => c.id === communityId);
    if (!target) return;

    // ENFORCE: user must be a member to switch
    if (!currentUser.communityIds.includes(communityId)) {
      // Silently blocked — callers should check isMember() first
      return;
    }

    const updatedUser: User = {
      ...currentUser,
      selectedCommunityId: communityId,
    };

    storage.saveUser(updatedUser);
    setCurrentUser(updatedUser);
  };

  /**
   * JOIN community — adds membership. Optionally switches to it.
   */
  const joinCommunity = (communityId: string, autoSwitch = true) => {
    if (!currentUser) return;

    const alreadyMember = currentUser.communityIds.includes(communityId);
    const newCommunityIds = alreadyMember
      ? currentUser.communityIds
      : [...currentUser.communityIds, communityId];

    const newSelectedId =
      autoSwitch ? communityId
      : currentUser.selectedCommunityId || communityId;

    const updatedUser: User = {
      ...currentUser,
      communityIds: newCommunityIds,
      selectedCommunityId: newSelectedId,
    };
    storage.saveUser(updatedUser);
    setCurrentUser(updatedUser);
  };

  const leaveCommunity = (communityId: string) => {
    if (!currentUser) return;
    if (currentUser.communityIds.length <= 1) return; // Keep at least one

    const newCommunityIds = currentUser.communityIds.filter((id) => id !== communityId);
    const newSelectedId =
      currentUser.selectedCommunityId === communityId
        ? newCommunityIds[0]
        : currentUser.selectedCommunityId;

    const updatedUser: User = {
      ...currentUser,
      communityIds: newCommunityIds,
      selectedCommunityId: newSelectedId,
    };

    storage.saveUser(updatedUser);
    setCurrentUser(updatedUser);
  };

  const createCommunity = (data: CreateCommunityData): Community => {
    const newId = `community-${Date.now()}`;
    const newCommunity: Community = {
      id: newId,
      name: data.name.trim(),
      ownerId: currentUser?.id || 'system',
      description: data.description.trim() || 'A new localized community ride network.',
      location: data.location.trim() || 'Metro District',
      corridor: data.corridor.trim() || `${data.name} · Central District`,
      category: data.category || 'residential',
      potentialScore: 75,
      potentialMembers: 250,
      potentialDrivers: 5,
      potentialPassengers: 20,
      potentialConnectors: 2,
      isActivated: false,
      state: {
        activeMembers: 1,
        drivers: 0,
        passengers: 0,
        rides: 0,
        health: {
          score: 30,
          activeParticipation: 20,
          driverSupply: 0,
          rideActivity: 0,
          repeatUsage: 0,
          trend: 'stable',
          previousScore: 30,
        },
      },
    };

    storage.saveCommunity(newCommunity);
    setCommunities(storage.getCommunities());

    // Join and switch current user to this newly created community
    if (currentUser) {
      const updatedUser: User = {
        ...currentUser,
        communityIds: [...currentUser.communityIds, newId],
        selectedCommunityId: newId,
      };
      storage.saveUser(updatedUser);
      setCurrentUser(updatedUser);
    }

    return newCommunity;
  };

  // Route Management (Supporting multiple routes from same start point!)
  const createRoute = (startPoint: string, destination: string, name?: string): Route => {
    const routeName = name || `${startPoint} → ${destination}`;
    const newRoute: Route = {
      id: `route-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      communityId: selectedCommunity.id,
      name: routeName,
      startPoint: startPoint.trim(),
      destination: destination.trim(),
      typicalDuration: '25 mins',
      estimatedMiles: 10,
    };

    storage.saveRoute(newRoute);
    setRoutes(storage.getRoutes());
    return newRoute;
  };

  // Ride Management
  const offerRide = (
    rideData: Omit<Ride, 'id' | 'status' | 'passengerIds' | 'driverId' | 'communityId'> & { communityId?: string }
  ): Ride | null => {
    if (!currentUser || !canOfferRide) return null;

    const targetCommunityId = rideData.communityId || selectedCommunity.id;

    // Verify user is a member of the target community
    if (!currentUser.communityIds.includes(targetCommunityId)) return null;

    // Check if route exists or register it
    let routeId = rideData.routeId;
    if (!routeId) {
      const existingRoute = routes.find(
        (r) =>
          r.communityId === targetCommunityId &&
          r.startPoint.toLowerCase() === rideData.origin.toLowerCase() &&
          r.destination.toLowerCase() === rideData.destination.toLowerCase()
      );
      if (existingRoute) {
        routeId = existingRoute.id;
      } else {
        const createdRoute = createRoute(rideData.origin, rideData.destination);
        routeId = createdRoute.id;
      }
    }

    const newRide: Ride = {
      ...rideData,
      id: `ride-${Date.now()}`,
      communityId: targetCommunityId,
      routeId,
      driverId: currentUser.id,
      driverName: currentUser.name,
      driverRole: currentUser.role,
      vehicle: rideData.vehicle || 'Standard Commuter Vehicle',
      vehiclePlate: rideData.vehiclePlate || 'Verified Community Ride',
      status: 'available',
      passengerIds: [],
      matchScore: rideData.matchScore || 95,
      createdAt: new Date().toISOString(),
    };

    storage.saveRide(newRide);
    setRides(storage.getRides());

    // Update community stats
    const targetCommunity = communities.find((c) => c.id === targetCommunityId);
    if (targetCommunity) {
      const isAlreadyDriver = rides.some(
        (r) => r.communityId === targetCommunityId && r.driverId === currentUser.id
      );
      const updatedCommunity: Community = {
        ...targetCommunity,
        state: {
          ...targetCommunity.state,
          drivers: isAlreadyDriver ? targetCommunity.state.drivers : targetCommunity.state.drivers + 1,
          rides: targetCommunity.state.rides + 1,
        },
      };
      storage.saveCommunity(updatedCommunity);
      setCommunities(storage.getCommunities());
    }

    return newRide;
  };

  const joinRide = (rideId: string): boolean => {
    if (!currentUser || !canJoinRide) return false;

    const rideToJoin = rides.find((r) => r.id === rideId);
    if (!rideToJoin) return false;

    // Enforce community scoping: ride must belong to selected community
    if (rideToJoin.communityId !== selectedCommunity.id) return false;

    // Enforce membership: user must be member of that community
    if (!currentUser.communityIds.includes(rideToJoin.communityId)) return false;

    // Check capacity
    if (rideToJoin.availableSeats <= 0) {
      setConfirmedRide(rideToJoin);
      return false;
    }

    // Prevent duplicate join
    if (rideToJoin.passengerIds.includes(currentUser.id)) {
      setConfirmedRide(rideToJoin);
      return true;
    }

    const updated: Ride = {
      ...rideToJoin,
      availableSeats: Math.max(0, rideToJoin.availableSeats - 1),
      passengerIds: [...rideToJoin.passengerIds, currentUser.id],
    };

    storage.updateRide(updated);
    setRides(storage.getRides());
    setConfirmedRide(updated);

    // Update community passenger stats
    const isAlreadyPassenger = rides.some(
      (r) => r.communityId === selectedCommunity.id && r.passengerIds.includes(currentUser.id)
    );
    if (!isAlreadyPassenger) {
      const updatedCommunity: Community = {
        ...selectedCommunity,
        state: {
          ...selectedCommunity.state,
          passengers: selectedCommunity.state.passengers + 1,
        },
      };
      storage.saveCommunity(updatedCommunity);
      setCommunities(storage.getCommunities());
    }

    return true;
  };

  const confirmRide = (rideId: string) => {
    const ride = rides.find((r) => r.id === rideId);
    if (ride) {
      const updated: Ride = {
        ...ride,
        status: 'confirmed',
      };
      storage.updateRide(updated);
      setRides(storage.getRides());
      setConfirmedRide(updated);
    }
  };

  // Community Health & Growth
  const activateCommunity = () => {
    const updated: Community = {
      ...selectedCommunity,
      isActivated: true,
      state: POST_ACTIVATION_STATE,
    };
    storage.saveCommunity(updated);
    setCommunities(storage.getCommunities());
    setGrowthStage(4);
  };

  const replayGrowth = (stage?: number) => {
    if (stage !== undefined) {
      setGrowthStage(Math.max(0, Math.min(4, stage)));
    } else {
      setGrowthStage((prev) => (prev >= 4 ? 0 : prev + 1));
    }
  };

  const improveCommunityHealth = () => {
    const updated: Community = {
      ...selectedCommunity,
      state: {
        ...selectedCommunity.state,
        health: {
          ...selectedCommunity.state.health,
          score: Math.min(100, Math.max(0, selectedCommunity.state.health.score + 5)),
          trend: 'up',
        },
      },
    };
    storage.saveCommunity(updated);
    setCommunities(storage.getCommunities());
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        signUp,
        login,
        loginAsUser,
        logout,
        updateRidePreference,
        updateUserPlan,
        canOfferRide,
        canJoinRide,
        canCreateCommunity,
        communities,
        userCommunities,
        selectedCommunity,
        community: selectedCommunity,
        switchCommunity,
        selectCommunity: switchCommunity,
        joinCommunity,
        leaveCommunity,
        createCommunity,
        isMember,
        communityRoutes,
        createRoute,
        rides,
        communityRides,
        confirmedRide,
        offerRide,
        joinRide,
        confirmRide,
        demand,
        isActivated,
        growthStage,
        activateCommunity,
        replayGrowth,
        improveCommunityHealth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
