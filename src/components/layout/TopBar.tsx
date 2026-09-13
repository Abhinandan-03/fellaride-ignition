import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../store/AppContext';
import {
  MapPin,
  ChevronDown,
  Search,
  Radio,
  Radar,
  Download,
  Bell,
  User,
} from 'lucide-react';

export default function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { community } = useApp();

  const getStatusBadge = () => {
    const path = location.pathname;
    if (path === '/app') {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Northside Community:</strong> 91/100 Potential
        </span>
      );
    }
    if (path.includes('radar')) {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Community Radar:</strong> 7 Prime Zones
        </span>
      );
    }
    if (path.includes('connectors')) {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Connector Intel:</strong> Alex Morgan (Score: 96)
        </span>
      );
    }
    if (path.includes('ghost-demand')) {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Ghost Demand:</strong> 37 Predicted Riders
        </span>
      );
    }
    if (path.includes('activation')) {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Activation:</strong> Northside Community
        </span>
      );
    }
    if (path.includes('butterfly-effect')) {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Growth Ripple:</strong> 1 → 32 Members
        </span>
      );
    }
    if (path.includes('community-health')) {
      return (
        <span className="font-mono text-mono text-on-surface">
          <strong className="font-semibold">Community Health:</strong> {community.state.health.score}/100 Score
        </span>
      );
    }
    return (
      <span className="font-mono text-mono text-on-surface">
        <strong className="font-semibold">Northside Community:</strong> {community.state.activeMembers} Active Members
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
          src="/fellaride-logo.png"
        />

        <button
          onClick={() => navigate('/app/communities')}
          className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors cursor-pointer"
        >
          <MapPin size={16} className="text-secondary shrink-0" />
          <span className="font-semibold">Pilot Community:</span>
          <span className="text-on-surface-variant">{community?.name ? 'Northside Hub' : 'Northside'}</span>
          <ChevronDown size={16} className="ml-space-xs shrink-0" />
        </button>

        <div className="relative flex items-center">
          <Search size={16} className="absolute left-3 text-outline shrink-0" />
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
        <Radio size={16} className="text-secondary shrink-0" />
        {getStatusBadge()}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-space-sm">
        <button
          onClick={() => navigate('/app/ghost-demand')}
          className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all cursor-pointer"
        >
          <Radar size={16} className="shrink-0" />
          <span>+ Scan Demand</span>
        </button>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all cursor-pointer"
        >
          <Download size={16} className="shrink-0" />
          <span>Export</span>
        </button>

        <button
          className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <Bell size={18} className="shrink-0" />
          <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">
            3
          </span>
        </button>

        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <User size={18} className="text-on-primary shrink-0" />
        </div>
      </div>
    </header>
  );
}
