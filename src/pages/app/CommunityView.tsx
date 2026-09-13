export default function CommunityView() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none"><div className="flex flex-col flex-1 overflow-y-auto"><div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><img alt="FellaRide Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">v2.4</span></div></div><span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full tracking-wider uppercase">COMMUNITY OS</span></div><nav className="flex-1 px-space-sm py-space-xs flex flex-col gap-space-xs" data-active-classes="bg-primary text-on-primary font-bold"><div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">OVERVIEW</div><a aria-current="page" className="flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all bg-primary text-on-primary font-bold" data-path="command-center" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">dashboard</span>Command Center</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span></a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">DISCOVER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-radar" href="#"><span className="material-symbols-outlined mr-space-sm text-base">radar</span>Community Radar</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="communities" href="#"><span className="material-symbols-outlined mr-space-sm text-base">hub</span>Communities</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">ACTIVATE</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="connectors" href="#"><span className="material-symbols-outlined mr-space-sm text-base">share</span>Connectors</a><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="ghost-demand" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">sensors</span>Ghost Demand</span><span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">LIVE</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="activation" href="#"><span className="material-symbols-outlined mr-space-sm text-base">bolt</span>Activation</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">GROW</div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="butterfly-effect" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">flare</span>Butterfly Effect</span><span className="material-symbols-outlined text-base text-secondary">auto_awesome</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-health" href="#"><span className="material-symbols-outlined mr-space-sm text-base">vital_signs</span>Community Health</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">RIDER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="find-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">travel_explore</span>Find a Ride</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="offer-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">directions_car</span>Offer a Ride</a></nav></div><div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span><span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Demo: Northside Pilot</span></div><button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-base">sync_alt</span></button></div><a className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors" data-path="operator-profile" href="#"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col min-w-0 flex-1"><span className="font-label-md text-label-md text-on-surface truncate">Sarah Chen</span><span className="font-body-sm text-body-sm text-on-surface-variant truncate">Growth Lead</span></div><span className="material-symbols-outlined text-on-surface-variant text-base">tune</span></a></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md"><div className="flex items-center gap-space-md"><img alt="FellaRide Logo" className="h-8 w-auto object-contain hidden lg:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-base text-secondary">location_on</span><span className="font-semibold">Northside Community</span><span className="material-symbols-outlined text-base ml-space-xs">expand_more</span></button><div className="relative flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-base">search</span><input className="w-64 h-9 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search routes, neighbors..." type="text" /></div></div><div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low"><span className="material-symbols-outlined text-base text-secondary">sensors</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface"><strong className="font-semibold">Northside Pilot:</strong> 32 Active · 9 Drivers</span></div><div className="flex items-center gap-space-sm"><button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all"><span className="material-symbols-outlined text-base">radar</span>+ Scan Demand</button><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined text-base">download</span>Export</button><button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-xl">notifications</span><span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">3</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full gap-space-lg">
{/*  Top Navigation & Meta Bar  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs font-telemetry-mono text-telemetry-mono text-outline uppercase tracking-wider">
<span>Communities</span>
<span className="text-outline-variant">/</span>
<span className="text-secondary font-semibold">Northside</span>
</div>
<div className="flex items-baseline gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Northside Community</h1>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant uppercase tracking-wider">Node #NS-408</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Private ride network for verified Northside members.</p>
</div>
{/*  Right Quick Actions & Pill Status  */}
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span>Active</span>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-sm text-secondary">groups</span>
<span>23 members</span>
</div>
<button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-base text-secondary">person_add</span>
<span>Invite</span>
</button>
<a className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg text-secondary font-label-md text-label-md hover:bg-secondary-container/20 transition-colors" data-path="community-health" href="#">
<span>Health</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
</div>
{/*  Hero / Community Identity Banner  */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
{/*  Community Identifier  */}
<div className="flex items-start gap-space-md">
<div className="w-16 h-16 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md shrink-0 shadow-md">
          NC
        </div>
<div className="flex flex-col gap-space-xs">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="font-headline-md text-headline-md text-on-surface">Northside Community</span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-xs">sync_alt</span> Route 44 · Northside ⇄ Central District
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
            Coordinated rides along Route 44. Fills empty seats and offsets fuel costs with zero fee.
          </p>
<div className="flex items-center gap-space-sm mt-space-xs">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[10px]">AM</span>
<span>Activated by <strong>Alex Morgan</strong></span>
<span className="px-1.5 py-0.2 bg-secondary-container text-on-secondary-container rounded font-mono font-semibold">96 Score</span>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-1 rounded-full bg-secondary-container text-on-secondary-container uppercase tracking-wider">Active</span>
</div>
</div>
</div>
{/*  Community Health Score Ring  */}
<div className="flex items-center gap-space-lg bg-surface-container-low p-space-md rounded-xl shrink-0">
<div className="relative w-16 h-16 flex items-center justify-center">
<svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none">82</span>
<span className="font-label-sm text-[8px] text-outline uppercase tracking-wider">/100</span>
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface font-bold">82/100</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px]">Healthy & Growing</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-semibold mt-0.5">18 → 82 Growth</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Participation 88% · Supply 84%</span>
</div>
</div>
</div>
{/*  Macro KPI Stat Strip  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-lg mt-space-lg bg-surface-container-low/50 rounded-lg p-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-base">directions_car</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">8 Drivers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Verified vehicles</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-base text-secondary">person</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">15 Passengers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Active commuters</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-base text-secondary">alt_route</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">14 Rides</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Weekly rides</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-base">replay</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">78% Retention</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Repeat usage</span>
</div>
</div>
</div>
</div>
{/*  Primary Workspace: 2-Column Responsive Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  LEFT COLUMN: Actions & Upcoming Corridor Match Pool (7 of 12)  */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
{/*  Dual Action Banners  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
{/*  Card A: Passenger Intent  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between gap-space-md group hover:shadow-md transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">commute</span> Find a Ride
              </span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Rider</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Northside → Central District around 6 PM.</p>
</div>
<button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all shadow-sm" data-path="find-a-ride">
<span className="material-symbols-outlined text-base">travel_explore</span>
<span>Find a Ride</span>
</button>
</div>
{/*  Card B: Driver Intent  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between gap-space-md group hover:shadow-md transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary">directions_car</span> Offer a Ride
              </span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Driver</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Share empty seats on Route 44. ₹0 fee.</p>
</div>
<button className="w-full flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary/90 transition-all shadow-sm" data-path="offer-a-ride">
<span className="material-symbols-outlined text-base">add_circle</span>
<span>Offer a Ride</span>
</button>
</div>
</div>
{/*  Upcoming Rides Section  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<h2 className="font-headline-md text-headline-md text-on-surface">Upcoming Rides</h2>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
{/*  Filter Tabs  */}
<div className="flex items-center bg-surface-container-low p-1 rounded-lg">
<button className="px-space-sm py-1 rounded font-label-sm text-label-sm bg-surface-container-lowest text-on-surface shadow-xs font-semibold">All (3)</button>
<button className="px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface">Today (2)</button>
<button className="px-space-sm py-1 rounded font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface">Tomorrow (1)</button>
</div>
</div>
{/*  Rides Feed  */}
<div className="flex flex-col gap-space-md">
{/*  RIDE CARD 1: Sam Carter  */}
<div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm transition-all hover:bg-surface-container">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Northside</span>
<span className="material-symbols-outlined text-sm text-outline">arrow_forward</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Central District</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Today · 5:30 PM</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">schedule</span> In 45m
              </span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">SC</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Sam Carter</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-semibold">Driver</span>
<span className="font-label-sm text-label-sm text-outline">· 3 rides</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-xs text-secondary fill-current">star</span>
<span className="font-semibold text-on-surface">4.9</span>
<span>· Honda Civic</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex flex-col items-end">
<div className="flex items-center gap-1">
<span className="font-telemetry-mono text-telemetry-mono font-bold text-secondary" id="seats-sam">3 seats open</span>
<div className="flex gap-0.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
</div>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-outline">₹80</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-secondary hover:text-on-secondary shadow-xs transition-all flex items-center gap-1" data-path="ride-confirmed" id="btn-sam">
<span>Join Ride</span>
</button>
</div>
</div>
</div>
{/*  RIDE CARD 2: Alex Morgan  */}
<div className="relative overflow-hidden rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm shadow-xs transition-all hover:bg-surface-container">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="flex flex-wrap items-center justify-between gap-space-xs pl-2">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Northside</span>
<span className="material-symbols-outlined text-sm text-outline">arrow_forward</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Central District</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-semibold">Today · 6:00 PM</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span> 96% Match
              </span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs pl-2">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs shadow-xs">AM</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Alex Morgan</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-semibold">Connector</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container text-on-surface font-semibold">Driver</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-xs text-secondary fill-current">star</span>
<span className="font-semibold text-on-surface">5.0</span>
<span>· Toyota RAV4</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex flex-col items-end">
<div className="flex items-center gap-1">
<span className="font-telemetry-mono text-telemetry-mono font-bold text-secondary" id="seats-alex">2 seats open</span>
<div className="flex gap-0.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
</div>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-outline">₹80</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 shadow-sm transition-all flex items-center gap-1" data-path="ride-confirmed" id="btn-alex">
<span className="material-symbols-outlined text-sm">airline_seat_recline_normal</span>
<span>Join Ride</span>
</button>
</div>
</div>
</div>
{/*  RIDE CARD 3: Priya Shah  */}
<div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm transition-all hover:bg-surface-container">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Northside</span>
<span className="material-symbols-outlined text-sm text-outline">arrow_forward</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Central District</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Tomorrow · 8:15 AM</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Morning Commute</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">PS</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg text-on-surface">Priya Shah</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface font-semibold">Driver</span>
<span className="font-label-sm text-label-sm text-outline">· 5 rides</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-xs text-secondary fill-current">star</span>
<span className="font-semibold text-on-surface">4.8</span>
<span>· Hyundai Creta</span>
</div>
</div>
</div>
<div className="flex items-center gap-space-md">
<div className="flex flex-col items-end">
<div className="flex items-center gap-1">
<span className="font-telemetry-mono text-telemetry-mono font-bold text-error" id="seats-priya">1 seat left</span>
<div className="flex gap-0.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
</div>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-outline">₹70</span>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-secondary hover:text-on-secondary shadow-xs transition-all flex items-center gap-1" data-path="ride-confirmed" id="btn-priya">
<span>Join Ride</span>
</button>
</div>
</div>
</div>
</div>
{/*  Integrity Guarantee Notice  */}
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-secondary text-base shrink-0">shield_lock</span>
<span>Verified neighbor rides. Direct fuel contribution with ₹0 platform fee.</span>
</div>
</div>
</div>
{/*  RIGHT COLUMN: Growth Cascade, Members & Live Activity (5 of 12)  */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/*  1. Community Growth  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-lg">flare</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Community Growth</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Active</span>
</div>
{/*  Progression Stepper  */}
<div className="relative flex items-center justify-between pt-space-sm pb-space-xs">
<div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-surface-container"></div>
<div className="relative z-10 flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-surface-container text-outline flex items-center justify-center font-telemetry-mono text-xs font-semibold">0</div>
<span className="font-label-sm text-[10px] text-outline uppercase">Start</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-telemetry-mono text-xs font-bold">1</div>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Connector</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-telemetry-mono text-xs font-bold">8</div>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Drivers</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-telemetry-mono text-xs font-bold ring-4 ring-secondary-container shadow-sm animate-bounce">23</div>
<span className="font-label-sm text-[10px] text-secondary font-bold uppercase">Members</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Started with 1 connector (Alex Morgan). 23 active members this week.
        </p>
</div>
{/*  2. Community Members Section  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Members (23)</h3>
<span className="material-symbols-outlined text-outline text-base hover:text-on-surface cursor-pointer">search</span>
</div>
<div className="flex flex-col gap-space-xs max-h-72 overflow-y-auto pr-1">
{/*  Member 1: Alex Morgan  */}
<div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">AM</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Alex Morgan</span>
<span className="font-body-sm text-body-sm text-outline">Connector · Score 96</span>
</div>
</div>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Active</span>
</div>
{/*  Member 2: Sam Carter  */}
<div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">SC</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Sam Carter</span>
<span className="font-body-sm text-body-sm text-outline">Driver · 3 rides</span>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Honda Civic</span>
</div>
{/*  Member 3: Priya Shah  */}
<div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xs">PS</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Priya Shah</span>
<span className="font-body-sm text-body-sm text-outline">Driver · 5 rides</span>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Creta</span>
</div>
{/*  Member 4: Kiran Patel  */}
<div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs">KP</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Kiran Patel</span>
<span className="font-body-sm text-body-sm text-outline">Passenger · 2 rides</span>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">Route 44</span>
</div>
{/*  Member 5: Meera Thomas  */}
<div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-bold text-xs">MT</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Meera Thomas</span>
<span className="font-body-sm text-body-sm text-outline">Passenger · 1 ride</span>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm">New</span>
</div>
{/*  Member 6: Jordan Lee  */}
<div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">JL</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Jordan Lee</span>
<span className="font-body-sm text-body-sm text-outline">Driver · 4 rides</span>
</div>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Flexible</span>
</div>
</div>
</div>
{/*  3. Live Activity Stream  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">sensors</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
</div>
<span className="font-telemetry-mono text-[11px] text-outline">Live</span>
</div>
<div className="flex flex-col gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-xs">bolt</span>
</div>
<div className="flex flex-col">
<p className="font-body-sm text-body-sm text-on-surface"><strong>Alex</strong> activated Northside network</p>
<span className="font-telemetry-mono text-[11px] text-outline">2m ago</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-xs">directions_car</span>
</div>
<div className="flex flex-col">
<p className="font-body-sm text-body-sm text-on-surface"><strong>Sam</strong> offered a ride (3 seats)</p>
<span className="font-telemetry-mono text-[11px] text-outline">8m ago</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-xs">check</span>
</div>
<div className="flex flex-col">
<p className="font-body-sm text-body-sm text-on-surface"><strong>Priya</strong> reserved Seat 1</p>
<span className="font-telemetry-mono text-[11px] text-outline">12m ago</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-xs">group_add</span>
</div>
<div className="flex flex-col">
<p className="font-body-sm text-body-sm text-on-surface"><strong>Kiran</strong> invited 2 neighbors</p>
<span className="font-telemetry-mono text-[11px] text-outline">18m ago</span>
</div>
</div>
</div>
</div>
{/*  4. Trust & Safety  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">verified_user</span> Trust & Safety
        </h3>
<div className="flex flex-col gap-space-xs pt-space-xs">
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
<span>Invite-only private network</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
<span>Verified Northside members</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
<span>Matching routes & departure times</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm">
<span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
<span>₹0 platform markup</span>
</div>
</div>
</div>
</div>
</div>
{/*  Bottom Floating Command Toolbar  */}
<div className="sticky bottom-4 z-30 flex items-center justify-between bg-surface-container-lowest/95 backdrop-blur-md p-space-md rounded-xl shadow-lg mt-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Route 44 · Northside ⇄ Central District</span>
<span className="hidden sm:inline text-outline-variant">•</span>
<span className="hidden sm:inline font-body-sm text-body-sm text-on-surface-variant">3 rides available</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors">
        Invite
      </button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors" data-path="offer-a-ride">
        Offer a Ride
      </button>
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-colors" data-path="find-a-ride">
        Find a Ride
      </button>
</div>
</div>
{/*  MODAL: Invite Members  */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4" id="invite-modal">
<div className="w-full max-w-md bg-surface-container-lowest rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">person_add</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Invite to Northside</h4>
</div>
<button className="text-outline hover:text-on-surface">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Share this link with verified neighbors.</p>
<div className="flex items-center gap-space-xs bg-surface-container-low p-2 rounded-lg">
<input className="bg-transparent text-on-surface font-telemetry-mono text-body-sm w-full outline-none" id="invite-url" readOnly type="text" value="https://fellaride.io/join/northside?token=am96-ns408" />
<button className="px-3 py-1 bg-secondary text-on-secondary rounded text-xs font-semibold shrink-0" id="btn-copy">Copy</button>
</div>
<div className="flex justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">Done</button>
</div>
</div>
</div>
{/*  MODAL: Find a Ride  */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4" id="ride-modal">
<div className="w-full max-w-md bg-surface-container-lowest rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary">travel_explore</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Find a Ride</h4>
</div>
<button className="text-outline hover:text-on-surface">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex flex-col gap-space-sm">
<div>
<label className="font-label-sm text-label-sm text-outline">Pickup</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" type="text" defaultValue="Northside Community" />
</div>
<div>
<label className="font-label-sm text-label-sm text-outline">Destination</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" type="text" defaultValue="Central District" />
</div>
<div>
<label className="font-label-sm text-label-sm text-outline">Schedule</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" type="text" defaultValue="Today around 6:00 PM" />
</div>
</div>
<div className="flex justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">Cancel</button>
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md">Search</button>
</div>
</div>
</div>
{/*  MODAL: Offer a Ride  */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4" id="offer-modal">
<div className="w-full max-w-md bg-surface-container-lowest rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary">directions_car</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Offer a Ride</h4>
</div>
<button className="text-outline hover:text-on-surface">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex flex-col gap-space-sm">
<div>
<label className="font-label-sm text-label-sm text-outline">Origin</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" type="text" defaultValue="Northside Community" />
</div>
<div>
<label className="font-label-sm text-label-sm text-outline">Destination</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" type="text" defaultValue="Central District" />
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<label className="font-label-sm text-label-sm text-outline">Seats</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" max="6" min="1" type="number" defaultValue="3" />
</div>
<div>
<label className="font-label-sm text-label-sm text-outline">Share (₹)</label>
<input className="w-full mt-1 p-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm" type="number" defaultValue="80" />
</div>
</div>
</div>
<div className="flex justify-end gap-space-sm pt-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md">Cancel</button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md">Publish Ride</button>
</div>
</div>
</div>
</div>
</main></div>
    </>
  );
}
