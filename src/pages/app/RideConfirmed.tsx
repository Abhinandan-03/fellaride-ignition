import { useState } from 'react';
import { AlignLeft, Armchair, ArrowLeft, ArrowRight, BadgeCheck, CalendarPlus, Check, CheckCircle2, Compass, Copy, Flame, Leaf, Lock, Printer, ShieldCheck, UserPlus } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function RideConfirmed() {
  const navigate = useNavigate();
  const { confirmedRide, rides, selectedCommunity, currentUser } = useApp();
  const [showCalToast, setShowCalToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const activeRide = confirmedRide || rides[0];
  const driverName = activeRide?.driverName || 'Alex Morgan';
  const initials = driverName.split(' ').map((n: string) => n[0]).join('').slice(0, 2);
  const departureTime = activeRide?.departureTime || '6:00 PM';
  const origin = activeRide?.origin || selectedCommunity?.name || 'Community Hub';
  const destination = activeRide?.destination || 'Central District';
  const vehicle = activeRide?.vehicle || 'Toyota RAV4';
  const vehiclePlate = activeRide?.vehiclePlate || 'Navy · Cluster';
  const price = activeRide?.price || activeRide?.pricePerSeat || 80;
  const matchScore = activeRide?.matchScore || 96;
  const isAlex = activeRide?.id === 'ride-1' || driverName.includes('Alex');
  const communityName = selectedCommunity?.name || 'Community Hub';
  const communitySlug = selectedCommunity?.id || 'community';

  const handleCalendar = () => {
    setShowCalToast(true);
    setTimeout(() => setShowCalToast(false), 4000);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(`fellaride.app/invite/${communitySlug}-route`);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Top Navigation & Reassurance Header Bar */}
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Confirmed · Seat 1 Reserved
            </span>
            <span className="font-mono text-mono text-outline">#FR-{communitySlug.slice(0, 6).toUpperCase()}</span>
          </div>
          <h1 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
            Ride Confirmed
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            You're in. Matched with <strong className="text-on-surface font-semibold">{driverName}</strong> · {communityName}.
          </p>
        </div>
        <div className="flex items-center gap-space-sm self-start lg:self-center">
          <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm" onClick={() => navigate('/app/communities')}>
            <ArrowLeft className="text-base" />
            Back to Community
          </button>
          <button
            className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm"
            id="addToCalBtn"
            onClick={handleCalendar}
          >
            <CalendarPlus className="text-base text-secondary" />
            Add to Calendar
          </button>
          <button
            className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shadow-sm"
            title="Print Transit Pass"
            onClick={() => window.print()}
          >
            <Printer className="text-base" />
          </button>
        </div>
      </header>

      {/* Calendar Added Toast (Hidden State) */}
      <div className={`${showCalToast ? 'flex' : 'hidden'} transition-all duration-300 ease-out mb-space-md p-space-sm px-space-md rounded-xl bg-surface-container-lowest shadow-md items-center justify-between`} id="calToast">
        <div className="flex items-center gap-space-sm">
          <CheckCircle2 className="text-secondary text-base" />
          <span className="font-label-md text-label-md text-on-surface">Added: {origin} → {destination} · Today {departureTime}</span>
        </div>
        <span className="font-mono text-mono text-outline">Saved</span>
      </div>

      {/* Primary 12-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* LEFT PANE: Core Confirmation & Verification (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          {/* HERO CONFIRMATION PASS CARD */}
          <section className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden relative">
            <div className="h-2 bg-gradient-to-r from-secondary via-secondary-container to-secondary-fixed"></div>
            <div className="p-space-lg flex flex-col gap-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Verified Match · {communityName}</span>
                </div>
                <span className="px-space-xs py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono text-mono">
                  ₹0 Fee
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono text-mono text-outline uppercase tracking-wider">Route</span>
                <div className="flex items-baseline gap-space-sm flex-wrap">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                    {origin}
                  </h2>
                  <ArrowRight className="text-secondary text-xl" />
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                    {destination}
                  </h2>
                </div>
                <div className="flex items-center gap-space-sm mt-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md">
                    Today · {departureTime}
                  </span>
                  <span className="font-mono text-mono text-secondary font-semibold">
                    Verified Community Route
                  </span>
                </div>
              </div>

              {/* Driver Spotlight Section */}
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm shadow-sm">
                      {initials}
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center" title="Identity & Address Verified">
                      <BadgeCheck className="text-[13px]" />
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">{driverName}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">{activeRide?.driverRole || 'Driver'}</span>
                      {isAlex && <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Connector</span>}
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">
                      {communityName}
                    </span>
                    <span className="font-mono text-mono text-secondary mt-1 flex items-center gap-1">
                      <AlignLeft className="text-xs" />
                      Verified Community Member · 100% on-time
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:items-end bg-surface-container-lowest md:bg-transparent p-space-sm md:p-0 rounded-lg w-full md:w-auto">
                  <span className="font-label-sm text-label-sm text-outline uppercase">Vehicle</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">{vehicle}</span>
                  <span className="font-mono text-mono text-on-surface-variant">{vehiclePlate}</span>
                </div>
              </div>

              {/* Route Timeline */}
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Route Overlap</span>
                  <span className="font-mono text-mono text-secondary font-semibold bg-surface-container px-2 py-0.5 rounded">
                    {matchScore}% Route Overlap
                  </span>
                </div>
                <div className="relative flex items-stretch gap-space-md pt-space-xs">
                  <div className="flex flex-col items-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-secondary-container/40"></span>
                    <div className="w-0.5 flex-1 bg-surface-container-highest my-1"></div>
                    <span className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container"></span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between gap-space-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-lg text-label-lg text-on-surface font-semibold">{origin}</span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Pickup</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Community Meeting Point</p>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{departureTime}</span>
                        <span className="block font-mono text-mono text-outline">DEPART</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-lg text-label-lg text-on-surface font-semibold">{destination}</span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Dropoff</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Central Station Hub</p>
                      </div>
                      <div className="text-right">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Arrival</span>
                        <span className="block font-mono text-mono text-secondary">ESTIMATED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seat Allocation & Peer Contribution Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Reserved Seat</span>
                    <Armchair className="text-secondary text-base" />
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Seat 1 · Window</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Confirmed passenger: {currentUser?.name || 'You'}</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Fuel Share</span>
                    <span className="font-mono text-mono text-secondary font-bold">₹0 FEE</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-md text-headline-md text-on-surface font-bold">₹{price}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">direct to driver</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
                    UPI to {driverName.split(' ')[0]} upon boarding · zero markup
                  </span>
                </div>
              </div>

              {/* Micro Route Synchrony Map Placeholder */}
              <div className="w-full h-44 bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-space-md shadow-sm" data-location={`${origin} to ${destination}`} style={{ backgroundImage: 'url(\'/route-map.jpg\')' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
                <div className="relative z-10 flex items-center justify-between w-full text-surface-bright">
                  <div className="flex items-center gap-2">
                    <Compass className="text-secondary-fixed text-lg" />
                    <span className="font-label-md text-label-md">{origin} → {destination}</span>
                  </div>
                  <span className="font-mono text-mono bg-inverse-surface/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    {communityName} · Verified
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* WHY THIS MATCH WORKS */}
          <section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <ShieldCheck className="text-secondary text-xl" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Why This Match Works
                </h3>
              </div>
              <span className="font-mono text-mono text-secondary font-bold">96% Match</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Matched on community connection and direct corridor overlap.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-label-md text-label-md text-on-surface block font-semibold">Same Community</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Both active in {communityName}.</span>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-label-md text-label-md text-on-surface block font-semibold">Exact Route</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{origin} → {destination}</span>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-label-md text-label-md text-on-surface block font-semibold">Departure Sync</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Departs {departureTime} · Zero wait.</span>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                <CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
                <div>
                  <span className="font-label-md text-label-md text-on-surface block font-semibold">Verified Neighbors</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Verified profiles and trust score.</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT PANE: Community Ripple */}
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          {/* COMMUNITY IMPACT CARD */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Community Impact</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                Active
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
              Your Ride Helps the Network Grow
            </h3>
            {/* Environmental Metric Badge */}
            <div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <Leaf className="text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">2.4 kg CO₂ Saved</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Fewer solo trips in {communityName}.</span>
              </div>
            </div>
            {/* Ripple Effect Visual */}
            <div className="flex flex-col gap-space-xs mt-space-xs">
              <span className="font-mono text-mono text-outline">Community Ripple</span>
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-md">
                <svg className="w-full h-16" fill="none" viewBox="0 0 360 64" xmlns="http://www.w3.org/2000/svg">
                  <path className="text-surface-container-highest" d="M 40 32 H 180 H 320" stroke="currentColor" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="3"></path>
                  <path className="text-secondary" d="M 40 32 H 180" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                  <circle className="fill-primary" cx="40" cy="32" r="14"></circle>
                  <text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="middle" x="40" y="36">{initials}</text>
                  <text className="text-on-surface-variant text-[10px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="40" y="58">{driverName.split(' ')[0]} (Driver)</text>
                  <circle className="fill-secondary" cx="180" cy="32" r="14"></circle>
                  <text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="middle" x="180" y="36">YOU</text>
                  <text className="text-on-surface-variant text-[10px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="180" y="58">{currentUser?.name?.split(' ')[0] || 'You'}</text>
                  <circle className="text-outline stroke-2 fill-surface-container-lowest" cx="320" cy="32" r="14" stroke="currentColor"></circle>
                  <text className="text-outline text-[14px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="320" y="36">+</text>
                  <text className="text-outline text-[10px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="320" y="58">Next Neighbor</text>
                </svg>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  1 ride creates new connections and helps activate more seats in {communityName}.
                </p>
              </div>
            </div>
          </div>

          {/* THE REFERRAL MOMENT */}
          <section className="p-space-lg rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl flex flex-col gap-space-md relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="text-secondary-fixed text-lg" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">Share</span>
              </div>
              <span className="font-mono text-mono text-primary-fixed-dim">{communityName}</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-surface-bright font-bold tracking-tight">
                Know someone traveling this route?
              </h3>
              <p className="font-body-md text-body-md text-surface-variant mt-1">
                Invite a neighbor to join. Every shared seat creates recurring connections.
              </p>
            </div>
            {/* Interactive Invite Preview Panel */}
            <div className="p-space-md rounded-xl bg-primary-container flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Invite Link</span>
                <span className="font-mono text-mono text-secondary-fixed">COMMUNITY-INVITE</span>
              </div>
              <div className="flex items-center justify-between bg-surface-container-lowest text-on-surface p-2 rounded-lg gap-2">
                <span className="font-mono text-mono truncate select-all pl-1" id="inviteLinkText">
                  fellaride.app/invite/{communitySlug}-route
                </span>
                <button
                  className="px-space-md py-1 rounded bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-secondary/90 transition-all flex items-center gap-1 shrink-0"
                  id="copyLinkBtn"
                  onClick={handleCopy}
                >
                  {isCopied ? <Check className="text-sm" /> : <Copy className="text-sm" />}
                  <span id="copyBtnLabel">{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
            {/* Action Matrix */}
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <button className="w-full py-2.5 px-space-md rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold hover:bg-secondary/90 transition-all flex items-center justify-center gap-space-xs shadow-md">
                <UserPlus className="text-base" />
                Invite Neighbor
              </button>
              <Link to="/app/communities" className="w-full py-2 px-space-md rounded-lg bg-transparent hover:bg-primary-container text-surface-bright font-label-md text-label-md text-center transition-colors">
                View Communities
              </Link>
            </div>
          </section>

          {/* Safety Note */}
          <div className="p-space-md rounded-xl bg-surface-container flex items-start gap-space-sm">
            <Lock className="text-on-surface-variant text-lg shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="font-label-sm text-label-sm font-semibold text-on-surface uppercase">Verified Neighbors</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Zero commercial drivers. Verified members only. Cancel free up to 2 hours before departure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
