import { useEffect } from 'react';

export default function ButterflyEffect() {
  useEffect(() => {
    const waveData = [
      {
        wave: 0,
        label: "Wave 0 · 1 Connector (0h)",
        ratio: "1 → 1",
        members: 1,
        drivers: 0,
        passengers: 0,
        rides: 0,
      },
      {
        wave: 1,
        label: "Wave 1 · 3 Invites (4h)",
        ratio: "1 → 4",
        members: 4,
        drivers: 1,
        passengers: 2,
        rides: 1,
      },
      {
        wave: 2,
        label: "Wave 2 · 8 Members (11h)",
        ratio: "1 → 11",
        members: 11,
        drivers: 3,
        passengers: 6,
        rides: 5,
      },
      {
        wave: 3,
        label: "Wave 3 · 17 Members (20h)",
        ratio: "1 → 20",
        members: 20,
        drivers: 6,
        passengers: 11,
        rides: 9,
      },
      {
        wave: 4,
        label: "Wave 4 · 32 Members (36h)",
        ratio: "1 → 32",
        members: 32,
        drivers: 9,
        passengers: 18,
        rides: 14,
      }
    ];

    let replayInterval: any = null;

    const waveStatus = document.getElementById('waveCurrentStatus');
    const heroRatioCounter = document.getElementById('heroRatioCounter');
    const metricMembers = document.getElementById('metricMembers');
    const metricDrivers = document.getElementById('metricDrivers');
    const metricPassengers = document.getElementById('metricPassengers');
    const metricRides = document.getElementById('metricRides');

    const svgLinksWave1 = document.getElementById('svgLinksWave1');
    const svgLinksWave2 = document.getElementById('svgLinksWave2');
    const svgLinksWave3 = document.getElementById('svgLinksWave3');
    const svgLinksWave4 = document.getElementById('svgLinksWave4');

    const waveNodes1 = document.getElementById('waveNodes1');
    const waveNodes2 = document.getElementById('waveNodes2');
    const waveNodes34 = document.getElementById('waveNodes34');

    const tabButtons = document.querySelectorAll('.wave-tab-btn');
    const replayBtn = document.getElementById('replayBtn');

    const tooltip = document.getElementById('nodeTooltip');
    const tooltipName = document.getElementById('tooltipName');
    const tooltipScore = document.getElementById('tooltipScore');
    const tooltipRole = document.getElementById('tooltipRole');
    const tooltipInvited = document.getElementById('tooltipInvited');
    const tooltipRides = document.getElementById('tooltipRides');
    const tooltipCorridor = document.getElementById('tooltipCorridor');
    const graphContainer = document.getElementById('graphContainer');

    function toggleNodeGroup(container: Element | null, isVisible: boolean) {
      if (!container) return;
      const nodes = container.querySelectorAll('.graph-node');
      nodes.forEach((node) => {
        const el = node as HTMLElement;
        if (isVisible) {
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
          el.style.transform = 'translate(-50%, -50%) scale(1)';
        } else {
          el.style.opacity = '0.08';
          el.style.pointerEvents = 'none';
          el.style.transform = 'translate(-50%, -50%) scale(0.6)';
        }
      });
    }

    function applyWave(index: number) {
      const data = waveData[index];
      if (!data) return;

      if (waveStatus) waveStatus.textContent = data.label;
      if (heroRatioCounter) heroRatioCounter.textContent = data.ratio;
      if (metricMembers) metricMembers.textContent = String(data.members);
      if (metricDrivers) metricDrivers.textContent = String(data.drivers);
      if (metricPassengers) metricPassengers.textContent = String(data.passengers);
      if (metricRides) metricRides.textContent = String(data.rides);

      tabButtons.forEach(btn => {
        const btnWave = parseInt(btn.getAttribute('data-wave') || '-1');
        if (btnWave === index) {
          btn.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm');
          btn.classList.remove('bg-transparent', 'text-on-surface-variant');
        } else {
          btn.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm');
          btn.classList.add('bg-transparent', 'text-on-surface-variant');
        }
      });

      if (svgLinksWave1) svgLinksWave1.style.opacity = index >= 1 ? '1' : '0.05';
      if (svgLinksWave2) svgLinksWave2.style.opacity = index >= 2 ? '1' : '0.05';
      if (svgLinksWave3) svgLinksWave3.style.opacity = index >= 3 ? '1' : '0.05';
      if (svgLinksWave4) svgLinksWave4.style.opacity = index >= 4 ? '1' : '0.05';

      toggleNodeGroup(waveNodes1, index >= 1);
      toggleNodeGroup(waveNodes2, index >= 2);
      toggleNodeGroup(waveNodes34, index >= 3);
    }

    const tabListeners: Array<{ btn: Element; handler: () => void }> = [];
    tabButtons.forEach(btn => {
      const handler = () => {
        clearInterval(replayInterval);
        const wave = parseInt(btn.getAttribute('data-wave') || '4');
        applyWave(wave);
      };
      btn.addEventListener('click', handler);
      tabListeners.push({ btn, handler });
    });

    const handleReplay = () => {
      clearInterval(replayInterval);
      let step = 0;
      applyWave(step);
      replayInterval = setInterval(() => {
        step++;
        if (step > 4) {
          clearInterval(replayInterval);
        } else {
          applyWave(step);
        }
      }, 850);
    };
    replayBtn?.addEventListener('click', handleReplay);

    const allNodes = document.querySelectorAll('.graph-node');
    const nodeListeners: Array<{ node: Element; enter: (e: any) => void; leave: () => void }> = [];
    allNodes.forEach(node => {
      const enter = () => {
        const name = node.getAttribute('data-name') || '';
        const role = node.getAttribute('data-role') || '';
        const invited = node.getAttribute('data-invited') || '';
        const rides = node.getAttribute('data-rides') || '';
        const score = node.getAttribute('data-score') || '';
        const corridor = node.getAttribute('data-corridor') || '';

        if (tooltipName) tooltipName.textContent = name;
        if (tooltipRole) tooltipRole.textContent = role;
        if (tooltipInvited) tooltipInvited.textContent = invited;
        if (tooltipRides) tooltipRides.textContent = rides;
        if (tooltipScore) tooltipScore.textContent = 'Score: ' + score;
        if (tooltipCorridor) tooltipCorridor.textContent = corridor;

        if (tooltip && graphContainer) {
          const rect = node.getBoundingClientRect();
          const containerRect = graphContainer.getBoundingClientRect();
          const x = rect.left - containerRect.left + (rect.width / 2);
          const y = rect.top - containerRect.top - 12;

          tooltip.style.left = `${Math.min(Math.max(x - 100, 10), containerRect.width - 220)}px`;
          tooltip.style.top = `${Math.max(y - 140, 10)}px`;
          tooltip.style.opacity = '1';
        }
      };

      const leave = () => {
        if (tooltip) tooltip.style.opacity = '0';
      };

      node.addEventListener('mouseenter', enter);
      node.addEventListener('mouseleave', leave);
      nodeListeners.push({ node, enter, leave });
    });

    applyWave(4);

    return () => {
      clearInterval(replayInterval);
      replayBtn?.removeEventListener('click', handleReplay);
      tabListeners.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      nodeListeners.forEach(({ node, enter, leave }) => {
        node.removeEventListener('mouseenter', enter);
        node.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none"><div className="flex flex-col flex-1 overflow-y-auto"><div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><img alt="FellaRide Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">v2.4</span></div></div><span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full tracking-wider uppercase">COMMUNITY OS</span></div><nav className="flex-1 px-space-sm py-space-xs flex flex-col gap-space-xs" data-active-classes="bg-primary text-on-primary font-bold"><div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">OVERVIEW</div><a aria-current="page" className="flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all bg-primary text-on-primary font-bold" data-path="command-center" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">dashboard</span>Command Center</span><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span></a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">DISCOVER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-radar" href="#"><span className="material-symbols-outlined mr-space-sm text-base">radar</span>Community Radar</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="communities" href="#"><span className="material-symbols-outlined mr-space-sm text-base">hub</span>Communities</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">ACTIVATE</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="connectors" href="#"><span className="material-symbols-outlined mr-space-sm text-base">share</span>Connectors</a><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="ghost-demand" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">sensors</span>Ghost Demand</span><span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">LIVE</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="activation" href="#"><span className="material-symbols-outlined mr-space-sm text-base">bolt</span>Activation</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">GROW</div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="butterfly-effect" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">flare</span>Butterfly Effect</span><span className="material-symbols-outlined text-base text-secondary">auto_awesome</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-health" href="#"><span className="material-symbols-outlined mr-space-sm text-base">vital_signs</span>Community Health</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">RIDER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="find-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">travel_explore</span>Find a Ride</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="offer-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">directions_car</span>Offer a Ride</a></nav></div><div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span><span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Demo: Northside</span></div><button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-base">sync_alt</span></button></div><a className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors" data-path="operator-profile" href="#"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col min-w-0 flex-1"><span className="font-label-md text-label-md text-on-surface truncate">Sarah Chen</span><span className="font-body-sm text-body-sm text-on-surface-variant truncate">Growth Lead</span></div><span className="material-symbols-outlined text-on-surface-variant text-base">tune</span></a></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md"><div className="flex items-center gap-space-md"><img alt="FellaRide Logo" className="h-8 w-auto object-contain hidden lg:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-base text-secondary">location_on</span><span className="font-semibold">Community:</span><span className="text-on-surface-variant">Northside</span><span className="material-symbols-outlined text-base ml-space-xs">expand_more</span></button><div className="relative flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-base">search</span><input className="w-64 h-9 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search members or routes..." type="text" /></div></div><div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low"><span className="material-symbols-outlined text-base text-secondary">sensors</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface"><strong className="font-semibold">Status:</strong> Phase 5/9: ACTIVATE <span className="text-outline-variant">•</span> 1 Connector → 32 Users</span></div><div className="flex items-center gap-space-sm"><button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all"><span className="material-symbols-outlined text-base">radar</span>+ Scan Demand</button><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined text-base">download</span>Export</button><button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-xl">notifications</span><span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">3</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full space-y-space-lg">
{/*  TOP HEADER & CONTROLS  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs mb-1">
<span className="font-telemetry-mono text-telemetry-mono text-outline uppercase tracking-wider">GROWTH</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-semibold">LIVE NETWORK</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Butterfly Effect</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Everything Starts Small.</p>
</div>
<div className="flex items-center gap-space-sm self-start md:self-auto">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
<span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase font-bold">Network Active</span>
</div>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-inverse-surface active:scale-95 transition-all shadow-sm" id="replayBtn">
<span className="material-symbols-outlined text-base text-secondary-container">auto_awesome</span>
<span>Replay Growth</span>
</button>
<a className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" data-path="communities" href="#">
<span className="material-symbols-outlined text-base">hub</span>
<span>View Community</span>
</a>
</div>
</div>
{/*  HERO STATEMENT BANNER  */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="absolute -right-16 -top-16 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wider uppercase mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Northside Pilot</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-2">Everything starts small.</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Alex Morgan sent 1 invite. In 36 hours, it grew into 32 members across 14 rides with zero ad spend.
        </p>
<div className="mt-4 flex flex-wrap items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-semibold">
<span className="material-symbols-outlined text-sm text-secondary">verified</span>
            9 drivers · 18 passengers
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-semibold">
<span className="material-symbols-outlined text-sm text-outline">repeat</span>
            14 rides · 21 referrals
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-semibold">
<span className="material-symbols-outlined text-sm text-outline">payments</span>
            ₹0 Paid ads
          </span>
</div>
</div>
<div className="flex flex-col items-start lg:items-end justify-center min-w-[240px] p-space-md rounded-xl bg-surface-container-low shadow-inner">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">Growth Sequence</span>
<div className="flex items-baseline gap-2">
<span className="font-display-hero text-display-hero text-primary tracking-tight font-bold" id="heroRatioCounter">1 → 32</span>
</div>
<div className="flex items-center gap-1.5 mt-1">
<span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">32 activated</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">1 → 3 → 8 → 17 → 32</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-outline mt-2">Northside Pilot · 4 Waves</span>
</div>
</div>
</div>
{/*  INTERACTIVE TIMELINE SCRUBBER  */}
<div className="flex flex-col gap-space-sm">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">history</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Growth Waves</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-outline" id="waveCurrentStatus">Wave 4 · 32 Members (36h)</span>
</div>
{/*  Wave Tab Selectors  */}
<div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm p-1.5 bg-surface-container-low rounded-xl shadow-sm" id="waveNavButtons">
<button className="wave-tab-btn flex flex-col items-start p-space-sm rounded-lg bg-transparent text-on-surface-variant hover:bg-surface-container-lowest transition-all" data-wave="0">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Wave 0 · 0h</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">1 Person</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Connector</span>
</button>
<button className="wave-tab-btn flex flex-col items-start p-space-sm rounded-lg bg-transparent text-on-surface-variant hover:bg-surface-container-lowest transition-all" data-wave="1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Wave 1 · 4h</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">3 People</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">First invites</span>
</button>
<button className="wave-tab-btn flex flex-col items-start p-space-sm rounded-lg bg-transparent text-on-surface-variant hover:bg-surface-container-lowest transition-all" data-wave="2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Wave 2 · 11h</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">8 People</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Shared routes</span>
</button>
<button className="wave-tab-btn flex flex-col items-start p-space-sm rounded-lg bg-transparent text-on-surface-variant hover:bg-surface-container-lowest transition-all" data-wave="3">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Wave 3 · 20h</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">17 People</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Route network</span>
</button>
<button className="wave-tab-btn active-tab flex flex-col items-start p-space-sm rounded-lg bg-surface-container-lowest text-primary shadow-sm transition-all" data-wave="4">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Wave 4 · 36h</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">32 People</span>
<span className="font-body-sm text-body-sm text-secondary font-medium">Self-sustaining</span>
</button>
</div>
</div>
{/*  NETWORK VISUALIZATION CANVAS (CENTERPIECE)  */}
<div className="relative w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm overflow-hidden min-h-[580px] flex flex-col">
{/*  Visual Toolbar & Legend  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm z-20">
<div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="w-3.5 h-3.5 rounded-full bg-secondary-container ring-2 ring-secondary flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</span>
<span className="text-on-surface font-semibold">Connector</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="text-on-surface-variant">Driver</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-on-surface-variant">Passenger</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-surface-variant"></span>
<span className="text-on-surface-variant">Member</span>
</div>
</div>
<div className="flex items-center gap-space-xs font-telemetry-mono text-telemetry-mono text-outline">
<span className="material-symbols-outlined text-sm">hub</span>
<span>Community Map</span>
</div>
</div>
{/*  Interactive SVG Graph Container  */}
<div className="relative flex-1 w-full min-h-[480px] flex items-center justify-center select-none overflow-hidden" id="graphContainer">
{/*  Background Concentric Orbital Rings  */}
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 600">
<defs>
<radialGradient cx="50%" cy="50%" id="hubGlow" r="50%">
<stop offset="0%" stopColor="#006c49" stopOpacity="0.12"></stop>
<stop offset="100%" stopColor="#006c49" stopOpacity="0"></stop>
</radialGradient>
</defs>
{/*  Orbits  */}
<circle className="opacity-70" cx="500" cy="300" fill="none" r="80" stroke="#e5eeff" strokeDasharray="4 4" strokeWidth="1.5"></circle>
<circle className="opacity-70" cx="500" cy="300" fill="none" r="160" stroke="#e5eeff" strokeDasharray="6 6" strokeWidth="1.5"></circle>
<circle className="opacity-50" cx="500" cy="300" fill="none" r="230" stroke="#e5eeff" strokeDasharray="8 8" strokeWidth="1.5"></circle>
<circle className="opacity-40" cx="500" cy="300" fill="none" r="275" stroke="#e5eeff" strokeDasharray="10 10" strokeWidth="1"></circle>
<circle cx="500" cy="300" fill="url(#hubGlow)" r="290"></circle>
{/*  Links Wave 0->1  */}
<g className="transition-opacity duration-500" id="svgLinksWave1">
<path d="M 500 300 Q 420 220 370 200" fill="none" stroke="#006c49" strokeOpacity="0.45" strokeWidth="2"></path>
<path d="M 500 300 Q 590 210 630 190" fill="none" stroke="#006c49" strokeOpacity="0.45" strokeWidth="2"></path>
<path d="M 500 300 Q 500 410 500 440" fill="none" stroke="#006c49" strokeOpacity="0.45" strokeWidth="2"></path>
</g>
{/*  Links Wave 1->2  */}
<g className="transition-opacity duration-500" id="svgLinksWave2">
<path d="M 370 200 Q 280 180 230 170" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 370 200 Q 320 280 270 310" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 630 190 Q 720 180 770 170" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 630 190 Q 670 270 720 300" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 500 440 Q 400 480 360 500" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 500 440 Q 600 490 640 500" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 630 190 Q 530 120 480 110" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
<path d="M 370 200 Q 450 130 480 110" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
</g>
{/*  Links Wave 2->3 & Cross-Corridor Mesh  */}
<g className="transition-opacity duration-500" id="svgLinksWave3">
<path d="M 230 170 L 140 140" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 230 170 L 160 220" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 270 310 L 180 340" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 270 310 L 230 400" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 770 170 L 860 140" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 770 170 L 840 220" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 720 300 L 810 340" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 720 300 L 760 410" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 360 500 L 290 530" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
<path d="M 640 500 L 710 535" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
</g>
{/*  Mesh Loops Wave 4  */}
<g className="transition-opacity duration-500" id="svgLinksWave4">
<path d="M 140 140 Q 300 70 480 110" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1"></path>
<path d="M 860 140 Q 670 70 480 110" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1"></path>
<path d="M 230 400 Q 500 560 760 410" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1"></path>
</g>
</svg>
{/*  Center Anchor Node (Alex Morgan) Wave 0  */}
<div className="graph-node absolute z-30 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110" data-corridor="Northside Hub ↔ Tech Arc" data-invited="Platform Genesis" data-name="Alex Morgan" data-rides="14 Facilitated" data-role="Connector Anchor" data-score="96/100" id="nodeAlex" style={{ left: '50%', top: '50%' }}>
<div className="relative">
<span className="absolute -inset-2 rounded-full bg-secondary/20 animate-ping"></span>
<span className="absolute -inset-1 rounded-full bg-secondary-container"></span>
<div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg text-on-primary font-headline-sm text-headline-sm font-bold">
            AM
          </div>
<span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[10px]">
<span className="material-symbols-outlined text-[12px]">star</span>
</span>
</div>
<div className="mt-2 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm flex items-center gap-1 whitespace-nowrap">
<span className="font-bold text-secondary-container">Alex Morgan</span>
<span className="text-on-primary-container text-[10px]">#01</span>
</div>
<span className="text-[10px] font-telemetry-mono text-secondary font-bold tracking-tight">CONNECTOR • SCORE 96</span>
</div>
{/*  WAVE 1 NODES (T+4h)  */}
<div className="contents" id="waveNodes1">
{/*  Sam Carter  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Northside ↔ Downtown Loop" data-invited="Alex Morgan" data-name="Sam Carter" data-rides="6 Completed" data-role="Active Driver" data-score="88/100" style={{ left: '37%', top: '33.3%' }}>
<div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md font-bold shadow-md">
            SC
          </div>
<div className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm whitespace-nowrap flex items-center gap-1">
<span className="font-semibold">Sam Carter</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<span className="text-[10px] font-telemetry-mono text-outline">DRIVER</span>
</div>
{/*  Priya Shah  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Northside ↔ Tech Square" data-invited="Alex Morgan" data-name="Priya Shah" data-rides="5 Completed" data-role="Driver & Passenger" data-score="92/100" style={{ left: '63%', top: '31.6%' }}>
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shadow-md">
            PS
          </div>
<div className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm whitespace-nowrap flex items-center gap-1">
<span className="font-semibold">Priya Shah</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<span className="text-[10px] font-telemetry-mono text-outline">DRIVER/PASSENGER</span>
</div>
{/*  Marcus Vance  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="South Campus ↔ Northside" data-invited="Alex Morgan" data-name="Marcus Vance" data-rides="3 Completed" data-role="Community Steward" data-score="85/100" style={{ left: '50%', top: '73.3%' }}>
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md font-bold shadow-md">
            MV
          </div>
<div className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm whitespace-nowrap">
<span className="font-semibold">Marcus V.</span>
</div>
<span className="text-[10px] font-telemetry-mono text-outline">COORDINATOR</span>
</div>
</div>
{/*  WAVE 2 NODES (T+11h)  */}
<div className="contents" id="waveNodes2">
{/*  Kiran Patel  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="East Sector ↔ Tech Arc" data-invited="Sam Carter" data-name="Kiran Patel" data-rides="4 Completed" data-role="Passenger" data-score="81/100" style={{ left: '23%', top: '28.3%' }}>
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            KP
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Kiran</span>
</div>
{/*  Meera Thomas  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Northside ↔ Financial Dis." data-invited="Sam Carter" data-name="Meera Thomas" data-rides="3 Completed" data-role="Passenger" data-score="84/100" style={{ left: '27%', top: '51.6%' }}>
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            MT
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Meera</span>
</div>
{/*  Jordan Lee  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="West Hills ↔ Northside" data-invited="Priya Shah" data-name="Jordan Lee" data-rides="4 Completed" data-role="Driver" data-score="89/100" style={{ left: '77%', top: '28.3%' }}>
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            JL
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Jordan</span>
</div>
{/*  Elena Rostova  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Northside ↔ Univ Gate" data-invited="Priya Shah" data-name="Elena Rostova" data-rides="2 Completed" data-role="Passenger" data-score="79/100" style={{ left: '72%', top: '50%' }}>
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            ER
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Elena</span>
</div>
{/*  David K.  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Northside Outer Ring" data-invited="Priya Shah" data-name="David K." data-rides="3 Completed" data-role="Driver" data-score="86/100" style={{ left: '48%', top: '18.3%' }}>
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            DK
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">David</span>
</div>
{/*  Chloe Chen  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="South Campus ↔ Downtown" data-invited="Marcus Vance" data-name="Chloe Chen" data-rides="2 Completed" data-role="Passenger" data-score="75/100" style={{ left: '36%', top: '83.3%' }}>
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            CC
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Chloe</span>
</div>
{/*  Rahul Mehta  */}
<div className="graph-node absolute z-20 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Northside ↔ Medical Zone" data-invited="Marcus Vance" data-name="Rahul Mehta" data-rides="1 Completed" data-role="Passenger" data-score="78/100" style={{ left: '64%', top: '83.3%' }}>
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
            RM
          </div>
<span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Rahul</span>
</div>
</div>
{/*  WAVE 3 & 4 SATELLITE PEER NODES (Expanded Mesh)  */}
<div className="contents" id="waveNodes34">
{/*  Peripheral Cluster 1  */}
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="East Sector Feed" data-invited="Kiran Patel" data-name="Aanya Verma" data-rides="2 Completed" data-role="Passenger" data-score="80/100" style={{ left: '14%', top: '23.3%' }}>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">AV</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="East Ring Spur" data-invited="Kiran Patel" data-name="Tomas Benitez" data-rides="3 Completed" data-role="Driver" data-score="87/100" style={{ left: '16%', top: '36.6%' }}>
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">TB</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Subway Connector" data-invited="Meera Thomas" data-name="Nadia Ali" data-rides="1 Completed" data-role="Passenger" data-score="72/100" style={{ left: '18%', top: '56.6%' }}>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">NA</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Express Connector" data-invited="Meera Thomas" data-name="Gabe Ortiz" data-rides="2 Completed" data-role="Driver" data-score="83/100" style={{ left: '23%', top: '66.6%' }}>
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">GO</div>
</div>
{/*  Peripheral Cluster 2  */}
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="West Hills Spur" data-invited="Jordan Lee" data-name="Zoe Miller" data-rides="4 Completed" data-role="Driver" data-score="90/100" style={{ left: '86%', top: '23.3%' }}>
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">ZM</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Suburban Line" data-invited="Jordan Lee" data-name="Anand Joshi" data-rides="2 Completed" data-role="Passenger" data-score="80/100" style={{ left: '84%', top: '36.6%' }}>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">AJ</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="East University" data-invited="Elena Rostova" data-name="Clara Wu" data-rides="3 Completed" data-role="Passenger" data-score="82/100" style={{ left: '81%', top: '56.6%' }}>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">CW</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="South Campus Link" data-invited="Elena Rostova" data-name="Leo Fernandez" data-rides="3 Completed" data-role="Driver" data-score="85/100" style={{ left: '76%', top: '68.3%' }}>
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">LF</div>
</div>
{/*  Outer Mesh Fillers  */}
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="South End Ring" data-invited="Chloe Chen" data-name="Sora Hayashi" data-rides="1 Completed" data-role="Passenger" data-score="74/100" style={{ left: '29%', top: '88.3%' }}>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">SH</div>
</div>
<div className="graph-node absolute z-10 flex flex-col items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110" data-corridor="Industrial Ring" data-invited="Rahul Mehta" data-name="Ben Taylor" data-rides="2 Completed" data-role="Passenger" data-score="76/100" style={{ left: '71%', top: '89.1%' }}>
<div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">BT</div>
</div>
</div>
{/*  Node Tooltip Card (Dynamic)  */}
<div className="absolute z-50 pointer-events-none opacity-0 transition-opacity duration-200 bg-primary text-on-primary p-3 rounded-lg shadow-xl min-w-[210px] flex flex-col gap-1 text-xs" id="nodeTooltip">
<div className="flex items-center justify-between pb-1 border-b border-primary-container">
<span className="font-bold text-sm text-secondary-container" id="tooltipName">Member Name</span>
<span className="font-telemetry-mono text-[10px] text-on-primary-container" id="tooltipScore">Score: 96</span>
</div>
<div className="flex justify-between py-0.5">
<span className="text-on-primary-container">Role:</span>
<span className="font-semibold text-on-primary" id="tooltipRole">Role</span>
</div>
<div className="flex justify-between py-0.5">
<span className="text-on-primary-container">Invited By:</span>
<span className="text-on-primary" id="tooltipInvited">Alex Morgan</span>
</div>
<div className="flex justify-between py-0.5">
<span className="text-on-primary-container">Activity:</span>
<span className="text-secondary-container font-semibold" id="tooltipRides">14 Facilitated</span>
</div>
<div className="flex justify-between pt-1 border-t border-primary-container">
<span className="text-on-primary-container">Corridor:</span>
<span className="truncate max-w-[120px] text-on-primary" id="tooltipCorridor">Northside Hub</span>
</div>
</div>
</div>
{/*  Live Footnote Indicator  */}
<div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">touch_app</span>
<span>Hover any member to view invite path and rides.</span>
</div>
<div className="font-telemetry-mono text-telemetry-mono text-outline">
        Verified connections
      </div>
</div>
</div>
{/*  SUPPORTING PANELS: 2-COLUMN BALANCED GRID  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  LEFT COLUMN (7 COLUMNS): STRATEGIC INTERVENTION & BEFORE/AFTER  */}
<div className="lg:col-span-7 flex flex-col space-y-space-lg">
{/*  1. THE SMALLEST INTERVENTION  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Strategy</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">High Impact</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">The Smallest Intervention</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            We didn't blast ads. We found 1 key community connector.
          </p>
{/*  Connector Profile Cardlet  */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shrink-0">
                AM
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Alex Morgan</span>
<span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">Connector</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Northside Community · Reach: 24</span>
</div>
</div>
<div className="flex items-center gap-space-md font-telemetry-mono text-telemetry-mono self-stretch sm:self-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-outline-variant/30">
<div className="flex flex-col">
<span className="text-outline text-[10px] uppercase">Score</span>
<span className="font-bold text-primary text-sm">96/100</span>
</div>
<div className="flex flex-col">
<span className="text-outline text-[10px] uppercase">Invites</span>
<span className="font-bold text-secondary text-sm">1 Sent</span>
</div>
</div>
</div>
{/*  Comparative Callout  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
<div className="p-space-sm rounded-lg bg-error-container/40 flex flex-col justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-semibold">Paid Ads</span>
<span className="font-headline-sm text-headline-sm text-error font-bold mt-1">₹4,800 Spend</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">High churn, cold leads, 92% drop-off.</p>
</div>
<div className="p-space-sm rounded-lg bg-secondary-container/40 flex flex-col justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-container font-semibold">Community Connector</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold mt-1">1 Direct Invite</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Zero ad spend, trusted neighbors, instant rides.</p>
</div>
</div>
</div>
</div>
{/*  2. BEFORE VS AFTER TRANSFORMATION  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-3">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Comparison</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Network Growth</h3>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold px-2 py-1 bg-secondary/10 rounded">+355% Health</span>
</div>
{/*  Before & After Comparison Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
{/*  BEFORE  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">Before (0h)</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-label-sm">Cold</span>
</div>
<div className="space-y-2 mb-3">
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Active Riders:</span>
<span className="font-telemetry-mono font-semibold text-on-surface">0</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Completed Rides:</span>
<span className="font-telemetry-mono font-semibold text-on-surface">0</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Supply / Demand:</span>
<span className="font-telemetry-mono text-error font-semibold">Unmatched</span>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/30">
<span className="text-[11px] font-telemetry-mono text-outline uppercase">Health</span>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-outline font-bold">18 / 100</span>
<span className="font-label-sm text-label-sm text-error font-medium">Inactive</span>
</div>
</div>
</div>
{/*  AFTER  */}
<div className="p-space-md rounded-xl bg-secondary-container/20 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">After (36h)</span>
<span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">Active</span>
</div>
<div className="space-y-2 mb-3">
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Activated Members:</span>
<span className="font-telemetry-mono font-bold text-secondary">32 Connected</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Active Drivers:</span>
<span className="font-telemetry-mono font-semibold text-on-surface">9 Drivers</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Shared Rides:</span>
<span className="font-telemetry-mono text-secondary font-bold">14 Rides</span>
</div>
</div>
</div>
<div className="pt-2 border-t border-outline-variant/30">
<span className="text-[11px] font-telemetry-mono text-outline uppercase">Health</span>
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-secondary font-bold">82 / 100</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Healthy & Growing</span>
</div>
</div>
</div>
</div>
{/*  Health Meter Transition Bar  */}
<div className="p-space-md rounded-xl bg-surface-container-low">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Self-Sustaining Threshold</span>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">18 → 82 / 100</span>
</div>
<div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden flex">
<div className="h-full bg-outline-variant" style={{ width: '18%' }}></div>
<div className="h-full bg-secondary" style={{ width: '64%' }}></div>
<div className="h-full bg-transparent" style={{ width: '18%' }}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-tight">
            The community reached critical mass: rides now organize spontaneously among neighbors without central promotion.
          </p>
</div>
</div>
</div>
{/*  RIGHT COLUMN (5 COLUMNS): METRICS MATRIX & GROWTH CASCADE  */}
<div className="lg:col-span-5 flex flex-col space-y-space-lg">
{/*  3. NETWORK IMPACT MATRIX  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Results</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Network Output</h3>
</div>
<span className="material-symbols-outlined text-secondary text-2xl">vital_signs</span>
</div>
{/*  Metric Grid  */}
<div className="grid grid-cols-2 gap-space-sm mb-space-md">
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Activated</span>
<span className="font-headline-lg text-headline-lg text-primary font-bold mt-1" id="metricMembers">32</span>
<span className="font-telemetry-mono text-[11px] text-secondary font-semibold">32 people activated</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Drivers</span>
<span className="font-headline-lg text-headline-lg text-secondary font-bold mt-1" id="metricDrivers">9</span>
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">28% of network</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Passengers</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1" id="metricPassengers">18</span>
<span className="font-telemetry-mono text-[11px] text-on-surface-variant">56% of network</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Rides</span>
<span className="font-headline-lg text-headline-lg text-secondary font-bold mt-1" id="metricRides">14</span>
<span className="font-telemetry-mono text-[11px] text-secondary font-semibold">100% matched</span>
</div>
</div>
{/*  Secondary Mobility Metrics  */}
<div className="space-y-2 pt-2 border-t border-surface-container">
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">share</span>
<span className="text-on-surface">Referrals</span>
</div>
<span className="font-telemetry-mono font-bold text-on-surface">21 Referrals</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">repeat</span>
<span className="text-on-surface">Daily Commuters</span>
</div>
<span className="font-telemetry-mono font-bold text-on-surface">15 Active</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-sm">eco</span>
<span className="text-on-surface">CO₂ Avoided</span>
</div>
<span className="font-telemetry-mono font-bold text-secondary">126 kg / Week</span>
</div>
</div>
<div className="mt-space-md p-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm">
<p className="leading-tight text-on-surface-variant">
<strong className="text-on-surface">Summary:</strong> 9 drivers · 18 passengers · 14 rides · 21 referrals
          </p>
</div>
</div>
{/*  4. REFERRAL NETWORK CASCADE  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Sequence</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Invite Path</h3>
</div>
<span className="material-symbols-outlined text-outline text-xl">account_tree</span>
</div>
{/*  Linear Cascade Sequence  */}
<div className="relative pl-6 space-y-space-md before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-secondary-container">
{/*  Node 1  */}
<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary-container ring-4 ring-surface-container-lowest flex items-center justify-center text-on-secondary-container text-xs font-bold">1</span>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Alex Morgan</span>
<span className="px-1.5 py-0.2 rounded bg-secondary/10 text-secondary text-[10px] font-bold">CONNECTOR</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sent 3 direct invites (0h)</p>
</div>
</div>
{/*  Node 2  */}
<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest flex items-center justify-center text-primary text-xs font-bold">2</span>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Sam Carter</span>
<span className="px-1.5 py-0.2 rounded bg-secondary text-on-secondary text-[10px] font-bold">DRIVER</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Offered 4 seats, invited 2 colleagues (4h)</p>
</div>
</div>
{/*  Node 3  */}
<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest flex items-center justify-center text-primary text-xs font-bold">3</span>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Priya Shah</span>
<span className="px-1.5 py-0.2 rounded bg-primary text-on-primary text-[10px] font-bold">HYBRID</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Joined evening route, invited 3 peers (11h)</p>
</div>
</div>
{/*  Node 4  */}
<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest flex items-center justify-center text-primary text-xs font-bold">4</span>
<div>
<div className="flex items-center gap-1.5">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Kiran & Meera</span>
<span className="px-1.5 py-0.2 rounded bg-surface-variant text-on-surface text-[10px] font-bold">RIDERS</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Joined commute, invited neighbors (20h)</p>
</div>
</div>
{/*  Terminal  */}
<div className="relative flex items-start gap-space-sm">
<span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary ring-4 ring-surface-container-lowest flex items-center justify-center text-on-secondary text-xs font-bold">✓</span>
<div>
<span className="font-label-lg text-label-lg font-bold text-secondary">32 People Activated</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Network reached self-sustaining growth (36h)</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  5. KEY TAKEAWAY FOOTER BANNER  */}
<div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-space-lg shadow-md">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="max-w-2xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container font-bold block mb-1">Takeaway</span>
<blockquote className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary mb-1">
          “The goal isn't to acquire everyone. It's to find the person who starts everyone.”
        </blockquote>
<p className="font-body-md text-body-md text-on-primary-container">
          Turn trusted community connections into self-driving ride networks.
        </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<a className="px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all font-semibold shadow-sm flex items-center gap-2" data-path="connectors" href="#">
<span className="material-symbols-outlined text-base">radar</span>
<span>Find Connector</span>
</a>
</div>
</div>
</div>
</div>
{/*  INTERACTIVE SCRIPT (Timeline scrubbing, replay, tooltips)  */}
</main></div>
    </>
  );
}
