import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [audience, setAudience] = useState<'individuals' | 'organizations'>('individuals');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleWaitlist = () => {
    setWaitlistSubmitted(true);
    setTimeout(() => setWaitlistSubmitted(false), 3000);
  };

  const handleContact = () => {
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100" data-purpose="top-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group" data-purpose="brand-logo">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-sm transition group-hover:scale-105 border border-slate-700/50">
              <span className="material-symbols-outlined text-emerald-400 text-xl">share</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-navy-900 leading-none">FellaRide</span>
              <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase mt-1">Community Ignition System</span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-slate-600">
            <Link to="/#how-it-works" className="hover:text-navy-900 transition">How It Works</Link>
            <Link to="/#communities" className="hover:text-navy-900 transition">For Communities</Link>
            <Link to="/pricing" className="text-emerald-600 font-semibold flex items-center gap-1.5 transition">
              Pricing
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </Link>
          </nav>

          {/* Action Nav Items */}
          <div className="flex items-center gap-5">
            <Link to="/login" className="text-[14px] font-semibold text-slate-700 hover:text-navy-900 transition hidden sm:inline-block">
              Log In
            </Link>
            <Link
              to="/onboarding/community"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-navy-900 rounded-xl hover:bg-navy-850 transition shadow-sm hover:shadow active:scale-95"
            >
              Start a Community
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="pt-16 pb-14 bg-white" data-purpose="pricing-hero">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              FELLARIDE PRICING
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 tracking-tight leading-[1.12] mb-6">
              Simple for riders . <br className="hidden sm:inline" />
              Powerful for communities .
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Carpool within your community for free. Unlock broader matching and advanced safety features when you need them. Organizations can access the intelligence behind the network.
            </p>

            {/* Segmented Toggle */}
            <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200 shadow-inner" data-purpose="audience-toggle">
              <button
                onClick={() => setAudience('individuals')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm transition font-semibold ${
                  audience === 'individuals'
                    ? 'text-navy-900 bg-white shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
                type="button"
              >
                For Individuals
              </button>
              <button
                onClick={() => {
                  setAudience('organizations');
                  document.getElementById('institutional-value')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm transition font-medium ${
                  audience === 'organizations'
                    ? 'text-navy-900 bg-white shadow-sm border border-slate-200/60 font-semibold'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
                type="button"
              >
                For Communities & Organizations
              </button>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="pb-24 pt-2" data-purpose="pricing-tier-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Card 1: Free Tier */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition relative" data-purpose="free-tier-card">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">FOR INDIVIDUALS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">Free</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-extrabold tracking-tight text-navy-900">₹0</span>
                    <span className="text-slate-500 text-sm font-semibold">/ Forever</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-8 min-h-[40px] leading-relaxed">
                    Everything you need to carpool within your own community.
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3.5 pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Carpool within your community</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Find a Ride</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Offer a Ride</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Community-based matching</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Community referrals</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Basic route compatibility</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700 font-medium">Access to community ride network</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to="/signup"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition border border-slate-200/80 shadow-xs active:scale-[0.99]"
                  >
                    Join Free
                  </Link>
                  <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                    No credit card required • The core growth engine
                  </p>
                </div>
              </div>

              {/* Card 2: Premium Tier */}
              <div className="rounded-3xl border-2 border-emerald-500 bg-white p-8 flex flex-col justify-between shadow-lg shadow-emerald-900/5 relative" data-purpose="premium-tier-card">
                {/* Top Highlight Tag */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00875a] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  COMING SOON
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">FOR INDIVIDUALS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">Premium</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-extrabold tracking-tight text-navy-900">Coming soon</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-8 min-h-[40px] leading-relaxed">
                    For members who travel across multiple communities.
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3.5 pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-800 font-semibold">Everything in Free</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Cross-community matching</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Advanced safety & verification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Expanded matching options</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Multi-community access</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Enhanced ride preferences</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-800 font-medium">Priority access to eligible corridor rides</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={handleWaitlist}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#00875a] hover:bg-[#00704a] transition shadow-sm active:scale-[0.99]"
                  >
                    {waitlistSubmitted ? '✓ Added to Route 44 Waitlist' : 'Join the Waitlist'}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                    Expanding access across adjacent corridors
                  </p>
                </div>
              </div>

              {/* Card 3: Community Intelligence (B2B) */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition relative" data-purpose="b2b-tier-card">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">FOR COLLEGES & COMPANIES</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 text-navy-900 tracking-wide">
                      B2B MONETIZATION
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">Community Intelligence</h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4xl font-extrabold tracking-tight text-navy-900">Custom</span>
                    <span className="text-slate-500 text-sm font-semibold">/ for organizations</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-8 min-h-[40px] leading-relaxed">
                    Turn your community's commute patterns into an active, sustainable ride network.
                  </p>

                  {/* Features Checklist */}
                  <div className="space-y-3.5 pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700"><strong>Community Radar:</strong> corridor mapping</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700"><strong>Connector Intelligence:</strong> catalyst scoring</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700"><strong>Ghost Demand:</strong> latent peak prediction</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700"><strong>Community Activation:</strong> precision dispatch</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700"><strong>Community Health scoring</strong> (0–100 index)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">Commute analytics & route insights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-700">CO₂ savings insights & ESG reporting</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={handleContact}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-navy-900 hover:bg-navy-850 transition active:scale-[0.99]"
                  >
                    {contactSubmitted ? '✓ Inquiry Received (Sales will reach out)' : 'Talk to FellaRide'}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                    Subsidizes and sustains the free community layer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 bg-white border-t border-slate-200/60" data-purpose="feature-comparison" id="comparison-table">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Detailed Breakdown</div>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">What's included?</h2>
              <p className="text-slate-600 mt-2">Compare capabilities across individual carpooling and enterprise mobility intelligence.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" id="pricing-matrix">
                <thead>
                  <tr className="border-b border-slate-200/80">
                    <th className="py-4 px-4 text-sm font-bold text-navy-900 w-2/5">Feature</th>
                    <th className="py-4 px-4 text-sm font-bold text-navy-900 text-center w-1/5">
                      Free <br /><span className="text-xs font-normal text-slate-500">(Individuals)</span>
                    </th>
                    <th className="py-4 px-4 text-sm font-bold text-navy-900 text-center w-1/5">
                      Premium <br /><span className="text-xs font-normal text-slate-500">(Individuals)</span>
                    </th>
                    <th className="py-4 px-4 text-sm font-bold text-navy-900 text-center w-1/5">
                      Community Intelligence <br /><span className="text-xs font-normal text-slate-500">(B2B)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Community Carpooling</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Find a Ride</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Offer a Ride</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Community Matching</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Cross-Community Matching</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Advanced Safety & Verification</td>
                    <td className="py-4 px-4 text-center">
                      <span className="px-2.5 py-1 rounded bg-slate-100 text-xs font-semibold text-slate-600">Basic</span>
                    </td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Community Radar (Corridor Mapping)</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Connector Intelligence (Catalyst Scoring)</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Ghost Demand Detection (Peak Prediction)</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">Community Health Scoring (0–100)</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition">
                    <td className="py-4 px-4 font-medium text-slate-900">CO₂ & ESG Sustainability Reporting</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-slate-400 font-light">—</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold text-base">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ECONOMIC FLYWHEEL SECTION */}
        <section className="py-24 bg-white border-t border-slate-200/60" data-purpose="business-model-architecture">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-3">
                ECONOMIC FLYWHEEL
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                A business model built around network growth.
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Grassroots carpooling must stay zero-fee to ignite organic liquidity. Enterprise and university intelligence cross-subsidize the network.
              </p>
            </div>

            {/* Symbiotic Diagram Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Flow 1: Free User Layer */}
              <div className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <span className="material-symbols-outlined text-emerald-600 text-xl">groups</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">Free User Layer</h3>
                      <p className="text-xs text-slate-500">Zero commission • 100% community cost sharing</p>
                    </div>
                  </div>

                  {/* Step Sequence */}
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
                      <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                      <span className="text-sm font-medium text-slate-700">Free Users join local communities</span>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
                      <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                      <span className="text-sm font-medium text-slate-700">Connectors catalyze first synchronized corridors</span>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
                      <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                      <span className="text-sm font-medium text-slate-700">Higher route density yields instant matching liquidity</span>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-slate-200/60 shadow-2xs">
                      <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center justify-center shrink-0">4</span>
                      <span className="text-sm font-medium text-slate-700">Zero platform margin keeps ride costs strictly reciprocal</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">RESULT:</span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Autonomous, viral civic transit corridors without cold-start churn.</p>
                </div>
              </div>

              {/* Flow 2: Enterprise Intelligence Layer */}
              <div className="p-8 rounded-3xl bg-navy-950 text-white flex flex-col justify-between border border-slate-800 shadow-md">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-emerald-400 text-xl">query_stats</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">B2B Intelligence Layer</h3>
                      <p className="text-xs text-slate-400">Institutional mobility optimization & Scope 3 reporting</p>
                    </div>
                  </div>

                  {/* Step Sequence */}
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-3.5 p-3.5 bg-navy-900 rounded-xl border border-slate-800">
                      <span className="w-6 h-6 rounded-md bg-emerald-400/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                      <span className="text-sm font-medium text-slate-200">Campuses & Tech Parks sponsor community hubs</span>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-navy-900 rounded-xl border border-slate-800">
                      <span className="w-6 h-6 rounded-md bg-emerald-400/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                      <span className="text-sm font-medium text-slate-200">Radar pinpoints parking deficits and peak shift congestion</span>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-navy-900 rounded-xl border border-slate-800">
                      <span className="w-6 h-6 rounded-md bg-emerald-400/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                      <span className="text-sm font-medium text-slate-200">Institutions achieve verifiable Scope 3 ESG carbon offsets</span>
                    </div>
                    <div className="flex items-center gap-3.5 p-3.5 bg-navy-900 rounded-xl border border-slate-800">
                      <span className="w-6 h-6 rounded-md bg-emerald-400/20 text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">4</span>
                      <span className="text-sm font-medium text-slate-200">Enterprise software fees fully sustain the platform</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">THE RESULT:</span>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Institutions pay for systems intelligence. Commuters get free mobility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONAL VALUE */}
        <section className="py-24 bg-white border-t border-slate-200/60" data-purpose="why-b2b-section" id="institutional-value">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-4">
                INSTITUTIONAL VALUE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Organizations pay for intelligence. <br />Communities get mobility.
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Why do large entities invest in FellaRide Community Intelligence? Rather than operating inefficient private shuttles or spending millions on parking garages, they activate existing commuter corridors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 font-bold text-xs mb-5">01</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Understand</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Map latent commuter density corridors and spatial origins across your campus or company without personal surveillance.</p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 font-bold text-xs mb-5">02</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Predict</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Anticipate shift surges and transit bottlenecks 24–48 hours ahead with Ghost Demand forecasting engines.</p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 font-bold text-xs mb-5">03</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Activate</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Trigger natural, high-centrality connectors to mobilize organic carpool networks with zero ad-spend.</p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900 font-bold text-xs mb-5">04</div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Measure</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Track accurate Community Health (0–100), parking stress relief, and audit-ready Scope 3 ESG carbon reductions.</p>
              </div>
            </div>

            <div className="mt-10 flex items-center">
              <Link
                to="/app"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 text-white text-sm font-semibold hover:bg-navy-850 transition shadow-sm active:scale-95"
              >
                <span>Explore Community Intelligence</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* TARGET SEGMENTS */}
        <section className="py-24 bg-white" data-purpose="audience-breakdown">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider mb-3">
                TARGET SEGMENTS
              </div>
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">Who is FellaRide for?</h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">Designed for organized community anchors that possess natural social gravity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Audience 1: Colleges */}
              <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:border-emerald-300 transition">
                <div>
                  <div className="text-xs font-bold text-emerald-600 tracking-wide uppercase mb-2">HIGH DENSITY</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Colleges & Universities</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Connect off-campus student clusters to campus halls. Relieve massive parking congestion, reduce late arrivals, and cut expensive shuttle contracts.
                  </p>
                </div>
                <Link to="/app/radar" className="text-sm font-semibold text-navy-900 hover:text-emerald-600 flex items-center gap-1.5 transition">
                  For Colleges <span>→</span>
                </Link>
              </div>

              {/* Audience 2: Companies */}
              <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:border-emerald-300 transition">
                <div>
                  <div className="text-xs font-bold text-emerald-600 tracking-wide uppercase mb-2">MULTI-SYNC</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Corporate Tech Parks</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Enable employee ridesharing along suburban arterial loops. Enhance employee connection, achieve Scope 3 net-zero targets, and resolve lot gridlock.
                  </p>
                </div>
                <Link to="/app/connectors" className="text-sm font-semibold text-navy-900 hover:text-emerald-600 flex items-center gap-1.5 transition">
                  For Companies <span>→</span>
                </Link>
              </div>

              {/* Audience 3: Communities & HOAs */}
              <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:border-emerald-300 transition">
                <div>
                  <div className="text-xs font-bold text-emerald-600 tracking-wide uppercase mb-2">MUTUAL TRUST</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Residential Hubs & HOAs</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Anchor daily commutes, school carpools, and metro feeder routes. Replace messy neighborhood messaging groups with verifiable, automated ride-sharing.
                  </p>
                </div>
                <Link to="/app/communities" className="text-sm font-semibold text-navy-900 hover:text-emerald-600 flex items-center gap-1.5 transition">
                  For Communities <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 bg-white border-t border-slate-200/60" data-purpose="faq-accordion">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-slate-600 mt-2 text-sm">Transparent answers about our pricing, data policies, and network model.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition">
                <h3 className="text-base font-bold text-navy-900 mb-2">Is FellaRide really free?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes. Community-based carpooling is 100% free for individual users within their registered community. FellaRide charges zero commission on shared fuel cost reimbursements between peers.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition">
                <h3 className="text-base font-bold text-navy-900 mb-2">What does the upcoming Premium tier provide?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Premium is designed for members who commute across multiple communities (e.g. crossing between residential suburban corridors and neighboring corporate tech hubs) and who want advanced verified badge protections and expanded routing options.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition">
                <h3 className="text-base font-bold text-navy-900 mb-2">What does Community Intelligence provide to institutions?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Organizations gain full access to the Community Radar, Ghost Demand prediction algorithms, Connector Discovery tools, and auditable Scope 3 ESG carbon reporting to solve transit gridlock systematically.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition">
                <h3 className="text-base font-bold text-navy-900 mb-2">Do organizations need to redesign their systems for each community?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No. The Community Ignition System is designed to be plug-and-play. It adapts automatically to university campus domains, enterprise SSO, or residential neighborhood hubs without custom software infrastructure.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition">
                <h3 className="text-base font-bold text-navy-900 mb-2">Are the intelligence features based on private personal data?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Never. In both our prototype simulations and production architecture, all institutional intelligence is aggregated, anonymized, and spatial. Commuters are never individually monitored or tracked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL HERO CTA (DARK SECTION) */}
        <section className="py-24 bg-[#0a1124] text-white relative overflow-hidden" data-purpose="closing-cta" id="cta">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              START WITH ONE
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Your community doesn't need <br className="hidden sm:inline" />thousands of users to start.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you're looking for your next commute or building mobility for an entire community, FellaRide starts with the right first connection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/onboarding/community"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black text-base shadow-lg transition-all active:scale-95"
              >
                Start a Community
              </Link>
              <Link
                to="/signup"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-850 hover:bg-navy-800 text-white border border-slate-700 font-bold text-base transition-all active:scale-95"
              >
                Join Free
              </Link>
            </div>

            <p className="text-xs text-slate-400 mt-6 font-mono">
              Zero platform markup • 100% community cost sharing • Non-commercial model
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#050811] border-t border-slate-800 text-slate-400 text-xs py-14" data-purpose="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
            {/* Col 1: Brand */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-emerald-400 border border-slate-700">
                  <span className="material-symbols-outlined text-emerald-400 text-base">share</span>
                </div>
                <span className="text-lg font-extrabold text-white tracking-tight">FellaRide</span>
              </div>
              <p className="font-semibold text-slate-300 text-xs pt-1">Everything Starts Small.</p>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Community-powered carpooling and predictive mobility networks. Turning micro-interventions into resilient transportation corridors.
              </p>
            </div>

            {/* Col 2: Product Links */}
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">Product</span>
              <ul className="space-y-2.5 font-medium">
                <li><Link to="/#how-it-works" className="hover:text-emerald-400 transition">How It Works</Link></li>
                <li><Link to="/app/radar" className="hover:text-emerald-400 transition">Community Radar</Link></li>
                <li><Link to="/app/connectors" className="hover:text-emerald-400 transition">Connector Intelligence</Link></li>
                <li><Link to="/app/ghost-demand" className="hover:text-emerald-400 transition">Ghost Demand Detector</Link></li>
                <li><Link to="/app/butterfly-effect" className="hover:text-emerald-400 transition">The Butterfly Effect</Link></li>
              </ul>
            </div>

            {/* Col 3: Ecosystem Links */}
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">Ecosystem</span>
              <ul className="space-y-2.5 font-medium">
                <li><Link to="/#communities" className="hover:text-emerald-400 transition">For Universities & Colleges</Link></li>
                <li><Link to="/#communities" className="hover:text-emerald-400 transition">For Corporate Tech Parks</Link></li>
                <li><Link to="/#communities" className="hover:text-emerald-400 transition">Residential Communities</Link></li>
                <li><Link to="/pricing" className="text-emerald-400 font-semibold transition">Pricing & Plans</Link></li>
                <li><Link to="/login" className="hover:text-emerald-400 transition">Member Sign In</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Disclaimer & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-normal">
            <p>© 2024 FellaRide Mobility Systems. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Prototype concept — community intelligence and mobility network platform. Non-commercial civic cost sharing model.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
