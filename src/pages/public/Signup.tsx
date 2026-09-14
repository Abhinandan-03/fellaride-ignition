import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';
import { Share2, ArrowLeft, User, Mail, Lock, ArrowRight, BadgeCheck, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const navigate = useNavigate();
  const { signUp } = useApp();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    if (!fullname.trim() || fullname.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    if (!agreed) {
      setErrorMessage('Please agree to the Terms of Service and Privacy Policy to continue.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await signUp(fullname.trim(), email.trim(), password, 'Both');
      if (!result.success) {
        setErrorMessage(result.error || 'Failed to create account. Please try again.');
        return;
      }
      // Proceed to Step 2: Choose Community
      navigate('/onboarding/community');
    } finally {
      setIsSubmitting(false);
    }
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
              <ArrowLeft size={14} />
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

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
              <div>
                <p className="font-bold">Account creation issue</p>
                <p className="mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="signup-name">
                FULL NAME
              </label>
              <div className="relative">
                <input
                  id="signup-name"
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  autoComplete="name"
                  className="w-full px-4 py-3.5 pr-11 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <User size={20} />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="signup-email">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <input
                  id="signup-email"
                  type="email"
                  required
                  placeholder="maya.lin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="w-full px-4 py-3.5 pr-11 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="signup-password">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="w-full px-4 py-3.5 pr-11 rounded-xl border border-slate-200 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all bg-slate-50/40 hover:bg-white text-sm"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <Lock size={20} />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-900 focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Minimum 6 characters. Stored securely on this device.</p>
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
                id="signup-submit-btn"
                disabled={!agreed || isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'Creating Account...' : 'Continue to Choose Community'}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Log in prompt */}
            <div className="text-center pt-2">
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
          <BadgeCheck className="text-emerald-500" size={16} />
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
