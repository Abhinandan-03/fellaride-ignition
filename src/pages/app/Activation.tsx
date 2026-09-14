import { useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Brain, Building2, CarFront, Copy, GitFork, Link, LockOpen, MailCheck, Network, Train, Users, Zap } from 'lucide-react';
import { useApp } from '../../store/AppContext';

export default function Activation() {
  const navigate = useNavigate();
  const { activateCommunity } = useApp();

  return (
    <div className="flex flex-col w-full">
            {/* PAGE HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-mono text-mono text-secondary uppercase font-semibold">Ready to Launch</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Activate Northside</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-0.5">Start with one connection.</p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={() => navigate('/app/connectors')}>
                  <ArrowLeft className="text-base" />
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
                  <Building2 className="text-secondary text-lg" />
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
                    <span className="font-mono text-mono text-on-surface-variant">Score: <strong className="text-primary font-bold">96</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm px-space-sm py-1.5 bg-surface-container-low rounded-lg">
                  <Users className="text-outline text-lg" />
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">DEMAND</span>
                    <span className="font-mono text-mono text-on-surface">37 Riders / 6 Drivers</span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="text-error text-base" />
                    <span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">Shortage</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-error text-on-error font-mono text-mono font-bold">-25 Seats</span>
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
                      <Brain className="text-secondary text-xl" />
                      <h2 className="font-headline-md text-headline-md text-primary font-semibold">Activation Strategy</h2>
                    </div>
                    <span className="px-space-xs py-0.5 rounded-full bg-surface-container-low font-mono text-mono text-on-surface-variant">Score 96</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Alex connects to 24 commuters in Northside. A personalized invitation bypasses the cold-start deadlock.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
                    <div className="bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-1.5 text-secondary mb-1">
                        <Network className="text-base" />
                        <span className="font-label-md text-label-md text-primary font-semibold">Reach</span>
                      </div>
                      <div className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">24</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Potential members</p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-1.5 text-secondary mb-1">
                        <Train className="text-base" />
                        <span className="font-label-md text-label-md text-primary font-semibold">Driver Match</span>
                      </div>
                      <div className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">91%</div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Morning route fit</p>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-lg">
                      <div className="flex items-center gap-1.5 text-secondary mb-1">
                        <Zap className="text-base" />
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
                      <MailCheck className="text-secondary text-xl" />
                      <h2 className="font-headline-md text-headline-md text-primary font-semibold">Invitation Preview</h2>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium">Personalized</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                    Personalized invitation for Alex Morgan.
                  </p>

                  <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                    <div className="p-space-sm bg-surface-container space-y-1.5">
                      <div className="flex items-center gap-space-sm font-mono text-mono text-on-surface-variant">
                        <span className="w-16 uppercase text-outline font-bold">TO:</span>
                        <span className="text-primary font-semibold">Alex Morgan</span>
                      </div>
                      <div className="flex items-center gap-space-sm font-mono text-mono text-on-surface-variant">
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
                              <CarFront className="text-xl" />
                            </div>
                            <div>
                              <h5 className="font-headline-sm text-headline-sm text-primary">Northside Ride Pool</h5>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">24 initial spots reserved</span>
                            </div>
                          </div>
                          <button
                            className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all whitespace-nowrap shadow-sm"
                            onClick={() => {
                              activateCommunity();
                              navigate('/app/butterfly-effect');
                            }}
                          >
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
                      <Link className="text-secondary text-xl" />
                      <h3 className="font-headline-sm text-headline-sm text-primary font-semibold">Invite Link</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">Invite-Only</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-xs p-1.5 bg-surface-container-low rounded-lg">
                    <div className="flex items-center gap-space-xs px-space-sm flex-1">
                      <LockOpen className="text-outline text-base" />
                      <input className="w-full bg-transparent font-mono text-mono text-primary font-semibold focus:outline-none select-all" readOnly type="text" value="fellaride.app/northside/start?c=AM96" />
                    </div>
                    <button className="flex items-center gap-1.5 px-space-md py-2 rounded-md bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all shadow-sm">
                      <Copy className="text-base" />
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
                      <GitFork className="text-secondary text-xl" />
                      <h3 className="font-headline-md text-headline-md text-primary font-semibold">Growth Cascade</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-mono text-mono font-bold">T+7 DAYS</span>
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
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono text-[10px] z-10 font-bold">1</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">1 Connector (Alex)</span>
                        <span className="font-mono text-mono text-primary font-semibold">Score: 96</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-mono text-[10px] z-10 font-bold">2</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">24 Members</span>
                        <span className="font-mono text-mono text-secondary font-semibold">Wave 1</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-surface-tint text-on-primary flex items-center justify-center font-mono text-[10px] z-10 font-bold">3</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">8 Drivers + 15 Passengers</span>
                        <span className="font-mono text-mono text-on-surface font-semibold">Balanced</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-mono text-[10px] z-10 font-bold">4</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">14 Rides / week</span>
                        <span className="font-mono text-mono text-on-surface font-semibold">Active</span>
                      </div>
                    </div>
                    <div className="relative flex items-center gap-space-sm">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-mono text-[10px] z-10 font-bold">5</div>
                      <div className="flex-1 p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                        <span className="font-label-lg text-label-lg text-primary font-bold">21 Referrals</span>
                        <span className="font-mono text-mono text-secondary font-bold">Organic</span>
                      </div>
                    </div>
                  </div>

                  {/* Launch CTA */}
                  <div className="pt-space-sm flex flex-col gap-space-sm">
                    <button
                      className="w-full py-3.5 px-space-md rounded-xl bg-secondary text-on-secondary font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs shadow-md hover:bg-secondary/90 transition-all"
                      onClick={() => {
                        activateCommunity();
                        navigate('/app/butterfly-effect');
                      }}
                    >
                      <Zap className="text-xl" />
                      <span>Launch Activation</span>
                    </button>
                    <span className="text-[11px] text-outline text-center font-mono">
                      Sends invite link and initializes ride group.
                    </span>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}
