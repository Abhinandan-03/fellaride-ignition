import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OfferRide() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Price calibration stepper
    let price = 80;
    const priceDisplay = document.getElementById('price-display');
    const previewPrice = document.getElementById('preview-price');
    const minusBtn = document.getElementById('price-minus');
    const plusBtn = document.getElementById('price-plus');
    const resetBtn = document.getElementById('price-reset');

    function updatePrice(val: number) {
      price = Math.max(20, Math.min(150, val));
      if (priceDisplay) priceDisplay.textContent = '₹' + price;
      if (previewPrice) previewPrice.textContent = '₹' + price + ' / seat';
    }

    const handleMinus = () => updatePrice(price - 10);
    const handlePlus = () => updatePrice(price + 10);
    const handleReset = () => updatePrice(80);

    minusBtn?.addEventListener('click', handleMinus);
    plusBtn?.addEventListener('click', handlePlus);
    resetBtn?.addEventListener('click', handleReset);

    // 2. Available Seats segmented control
    const seatBtns = document.querySelectorAll('#seats-selector .seat-btn');
    const seatBadge = document.getElementById('preview-seat-badge');
    const seatTokens = document.querySelectorAll('#seat-graphic-group .seat-token');

    const seatHandlers: Array<{ btn: Element; handler: () => void }> = [];
    seatBtns.forEach(btn => {
      const handler = () => {
        seatBtns.forEach(b => {
          b.className = 'seat-btn px-4 py-2 rounded-lg font-label-lg text-label-lg font-semibold text-on-surface-variant hover:text-on-surface transition-all';
        });
        btn.className = 'seat-btn active px-4 py-2 rounded-lg font-label-lg text-label-lg font-bold bg-primary text-on-primary shadow-sm transition-all';
        
        const seatCount = parseInt(btn.getAttribute('data-seats') || '3', 10);
        if (seatBadge) {
          seatBadge.textContent = seatCount + (seatCount === 1 ? ' Seat Open' : ' Seats Open');
        }

        // Update cabin visual
        seatTokens.forEach((token, index) => {
          const icon = token.querySelector('.material-symbols-outlined');
          const label = token.querySelector('span:last-child');
          const tokenEl = token as HTMLElement;
          if (index < seatCount) {
            if (icon) icon.className = 'material-symbols-outlined text-secondary text-xl';
            if (label) label.className = 'font-label-sm text-label-sm text-secondary font-bold mt-0.5';
            tokenEl.style.opacity = '1';
          } else {
            if (icon) icon.className = 'material-symbols-outlined text-outline text-xl';
            if (label) label.className = 'font-label-sm text-label-sm text-outline mt-0.5';
            tokenEl.style.opacity = '0.35';
          }
        });
      };
      btn.addEventListener('click', handler);
      seatHandlers.push({ btn, handler });
    });

    // 3. Smart Suggestion Button
    const applySuggestBtn = document.getElementById('apply-suggested-time');
    const depInput = document.getElementById('departure-input') as HTMLInputElement | null;
    const previewTime = document.getElementById('preview-time');

    const handleSuggest = () => {
      if (depInput) depInput.value = '6:00 PM';
      if (previewTime) previewTime.textContent = 'Today • 6:00 PM';
      if (applySuggestBtn) {
        applySuggestBtn.innerHTML = '<span class="material-symbols-outlined text-xs text-secondary">check</span> Applied Peak Sync';
      }
    };
    applySuggestBtn?.addEventListener('click', handleSuggest);

    const handleInput = (e: Event) => {
      if (previewTime) {
        previewTime.textContent = 'Today • ' + (e.target as HTMLInputElement).value;
      }
    };
    depInput?.addEventListener('input', handleInput);

    // 4. Publish Action micro-feedback
    const publishBtn = document.getElementById('publish-ride-cta') as HTMLButtonElement | null;
    const toast = document.getElementById('publish-toast');

    const handlePublish = () => {
      if (!publishBtn) return;
      publishBtn.disabled = true;
      publishBtn.innerHTML = '<span class="material-symbols-outlined text-lg animate-spin">sync</span> Publishing...';
      
      setTimeout(() => {
        publishBtn.innerHTML = '<span class="material-symbols-outlined text-lg">check</span> Ride Published';
        publishBtn.classList.remove('bg-secondary');
        publishBtn.classList.add('bg-secondary-container', 'text-on-secondary-container');
        
        if (toast) {
          toast.classList.remove('hidden');
        }

        setTimeout(() => {
          navigate('/app/find-ride');
        }, 1200);
      }, 600);
    };
    publishBtn?.addEventListener('click', handlePublish);

    // 5. Route Type toggle
    const toggleBtns = document.querySelectorAll('#route-type-toggle button');
    const toggleHandlers: Array<{ btn: Element; handler: () => void }> = [];
    toggleBtns.forEach(btn => {
      const handler = () => {
        toggleBtns.forEach(b => {
          b.className = 'px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm';
        });
        btn.className = 'px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-xs';
      };
      btn.addEventListener('click', handler);
      toggleHandlers.push({ btn, handler });
    });

    return () => {
      minusBtn?.removeEventListener('click', handleMinus);
      plusBtn?.removeEventListener('click', handlePlus);
      resetBtn?.removeEventListener('click', handleReset);
      seatHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      applySuggestBtn?.removeEventListener('click', handleSuggest);
      depInput?.removeEventListener('input', handleInput);
      publishBtn?.removeEventListener('click', handlePublish);
      toggleHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
    };
  }, [navigate]);

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none"><div className="flex flex-col flex-1 overflow-y-auto"><div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><img alt="FellaRide Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">v2.4</span></div></div><span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full tracking-wider uppercase">COMMUNITY OS</span></div><nav className="flex-1 px-space-sm py-space-xs flex flex-col gap-space-xs" data-active-classes="bg-primary text-on-primary font-bold"><div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">OVERVIEW</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="command-center" href="#"><span className="material-symbols-outlined mr-space-sm text-base">dashboard</span>Command Center</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">DISCOVER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-radar" href="#"><span className="material-symbols-outlined mr-space-sm text-base">radar</span>Community Radar</a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="communities" href="#"><span className="material-symbols-outlined mr-space-sm text-base">hub</span>Communities</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">ACTIVATE</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="connectors" href="#"><span className="material-symbols-outlined mr-space-sm text-base">share</span>Connectors</a><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="ghost-demand" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">sensors</span>Ghost Demand</span><span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">LIVE</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="activation" href="#"><span className="material-symbols-outlined mr-space-sm text-base">bolt</span>Activation</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">GROW</div><a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="butterfly-effect" href="#"><span className="flex items-center gap-space-sm font-label-lg text-label-lg"><span className="material-symbols-outlined text-base">flare</span>Butterfly Effect</span><span className="material-symbols-outlined text-base text-secondary">auto_awesome</span></a><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-health" href="#"><span className="material-symbols-outlined mr-space-sm text-base">vital_signs</span>Community Health</a><div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">RIDER</div><a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="find-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">travel_explore</span>Find a Ride</a><a aria-current="page" className="flex items-center px-space-sm py-space-sm rounded-lg transition-all bg-primary text-on-primary font-bold" data-path="offer-a-ride" href="#"><span className="material-symbols-outlined mr-space-sm text-base">directions_car</span>Offer a Ride</a></nav></div><div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs"><div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest"><div className="flex items-center gap-space-sm"><span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span><span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Demo: Northside Pilot</span></div><button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-base">sync_alt</span></button></div><a className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors" data-path="operator-profile" href="#"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="flex flex-col min-w-0 flex-1"><span className="font-label-md text-label-md text-on-surface truncate">Sarah Chen</span><span className="font-body-sm text-body-sm text-on-surface-variant truncate">Growth Lead</span></div><span className="material-symbols-outlined text-on-surface-variant text-base">tune</span></a></div></aside><div className="pl-72"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md"><div className="flex items-center gap-space-md"><img alt="FellaRide Logo" className="h-8 w-auto object-contain hidden lg:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" /><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined text-base text-secondary">location_on</span><span className="font-semibold">Northside Community</span><span className="material-symbols-outlined text-base ml-space-xs">expand_more</span></button><div className="relative flex items-center"><span className="material-symbols-outlined absolute left-3 text-outline text-base">search</span><input className="w-64 h-9 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search routes, neighbors..." type="text" /></div></div><div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low"><span className="material-symbols-outlined text-base text-secondary">sensors</span><span className="font-telemetry-mono text-telemetry-mono text-on-surface"><strong className="font-semibold">Northside Pilot:</strong> 32 Active · 9 Drivers</span></div><div className="flex items-center gap-space-sm"><button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all"><span className="material-symbols-outlined text-base">radar</span>+ Scan Demand</button><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all"><span className="material-symbols-outlined text-base">download</span>Export</button><button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"><span className="material-symbols-outlined text-xl">notifications</span><span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">3</span></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></header><main className="w-full pt-16 bg-background min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full">
{/*  Telemetry Micro Header / Breadcrumb & Status Ribbon  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-md border-b border-surface-container mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant font-medium tracking-wider">OFFER A RIDE</span>
<span className="text-outline-variant">•</span>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-semibold">NORTHSIDE</span>
<span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        Active
      </span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-telemetry-mono text-telemetry-mono">
<span className="material-symbols-outlined text-secondary text-base">hub</span>
<span>Supply: <strong className="font-semibold text-on-surface">8 Drivers · 15 Rides</strong></span>
</div>
<button className="flex items-center gap-space-xs px-space-sm py-1 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" data-path="communities">
<span className="material-symbols-outlined text-base">arrow_back</span>
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
<span className="material-symbols-outlined text-base text-secondary">verified</span>
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
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-telemetry-mono text-label-sm font-bold">01</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Your Route</h2>
</div>
<div className="inline-flex p-0.5 bg-surface-container-low rounded-lg" id="route-type-toggle">
<button className="px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-semibold shadow-xs" type="button">Routine Commute</button>
<button className="px-space-sm py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" type="button">One-Time Ride</button>
</div>
</div>
{/*  Visual Origin / Destination Node System  */}
<div className="relative flex flex-col gap-space-md pl-4">
{/*  Geometric Path Guideline  */}
<div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-surface-variant"></div>
{/*  Origin Node  */}
<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 z-10 shadow-xs">
<span className="material-symbols-outlined text-[16px]">trip_origin</span>
</div>
<div className="flex-1 min-w-0">
<label className="font-label-sm text-label-sm text-outline uppercase block mb-0.5">Origin</label>
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-body-md font-semibold text-on-surface truncate">Northside Community</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Civic Garden Loop</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-telemetry-mono text-label-sm shrink-0">P-01</span>
</div>
</div>
</div>
{/*  Route Spec Meta Pill  */}
<div className="ml-11 flex items-center gap-space-sm py-0.5">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-telemetry-mono text-label-sm flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">alt_route</span>
              Route 44 · 14.2 km · Direct Path
            </span>
</div>
{/*  Destination Node  */}
<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 shadow-xs">
<span className="material-symbols-outlined text-[16px]">location_on</span>
</div>
<div className="flex-1 min-w-0">
<label className="font-label-sm text-label-sm text-outline uppercase block mb-0.5">Destination</label>
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-body-md font-semibold text-on-surface truncate">Central District</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Intermodal Interchange</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-telemetry-mono text-label-sm shrink-0">D-09</span>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
            High route overlap with 14 passenger requests
          </span>
<button className="text-secondary font-label-sm text-label-sm hover:underline font-semibold" type="button">Stops</button>
</div>
</section>
{/*  2. Schedule & Smart Suggestion  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-telemetry-mono text-label-sm font-bold">02</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Schedule</h2>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">ETA: 32 mins</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
{/*  Date Pill Selector  */}
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-outline uppercase mb-space-xs">Date</label>
<div className="px-space-md py-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-on-surface-variant text-lg">calendar_today</span>
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
<span className="material-symbols-outlined text-on-surface-variant text-lg">schedule</span>
<input className="font-headline-sm text-headline-sm text-on-surface font-bold bg-transparent w-24 focus:outline-none" id="departure-input" type="text" defaultValue="6:00 PM" />
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Arrives 6:32 PM</span>
</div>
</div>
</div>
{/*  Ghost Demand Suggestion Banner  */}
<div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">auto_awesome</span>
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
<div className="flex items-center gap-space-md text-telemetry-mono text-telemetry-mono text-on-surface">
<span><strong className="font-bold text-secondary">37</strong> predicted</span>
<span className="text-outline-variant">•</span>
<span><strong className="font-bold text-error">25</strong> shortage</span>
<span className="text-outline-variant">•</span>
<span><strong className="font-bold">6</strong> drivers</span>
</div>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold hover:bg-secondary hover:text-on-secondary transition-colors shadow-xs flex items-center gap-1" id="apply-suggested-time" type="button">
<span className="material-symbols-outlined text-xs text-secondary">bolt</span>
              Use Peak (6:00 PM)
            </button>
</div>
</div>
</section>
{/*  3. Available Seats & Vehicle Configuration  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-telemetry-mono text-label-sm font-bold">03</span>
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
<button className="seat-btn px-4 py-2 rounded-lg font-label-lg text-label-lg font-semibold text-on-surface-variant hover:text-on-surface transition-all" data-seats="1" type="button">
              1 Seat
            </button>
<button className="seat-btn px-4 py-2 rounded-lg font-label-lg text-label-lg font-semibold text-on-surface-variant hover:text-on-surface transition-all" data-seats="2" type="button">
              2 Seats
            </button>
<button className="seat-btn active px-4 py-2 rounded-lg font-label-lg text-label-lg font-bold bg-primary text-on-primary shadow-sm transition-all" data-seats="3" type="button">
              3 Seats
            </button>
</div>
</div>
{/*  Cabin Visualization Scheme  */}
<div className="mt-space-md p-space-md rounded-lg bg-surface-container-low flex items-center justify-between flex-wrap gap-space-md">
<div className="flex items-center gap-space-md">
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-on-surface text-xl">airline_seat_recline_normal</span>
<span className="font-label-sm text-label-sm text-outline mt-0.5">Driver (You)</span>
</div>
<div className="w-px h-8 bg-surface-container-high"></div>
<div className="flex items-center gap-space-sm" id="seat-graphic-group">
<div className="flex flex-col items-center seat-token active">
<span className="material-symbols-outlined text-secondary text-xl">event_seat</span>
<span className="font-label-sm text-label-sm text-secondary font-bold mt-0.5">Seat 1</span>
</div>
<div className="flex flex-col items-center seat-token active">
<span className="material-symbols-outlined text-secondary text-xl">event_seat</span>
<span className="font-label-sm text-label-sm text-secondary font-bold mt-0.5">Seat 2</span>
</div>
<div className="flex flex-col items-center seat-token active">
<span className="material-symbols-outlined text-secondary text-xl">event_seat</span>
<span className="font-label-sm text-label-sm text-secondary font-bold mt-0.5">Seat 3</span>
</div>
</div>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">verified_user</span>
            Verified
          </span>
</div>
</section>
{/*  4. Fair Fuel Contribution  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-md bg-surface-container-high text-on-surface flex items-center justify-center font-telemetry-mono text-label-sm font-bold">04</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Fuel Share</h2>
</div>
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold uppercase">
            ₹0 Fee
          </span>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg mb-space-md">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-hero text-headline-lg lg:text-display-hero text-on-surface font-bold tracking-tight" id="price-display">₹80</span>
<span className="font-body-md text-body-md text-on-surface-variant">/ seat</span>
</div>
{/*  Fine Adjust Stepper  */}
<div className="flex items-center gap-space-sm">
<span className="font-body-sm text-body-sm text-on-surface-variant mr-1">Adjust:</span>
<button className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors" id="price-minus" type="button">
<span className="material-symbols-outlined text-lg">remove</span>
</button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center transition-colors" id="price-plus" type="button">
<span className="material-symbols-outlined text-lg">add</span>
</button>
<button className="text-secondary hover:underline font-label-sm text-label-sm font-semibold ml-space-xs" id="price-reset" type="button">
              Reset
            </button>
</div>
</div>
{/*  Municipal Transparency Notice  */}
<div className="p-space-md rounded-lg bg-surface-container-low text-body-sm text-on-surface-variant flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
<span className="material-symbols-outlined text-base text-secondary">info</span>
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
<button className="flex-1 sm:flex-initial px-space-xl py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg font-bold hover:bg-secondary/90 shadow-md transition-all flex items-center justify-center gap-2" id="publish-ride-cta" type="button">
<span className="material-symbols-outlined text-lg">directions_car</span>
              Publish Ride
            </button>
</div>
</div>
<div className="px-space-md py-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Corridor update:</span>
</div>
<span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">
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
<span className="material-symbols-outlined text-secondary text-base">preview</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ride Preview</h3>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold uppercase">
            Live
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
<span className="material-symbols-outlined text-secondary text-sm">verified</span>
</div>
<span className="font-telemetry-mono text-label-sm text-on-surface-variant">Northside · 4.98 ★</span>
</div>
</div>
<span className="px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold" id="preview-seat-badge">
              3 Seats Open
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
<span className="font-label-md text-label-md font-bold text-on-surface" id="preview-time">Today · 6:00 PM</span>
</div>
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm text-outline uppercase">Share</span>
<span className="font-label-md text-label-md font-bold text-secondary" id="preview-price">₹80 / seat</span>
</div>
</div>
{/*  Corridor Route Fit & Pickup note  */}
<div className="px-space-sm py-1 rounded bg-surface-container-low flex items-center justify-between text-body-sm text-on-surface-variant font-telemetry-mono">
<span className="flex items-center gap-1 text-secondary font-semibold">
<span className="material-symbols-outlined text-xs">sync</span>
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
<span className="material-symbols-outlined text-secondary text-base">radar</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Corridor Demand</h3>
</div>
<span className="font-telemetry-mono text-label-sm text-secondary font-bold">RT-44</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Northside ⇄ Central District
</span>
{/*  Metric Cluster  */}
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-telemetry-mono text-label-sm text-outline uppercase">Ghost Demand</span>
<span className="font-headline-lg text-headline-md font-bold text-on-surface mt-0.5">37</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Passengers</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-telemetry-mono text-label-sm text-outline uppercase">Shortage</span>
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
<span className="material-symbols-outlined text-secondary text-lg">trending_up</span>
</div>
</section>
{/*  3. Community Impact Card  */}
<section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">eco</span>
          Community Impact
        </h3>
<ul className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">task_alt</span>
<span>Helps <strong>3 neighbors</strong> commute easily.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">task_alt</span>
<span>Fills empty seats on Route 44.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">task_alt</span>
<span>Community Health increases <strong>81 → 84/100</strong>.</span>
</li>
<li className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">task_alt</span>
<span><strong>7.2 kg CO₂</strong> saved.</span>
</li>
</ul>
</section>
{/*  Dynamic Micro Feedback Notice / Banner  */}
<div className="hidden rounded-xl bg-primary text-on-primary p-space-md shadow-lg transition-all duration-300" id="publish-toast">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary-fixed text-xl">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg font-bold">Ride Published</span>
<span className="font-body-sm text-body-sm text-on-primary-container">3 seats now open to Northside neighbors.</span>
</div>
</div>
</div>
</aside>
</div>
</div></main></div>
    </>
  );
}
