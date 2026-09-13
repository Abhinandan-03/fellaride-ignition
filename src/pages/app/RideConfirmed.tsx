import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RideConfirmed() {
  const navigate = useNavigate();
  const [showCalToast, setShowCalToast] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCalendar = () => {
    setShowCalToast(true);
    setTimeout(() => setShowCalToast(false), 4000);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText('fellaride.app/invite/northside-route44');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
{/*  Top Navigation & Reassurance Header Bar  */}
<header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          Confirmed · Seat 1 Reserved
        </span>
<span className="font-mono text-mono text-outline">#FR-84092-NS</span>
</div>
<h1 className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight">
        Ride Confirmed
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
        You're in. Matched with <strong className="text-on-surface font-semibold">Alex Morgan</strong> · Northside Community.
      </p>
</div>
<div className="flex items-center gap-space-sm self-start lg:self-center">
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm" onClick={() => navigate('/app/communities')}>
<span className="material-symbols-outlined text-base">arrow_back</span>
        Back to Community
      </button>
<button
  className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm"
  id="addToCalBtn"
  onClick={handleCalendar}
>
<span className="material-symbols-outlined text-base text-secondary">calendar_add_on</span>
        Add to Calendar
      </button>
<button
  className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors shadow-sm"
  title="Print Transit Pass"
  onClick={() => window.print()}
>
<span className="material-symbols-outlined text-base">print</span>
</button>
</div>
</header>
{/*  Calendar Added Toast (Hidden State)  */}
<div className={`${showCalToast ? 'flex' : 'hidden'} transition-all duration-300 ease-out mb-space-md p-space-sm px-space-md rounded-xl bg-surface-container-lowest shadow-md items-center justify-between`} id="calToast">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="font-label-md text-label-md text-on-surface">Added: Northside → Central District · Today 6:00 PM</span>
</div>
<span className="font-mono text-mono text-outline">Saved</span>
</div>
{/*  Primary 12-Column Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT PANE: Core Confirmation & Verification (7 Columns)  */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
{/*  HERO CONFIRMATION PASS CARD  */}
<section className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden relative">
{/*  Top Status Gradient Stripe  */}
<div className="h-2 bg-gradient-to-r from-secondary via-secondary-container to-secondary-fixed"></div>
<div className="p-space-lg flex flex-col gap-space-lg">
{/*  Card Header / Verification Pill  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Verified Match · Route 44</span>
</div>
<span className="px-space-xs py-0.5 rounded-md bg-surface-container text-on-surface-variant font-mono text-mono">
              ₹0 Fee
            </span>
</div>
{/*  Corridor Destination Vector  */}
<div className="flex flex-col gap-space-xs">
<span className="font-mono text-mono text-outline uppercase tracking-wider">Route</span>
<div className="flex items-baseline gap-space-sm flex-wrap">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Northside Community
              </h2>
<span className="material-symbols-outlined text-secondary text-xl">arrow_forward</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                Central District
              </h2>
</div>
<div className="flex items-center gap-space-sm mt-1">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-md text-label-md">
                Today · 6:00 PM
              </span>
<span className="font-mono text-mono text-secondary font-semibold">
                32 mins · 14.2 km
              </span>
</div>
</div>
{/*  Driver Spotlight Section  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="relative shrink-0">
<div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm shadow-sm">
                  AM
                </div>
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center" title="Identity & Address Verified">
<span className="material-symbols-outlined text-[13px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">Alex Morgan</span>
<span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Driver</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Connector</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate mt-0.5">
                  Northside Community
                </span>
<span className="font-mono text-mono text-secondary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">format_image_left</span>
                  14 rides completed · 100% on-time
                </span>
</div>
</div>
<div className="flex flex-col md:items-end bg-surface-container-lowest md:bg-transparent p-space-sm md:p-0 rounded-lg w-full md:w-auto">
<span className="font-label-sm text-label-sm text-outline uppercase">Vehicle</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Toyota RAV4</span>
<span className="font-mono text-mono text-on-surface-variant">Navy · NS-44</span>
</div>
</div>
{/*  Route Timeline  */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Route Overlap</span>
<span className="font-mono text-mono text-secondary font-semibold bg-surface-container px-2 py-0.5 rounded">
                96% Route Overlap
              </span>
</div>
{/*  Route Graph Visualization  */}
<div className="relative flex items-stretch gap-space-md pt-space-xs">
{/*  Progress Line  */}
<div className="flex flex-col items-center">
<span className="w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-secondary-container/40"></span>
<div className="w-0.5 flex-1 bg-surface-container-highest my-1"></div>
<span className="w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-surface-container"></span>
</div>
{/*  Waypoint Data  */}
<div className="flex-1 flex flex-col justify-between gap-space-md">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Northside Community</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Pickup</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Main Entrance Loop</p>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">6:00 PM</span>
<span className="block font-mono text-mono text-outline">DEPART</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Central District</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Dropoff</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Transit Plaza Bay</p>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">6:32 PM</span>
<span className="block font-mono text-mono text-secondary">ARRIVE</span>
</div>
</div>
</div>
</div>
</div>
{/*  Seat Allocation & Peer Contribution Breakdown  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Reserved Seat</span>
<span className="material-symbols-outlined text-secondary text-base">airline_seat_recline_normal</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Seat 1 · Window</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Confirmed passenger: Kiran</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Fuel Share</span>
<span className="font-mono text-mono text-secondary font-bold">₹0 FEE</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">₹80</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">direct to driver</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight">
                UPI to Alex upon boarding · zero markup
              </span>
</div>
</div>
{/*  Micro Route Synchrony Map Placeholder  */}
<div className="w-full h-44 bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-space-md shadow-sm" data-location="Northside Community Center to Central Transit Hub" style={{ backgroundImage: 'url(\'/route-map.jpg\')' }}>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
<div className="relative z-10 flex items-center justify-between w-full text-surface-bright">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-lg">explore</span>
<span className="font-label-md text-label-md">Direct Route 44 Navigation</span>
</div>
<span className="font-mono text-mono bg-inverse-surface/70 px-2 py-0.5 rounded backdrop-blur-sm">
                Route 44 · Verified Route
              </span>
</div>
</div>
</div>
</section>
{/*  WHY THIS MATCH WORKS  */}
<section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
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
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Same Community</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Both active in Northside.</span>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Exact Route</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Route 44 · 14.2 km shared.</span>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Departure Sync</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Departs 6:00 PM · Zero wait.</span>
</div>
</div>
<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Verified Neighbors</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Verified profiles and trust score.</span>
</div>
</div>
</div>
</section>
</div>
{/*  RIGHT PANE: Community Ripple  */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/*  COMMUNITY IMPACT CARD  */}
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
{/*  Environmental Metric Badge  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">eco</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">2.4 kg CO₂ Saved</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fewer solo trips on Route 44.</span>
</div>
</div>
{/*  Ripple Effect Visual  */}
<div className="flex flex-col gap-space-xs mt-space-xs">
<span className="font-mono text-mono text-outline">Community Ripple</span>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-md">
{/*  Node Flow SVG Diagram  */}
<svg className="w-full h-16" fill="none" viewBox="0 0 360 64" xmlns="http://www.w3.org/2000/svg">
{/*  Node Link Track  */}
<path className="text-surface-container-highest" d="M 40 32 H 180 H 320" stroke="currentColor" strokeDasharray="4 4" strokeLinecap="round" strokeWidth="3"></path>
{/*  Active Flow Vector  */}
<path className="text-secondary" d="M 40 32 H 180" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
{/*  Node 1: Driver  */}
<circle className="fill-primary" cx="40" cy="32" r="14"></circle>
<text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="middle" x="40" y="36">AM</text>
<text className="text-on-surface-variant text-[10px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="40" y="58">Alex (Driver)</text>
{/*  Node 2: Passenger  */}
<circle className="fill-secondary" cx="180" cy="32" r="14"></circle>
<text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="middle" x="180" y="36">YOU</text>
<text className="text-on-surface-variant text-[10px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="180" y="58">Kiran (Seat 1)</text>
{/*  Node 3: Future Neighbor  */}
<circle className="text-outline stroke-2 fill-surface-container-lowest" cx="320" cy="32" r="14" stroke="currentColor"></circle>
<text className="text-outline text-[14px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="320" y="36">+</text>
<text className="text-outline text-[10px]" fill="currentColor" fontFamily="Inter" textAnchor="middle" x="320" y="58">Next Neighbor</text>
</svg>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            1 ride creates new connections and helps activate more seats.
          </p>
</div>
</div>
</div>
{/*  THE REFERRAL MOMENT  */}
<section className="p-space-lg rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl flex flex-col gap-space-md relative overflow-hidden">
{/*  Subtle Ambient Glow  */}
<div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-lg">flare</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">Share</span>
</div>
<span className="font-mono text-mono text-primary-fixed-dim">Northside</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-surface-bright font-bold tracking-tight">
            Know someone traveling this route?
          </h3>
<p className="font-body-md text-body-md text-surface-variant mt-1">
            Invite a neighbor to join. Every shared seat creates recurring connections.
          </p>
</div>
{/*  Interactive Invite Preview Panel  */}
<div className="p-space-md rounded-xl bg-primary-container flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Invite Link</span>
<span className="font-mono text-mono text-secondary-fixed">NORTHSIDE-RTE44</span>
</div>
<div className="flex items-center justify-between bg-surface-container-lowest text-on-surface p-2 rounded-lg gap-2">
<span className="font-mono text-mono truncate select-all pl-1" id="inviteLinkText">
              fellaride.app/invite/northside-route44
            </span>
<button
  className="px-space-md py-1 rounded bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-secondary/90 transition-all flex items-center gap-1 shrink-0"
  id="copyLinkBtn"
  onClick={handleCopy}
>
  <span className="material-symbols-outlined text-sm">{isCopied ? 'check' : 'content_copy'}</span>
  <span id="copyBtnLabel">{isCopied ? 'Copied!' : 'Copy'}</span>
</button>
</div>
</div>
{/*  Action Matrix  */}
<div className="flex flex-col gap-space-xs pt-space-xs">
<button className="w-full py-2.5 px-space-md rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold hover:bg-secondary/90 transition-all flex items-center justify-center gap-space-xs shadow-md">
<span className="material-symbols-outlined text-base">person_add</span>
            Invite Neighbor
          </button>
<Link to="/app/communities" className="w-full py-2 px-space-md rounded-lg bg-transparent hover:bg-primary-container text-surface-bright font-label-md text-label-md text-center transition-colors">
            View Community
          </Link>
</div>
</section>
{/*  Safety Note  */}
<div className="p-space-md rounded-xl bg-surface-container flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-surface-variant text-lg shrink-0 mt-0.5">lock</span>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm font-semibold text-on-surface uppercase">Verified Neighbors</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Zero commercial drivers. Verified members only. Cancel free up to 2 hours before departure.
          </p>
</div>
</div>
</div>
</div>
{/*  Interactive Modal: Invite Neighbor (Hidden by Default)  */}
<div className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm hidden flex items-center justify-center p-space-md" id="shareModal">
<div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">share</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Invite a Neighbor</h4>
</div>
<button className="text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Send a direct link to a neighbor commuting along Route 44.
      </p>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase text-outline">Mobile or Email</label>
<div className="flex gap-2">
<input className="flex-1 px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="neighbor@domain.com" type="text" />
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md">Send</button>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<span className="font-mono text-mono text-on-surface-variant">fellaride.app/invite/northside-route44</span>
<button className="text-secondary font-label-md text-label-md hover:underline">Copy</button>
</div>
<div className="flex justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">Done</button>
</div>
</div>
    </div>
    </div>
  );
}
