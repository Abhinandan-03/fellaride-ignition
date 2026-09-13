import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function FindRide() {
  const navigate = useNavigate();
  const { joinRide } = useApp();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleJoinRide = (rideId = 'ride-1') => {
    joinRide(rideId);
    navigate('/app/ride-confirmed');
  };

  return (
    <div className="flex flex-col w-full">
<div className="flex flex-col gap-space-lg max-w-7xl mx-auto w-full pb-space-xl">
{/*  Top Metadata & Header Section  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Find a Ride</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Northside Active
          </span>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low font-mono text-mono text-on-surface-variant">
<span className="text-on-surface font-semibold">Northside Community</span>
<span className="text-outline-variant">•</span>
<span>8 Drivers</span>
<span className="text-outline-variant">•</span>
<span>15 Passengers</span>
<span className="text-outline-variant">•</span>
<span className="text-secondary font-semibold">14 Rides</span>
</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
          Northside → Central District · Around 6 PM · 3 matches
        </p>
</div>
{/*  Quick corridor indicators  */}
<div className="flex items-center gap-space-sm self-start lg:self-center">
<div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-base">verified_user</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-outline">Trust</span>
<span className="font-mono text-mono text-on-surface font-semibold">Peer Verified</span>
</div>
</div>
<div className="flex items-center gap-2 px-space-md py-2 rounded-xl bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-base">payments</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-outline">Markup</span>
<span className="font-mono text-mono text-secondary font-semibold">₹0 Fee</span>
</div>
</div>
</div>
</div>
{/*  Main 2-Column Responsive Workspace  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN (~62% Desktop: 7-8 cols equivalent in 12-col)  */}
<div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-space-lg">
{/*  Search Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg">route</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Route & Schedule</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full font-semibold">
              3 Matches
            </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
{/*  Origin  */}
<div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-secondary">radio_button_checked</span>
                Origin
              </span>
<div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-semibold">
<span>Northside Community</span>
</div>
</div>
{/*  Destination  */}
<div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-error">location_on</span>
                Destination
              </span>
<div className="flex items-center gap-2 text-on-surface font-label-lg text-label-lg font-semibold">
<span>Central District</span>
</div>
</div>
{/*  Date  */}
<div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-on-surface-variant">calendar_today</span>
                Date
              </span>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Today (Oct 24)</span>
<span className="text-secondary font-label-sm text-label-sm font-semibold">Active</span>
</div>
</div>
{/*  Time Target  */}
<div className="flex flex-col gap-1 p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-on-surface-variant">schedule</span>
                Time
              </span>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Around 6:00 PM</span>
<span className="font-mono text-mono text-outline">±15 min</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-2 text-outline font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm text-secondary">tune</span>
<span>Route 44 corridor · Minimal detour</span>
</div>
<button
  className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-semibold shadow-sm hover:opacity-95 active:scale-[0.98] transition-all"
  id="search-refresh-btn"
  onClick={handleRefresh}
>
  <span className={`material-symbols-outlined text-base ${isRefreshing ? 'animate-spin' : ''}`}>refresh</span>
  Find Rides
</button>
</div>
</div>
{/*  Match Banner  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="flex h-2.5 w-2.5 rounded-full bg-secondary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">3 matches</span>
</div>
<span className="font-mono text-mono text-outline">Updated 2m ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            3 verified Northside neighbors heading along Route 44 around 6:00 PM.
          </p>
<div className="flex items-center gap-space-xs flex-wrap pt-1">
<span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary font-semibold">
              ✓ 96% route match
            </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">
              ✓ ±15m departure
            </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
              ✓ Direct UPI to driver
            </span>
</div>
</div>
{/*  FEATURED: BEST MATCH (Alex Morgan)  */}
<div className="relative bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-bold self-start">
<span className="material-symbols-outlined text-sm">stars</span>
              Best Match
            </div>
<span className="font-mono text-mono text-secondary font-semibold">
              Leaves in 45m
            </span>
</div>
{/*  Driver Profile Snippet  */}
<div className="flex items-start justify-between gap-space-md flex-wrap">
<div className="flex items-center gap-space-md">
<div className="relative">
<div className="w-13 h-13 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold w-12 h-12 shadow-sm">
                  AM
                </div>
<span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined text-xs">verified</span>
</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Alex Morgan</span>
<span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-sm text-label-sm font-semibold">
                    Connector
                  </span>
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
                    Driver
                  </span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mt-0.5">
<span>14 community rides</span>
<span className="text-outline-variant">•</span>
<span className="text-secondary font-medium">96% route match</span>
</div>
</div>
</div>
{/*  Suggested Contribution  */}
<div className="flex flex-col items-start sm:items-end">
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-display-hero text-on-surface tracking-tight font-bold">₹80</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">fuel share</span>
</div>
<span className="font-mono text-mono text-outline">₹0 fee</span>
</div>
</div>
{/*  Route Path Visualizer  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between font-label-sm text-label-sm uppercase text-outline">
<span>Corridor</span>
<span className="text-on-surface font-semibold">Route 44</span>
</div>
<div className="flex items-center gap-2">
<div className="flex flex-col items-center">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="w-0.5 h-6 bg-secondary"></span>
<span className="w-3 h-3 rounded-full bg-primary"></span>
</div>
<div className="flex flex-col justify-between h-12 flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Northside Community</span>
<span className="font-mono text-mono text-on-surface font-semibold">6:00 PM</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface-variant truncate">Central District</span>
<span className="font-mono text-mono text-outline">6:32 PM</span>
</div>
</div>
</div>
</div>
{/*  Capacity & Match Score Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
<div className="flex flex-col gap-1 p-space-sm bg-surface-container rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Seats</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">2 Open Seats</span>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="flex items-center gap-1.5">
{/*  Seat 1 Filled  */}
<div className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center text-on-secondary" title="Seat 1: Driver Alex">
<span className="material-symbols-outlined text-xs">airline_seat_recline_normal</span>
</div>
{/*  Seat 2 Filled  */}
<div className="w-6 h-6 rounded-md bg-secondary flex items-center justify-center text-on-secondary" title="Seat 2: Confirmed Peer">
<span className="material-symbols-outlined text-xs">airline_seat_recline_normal</span>
</div>
{/*  Seat 3 Open  */}
<div className="w-6 h-6 rounded-md bg-surface-container-lowest border-2 border-dashed border-secondary flex items-center justify-center text-secondary" title="Seat 3: Open for You">
<span className="material-symbols-outlined text-xs">add</span>
</div>
{/*  Seat 4 Open  */}
<div className="w-6 h-6 rounded-md bg-surface-container-lowest border-2 border-dashed border-secondary flex items-center justify-center text-secondary" title="Seat 4: Open">
<span className="material-symbols-outlined text-xs">event_seat</span>
</div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant ml-2">Toyota RAV4 • Dark Navy</span>
</div>
</div>
{/*  Route Compatibility Progress  */}
<div className="flex flex-col gap-1 p-space-sm bg-surface-container rounded-lg">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Route Match</span>
<span className="font-mono text-mono text-on-surface font-bold">96% Overlap</span>
</div>
{/*  Score Bar  */}
<div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden mt-2">
<div className="bg-secondary h-full rounded-full" style={{ width: '96%' }}></div>
</div>
<div className="flex items-center justify-between font-mono text-label-sm text-outline mt-1">
<span>Departure sync</span>
<span>Minimal detour (&lt;3 min)</span>
</div>
</div>
</div>
{/*  Card Actions  */}
<div className="flex items-center justify-between pt-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">eco</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Saves 4.2 kg CO₂</span>
</div>
<button
  className="px-space-lg py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-md hover:bg-secondary/90 active:scale-[0.98] transition-all flex items-center gap-2"
  onClick={() => handleJoinRide('ride-1')}
>
<span>Join Ride</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
</div>
</div>
{/*  OTHER MATCHING RIDES  */}
<div className="flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider font-semibold">
            Other Matches
          </span>
{/*  Match 2: Sam Carter  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:shadow-md transition-shadow">
<div className="flex items-center gap-space-md">
<div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-headline-sm text-headline-sm font-semibold">
                SC
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Sam Carter</span>
<span className="px-2 py-0.2 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">Driver</span>
<span className="font-mono text-label-sm text-outline">3 rides</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="font-semibold text-on-surface">5:30 PM</span>
<span>•</span>
<span>Northside → Central District</span>
<span>•</span>
<span className="text-secondary font-medium">91% match</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-space-md">
<div className="flex flex-col items-start sm:items-end">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">₹80</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 seats open</span>
</div>
<button
  className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors"
  onClick={() => handleJoinRide('ride-2')}
>
  Join Ride
</button>
</div>
</div>
{/*  Match 3: Priya Shah (Urgency badge)  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:shadow-md transition-shadow">
<div className="flex items-center gap-space-md">
<div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface font-headline-sm text-headline-sm font-semibold">
                PS
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Priya Shah</span>
<span className="px-2 py-0.2 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Driver</span>
<span className="font-mono text-label-sm text-outline">5 rides</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span className="font-semibold text-on-surface">6:15 PM</span>
<span>•</span>
<span>Northside → Central District</span>
<span>•</span>
<span className="text-secondary font-medium">88% match</span>
</div>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-space-md">
<div className="flex flex-col items-start sm:items-end">
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">₹80</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold animate-pulse">
                    1 seat left
                  </span>
</div>
<span className="font-label-sm text-label-sm text-outline">Hyundai Creta</span>
</div>
<button
  className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors"
  onClick={() => handleJoinRide('ride-3')}
>
  Join Ride
</button>
</div>
</div>
</div>
{/*  Community Corridor Live Pulse Note  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">sensors</span>
<span>4 more neighbors seeking rides to Central District between 6–7 PM.</span>
</div>
<Link to="/app/ghost-demand" className="text-secondary font-label-sm text-label-sm font-bold hover:underline shrink-0">View Demand</Link>
</div>
</div>
{/*  RIGHT COLUMN (~38% Desktop: 5 cols equivalent in 12-col)  */}
<div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-space-lg">
{/*  Match Intelligence Panel  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-xl">psychology</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Why Alex?</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-bold">
              96% Match
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            High route overlap and verified community trust.
          </p>
{/*  Clear Explainable Signals  */}
<div className="flex flex-col gap-2">
<div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Same Community</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Both active in Northside.</span>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Exact Route</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Direct Central District dropoff.</span>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Departure Sync</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Leaves around 6:00 PM.</span>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">96% Route Overlap</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Only 300m pickup walk along Route 44.</span>
</div>
</div>
</div>
{/*  Corridor Overlap Visual Diagram  */}
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col gap-2">
<span className="font-label-sm text-label-sm uppercase text-outline font-semibold">Route Overlap</span>
<div className="flex flex-col gap-1 font-mono text-label-sm">
<div className="flex items-center justify-between text-on-surface">
<span>Your path:</span>
<span className="font-bold">Northside → Central</span>
</div>
<div className="flex items-center justify-between text-secondary">
<span>Alex's path:</span>
<span className="font-bold">Northside → Central</span>
</div>
</div>
{/*  Overlap Bar  */}
<div className="relative w-full h-3 bg-surface-container-high rounded-full overflow-hidden mt-1">
<div className="absolute left-0 top-0 bottom-0 bg-secondary rounded-full" style={{ width: '96%' }}></div>
</div>
<div className="flex justify-between items-center font-mono text-label-sm text-on-surface-variant">
<span>Overlap: 96%</span>
<span>Detour: &lt; 3 mins</span>
</div>
</div>
</div>
{/*  Community Trust & Provenance Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-xl">shield</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Community Trust</h3>
</div>
<span className="font-mono text-mono text-secondary font-bold">Score 96/100</span>
</div>
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-low">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
              AM
            </div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Alex Morgan</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Northside Community</span>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm text-center">
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface font-bold">14 / 14</span>
<span className="font-label-sm text-label-sm text-outline uppercase">5-Star Check-ins</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
<span className="font-headline-md text-headline-md text-secondary font-bold">100%</span>
<span className="font-label-sm text-label-sm text-outline uppercase">On-Time</span>
</div>
</div>
<div className="flex items-start gap-2 p-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-base shrink-0">groups</span>
<p>
<strong>Verified neighbors:</strong> Every ride is coordinated with peers from registered community hubs.
            </p>
</div>
</div>
{/*  Interactive Ride Confirmation Box / Booking Preview  */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col gap-space-md" id="confirmation-card">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider" id="booking-badge">
              Ready to Join
            </span>
<span className="font-mono text-mono text-outline">Selected Match</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold" id="selected-driver-name">Alex Morgan</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold" id="selected-cost">₹80</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant" id="selected-vehicle">Toyota RAV4 · Dark Navy</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex items-start justify-between">
<span className="text-outline">Pickup:</span>
<span className="font-semibold text-on-surface text-right" id="selected-pickup">Northside Community</span>
</div>
<div className="flex items-start justify-between">
<span className="text-outline">Dropoff:</span>
<span className="font-semibold text-on-surface text-right" id="selected-dropoff">Central District</span>
</div>
<div className="flex items-start justify-between">
<span className="text-outline">Schedule:</span>
<span className="font-semibold text-secondary text-right" id="selected-time">Today · 6:00 PM</span>
</div>
</div>
{/*  Confirmed Alert State (Hidden by default, toggled upon confirm)  */}
<div className="hidden p-space-sm rounded-lg bg-secondary/15 text-secondary flex items-center gap-2 font-label-md text-label-md" id="confirmed-state-msg">
<span className="material-symbols-outlined text-base">check_circle</span>
<span>Ride confirmed with Alex Morgan.</span>
</div>
{/*  Action Buttons  */}
<div className="flex flex-col gap-2 pt-1">
<button
  className="w-full py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold shadow-md hover:bg-secondary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
  id="confirm-ride-btn"
  onClick={() => handleJoinRide('ride-1')}
>
<span>Join Ride</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
{/*  Viral Growth Trigger  */}
<button className="w-full py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-base text-secondary">share</span>
<span>Share with Neighbor</span>
</button>
</div>
            <span className="font-mono text-label-sm text-outline text-center">Direct driver contribution via UPI upon boarding.</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


