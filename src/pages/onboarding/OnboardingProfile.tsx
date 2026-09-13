import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function OnboardingProfile() {
  const navigate = useNavigate();
  const { login } = useApp();
  const [mode, setMode] = useState<'passenger' | 'driver' | 'both'>('both');
  const [hub, setHub] = useState('Central District (Financial & Tech Hub)');
  const [morningWindow, setMorningWindow] = useState(true);
  const [eveningWindow, setEveningWindow] = useState(true);

  const handleEnterApp = () => {
    login();
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 grid-pattern flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. TOP HEADER */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200 border border-slate-700/50">
              <span className="material-symbols-outlined text-emerald-400 text-xl">share</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-navy-900 leading-none">FellaRide</span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-600 mt-1">Community Ignition System</span>
            </div>
          </Link>

          {/* Right Nav Links & Back to Login */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/#how-it-works" className="hover:text-navy-900 transition-colors">How It Works</Link>
              <Link to="/#communities" className="hover:text-navy-900 transition-colors">For Communities</Link>
              <Link to="/pricing" className="hover:text-navy-900 transition-colors">Pricing</Link>
            </nav>
            <div className="h-5 w-[1px] bg-slate-200 hidden md:block"></div>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-navy-900 transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Back to Login</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. STEPPER & MAIN CARD */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 md:py-14 flex flex-col justify-start">
        {/* STEP PROGRESSION INDICATOR */}
        <div className="mb-10 max-w-lg mx-auto w-full">
          <div className="flex items-center justify-between relative">
            {/* Connecting line 1 (Step 1 -> 2: Completed Green) */}
            <div className="absolute left-[20%] top-5 w-[30%] h-[2px] bg-emerald-500 z-0"></div>
            {/* Connecting line 2 (Step 2 -> 3: Completed Green) */}
            <div className="absolute left-[52%] top-5 w-[30%] h-[2px] bg-emerald-500 z-0"></div>

            {/* Step 01 (Account: Completed) */}
            <Link to="/signup" className="relative z-10 flex flex-col items-center group focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-xs font-bold text-emerald-600 mt-2 tracking-wide uppercase">Account</span>
            </Link>

            {/* Step 02 (Community: Completed) */}
            <Link to="/onboarding/community" className="relative z-10 flex flex-col items-center group focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-xs font-bold text-emerald-600 mt-2 tracking-wide uppercase">Community</span>
            </Link>

            {/* Step 03 (Ride Profile: Active) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-slate-100">
                03
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-extrabold text-navy-900 tracking-wide uppercase">Ride Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN ONBOARDING CARD SHELL */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10 relative">
          {/* TOP TITLE & CONTEXT BADGE */}
          <div className="space-y-3 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                STEP 03 • RIDE PROFILE
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/70 self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Joining: <strong className="text-navy-900 font-bold">Northside Community</strong> • Northside → Central District</span>
              </div>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 leading-tight">
              How do you want to use FellaRide?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Choose how you want to participate. You can change this flexible status at any time.
            </p>
          </div>

          {/* PARTICIPATION MODES GRID */}
          <div className="mb-8">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3.5">
              SELECT YOUR PARTICIPATION MODE
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mode 1: Passenger */}
              <div
                onClick={() => setMode('passenger')}
                className={`rounded-2xl p-6 cursor-pointer transition-all flex flex-col justify-between ${
                  mode === 'passenger'
                    ? 'border-2 border-emerald-500 bg-[#f8fcfa] shadow-xs'
                    : 'border border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <span className="material-symbols-outlined text-lg">groups</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      mode === 'passenger' ? 'border-emerald-500' : 'border-slate-300'
                    }`}>
                      {mode === 'passenger' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-1">I Need Rides</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Find community members traveling along routes you use regularly.
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Find compatible rides</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Join verified community drivers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Request available seats</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-semibold text-slate-500">Standard Passenger Access</span>
                </div>
              </div>

              {/* Mode 2: Driver */}
              <div
                onClick={() => setMode('driver')}
                className={`rounded-2xl p-6 cursor-pointer transition-all flex flex-col justify-between ${
                  mode === 'driver'
                    ? 'border-2 border-emerald-500 bg-[#f8fcfa] shadow-xs'
                    : 'border border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                      <span className="material-symbols-outlined text-lg">directions_car</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      mode === 'driver' ? 'border-emerald-500' : 'border-slate-300'
                    }`}>
                      {mode === 'driver' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-1">I Can Offer Rides</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Share available empty seats on trips you are already making.
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Offer available seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Help neighborhood members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Increase corridor supply</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-semibold text-slate-500">Active Driver Cluster</span>
                </div>
              </div>

              {/* Mode 3: Both (Recommended - Default Selected) */}
              <div
                onClick={() => setMode('both')}
                className={`rounded-2xl p-6 cursor-pointer transition-all flex flex-col justify-between relative ${
                  mode === 'both'
                    ? 'border-2 border-emerald-500 bg-white shadow-md ring-2 ring-emerald-500/10'
                    : 'border border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Top Overlay Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#006c49] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                  COMMUNITY FLEXIBILITY
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined text-lg">sync_alt</span>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                      {mode === 'both' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-navy-900">Both</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-extrabold uppercase">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Find rides when you need them and offer rides when you drive your own car.
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Find rides when you commute</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Offer rides when you drive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold text-xs">✓</span>
                      <span>Support network resilience</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-emerald-700">Highest Match Velocity</span>
                </div>
              </div>
            </div>
          </div>

          {/* COMMUTE WINDOWS SECTION */}
          <div className="p-6 bg-slate-50/70 border border-slate-200 rounded-2xl mb-8">
            <div className="flex items-center gap-2 text-navy-900 font-bold text-sm mb-1">
              <span className="material-symbols-outlined text-base text-emerald-600">schedule</span>
              <span>Your Usual Commute Windows</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              This helps FellaRide surface relevant community carpools without storing intrusive tracking or precise locations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  TYPICAL DESTINATION HUB
                </label>
                <select
                  value={hub}
                  onChange={(e) => setHub(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-navy-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                >
                  <option>Central District (Financial & Tech Hub)</option>
                  <option>North Campus University Quad</option>
                  <option>Eastside Suburban Medical Complex</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  USUAL TRAVEL WINDOWS
                </label>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setMorningWindow(!morningWindow)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
                      morningWindow
                        ? 'bg-emerald-50 border border-emerald-300 text-emerald-800'
                        : 'bg-white border border-slate-200 text-slate-500'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${morningWindow ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                    <span>Morning (7:30 - 9:00 AM)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEveningWindow(!eveningWindow)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1.5 ${
                      eveningWindow
                        ? 'bg-emerald-50 border border-emerald-300 text-emerald-800'
                        : 'bg-white border border-slate-200 text-slate-500'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${eveningWindow ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                    <span>Evening (5:00 - 6:30 PM)</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-slate-500 text-[11px]">
              <span className="material-symbols-outlined text-sm text-slate-400">lock</span>
              <span>Privacy Protected: No precise home address or continuous GPS logging is ever asked or stored.</span>
            </div>
          </div>

          {/* TWO SUMMARY CARDS: PREVIEW & VELOCITY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left Card: Live Profile Preview */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">PROFILE PREVIEW</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Ready to Join
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    SC
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-navy-900">Sarah Chen</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                        {mode === 'both' ? 'Passenger + Driver' : mode === 'driver' ? 'Driver' : 'Passenger'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">sarah.chen@northside.community</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">COMMUNITY</span>
                    <span className="font-semibold text-navy-900">Northside</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">CORRIDOR</span>
                    <span className="font-semibold text-navy-900">Northside → Central</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">TRAVEL TIMES</span>
                    <span className="font-semibold text-navy-900">Morning + Evening</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">PRIVACY TIER</span>
                    <span className="font-semibold text-teal-700">Cluster Only (Zero PII)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Community Velocity */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">COMMUNITY VELOCITY</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    ACTIVE
                  </span>
                </div>

                <h4 className="font-bold text-sm text-navy-900">Northside Community</h4>
                <p className="text-xs text-slate-500 mb-4">Northside — Central District morning corridor</p>

                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100 text-center">
                  <div className="bg-slate-50/60 p-2.5 rounded-xl">
                    <div className="text-lg font-extrabold text-navy-900">23</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">MEMBERS</div>
                  </div>
                  <div className="bg-slate-50/60 p-2.5 rounded-xl">
                    <div className="text-lg font-extrabold text-navy-900">8</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">DRIVERS</div>
                  </div>
                  <div className="bg-slate-50/60 p-2.5 rounded-xl">
                    <div className="text-lg font-extrabold text-navy-900">15</div>
                    <div className="text-[9px] font-bold uppercase text-slate-400 tracking-wider">RIDERS</div>
                  </div>
                  <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
                    <div className="text-lg font-extrabold text-emerald-700">14</div>
                    <div className="text-[9px] font-bold uppercase text-emerald-800 tracking-wider">RIDES</div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                  Your community already operates an active ride pool along this route. Adding your profile will activate instant route suggestions.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM DARK ACTION BAR */}
          <div className="bg-[#0a1124] text-white rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="text-xs text-slate-400 mb-1">Final Onboarding Step</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-bold text-white">
                  Join Northside Community network as{' '}
                  <span className="text-emerald-400">
                    {mode === 'both' ? 'Both (Driver + Passenger)' : mode === 'driver' ? 'Driver' : 'Passenger'}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                to="/onboarding/community"
                className="px-4 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>Back to Community</span>
              </Link>
              <button
                onClick={handleEnterApp}
                className="px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 text-sm font-extrabold shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-95"
                type="button"
              >
                <span>Enter FellaRide</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* HACKATHON DEMO NOTE */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
            <span className="font-bold text-slate-700">Hackathon Demo:</span> Sarah Chen's profile is configured to access the Northside Community cluster.
          </p>
        </div>
      </main>

      {/* 3. TRUST STRIP FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-500 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
        <span className="flex items-center gap-1.5 text-slate-600 font-medium">
          <span className="text-emerald-600 font-bold">✓</span>
          Non-commercial cost sharing
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5 text-slate-600 font-medium">
          <span className="text-emerald-600 font-bold">✓</span>
          No PII brokerage
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5 text-slate-600 font-medium">
          <span className="text-emerald-600 font-bold">✓</span>
          Zero platform markup
        </span>
      </footer>
    </div>
  );
}
