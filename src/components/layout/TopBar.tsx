import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';

export default function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { community } = useApp();

  const getStatusBadge = () => {
    const path = location.pathname;
    if (path === '/app') {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 1/9:</strong> DISCOVER <span className="text-outline-variant">•</span> Northside Ready
        </span>
      );
    }
    if (path.includes('radar')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 2/9:</strong> UNDERSTAND <span className="text-outline-variant">•</span> 7 Communities
        </span>
      );
    }
    if (path.includes('connectors')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 3/9:</strong> TARGET <span className="text-outline-variant">•</span> 1 Connector Found
        </span>
      );
    }
    if (path.includes('ghost-demand')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 4/9:</strong> PREDICT <span className="text-outline-variant">•</span> 37 Passenger Shortage
        </span>
      );
    }
    if (path.includes('activation')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 5/9:</strong> ACTIVATE <span className="text-outline-variant">•</span> 1 Connector → 24 Users
        </span>
      );
    }
    if (path.includes('butterfly-effect')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 6/9:</strong> EXPAND <span className="text-outline-variant">•</span> 1 → 32 Ripple Effect
        </span>
      );
    }
    if (path.includes('community-health')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Phase 7/9:</strong> SUSTAIN <span className="text-outline-variant">•</span> Health Score 82
        </span>
      );
    }
    if (path.includes('find-ride')) {
      return (
        <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
          <strong className="font-semibold">Status:</strong> Phase 5/9: ACTIVATE <span className="text-outline-variant">•</span> 1 Connector → 32 Users
        </span>
      );
    }
    return (
      <span className="font-telemetry-mono text-telemetry-mono text-on-surface">
        <strong className="font-semibold">Northside Pilot:</strong> 32 Active · 9 Drivers
      </span>
    );
  };

  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md">
      {/* Left controls */}
      <div className="flex items-center gap-space-md">
        <img
          alt="FellaRide Logo"
          className="h-8 w-auto object-contain hidden lg:block"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEaJIEfVPj3eOn2dEWzrNAHc3gN0cliRPY7yxmFGihQznibvL6M690a7XcRCso4fUAtIfcShqfgpa2o8s433IxDlUjA7Svq_Joqe76Pv0BGfKubf0RNIGs9FtRGzGmvFoCeEaea8BWXwafDO1Wp4iqQ01w0ZUtCpVfbKssR2OOLwODpxOsrZPVxXUi_Sh-IGQZzDVKc3s8jdGl-V5A0gAzIT9ja3wnMohZDmMooqpO9WF07Ucpevyw"
        />

        <button
          onClick={() => navigate('/app/communities')}
          className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-base text-secondary">location_on</span>
          <span className="font-semibold">Pilot Community:</span>
          <span className="text-on-surface-variant">{community?.name ? 'Northside Hub' : 'Northside'}</span>
          <span className="material-symbols-outlined text-base ml-space-xs">expand_more</span>
        </button>

        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-outline text-base">search</span>
          <input
            className="w-64 h-9 pl-9 pr-4 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search communities or routes..."
            type="text"
            aria-label="Search communities or routes"
          />
        </div>
      </div>

      {/* Center dynamic phase badge */}
      <div className="hidden xl:flex items-center gap-space-sm px-space-md py-1.5 rounded-full bg-surface-container-low">
        <span className="material-symbols-outlined text-base text-secondary">sensors</span>
        {getStatusBadge()}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-space-sm">
        <button
          onClick={() => navigate('/app/ghost-demand')}
          className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">radar</span>+ Scan Demand
        </button>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">download</span>Export
        </button>

        <button
          className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">
            3
          </span>
        </button>

        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
        </div>
      </div>
    </header>
  );
}
