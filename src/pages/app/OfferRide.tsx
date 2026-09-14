import { useState } from 'react';
import { ArrowLeft, Armchair, BadgeCheck, Calendar, Car, Check, CheckCircle2, CircleDot, Clock, Eye, GitBranch, Info, Leaf, MapPin, Minus, Network, Plus, Radar, RefreshCw, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function OfferRide() {
  const navigate = useNavigate();
  const { offerRide, community } = useApp();

  const [routeType, setRouteType] = useState<'routine' | 'one-time'>('routine');
  const [depTime, setDepTime] = useState('6:00 PM');
  const [isSuggestedTimeApplied, setIsSuggestedTimeApplied] = useState(false);
  const [seats, setSeats] = useState(3);
  const [price, setPrice] = useState(80);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handlePublish = () => {
    const validatedDepTime = depTime.trim() || '6:00 PM';
    const validatedSeats = Math.max(1, Math.min(8, seats || 3));
    const validatedPrice = Math.max(0, price || 80);

    setIsPublishing(true);
    offerRide({
      communityId: 'comm-northside',
      origin: 'Northside Community',
      destination: 'Central District',
      departureTime: validatedDepTime,
      availableSeats: validatedSeats,
      totalSeats: validatedSeats,
      pricePerSeat: validatedPrice,
      price: validatedPrice,
      corridorId: 'corridor-rt44'
    });

    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
      setShowToast(true);

      setTimeout(() => {
        navigate('/app/find-ride');
      }, 1200);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full">
{/*  Telemetry Micro Header / Breadcrumb & Status Ribbon  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md border-b border-surface-container mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="font-mono text-mono text-on-surface-variant font-medium tracking-wider">OFFER A RIDE</span>
<span className="text-outline-variant">•</span>
<span className="font-mono text-mono text-secondary font-semibold">NORTHSIDE</span>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        Active
      </span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-mono text-mono">
<Network className="text-secondary text-base" />
<span>Supply: <strong className="font-semibold text-on-surface">{community.state.drivers} Drivers · {community.state.rides} Rides</strong></span>
</div>
<button className="flex items-center gap-space-xs px-space-sm py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" onClick={() => navigate('/app/communities')}>
<ArrowLeft className="text-base" />
        Back to Community
      </button>
</div>
</div>
{/*  Page Header  */}
<section className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
<div className="max-w-2xl">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">Northside → Central District · 6:00 PM · 3 seats</span>
<h1 className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface tracking-tight leading-none mb-space-xs">
        Offer a Ride
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">
        Recommended for predicted demand. Direct fuel offset with zero fee.
      </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<div className="px-space-sm py-space-xs rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
<div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Active Drivers</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">6 on Route 44</span>
</div>
</div>
<div className="px-space-sm py-space-xs rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
<BadgeCheck className="text-base text-secondary" />
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Community</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Northside</span>
</div>
</div>
</div>
</section>
{/*  Two-Column Workspace Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN (Primary Creation Flow: 7/12 desktop ~ 58-60%)  */}
<main className="lg:col-span-7 flex flex-col gap-space-lg">
{/*  1. Route Card  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">01</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Your Route</h2>
</div>
<div className="inline-flex p-0.5 bg-surface-container-low rounded-lg" id="route-type-toggle">
<button
  className={routeType === 'routine' ? "px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-xs" : "px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"}
  type="button"
  onClick={() => setRouteType('routine')}
>Routine Commute</button>
<button
  className={routeType === 'one-time' ? "px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-xs" : "px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm"}
  type="button"
  onClick={() => setRouteType('one-time')}
>One-Time Ride</button>
</div>
</div>
{/*  Visual Origin / Destination Node System  */}
<div className="relative flex flex-col gap-space-md pl-4">
{/*  Geometric Path Guideline  */}
<div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-surface-variant"></div>
{/*  Origin Node  */}
<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 z-10 shadow-xs">
<CircleDot className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<label className="font-label-sm text-label-sm text-outline uppercase block mb-0.5">Origin</label>
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-body-md font-semibold text-on-surface truncate">Northside Community</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Civic Garden Loop</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-mono text-label-sm shrink-0">P-01</span>
</div>
</div>
</div>
{/*  Route Spec Meta Pill  */}
<div className="ml-11 flex items-center gap-space-sm py-0.5">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-label-sm flex items-center gap-1.5">
<GitBranch className="text-xs text-secondary" />
              Route 44 · 14.2 km · Direct Path
            </span>
</div>
{/*  Destination Node  */}
<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 shadow-xs">
<MapPin className="text-[16px]" />
</div>
<div className="flex-1 min-w-0">
<label className="font-label-sm text-label-sm text-outline uppercase block mb-0.5">Destination</label>
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-body-md font-semibold text-on-surface truncate">Central District</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Intermodal Interchange</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-mono text-label-sm shrink-0">D-09</span>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<CheckCircle2 className="text-sm text-secondary" />
            High route overlap with 14 passenger requests
          </span>
<button className="text-secondary font-label-sm text-label-sm hover:underline font-semibold" type="button">Stops</button>
</div>
</section>
{/*  2. Schedule & Smart Suggestion  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">02</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Schedule</h2>
</div>
<span className="font-mono text-mono text-on-surface-variant">ETA: 32 mins</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
{/*  Date Pill Selector  */}
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-outline uppercase mb-space-xs">Date</label>
<div className="px-space-md py-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Calendar className="text-on-surface-variant text-lg" />
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Today (Oct 24)</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-bold">Today</span>
</div>
</div>
{/*  Time Input / Display  */}
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-outline uppercase mb-space-xs">Departure Time</label>
<div className="px-space-md py-2 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<Clock className="text-on-surface-variant text-lg" />
<input
  className="font-headline-sm text-headline-sm text-on-surface font-bold bg-transparent w-24 focus:outline-none"
  id="departure-input"
  type="text"
  value={depTime}
  onChange={(e) => setDepTime(e.target.value)}
/>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Arrives 6:32 PM</span>
</div>
</div>
</div>
{/*  Ghost Demand Suggestion Banner  */}
<div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<Sparkles className="text-secondary text-base" />
<span className="font-label-md text-label-md font-bold text-on-surface">Peak Demand · 6:00 PM</span>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
              25 shortage
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            37 predicted passengers seeking departures along Route 44 between 5:45 and 6:15 PM.
          </p>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-md text-mono text-mono text-on-surface">
<span><strong className="font-bold text-secondary">37</strong> predicted</span>
<span className="text-outline-variant">•</span>
<span><strong className="font-bold text-error">25</strong> shortage</span>
<span className="text-outline-variant">•</span>
<span><strong className="font-bold">6</strong> drivers</span>
</div>
<button
  className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold hover:bg-secondary hover:text-on-secondary transition-colors shadow-xs flex items-center gap-1"
  id="apply-suggested-time"
  type="button"
  onClick={() => {
    setDepTime('6:00 PM');
    setIsSuggestedTimeApplied(true);
  }}
>
  {isSuggestedTimeApplied ? (
    <>
      <Check className="text-xs text-secondary" /> Applied Peak Sync
    </>
  ) : (
    <>
      <Zap className="text-xs text-secondary" /> Use Peak (6:00 PM)
    </>
  )}
</button>
</div>
</div>
</section>
{/*  3. Available Seats & Vehicle Configuration  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">03</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Available Seats</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Toyota RAV4 · Silver</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface mb-0.5">Seats to share</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Recommended 3 seats for comfort.</span>
</div>
{/*  Segmented Control for Seats  */}
<div className="flex items-center p-1 bg-surface-container-low rounded-xl gap-1" id="seats-selector">
  {[1, 2, 3].map((num) => (
    <button
      key={num}
      className={seats === num ? "seat-btn active px-4 py-2 rounded-lg font-label-lg text-label-lg font-bold bg-primary text-on-primary shadow-sm transition-all" : "seat-btn px-4 py-2 rounded-lg font-label-lg text-label-lg font-semibold text-on-surface-variant hover:text-on-surface transition-all"}
      data-seats={num}
      type="button"
      onClick={() => setSeats(num)}
    >
      {num} {num === 1 ? 'Seat' : 'Seats'}
    </button>
  ))}
</div>
</div>
{/*  Cabin Visualization Scheme  */}
<div className="mt-space-md p-space-md rounded-lg bg-surface-container-low flex items-center justify-between flex-wrap gap-space-md">
<div className="flex items-center gap-space-md">
<div className="flex flex-col items-center">
<Armchair className="text-on-surface text-xl" />
<span className="font-label-sm text-label-sm text-outline mt-0.5">Driver (You)</span>
</div>
<div className="w-px h-8 bg-surface-container-high"></div>
<div className="flex items-center gap-space-sm" id="seat-graphic-group">
  {[1, 2, 3].map((num) => {
    const active = num <= seats;
    return (
      <div key={num} className={`flex flex-col items-center seat-token ${active ? 'active' : ''}`} style={{ opacity: active ? 1 : 0.35 }}>
        <Armchair className={`${active ? 'text-secondary' : 'text-outline'} text-xl`} />
        <span className={`font-label-sm text-label-sm ${active ? 'text-secondary font-bold' : 'text-outline'} mt-0.5`}>Seat {num}</span>
      </div>
    );
  })}
</div>
</div>
<span className="font-mono text-mono text-secondary font-semibold flex items-center gap-1">
<ShieldCheck className="text-sm" />
            Verified
          </span>
</div>
</section>
{/*  4. Fair Fuel Contribution  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-mono text-label-sm font-bold">04</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Fuel Share</h2>
</div>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase">
            ₹0 Fee
          </span>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg mb-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface font-bold tracking-tight" id="price-display">₹{price}</span>
<span className="font-body-md text-body-md text-on-surface-variant">/ seat</span>
</div>
{/*  Fine Adjust Stepper  */}
<div className="flex items-center gap-space-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant mr-1">Adjust:</span>
<button
  className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
  id="price-minus"
  type="button"
  onClick={() => setPrice(p => Math.max(20, p - 10))}
>
<Minus className="text-lg" />
</button>
<button
  className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors"
  id="price-plus"
  type="button"
  onClick={() => setPrice(p => Math.min(150, p + 10))}
>
<Plus className="text-lg" />
</button>
<button
  className="text-secondary hover:underline font-label-sm text-label-sm font-semibold ml-space-xs"
  id="price-reset"
  type="button"
  onClick={() => setPrice(80)}
>
              Reset
            </button>
</div>
</div>
{/*  Municipal Transparency Notice  */}
<div className="p-space-md rounded-lg bg-surface-container-low text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
<Info className="text-base text-secondary" />
            Cost Sharing
          </div>
<p>
            ₹80 covers exact fuel across 14.2 km along Route 44. FellaRide charges <strong>₹0 fee</strong>.
          </p>
</div>
</section>
{/*  5. Form Actions  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Ready to publish?</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Your ride will appear on the Northside schedule immediately.</span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-initial px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg font-semibold transition-all" type="button">
              Draft
            </button>
<button
  className={`flex-1 sm:flex-initial px-space-xl py-2.5 rounded-lg font-label-lg text-label-lg font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
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
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Corridor update:</span>
</div>
<span className="font-mono text-mono text-secondary font-bold">
            8 → 9 Drivers · 14 → 15 Rides
          </span>
</div>
</section>
</main>
{/*  RIGHT COLUMN (Sticky Live Preview & Demand Intelligence: 5/12 desktop ~ 40%)  */}
<aside className="lg:col-span-5 flex flex-col gap-space-lg sticky top-20">
{/*  1. Live Ride Preview Card  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<Eye className="text-secondary text-base" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ride Preview</h3>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold uppercase">
            Preview
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          How Northside neighbors see your ride:
        </p>
{/*  Preview Card Rendering  */}
<div className="rounded-xl bg-surface p-space-md shadow-xs flex flex-col gap-space-sm">
{/*  Card Header & Driver  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-label-md">
                SC
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Sarah Chen</span>
<BadgeCheck className="text-secondary text-sm" />
</div>
<span className="font-mono text-label-sm text-on-surface-variant">Northside · 4.98 ★</span>
</div>
</div>
<span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold" id="preview-seat-badge">
  {seats} {seats === 1 ? 'Seat Open' : 'Seats Open'}
</span>
</div>
{/*  Route Spec  */}
<div className="py-space-xs flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Northside Community</span>
</div>
<div className="w-0.5 h-3 bg-outline-variant ml-1"></div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Central District</span>
</div>
</div>
{/*  Schedule & Cost Info Row  */}
<div className="pt-space-xs border-t border-surface-container flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase">Departs</span>
<span className="font-label-md text-label-md font-bold text-on-surface" id="preview-time">Today · {depTime}</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-outline uppercase">Share</span>
<span className="font-label-md text-label-md font-bold text-secondary" id="preview-price">₹{price} / seat</span>
</div>
</div>
{/*  Corridor Route Fit & Pickup note  */}
<div className="px-space-sm py-1 rounded bg-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant font-mono">
<span className="flex items-center gap-1 text-secondary font-semibold">
<RefreshCw className="text-xs" />
              100% Route Overlap
            </span>
<span>Pickup: Civic Garden</span>
</div>
</div>
</section>
{/*  2. Corridor Demand Context  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<Radar className="text-secondary text-base" />
<h3 className="font-headline-sm text-headline-sm text-on-surface">Corridor Demand</h3>
</div>
<span className="font-mono text-label-sm text-secondary font-bold">RT-44</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Northside ⇄ Central District
</span>
{/*  Metric Cluster  */}
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-mono text-label-sm text-outline uppercase">Ghost Demand</span>
<span className="font-headline-lg text-headline-md font-bold text-on-surface mt-0.5">37</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Passengers</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-mono text-label-sm text-outline uppercase">Shortage</span>
<span className="font-headline-lg text-headline-md font-bold text-error mt-0.5">25</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Seats needed</span>
</div>
</div>
{/*  Density Heat Indicator  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">High Demand</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Match time &lt; 4 mins</span>
</div>
</div>
<TrendingUp className="text-secondary text-lg" />
</div>
</section>
{/*  3. Community Impact Card  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
<Leaf className="text-secondary text-base" />
          Community Impact
        </h3>
<ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-start gap-space-sm">
<CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
<span>Helps <strong>3 neighbors</strong> commute easily.</span>
</li>
<li className="flex items-start gap-space-sm">
<CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
<span>Fills empty seats on Route 44.</span>
</li>
<li className="flex items-start gap-space-sm">
<CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
<span>Community Health increases <strong>81 → 84/100</strong>.</span>
</li>
<li className="flex items-start gap-space-sm">
<CheckCircle2 className="text-secondary text-base shrink-0 mt-0.5" />
<span><strong>7.2 kg CO₂</strong> saved.</span>
</li>
</ul>
</section>
{/*  Dynamic Micro Feedback Notice / Banner  */}
<div className={`${showToast ? 'block' : 'hidden'} rounded-xl bg-primary text-on-primary p-space-md shadow-lg transition-all duration-300`} id="publish-toast">
<div className="flex items-center gap-space-sm">
<CheckCircle2 className="text-secondary-fixed text-xl" />
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold">Ride Published</span>
<span className="font-body-sm text-body-sm text-on-primary-container">3 seats now open to Northside neighbors.</span>
</div>
</div>
</div>
</aside>
</div>
</div>
  );
}
