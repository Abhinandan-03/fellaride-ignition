import { useState } from 'react';
import {
  ArrowLeftRight,
  Car,
  CheckCircle2,
  GitBranch,
  Network,
  Plus,
  ShieldCheck,
  UserPlus,
  X,
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function CommunityView() {
  const navigate = useNavigate();
  const {
    communities,
    userCommunities,
    selectedCommunity,
    selectCommunity,
    joinCommunity,
    createCommunity,
    communityRoutes,
    communityRides,
    joinRide,
    currentUser,
    canJoinRide,
    canOfferRide,
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCommName, setNewCommName] = useState('');
  const [newCommCorridor, setNewCommCorridor] = useState('');
  const [newCommDesc, setNewCommDesc] = useState('');

  const currentComm = selectedCommunity || communities[0];

  const handleJoinRide = (rideId: string) => {
    if (!canJoinRide) return;
    const success = joinRide(rideId);
    if (success) {
      navigate('/app/ride-confirmed');
    }
  };

  const handleCopyInvite = () => {
    navigator.clipboard?.writeText(`https://fellaride.io/join/${currentComm.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreateCommunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommName.trim()) return;

    const created = createCommunity({
      name: newCommName.trim(),
      corridor: newCommCorridor.trim() || `${newCommName.trim()} · Central Corridor`,
      description: newCommDesc.trim() || `Community network for ${newCommName.trim()} commuters.`,
      location: newCommName.trim(),
    });

    setShowCreateModal(false);
    setNewCommName('');
    setNewCommCorridor('');
    setNewCommDesc('');
    selectCommunity(created.id);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* Top Navigation & Meta Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs font-mono text-mono text-outline uppercase tracking-wider">
            <span>Communities</span>
            <span className="text-outline-variant">/</span>
            <span className="text-secondary font-semibold">{currentComm.name}</span>
          </div>
          <div className="flex items-baseline gap-space-sm">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">{currentComm.name}</h1>
            <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-surface-container-high text-on-surface-variant uppercase tracking-wider">
              Node #{currentComm.id.slice(0, 8).toUpperCase()}
            </span>
            {currentComm.ownerId === currentUser?.id && (
              <span className="font-label-sm text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider">
                Admin / Owner
              </span>
            )}
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {currentComm.description || `Autonomous ride-share cluster for ${currentComm.name} members.`}
          </p>
        </div>

        {/* Right Quick Actions */}
        <div className="flex flex-wrap items-center gap-space-sm">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-navy-900 text-white font-label-md text-xs font-bold shadow-md hover:bg-navy-850 transition-all cursor-pointer"
          >
            <Plus size={16} />
            <span>Create Community</span>
          </button>
          <button
            onClick={handleCopyInvite}
            className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-xs font-semibold shadow-sm hover:bg-surface-container transition-all cursor-pointer"
          >
            <UserPlus className="text-base text-secondary" />
            <span>{copied ? 'Link Copied!' : 'Invite Link'}</span>
          </button>
        </div>
      </div>

      {/* Community Selector / Directory Bar */}
      <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <Network className="text-secondary" size={18} />
            <span className="font-headline-sm text-sm font-bold text-on-surface">Community Switcher & Directory</span>
          </div>
          <span className="text-xs text-outline font-mono">
            {userCommunities.length} Joined · {communities.length} Total
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {communities.map((c) => {
            const isSelected = c.id === currentComm.id;
            const isMember = currentUser?.communityIds?.includes(c.id);

            return (
              <div
                key={c.id}
                onClick={() => selectCommunity(c.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-2 border-emerald-500 bg-[#f8fcfa] shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-navy-900 truncate">{c.name}</span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 truncate mb-2">{c.corridor || 'Active corridor'}</div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400">
                    {c.state?.drivers || 4} drivers
                  </span>
                  {isSelected ? (
                    <span className="text-[10px] font-bold text-emerald-700">SELECTED</span>
                  ) : isMember ? (
                    <span className="text-[10px] font-bold text-blue-700 hover:underline">SWITCH</span>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        joinCommunity(c.id);
                        selectCommunity(c.id);
                      }}
                      className="text-[10px] font-bold text-emerald-600 hover:underline cursor-pointer"
                    >
                      JOIN & SWITCH
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero / Selected Community Identity Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
          <div className="flex items-start gap-space-md">
            <div className="w-16 h-16 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-headline-md text-headline-md shrink-0 shadow-md">
              {currentComm.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex flex-col gap-space-xs">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="font-headline-md text-headline-md text-on-surface font-extrabold">{currentComm.name}</span>
                <span className="px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                  <ArrowLeftRight className="text-xs" /> {currentComm.corridor || 'Corridor Connected'}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                {currentComm.description || `Verified peer transit for ${currentComm.name}. ₹0 platform fee.`}
              </p>
              <div className="flex items-center gap-space-sm mt-space-xs flex-wrap">
                <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container uppercase tracking-wider font-bold">
                  {currentComm.status?.toUpperCase() || 'ACTIVE'} CLUSTER
                </span>
                <span className="text-xs text-outline font-mono">
                  {currentComm.state?.activeMembers || 24} Active Members · {currentComm.state?.drivers || 6} Drivers
                </span>
              </div>
            </div>
          </div>

          {/* Health Score Ring */}
          <div className="flex items-center gap-space-lg bg-surface-container-low p-space-md rounded-2xl shrink-0">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${currentComm.state?.health?.score || 88}, 100`} strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold leading-none">{currentComm.state?.health?.score || 88}</span>
                <span className="font-label-sm text-[8px] text-outline uppercase tracking-wider">/100</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-bold text-on-surface">Community Health</span>
              <span className="font-body-sm text-xs text-secondary font-semibold">Self-Sustaining Cluster</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Section: Routes & Rides */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* LEFT COLUMN: Community Routes & Available Rides */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          {/* Active Routes Card */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-2">
                <GitBranch className="text-secondary" size={18} />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Routes from {currentComm.name} ({communityRoutes.length})
                </h3>
              </div>
              {canOfferRide && (
                <button
                  onClick={() => navigate('/app/offer-ride')}
                  className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={14} /> Offer on a Route
                </button>
              )}
            </div>

            <div className="space-y-2.5">
              {communityRoutes.map((route) => (
                <div
                  key={route.id}
                  className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-on-surface">{route.startPoint} ➔ {route.destination}</span>
                    </div>
                    <span className="text-[11px] text-outline font-mono">{route.name || 'Direct Route'} · {route.distance || '14 km'}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-secondary-container text-on-secondary-container shrink-0">
                    ACTIVE
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Rides in Community Card */}
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-2">
                <Car className="text-secondary" size={18} />
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Rides in {currentComm.name} ({communityRides.length})
                </h3>
              </div>
              <Link to="/app/find-ride" className="text-xs text-secondary font-bold hover:underline">
                View in Find Ride →
              </Link>
            </div>

            {communityRides.length === 0 ? (
              <div className="p-8 text-center bg-surface-container-low rounded-xl">
                <p className="text-xs text-on-surface-variant mb-3">No rides scheduled in this community yet.</p>
                {canOfferRide && (
                  <button
                    onClick={() => navigate('/app/offer-ride')}
                    className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-bold shadow-xs cursor-pointer"
                  >
                    Be the first to offer a ride
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {communityRides.map((ride) => (
                  <div
                    key={ride.id}
                    className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-on-surface">{ride.origin} ➔ {ride.destination}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container font-mono text-outline">
                          {ride.departureTime}
                        </span>
                      </div>
                      <div className="text-[11px] text-on-surface-variant mt-0.5">
                        Driver: <strong>{ride.driverName}</strong> · ₹{ride.price || ride.pricePerSeat || 80}/seat
                      </div>
                    </div>

                    <div className="flex items-center gap-2 justify-between sm:justify-end">
                      <span className="text-xs font-mono font-bold text-secondary">
                        {ride.availableSeats} seats open
                      </span>
                      <button
                        onClick={() => handleJoinRide(ride.id)}
                        disabled={ride.availableSeats <= 0 || !canJoinRide}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          ride.availableSeats <= 0 || !canJoinRide
                            ? 'bg-surface-container text-outline cursor-not-allowed'
                            : 'bg-secondary text-on-secondary hover:bg-secondary/90 shadow-xs'
                        }`}
                      >
                        {ride.availableSeats <= 0 ? 'Full' : !canJoinRide ? 'Offer-Only' : 'Join Ride'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Community Info & Trust */}
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={18} /> Community Trust Principles
            </h3>
            <div className="space-y-2.5 text-xs text-on-surface">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>Rides are scoped strictly within {currentComm.name}.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>Cost sharing is strictly non-commercial fuel offset.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-secondary shrink-0" />
                <span>₹0 platform markup fees on peer carpools.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Create Community */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/40 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute right-5 top-5 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="mb-5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                Community Builder
              </span>
              <h3 className="text-2xl font-bold text-navy-900 mt-2">Create a New Community</h3>
              <p className="text-xs text-slate-500 mt-1">
                Start a local carpool cluster for your neighborhood, office park, or college campus.
              </p>
            </div>

            <form onSubmit={handleCreateCommunitySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Community Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Westside Innovation Hub"
                  value={newCommName}
                  onChange={(e) => setNewCommName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Primary Transit Corridor
                </label>
                <input
                  type="text"
                  placeholder="e.g. Westside Hub ➔ Central District"
                  value={newCommCorridor}
                  onChange={(e) => setNewCommCorridor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief description of the community commute group..."
                  value={newCommDesc}
                  onChange={(e) => setNewCommDesc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-850 text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
                >
                  Create & Switch Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
