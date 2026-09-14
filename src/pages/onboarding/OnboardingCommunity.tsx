import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Share2, ArrowLeft, Search, ArrowRight, BadgeCheck, X, Info } from 'lucide-react';

interface CommunityOption {
  id: string;
  name: string;
  avatar: string;
  avatarBg: string;
  statusBadge: { text: string; bg: string; color: string };
  isDemo?: boolean;
  corridor: string;
  description: string;
  members: number;
  drivers: number;
  passengers: number;
  rides?: number;
  category: 'all' | 'colleges' | 'residential' | 'emerging';
}

const COMMUNITIES: CommunityOption[] = [
  {
    id: 'northside',
    name: 'Northside Community',
    avatar: 'N',
    avatarBg: 'bg-emerald-600',
    statusBadge: { text: 'ACTIVE', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200', color: 'text-emerald-800' },
    isDemo: true,
    corridor: 'Northside · Central District',
    description: 'An active community ride network with recurring Northside — Central District travel.',
    members: 23,
    drivers: 8,
    passengers: 15,
    rides: 14,
    category: 'residential',
  },
  {
    id: 'eastview',
    name: 'Eastview Community',
    avatar: 'E',
    avatarBg: 'bg-slate-800',
    statusBadge: { text: 'GROWING', bg: 'bg-blue-50 text-blue-700 border-blue-100', color: 'text-blue-700' },
    corridor: 'Eastview · Central District',
    description: 'A growing community with recurring commuter activity.',
    members: 17,
    drivers: 6,
    passengers: 11,
    category: 'colleges',
  },
  {
    id: 'lakeside',
    name: 'Lakeside Community',
    avatar: 'L',
    avatarBg: 'bg-slate-700',
    statusBadge: { text: 'EMERGING', bg: 'bg-slate-100 text-slate-700 border-slate-200', color: 'text-slate-700' },
    corridor: 'Lakeside · Central District',
    description: 'An emerging community with early ride activity.',
    members: 11,
    drivers: 4,
    passengers: 7,
    category: 'emerging',
  },
  {
    id: 'westend',
    name: 'West End Community',
    avatar: 'W',
    avatarBg: 'bg-slate-700',
    statusBadge: { text: 'EMERGING', bg: 'bg-slate-100 text-slate-700 border-slate-200', color: 'text-slate-700' },
    corridor: 'West End · Central District',
    description: 'A localized neighborhood network establishing morning commute corridors.',
    members: 8,
    drivers: 3,
    passengers: 5,
    category: 'residential',
  },
];

export default function OnboardingCommunity() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState('northside');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'colleges' | 'residential' | 'emerging'>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCommName, setNewCommName] = useState('');
  const [newCommCorridor, setNewCommCorridor] = useState('');

  const selectedCommunity = COMMUNITIES.find((c) => c.id === selectedId) || COMMUNITIES[0];

  const filteredCommunities = COMMUNITIES.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.corridor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || c.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleContinue = () => {
    navigate('/onboarding/profile');
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

      {/* 2. STEPPER & MAIN CARD */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 md:py-14 flex flex-col justify-start">
        {/* STEP PROGRESSION INDICATOR */}
        <div className="mb-10 max-w-lg mx-auto w-full">
          <div className="flex items-center justify-between relative">
            {/* Connecting line 1 (Completed Emerald) */}
            <div className="absolute left-[20%] top-5 w-[30%] h-[2px] bg-emerald-500 z-0"></div>
            {/* Connecting line 2 (Inactive Grey) */}
            <div className="absolute left-[52%] top-5 w-[30%] h-[2px] bg-slate-200 z-0"></div>

            {/* Step 01: Account (Completed) */}
            <Link to="/signup" className="relative z-10 flex flex-col items-center group focus:outline-none">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-xs font-bold text-emerald-600 mt-2 tracking-wide uppercase">Account</span>
            </Link>

            {/* Step 02: Community (Active Current State) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-slate-100 transition-all">
                02
              </div>
              <span className="text-xs font-extrabold text-navy-900 mt-2 tracking-wide uppercase">Community</span>
            </div>

            {/* Step 03: Ride Profile (Inactive State) */}
            <div className="relative z-10 flex flex-col items-center opacity-60">
              <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-sm shadow-sm">
                03
              </div>
              <span className="text-xs font-semibold text-slate-400 mt-2 tracking-wide uppercase">Ride Profile</span>
            </div>
          </div>
        </div>

        {/* MAIN ONBOARDING CARD SHELL */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-10 relative">
          {/* HEADER TITLE & EYEBROW */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              STEP 02 • COMMUNITY
            </div>
            <h1 className="text-3xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Which community are you joining?
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              FellaRide works best when people start with a community they already belong to.
            </p>
          </div>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="space-y-4 mb-6">
            {/* Search Bar */}
            <div className="relative w-full">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <Search size={18} />
              </div>
              <input
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white focus:bg-white text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 text-sm transition-all shadow-xs"
                placeholder="Search by community name..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-semibold scrollbar-none">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors whitespace-nowrap shadow-xs ${
                  activeFilter === 'all'
                    ? 'bg-navy-900 text-white border border-navy-900'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
                type="button"
              >
                All Communities
              </button>
              <button
                onClick={() => setActiveFilter('colleges')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeFilter === 'colleges'
                    ? 'bg-navy-900 text-white border border-navy-900 font-bold'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
                type="button"
              >
                Colleges & Tech Parks
              </button>
              <button
                onClick={() => setActiveFilter('residential')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeFilter === 'residential'
                    ? 'bg-navy-900 text-white border border-navy-900 font-bold'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
                type="button"
              >
                Residential Hubs
              </button>
              <button
                onClick={() => setActiveFilter('emerging')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeFilter === 'emerging'
                    ? 'bg-navy-900 text-white border border-navy-900 font-bold'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                }`}
                type="button"
              >
                Emerging
              </button>
            </div>
          </div>

          {/* COMMUNITY SELECTION CARDS LIST */}
          <div className="space-y-4">
            {filteredCommunities.map((c) => {
              const isSelected = selectedId === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`rounded-2xl p-5 sm:p-6 cursor-pointer transition-all relative flex flex-col md:flex-row md:items-center justify-between gap-5 group ${
                    isSelected
                      ? 'border-2 border-emerald-500 bg-[#f8fcfa] shadow-xs'
                      : 'border border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${c.avatarBg} text-white flex items-center justify-center flex-shrink-0 font-extrabold shadow-sm text-lg`}
                    >
                      {c.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-extrabold text-lg text-navy-900">{c.name}</h3>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wide border ${c.statusBadge.bg}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          {c.statusBadge.text}
                        </span>
                        {c.isDemo && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-[11px] font-extrabold uppercase tracking-wide border border-teal-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                            DEMO COMMUNITY
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
                        <span className="text-slate-400">→</span>
                        <span>{c.corridor}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                        {c.description}
                      </p>
                      {/* Metrics Strip */}
                      <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-slate-600 font-medium">
                        <span className="font-semibold text-navy-900">{c.members} active members</span>
                        <span className="text-slate-300">•</span>
                        <span>{c.drivers} drivers</span>
                        <span className="text-slate-300">•</span>
                        <span>{c.passengers} passengers</span>
                        {c.rides && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-emerald-700 font-bold">{c.rides} active rides</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-3 self-end md:self-center flex-shrink-0">
                    {isSelected ? (
                      <button
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs flex items-center gap-1.5"
                        type="button"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span>Selected</span>
                      </button>
                    ) : (
                      <button
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                        type="button"
                      >
                        Select Community
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CAN'T FIND YOUR COMMUNITY BANNER */}
          <div className="mt-8 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-navy-900">Can't find your community?</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Create a new community and start the network for your workplace, neighborhood, or university.
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex-shrink-0 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-navy-900 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
              type="button"
            >
              <span className="text-emerald-600 font-black text-sm">+</span>
              <span>Create a Community</span>
            </button>
          </div>

          {/* SELECTED SUMMARY BAR & NEXT ACTIONS (ANCHORED AT BOTTOM) */}
          <div className="mt-8 pt-6 border-t border-slate-200/80">
            <div className="bg-[#0a1124] text-white rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">SELECTED CHOICE</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  You're joining {selectedCommunity.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {selectedCommunity.members} active members • {selectedCommunity.drivers} drivers • {selectedCommunity.passengers} passengers
                  {selectedCommunity.rides ? ` • ${selectedCommunity.rides} active rides` : ''}
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
                <Link
                  to="/signup"
                  className="px-4 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Account</span>
                </Link>
                <button
                  onClick={handleContinue}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 text-sm font-extrabold shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-95"
                  type="button"
                >
                  <span>Continue to Ride Profile</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* HACKATHON DEMO NOTE */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
            <span className="font-bold text-slate-700">Hackathon Demo:</span> Northside Community is pre-configured with simulated commuter clusters, active routes, and connector intelligence.
          </p>
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

      {/* CREATE COMMUNITY MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative fade-enter">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors"
              type="button"
            >
              <X size={20} />
            </button>
            <div className="mb-5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                Community Organizer
              </span>
              <h3 className="text-2xl font-bold text-navy-900 mt-2">Create your community</h3>
              <p className="text-xs text-slate-500 mt-1">Start a self-sustaining transit cluster for your campus, company, or neighborhood.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowCreateModal(false);
                setSelectedId('northside');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Community Name</label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium"
                  placeholder="e.g. Westside Innovation District"
                  required
                  type="text"
                  value={newCommName}
                  onChange={(e) => setNewCommName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Community Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium">
                  <option>Residential Hub / HOA</option>
                  <option>Colleges & Universities</option>
                  <option>Corporate Tech Park</option>
                  <option>Alumni Network</option>
                  <option>Other Civic Group</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Primary Corridor</label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium"
                  placeholder="e.g. Westside → Central District"
                  required
                  type="text"
                  value={newCommCorridor}
                  onChange={(e) => setNewCommCorridor(e.target.value)}
                />
              </div>
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200/70 text-[11px] text-emerald-800 flex items-start gap-2.5">
                <Info className="text-emerald-600 shrink-0" size={16} />
                <span>FellaRide's connector intelligence can identify commuter density and predict shared routes as members join.</span>
              </div>
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-xs font-bold shadow-md transition-colors"
                  type="submit"
                >
                  Create Community
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
