import { NavLink } from 'react-router-dom';
import { useApp } from '../../store/AppContext';
import {
  LayoutDashboard,
  Radar,
  Network,
  Share2,
  Radio,
  Zap,
  Sparkles,
  Activity,
  Compass,
  Car,
  User,
  SlidersHorizontal,
} from 'lucide-react';

export default function Sidebar() {
  const { currentUser, community, selectedCommunity, canOfferRide } = useApp();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Brand Header */}
        <div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm">
            <img
              alt="FellaRide Logo"
              className="h-8 w-auto object-contain"
              src="/fellaride-logo.png"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span>
              <span className="font-mono text-mono text-on-surface-variant">v2.4</span>
            </div>
          </div>
          <span className="px-space-xs py-0.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full tracking-wider uppercase">
            COMMUNITY OS
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-space-sm py-space-xs flex flex-col gap-space-xs">
          {/* SECTION: OVERVIEW */}
          <div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
            OVERVIEW
          </div>
          <NavLink
            to="/app"
            end
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <LayoutDashboard size={18} className="shrink-0" />
                  Command Center
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          {/* SECTION: DISCOVER */}
          <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
            DISCOVER
          </div>
          <NavLink
            to="/app/radar"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Radar size={18} className="shrink-0" />
                  Community Radar
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/app/communities"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Network size={18} className="shrink-0" />
                  Communities
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          {/* SECTION: ACTIVATE */}
          <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
            ACTIVATE
          </div>
          <NavLink
            to="/app/connectors"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Share2 size={18} className="shrink-0" />
                  Connectors
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/app/ghost-demand"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Radio size={18} className="shrink-0" />
                  Ghost Demand
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/app/activation"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Zap size={18} className="shrink-0" />
                  Activation
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          {/* SECTION: GROW */}
          <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
            GROW
          </div>
          <NavLink
            to="/app/butterfly-effect"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Sparkles size={18} className="shrink-0" />
                  Cascade Multiplier
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/app/community-health"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Activity size={18} className="shrink-0" />
                  Community Health
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          {/* SECTION: RIDER */}
          <div className="px-space-sm pt-space-md pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
            RIDER
          </div>
          <NavLink
            to="/app/find-ride"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Compass size={18} className="shrink-0" />
                  Find a Ride
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/app/offer-ride"
            className={({ isActive }) =>
              `flex items-center justify-between px-space-sm py-space-sm rounded-lg transition-all ${
                isActive
                  ? 'bg-primary text-on-primary font-bold'
                  : canOfferRide
                  ? 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
                  : 'text-outline hover:bg-surface-container hover:text-on-surface-variant font-label-lg text-label-lg opacity-70'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <Car size={18} className="shrink-0" />
                  Offer a Ride
                </span>
                {!canOfferRide && (
                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-surface-container text-outline">
                    Find Only
                  </span>
                )}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>
        </nav>
      </div>

      {/* Bottom Profile & Pilot Info */}
      <div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs">
        <div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm min-w-0">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0"></span>
            <span className="font-mono text-mono text-on-surface font-semibold truncate">
              {selectedCommunity?.name || community?.name || 'Northside Pilot'}
            </span>
          </div>
          <span className="text-[9px] font-mono font-bold uppercase text-secondary bg-secondary-container/60 px-1.5 py-0.5 rounded shrink-0">
            ACTIVE
          </span>
        </div>

        <div
          onClick={() => window.location.href = '/onboarding/profile'}
          className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <User size={18} className="text-on-primary shrink-0" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-md text-label-md text-on-surface truncate">
              {currentUser?.name || 'Account User'}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
              {currentUser?.role || 'Both'} · {currentUser?.plan ? currentUser.plan.toUpperCase() : 'FREE'}
            </span>
          </div>
          <SlidersHorizontal size={16} className="text-on-surface-variant shrink-0" />
        </div>
      </div>
    </aside>
  );
}
