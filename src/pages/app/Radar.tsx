import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Clock, ListFilter, LocateFixed, MapPin, Minus, Network, Plus, RefreshCw, Search, ShieldCheck, Zap } from 'lucide-react';

export default function Radar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full gap-space-lg">
            {/* TOP HEADER & CONTROLS */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm uppercase tracking-wider mb-1">
                  <span>Discover</span>
                  <ChevronRight className="text-xs" />
                  <span className="text-secondary font-bold">Community Radar</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary ml-1 animate-pulse"></span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Community Radar</h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Find communities ready to start ride networks.</p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="hidden sm:flex items-center gap-space-xs px-3 py-1.5 bg-surface-container rounded-lg text-on-surface-variant font-mono text-mono">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                  <span className="text-on-surface font-semibold">Updated just now</span>
                </div>
                <button aria-label="Filter Map Intel" className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
                  <ListFilter className="text-base text-secondary" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-inverse-surface transition-all">
                  <RefreshCw className="text-base" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* 4 COMPACT KPI CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Communities</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-mono text-mono font-semibold">+3 this week</span>
                </div>
                <div className="flex items-baseline gap-space-sm mt-space-sm">
                  <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">24</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">mapped</span>
                </div>
                <div className="flex items-center gap-1.5 mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <CheckCircle2 className="text-sm text-secondary" />
                  <span>100% metro coverage</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-surface-container-highest"></div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">High Potential</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-mono text-mono font-bold">Score ≥ 75</span>
                </div>
                <div className="flex items-baseline gap-space-sm mt-space-sm">
                  <span className="font-headline-lg text-headline-lg text-secondary tracking-tight">7</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">prime zones</span>
                </div>
                <div className="flex items-center gap-1.5 mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <Zap className="text-sm text-secondary" />
                  <span>Ready to activate</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary"></div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Commute Routes</span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-mono text-mono font-semibold">84% overlap</span>
                </div>
                <div className="flex items-baseline gap-space-sm mt-space-sm">
                  <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">18</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">corridors</span>
                </div>
                <div className="flex items-center gap-1.5 mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <Clock className="text-sm text-on-surface-variant" />
                  <span>Peak hours aligned</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-surface-container-highest"></div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Connectors</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-mono text-mono font-semibold">Ready</span>
                </div>
                <div className="flex items-baseline gap-space-sm mt-space-sm">
                  <span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">12</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">ready to lead</span>
                </div>
                <div className="flex items-center gap-1.5 mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <Network className="text-sm text-secondary" />
                  <span>High availability</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-surface-container-highest"></div>
              </div>
            </div>

            {/* MAIN 2-COLUMN INTELLIGENCE WORKSPACE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* LEFT COLUMN: INTERACTIVE MAP (8 cols) */}
              <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <div className="p-space-md bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm flex-1 min-w-[240px]">
                    <div className="relative w-full max-w-sm">
                      <Search className="absolute left-3 top-2.5 text-outline text-base" />
                      <input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none shadow-sm" placeholder="Search communities or corridors..." type="text" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg overflow-x-auto">
                    <button className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap">All Clusters (4)</button>
                    <button className="px-2.5 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all whitespace-nowrap">High Potential (2)</button>
                    <div className="h-4 w-px bg-surface-variant mx-0.5"></div>
                    <button className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest text-secondary font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      <span>Corridors</span>
                    </button>
                    <button className="flex items-center gap-1 px-2.5 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                      <span>Heatmap</span>
                    </button>
                  </div>
                </div>

                {/* Map SVG Canvas */}
                <div className="relative w-full h-[620px] bg-surface-container-low overflow-hidden select-none">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern height="40" id="gridPattern" patternUnits="userSpaceOnUse" width="40">
                        <path className="text-surface-container" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                        <circle className="text-surface-variant" cx="40" cy="40" fill="currentColor" r="1"></circle>
                      </pattern>
                      <linearGradient gradientUnits="userSpaceOnUse" id="northsideGrad" x1="280" x2="440" y1="130" y2="350">
                        <stop offset="0%" stopColor="#006c49" stopOpacity="0.9"></stop>
                        <stop offset="100%" stopColor="#6cf8bb" stopOpacity="0.8"></stop>
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="eastviewGrad" x1="610" x2="440" y1="210" y2="350">
                        <stop offset="0%" stopColor="#006c49" stopOpacity="0.6"></stop>
                        <stop offset="100%" stopColor="#6cf8bb" stopOpacity="0.3"></stop>
                      </linearGradient>
                    </defs>
                    <rect fill="url(#gridPattern)" height="100%" width="100%"></rect>
                    <path className="text-surface-container-high" d="M-20,480 C120,470 200,530 320,540 C440,550 560,510 650,560 C740,610 820,600 840,600 L840,640 L-20,640 Z" fill="currentColor" opacity="0.45"></path>
                    <path d="M 280,130 C 330,190 380,260 440,350" fill="none" stroke="url(#northsideGrad)" strokeLinecap="round" strokeWidth="6"></path>
                    <path d="M 280,130 C 330,190 380,260 440,350" fill="none" stroke="#6cf8bb" strokeDasharray="10 8" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M 610,210 C 570,250 510,290 440,350" fill="none" stroke="url(#eastviewGrad)" strokeLinecap="round" strokeWidth="4"></path>
                    <path d="M 520,490 C 490,440 470,390 440,350" fill="none" stroke="#565e74" strokeDasharray="6 6" strokeLinecap="round" strokeWidth="3"></path>
                    <path d="M 190,380 C 260,370 340,360 440,350" fill="none" stroke="#b87500" strokeLinecap="round" strokeWidth="3"></path>
                    <circle cx="440" cy="350" fill="none" r="38" stroke="#76777d" strokeWidth="1"></circle>
                    <circle cx="440" cy="350" fill="#dce9ff" r="22"></circle>
                    <circle cx="440" cy="350" fill="#0b1c30" r="10"></circle>
                    <circle cx="280" cy="130" fill="#006c49" fillOpacity="0.18" r="44"></circle>
                    <circle cx="280" cy="130" fill="#006c49" r="18"></circle>
                    <circle cx="610" cy="210" fill="#565e74" fillOpacity="0.15" r="32"></circle>
                    <circle cx="610" cy="210" fill="#565e74" r="14"></circle>
                    <circle cx="520" cy="490" fill="#565e74" r="12"></circle>
                    <circle cx="190" cy="380" fill="#b87500" r="12"></circle>
                  </svg>

                  {/* Pin: Central Hub */}
                  <div className="absolute left-[440px] top-[350px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
                    <span className="mt-8 px-2 py-0.5 rounded bg-primary text-on-primary font-mono text-[10px] font-bold shadow-md">
                      CENTRAL TECH HUB
                    </span>
                  </div>

                  {/* Priority Node Tag */}
                  <div className="absolute left-[280px] top-[75px] -translate-x-1/2 z-20">
                    <div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-md border border-secondary/20 flex flex-col gap-1 min-w-[210px]">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-[10px] uppercase font-bold text-secondary">Priority #1</span>
                        <span className="font-mono text-[11px] font-bold text-on-surface bg-secondary-container/40 px-1.5 py-0.2 rounded">91/100</span>
                      </div>
                      <span className="font-headline-sm text-sm text-on-surface font-bold">Northside Heights</span>
                      <span className="text-[11px] text-on-surface-variant">43 drivers · 128 passengers · 7 connectors</span>
                    </div>
                  </div>

                  {/* Floating Controls */}
                  <div className="absolute top-4 right-4 flex flex-col bg-surface-container-lowest rounded-lg shadow-md p-1 gap-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface hover:bg-surface-container transition-colors" title="Zoom In">
                      <Plus className="text-base" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface hover:bg-surface-container transition-colors" title="Zoom Out">
                      <Minus className="text-base" />
                    </button>
                    <div className="h-px w-6 bg-surface-variant mx-auto my-0.5"></div>
                    <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface hover:bg-surface-container transition-colors" title="Center Hub">
                      <LocateFixed className="text-base" />
                    </button>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 shadow-lg flex flex-col gap-1.5 max-w-xs text-on-surface">
                    <div className="font-label-sm text-[10px] font-bold uppercase tracking-wider text-outline mb-0.5">Legend</div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-body-sm text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
                        <span>High Potential (≥75)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-on-surface shrink-0"></span>
                        <span>Moderate (70-74)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-outline shrink-0"></span>
                        <span>Emerging (&lt;70)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-secondary shrink-0"></span>
                        <span>Active Route</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Ticker */}
                  <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm font-mono text-[11px] text-on-surface-variant flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span>4 clusters · 3 corridors · 91% confidence</span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: DOSSIER (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col gap-space-xs pb-space-sm bg-surface-container-lowest">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Priority #1</span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">High Potential</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Northside</h2>
                        <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
                          <MapPin className="text-sm text-secondary" />
                          <span>Metro Sector 04 · 4.8 km Radius</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-baseline px-3 py-1.5 bg-secondary-container rounded-xl">
                          <span className="font-headline-lg text-headline-lg text-on-secondary-container font-bold">91</span>
                          <span className="font-mono text-mono text-on-secondary-container opacity-70 ml-0.5">/100</span>
                        </div>
                        <span className="font-mono text-[10px] text-secondary font-semibold uppercase tracking-wider mt-0.5">Potential</span>
                      </div>
                    </div>
                  </div>

                  {/* Opportunity Signals */}
                  <div className="flex flex-col gap-2.5 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Opportunity Signals</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-body-sm font-medium">
                        <span className="text-on-surface">Population Density</span>
                        <span className="font-mono font-semibold text-secondary">92 / 100</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-body-sm font-medium">
                        <span className="text-on-surface">Commute Overlap</span>
                        <span className="font-mono font-semibold text-secondary">88 / 100</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-body-sm font-medium">
                        <span className="text-on-surface">Route Match</span>
                        <span className="font-mono font-semibold text-secondary">91 / 100</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full" style={{ width: '91%' }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-body-sm font-medium">
                        <span className="text-on-surface">Transit Need</span>
                        <span className="font-mono font-semibold text-on-surface">86 / 100</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-secondary-fixed-dim rounded-full" style={{ width: '86%' }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-body-sm font-medium">
                        <span className="text-on-surface">Connector Readiness</span>
                        <span className="font-mono font-semibold text-on-surface-variant">78 / 100</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-outline rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Why Northside? */}
                  <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-secondary">
                      <ShieldCheck className="text-base" />
                      <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">Why Northside?</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                      High commute overlap + 7 active connectors.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-mono text-[11px] font-semibold">Reach 24</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-mono text-[11px]">Zero Subsidy</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-mono text-[11px]">High Overlap</span>
                    </div>
                  </div>

                  {/* Corridor Rankings */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Corridor Rankings</span>
                      <span className="font-mono text-[11px] text-secondary">Peak Hours</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low text-on-surface">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="font-label-md text-label-md">Northside → Central District</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="text-secondary font-semibold">8:05 AM</span>
                          <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-bold">High</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="font-label-md text-label-md">Eastview → Central District</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="text-on-surface-variant">8:20 AM</span>
                          <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-bold">High</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-outline"></span>
                          <span className="font-label-md text-label-md">Lakeside → Central District</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="text-on-surface-variant">8:45 AM</span>
                          <span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface">Med</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                          <span className="font-label-md text-label-md">West End → Central District</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="text-on-surface-variant">9:00 AM</span>
                          <span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface">Med</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Community Snapshot */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Community Snapshot</span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-mono text-base font-bold text-on-surface">12.4k</span>
                        <span className="text-[10px] text-on-surface-variant leading-tight mt-0.5">Members</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-mono text-base font-bold text-on-surface">43</span>
                        <span className="text-[10px] text-on-surface-variant leading-tight mt-0.5">Drivers</span>
                      </div>
                      <div className="p-2 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-mono text-base font-bold text-on-surface">128</span>
                        <span className="text-[10px] text-on-surface-variant leading-tight mt-0.5">Passengers</span>
                      </div>
                      <div className="p-2 rounded-lg bg-secondary-container flex flex-col">
                        <span className="font-mono text-base font-bold text-on-secondary-container">7</span>
                        <span className="text-[10px] text-on-secondary-container font-semibold leading-tight mt-0.5">Connectors</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 pt-2">
                    <button onClick={() => navigate('/app/activation')} className="w-full py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg shadow-sm hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <span>Activate Community</span>
                      <ArrowRight className="text-base" />
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all text-center cursor-pointer">
                        Compare
                      </button>
                      <button className="py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all text-center cursor-pointer">
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
