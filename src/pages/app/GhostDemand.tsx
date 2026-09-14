import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Armchair, BadgeCheck, Brain, Clock, FileUser, GitBranch, Grid2x2, Network, RefreshCw, SlidersHorizontal, TrendingUp, Users, Zap } from 'lucide-react';

export default function GhostDemand() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* Top Operational Header */}
            <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-sm">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Ghost Demand</h1>
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-wide uppercase">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                    Simulated Engine
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  See demand before it appears.
                </p>
              </div>
              <div className="flex items-center gap-space-sm self-stretch lg:self-auto">
                <button className="flex-1 lg:flex-none flex items-center justify-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
                  <SlidersHorizontal className="text-base" />
                  <span>Filter</span>
                </button>
                <button className="flex-1 lg:flex-none flex items-center justify-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all font-label-md text-label-md shadow-sm">
                  <RefreshCw className="text-base text-secondary-fixed" />
                  <span>Refresh</span>
                </button>
              </div>
            </section>

            {/* KPI Cards (4 Cards) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-outline">Opportunities</span>
                  <Zap className="text-secondary text-lg" />
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg font-bold text-on-surface">12</span>
                  <span className="inline-flex items-center text-secondary font-label-sm text-label-sm font-semibold">
                    <TrendingUp className="text-sm" />+3 this week
                  </span>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                  <span className="text-error font-medium">4 seat shortages flagged</span>
                  <span className="font-mono text-mono text-outline">High priority</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-outline">High Confidence</span>
                  <BadgeCheck className="text-secondary text-lg" />
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg font-bold text-on-surface">7</span>
                  <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    Score ≥ 80%
                  </span>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                  <span>Confidence ≥ 80%</span>
                  <span className="font-mono text-mono text-secondary">Verified Events</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-on-surface-variant mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-outline">Predicted Passengers</span>
                  <Users className="text-on-surface text-lg" />
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg font-bold text-on-surface">184</span>
                  <span className="font-mono text-mono text-outline">TOTAL</span>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                  <span>Across 4 transit corridors</span>
                  <span className="font-mono text-mono text-on-surface">46/corridor avg</span>
                </div>
              </div>

              <div className="p-space-md rounded-xl bg-tertiary-container text-on-tertiary shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-tertiary-fixed mb-space-sm">
                  <span className="font-label-md text-label-md uppercase tracking-wider">Seat Shortage</span>
                  <span className="px-space-xs py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm">Deficit</span>
                </div>
                <div className="flex items-baseline gap-space-sm">
                  <span className="font-headline-lg text-headline-lg font-bold text-tertiary-fixed">-76</span>
                  <span className="font-mono text-mono text-tertiary-fixed-dim">SEATS</span>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-tertiary-fixed font-body-sm text-body-sm">
                  <span>Requires connector activation</span>
                  <span className="font-mono text-mono text-tertiary-fixed font-semibold">Immediate</span>
                </div>
              </div>
            </section>

            {/* Main 2-Column Split */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              {/* LEFT COLUMN: Hero Opportunity (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                {/* HERO OPPORTUNITY CARD */}
                <div className="rounded-xl bg-surface-container-lowest shadow-md overflow-hidden">
                  <div className="bg-tertiary-fixed px-space-md py-2 flex items-center justify-between text-on-tertiary-fixed">
                    <div className="flex items-center gap-space-xs font-label-sm text-label-sm font-bold tracking-wider uppercase">
                      <AlertTriangle className="text-base" />
                      <span>Predicted Shortage · Saturday 6:00 PM</span>
                    </div>
                    <span className="font-mono text-mono font-semibold bg-tertiary-container text-on-tertiary px-2 py-0.5 rounded">
                      Demand expected in 3 days
                    </span>
                  </div>

                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-sm">
                      <div className="flex flex-col gap-space-xs">
                        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Northside Sports Festival</h2>
                        <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                          <span className="flex items-center gap-1 font-semibold text-on-surface">
                            <GitBranch className="text-base text-secondary" />
                            Northside Community ⇄ Central District
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="text-base text-outline" />
                            Saturday · 6:00 PM (Surge: 5:15 PM – 7:30 PM)
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-lg self-start">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold font-mono text-mono">
                          87%
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm uppercase text-outline">Confidence</span>
                          <span className="font-body-sm text-body-sm font-semibold text-on-surface">87% confidence</span>
                        </div>
                      </div>
                    </div>

                    {/* Metric Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                      <div className="p-space-md rounded-lg bg-surface-container flex flex-col justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Predicted Passengers</span>
                        <div className="my-space-xs flex items-baseline gap-space-xs">
                          <span className="font-headline-lg text-headline-lg font-bold text-on-surface">37</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">passengers</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-outline">Event attendees</span>
                      </div>
                      <div className="p-space-md rounded-lg bg-surface-container flex flex-col justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Available Drivers</span>
                        <div className="my-space-xs flex items-baseline gap-space-xs">
                          <span className="font-headline-lg text-headline-lg font-bold text-on-surface">6</span>
                          <span className="font-body-sm text-body-sm text-secondary font-semibold">drivers</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-outline">12 seats capacity</span>
                      </div>
                      <div className="p-space-md rounded-lg bg-error-container text-on-error-container flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm uppercase font-bold tracking-wide">Seat Shortage</span>
                          <span className="px-space-xs py-0.5 rounded bg-error text-on-error font-label-sm text-label-sm">Deficit</span>
                        </div>
                        <div className="my-space-xs flex items-baseline gap-space-xs">
                          <span className="font-headline-lg text-headline-lg font-bold text-error">-25</span>
                          <span className="font-body-sm text-body-sm font-bold text-on-error-container">Seats</span>
                        </div>
                        <span className="font-body-sm text-body-sm font-medium text-error">25 seat shortage</span>
                      </div>
                    </div>

                    {/* Short Reason Box */}
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-start gap-space-sm">
                      <Brain className="text-secondary text-xl shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">Why this demand?</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Sports festival + Saturday commute creates 25-seat shortage. Existing driver supply is insufficient without connector mobilization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DEMAND FORECAST CHART */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Demand Forecast</h3>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Friday 12:00 → Saturday 20:00</span>
                    </div>
                    <div className="flex items-center gap-space-md font-body-sm text-body-sm">
                      <span className="flex items-center gap-1.5 text-on-surface">
                        <span className="w-3 h-1 rounded bg-secondary"></span>
                        Predicted Demand
                      </span>
                      <span className="flex items-center gap-1.5 text-outline">
                        <span className="w-3 h-1 border-b-2 border-dotted border-on-tertiary-container"></span>
                        Driver Capacity
                      </span>
                    </div>
                  </div>

                  <div className="relative w-full rounded-lg bg-surface-container-low p-space-md overflow-hidden">
                    <svg className="w-full h-56 overflow-visible" preserveAspectRatio="none" viewBox="0 0 760 220">
                      <defs>
                        <linearGradient id="deficitGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.22"></stop>
                          <stop offset="100%" stopColor="#ba1a1a" stopOpacity="0.02"></stop>
                        </linearGradient>
                        <linearGradient id="demandLineGrad" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0%" stopColor="#006c49"></stop>
                          <stop offset="60%" stopColor="#006c49"></stop>
                          <stop offset="100%" stopColor="#ba1a1a"></stop>
                        </linearGradient>
                      </defs>
                      <line stroke="#d3e4fe" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="730" y1="30" y2="30"></line>
                      <line stroke="#d3e4fe" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="730" y1="80" y2="80"></line>
                      <line stroke="#d3e4fe" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="730" y1="130" y2="130"></line>
                      <line stroke="#c6c6cd" strokeWidth="1" x1="40" x2="730" y1="180" y2="180"></line>
                      <line stroke="#d3e4fe" strokeWidth="1" x1="80" x2="80" y1="20" y2="180"></line>
                      <line stroke="#d3e4fe" strokeWidth="1" x1="280" x2="280" y1="20" y2="180"></line>
                      <line stroke="#d3e4fe" strokeWidth="1" x1="480" x2="480" y1="20" y2="180"></line>
                      <line stroke="#ba1a1a" strokeDasharray="4 4" strokeWidth="1.5" x1="660" x2="660" y1="20" y2="180"></line>
                      <path d="M 480 100 Q 560 65 660 38 L 660 135 Q 560 135 480 135 Z" fill="url(#deficitGradient)"></path>
                      <path d="M 40 148 L 220 144 L 400 138 L 480 135 L 660 135 L 730 135" fill="none" stroke="#b87500" strokeDasharray="5 4" strokeWidth="2.5"></path>
                      <path d="M 40 170 Q 180 160 280 145 T 480 100 Q 560 65 660 38 L 730 32" fill="none" stroke="url(#demandLineGrad)" strokeLinecap="round" strokeWidth="3.5"></path>
                      <circle cx="80" cy="168" fill="#006c49" r="4"></circle>
                      <circle cx="280" cy="145" fill="#006c49" r="4"></circle>
                      <circle cx="480" cy="100" fill="#006c49" r="5"></circle>
                      <circle cx="660" cy="38" fill="#ba1a1a" r="6"></circle>
                      <circle cx="660" cy="135" fill="#b87500" r="5"></circle>
                      <text fill="#ba1a1a" fontFamily="Inter" fontSize="11" fontWeight="700" x="670" y="32">37 PASSENGERS</text>
                      <text fill="#b87500" fontFamily="Inter" fontSize="10" fontWeight="600" x="670" y="140">12 SEATS</text>
                      <rect fill="#ffdad6" height="24" rx="4" width="130" x="520" y="78"></rect>
                      <text fill="#93000a" fontFamily="Inter" fontSize="10" fontWeight="700" x="528" y="94">-25 SEAT SHORTAGE</text>
                      <text fill="#76777d" fontFamily="Inter" fontSize="11" x="50" y="202">Fri 12:00</text>
                      <text fill="#76777d" fontFamily="Inter" fontSize="11" x="250" y="202">Sat 09:00</text>
                      <text fill="#76777d" fontFamily="Inter" fontSize="11" x="450" y="202">Sat 14:00</text>
                      <text fill="#ba1a1a" fontFamily="Inter" fontSize="11" fontWeight="700" x="620" y="202">Sat 18:00 (Surge)</text>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="text-base text-secondary" />
                      Updated every 15 minutes.
                    </span>
                    <span className="font-mono text-mono text-outline">Confidence: 87%</span>
                  </div>
                </div>

                {/* SIGNAL PIPELINE */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <Grid2x2 className="text-secondary text-lg" />
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Signal Pipeline</h3>
                    </div>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container font-mono text-mono text-on-surface-variant">
                      Zero app requests recorded yet
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-xs">
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-mono text-mono text-outline font-bold">01</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Public Data</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Calendar parsed</p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-mono text-mono text-outline font-bold">02</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Event Match</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Festival identified</p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-mono text-mono text-secondary font-bold">03</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Route Sync</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Route 44 surge</p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-mono text-mono text-outline font-bold">04</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Demand Model</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">37 riders projected</p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-error-container text-on-error-container flex flex-col gap-1">
                      <span className="font-mono text-mono text-error font-bold">05</span>
                      <span className="font-label-md text-label-md font-bold">Seat Deficit</span>
                      <p className="font-body-sm text-body-sm leading-tight">-25 seats gap</p>
                    </div>
                    <div className="p-space-sm rounded-lg bg-secondary text-on-secondary flex flex-col gap-1">
                      <span className="font-mono text-mono font-bold">06</span>
                      <span className="font-label-md text-label-md font-bold">Activation</span>
                      <p className="font-body-sm text-body-sm leading-tight">Mobilize Alex</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: RESOLUTION (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                {/* RECOMMENDED ACTION */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wide">Recommended Action</span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Predictive Match Anchor</h3>
                    </div>
                    <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
                      High Leverage
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Activate Northside's primary connector to cover seat gap.
                  </p>

                  <div className="p-space-md rounded-lg bg-surface-container-low flex items-center gap-space-md">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold">
                        AM
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Alex Morgan</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Northside Athletic Club Anchor</span>
                      <div className="flex items-center gap-space-xs mt-1">
                        <span className="font-mono text-mono font-bold text-secondary">Score: 96</span>
                        <span className="text-outline-variant">•</span>
                        <span className="font-mono text-mono text-on-surface">Reach: 24</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-space-md rounded-lg bg-surface-container flex flex-col gap-space-xs">
                    <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface tracking-wider">Expected Yield</span>
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="flex items-center gap-1.5 text-on-surface">
                        <Armchair className="text-secondary text-base" />
                        Mobilize +8 Drivers
                      </span>
                      <span className="font-mono text-mono font-semibold text-secondary">+16 seats</span>
                    </div>
                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                      <span className="flex items-center gap-1.5 text-on-surface">
                        <Network className="text-secondary text-base" />
                        Consolidate +15 Passengers
                      </span>
                      <span className="font-mono text-mono font-semibold text-on-surface">Carpools</span>
                    </div>
                    <div className="mt-space-xs pt-space-xs border-t border-surface-container-high flex items-center justify-between font-label-md text-label-md">
                      <span className="text-on-surface font-semibold">Net Deficit:</span>
                      <span className="font-bold text-secondary">0 Seats (Covered)</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-space-xs">
                    <button className="w-full py-2.5 px-space-md rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition-all font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs shadow-sm" onClick={() => navigate('/app/activation')}>
                      <Zap className="text-lg" />
                      <span>Activate Community</span>
                    </button>
                    <button className="w-full py-2 px-space-md rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-space-xs" onClick={() => navigate('/app/connectors')}>
                      <FileUser className="text-base" />
                      <span>View Connector</span>
                    </button>
                  </div>
                </div>

                {/* CORRIDOR MAP */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Corridor Map</h3>
                    <span className="font-mono text-mono text-secondary font-bold">ZONE 1</span>
                  </div>
                  <div className="relative w-full rounded-lg bg-primary-container p-space-md text-on-primary">
                    <svg className="w-full h-40" viewBox="0 0 340 180">
                      <path d="M 50 45 L 290 90" stroke="#ba1a1a" strokeDasharray="6 3" strokeWidth="3"></path>
                      <path d="M 60 140 L 290 90" stroke="#006c49" strokeWidth="2.5"></path>
                      <path d="M 170 160 L 290 90" stroke="#76777d" strokeWidth="1.5"></path>
                      <circle cx="50" cy="45" fill="#ba1a1a" r="9"></circle>
                      <circle cx="50" cy="45" fill="none" r="15" stroke="#ba1a1a" strokeWidth="1.5"></circle>
                      <text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="700" x="20" y="25">Northside</text>
                      <text fill="#ffdad6" fontFamily="Inter" fontSize="9" fontWeight="500" x="20" y="37">-25 Seats</text>
                      <circle cx="60" cy="140" fill="#006c49" r="7"></circle>
                      <text fill="#ffffff" fontFamily="Inter" fontSize="9" fontWeight="600" x="25" y="160">Eastview (+4)</text>
                      <circle cx="170" cy="160" fill="#76777d" r="5"></circle>
                      <text fill="#c6c6cd" fontFamily="Inter" fontSize="8" x="175" y="175">Lakeside</text>
                      <circle cx="290" cy="90" fill="#dae2fd" r="10"></circle>
                      <circle cx="290" cy="90" fill="#131b2e" r="4"></circle>
                      <text fill="#dae2fd" fontFamily="Inter" fontSize="10" fontWeight="700" x="240" y="80">Central Hub</text>
                    </svg>
                    <div className="mt-space-xs p-space-xs rounded bg-inverse-surface text-inverse-on-surface text-body-sm font-body-sm flex items-start gap-space-xs">
                      <GitBranch className="text-secondary-fixed text-base shrink-0 mt-0.5" />
                      <span><strong>Re-routing tip:</strong> 2 Eastview drivers covers 8 Northside seats.</span>
                    </div>
                  </div>
                </div>

                {/* CORRIDOR QUEUE */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Upcoming Demand</h3>
                    <span className="font-label-sm text-label-sm font-bold text-outline uppercase">3 Routes</span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Eastview Civic</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Sunday · 22 riders</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-mono text-label-sm">-12 seats</span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">Lakeside Marina</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Monday · 18 riders</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-mono text-label-sm">-8 seats</span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">West End Arena</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Tuesday · 14 riders</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-mono text-label-sm">Balanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
}
