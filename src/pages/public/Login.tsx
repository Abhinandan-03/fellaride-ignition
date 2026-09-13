import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/app');
  };

  const handleDemoAccess = () => {
    login();
    navigate('/app');
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSent(true);
    setTimeout(() => {
      setShowForgotModal(false);
      setResetSent(false);
      setResetEmail('');
    }, 2000);
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

          {/* Right Nav Links & Home Link */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/#how-it-works" className="hover:text-navy-900 transition-colors">How It Works</Link>
              <Link to="/#communities" className="hover:text-navy-900 transition-colors">For Communities</Link>
              <Link to="/pricing" className="hover:text-navy-900 transition-colors">Pricing</Link>
            </nav>
            <div className="h-5 w-[1px] bg-slate-200 hidden md:block"></div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-navy-900 transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. CENTERED TWO-COLUMN AUTHENTICATION EXPERIENCE */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 relative">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: Brand Narrative & Minimal Cascade Graphic */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              COMMUNITY IGNITION SYSTEM
            </div>

            {/* Headline & Subtext */}
            <h1 className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight leading-tight mb-4">
              Welcome back.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Reconnect with your community ride network and continue where you left off.
            </p>

            {/* Visual Cascade Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">CASCADE MULTIPLIER MODEL</span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full">
                  1 Connector → 32 Members
                </span>
              </div>

              {/* Minimal Network Cascade Graphic */}
              <div className="relative py-3 my-1">
                <svg className="w-full h-24 overflow-visible" fill="none" viewBox="0 0 420 90" xmlns="http://www.w3.org/2000/svg">
                  {/* Network Connective Lines */}
                  <path d="M 35 45 L 115 25" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5"></path>
                  <path d="M 35 45 L 115 65" stroke="#CBD5E1" strokeDasharray="3 3" strokeWidth="1.5"></path>
                  <path d="M 115 25 L 205 18" stroke="#94A3B8" strokeWidth="1.5"></path>
                  <path d="M 115 25 L 205 40" stroke="#94A3B8" strokeWidth="1.5"></path>
                  <path d="M 115 65 L 205 52" stroke="#94A3B8" strokeWidth="1.5"></path>
                  <path d="M 115 65 L 205 72" stroke="#94A3B8" strokeWidth="1.5"></path>
                  <path d="M 205 18 C 245 18, 255 35, 295 35" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1.75"></path>
                  <path d="M 205 72 C 245 72, 255 55, 295 55" stroke="#10B981" strokeOpacity="0.4" strokeWidth="1.75"></path>
                  <path d="M 295 35 L 385 45" stroke="#00875a" strokeWidth="2"></path>
                  <path d="M 295 55 L 385 45" stroke="#00875a" strokeWidth="2"></path>

                  {/* Stage 1: 1 Connector */}
                  <g transform="translate(35, 45)">
                    <circle className="animate-ping" fill="#10B981" fillOpacity="0.2" r="14"></circle>
                    <circle fill="#00875a" r="9"></circle>
                    <circle fill="#FFFFFF" r="3"></circle>
                    <text className="text-[11px] font-bold fill-slate-900" textAnchor="middle" x="0" y="24">1</text>
                  </g>

                  {/* Stage 2: 3 Organizers */}
                  <g transform="translate(115, 25)">
                    <circle fill="#0F172A" r="7"></circle>
                    <text className="text-[10px] font-medium fill-slate-500" textAnchor="middle" x="0" y="-12">3</text>
                  </g>
                  <g transform="translate(115, 65)">
                    <circle fill="#0F172A" r="7"></circle>
                  </g>

                  {/* Stage 3: 8 Core */}
                  <g transform="translate(205, 18)"><circle fill="#334155" r="5"></circle></g>
                  <g transform="translate(205, 40)"><circle fill="#10B981" r="5"></circle></g>
                  <g transform="translate(205, 52)"><circle fill="#334155" r="5"></circle></g>
                  <g transform="translate(205, 72)">
                    <circle fill="#334155" r="5"></circle>
                    <text className="text-[10px] font-medium fill-slate-500" textAnchor="middle" x="0" y="19">8</text>
                  </g>

                  {/* Stage 4: 17 Commuters */}
                  <g transform="translate(295, 35)">
                    <circle fill="#10B981" r="7"></circle>
                    <text className="text-[10px] font-semibold fill-emerald-800" textAnchor="middle" x="0" y="-12">17</text>
                  </g>
                  <g transform="translate(295, 55)"><circle fill="#10B981" r="7"></circle></g>

                  {/* Stage 5: 32 Community Members */}
                  <g transform="translate(385, 45)">
                    <circle fill="#0A1124" r="11"></circle>
                    <circle fill="#10B981" r="5"></circle>
                    <text className="text-[11px] font-extrabold fill-emerald-700" textAnchor="middle" x="0" y="24">32</text>
                  </g>
                </svg>
              </div>

              {/* Stage Sequence Labels */}
              <div className="grid grid-cols-5 text-center text-[10px] font-medium text-slate-500 pt-3 border-t border-slate-100">
                <div>1 Connector</div>
                <div>3 Organizers</div>
                <div>8 Core</div>
                <div>17 Commuters</div>
                <div className="font-bold text-emerald-800">32 Members</div>
              </div>

              <p className="text-xs text-slate-500 text-center mt-3 pt-1 font-normal">
                Small connections create active communities.
              </p>
            </div>

            {/* Tagline Signature */}
            <div className="mt-6 flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="italic font-semibold text-slate-700">Everything Starts Small.</span>
              <span className="font-mono text-[11px] text-slate-400">FELLARIDE // AUTONOMOUS CLUSTERS</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Authentication Card */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8">
              {/* Card Title & Subtitle */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                  Log in to FellaRide
                </h2>
                <p className="text-sm text-slate-600 mt-1.5">
                  Access your community and manage your rides.
                </p>
              </div>

              {/* Main Login Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="email">
                    EMAIL ADDRESS
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </div>

                {/* Password Field with Show/Hide Toggle */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700" htmlFor="password">
                      PASSWORD
                    </label>
                    <button
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline focus:outline-none"
                      type="button"
                      onClick={() => setShowForgotModal(true)}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      className="w-full pl-4 pr-11 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? 'text' : 'password'}
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-3 p-1 text-slate-400 hover:text-navy-900 focus:outline-none rounded"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <span className="material-symbols-outlined text-lg leading-none">
                        {showPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Stay logged in checkbox */}
                <div className="flex items-center pt-0.5">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-navy-900 focus:ring-slate-900/20 cursor-pointer"
                      name="remember"
                      type="checkbox"
                    />
                    <span className="text-xs text-slate-600">Stay logged in on this device</span>
                  </label>
                </div>

                {/* Primary Action Button */}
                <button
                  className="w-full py-3.5 px-4 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-150 shadow-sm active:scale-[0.99] focus:outline-none"
                  type="submit"
                >
                  <span>Log In</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-5 flex items-center justify-center">
                <div className="w-full border-t border-slate-200"></div>
                <span className="bg-white px-3 text-[11px] font-semibold tracking-wider uppercase text-slate-400 absolute">
                  OR CONTINUE WITH
                </span>
              </div>

              {/* Social Button (Google) */}
              <button
                className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2.5 transition-colors focus:outline-none shadow-2xs"
                type="button"
                onClick={handleSubmit}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Create account prompt */}
              <div className="mt-4 text-center">
                <span className="text-xs text-slate-500">Don't have an account?</span>
                <Link to="/signup" className="text-xs font-bold text-navy-900 hover:text-emerald-600 transition-colors ml-1.5">
                  Create an account
                </Link>
              </div>

              {/* DEMO ACCESS BOX (Hackathon Demo) */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    HACKATHON DEMO
                  </span>
                  <span className="material-symbols-outlined text-sm text-emerald-600">bolt</span>
                </div>
                <h3 className="text-xs font-bold text-navy-900">Explore without an account</h3>
                <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                  Enter the Northside Community demo directly and explore the FellaRide experience.
                </p>
                <button
                  className="mt-3 w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.99] focus:outline-none"
                  type="button"
                  onClick={handleDemoAccess}
                >
                  <span>Enter Demo</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              {/* Trust Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-slate-400">
                <span className="material-symbols-outlined text-sm shrink-0 text-slate-400 mt-0.5">verified_user</span>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Your community experience stays focused on the people, routes, and rides that matter to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL: Forgot Password */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 fade-enter">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-xl">lock_reset</span>
            </div>
            <h3 className="text-lg font-bold text-navy-900">Reset your password</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Enter your email address and we'll send you instructions to regain access to your community.
            </p>
            {resetSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium text-center">
                ✓ Password reset link has been dispatched to your email!
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-3">
                <input
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium"
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
                <div className="flex items-center gap-2 pt-2">
                  <button
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex-1 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-850 transition-colors"
                    type="submit"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
