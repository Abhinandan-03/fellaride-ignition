export default function Activation() {
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
            <a className="flex items-center px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-lg text-label-lg" data-path="connectors" href="#">
              <span className="material-symbols-outlined mr-space-sm text-base">share</span>Connectors
            </a>
            <a className="flex items-center justify-between px-space-sm py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="ghost-demand" href="#">
              <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-base">sensors</span>Ghost Demand
              </span>
              <span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">LIVE</span>
            </a>
            <a aria-current="page" className="flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all bg-primary text-on-primary font-bold" data-path="activation" href="#">
              <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-base">bolt</span>Activation
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
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
          <div className="flex flex-col w-full">
            {/* PAGE HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-telemetry-mono text-telemetry-mono text-secondary uppercase font-semibold">Ready to Launch</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Activate Northside</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-0.5">Start with one connection.</p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" data-path="connectors">
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  Back
                </button>
                <div className="flex items-center gap-space-xs px-space-md py-2 rounded-full bg-secondary/10 text-secondary font-label-md text-label-md">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-semibold">Ready</span>
                </div>
              </div>
            </div>

            {/* CONTEXT PIPELINE BAR */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-sm shadow-sm mb-space-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-sm items-center">
                <div className="flex items-center gap-space-sm px-space-sm py-1.5 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-lg">location_city</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">COMMUNITY</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface truncate">Northside</span>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm px-space-sm py-1.5 bg-surface-container-low rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm text-xs font-bold">
                    AM
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">Alex Morgan</span>
                    </div>
                    <span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">Score: <strong className="text-primary font-bold">96</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm px-space-sm py-1.5 bg-surface-container-low rounded-lg">
                  <span className="material-symbols-outlined text-outline text-lg">groups</span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">DEMAND</span>
                    <span className="font-telemetry-mono text-telemetry-mono text-on-surface">37 Riders / 6 Drivers</span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-error text-base">warning</span>
                    <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">Shortage</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-error text-on-error font-telemetry-mono text-telemetry-mono font-bold">-25 Seats</span>
                </div>
              </div>
            </div>

            {/* MAIN TWO-COLUMN WORKSPACE */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              {/* LEFT COLUMN (7 cols) */}
              <div className="xl:col-span-7 flex flex-col gap-space-lg">
                {/* 1. Strategy Card */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-xl">psychology</span>
                      <h2 className="font-headline-md text-headline-md text-primary font-semibold">Activation Strategy</h2>
                    </div>
                    <span className="px-space-xs py-0.5 rounded-full bg-surface-container-low font-telemetry-mono text-telemetry-mono text-on-surface-variant">Score 96</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Alex connects to 24 commuters in Northside. A personalized invitation bypasses the cold-start deadlock.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                    <div className="bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-1.5 text-secondary mb-1">
                        <span className="material-symbols-outlined text-base">hub</span>
                        <span className="font-label-md text-label-md text-primary font-semibold">Reach</span>
                      </div>
                      <div className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">24</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Potential members</p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-1.5 text-secondary mb-1">
                        <span className="material-symbols-outlined text-base">commute</span>
                        <span className="font-label-md text-label-md text-primary font-semibold">Driver Match</span>
                      </div>
                      <div className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">91%</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Morning route fit</p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-1.5 text-secondary mb-1">
                        <span className="material-symbols-outlined text-base">bolt</span>
                        <span className="font-label-md text-label-md text-primary font-semibold">Early Adopter</span>
                      </div>
                      <div className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">88%</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Initiation rate</p>
                    </div>
                  </div>
                </div>

                {/* 2. Invitation Preview */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-xl">mark_email_read</span>
                      <h2 className="font-headline-md text-headline-md text-primary font-semibold">Invitation Preview</h2>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">Personalized</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Personalized invitation for Alex Morgan.
                  </p>

                  <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                    <div className="p-space-sm bg-surface-container space-y-1.5">
                      <div className="flex items-center gap-space-sm font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                        <span className="w-16 uppercase text-outline font-bold">TO:</span>
                        <span className="text-primary font-semibold">Alex Morgan</span>
                      </div>
                      <div className="flex items-center gap-space-sm font-telemetry-mono text-telemetry-mono text-on-surface-variant">
                        <span className="w-16 uppercase text-outline font-bold">SUBJECT:</span>
                        <span className="text-primary font-semibold">Start Northside Carpool Group</span>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-lowest font-body-md text-body-md text-on-surface leading-relaxed space-y-3">
                      <p>Hey Alex —</p>
                      <p>
                        Several members from <strong>Northside Community</strong> travel toward Central District daily. This Saturday’s <strong>Community Sports Festival</strong> will create serious transit and parking bottlenecks.
                      </p>
                      <p>
                        You could help start a private shared carpool group for the neighborhood and coordinate the first rides before seats fill up.
                      </p>
                      <div className="py-space-sm">
                        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm shadow-sm">
                          <div className="flex items-center gap-space-sm">
                            <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-xl">car_tag</span>
                            </div>
                            <div>
                              <h5 className="font-headline-sm text-headline-sm text-primary">Northside Ride Pool</h5>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">24 initial spots reserved</span>
                            </div>
                          </div>
                          <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all whitespace-nowrap shadow-sm" data-path="butterfly-effect">
                            Join & Activate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Private Link */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-xl">link</span>
                      <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Invite Link</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">Invite-Only</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-xs p-1.5 bg-surface-container-low rounded-lg">
                    <div className="flex items-center gap-space-xs px-space-sm flex-1">
                      <span className="material-symbols-outlined text-outline text-base">lock_open</span>
                      <input className="w-full bg-transparent font-telemetry-mono text-telemetry-mono text-primary font-semibold focus:outline-none select-all" readOnly type="text" value="fellaride.app/northside/start?c=AM96" />
                    </div>
                    <button className="flex items-center gap-1.5 px-space-md py-2 rounded-md bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all shadow-sm">
                      <span className="material-symbols-outlined text-base">content_copy</span>
                      <span>Copy Link</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: CASCADE & LAUNCH (5 cols) */}
              <div className="xl:col-span-5 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-xl">account_tree</span>
                      <h3 className="font-headline-md text-headline-md text-primary font-semibold">Growth Cascade</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-telemetry-mono text-telemetry-mono font-bold">T+7 DAYS</span>
                  </div>

                  <div className="flex items-baseline justify-between p-space-md rounded-xl bg-surface-container-low mb-space-md">
                    <div>
                      <div className="font-display-hero text-display-hero text-primary tracking-tight font-extrabold flex items-center gap-2">
                        1 <span className="text-secondary font-normal text-3xl">→</span> 24
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant">1 connector unlocks 24 commuters</span>
                    </div>
                  </div>

                  {/* Branching Steps */}
                  <div className="relative pl-6 space-y-3 mb-space-md">
                    <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-surface-container-highest"></div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-telemetry-mono text-[10px] z-10 font-bold">1</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">1 Connector (Alex)</span>
                        <span className="font-telemetry-mono text-telemetry-mono text-primary font-semibold">Score: 96</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-telemetry-mono text-[10px] z-10 font-bold">2</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">24 Members</span>
                        <span className="font-telemetry-mono text-telemetry-mono text-secondary font-semibold">Wave 1</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-surface-tint text-on-primary flex items-center justify-center font-telemetry-mono text-[10px] z-10 font-bold">3</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">8 Drivers + 15 Passengers</span>
                        <span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Balanced</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-telemetry-mono text-[10px] z-10 font-bold">4</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">14 Rides / week</span>
                        <span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">Active</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-telemetry-mono text-[10px] z-10 font-bold">5</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">21 Referrals</span>
                        <span className="font-telemetry-mono text-telemetry-mono text-secondary font-bold">Organic</span>
                      </div>
                    </div>
                  </div>

                  {/* Launch CTA */}
                  <div className="pt-space-sm flex flex-col gap-space-sm">
                    <button className="w-full py-3.5 px-space-md rounded-xl bg-secondary text-on-secondary font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs shadow-md hover:bg-secondary/90 transition-all" data-path="butterfly-effect">
                      <span className="material-symbols-outlined text-xl">bolt</span>
                      <span>Launch Activation</span>
                    </button>
                    <span className="text-[11px] text-outline text-center font-telemetry-mono">
                      Sends invite link and initializes ride group.
                    </span>
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
