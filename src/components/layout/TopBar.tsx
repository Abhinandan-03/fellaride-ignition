import { useState, useRef, useEffect } from 'react';
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
  FileSpreadsheet,
  FileCode,
  Printer,
  Check,
  LogOut,
} from 'lucide-react';

export default function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { community } = useApp();

  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [exportToast, setExportToast] = useState<string | null>(null);

  const exportRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (exportRef.current && !exportRef.current.contains(target)) {
        setIsExportOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(target)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExport = (format: 'csv' | 'json' | 'print') => {
    setIsExportOpen(false);
    if (format === 'print') {
      window.print();
      return;
    }
    if (format === 'csv') {
      const csvData =
        'Corridor,Zone,Forecast Passengers,Available Seats,Deficit,Confidence,Status\n' +
        'Route 44 Corridor,Northside Athletic Hub,37,12,-25,87%,Shortage Detected\n' +
        'Eastview Civic,Eastview Metro,22,10,-12,79%,Shortage Detected\n' +
        'Lakeside Marina,East Lakeside,18,10,-8,81%,Shortage Detected\n' +
        'West End Arena,West End District,14,14,0,92%,Balanced\n';
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `fellaride-demand-corridors-${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setExportToast('Demand CSV exported successfully');
      setTimeout(() => setExportToast(null), 3000);
    } else if (format === 'json') {
      const jsonData = JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          community: community?.name || 'Northside Community',
          healthScore: community?.state?.health?.score || 88,
          activeMembers: community?.state?.activeMembers || 32,
          corridors: [
            { name: 'Route 44', passengers: 37, seats: 12, deficit: -25, confidence: 0.87 },
            { name: 'Eastview Civic', passengers: 22, seats: 10, deficit: -12, confidence: 0.79 },
            { name: 'Lakeside Marina', passengers: 18, seats: 10, deficit: -8, confidence: 0.81 },
            { name: 'West End Arena', passengers: 14, seats: 14, deficit: 0, confidence: 0.92 },
          ],
        },
        null,
        2
      );
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `fellaride-telemetry-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setExportToast('Telemetry JSON exported successfully');
      setTimeout(() => setExportToast(null), 3000);
    }
  };

  const notifications = [
    {
      id: 1,
      title: 'Predicted Shortage Surge',
      desc: 'Route 44 Sports Festival needs 25 seats by Saturday 6:00 PM',
      time: '10m ago',
      path: '/app/ghost-demand',
    },
    {
      id: 2,
      title: 'High-Leverage Anchor Found',
      desc: 'Alex Morgan identified as key connector (Score 96)',
      time: '25m ago',
      path: '/app/connectors',
    },
    {
      id: 3,
      title: 'Critical Mass Threshold',
      desc: 'Northside Community reached 78% activation readiness',
      time: '1h ago',
      path: '/app/activation',
    },
  ];

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
          onClick={() => {
            navigate('/app/ghost-demand');
            window.dispatchEvent(new CustomEvent('fellaride:scan-demand'));
          }}
          className="flex items-center gap-space-xs px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all cursor-pointer"
        >
          <Radar size={16} className="shrink-0" />
          <span>+ Scan Demand</span>
        </button>

        {/* Export with Dropdown */}
        <div className="relative" ref={exportRef}>
          <button
            onClick={() => setIsExportOpen(!isExportOpen)}
            className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all cursor-pointer"
          >
            <Download size={16} className="shrink-0" />
            <span>Export</span>
            <ChevronDown size={14} className={`shrink-0 transition-transform ${isExportOpen ? 'rotate-180' : ''}`} />
          </button>

          {isExportOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-surface-container-lowest shadow-xl border border-surface-container-high p-1.5 z-50">
              <button
                onClick={() => handleExport('csv')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
              >
                <FileSpreadsheet size={16} className="text-secondary shrink-0" />
                <div>
                  <div className="font-semibold">Download CSV</div>
                  <div className="text-xs text-on-surface-variant">Demand & corridor metrics</div>
                </div>
              </button>
              <button
                onClick={() => handleExport('json')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
              >
                <FileCode size={16} className="text-secondary shrink-0" />
                <div>
                  <div className="font-semibold">Download JSON</div>
                  <div className="text-xs text-on-surface-variant">Raw system telemetry</div>
                </div>
              </button>
              <div className="h-px bg-surface-container my-1" />
              <button
                onClick={() => handleExport('print')}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
              >
                <Printer size={16} className="text-outline shrink-0" />
                <div>
                  <div className="font-semibold">Print Page / PDF</div>
                  <div className="text-xs text-on-surface-variant">Standard report format</div>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Notifications with popover */}
        <div className="relative" ref={notificationsRef}>
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell size={18} className="shrink-0" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-xl bg-surface-container-lowest shadow-2xl border border-surface-container-high p-3 z-50">
              <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-label-lg font-bold text-on-surface">Notifications</span>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-error text-on-error font-mono text-label-sm font-bold">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={() => setUnreadCount(0)}
                    className="text-xs text-secondary font-semibold hover:underline cursor-pointer"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-2 py-2 max-h-80 overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(item.path);
                      setIsNotificationsOpen(false);
                      setUnreadCount((prev) => Math.max(0, prev - 1));
                    }}
                    className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors flex items-start gap-2.5 text-left"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-label-md text-label-md font-bold text-on-surface truncate">{item.title}</span>
                        <span className="text-xs text-outline font-mono shrink-0">{item.time}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-surface-container text-center">
                <button
                  onClick={() => {
                    navigate('/app/command-center');
                    setIsNotificationsOpen(false);
                  }}
                  className="text-xs text-secondary font-semibold hover:underline cursor-pointer"
                >
                  View all alerts in Command Center →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Avatar with popover */}
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-secondary/50 transition-all"
          >
            <User size={18} className="text-on-primary shrink-0" />
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-surface-container-lowest shadow-2xl border border-surface-container-high p-2 z-50">
              <div className="p-2.5 rounded-lg bg-surface-container-low mb-2">
                <div className="font-label-md text-label-md font-bold text-on-surface">Alex Rivera</div>
                <div className="text-xs text-on-surface-variant font-mono truncate">alex.rivera@fellaride.io</div>
                <div className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Community Lead
                </div>
              </div>
              <button
                onClick={() => {
                  navigate('/onboarding/profile');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
              >
                <User size={16} className="text-outline shrink-0" />
                <span>Profile & Identity</span>
              </button>
              <button
                onClick={() => {
                  navigate('/app/community');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
              >
                <MapPin size={16} className="text-secondary shrink-0" />
                <span>Community Workspace</span>
              </button>
              <button
                onClick={() => {
                  navigate('/app/command-center');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
              >
                <Radar size={16} className="text-secondary shrink-0" />
                <span>Command Center</span>
              </button>
              <div className="h-px bg-surface-container my-1" />
              <button
                onClick={() => {
                  navigate('/login');
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-error hover:bg-error-container/30 font-label-md text-label-md transition-colors cursor-pointer"
              >
                <LogOut size={16} className="shrink-0" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Export Toast Notification */}
      {exportToast && (
        <div className="fixed top-20 right-8 z-50 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-sm shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Check size={16} className="text-secondary-fixed" />
          <span>{exportToast}</span>
        </div>
      )}
    </header>
  );
}
