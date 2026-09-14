export type UserRole = 'Find' | 'Offer' | 'Both';
export type UserPlan = 'Free' | 'Starter' | 'Pro' | 'Enterprise';

export interface Person {
  id: string;
  name: string;
  role: 'Driver' | 'Passenger' | 'Both' | 'Connector';
  avatarUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash?: string; // hashed via Web Crypto API (SHA-256 hex)
  role: UserRole;
  plan: UserPlan;
  communityIds: string[];
  communities?: string[]; // Backwards-compatible alias for communityIds
  selectedCommunityId: string;
  avatarUrl?: string;
  bio?: string;
  typicalCorridor?: string;
  createdAt: string;
}

// Backwards compatibility alias for components typing currentUser
export interface CurrentUser extends Person {
  email?: string;
  rolePreference?: UserRole;
  plan?: UserPlan;
  communityId: string;
  communityIds?: string[];
  communities?: string[];
  selectedCommunityId?: string;
  typicalCorridor: string;
}

export interface Route {
  id: string;
  communityId: string;
  name: string;
  startPoint: string;
  destination: string;
  distance?: string;
  typicalDuration?: string;
  estimatedMiles?: number;
}

export interface ConnectorIntelligence {
  score: number;
  reach: number;
  roleLikelihood: {
    driver: number;
    passenger: number;
    connector: number;
    earlyAdopter: number;
  };
  scoreBreakdown: {
    communityInfluence: number;
    networkReach: number;
    coordinationActivity: number;
    commuteRelevance: number;
  };
}

export interface Connector extends Person {
  intelligence: ConnectorIntelligence;
}

export interface CommunityHealth {
  score: number; // 0-100
  activeParticipation: number; // percentage
  driverSupply: number; // percentage
  rideActivity: number; // percentage
  repeatUsage: number; // percentage
  trend: 'up' | 'down' | 'stable';
  previousScore: number;
  participation?: number;
  supply?: number;
}

export interface CommunityState {
  activeMembers: number;
  drivers: number;
  passengers: number;
  rides: number;
  health: CommunityHealth;
}

export interface Community {
  id: string;
  name: string;
  ownerId?: string;
  description?: string;
  location?: string;
  corridor?: string;
  category?: 'residential' | 'colleges' | 'enterprise' | 'emerging';
  status?: string;
  membersCount?: number;
  driversCount?: number;
  passengersCount?: number;
  potentialScore: number; // 0-100
  potentialMembers: number;
  potentialDrivers: number;
  potentialPassengers: number;
  potentialConnectors: number;
  isActivated: boolean;
  state: CommunityState;
}

export interface DemandOpportunity {
  id: string;
  communityId: string;
  eventName: string;
  predictedPassengers: number;
  availableDrivers: number;
  seatShortage: number;
  confidence: number; // percentage
}

export interface Ride {
  id: string;
  communityId: string;
  routeId?: string;
  driverId: string;
  origin: string;
  destination: string;
  departureTime: string;
  availableSeats: number;
  totalSeats: number;
  status: 'available' | 'confirmed' | 'completed';
  passengerIds: string[];
  price?: number;
  pricePerSeat?: number;
  corridorId?: string;
  driverName?: string;
  driverRole?: string;
  vehicle?: string;
  vehiclePlate?: string;
  matchScore?: number;
  createdAt?: string;
}
