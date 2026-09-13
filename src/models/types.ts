export interface Person {
  id: string;
  name: string;
  role: 'Driver' | 'Passenger' | 'Both' | 'Connector';
  avatarUrl?: string;
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
}

export interface CurrentUser extends Person {
  communityId: string;
  typicalCorridor: string;
}
