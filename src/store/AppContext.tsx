import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Community, CurrentUser, Ride, DemandOpportunity } from '../models/types';
import { CANONICAL_USER, CANONICAL_COMMUNITY, POST_ACTIVATION_STATE, INITIAL_RIDES, CANONICAL_DEMAND } from './mockData';

interface AppState {
  currentUser: CurrentUser | null;
  community: Community;
  rides: Ride[];
  demand: DemandOpportunity;
  isActivated: boolean;
  growthStage: number; // 0: 1 person, 1: 3, 2: 8, 3: 17, 4: 32
  confirmedRide: Ride | null;
}

interface AppContextType extends AppState {
  login: () => void;
  logout: () => void;
  activateCommunity: () => void;
  replayGrowth: (stage?: number) => void;
  offerRide: (ride: Omit<Ride, 'id' | 'status' | 'passengerIds' | 'driverId'>) => void;
  joinRide: (rideId: string) => void;
  confirmRide: (rideId: string) => void;
  improveCommunityHealth: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(CANONICAL_USER);
  const [community, setCommunity] = useState<Community>(CANONICAL_COMMUNITY);
  const [rides, setRides] = useState<Ride[]>(INITIAL_RIDES);
  const [demand] = useState<DemandOpportunity>(CANONICAL_DEMAND);
  const [isActivated, setIsActivated] = useState(false);
  const [growthStage, setGrowthStage] = useState(0);
  const [confirmedRide, setConfirmedRide] = useState<Ride | null>(null);

  const login = () => {
    setCurrentUser(CANONICAL_USER);
  };

  const logout = () => {
    setCurrentUser(null);
    // Reset state on logout for repeatable demo replay
    setCommunity(CANONICAL_COMMUNITY);
    setIsActivated(false);
    setGrowthStage(0);
    setRides(INITIAL_RIDES);
    setConfirmedRide(null);
  };

  const activateCommunity = () => {
    setIsActivated(true);
    setCommunity(prev => ({
      ...prev,
      isActivated: true,
      state: POST_ACTIVATION_STATE
    }));
    setGrowthStage(4); // canonical 32-node activated state
  };

  const replayGrowth = (stage?: number) => {
    if (stage !== undefined) {
      setGrowthStage(Math.max(0, Math.min(4, stage)));
    } else {
      setGrowthStage(prev => (prev >= 4 ? 0 : prev + 1));
    }
  };

  const offerRide = (rideData: Omit<Ride, 'id' | 'status' | 'passengerIds' | 'driverId'>) => {
    if (!currentUser) return;

    // Check if user is already registered as a driver in existing rides
    const alreadyDriver = rides.some(r => r.driverId === currentUser.id);

    const newRide: Ride = {
      ...rideData,
      id: `ride-${Date.now()}`,
      driverId: currentUser.id,
      driverName: currentUser.name,
      driverRole: currentUser.role,
      vehicle: rideData.vehicle || 'Personal Commuter Vehicle',
      vehiclePlate: rideData.vehiclePlate || 'Route 44 Verified',
      status: 'available',
      passengerIds: [],
      matchScore: rideData.matchScore || 94
    };

    setRides(prev => [newRide, ...prev]);

    // Update community stats logically: only increment driver count if newly acting as driver
    setCommunity(prev => ({
      ...prev,
      state: {
        ...prev.state,
        drivers: alreadyDriver ? prev.state.drivers : prev.state.drivers + 1,
        rides: prev.state.rides + 1
      }
    }));
  };

  const joinRide = (rideId: string) => {
    if (!currentUser) return;

    const rideToJoin = rides.find(r => r.id === rideId);
    if (!rideToJoin || rideToJoin.availableSeats <= 0) {
      if (rideToJoin) {
        setConfirmedRide(rideToJoin);
      }
      return;
    }

    // Avoid duplicate join if user already joined
    if (rideToJoin.passengerIds.includes(currentUser.id)) {
      setConfirmedRide(rideToJoin);
      return;
    }

    const updated: Ride = {
      ...rideToJoin,
      availableSeats: Math.max(0, rideToJoin.availableSeats - 1),
      passengerIds: [...rideToJoin.passengerIds, currentUser.id]
    };

    setRides(prev => prev.map(ride => ride.id === rideId ? updated : ride));
    setConfirmedRide(updated);
  };

  const confirmRide = (rideId: string) => {
    setRides(prev => prev.map(ride => {
      if (ride.id === rideId) {
        const updated: Ride = {
          ...ride,
          status: 'confirmed'
        };
        setConfirmedRide(updated);
        return updated;
      }
      return ride;
    }));
  };

  const improveCommunityHealth = () => {
    setCommunity(prev => ({
      ...prev,
      state: {
        ...prev.state,
        health: {
          ...prev.state.health,
          score: Math.min(100, Math.max(0, prev.state.health.score + 5)),
          trend: 'up'
        }
      }
    }));
  };

  return (
    <AppContext.Provider value={{
      currentUser,
      community,
      rides,
      demand,
      isActivated,
      growthStage,
      confirmedRide,
      login,
      logout,
      activateCommunity,
      replayGrowth,
      offerRide,
      joinRide,
      confirmRide,
      improveCommunityHealth
    }}>
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
