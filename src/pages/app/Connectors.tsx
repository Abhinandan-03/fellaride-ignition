export default function Connectors() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest">
            <div className="flex items-center gap-space-sm">
              <img alt="FellaRide Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span>
                <span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">v2.4</span>
              </div>
            </div>
            <span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full tracking-wider uppercase">COMMUNITY OS</span>
          </div>
          <nav className="flex-1 px-space-sm py-space-xs flex flex-col gap-space-xs" data-active-classes="bg-primary text-on-primary font-bold">
            <div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">OVERVIEW</div>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="command-center" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">dashboard</span>Command Center
            </a>
            <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">DISCOVER</div>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-radar" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">radar</span>Community Radar
            </a>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="communities" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">hub</span>Communities
            </a>
            <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">ACTIVATE</div>
            <a aria-current="page" className="flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all bg-primary text-on-primary font-bold" data-path="connectors" href="#">
              <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-base">share</span>Connectors
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </a>
            <a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="ghost-demand" href="#">
              <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-base">sensors</span>Ghost Demand
              </span>
              <span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">LIVE</span>
            </a>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="activation" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">bolt</span>Activation
            </a>
            <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">GROW</div>
            <a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="butterfly-effect" href="#">
              <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-base">flare</span>Butterfly Effect
              </span>
              <span className="material-symbols-outlined text-base text-secondary">auto_awesome</span>
            </a>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="community-health" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">vital_signs</span>Community Health
            </a>
            <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">RIDER</div>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="find-a-ride" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">travel_explore</span>Find a Ride
            </a>
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="offer-a-ride" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">directions_car</span>Offer a Ride
            </a>
          </nav>
        </div>
        <div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs">
          <div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest">
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Demo: Northside Pilot</span>
            </div>
            <button className="text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-base">sync_alt</span>
            </button>
          </div>
          <a className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors" data-path="operator-profile" href="#">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-label-md text-label-md text-on-surface truncate">Sarah Chen</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Growth Lead</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-base">tune</span>
          </a>
        </div>
      </aside>

      <div className="pl-72">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md">
          <div className="flex items-center gap-space-md">
            <img alt="FellaRide Logo" className="h-8 w-auto object-contain hidden lg:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw" />
            <button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" data-path="communities">
              <span className="material-symbols-outlined text-base text-secondary">location_on</span>
              <span className="font-semibold">Pilot Community:</span>
              <span className="text-on-surface-variant">Northside Hub</span>
              <span className="material-symbols-outlined text-base ml-space-xs">expand_more</span>
            </button>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-base">search</span>
              <input className="w-64 h-9 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search communities or routes..." type="text" />
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low">
            <span className="material-symbols-outlined text-base text-secondary">sensors</span>
            <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
              <strong className="font-semibold">Phase 5/9:</strong> ACTIVATE <span className="text-outline-variant">•</span> 1 Connector → 32 Users
            </span>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all" data-path="ghost-demand">
              <span className="material-symbols-outlined text-base">radar</span>+ Scan Demand
            </button>
            <button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined text-base">download</span>Export
            </button>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">3</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </header>

        <main className="w-full pt-16 bg-background min-h-screen px-space-lg py-space-lg">
          <div className="flex flex-col w-full gap-space-lg">
            {/* TOP HEADER SECTION */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-sm">
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">Top Candidates</span>
                  <span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Updated just now
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Connector Intelligence</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Find the people who can start the network.</p>
              </div>
              <div className="flex items-center gap-space-sm self-start md:self-auto">
                <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-base text-secondary">sync</span>
                  <span>Refresh</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-base text-outline">tune</span>
                  <span>Filter</span>
                </button>
                <div className="hidden sm:flex items-center px-space-sm py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-telemetry-mono text-telemetry-mono">
                  <span className="text-secondary font-semibold">38</span>
                  <span className="mx-1">/</span>
                  <span>540 Scanned</span>
                </div>
              </div>
            </div>

            {/* TOP KPI CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">Connectors</span>
                  <span className="p-1.5 rounded-md bg-surface-container-low text-secondary">
                    <span className="material-symbols-outlined text-[18px]">hub</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-display-hero text-display-hero text-on-surface tracking-tight">38</span>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">+6 this cycle</span>
                </div>
                <div className="flex items-center justify-between font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                  <span>Confidence</span>
                  <span className="text-on-surface font-semibold">100% Verified</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">High Potential</span>
                  <span className="p-1.5 rounded-md bg-secondary text-on-secondary">
                    <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-display-hero text-display-hero text-secondary tracking-tight">7</span>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-semibold">Score ≥ 85</span>
                </div>
                <div className="flex items-center justify-between font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                  <span>Priority pool</span>
                  <span className="text-secondary font-semibold">Ready to activate</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">Average Reach</span>
                  <span className="p-1.5 rounded-md bg-surface-container-low text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">group_add</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-display-hero text-display-hero text-on-surface tracking-tight">18</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">people / connector</span>
                </div>
                <div className="flex items-center justify-between font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                  <span>Network growth</span>
                  <span className="text-secondary font-semibold">4.8x Organics</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface-variant">Ready to Start</span>
                  <span className="p-1.5 rounded-md bg-surface-container text-secondary">
                    <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-display-hero text-display-hero text-on-surface tracking-tight">5</span>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">Communities</span>
                </div>
                <div className="flex items-center justify-between font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                  <span>Active targets</span>
                  <span className="text-on-surface font-semibold truncate max-w-[140px]">Northside, Eastview</span>
                </div>
              </div>
            </div>

            {/* MAIN 2-COLUMN WORKSPACE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* LEFT COLUMN: CANDIDATES (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
                    <span className="font-headline-sm text-headline-sm text-on-surface">Top Connectors</span>
                    <span className="font-telemetry-mono text-telemetry-mono text-outline">Sorted by score</span>
                  </div>
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-base">search</span>
                    <input className="w-full h-10 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:bg-surface-container transition-all" placeholder="Search connectors or communities..." type="text" />
                  </div>
                  <div className="flex items-center gap-space-xs flex-wrap pt-1">
                    <button className="px-space-sm py-1 rounded-md bg-primary text-on-primary font-label-sm text-label-sm transition-all">All (38)</button>
                    <button className="px-space-sm py-1 rounded-md bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all">High Potential (7)</button>
                    <button className="px-space-sm py-1 rounded-md bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all">Northside (12)</button>
                    <button className="px-space-sm py-1 rounded-md bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all">Eastview (9)</button>
                    <button className="px-space-sm py-1 rounded-md bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all">Drivers (24)</button>
                  </div>
                </div>

                {/* Candidates List */}
                <div className="flex flex-col gap-space-sm">
                  {/* Candidate 1: Alex Morgan */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all cursor-pointer relative overflow-hidden bg-gradient-to-r from-secondary-container/10 via-surface-container-lowest to-surface-container-lowest">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                    <div className="flex flex-col gap-space-sm pl-2">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-sm">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm">
                              AM
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center font-bold">#1</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Alex Morgan</span>
                              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Priority #1</span>
                            </div>
                            <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                              <span className="material-symbols-outlined text-[15px] text-secondary">location_on</span>
                              <span>Northside Community</span>
                              <span className="text-outline">•</span>
                              <span className="truncate">Northside Heights → Central Tech Hub</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-baseline gap-1">
                            <span className="font-headline-md text-headline-md text-secondary font-bold">96</span>
                            <span className="font-telemetry-mono text-telemetry-mono text-outline">/100</span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Connector Score</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Reach 24</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Driver 91%</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Early Adopter 88%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Athletic club organizer with direct daily route to Central Hub.
                      </p>
                      <div className="flex items-center justify-between pt-1 font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                        <span>Why Alex? <strong className="text-on-surface font-semibold">Highly connected within Northside.</strong></span>
                        <button className="flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold hover:underline" data-path="activation">
                          Activate Alex <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Candidate 2: Priya Shah */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-sm">
                          <div className="relative">
                            <div className="w-11 h-11 rounded-xl bg-primary-fixed-variant text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                              PS
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">2</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Priya Shah</span>
                              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Hospital Anchor</span>
                            </div>
                            <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                              <span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                              <span>Eastview Community</span>
                              <span className="text-outline">•</span>
                              <span className="truncate">Eastview Civic Hub → Metro Medical</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-baseline gap-1">
                            <span className="font-headline-md text-headline-md text-on-surface font-bold">94</span>
                            <span className="font-telemetry-mono text-telemetry-mono text-outline">/100</span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Connector Score</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Reach 21</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Driver 89%</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Early Adopter 92%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Hospital staff coordinator with consistent morning schedule.
                      </p>
                      <div className="flex items-center justify-between pt-1 font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                        <span>Why Priya? <strong className="text-on-surface font-semibold">Connects 21 healthcare commuters.</strong></span>
                        <span className="flex items-center gap-1 text-on-surface hover:text-secondary font-label-sm text-label-sm font-semibold">
                          View Candidate <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Candidate 3: Sam Chen */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-sm">
                          <div className="relative">
                            <div className="w-11 h-11 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                              SC
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">3</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Sam Chen</span>
                              <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Driver Anchor</span>
                            </div>
                            <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                              <span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                              <span>Northside Community</span>
                              <span className="text-outline">•</span>
                              <span className="truncate">Northside Loop → Central District</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-baseline gap-1">
                            <span className="font-headline-md text-headline-md text-on-surface font-bold">89</span>
                            <span className="font-telemetry-mono text-telemetry-mono text-outline">/100</span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Connector Score</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Reach 16</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Driver 94%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        High-frequency corridor driver with 3 empty seats daily.
                      </p>
                      <div className="flex items-center justify-between pt-1 font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                        <span>Why Sam? <strong className="text-on-surface font-semibold">Immediate daily driver capacity.</strong></span>
                        <span className="flex items-center gap-1 text-on-surface hover:text-secondary font-label-sm text-label-sm font-semibold">
                          View Candidate <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Candidate 4: David Park */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-sm">
                          <div className="relative">
                            <div className="w-11 h-11 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                              DP
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">4</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">David Park</span>
                              <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Tech Group</span>
                            </div>
                            <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                              <span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                              <span>Eastview Community</span>
                              <span className="text-outline">•</span>
                              <span className="truncate">Eastview → Innovation Corridor</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-baseline gap-1">
                            <span className="font-headline-md text-headline-md text-on-surface font-bold">82</span>
                            <span className="font-telemetry-mono text-telemetry-mono text-outline">/100</span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Connector Score</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Reach 11</span>
                        <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">Driver 82%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Civic group admin with 8 aligned team members.
                      </p>
                    </div>
                  </div>

                  {/* Candidate 5: Meera Thomas */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer">
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-start justify-between gap-space-sm">
                        <div className="flex items-center gap-space-sm">
                          <div className="relative">
                            <div className="w-11 h-11 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                              MT
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center font-bold">5</span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Meera Thomas</span>
                              <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Emerging</span>
                            </div>
                            <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                              <span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                              <span>West End Community</span>
                              <span className="text-outline">•</span>
                              <span className="truncate">West End Square → University Station</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <div className="flex items-baseline gap-1">
                            <span className="font-headline-md text-headline-md text-on-surface font-bold">75</span>
                            <span className="font-telemetry-mono text-telemetry-mono text-outline">/100</span>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">Connector Score</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs flex-wrap">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Reach 9</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Early Adopter 80%</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        University commuter with regular morning departure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: CONNECTOR DOSSIER (5 cols sticky) */}
              <div className="lg:col-span-5 flex flex-col gap-space-md sticky top-20">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
                  {/* Header */}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-telemetry-mono text-telemetry-mono text-secondary uppercase font-semibold tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Connector Profile
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase">
                        Top Candidate
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-lg text-headline-lg font-bold shadow-sm">
                          AM
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Alex Morgan</h2>
                          <span className="font-body-md text-body-md text-on-surface-variant">Northside Community · Athletic Club</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display-hero text-display-hero text-secondary font-bold leading-none">96</div>
                        <span className="font-telemetry-mono text-telemetry-mono text-outline">/100 Score</span>
                      </div>
                    </div>
                    <p className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                      Top <strong className="text-secondary font-semibold">0.5% in Northside</strong>. Immediate network viability.
                    </p>
                  </div>

                  {/* Why Alex? */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-base">psychology</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">Why Alex?</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      Highly connected within Northside.
                    </p>
                    <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Organizes weekly athletic group</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Daily commute aligned with 19 riders</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>4 available carpool seats</span>
                      </li>
                    </ul>
                  </div>

                  {/* Network Reach Visualization */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-base">flare</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">Network Reach</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                        1 → 24 Reach
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Alex connects to 24 members across Northside.
                    </p>
                    <div className="w-full h-64 rounded-xl bg-surface-container-low relative overflow-hidden flex items-center justify-center p-space-sm shadow-inner">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern height="20" id="graph-grid" patternUnits="userSpaceOnUse" width="20">
                            <circle cx="2" cy="2" fill="#cbd5e1" fillOpacity="0.4" r="1"></circle>
                          </pattern>
                        </defs>
                        <rect fill="url(#graph-grid)" height="100%" width="100%"></rect>
                        <circle cx="220" cy="125" r="95" stroke="#cbd5e1" strokeDasharray="3 3" strokeWidth="1"></circle>
                        <circle cx="220" cy="125" r="55" stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="1"></circle>
                        <line stroke="#006c49" strokeOpacity="0.6" strokeWidth="2" x1="220" x2="120" y1="125" y2="55"></line>
                        <line stroke="#006c49" strokeOpacity="0.6" strokeWidth="2" x1="220" x2="320" y1="125" y2="50"></line>
                        <line stroke="#006c49" strokeOpacity="0.6" strokeWidth="2" x1="220" x2="70" y1="125" y2="135"></line>
                        <line stroke="#006c49" strokeOpacity="0.6" strokeWidth="2" x1="220" x2="370" y1="125" y2="130"></line>
                        <line stroke="#006c49" strokeOpacity="0.6" strokeWidth="2" x1="220" x2="140" y1="125" y2="205"></line>
                        <line stroke="#006c49" strokeOpacity="0.6" strokeWidth="2" x1="220" x2="300" y1="125" y2="210"></line>
                        <line stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="1" x1="120" x2="70" y1="55" y2="135"></line>
                        <line stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="1" x1="320" x2="370" y1="50" y2="130"></line>
                        <line stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="1" x1="140" x2="70" y1="205" y2="135"></line>
                        <line stroke="#94a3b8" strokeDasharray="2 2" strokeWidth="1" x1="300" x2="370" y1="210" y2="130"></line>
                        <g className="cursor-pointer">
                          <circle cx="120" cy="55" fill="#131b2e" r="16"></circle>
                          <text dominantBaseline="middle" fill="#ffffff" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" x="120" y="58">SC</text>
                          <rect fill="#ffffff" height="13" rx="3" width="50" x="95" y="74"></rect>
                          <text fill="#0b1c30" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="120" y="83">Driver 91%</text>
                        </g>
                        <g className="cursor-pointer">
                          <circle cx="320" cy="50" fill="#006c49" r="16"></circle>
                          <text dominantBaseline="middle" fill="#ffffff" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" x="320" y="53">PS</text>
                          <rect fill="#ffffff" height="13" rx="3" width="50" x="295" y="69"></rect>
                          <text fill="#006c49" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="320" y="78">Reach 21</text>
                        </g>
                        <g className="cursor-pointer">
                          <circle cx="70" cy="135" fill="#e5eeff" r="13"></circle>
                          <text dominantBaseline="middle" fill="#0b1c30" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="70" y="138">EV</text>
                        </g>
                        <g className="cursor-pointer">
                          <circle cx="370" cy="130" fill="#131b2e" r="14"></circle>
                          <text dominantBaseline="middle" fill="#ffffff" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="370" y="133">ML</text>
                        </g>
                        <circle cx="220" cy="125" fill="#006c49" fillOpacity="0.15" r="32" stroke="#006c49" strokeWidth="2"></circle>
                        <circle cx="220" cy="125" fill="#0b1c30" r="24"></circle>
                        <text dominantBaseline="middle" fill="#ffffff" fontFamily="Plus Jakarta Sans" fontSize="12" fontWeight="700" textAnchor="middle" x="220" y="123">ALEX M.</text>
                        <text fill="#6cf8bb" fontFamily="Inter" fontSize="8" fontWeight="700" textAnchor="middle" x="220" y="137">24 NODES</text>
                      </svg>
                    </div>
                  </div>

                  {/* Role Breakdown */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Reach</span>
                      <span className="font-telemetry-mono text-telemetry-mono font-bold text-secondary">24</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Driver</span>
                      <span className="font-telemetry-mono text-telemetry-mono font-bold text-on-surface">91%</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Early Adopter</span>
                      <span className="font-telemetry-mono text-telemetry-mono font-bold text-on-surface">88%</span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Passenger</span>
                      <span className="font-telemetry-mono text-telemetry-mono font-bold text-outline">12%</span>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-col gap-space-xs pt-1">
                    <button className="w-full py-3 px-space-md rounded-lg bg-secondary text-on-secondary font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs shadow-md hover:bg-secondary/90 active:scale-[0.99] transition-all" data-path="activation">
                      <span className="material-symbols-outlined text-xl">bolt</span>
                      <span>Activate Alex</span>
                    </button>
                    <button className="w-full py-2.5 px-space-md rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-all" data-path="communities">
                      <span className="material-symbols-outlined text-base">domain</span>
                      <span>View Northside</span>
                    </button>
                  </div>
                  <div className="text-[11px] text-outline text-center pt-1 font-telemetry-mono">
                    Public data only. No personal data stored.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
