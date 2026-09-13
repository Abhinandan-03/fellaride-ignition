import { useState } from 'react';

export default function CommunityHealthView() {
  const [sortBy, setSortBy] = useState<'health' | 'rides' | 'repeat'>('health');
  const [syncScheduled, setSyncScheduled] = useState(false);
  const [intelExported, setIntelExported] = useState(false);

  const peerClusters = [
    { name: 'Northside', score: 82, drivers: 8, rides: 14, repeat: 78, status: 'HEALTHY', isCurrent: true },
    { name: 'Eastview', score: 68, drivers: 6, rides: 9, repeat: 64, status: 'GROWING', isCurrent: false },
    { name: 'Lakeside', score: 54, drivers: 4, rides: 6, repeat: 51, status: 'EMERGING', isCurrent: false },
    { name: 'West End', score: 41, drivers: 3, rides: 4, repeat: 38, status: 'NEEDS CONNECTOR', isCurrent: false },
  ];

  const sortedClusters = [...peerClusters].sort((a, b) => {
    if (sortBy === 'health') return b.score - a.score;
    if (sortBy === 'rides') return b.rides - a.rides;
    if (sortBy === 'repeat') return b.repeat - a.repeat;
    return 0;
  });

  const handleExportIntel = () => {
    const reportData = {
      cluster: 'Northside Community #NS-404',
      generatedAt: new Date().toISOString(),
      healthIndex: 82,
      status: 'HEALTHY CLUSTER',
      metrics: {
        activeMembers: 23,
        retentionRate: '96%',
        verifiedDrivers: 8,
        activePeakDrivers: '88%',
        regularPassengers: 15,
        synchronizedRides: 14,
        habitualRiders: 18,
        repeatRate: '78%',
        organicReferrals: 21,
        kFactor: 1.4,
        co2AvoidedKg: 126
      },
      watchAreas: [
        'Evening Driver Supply (-4 seats buffer)',
        'Corridor Over-Concentration (82% on Route 44)',
        'New Member Conversion (4 pending first schedule)'
      ]
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `northside_community_health_intel_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setIntelExported(true);
    setTimeout(() => setIntelExported(false), 2500);
  };

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none"><div className="flex flex-col flex-1 overflow-y-auto"><div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><img alt="FellaRide Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">v2.4</span></div></div><span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full tracking-wider uppercase">COMMUNITY OS</span></div><nav className="flex-1 px-space-sm py-space-xs flex flex-col gap-space-xs" data-active-classes="bg-primary text-on-primary font-bold"><div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">OVERVIEW</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="command-center" href="#"><span className="material-symbols-outlined mr-space-sm text-base">dashboard</span>Command Center</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">DISCOVER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-radar" href="#"><span className="material-symbols-outlined mr-space-sm text-base">radar</span>Community Radar</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="communities" href="#"><span className="material-symbols-outlined mr-space-sm text-base">hub</span>Communities</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">ACTIVATE</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="connectors" href="#"><span className="material-symbols-outlined mr-space-sm text-base">share</span>Connectors</a><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="ghost-demand" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">sensors</span>Ghost Demand</span><span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">LIVE</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="activation" href="#"><span className="material-symbols-outlined mr-space-sm text-base">bolt</span>Activation</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">GROW</div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="butterfly-effect" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">flare</span>Butterfly Effect</span><span className="material-symbols-outlined text-base text-secondary">auto_awesome</span></a><a aria-current="page" className="flex items-center px-space-sm py-space-sm rounded-lg transition-all bg-primary text-on-primary font-bold" data-path="community-health" href="#"><span className="material-symbols-outlined mr-space-sm text-base">vital_signs</span>Community Health</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">RIDER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="find-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">travel_explore</span>Find a Ride</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="offer-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">directions_car</span>Offer a Ride</a></nav></div><div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span><span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Demo: Northside</span></div><button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-base">sync_alt</span></button></div><a className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors" data-path="operator-profile" href="#"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col min-w-0 flex-1"><span className="font-label-md text-label-md text-on-surface truncate">Sarah Chen</span><span className="font-body-sm text-body-sm text-on-surface-variant truncate">Growth Lead</span></div><span className="material-symbols-outlined text-on-surface-variant text-base">tune</span></a></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md"><div className="flex items-center gap-space-md"><img alt="FellaRide Logo" className="h-8 w-auto object-contain hidden lg:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" data-path="communities"><span className="material-symbols-outlined text-base text-secondary">location_on</span><span className="font-semibold">Community:</span><span className="text-on-surface-variant">Northside</span><span className="material-symbols-outlined text-base ml-space-xs">expand_more</span></button><div className="relative flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-base">search</span><input className="w-64 h-9 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search members or routes..." type="text" /></div></div><div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low"><span className="material-symbols-outlined text-base text-secondary">sensors</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface"><strong className="font-semibold">Status:</strong> Phase 5/9: ACTIVATE <span className="text-outline-variant">•</span> 1 Connector → 32 Users</span></div><div className="flex items-center gap-space-sm"><button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all" data-path="ghost-demand"><span className="material-symbols-outlined text-base">radar</span>+ Scan Demand</button><button onClick={handleExportIntel} className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined text-base">{intelExported ? 'check' : 'download'}</span>{intelExported ? 'Exported!' : 'Export'}</button><button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-xl">notifications</span><span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">3</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full space-y-space-lg">
{/*  PAGE HEADER & BREADCRUMB  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">GROWTH</span>
<span className="text-outline-variant font-label-sm text-label-sm">•</span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant font-semibold">LIVE HEALTH</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Community Health</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Northside Community · Track the transition from activation to self-sustaining rides.
      </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
{/*  Selector Pill  */}
<div className="flex items-center gap-2 bg-surface-container px-space-md py-2 rounded-lg shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Northside Community</span>
<span className="font-telemetry-mono text-telemetry-mono text-secondary bg-secondary-container/40 px-1.5 py-0.5 rounded font-bold">82/100</span>
</div>
{/*  Butterfly Effect CTA  */}
<a className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-all shadow-sm" data-path="butterfly-effect" href="#">
<span className="material-symbols-outlined text-secondary text-base">flare</span>
<span>View Growth</span>
</a>
{/*  Status Badge  */}
<span className="px-space-md py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-sm flex items-center gap-1.5">
<span className="material-symbols-outlined text-base">verified</span>
<span>Healthy & Growing</span>
</span>
</div>
</div>
{/*  HERO CARD — COMMUNITY HEALTH HERO (DOMINANT VISUAL ANCHOR)  */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg lg:p-space-xl shadow-md relative overflow-hidden">
{/*  Atmospheric subtle gradient accents  */}
<div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-24 w-72 h-72 bg-surface-container-high/40 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-center">
{/*  Left 7 cols: Community info & score display  */}
<div className="xl:col-span-7 flex flex-col space-y-space-md">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-telemetry-mono text-telemetry-mono">Northside Pilot</span>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold tracking-wide uppercase">Healthy & Growing</span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">Updated 2m ago</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
          Northside Community
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Northside has crossed the self-sustaining threshold. Repeat rides and neighbor referrals now sustain daily liquidity without subsidies.
        </p>
{/*  Health State Band Visual  */}
<div className="pt-space-xs">
<div className="flex justify-between items-center mb-1.5">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Health Tiers</span>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">Current: 82/100 · Healthy & Growing</span>
</div>
<div className="grid grid-cols-5 gap-1.5 h-2.5 rounded-full overflow-hidden bg-surface-container">
<div className="bg-surface-variant h-full" title="0–30 Dormant"></div>
<div className="bg-surface-variant h-full" title="31–50 Emerging"></div>
<div className="bg-surface-variant h-full" title="51–70 Growing"></div>
<div className="bg-secondary h-full relative" title="71–85 Healthy">
<span className="absolute -top-1 right-0 w-2 h-4 bg-on-secondary rounded-full shadow-sm"></span>
</div>
<div className="bg-surface-variant h-full" title="86–100 Self-Sustaining"></div>
</div>
<div className="grid grid-cols-5 gap-1.5 pt-1.5 text-center font-telemetry-mono text-[10px] text-on-surface-variant">
<span>0–30 Dormant</span>
<span>31–50 Emerging</span>
<span>51–70 Growing</span>
<span className="text-secondary font-bold">71–85 Healthy [82]</span>
<span>86–100 Autonomous</span>
</div>
</div>
</div>
{/*  Right 5 cols: Massive Score Gauge Visual  */}
<div className="xl:col-span-5 flex flex-col items-center justify-center p-space-md bg-surface-container-low rounded-xl relative">
<div className="relative w-56 h-56 flex items-center justify-center">
{/*  Circular Ring SVG  */}
<svg className="w-56 h-56 -rotate-90 transform" viewBox="0 0 160 160">
{/*  Track  */}
<circle className="text-surface-container" cx="80" cy="80" fill="none" r="68" stroke="currentColor" strokeLinecap="round" strokeWidth="12"></circle>
{/*  Active Progress (82%) -> circumference ~ 427.25, 82% is 350.3  */}
<circle className="text-secondary" cx="80" cy="80" fill="none" r="68" stroke="currentColor" strokeDasharray="427.25" strokeDashoffset="76.9" strokeLinecap="round" strokeWidth="12" style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}></circle>
{/*  Inner Secondary Glow  */}
<circle className="text-secondary-fixed/30" cx="80" cy="80" fill="none" r="54" stroke="currentColor" strokeDasharray="4 4" strokeWidth="2"></circle>
</svg>
{/*  Metric Value in center  */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-telemetry-mono text-label-sm text-outline uppercase tracking-wider">Health</span>
<div className="flex items-baseline gap-1">
<span className="font-display-hero text-display-hero text-on-surface font-bold">82</span>
<span className="font-headline-md text-headline-md text-on-surface-variant">/100</span>
</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold mt-0.5">Healthy & Growing</span>
</div>
</div>
<div className="mt-space-sm text-center">
<p className="font-telemetry-mono text-telemetry-mono text-secondary font-bold text-base">18 → 82</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Self-sustaining threshold crossed</p>
</div>
</div>
</div>
</div>
{/*  HEALTH BREAKDOWN (4 CORE PILLARS)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/*  Pillar 1: Participation  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">groups</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Participation</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">+12%</span>
</div>
<div className="flex items-baseline justify-between pt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">88%</span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">23 / 24 Target</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: '88%' }}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
<span>Participation 88%</span>
</p>
</div>
{/*  Pillar 2: Driver Supply  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">directions_car</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Driver Supply</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">1:2.8 Ratio</span>
</div>
<div className="flex items-baseline justify-between pt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">84%</span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">8 Active Drivers</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: '84%' }}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
<span>Driver Supply 84%</span>
</p>
</div>
{/*  Pillar 3: Ride Activity  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">conversion_path</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Ride Activity</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">14 Rides</span>
</div>
<div className="flex items-baseline justify-between pt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">79%</span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">Active Routes</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: '79%' }}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-sm">hub</span>
<span>Ride Activity 79%</span>
</p>
</div>
{/*  Pillar 4: Repeat Usage  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg">repeat</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">Repeat Usage</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">18 Habitual</span>
</div>
<div className="flex items-baseline justify-between pt-1">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold">78%</span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">48h Return Loop</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{ width: '78%' }}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
<span>Repeat Usage 78%</span>
</p>
</div>
</div>
{/*  LIFECYCLE PROGRESSION (GROWTH VS SUSTAINABILITY)  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Community Lifecycle</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">From cold start to self-sustaining mobility</p>
</div>
<div className="px-space-md py-1 bg-secondary-container text-on-secondary-container font-telemetry-mono text-telemetry-mono rounded-full font-bold self-start sm:self-auto">
        Northside: Stage 4 · Repeat Usage
      </div>
</div>
{/*  Stepped Horizontal Flow  */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-space-sm pt-space-xs">
{/*  Step 1  */}
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between space-y-2 opacity-80">
<div className="flex items-center justify-between">
<span className="font-telemetry-mono text-[10px] text-outline">STAGE 01</span>
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block">Discovered</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Community Radar</span>
</div>
<span className="font-telemetry-mono text-[11px] text-secondary">Identified hub</span>
</div>
{/*  Step 2  */}
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between space-y-2 opacity-80">
<div className="flex items-center justify-between">
<span className="font-telemetry-mono text-[10px] text-outline">STAGE 02</span>
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block">Predicted</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ghost Demand</span>
</div>
<span className="font-telemetry-mono text-[11px] text-secondary">Route 44 routes</span>
</div>
{/*  Step 3  */}
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between space-y-2 opacity-80">
<div className="flex items-center justify-between">
<span className="font-telemetry-mono text-[10px] text-outline">STAGE 03</span>
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block">Activated</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Alex Morgan</span>
</div>
<span className="font-telemetry-mono text-[11px] text-secondary">1 → 32 Users</span>
</div>
{/*  Step 4  */}
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col justify-between space-y-2 opacity-80">
<div className="flex items-center justify-between">
<span className="font-telemetry-mono text-[10px] text-outline">STAGE 04</span>
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block">First Rides</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Initial routes</span>
</div>
<span className="font-telemetry-mono text-[11px] text-secondary">3 Seed rides</span>
</div>
{/*  Step 5 (ACTIVE STEP)  */}
<div className="bg-primary text-on-primary p-space-sm rounded-lg flex flex-col justify-between space-y-2 shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-12 h-12 bg-secondary/30 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="font-telemetry-mono text-[10px] text-secondary-container font-bold">CURRENT</span>
<span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-primary block">Repeat Usage</span>
<span className="font-body-sm text-body-sm text-outline-variant">Northside</span>
</div>
<span className="font-telemetry-mono text-[11px] text-secondary-container font-semibold">18 Habitual pairs</span>
</div>
{/*  Step 6 (NEXT)  */}
<div className="bg-surface-container p-space-sm rounded-lg flex flex-col justify-between space-y-2">
<div className="flex items-center justify-between">
<span className="font-telemetry-mono text-[10px] text-outline">NEXT</span>
<span className="material-symbols-outlined text-outline text-sm">hourglass_empty</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block">Self-Sustaining</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Autonomous</span>
</div>
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Projected at 88/100</span>
</div>
</div>
</div>
{/*  HEALTH TREND PROGRESSION (CHART & MILESTONES)  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Health Trend (0h to 36h)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Real ride matches drove score from 18 to 82</p>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">18 → 82</span>
</div>
</div>
{/*  Inline SVG Sparkline / Trajectory Chart  */}
<div className="w-full bg-surface-container-low p-space-md rounded-xl flex flex-col">
<div className="w-full h-44 relative">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 160">
<defs>
<linearGradient id="scoreGradient" x1="0" x2="0" y1="0" y2="1">
<stop className="text-secondary" offset="0%" stopColor="currentColor" stopOpacity="0.25"></stop>
<stop className="text-secondary" offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
</linearGradient>
</defs>
{/*  Grid lines  */}
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="800" y1="32" y2="32"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="800" y1="80" y2="80"></line>
<line className="text-surface-container" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="800" y1="128" y2="128"></line>
{/*  Area fill  */}
<polygon fill="url(#scoreGradient)" points="50,132 200,108 380,82 560,56 720,32 720,150 50,150"></polygon>
{/*  Line  */}
<polyline className="text-secondary" fill="none" points="50,132 200,108 380,82 560,56 720,32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
{/*  Milestones Points  */}
<circle className="text-secondary" cx="50" cy="132" fill="currentColor" r="5" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-secondary" cx="200" cy="108" fill="currentColor" r="5" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-secondary" cx="380" cy="82" fill="currentColor" r="5" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-secondary" cx="560" cy="56" fill="currentColor" r="5" stroke="currentColor" strokeWidth="3"></circle>
<circle className="text-secondary-fixed" cx="720" cy="32" fill="currentColor" r="6" stroke="currentColor" strokeWidth="3"></circle>
</svg>
{/*  Milestones Data Badges Overlay  */}
<div className="absolute inset-0 flex justify-between px-6 pointer-events-none items-end pb-2">
<div className="flex flex-col items-start -mb-2">
<span className="font-telemetry-mono text-[11px] text-on-surface font-bold">18</span>
<span className="font-telemetry-mono text-[10px] text-outline">0h</span>
</div>
<div className="flex flex-col items-center -mb-2">
<span className="font-telemetry-mono text-[11px] text-on-surface font-bold">34</span>
<span className="font-telemetry-mono text-[10px] text-outline">4h</span>
</div>
<div className="flex flex-col items-center -mb-2">
<span className="font-telemetry-mono text-[11px] text-on-surface font-bold">51</span>
<span className="font-telemetry-mono text-[10px] text-outline">11h</span>
</div>
<div className="flex flex-col items-center -mb-2">
<span className="font-telemetry-mono text-[11px] text-on-surface font-bold">67</span>
<span className="font-telemetry-mono text-[10px] text-outline">20h</span>
</div>
<div className="flex flex-col items-end -mb-2">
<span className="font-telemetry-mono text-[12px] text-secondary font-bold">82</span>
<span className="font-telemetry-mono text-[10px] text-secondary font-semibold">36h</span>
</div>
</div>
</div>
<div className="pt-space-md flex flex-wrap items-center justify-between text-on-surface-variant font-telemetry-mono text-telemetry-mono border-t border-transparent">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-secondary text-sm">trending_up</span>+64 pts in 36 hours (18 → 82)</span>
<span>Key route: Northside → Central District</span>
</div>
</div>
</div>
{/*  ACTIVITY METRICS GRID  */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Active Members</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">23</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">96% retention</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Drivers</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">8</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">88% active</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Passengers</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">15</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">Daily commute</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Rides</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">14</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">This week</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Habitual</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">18</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">78% repeat</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">Referrals</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">21</span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">1.4 multiplier</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm flex flex-col">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">CO₂ Avoided</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">126<span className="text-base font-normal">kg</span></span>
<span className="font-label-sm text-label-sm text-secondary mt-0.5">This week</span>
</div>
</div>
{/*  TWO-COLUMN OPERATIONAL SECTION  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/*  LEFT COLUMN: POSITIVE SIGNALS & WATCH AREAS  */}
<div className="xl:col-span-6 flex flex-col space-y-space-md">
{/*  1. Key Drivers  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<h3 className="font-headline-md text-headline-md text-on-surface">Key Drivers</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold uppercase">4 Factors</span>
</div>
<div className="space-y-space-sm">
{/*  Factor 1  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Driver Availability</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-secondary-container text-on-secondary-container rounded font-semibold">Healthy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                8 active drivers cover weekday peak commute windows (7:30–8:45 AM).
              </p>
</div>
</div>
{/*  Factor 2  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Repeat Rides</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-secondary-container text-on-secondary-container rounded font-semibold">Healthy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                78% of active riders returned within 48 hours for return trips.
              </p>
</div>
</div>
{/*  Factor 3  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Referrals</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-secondary-container text-on-secondary-container rounded font-semibold">Growing</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                21 member referrals expanded the community beyond the initial invite.
              </p>
</div>
</div>
{/*  Factor 4  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Route Density</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-secondary-container text-on-secondary-container rounded font-semibold">Healthy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                High route overlap keeps detours under 3 minutes per passenger.
              </p>
</div>
</div>
</div>
</div>
{/*  2. Watch Areas  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-on-tertiary-container"></span>
<h3 className="font-headline-md text-headline-md text-on-surface">Watch Areas</h3>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded font-bold uppercase">3 Alerts</span>
</div>
<div className="space-y-space-sm">
{/*  Watch 1  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-xl shrink-0 mt-0.5">warning</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Evening Driver Supply</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded font-semibold">Watch</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Saturday 6:00 PM peak tests capacity (-4 seats shortage predicted).
              </p>
</div>
</div>
{/*  Watch 2  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-xl shrink-0 mt-0.5">crisis_alert</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Route Concentration</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded font-semibold">Moderate</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                82% of rides rely on Northside → Central District; feeders need activation.
              </p>
</div>
</div>
{/*  Watch 3  */}
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
<span className="material-symbols-outlined text-on-tertiary-container text-xl shrink-0 mt-0.5">person_add_disabled</span>
<div className="flex flex-col">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">New Member Activation</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed rounded font-semibold">Watch</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                4 registered neighbors have not yet scheduled their first ride.
              </p>
</div>
</div>
</div>
</div>
</div>
{/*  RIGHT COLUMN: OPERATIONAL INTERVENTION & PEER BENCHMARKS  */}
<div className="xl:col-span-6 flex flex-col space-y-space-md">
{/*  1. Recommended Action  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-xl">bolt</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Recommended Action</h3>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">Priority #1</span>
</div>
{/*  Highlighted Card  */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Target</span>
<span className="px-2 py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full">High Priority</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">
            Strengthen Evening Driver Supply
          </h4>
<div className="p-space-sm bg-surface-container-lowest rounded-lg">
<span className="font-telemetry-mono text-[11px] text-on-surface-variant font-semibold block mb-1">GHOST DEMAND</span>
<p className="font-body-sm text-body-sm text-on-surface">
              Predicted <strong className="text-error">-4 to -8 seat shortage</strong> this Saturday at 6:00 PM for the sports festival.
            </p>
</div>
<div className="space-y-1.5 pt-1">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_small</span>
<span className="font-body-sm text-body-sm text-on-surface">Invite 3 vehicle owners along Route 44.</span>
</div>
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">check_small</span>
<span className="font-body-sm text-body-sm text-on-surface">Activate secondary connector David Kim (Score 89).</span>
</div>
</div>
<div className="pt-space-sm flex flex-wrap items-center gap-space-sm">
<button className="px-space-md py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow transition-all flex items-center gap-2" data-path="connectors">
<span>Improve Health</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</button>
<button onClick={() => setSyncScheduled(true)} className={`px-space-md py-2.5 ${syncScheduled ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'} font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5`}>
<span className="material-symbols-outlined text-base">{syncScheduled ? 'check' : 'calendar_month'}</span>
<span>{syncScheduled ? 'Sync Scheduled' : 'Schedule Sync'}</span>
</button>
</div>
</div>
</div>
{/*  2. Peer Cluster Comparison (Portfolio Benchmark Table)  */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Peer Communities</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Regional benchmarks</p>
</div>
{/*  Sort pills  */}
<div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg">
<button onClick={() => setSortBy('health')} className={`px-2 py-0.5 rounded font-telemetry-mono text-[11px] transition-all ${sortBy === 'health' ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>Health</button>
<button onClick={() => setSortBy('rides')} className={`px-2 py-0.5 rounded font-telemetry-mono text-[11px] transition-all ${sortBy === 'rides' ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>Rides</button>
<button onClick={() => setSortBy('repeat')} className={`px-2 py-0.5 rounded font-telemetry-mono text-[11px] transition-all ${sortBy === 'repeat' ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}>Repeat</button>
</div>
</div>
{/*  High-density benchmark table  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-telemetry-mono text-telemetry-mono">
<th className="p-space-sm font-semibold rounded-l-lg">Community</th>
<th className="p-space-sm font-semibold">Health</th>
<th className="p-space-sm font-semibold text-right">Drivers</th>
<th className="p-space-sm font-semibold text-right">Rides</th>
<th className="p-space-sm font-semibold text-right">Repeat</th>
<th className="p-space-sm font-semibold rounded-r-lg">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-transparent font-body-sm text-body-sm">
{sortedClusters.map((cluster) => {
  if (cluster.isCurrent) {
    return (
      <tr key={cluster.name} className="bg-secondary-container/20">
        <td className="p-space-sm font-headline-sm text-headline-sm text-on-surface flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span>{cluster.name}</span>
        </td>
        <td className="p-space-sm font-telemetry-mono text-telemetry-mono font-bold text-secondary">{cluster.score} / 100</td>
        <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-right">{cluster.drivers}</td>
        <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-right">{cluster.rides}</td>
        <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-right font-semibold">{cluster.repeat}%</td>
        <td className="p-space-sm">
          <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[10px] font-bold">HEALTHY</span>
        </td>
      </tr>
    );
  }
  return (
    <tr key={cluster.name} className="hover:bg-surface-container-low transition-colors">
      <td className="p-space-sm font-semibold text-on-surface flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
        <span>{cluster.name}</span>
      </td>
      <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-on-surface">{cluster.score} / 100</td>
      <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-right">{cluster.drivers}</td>
      <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-right">{cluster.rides}</td>
      <td className="p-space-sm font-telemetry-mono text-telemetry-mono text-right">{cluster.repeat}%</td>
      <td className="p-space-sm">
        {cluster.status === 'GROWING' && (
          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-[10px]">GROWING</span>
        )}
        {cluster.status === 'EMERGING' && (
          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[10px]">EMERGING</span>
        )}
        {cluster.status === 'NEEDS CONNECTOR' && (
          <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px]">NEEDS CONNECTOR</span>
        )}
      </td>
    </tr>
  );
})}
</tbody>
</table>
</div>
</div>
</div>
</div>
{/*  BOTTOM ARCHITECTURAL TAKEAWAY  */}
<div className="w-full bg-primary text-on-primary rounded-xl p-space-lg lg:p-space-xl shadow-lg relative overflow-hidden">
{/*  Ambient glowing accents  */}
<div className="absolute -right-16 -bottom-16 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-16 -top-16 w-64 h-64 bg-surface-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
<div className="max-w-3xl space-y-space-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-telemetry-mono text-telemetry-mono text-secondary-container tracking-wider uppercase font-semibold">Principle</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
          "A healthy community is more than a large community."
        </h3>
<p className="font-body-lg text-body-lg text-inverse-primary leading-relaxed">
          Northside grew because neighbors create rides, return for more, and invite others. FellaRide tracks real activity, not vanity signups.
        </p>
</div>
{/*  Strategic loop badge  */}
<div className="flex flex-col items-start md:items-end shrink-0 gap-2">
<div className="p-space-sm bg-surface-container-low/10 backdrop-blur-md rounded-lg flex flex-wrap items-center gap-1.5 font-telemetry-mono text-[11px] text-on-primary">
<span className="text-secondary-fixed font-bold">DISCOVER</span>
<span>→</span>
<span className="text-secondary-fixed font-bold">PREDICT</span>
<span>→</span>
<span className="text-secondary-fixed font-bold">ACTIVATE</span>
<span>→</span>
<span className="text-secondary-fixed font-bold">MATCH</span>
<span>→</span>
<span className="text-secondary-fixed font-bold">GROW</span>
<span>→</span>
<span className="text-secondary-container font-extrabold bg-secondary/40 px-1.5 py-0.5 rounded">SUSTAIN</span>
</div>
<span className="font-telemetry-mono text-[11px] text-inverse-primary">Community Loop</span>
</div>
</div>
</div>
</div>
</main></div>
    </>
  );
}
