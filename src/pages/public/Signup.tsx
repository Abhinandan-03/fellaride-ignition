import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('Sarah Chen');
  const [email, setEmail] = useState('sarah.chen@northside.community');
  const [password, setPassword] = useState('••••••••••••');
  const [confirmPassword, setConfirmPassword] = useState('••••••••••••');
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Proceed to Step 2: Choose Community
    navigate('/onboarding/community');
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

      {/* 2. STEPPER & MAIN SIGNUP CARD */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 md:py-14 flex flex-col justify-start">
        {/* Step Indicator Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            GET STARTED
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Start with your community.
          </h1>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto font-normal">
            Create your FellaRide account and connect with people who already share your routes.
          </p>

          {/* 3-Step Interactive Progression Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Connecting line 1 (01 -> 02) */}
              <div className="absolute left-[20%] top-5 w-[30%] h-[2px] bg-slate-200 z-0"></div>
              {/* Connecting line 2 (02 -> 03) */}
              <div className="absolute left-[52%] top-5 w-[30%] h-[2px] bg-slate-200 z-0"></div>

              {/* Step 01: Account (Active) */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-slate-100">
                  01
                </div>
                <span className="text-xs font-bold text-navy-900 mt-2 tracking-wide uppercase">Account</span>
              </div>

              {/* Step 02: Community (Pending) */}
              <div className="relative z-10 flex flex-col items-center opacity-60">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <span className="text-xs font-semibold text-slate-500 mt-2 tracking-wide uppercase">Community</span>
              </div>

              {/* Step 03: Ride Profile (Pending) */}
              <div className="relative z-10 flex flex-col items-center opacity-60">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <span className="text-xs font-semibold text-slate-500 mt-2 tracking-wide uppercase">Ride Profile</span>
              </div>
            </div>
          </div>
        </div>

        {/* ONBOARDING CARD SHELL */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10 max-w-xl mx-auto w-full relative">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight">Create your account</h2>
            <p className="text-slate-500 text-sm mt-1">Enter your personal details to begin participating in verified community rides.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                FULL NAME
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full px-4 py-3.5 pr-11 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 pr-11 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  required
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  required
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="pt-2 flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-navy-900 focus:ring-slate-900/20 border-slate-300 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                I agree to FellaRide's{' '}
                <a href="#terms" className="font-semibold text-navy-900 underline underline-offset-2 hover:text-emerald-600">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" className="font-semibold text-navy-900 underline underline-offset-2 hover:text-emerald-600">
                  Privacy Policy
                </a>
                . Community carpooling is strictly non-commercial.
              </label>
            </div>

            {/* Submit Action Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={!agreed}
                className="w-full py-4 px-6 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
              >
                <span>Continue to Choose Community</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>

            {/* Log in prompt */}
            <div className="text-center pt-3">
              <p className="text-xs text-slate-500">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-navy-900 hover:text-emerald-600 transition-colors ml-1">
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* 3. TRUST STRIP FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-500 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
        <span className="flex items-center gap-1.5 text-slate-600 font-medium">
          <span className="material-symbols-outlined text-emerald-500 text-base">verified</span>
          Non-commercial cost sharing
        </span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-600 font-medium">No PII brokerage</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-600 font-medium">Prototype Concept</span>
      </footer>
    </div>
  );
}
