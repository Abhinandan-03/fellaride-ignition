import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';
import { storage } from '../../services/storage';
import type { User } from '../../models/types';
import { Share2, ArrowLeft, Eye, EyeOff, ArrowRight, ShieldCheck, RotateCcw, AlertCircle, Users } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { login, loginAsUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testAccounts = storage.getUsers();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login(email.trim().toLowerCase(), password);
      if (!res.success) {
        setErrorMessage(res.error || 'Login failed. Please check your email and password.');
        return;
      }
      navigate('/app');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTestAccountLogin = (user: User) => {
    loginAsUser(user.id);
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
              <Share2 className="text-emerald-400" size={20} />
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
              <ArrowLeft size={14} />
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

              {/* Error Banner */}
              {errorMessage && (
                <div className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <p className="font-bold">Authentication failed</p>
                    <p className="mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Main Login Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5" htmlFor="login-email">
                    EMAIL ADDRESS
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                    id="login-email"
                    name="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                  />
                </div>

                {/* Password Field with Show/Hide Toggle */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700" htmlFor="login-password">
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
                      id="login-password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute right-3 p-1 text-slate-400 hover:text-navy-900 focus:outline-none rounded"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                  className="w-full py-3.5 px-4 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-150 shadow-sm active:scale-[0.99] focus:outline-none cursor-pointer disabled:opacity-60"
                  type="submit"
                  disabled={isSubmitting}
                  id="login-submit-btn"
                >
                  <span>{isSubmitting ? 'Logging in...' : 'Log In'}</span>
                  <ArrowRight size={16} />
                </button>
              </form>

              {/* Create account prompt */}
              <div className="mt-5 text-center">
                <span className="text-xs text-slate-500">Don't have an account?</span>
                <Link to="/signup" className="text-xs font-bold text-navy-900 hover:text-emerald-600 transition-colors ml-1.5">
                  Create an account
                </Link>
              </div>

              {/* TEST & PERSONA SEED ACCOUNTS */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-slate-200 text-slate-800">
                    <Users size={12} />
                    DEMO ACCOUNTS
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">1-CLICK LOGIN</span>
                </div>
                <p className="text-[11px] text-slate-600 mb-3">
                  Quickly test different permission personas and multi-community memberships:
                </p>

                <div className="space-y-2">
                  {testAccounts.map((account) => (
                    <button
                      key={account.id}
                      type="button"
                      onClick={() => handleTestAccountLogin(account)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/40 text-left transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-navy-900 group-hover:text-emerald-800">{account.name}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase ${
                            account.role === 'Both' ? 'bg-emerald-100 text-emerald-800' :
                            account.role === 'Find' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {account.role}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono truncate">{account.email}</p>
                      </div>
                      <ArrowRight size={14} className="text-slate-400 group-hover:text-emerald-600 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Note */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-slate-400">
                <ShieldCheck className="shrink-0 text-slate-400 mt-0.5" size={14} />
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
              <RotateCcw size={20} />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Reset your password</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              For this hackathon prototype, passwords are stored locally. Please sign up again with a new account if you've forgotten yours.
            </p>
            {resetSent ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium text-center">
                ✓ Noted. Please sign up again to create a new account.
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
                    Understood
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
