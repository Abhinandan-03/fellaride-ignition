import { NavLink } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function Sidebar() {
  const { currentUser, community } = useApp();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Brand Header */}
        <div className="px-space-md py-space-md flex items-center justify-between bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm">
            <img
              alt="FellaRide Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight">FellaRide</span>
              <span className="font-telemetry-mono text-telemetry-mono text-on-surface-variant">v2.4</span>
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
                  <span className="material-symbols-outlined text-base">dashboard</span>Command Center
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
                  <span className="material-symbols-outlined text-base">radar</span>Community Radar
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
                  <span className="material-symbols-outlined text-base">hub</span>Communities
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
                  <span className="material-symbols-outlined text-base">share</span>Connectors
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
            {() => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-base">sensors</span>Ghost Demand
                </span>
                <span className="px-space-xs py-0.5 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full animate-pulse">
                  LIVE
                </span>
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
                  <span className="material-symbols-outlined text-base">bolt</span>Activation
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
            {() => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-base">flare</span>Butterfly Effect
                </span>
                <span className="material-symbols-outlined text-base text-secondary">auto_awesome</span>
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
                  <span className="material-symbols-outlined text-base">vital_signs</span>Community Health
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
                  <span className="material-symbols-outlined text-base">travel_explore</span>Find a Ride
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
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-lg text-label-lg'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="flex items-center gap-space-sm font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-base">directions_car</span>Offer a Ride
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>}
              </>
            )}
          </NavLink>
        </nav>
      </div>

      {/* Bottom Profile & Pilot Info */}
      <div className="p-space-sm bg-surface-container-low flex flex-col gap-space-xs">
        <div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-telemetry-mono text-telemetry-mono text-on-surface font-semibold">
              Demo: {community?.name ? 'Northside Pilot' : 'Northside'}
            </span>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface" aria-label="Sync status">
            <span className="material-symbols-outlined text-base">sync_alt</span>
          </button>
        </div>

        <div className="flex items-center gap-space-sm p-space-sm rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-md text-label-md text-on-surface truncate">
              {currentUser?.name || 'Sarah Chen'}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Growth Lead</span>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant text-base">tune</span>
        </div>
      </div>
    </aside>
  );
}
