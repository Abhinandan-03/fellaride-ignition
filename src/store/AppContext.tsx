import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Community, CurrentUser, Ride, DemandOpportunity } from '../models/types';
import { CANONICAL_USER, CANONICAL_COMMUNITY, POST_ACTIVATION_STATE, INITIAL_RIDES, CANONICAL_DEMAND } from './mockData';

interface AppState {
  currentUser: CurrentUser | null;
  community: Community;
  rides: Ride[];
  demand: DemandOpportunity;
  isActivated: boolean;
  growthStage: number; // 0: unactivated, 1: 1, 2: 3, 3: 8, 4: 17, 5: 32
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

  const login = () => {
    setCurrentUser(CANONICAL_USER);
  };

  const logout = () => {
    setCurrentUser(null);
    // Reset state on logout
    setCommunity(CANONICAL_COMMUNITY);
    setIsActivated(false);
    setGrowthStage(0);
    setRides(INITIAL_RIDES);
  };

  const activateCommunity = () => {
    setIsActivated(true);
    setCommunity(prev => ({
      ...prev,
      isActivated: true,
      state: POST_ACTIVATION_STATE
    }));
    setGrowthStage(4); // fully grown in this demo jump (stage 32)
  };

  const replayGrowth = (stage?: number) => {
    if (stage !== undefined) {
      setGrowthStage(stage);
    } else {
      setGrowthStage(prev => (prev >= 4 ? 0 : prev + 1));
    }
  };

  const offerRide = (rideData: Omit<Ride, 'id' | 'status' | 'passengerIds' | 'driverId'>) => {
    if (!currentUser) return;
    
    const newRide: Ride = {
      ...rideData,
      id: `ride-${Date.now()}`,
      driverId: currentUser.id,
      status: 'available',
      passengerIds: []
    };
    
    setRides(prev => [...prev, newRide]);
    
    // Update community stats
    if (isActivated) {
      setCommunity(prev => ({
        ...prev,
        state: {
          ...prev.state,
          drivers: prev.state.drivers + 1,
          rides: prev.state.rides + 1,
        }
      }));
    }
  };

  const joinRide = (rideId: string) => {
    if (!currentUser) return;
    
    setRides(prev => prev.map(ride => {
      if (ride.id === rideId && ride.availableSeats > 0) {
        return {
          ...ride,
          availableSeats: ride.availableSeats - 1,
          passengerIds: [...ride.passengerIds, currentUser.id]
        };
      }
      return ride;
    }));
  };

  const confirmRide = (rideId: string) => {
    setRides(prev => prev.map(ride => {
      if (ride.id === rideId) {
        return {
          ...ride,
          status: 'confirmed'
        };
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
          score: Math.min(100, prev.state.health.score + 5)
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
