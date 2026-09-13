import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-emerald-400 font-bold text-lg shadow-sm border border-slate-700/50 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-emerald-400 text-xl">electric_car</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-navy-900 leading-tight">FellaRide</span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-600">Community Mobility</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#how-it-works" className="hover:text-navy-900 transition-colors">How It Works</a>
            <a href="#intelligence" className="hover:text-navy-900 transition-colors">Product Intelligence</a>
            <a href="#butterfly" className="hover:text-navy-900 transition-colors">The Butterfly Effect</a>
            <a href="#communities" className="hover:text-navy-900 transition-colors">For Communities</a>
            <Link to="/pricing" className="hover:text-navy-900 transition-colors">Pricing</Link>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-navy-900 px-3 py-2 hidden sm:inline-block transition-colors">
              Log In
            </Link>
            <Link
              to="/onboarding/community"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-850 text-white text-sm font-semibold shadow-sm transition-all duration-150 hover:shadow hover:ring-2 hover:ring-emerald-500/20"
            >
              Start a Community
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden grid-pattern">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Community-Powered Carpooling
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-navy-900 tracking-tight leading-[1.08] mb-6">
                Everything Starts Small.
              </h1>

              <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug mb-4">
                Find the people who start the network.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                FellaRide uses community intelligence to turn one high-leverage connection into a self-sustaining network of verified drivers, passengers, routine rides, and referrals.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/onboarding/community"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-base font-bold shadow-md hover:shadow-lg transition-all text-center"
                >
                  Start a Community
                </Link>
                <Link
                  to="/app/find-ride"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 text-base font-bold shadow-sm transition-all text-center"
                >
                  Find a Ride
                </Link>
              </div>

              {/* Micro Philosophy Quote */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 w-full flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                  Core Logic
                </span>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  "Don't acquire 1,000 random users. Find 1 person who can bring 20."
                </p>
              </div>
            </div>

            {/* HERO VISUAL (The Organic Node Cascade: 1 → 3 → 8 → 17 → 32) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-900/5 relative overflow-hidden">
                {/* Graphic Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600">The Butterfly Effect</span>
                    <h3 className="text-lg font-bold text-navy-900">Cluster Ignition Cascade</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-mono text-xs rounded-md font-semibold">
                    1 → 32 Nodes
                  </span>
                </div>

                {/* Cascade Progression Diagram */}
                <div className="space-y-4">
                  {/* Step 1: 1 Connector */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between transition-all hover:bg-emerald-50/40 hover:border-emerald-300">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-navy-900 text-emerald-400 font-bold flex items-center justify-center text-sm ring-4 ring-emerald-100 node-glow">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Step 01 • Ignition Node</div>
                        <div className="text-sm font-bold text-navy-900">1 Connector Anchor</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                        Targeted Dispatch
                      </span>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">T+0h • Centrality: 94/100</div>
                    </div>
                  </div>

                  {/* Connecting Branch Indicator */}
                  <div className="flex items-center justify-center -my-2 text-slate-300">
                    <span className="material-symbols-outlined text-emerald-500 text-base animate-bounce">arrow_downward</span>
                  </div>

                  {/* Step 2: 3 Members */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-emerald-500 text-emerald-700 font-bold flex items-center justify-center text-xs">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500">First Spoke Wave</div>
                        <div className="text-sm font-bold text-navy-900">3 Initial Organizers</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-600">T+4h • 1 Pool Formed</span>
                  </div>

                  {/* Step 3: 8 Drivers & Passengers */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-emerald-500 text-emerald-700 font-bold flex items-center justify-center text-xs">
                        08
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500">Corridor Synchronization</div>
                        <div className="text-sm font-bold text-navy-900">8 Drivers & Passengers</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-600">T+11h • Route 44 Mesh</span>
                  </div>

                  {/* Step 4: 17 Active Members */}
                  <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-emerald-500 text-emerald-700 font-bold flex items-center justify-center text-xs">
                        17
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500">Organic Peer Referrals</div>
                        <div className="text-sm font-bold text-navy-900">17 Active Daily Commuters</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-600">T+20h • Reciprocal Rides</span>
                  </div>

                  {/* Step 5: 32 Self-Sustaining */}
                  <div className="p-4 rounded-xl bg-navy-900 text-white flex items-center justify-between border border-navy-800 shadow-md">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-navy-950 font-black flex items-center justify-center text-sm shadow">
                        32
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Percolation Threshold Crossed</div>
                        <div className="text-base font-bold text-white">32 Activated Community Members</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Self-Sustaining
                      </span>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">T+36h • Health: 82/100</div>
                    </div>
                  </div>
                </div>

                {/* Graphic Caption */}
                <p className="text-xs text-center text-slate-500 mt-5 italic">
                  One acute intervention. A growing autonomous community ride network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF STRIP */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 shrink-0">
              Built for organized communities:
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-bold text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Colleges & Universities
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Corporate Tech Parks
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Residential Hubs & HOAs
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Alumni & Athletic Networks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              The Structural Flaw of Ride Sharing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
              Carpooling doesn't fail because people don't want to share rides.<br className="hidden sm:inline" />
              <span className="text-emerald-700">It fails because communities start too small.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Traditional platforms spend thousands acquiring cold, disconnected strangers who churn within days due to low liquidity. FellaRide solves the cold-start problem from the inside out.
            </p>
          </div>

          {/* Problem Breakdown 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold mb-5">
                  <span className="material-symbols-outlined text-slate-600 text-lg">close</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">A Passenger Alone</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Opens an empty app, sees zero compatible rides along their route, waits 40 minutes, and never returns. Single-sided demand creates zero network momentum.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                0% Route Liquidity
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold mb-5">
                  <span className="material-symbols-outlined text-slate-600 text-lg">close</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">A Driver Alone</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Offers three empty seats to anonymous strangers, worries about reliability and security, and stops posting within two days. Unanchored supply evaporates.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                High Attrition & Distrust
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 font-bold mb-5">
                  <span className="material-symbols-outlined text-slate-600 text-lg">close</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">1,000 Disconnected Users</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Broadcast ad campaigns bring random signups scattered across a 40-mile radius with zero route overlap, burning capital without creating a viable commute corridor.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                ₹4,800+ Burn per Active Rider
              </div>
            </div>
          </div>

          {/* The FellaRide Solution Banner */}
          <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-navy-800 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-wider text-emerald-400 uppercase mb-2">The Architectural Breakthrough</div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                One connected person can spark an entire transit corridor.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                By finding established civic, athletic, and campus anchors, FellaRide activates existing social gravity. Verified trust is instant, and carpools form organically.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-navy-850 p-4 rounded-xl border border-slate-800 shrink-0 font-mono text-sm">
              <span className="text-emerald-400 font-bold">1 Connector</span>
              <span className="text-slate-500">→</span>
              <span className="text-white font-medium">Community</span>
              <span className="text-slate-500">→</span>
              <span className="text-emerald-400 font-bold">Rides</span>
              <span className="text-slate-500">→</span>
              <span className="text-white font-medium">Referrals</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW FELLARIDE WORKS (4-STEP SECTION) */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              Four-Stage Community Ignition
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              How FellaRide Works
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              A disciplined algorithmic pipeline that moves from discovering latent mobility demand to powering repeatable peer rides.
            </p>
          </div>

          {/* 4-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 01 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-navy-900 font-mono">01</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-navy-900 border border-slate-200">
                    Community Radar
                  </span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Discover</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Find clusters and organizations where shared transportation demand naturally concentrates before spending a single dollar on outreach.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Detects Route 44 Corridors
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-navy-900 font-mono">02</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-navy-900 border border-slate-200">
                    Connector Intel
                  </span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Identify</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Identify natural community catalysts, respected organizers, and early adopters with the social centrality to seed the first travel pods.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Alex Morgan (Score: 96)
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-navy-900 font-mono">03</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-navy-900 border border-slate-200">
                    Ghost Demand
                  </span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Predict</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Detect upcoming transportation deficits and shift peaks 24–48 hours ahead from public signals before members even request a seat.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Preempts 25-Seat Deficits
              </div>
            </div>

            {/* Step 04 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 card-hover-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-navy-900 font-mono">04</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-navy-900 border border-slate-200">
                    Activation
                  </span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Activate</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provide the right person with the single contextual trigger needed to publish their routine corridor and invite their immediate peers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                1 Dispatch → 32 Vertices
              </div>
            </div>
          </div>

          {/* Lifecycle Outcome Line */}
          <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-600">
            <span className="text-slate-400 font-mono">OUTCOME :</span>
            <span className="text-navy-900 font-bold">Community Activated</span>
            <span className="text-emerald-500">—</span>
            <span className="text-navy-900 font-bold">Synchronized Rides</span>
            <span className="text-emerald-500">—</span>
            <span className="text-navy-900 font-bold">Organic Referrals</span>
            <span className="text-emerald-500">—</span>
            <span className="text-emerald-600 font-black">Self-Sustaining Mobility Loop</span>
          </div>
        </div>
      </section>

      {/* PRODUCT INTELLIGENCE VISUAL SHOWCASE (DARK SECTION) */}
      <section id="intelligence" className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Integrated Intelligence Suite
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Intelligence that knows where to start.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Instead of guessing where rides might be needed, FellaRide connects spatial radar, social centrality, and predictive demand into an operational roadmap.
            </p>
          </div>

          {/* THE 3-PILLAR CONNECTED WORKSPACE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Pillar 1: WHERE */}
            <div className="bg-navy-900 rounded-2xl p-7 border border-slate-800 flex flex-col justify-between relative group hover:border-emerald-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">WHERE</span>
                  <span className="text-xs text-slate-400 font-medium">Stage 01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community Radar</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Spatial clustering maps dense origin-destination corridors across institutions, ranking micro-communities by transit feasibility.
                </p>

                {/* Miniature Prototype UI Mock */}
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Target Cluster</span>
                    <span className="text-emerald-400 font-bold">Northside Corridor</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>Density Score: 92/100</span>
                    <span className="text-white">Route 44 Direct</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                Answers: <strong className="text-white">Where should we activate?</strong>
              </div>
            </div>

            {/* Pillar 2: WHO */}
            <div className="bg-navy-900 rounded-2xl p-7 border border-slate-800 flex flex-col justify-between relative group hover:border-emerald-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">WHO</span>
                  <span className="text-xs text-slate-400 font-medium">Stage 02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Connector Intelligence</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Identifies community members with high degree centrality and authentic trust who can spark adoption without paid platform ads.
                </p>

                {/* Miniature Prototype UI Mock */}
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-white font-bold">Alex Morgan</span>
                    <span className="text-emerald-400 font-bold">Score 96</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Northside Civic & Athletic Lead</div>
                  <div className="text-[11px] text-emerald-400 bg-emerald-950/60 p-1.5 rounded border border-emerald-500/20">
                    Potential Reach: 24 Corridors
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                Answers: <strong className="text-white">Who should we activate?</strong>
              </div>
            </div>

            {/* Pillar 3: WHEN */}
            <div className="bg-navy-900 rounded-2xl p-7 border border-slate-800 flex flex-col justify-between relative group hover:border-emerald-500/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">WHEN</span>
                  <span className="text-xs text-slate-400 font-medium">Stage 03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ghost Demand</h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Synthesizes event calendars, athletic schedules, and work shifts to surface latent ride deficits 48 hours before commercial surge hits.
                </p>

                {/* Miniature Prototype UI Mock */}
                <div className="bg-navy-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Predicted Gap</span>
                    <span className="text-amber-400 font-bold">-25 Seats</span>
                  </div>
                  <div className="text-[11px] text-slate-300">Sat 6:00 PM • Athletic Games</div>
                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>37 Passengers</span>
                    <span className="text-emerald-400">8 Drivers Ready</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                Answers: <strong className="text-white">When should we intervene?</strong>
              </div>
            </div>
          </div>

          {/* Visual Sequence Footer */}
          <div className="bg-navy-900/60 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                <span className="material-symbols-outlined text-emerald-400 text-base">bolt</span>
              </div>
              <div className="text-sm">
                <span className="text-slate-400">The Connected Loop:</span>
                <span className="font-bold text-white ml-1">
                  WHERE (Radar) → WHO (Connector) → WHEN (Ghost Demand) → ACTION (Ignition)
                </span>
              </div>
            </div>
            <Link to="/app" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider flex items-center gap-1">
              EXPLORE SYSTEM DOCS <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* BUTTERFLY EFFECT SECTION (1 → 3 → 8 → 17 → 32) */}
      <section id="butterfly" className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              Viral Social Gravity
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              One connection can change the whole community.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FellaRide measures the ripple effect of a small intervention — tracking how activating a single connector reliably cascades into verified rides, organic referrals, and repeat habituation.
            </p>
          </div>

          {/* The Big Metric Visual: 1 → 32 */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-10 border-b border-slate-200">
              <div className="lg:col-span-5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600">Expansion Ratio</span>
                <div className="text-6xl sm:text-7xl font-black text-navy-900 tracking-tighter leading-none mt-2">
                  1 <span className="text-emerald-500 font-light">→</span> 32
                </div>
                <p className="text-sm font-semibold text-slate-600 mt-3">
                  One connector activated yields 32 autonomous community members within 36 hours.
                </p>
              </div>

              <div className="lg:col-span-7">
                {/* Timeline Waves */}
                <div className="grid grid-cols-5 gap-2 text-center">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-mono text-slate-400">T+0h</div>
                    <div className="text-lg font-bold text-navy-900">1</div>
                    <div className="text-[10px] text-slate-500">Connector</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-mono text-slate-400">T+4h</div>
                    <div className="text-lg font-bold text-navy-900">3</div>
                    <div className="text-[10px] text-slate-500">Organizers</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-mono text-slate-400">T+11h</div>
                    <div className="text-lg font-bold text-navy-900">8</div>
                    <div className="text-[10px] text-slate-500">Early Pairs</div>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="text-xs font-mono text-slate-400">T+20h</div>
                    <div className="text-lg font-bold text-navy-900">17</div>
                    <div className="text-[10px] text-slate-500">Mesh Sync</div>
                  </div>
                  <div className="p-3 bg-navy-900 text-white rounded-xl border border-navy-800">
                    <div className="text-xs font-mono text-emerald-400">T+36h</div>
                    <div className="text-lg font-bold text-emerald-400">32</div>
                    <div className="text-[10px] text-slate-300">Autonomous</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Mobility Outcome Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-extrabold text-navy-900">9</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Verified Drivers</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1">Healthy Supply Ratio</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-extrabold text-navy-900">18</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Regular Passengers</div>
                <div className="text-[11px] text-slate-500 mt-1">Daily Route 44 Riders</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-extrabold text-navy-900">14</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Synchronized Rides</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1">100% On-Time Cadence</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-3xl font-extrabold text-navy-900">21</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Organic Referrals</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1">+1.4x Referral Growth</div>
              </div>
            </div>

            {/* Maxim Banner */}
            <div className="mt-8 p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between text-xs sm:text-sm">
              <span className="font-bold text-emerald-900 italic">
                "The goal isn't to acquire everyone. It's to find the person who starts everyone."
              </span>
              <span className="hidden sm:inline font-mono font-bold text-emerald-700">126 kg CO₂ Avoided</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOR COMMUNITIES (ORGANIZATIONS / B2B) */}
      <section id="communities" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                For Civic & Enterprise Anchors
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
                Turn your community into a functioning ride network.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                FellaRide gives community organizers the intelligence to understand commute corridors, anticipate parking shortages, activate members with zero commercial awkwardness, and track community health.
              </p>

              {/* Capability Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-sm font-semibold text-slate-700">Community Intelligence Radar</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-sm font-semibold text-slate-700">48h Demand Prediction</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-sm font-semibold text-slate-700">Connector Discovery & Outreach</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-sm font-semibold text-slate-700">Activation Insights & Workspaces</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-sm font-semibold text-slate-700">Community Health Scoring (0–100)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-sm font-semibold text-slate-700">CO₂ & ESG Sustainability Reports</span>
                </div>
              </div>

              <Link
                to="/app"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm shadow-sm transition-all"
              >
                Explore Community Intelligence →
              </Link>
            </div>

            {/* Right Side: 3 Target Audiences */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-navy-900">Colleges & Universities</h4>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">High Density</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Connect commuter students living in the same off-campus neighborhoods. Reduce campus parking congestion by up to 34% with zero shuttle capital expenditures.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-navy-900">Companies & Tech Parks</h4>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Shift Sync</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enable employee carpooling along routine suburban corridors. Validate real Scope 3 carbon offsets without relying on unverified estimates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-navy-900">Residential Hubs & HOAs</h4>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Mutual Trust</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Anchor daily carpooling around local schools, transit plazas, and athletic loops. Transform neighborhood WhatsApp chaos into synchronized schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE CARPOOLING (FOR INDIVIDUALS) */}
      <section id="rides" className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              For Everyday Commuters
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              Your community. Your routes. Your ride.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No surge pricing. No anonymous strangers. Just verified neighbors traveling the exact same path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-emerald-600 font-bold flex items-center justify-center text-lg mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">person</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Need a ride?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Find compatible rides from verified members in your neighborhood or campus. Pay only a fair fuel contribution with absolute zero platform markup.
                </p>
              </div>
              <div className="mt-6 text-xs font-semibold text-emerald-700">₹80 Direct Fuel Share</div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-emerald-600 font-bold flex items-center justify-center text-lg mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">swap_horiz</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Have a car?</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Share your routine empty seats with peers traveling the exact same corridor. Offset your fuel costs without becoming an on-demand commercial taxi driver.
                </p>
              </div>
              <div className="mt-6 text-xs font-semibold text-emerald-700">Zero Commercial Licensing Needed</div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-emerald-600 font-bold flex items-center justify-center text-lg mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-emerald-600 text-2xl">groups</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">Grow the network.</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Invite colleagues or neighbors traveling the same corridor. Unlock more schedule flexibility, return rides, and reciprocal commute stability.
                </p>
              </div>
              <div className="mt-6 text-xs font-semibold text-emerald-700">Organic Referral Gravity</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm transition-all"
            >
              Join FellaRide Free
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL TEASER (3 TIERS) */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
              Transparent Model
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              Start free. Grow together.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              FellaRide keeps community rides 100% margin-free, monetizing advanced multi-cluster intelligence for institutional operators.
            </p>
          </div>

          {/* 3 Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Tier 1: Free */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Everyday Commute</div>
                <h4 className="text-2xl font-black text-navy-900 mb-1">Free</h4>
                <p className="text-xs text-slate-500 mb-6">For individual riders and drivers</p>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Community ride matching
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Verified neighborhood clusters
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Zero platform commission
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Statutory fuel cost splitting
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/signup"
                  className="block w-full py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-900 text-center font-bold text-sm transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            </div>

            {/* Tier 2: Premium */}
            <div className="bg-white p-7 rounded-2xl border-2 border-emerald-500 shadow-md relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider">
                Popular for Commuters
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Active Commuter</div>
                <h4 className="text-2xl font-black text-navy-900 mb-1">Premium</h4>
                <p className="text-xs text-slate-500 mb-6">Cross-corridor flexibility</p>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Everything in Free
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Cross-community corridor matching
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Priority schedule reservations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Enhanced Trust Guard safety checks
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/signup"
                  className="block w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold text-sm transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Tier 3: B2B */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">Organizations & Campus</div>
                <h4 className="text-2xl font-black text-navy-900 mb-1">B2B Intelligence</h4>
                <p className="text-xs text-slate-500 mb-6">For campuses, employers & cities</p>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Full Community Radar & Intel Suite
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Predictive Ghost Demand engine
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Automated Connector Activation
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> ESG carbon offset audit reports
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/pricing"
                  className="block w-full py-2.5 rounded-lg bg-navy-900 hover:bg-navy-850 text-white text-center font-bold text-sm transition-colors"
                >
                  Contact Organization Sales
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/pricing" className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-emerald-600">
              View Complete Pricing Matrix →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL HERO CTA (DARK SECTION) */}
      <section id="start" className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Start With One
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Your community doesn't need thousands of users to start.
            </h2>

            <p className="text-xl sm:text-2xl text-emerald-400 font-semibold mb-8">
              It needs the right first connection.
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Launch an autonomous carpool network in your neighborhood, university, or company using FellaRide's predictive community ignition system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/onboarding/community"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black text-base shadow-lg transition-all"
              >
                Start a Community
              </Link>
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-850 hover:bg-navy-800 text-white border border-slate-700 font-bold text-base transition-all"
              >
                Join a Community
              </Link>
            </div>

            <p className="text-xs text-slate-400 mt-8 font-mono">
              Zero platform markup • 100% community cost-sharing • Non-commercial model
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050811] text-slate-400 py-16 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-emerald-400 font-bold">
                  <span className="material-symbols-outlined text-emerald-400 text-lg">electric_car</span>
                </div>
                <span className="text-lg font-extrabold text-white">FellaRide</span>
              </div>
              <p className="text-slate-300 font-medium text-base mb-2">Everything Starts Small.</p>
              <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
                Community-powered carpooling and predictive mobility networks. Turning micro-interventions into resilient transportation corridors.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Product</div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><Link to="/app/radar" className="hover:text-white transition-colors">Community Radar</Link></li>
                <li><Link to="/app/connectors" className="hover:text-white transition-colors">Connector Intelligence</Link></li>
                <li><Link to="/app/ghost-demand" className="hover:text-white transition-colors">Ghost Demand Detector</Link></li>
                <li><Link to="/app/butterfly-effect" className="hover:text-white transition-colors">The Butterfly Effect</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Ecosystem</div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#communities" className="hover:text-white transition-colors">For Universities & Colleges</a></li>
                <li><a href="#communities" className="hover:text-white transition-colors">For Corporate Tech Parks</a></li>
                <li><a href="#communities" className="hover:text-white transition-colors">Residential Communities</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing & Plans</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Member Sign In</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2024 FellaRide Mobility Systems. All rights reserved.</p>
            <p className="text-center sm:text-right italic">
              Prototype concept — community intelligence and mobility network platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
