export default function CommandCenter() {
  return (
    <div className="flex flex-col w-full gap-space-lg">
            {/* TOP HEADER & CONTROLS */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-sm">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Command Center</h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-telemetry-mono text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    Updated 2m ago
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Find where the next community can start.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-space-sm">
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">tune</span>
                  Filter
                </button>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">description</span>
                  Export
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-surface-container-highest hover:text-on-surface transition-all" data-path="ghost-demand">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">radar</span>
                  Scan Demand
                </button>
              </div>
            </div>

            {/* 4-METRIC TOP SUMMARY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              {/* KPI 1 */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Communities</span>
                  <span className="flex items-center text-secondary font-telemetry-mono text-label-sm bg-secondary-container/40 px-2 py-0.5 rounded-full">
                    +3 this wk
                  </span>
                </div>
                <div className="flex items-baseline gap-2 my-2">
                  <span className="font-headline-lg text-display-hero text-on-surface tracking-tight">24</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">communities</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">100% metro coverage</span>
                  <svg className="w-20 h-5 text-secondary overflow-visible" fill="none" viewBox="0 0 80 20">
                    <path d="M0 16 L15 14 L30 15 L45 8 L60 11 L75 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <circle cx="75" cy="3" fill="currentColor" r="2.5"></circle>
                  </svg>
                </div>
              </div>

              {/* KPI 2 */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">High Potential</span>
                  <span className="flex items-center text-on-surface font-telemetry-mono text-label-sm bg-surface-container px-2 py-0.5 rounded-full">
                    Score ≥ 75
                  </span>
                </div>
                <div className="flex items-baseline gap-2 my-2">
                  <span className="font-headline-lg text-display-hero text-secondary tracking-tight">7</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">high potential</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">3 ready this week</span>
                  <svg className="w-20 h-5 text-secondary overflow-visible" fill="none" viewBox="0 0 80 20">
                    <path d="M0 18 L18 15 L36 12 L54 6 L72 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <circle cx="72" cy="2" fill="currentColor" r="2.5"></circle>
                  </svg>
                </div>
              </div>

              {/* KPI 3 */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Connectors</span>
                  <span className="flex items-center text-secondary font-telemetry-mono text-label-sm bg-secondary-container/40 px-2 py-0.5 rounded-full">
                    94% driver conv
                  </span>
                </div>
                <div className="flex items-baseline gap-2 my-2">
                  <span className="font-headline-lg text-display-hero text-on-surface tracking-tight">38</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">connectors</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">4 active catalysts</span>
                  <svg className="w-20 h-5 text-on-surface-variant overflow-visible" fill="none" viewBox="0 0 80 20">
                    <path d="M0 14 L20 12 L40 13 L60 8 L75 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <circle cx="75" cy="6" fill="currentColor" r="2.5"></circle>
                  </svg>
                </div>
              </div>

              {/* KPI 4 */}
              <div className="flex flex-col justify-between p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                <div className="flex items-start justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Demand Opportunities</span>
                  <span className="flex items-center text-on-tertiary-container font-telemetry-mono text-label-sm bg-tertiary-fixed px-2 py-0.5 rounded-full">
                    4 shortages
                  </span>
                </div>
                <div className="flex items-baseline gap-2 my-2">
                  <span className="font-headline-lg text-display-hero text-on-surface tracking-tight">12</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">opportunities</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">87% confidence</span>
                  <svg className="w-20 h-5 text-on-tertiary-container overflow-visible" fill="none" viewBox="0 0 80 20">
                    <path d="M0 8 L22 14 L42 9 L58 16 L76 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <circle cx="76" cy="4" fill="currentColor" r="2.5"></circle>
                  </svg>
                </div>
              </div>
            </div>

            {/* MAIN MAP VISUALIZATION */}
            <div className="relative w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm overflow-hidden flex flex-col gap-space-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm z-10">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-base">hub</span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Community Map</h2>
                    <span className="font-telemetry-mono text-label-sm text-outline">Metro Commute Graph</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface-container-low">
                  <button className="px-3 py-1 text-label-sm font-label-sm rounded-lg bg-surface-container-lowest text-on-surface shadow-sm transition-colors">Corridors</button>
                  <button className="px-3 py-1 text-label-sm font-label-sm rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">Connectors</button>
                  <button className="px-3 py-1 text-label-sm font-label-sm rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">Ghost Demand</button>
                  <button className="px-3 py-1 text-label-sm font-label-sm rounded-lg text-on-surface-variant hover:text-on-surface transition-colors">Gaps</button>
                </div>
              </div>

              {/* Map Canvas */}
              <div className="relative w-full h-[400px] rounded-xl bg-surface-container-low overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 500">
                  <defs>
                    <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                      <path d="M 40 0 L 0 0 0 40" fill="none" opacity="0.6" stroke="#d3e4fe" strokeWidth="0.75"></path>
                    </pattern>
                    <radialGradient cx="50%" cy="50%" id="northside-glow" r="50%">
                      <stop offset="0%" stopColor="#006c49" stopOpacity="0.25"></stop>
                      <stop offset="100%" stopColor="#006c49" stopOpacity="0"></stop>
                    </radialGradient>
                  </defs>
                  <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
                  <path d="M 280 110 Q 420 160 520 250" fill="none" stroke="#006c49" strokeLinecap="round" strokeWidth="4"></path>
                  <path className="animate-pulse" d="M 280 110 Q 420 160 520 250" fill="none" stroke="#6cf8bb" strokeDasharray="8 6" strokeWidth="1.5"></path>
                  <path d="M 760 170 Q 640 200 520 250" fill="none" stroke="#565e74" strokeLinecap="round" strokeWidth="2.5"></path>
                  <path d="M 680 390 Q 590 320 520 250" fill="none" stroke="#565e74" strokeDasharray="4 4" strokeWidth="2"></path>
                  <path d="M 180 340 Q 340 310 520 250" fill="none" stroke="#b87500" strokeLinecap="round" strokeWidth="3"></path>
                  <path d="M 280 110 Q 180 230 180 340" fill="none" opacity="0.8" stroke="#ba1a1a" strokeDasharray="6 4" strokeWidth="2"></path>
                  <circle cx="520" cy="250" fill="none" opacity="0.4" r="45" stroke="#76777d" strokeWidth="1"></circle>
                  <circle cx="520" cy="250" fill="#dce9ff" opacity="0.8" r="28"></circle>
                  <circle cx="280" cy="110" fill="url(#northside-glow)" r="54"></circle>
                  <circle className="animate-spin" cx="280" cy="110" fill="none" r="32" stroke="#006c49" strokeDasharray="4 4" strokeWidth="1.5" style={{ animationDuration: '18s' }}></circle>
                </svg>

                {/* Pin: Central Tech Hub */}
                <div className="absolute top-[230px] left-[500px] flex flex-col items-center pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-md">
                    <span className="material-symbols-outlined text-[13px]">apartment</span>
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded bg-primary text-on-primary font-telemetry-mono text-[10px] tracking-wide">
                    CENTRAL TECH HUB
                  </span>
                </div>

                {/* Node: Eastview */}
                <div className="absolute top-[150px] left-[740px] flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-surface-container-highest border-2 border-primary-container flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-on-surface"></span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm">
                    Eastview Civic Hub
                  </div>
                  <span className="font-telemetry-mono text-[10px] text-outline">Score: 84</span>
                </div>

                {/* Node: Lakeside */}
                <div className="absolute top-[370px] left-[660px] flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm">
                    Lakeside Marina
                  </div>
                  <span className="font-telemetry-mono text-[10px] text-outline">Score: 76</span>
                </div>

                {/* Node: West End */}
                <div className="absolute top-[320px] left-[160px] flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center ring-4 ring-tertiary-fixed-dim/30">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span> West End Arena
                  </div>
                  <span className="font-telemetry-mono text-[10px] text-error font-semibold">-25 Seats</span>
                </div>

                {/* Node: Northside (Priority #1) */}
                <div className="absolute top-[80px] left-[250px] flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-md ring-4 ring-secondary-container">
                    <span className="material-symbols-outlined text-[15px]">flash_on</span>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
                    Northside Heights
                  </div>
                  <span className="font-telemetry-mono text-[10px] text-secondary font-bold">91/100 Potential</span>
                </div>

                {/* Callout HUD Over Node #1 */}
                <div className="absolute top-4 left-4 p-3.5 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md max-w-sm flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-secondary font-telemetry-mono text-[10px] uppercase tracking-wider font-bold">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                    Priority #1
                  </div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">Northside Community</div>
                  <div className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5">
                    <span className="text-secondary font-bold">91/100 Potential</span> · 43 drivers · 128 passengers · 7 connectors
                  </div>
                  <div className="text-body-sm text-on-surface-variant mt-1 border-t border-surface-container pt-1">
                    <strong className="text-on-surface font-semibold">Why Northside?</strong> High commute overlap + strong connector potential.
                  </div>
                  <button className="mt-1 self-start px-3 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-surface-container-highest hover:text-on-surface transition-all shadow-sm" data-path="communities">
                    View Community
                  </button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-3 right-3 flex items-center gap-4 px-3 py-1.5 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md text-label-sm font-label-sm shadow-sm text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <span>High Potential</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-4 h-1 bg-surface-tint rounded"></span>
                    <span>Live Corridor</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
                    <span>Ghost Demand</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-secondary">flare</span>
                    <span>Connector</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TWO-COLUMN WORKSPACE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* LEFT COLUMN: Prioritized Communities */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">Prioritized Communities</h2>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Sorted by potential</span>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <span className="material-symbols-outlined absolute left-2.5 top-2 text-outline text-[18px]">search</span>
                    <input className="w-full h-8 pl-8 pr-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none shadow-sm" placeholder="Filter by name, score, corridor..." type="text" />
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1">
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap shadow-sm">
                    All Communities (24)
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors whitespace-nowrap">
                    High Potential (7)
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors whitespace-nowrap">
                    Active Pilots (2)
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors whitespace-nowrap">
                    Cold / Radar (15)
                  </button>
                </div>

                {/* Communities Stack */}
                <div className="flex flex-col gap-space-sm">
                  {/* CARD 1: Northside Community */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary font-headline-sm text-headline-sm font-bold">
                          91
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">Northside Community</h3>
                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                              91/100 Potential
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-[16px] text-secondary">trending_up</span>
                            Northside Heights → Central Tech Hub (8:05 AM Peak · 94% match)
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1 shrink-0" data-path="communities">
                        Analyze <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Members</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">12,400</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Drivers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">43</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Passengers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">128</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Connectors</div>
                        <div className="font-headline-sm text-headline-sm text-secondary font-bold">7</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px]">
                          AM
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Connector: <strong className="text-on-surface">Alex Morgan</strong> (Score: 96)
                        </span>
                      </div>
                      <span className="font-telemetry-mono text-[11px] text-secondary font-medium">Ready to activate</span>
                    </div>
                  </div>

                  {/* CARD 2: Eastview Community */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-headline-sm text-headline-sm font-bold">
                          84
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">Eastview Community</h3>
                            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                              84/100 Potential
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-[16px]">route</span>
                            Eastview Civic Hub → Metro Medical Center
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1 shrink-0">
                        Analyze <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Members</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">9,850</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Drivers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">29</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Passengers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">86</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Connectors</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface font-bold">5</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary-fixed-variant text-on-primary flex items-center justify-center font-label-sm text-[10px]">
                          PS
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Connector: <strong className="text-on-surface">Priya Shah</strong> (Score: 88)
                        </span>
                      </div>
                      <span className="font-telemetry-mono text-[11px] text-outline font-medium">Shift sync pending</span>
                    </div>
                  </div>

                  {/* CARD 3: Lakeside Community */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-on-surface font-headline-sm text-headline-sm font-bold">
                          76
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">Lakeside Community</h3>
                            <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-container font-label-sm text-label-sm font-semibold">
                              Connector Needed
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-[16px]">route</span>
                            Lakeside Marina → Downtown Financial Core
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1 shrink-0">
                        Analyze <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Members</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">8,200</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Drivers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">18</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Passengers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">74</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Connectors</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">2</div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: West End Community */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col gap-space-sm opacity-90">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-outline font-headline-sm text-headline-sm font-bold">
                          68
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">West End Community</h3>
                            <span className="px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-label-sm font-semibold">
                              Monitoring
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-[16px]">route</span>
                            West End Arena → University Station
                          </div>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all flex items-center gap-1 shrink-0">
                        Analyze <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2 pt-2 bg-surface-container-low/60 p-2.5 rounded-lg">
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Members</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">6,400</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Drivers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">14</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Passengers</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">42</div>
                      </div>
                      <div>
                        <div className="font-telemetry-mono text-[11px] text-outline uppercase">Connectors</div>
                        <div className="font-headline-sm text-headline-sm text-on-surface">1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Ghost Demand & Next Actions */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                {/* HERO ALERT CARD: Ghost Demand */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-ping"></span>
                      <span className="font-telemetry-mono text-label-sm uppercase tracking-wider text-on-tertiary-container font-bold">
                        Ghost Demand · 87%
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-container font-telemetry-mono text-[10px] font-bold">
                      TIME CRITICAL
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Northside Sports Festival</h3>
                    <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant mt-1">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">location_on</span>
                      <span>Northside Park ⇄ West Arena · Saturday 7:45 AM</span>
                    </div>
                  </div>

                  {/* Metric Comparison Grid */}
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col">
                      <span className="font-telemetry-mono text-[11px] text-outline uppercase">Predicted Riders</span>
                      <span className="font-headline-lg text-headline-lg text-on-surface mt-1 font-bold">37</span>
                      <span className="font-body-sm text-[11px] text-secondary font-medium">Passenger pool ready</span>
                    </div>
                    <div className="p-3 rounded-lg bg-surface-container-low flex flex-col">
                      <span className="font-telemetry-mono text-[11px] text-outline uppercase">Available Drivers</span>
                      <span className="font-headline-lg text-headline-lg text-on-surface mt-1 font-bold">6</span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">Capacity: 12 seats</span>
                    </div>
                    <div className="col-span-2 p-3 rounded-lg bg-error-container/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-error text-[20px]">warning</span>
                        <div>
                          <div className="font-label-sm text-label-sm font-bold text-error uppercase">Seat Shortage</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">25 unassigned passengers expected</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-error text-on-error font-telemetry-mono text-label-sm font-bold">
                        -25 SEATS
                      </span>
                    </div>
                  </div>

                  {/* Signals */}
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Contributing Signals:</span>
                    <div className="flex items-center justify-between text-body-sm">
                      <span className="text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-secondary">event</span>
                        Event Schedule Sync
                      </span>
                      <span className="font-telemetry-mono text-label-sm text-on-surface font-bold">92%</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-body-sm mt-1">
                      <span className="text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-secondary">fitness_center</span>
                        Athletic Club Patterns
                      </span>
                      <span className="font-telemetry-mono text-label-sm text-on-surface font-bold">89%</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '89%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-body-sm mt-1">
                      <span className="text-on-surface flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-outline">directions_bus</span>
                        Weekend Transit Shift
                      </span>
                      <span className="font-telemetry-mono text-label-sm text-on-surface font-bold">78%</span>
                    </div>
                    <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                      <div className="bg-surface-tint h-full rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-space-sm pt-2">
                    <button className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-on-primary font-label-md text-label-md text-center shadow-sm hover:bg-surface-container-highest hover:text-on-surface transition-all" data-path="ghost-demand">
                      View Opportunity
                    </button>
                    <button className="flex-1 py-2.5 px-4 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md text-center shadow-sm hover:bg-secondary/90 transition-all flex items-center justify-center gap-1.5" data-path="activation">
                      <span className="material-symbols-outlined text-[18px]">bolt</span>
                      Mobilize Connectors
                    </button>
                  </div>
                </div>

                {/* QUICK INTERVENTIONS */}
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">auto_fix_high</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Recommended Interventions</h3>
                    </div>
                    <span className="font-telemetry-mono text-label-sm text-outline">NEXT ACTIONS</span>
                  </div>

                  {/* Action 1 */}
                  <div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">send</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Invite Alex Morgan</span>
                        <span className="font-telemetry-mono text-[10px] text-secondary font-bold shrink-0">HIGH IMPACT</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Ready to start carpool loop for 24 riders in Northside.
                      </p>
                      <button className="mt-2 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:underline" data-path="activation">
                        Send Invite →
                      </button>
                    </div>
                  </div>

                  {/* Action 2 */}
                  <div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">toll</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Schedule Driver Incentive</span>
                        <span className="font-telemetry-mono text-[10px] text-outline shrink-0">NORTHSIDE 8:00 AM</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Add $4.50 credit per seat to unblock morning commute.
                      </p>
                      <button className="mt-2 text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:underline">
                        Set Incentive →
                      </button>
                    </div>
                  </div>

                  {/* Action 3 */}
                  <div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-all flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-surface-tint text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">sync_alt</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">Sync Hospital Shifts</span>
                        <span className="font-telemetry-mono text-[10px] text-outline shrink-0">CIVIC HUB</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Align 34 nursing shift changes at 07:00 and 19:00 with existing routes.
                      </p>
                      <button className="mt-2 text-on-surface font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:underline">
                        Sync Shifts →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}
