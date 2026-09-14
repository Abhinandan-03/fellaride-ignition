import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';
import {
  ArrowLeft,
  Armchair,
  BadgeCheck,
  Calendar,
  Car,
  Check,
  CheckCircle2,
  CircleDot,
  Clock,
  Eye,
  GitBranch,
  MapPin,
  Minus,
  Network,
  Plus,
  Radar,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

export default function OfferRide() {
  const navigate = useNavigate();
  const {
    offerRide,
    selectedCommunity,
    communityRoutes,
    canOfferRide,
    updateRidePreference,
    currentUser,
  } = useApp();

  const [routeType, setRouteType] = useState<'routine' | 'one-time'>('routine');
  const [selectedRouteId, setSelectedRouteId] = useState(communityRoutes[0]?.id || '');
  const [depTime, setDepTime] = useState('6:00 PM');
  const [seats, setSeats] = useState(3);
  const [price, setPrice] = useState(80);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const activeRoute = communityRoutes.find((r) => r.id === selectedRouteId) || communityRoutes[0];

  const handlePublish = () => {
    if (!canOfferRide) {
      setErrorMessage('Your profile is set to Find Rides Only. Please update your preference to offer rides.');
      return;
    }
    if (!selectedCommunity) {
      setErrorMessage('No active community selected.');
      return;
    }

    const validatedDepTime = depTime.trim() || '6:00 PM';
    const validatedSeats = Math.max(1, Math.min(8, seats || 3));
    const validatedPrice = Math.max(0, price || 80);

    setIsPublishing(true);
    offerRide({
      communityId: selectedCommunity.id,
      origin: activeRoute?.startPoint || `${selectedCommunity.name} Hub`,
      destination: activeRoute?.destination || 'Central District',
      departureTime: validatedDepTime,
      availableSeats: validatedSeats,
      totalSeats: validatedSeats,
      pricePerSeat: validatedPrice,
      price: validatedPrice,
      corridorId: activeRoute?.id || 'corridor-rt44',
    });

    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);

      setTimeout(() => {
        navigate('/app/find-ride');
      }, 1000);
    }, 500);
  };

  // Blocked View for Find-Only Users
  if (!canOfferRide) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Car size={32} />
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-label-sm text-xs font-bold uppercase tracking-wider">
          RIDE PREFERENCE RESTRICTION
        </span>
        <h1 className="text-3xl font-extrabold text-navy-900 mt-4 tracking-tight">
          Offer Ride is unavailable in Find-Only mode
        </h1>
        <p className="text-slate-600 text-sm mt-3 leading-relaxed max-w-lg mx-auto">
          Your profile preference is currently set to <strong>Find Rides Only</strong>. You can freely browse and join rides in <strong>{selectedCommunity?.name || 'your community'}</strong>, but creating rides requires driver capability.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              updateRidePreference('Both');
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Enable Offering (Switch to Both)</span>
            <Check size={16} />
          </button>
          <button
            onClick={() => navigate('/app/find-ride')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
          >
            Browse Available Rides
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Telemetry Micro Header / Breadcrumb & Status Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md border-b border-surface-container mb-space-lg">
        <div className="flex items-center gap-space-sm">
          <span className="font-mono text-mono text-on-surface-variant font-medium tracking-wider">OFFER A RIDE</span>
          <span className="text-outline-variant">•</span>
          <span className="font-mono text-mono text-secondary font-semibold uppercase">{selectedCommunity?.name || 'COMMUNITY'}</span>
          <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Active
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-mono text-mono">
            <Network className="text-secondary text-base" />
            <span>Supply: <strong className="font-semibold text-on-surface">{selectedCommunity?.state?.drivers || 6} Drivers · {selectedCommunity?.state?.rides || 10} Rides</strong></span>
          </div>
          <button className="flex items-center gap-space-xs px-space-sm py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors cursor-pointer" onClick={() => navigate('/app/communities')}>
            <ArrowLeft className="text-base" />
            Back to Communities
          </button>
        </div>
      </div>

      {/* Page Header */}
      <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
        <div className="max-w-2xl">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
            {activeRoute?.startPoint || selectedCommunity?.name} → {activeRoute?.destination || 'Central District'} · {depTime} · {seats} seats
          </span>
          <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-none mb-space-xs">
            Offer a Ride
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Create a ride for verified members in <strong>{selectedCommunity?.name || 'your community'}</strong>. Direct fuel share with zero markup fee.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="px-space-sm py-space-xs rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline uppercase">Active Drivers</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">{selectedCommunity?.state?.drivers || 6} in cluster</span>
            </div>
          </div>
          <div className="px-space-sm py-space-xs rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
            <BadgeCheck className="text-base text-secondary" />
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-outline uppercase">Community</span>
              <span className="font-label-md text-label-md text-on-surface font-semibold">{selectedCommunity?.name || 'Community'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* LEFT COLUMN */}
        <main className="lg:col-span-7 flex flex-col gap-space-lg">
          {/* 1. Route Card */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">01</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Your Route</h2>
              </div>
              <div className="inline-flex p-0.5 bg-surface-container-low rounded-lg" id="route-type-toggle">
                <button
                  className={routeType === 'routine' ? "px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-xs cursor-pointer" : "px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm cursor-pointer"}
                  type="button"
                  onClick={() => setRouteType('routine')}
                >Routine Commute</button>
                <button
                  className={routeType === 'one-time' ? "px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-xs cursor-pointer" : "px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm cursor-pointer"}
                  type="button"
                  onClick={() => setRouteType('one-time')}
                >One-Time Ride</button>
              </div>
            </div>

            {/* Route Selector supporting multiple routes from same start point */}
            <div className="mb-4 p-3 bg-surface-container-low rounded-xl">
              <label className="font-label-sm text-label-sm text-outline uppercase block mb-1.5 font-bold">
                Select Corridor Route ({communityRoutes.length} options from {selectedCommunity?.name || 'hub'})
              </label>
              <select
                value={selectedRouteId}
                onChange={(e) => setSelectedRouteId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-surface-container text-on-surface font-label-md text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-secondary cursor-pointer"
              >
                {communityRoutes.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.startPoint} ➔ {r.destination} ({r.distance || 'Direct path'})
                  </option>
                ))}
              </select>
            </div>

            {/* Visual Origin / Destination Node System */}
            <div className="relative flex flex-col gap-space-md pl-4">
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-surface-variant"></div>
              {/* Origin Node */}
              <div className="relative flex items-start gap-space-md">
                <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 z-10 shadow-xs">
                  <CircleDot className="text-[16px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="font-label-sm text-label-sm text-outline uppercase block mb-0.5">Origin</label>
                  <div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-body-md font-semibold text-on-surface truncate">
                        {activeRoute?.startPoint || `${selectedCommunity?.name} Hub`}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Community Pickup Hub</span>
                    </div>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-mono text-label-sm shrink-0">ORIGIN</span>
                  </div>
                </div>
              </div>
              {/* Route Spec Meta Pill */}
              <div className="ml-11 flex items-center gap-space-sm py-0.5">
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-label-sm flex items-center gap-1.5">
                  <GitBranch className="text-xs text-secondary" />
                  {activeRoute?.name || 'Corridor Path'} · {activeRoute?.distance || '14.2 km'} · High Route Overlap
                </span>
              </div>
              {/* Destination Node */}
              <div className="relative flex items-start gap-space-md">
                <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 shadow-xs">
                  <MapPin className="text-[16px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="font-label-sm text-label-sm text-outline uppercase block mb-0.5">Destination</label>
                  <div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex flex-col min-w-0">
                      <span className="font-headline-sm text-body-md font-semibold text-on-surface truncate">
                        {activeRoute?.destination || 'Central District'}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Interchange Destination</span>
                    </div>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-mono text-label-sm shrink-0">DEST</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm border-t border-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="text-sm text-secondary" />
                Selected route matches active member requests
              </span>
              <button className="text-secondary font-label-sm text-label-sm hover:underline font-semibold" type="button">Stops</button>
            </div>
          </section>

          {/* 2. Schedule & Smart Suggestion */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">02</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Schedule</h2>
              </div>
              <span className="font-mono text-mono text-on-surface-variant">ETA: 32 mins</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
              {/* Date Selector */}
              <div className="flex flex-col">
                <label className="font-label-sm text-label-sm text-outline uppercase mb-space-xs">Date</label>
                <div className="px-space-md py-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <Calendar className="text-on-surface-variant text-lg" />
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">Today</span>
                  </div>
                  <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-bold">Scheduled</span>
                </div>
              </div>
              {/* Time Input */}
              <div className="flex flex-col">
                <label className="font-label-sm text-label-sm text-outline uppercase mb-space-xs">Departure Time</label>
                <div className="px-space-md py-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <Clock className="text-on-surface-variant text-lg" />
                    <input
                      className="font-headline-sm text-headline-sm text-on-surface font-bold bg-transparent w-28 focus:outline-none"
                      id="departure-input"
                      type="text"
                      value={depTime}
                      onChange={(e) => setDepTime(e.target.value)}
                    />
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Est. 30m</span>
                </div>
              </div>
            </div>

            {/* Ghost Demand Suggestion Banner */}
            <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm relative overflow-hidden">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <Sparkles className="text-secondary text-base" />
                  <span className="font-label-md text-label-md font-bold text-on-surface">Peak Demand Window</span>
                </div>
                <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  Demand surge
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Passengers in <strong>{selectedCommunity?.name || 'this community'}</strong> frequently travel between 5:30 and 6:30 PM.
              </p>
            </div>
          </section>

          {/* 3. Seats Selection */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">03</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Available Seats</h2>
              </div>
              <span className="font-mono text-mono text-secondary font-bold">{seats} Seats</span>
            </div>
            <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-3">
                <Armchair className="text-secondary text-xl" />
                <div>
                  <div className="font-bold text-sm text-on-surface">Passenger Seats Offered</div>
                  <div className="text-xs text-on-surface-variant">Excludes the driver seat</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSeats(Math.max(1, seats - 1))}
                  className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high cursor-pointer"
                >
                  <Minus size={16} />
                </button>
                <span className="font-headline-sm text-lg font-bold w-6 text-center">{seats}</span>
                <button
                  type="button"
                  onClick={() => setSeats(Math.min(7, seats + 1))}
                  className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* 4. Offset Share */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">04</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">Fuel Offset Contribution</h2>
              </div>
              <span className="font-mono text-mono text-on-surface-variant">₹{price} / seat</span>
            </div>
            <div className="p-space-md bg-surface-container-low rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-outline uppercase font-bold block mb-1">Recommended Contribution</span>
                <span className="text-xs text-on-surface-variant">Covers standard toll & fuel share along corridor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-secondary text-lg">₹</span>
                <input
                  type="number"
                  min="0"
                  max="500"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-20 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-surface-container font-bold text-center text-on-surface text-sm"
                />
              </div>
            </div>
          </section>

          {/* 5. Form Actions */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {errorMessage}
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg text-on-surface font-bold">Ready to offer ride?</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Your ride will appear on the <strong>{selectedCommunity?.name || 'community'}</strong> schedule immediately.
                </span>
              </div>
              <div className="flex items-center gap-space-sm w-full sm:w-auto">
                <button
                  className={`flex-1 sm:flex-initial px-space-xl py-3 rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPublished
                      ? 'bg-secondary-container text-on-secondary-container'
                      : 'bg-secondary text-on-secondary hover:bg-secondary/90'
                  }`}
                  id="publish-ride-cta"
                  type="button"
                  disabled={isPublishing || isPublished}
                  onClick={handlePublish}
                >
                  {isPublishing ? (
                    <>
                      <RefreshCw className="text-lg animate-spin" /> Publishing...
                    </>
                  ) : isPublished ? (
                    <>
                      <Check className="text-lg" /> Ride Published
                    </>
                  ) : (
                    <>
                      <Car className="text-lg" /> Publish Ride
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* RIGHT COLUMN */}
        <aside className="lg:col-span-5 flex flex-col gap-space-lg sticky top-20">
          {/* Live Ride Preview Card */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <Eye className="text-secondary text-base" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Live Ride Preview</h3>
              </div>
              <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold uppercase">
                Preview
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              How {selectedCommunity?.name || 'community'} members see your ride:
            </p>

            <div className="rounded-xl bg-surface p-space-md shadow-xs flex flex-col gap-space-sm border border-surface-container">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-label-md">
                    {(currentUser?.name || 'U').slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface">
                        {currentUser?.name || 'Verified Driver'}
                      </span>
                      <BadgeCheck className="text-secondary text-sm" />
                    </div>
                    <span className="font-mono text-label-sm text-on-surface-variant">
                      {selectedCommunity?.name || 'Community'} · Verified Driver
                    </span>
                  </div>
                </div>
                <span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                  {seats} {seats === 1 ? 'Seat' : 'Seats'}
                </span>
              </div>

              <div className="py-space-xs flex flex-col gap-1 border-t border-b border-surface-container/60 my-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    {activeRoute?.startPoint || `${selectedCommunity?.name} Hub`}
                  </span>
                </div>
                <div className="w-0.5 h-3 bg-outline-variant ml-1"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    {activeRoute?.destination || 'Central District'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-outline uppercase block text-[10px]">Departs</span>
                  <span className="font-bold text-on-surface">{depTime}</span>
                </div>
                <div className="text-right">
                  <span className="text-outline uppercase block text-[10px]">Offset Share</span>
                  <span className="font-bold text-secondary">₹{price} / seat</span>
                </div>
              </div>
            </div>
          </section>

          {/* Community Demand Context */}
          <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <Radar className="text-secondary text-base" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Community Status</h3>
              </div>
              <span className="font-mono text-label-sm text-secondary font-bold">ACTIVE CLUSTER</span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {selectedCommunity?.name || 'Selected Community'}
            </span>
            <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
              <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                <span className="font-mono text-label-sm text-outline uppercase">Active Drivers</span>
                <span className="font-headline-lg text-headline-md font-bold text-on-surface mt-0.5">
                  {selectedCommunity?.state?.drivers || 6}
                </span>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                <span className="font-mono text-label-sm text-outline uppercase">Community Rides</span>
                <span className="font-headline-lg text-headline-md font-bold text-secondary mt-0.5">
                  {selectedCommunity?.state?.rides || 10}
                </span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
