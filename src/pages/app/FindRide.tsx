import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Car,
  CircleDot,
  Compass,
  CreditCard,
  Leaf,
  MapPin,
  RefreshCw,
  Route,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Users,
  AlertCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function FindRide() {
  const navigate = useNavigate();
  const {
    communityRides,
    joinRide,
    selectedCommunity,
    canJoinRide,
    canOfferRide,
  } = useApp();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [joinError, setJoinError] = useState<string | null>(null);

  const rides = communityRides;
  const featuredRide = rides[0];
  const otherRides = rides.slice(1);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleJoinRide = (rideId: string) => {
    setJoinError(null);
    if (!canJoinRide) {
      setJoinError('Your account is set to Offer Rides Only. To join rides, change your preference to "Find" or "Both" in your profile.');
      return;
    }
    const success = joinRide(rideId);
    if (!success) {
      setJoinError('Unable to join ride: either no seats are left, or you have already joined.');
      return;
    }
    navigate('/app/ride-confirmed');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-space-lg max-w-7xl mx-auto w-full pb-space-xl">
        {/* Top Metadata & Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-sm flex-wrap">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Find a Ride</h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                {selectedCommunity?.name || 'Community'} Active
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low font-mono text-mono text-on-surface-variant">
                <span className="text-on-surface font-semibold">{selectedCommunity?.name || 'Community'}</span>
                <span className="text-outline-variant">•</span>
                <span>{selectedCommunity?.state?.drivers || 6} Drivers</span>
                <span className="text-outline-variant">•</span>
                <span>{selectedCommunity?.state?.passengers || 15} Passengers</span>
                <span className="text-outline-variant">•</span>
                <span className="text-secondary font-semibold">{rides.length} Rides</span>
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {selectedCommunity?.corridor || `${selectedCommunity?.name} → Central District`} · Around 6 PM · {rides.length} matches
            </p>
          </div>
          {/* Quick corridor indicators */}
          <div className="flex items-center gap-space-sm self-start lg:self-center">
            <div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest shadow-sm">
              <ShieldCheck className="text-secondary text-base" />
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase text-outline">Trust</span>
                <span className="font-mono text-mono text-on-surface font-semibold">Peer Verified</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest shadow-sm">
              <CreditCard className="text-secondary text-base" />
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase text-outline">Markup</span>
                <span className="font-mono text-mono text-secondary font-semibold">₹0 Fee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Join Error Banner */}
        {joinError && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle size={16} className="text-red-600 shrink-0" />
              <span>{joinError}</span>
            </div>
            <button
              onClick={() => setJoinError(null)}
              className="text-red-700 font-bold hover:underline cursor-pointer ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* EMPTY STATE IF NO RIDES */}
        {rides.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-2xl p-12 text-center border border-surface-container my-4 shadow-sm">
            <div className="w-16 h-16 rounded-3xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
              <Compass size={32} />
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-on-surface">
              No rides in {selectedCommunity?.name || 'this community'} yet
            </h3>
            <p className="text-body-sm text-on-surface-variant max-w-md mx-auto mt-2 leading-relaxed">
              No active carpools have been posted for this community corridor yet. Be the first to offer seats to your neighbors.
            </p>
            {canOfferRide && (
              <button
                onClick={() => navigate('/app/offer-ride')}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-xs shadow-md hover:bg-navy-850 transition-all cursor-pointer"
              >
                <Car size={16} />
                <span>Offer a Ride in {selectedCommunity?.name}</span>
              </button>
            )}
          </div>
        ) : (
          /* Main 2-Column Responsive Workspace */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-space-lg">
              {/* Search Card */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Route className="text-secondary text-lg" />
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Route & Schedule</h2>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold">
                    {rides.length} Matches
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  {/* Origin */}
                  <div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
                    <span className="font-label-sm text-label-sm text-outline uppercase flex items-center gap-1">
                      <CircleDot className="text-xs text-secondary" />
                      Origin
                    </span>
                    <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-semibold truncate">
                      <span>{featuredRide?.origin || selectedCommunity?.name}</span>
                    </div>
                  </div>
                  {/* Destination */}
                  <div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
                    <span className="font-label-sm text-label-sm text-outline uppercase flex items-center gap-1">
                      <MapPin className="text-xs text-error" />
                      Destination
                    </span>
                    <div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-semibold truncate">
                      <span>{featuredRide?.destination || 'Central District'}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-outline font-body-sm text-body-sm">
                    <SlidersHorizontal className="text-sm text-secondary" />
                    <span>{selectedCommunity?.corridor || 'Community Corridor'}</span>
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold shadow-sm hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                    id="search-refresh-btn"
                    onClick={handleRefresh}
                  >
                    <RefreshCw className={`text-base ${isRefreshing ? 'animate-spin' : ''}`} />
                    Find Rides
                  </button>
                </div>
              </div>

              {/* Match Banner */}
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-secondary"></span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{rides.length} matches</span>
                  </div>
                  <span className="font-mono text-mono text-outline">Verified Community Rides</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {rides.length} verified {selectedCommunity?.name || 'community'} members scheduled along this corridor.
                </p>
              </div>

              {/* FEATURED: BEST MATCH */}
              {featuredRide && (
                <div className="relative bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-bold self-start">
                      <Star className="text-sm" />
                      Recommended
                    </div>
                    <span className="font-mono text-mono text-secondary font-semibold">
                      Departs {featuredRide.departureTime}
                    </span>
                  </div>

                  {/* Driver Profile Snippet */}
                  <div className="flex items-start justify-between gap-space-md flex-wrap">
                    <div className="flex items-center gap-space-md">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold shadow-sm">
                          {(featuredRide.driverName || 'Driver').slice(0, 2).toUpperCase()}
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                          <BadgeCheck className="text-xs" />
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{featuredRide.driverName}</span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
                            {featuredRide.driverRole || 'Driver'}
                          </span>
                        </div>
                        <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          <span>Verified in {selectedCommunity?.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-headline-lg text-headline-lg text-secondary font-bold">
                        ₹{featuredRide.price || featuredRide.pricePerSeat || 80}
                      </span>
                      <span className="font-label-sm text-label-sm text-outline uppercase">Share Contribution</span>
                    </div>
                  </div>

                  {/* Route & Times */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                    <div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm text-outline uppercase">Route</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                        {featuredRide.origin} → {featuredRide.destination}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm text-outline uppercase">Available Seats</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                        {featuredRide.availableSeats} of {featuredRide.totalSeats} seats open
                      </span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <Leaf className="text-secondary text-base" />
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Non-commercial ride</span>
                    </div>
                    <button
                      className={`px-space-lg py-2.5 rounded-lg ${
                        featuredRide.availableSeats <= 0 || !canJoinRide
                          ? 'bg-surface-container text-outline cursor-not-allowed'
                          : 'bg-secondary text-on-secondary shadow-md hover:bg-secondary/90 active:scale-[0.98] cursor-pointer'
                      } font-label-lg text-label-lg font-bold transition-all flex items-center gap-2`}
                      disabled={featuredRide.availableSeats <= 0 || !canJoinRide}
                      onClick={() => handleJoinRide(featuredRide.id)}
                    >
                      <span>
                        {featuredRide.availableSeats <= 0
                          ? 'Full'
                          : !canJoinRide
                          ? 'Offer-Only Mode'
                          : 'Join Ride'}
                      </span>
                      <ArrowRight className="text-base" />
                    </button>
                  </div>
                </div>
              )}

              {/* OTHER MATCHING RIDES */}
              {otherRides.length > 0 && (
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm uppercase text-outline tracking-wider font-semibold">
                    Other Matches ({otherRides.length})
                  </span>
                  {otherRides.map((ride) => {
                    const initials = (ride.driverName || 'Driver').slice(0, 2).toUpperCase();
                    const isFull = ride.availableSeats <= 0;

                    return (
                      <div
                        key={ride.id}
                        className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-space-md">
                          <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-headline-sm text-headline-sm font-semibold">
                            {initials}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-label-lg text-label-lg text-on-surface font-bold">{ride.driverName}</span>
                              <span className="px-2 py-0.2 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
                                {ride.driverRole || 'Driver'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
                              <span className="font-semibold text-on-surface">{ride.departureTime}</span>
                              <span>•</span>
                              <span>{ride.origin} → {ride.destination}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-space-md">
                          <div className="flex flex-col items-start sm:items-end">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                              ₹{ride.price || ride.pricePerSeat || 80}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {ride.availableSeats} seats open
                            </span>
                          </div>
                          <button
                            className={`px-space-md py-2 rounded-lg ${
                              isFull || !canJoinRide
                                ? 'bg-surface-container text-outline cursor-not-allowed'
                                : 'bg-surface-container text-on-surface font-semibold hover:bg-surface-container-high cursor-pointer'
                            } font-label-md text-label-md transition-colors`}
                            disabled={isFull || !canJoinRide}
                            onClick={() => handleJoinRide(ride.id)}
                          >
                            {isFull ? 'Full' : !canJoinRide ? 'Offer-Only' : 'Join Ride'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-space-lg">
              {/* Community Trust Card */}
              <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="text-secondary text-xl" />
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Community Trust</h3>
                  </div>
                  <span className="font-mono text-mono text-secondary font-bold">Verified Network</span>
                </div>
                <div className="flex items-start gap-2 p-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm">
                  <Users className="text-secondary text-base shrink-0 mt-0.5" />
                  <p>
                    <strong>{selectedCommunity?.name || 'Community'} Peer Carpools:</strong> Rides are coordinated exclusively among members of your active community cluster.
                  </p>
                </div>
              </div>

              {/* Booking Preview Box */}
              {featuredRide && (
                <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      Selected Ride
                    </span>
                    <span className="font-mono text-mono text-outline">{featuredRide.availableSeats} seats left</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {featuredRide.driverName}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                        ₹{featuredRide.price || featuredRide.pricePerSeat || 80}
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2 font-body-sm text-body-sm">
                    <div className="flex items-start justify-between">
                      <span className="text-outline">Origin:</span>
                      <span className="font-semibold text-on-surface text-right">{featuredRide.origin}</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-outline">Destination:</span>
                      <span className="font-semibold text-on-surface text-right">{featuredRide.destination}</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="text-outline">Schedule:</span>
                      <span className="font-semibold text-secondary text-right">{featuredRide.departureTime}</span>
                    </div>
                  </div>
                  <button
                    className={`w-full py-2.5 rounded-lg ${
                      featuredRide.availableSeats <= 0 || !canJoinRide
                        ? 'bg-surface-container text-outline cursor-not-allowed'
                        : 'bg-secondary text-on-secondary shadow-md hover:bg-secondary/90 active:scale-[0.98] cursor-pointer'
                    } font-label-lg text-label-lg font-bold transition-all flex items-center justify-center gap-2`}
                    disabled={featuredRide.availableSeats <= 0 || !canJoinRide}
                    onClick={() => handleJoinRide(featuredRide.id)}
                  >
                    <span>
                      {featuredRide.availableSeats <= 0
                        ? 'Full'
                        : !canJoinRide
                        ? 'Offer-Only Mode'
                        : 'Join Ride'}
                    </span>
                    <ArrowRight className="text-base" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
