import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../store/AppContext';
import { BUTTERFLY_STAGES } from '../../store/mockData';
import {
  Sparkles,
  Network,
  BadgeCheck,
  Repeat,
  Banknote,
  History,
  Star,
  MousePointerClick,
  Activity,
  Share2,
  Leaf,
  GitFork,
  Radar
} from 'lucide-react';

interface TooltipData {
  name: string;
  role: string;
  invited: string;
  rides: string;
  score: string;
  corridor: string;
  x: number;
  y: number;
}

export default function ButterflyEffect() {
  const { growthStage, replayGrowth } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  const graphContainerRef = useRef<HTMLDivElement>(null);

  const currentStage = Math.max(0, Math.min(4, growthStage ?? 4));
  const currentWave = BUTTERFLY_STAGES[currentStage] || BUTTERFLY_STAGES[4];

  // Replay sequence timer
  useEffect(() => {
    if (!isPlaying) return;
    if (currentStage >= 4) {
      setIsPlaying(false);
      return;
    }
    const timer = setTimeout(() => {
      replayGrowth(Math.min(4, currentStage + 1));
    }, 850);
    return () => clearTimeout(timer);
  }, [isPlaying, currentStage, replayGrowth]);

  const handleReplayClick = () => {
    replayGrowth(0);
    setIsPlaying(true);
  };

  const handleSelectWave = (wave: number) => {
    setIsPlaying(false);
    replayGrowth(wave);
  };

  const handleNodeEnter = (
    node: {
      name: string;
      role: string;
      invited: string;
      rides: string;
      score: string;
      corridor: string;
    },
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!graphContainerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cRect = graphContainerRef.current.getBoundingClientRect();
    const x = rect.left - cRect.left + rect.width / 2;
    const y = rect.top - cRect.top - 12;
    setTooltip({
      ...node,
      x: Math.min(Math.max(x - 100, 10), cRect.width - 220),
      y: Math.max(y - 140, 10)
    });
  };

  const handleNodeLeave = () => {
    setTooltip(null);
  };

  const getNodeStyle = (minWave: number, left: string, top: string): React.CSSProperties => {
    const isVisible = currentStage >= minWave;
    return {
      left,
      top,
      opacity: isVisible ? 1 : 0.08,
      pointerEvents: isVisible ? 'auto' : 'none',
      transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.6)',
      transition: 'all 300ms ease'
    };
  };

  return (
    <div className="flex flex-col w-full space-y-space-lg">
      {/*  TOP HEADER & CONTROLS  */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <div className="flex items-center gap-space-xs mb-1">
            <span className="font-mono text-mono text-outline uppercase tracking-wider">GROWTH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-mono text-mono text-secondary font-semibold">NETWORK GRAPH</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Butterfly Effect</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Everything Starts Small.</p>
        </div>
        <div className="flex items-center gap-space-sm self-start md:self-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-secondary tracking-wide uppercase font-bold">Network Active</span>
          </div>
          <button
            onClick={handleReplayClick}
            className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-inverse-surface active:scale-95 transition-all shadow-sm"
          >
            <Sparkles size={16} className="text-secondary-container" />
            <span>{isPlaying ? 'Replaying...' : 'Replay Growth'}</span>
          </button>
          <Link
            to="/app/communities"
            className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all"
          >
            <Network size={16} />
            <span>View Community</span>
          </Link>
        </div>
      </div>

      {/*  HERO STATEMENT BANNER  */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Northside Pilot</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-2">Everything starts small.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Alex Morgan sent 1 invite. In 36 hours, it grew into 32 members across 14 rides with zero ad spend.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container font-semibold">
                <BadgeCheck size={14} className="text-secondary" />
                9 drivers · 18 passengers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-semibold">
                <Repeat size={14} className="text-outline" />
                14 rides · 21 referrals
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-semibold">
                <Banknote size={14} className="text-outline" />
                ₹0 Paid ads
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end justify-center min-w-[240px] p-space-md rounded-xl bg-surface-container-low shadow-inner">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline mb-1">Growth Sequence</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-hero text-display-hero text-primary tracking-tight font-bold">
                {currentWave.ratio}
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                {currentWave.members} activated
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">1 → 3 → 8 → 17 → 32</span>
            </div>
            <span className="font-mono text-mono text-outline mt-2">Northside Pilot · 4 Waves</span>
          </div>
        </div>
      </div>

      {/*  INTERACTIVE TIMELINE SCRUBBER  */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-1">
          <div className="flex items-center gap-2">
            <History size={16} className="text-secondary" />
            <span className="font-label-lg text-label-lg text-on-surface font-semibold">Growth Waves</span>
          </div>
          <span className="font-mono text-mono text-outline">{currentWave.label}</span>
        </div>
        {/*  Wave Tab Selectors  */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-space-sm p-1.5 bg-surface-container-low rounded-xl shadow-sm">
          {BUTTERFLY_STAGES.map((wave) => {
            const isActive = currentStage === wave.step;
            return (
              <button
                key={wave.step}
                onClick={() => handleSelectWave(wave.step)}
                className={`wave-tab-btn flex flex-col items-start p-space-sm rounded-lg transition-all ${
                  isActive
                    ? 'active-tab bg-surface-container-lowest text-primary shadow-sm'
                    : 'bg-transparent text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
              >
                <span className={`font-label-sm text-label-sm uppercase tracking-wider ${isActive ? 'text-secondary font-bold' : 'text-outline'}`}>
                  {wave.tabTime}
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {wave.members} {wave.members === 1 ? 'Person' : 'People'}
                </span>
                <span className={`font-body-sm text-body-sm ${isActive ? 'text-secondary font-medium' : 'text-on-surface-variant'}`}>
                  {wave.tabSubtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/*  NETWORK VISUALIZATION CANVAS (CENTERPIECE)  */}
      <div className="relative w-full rounded-xl bg-surface-container-lowest p-space-md shadow-sm overflow-hidden min-h-[580px] flex flex-col">
        {/*  Visual Toolbar & Legend  */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm z-20">
          <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-secondary-container ring-2 ring-secondary flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              </span>
              <span className="text-on-surface font-semibold">Connector</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span className="text-on-surface-variant">Driver</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-on-surface-variant">Passenger</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
              <span className="text-on-surface-variant">Member</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs font-mono text-mono text-outline">
            <Network size={14} />
            <span>Community Map</span>
          </div>
        </div>

        {/*  Interactive SVG Graph Container  */}
        <div
          ref={graphContainerRef}
          className="relative flex-1 w-full min-h-[480px] flex items-center justify-center select-none overflow-hidden"
        >
          {/*  Background Concentric Orbital Rings  */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 600">
            <defs>
              <radialGradient cx="50%" cy="50%" id="hubGlow" r="50%">
                <stop offset="0%" stopColor="#006c49" stopOpacity="0.12"></stop>
                <stop offset="100%" stopColor="#006c49" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            {/*  Orbits  */}
            <circle className="opacity-70" cx="500" cy="300" fill="none" r="80" stroke="#e5eeff" strokeDasharray="4 4" strokeWidth="1.5"></circle>
            <circle className="opacity-70" cx="500" cy="300" fill="none" r="160" stroke="#e5eeff" strokeDasharray="6 6" strokeWidth="1.5"></circle>
            <circle className="opacity-50" cx="500" cy="300" fill="none" r="230" stroke="#e5eeff" strokeDasharray="8 8" strokeWidth="1.5"></circle>
            <circle className="opacity-40" cx="500" cy="300" fill="none" r="275" stroke="#e5eeff" strokeDasharray="10 10" strokeWidth="1"></circle>
            <circle cx="500" cy="300" fill="url(#hubGlow)" r="290"></circle>

            {/*  Links Wave 0->1  */}
            <g className="transition-opacity duration-500" style={{ opacity: currentStage >= 1 ? 1 : 0.05 }}>
              <path d="M 500 300 Q 420 220 370 200" fill="none" stroke="#006c49" strokeOpacity="0.45" strokeWidth="2"></path>
              <path d="M 500 300 Q 590 210 630 190" fill="none" stroke="#006c49" strokeOpacity="0.45" strokeWidth="2"></path>
              <path d="M 500 300 Q 500 410 500 440" fill="none" stroke="#006c49" strokeOpacity="0.45" strokeWidth="2"></path>
            </g>

            {/*  Links Wave 1->2  */}
            <g className="transition-opacity duration-500" style={{ opacity: currentStage >= 2 ? 1 : 0.05 }}>
              <path d="M 370 200 Q 280 180 230 170" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 370 200 Q 320 280 270 310" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 630 190 Q 720 180 770 170" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 630 190 Q 670 270 720 300" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 500 440 Q 400 480 360 500" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 500 440 Q 600 490 640 500" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 630 190 Q 530 120 480 110" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
              <path d="M 370 200 Q 450 130 480 110" fill="none" stroke="#dce9ff" strokeWidth="1.5"></path>
            </g>

            {/*  Links Wave 2->3 & Cross-Corridor Mesh  */}
            <g className="transition-opacity duration-500" style={{ opacity: currentStage >= 3 ? 1 : 0.05 }}>
              <path d="M 230 170 L 140 140" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 230 170 L 160 220" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 270 310 L 180 340" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 270 310 L 230 400" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 770 170 L 860 140" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 770 170 L 840 220" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 720 300 L 810 340" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 720 300 L 760 410" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 360 500 L 290 530" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
              <path d="M 640 500 L 710 535" fill="none" stroke="#e5eeff" strokeWidth="1"></path>
            </g>

            {/*  Mesh Loops Wave 4  */}
            <g className="transition-opacity duration-500" style={{ opacity: currentStage >= 4 ? 1 : 0.05 }}>
              <path d="M 140 140 Q 300 70 480 110" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1"></path>
              <path d="M 860 140 Q 670 70 480 110" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1"></path>
              <path d="M 230 400 Q 500 560 760 410" fill="none" stroke="#6cf8bb" strokeDasharray="3 3" strokeOpacity="0.6" strokeWidth="1"></path>
            </g>
          </svg>

          {/*  Center Anchor Node (Alex Morgan) Wave 0  */}
          <div
            className="graph-node absolute z-30 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Alex Morgan',
                  role: 'Connector Anchor',
                  invited: 'Platform Genesis',
                  rides: '14 Facilitated',
                  score: '96/100',
                  corridor: 'Northside Hub ↔ Tech Arc'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="relative">
              <span className="absolute -inset-2 rounded-full bg-secondary/20 animate-ping"></span>
              <span className="absolute -inset-1 rounded-full bg-secondary-container"></span>
              <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg text-on-primary font-headline-sm text-headline-sm font-bold">
                AM
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[10px]">
                <Star size={12} className="fill-current" />
              </span>
            </div>
            <div className="mt-2 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-sm flex items-center gap-1 whitespace-nowrap">
              <span className="font-bold text-secondary-container">Alex Morgan</span>
              <span className="text-on-primary-container text-[10px]">#01</span>
            </div>
            <span className="text-[10px] font-mono text-secondary font-bold tracking-tight">CONNECTOR • SCORE 96</span>
          </div>

          {/*  WAVE 1 NODES (T+4h)  */}
          {/*  Sam Carter  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(1, '37%', '33.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Sam Carter',
                  role: 'Active Driver',
                  invited: 'Alex Morgan',
                  rides: '6 Completed',
                  score: '88/100',
                  corridor: 'Northside ↔ Downtown Loop'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-label-md font-bold shadow-md">
              SC
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm whitespace-nowrap flex items-center gap-1">
              <span className="font-semibold">Sam Carter</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
            <span className="text-[10px] font-mono text-outline">DRIVER</span>
          </div>

          {/*  Priya Shah  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(1, '63%', '31.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Priya Shah',
                  role: 'Driver & Passenger',
                  invited: 'Alex Morgan',
                  rides: '5 Completed',
                  score: '92/100',
                  corridor: 'Northside ↔ Tech Square'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shadow-md">
              PS
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm whitespace-nowrap flex items-center gap-1">
              <span className="font-semibold">Priya Shah</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
            <span className="text-[10px] font-mono text-outline">DRIVER/PASSENGER</span>
          </div>

          {/*  Marcus Vance  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(1, '50%', '73.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Marcus Vance',
                  role: 'Community Steward',
                  invited: 'Alex Morgan',
                  rides: '3 Completed',
                  score: '85/100',
                  corridor: 'South Campus ↔ Northside'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md font-bold shadow-md">
              MV
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm whitespace-nowrap">
              <span className="font-semibold">Marcus V.</span>
            </div>
            <span className="text-[10px] font-mono text-outline">COORDINATOR</span>
          </div>

          {/*  WAVE 2 NODES (T+11h)  */}
          {/*  Kiran Patel  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '23%', '28.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Kiran Patel',
                  role: 'Passenger',
                  invited: 'Sam Carter',
                  rides: '4 Completed',
                  score: '81/100',
                  corridor: 'East Sector ↔ Tech Arc'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              KP
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Kiran</span>
          </div>

          {/*  Meera Thomas  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '27%', '51.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Meera Thomas',
                  role: 'Passenger',
                  invited: 'Sam Carter',
                  rides: '3 Completed',
                  score: '84/100',
                  corridor: 'Northside ↔ Financial Dis.'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              MT
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Meera</span>
          </div>

          {/*  Jordan Lee  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '77%', '28.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Jordan Lee',
                  role: 'Driver',
                  invited: 'Priya Shah',
                  rides: '4 Completed',
                  score: '89/100',
                  corridor: 'West Hills ↔ Northside'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              JL
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Jordan</span>
          </div>

          {/*  Elena Rostova  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '72%', '50%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Elena Rostova',
                  role: 'Passenger',
                  invited: 'Priya Shah',
                  rides: '2 Completed',
                  score: '79/100',
                  corridor: 'Northside ↔ Univ Gate'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              ER
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Elena</span>
          </div>

          {/*  David K.  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '48%', '18.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'David K.',
                  role: 'Driver',
                  invited: 'Priya Shah',
                  rides: '3 Completed',
                  score: '86/100',
                  corridor: 'Northside Outer Ring'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              DK
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">David</span>
          </div>

          {/*  Chloe Chen  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '36%', '83.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Chloe Chen',
                  role: 'Passenger',
                  invited: 'Marcus Vance',
                  rides: '2 Completed',
                  score: '75/100',
                  corridor: 'South Campus ↔ Downtown'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              CC
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Chloe</span>
          </div>

          {/*  Rahul Mehta  */}
          <div
            className="graph-node absolute z-20 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(2, '64%', '83.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Rahul Mehta',
                  role: 'Passenger',
                  invited: 'Marcus Vance',
                  rides: '1 Completed',
                  score: '78/100',
                  corridor: 'Northside ↔ Medical Zone'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
              RM
            </div>
            <span className="mt-0.5 px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-[10px] shadow-sm">Rahul</span>
          </div>

          {/*  WAVE 3 & 4 SATELLITE PEER NODES (Expanded Mesh)  */}
          {/*  Peripheral Cluster 1  */}
          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '14%', '23.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Aanya Verma',
                  role: 'Passenger',
                  invited: 'Kiran Patel',
                  rides: '2 Completed',
                  score: '80/100',
                  corridor: 'East Sector Feed'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
              AV
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '16%', '36.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Tomas Benitez',
                  role: 'Driver',
                  invited: 'Kiran Patel',
                  rides: '3 Completed',
                  score: '87/100',
                  corridor: 'East Ring Spur'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">
              TB
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '18%', '56.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Nadia Ali',
                  role: 'Passenger',
                  invited: 'Meera Thomas',
                  rides: '1 Completed',
                  score: '72/100',
                  corridor: 'Subway Connector'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
              NA
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '23%', '66.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Gabe Ortiz',
                  role: 'Driver',
                  invited: 'Meera Thomas',
                  rides: '2 Completed',
                  score: '83/100',
                  corridor: 'Express Connector'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">
              GO
            </div>
          </div>

          {/*  Peripheral Cluster 2  */}
          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '86%', '23.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Zoe Miller',
                  role: 'Driver',
                  invited: 'Jordan Lee',
                  rides: '4 Completed',
                  score: '90/100',
                  corridor: 'West Hills Spur'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">
              ZM
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '84%', '36.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Anand Joshi',
                  role: 'Passenger',
                  invited: 'Jordan Lee',
                  rides: '2 Completed',
                  score: '80/100',
                  corridor: 'Suburban Line'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
              AJ
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '81%', '56.6%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Clara Wu',
                  role: 'Passenger',
                  invited: 'Elena Rostova',
                  rides: '3 Completed',
                  score: '82/100',
                  corridor: 'East University'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
              CW
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '76%', '68.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Leo Fernandez',
                  role: 'Driver',
                  invited: 'Elena Rostova',
                  rides: '3 Completed',
                  score: '85/100',
                  corridor: 'South Campus Link'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-sm text-[10px] font-bold">
              LF
            </div>
          </div>

          {/*  Outer Mesh Fillers  */}
          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '29%', '88.3%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Sora Hayashi',
                  role: 'Passenger',
                  invited: 'Chloe Chen',
                  rides: '1 Completed',
                  score: '74/100',
                  corridor: 'South End Ring'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
              SH
            </div>
          </div>

          <div
            className="graph-node absolute z-10 flex flex-col items-center cursor-pointer hover:scale-110"
            style={getNodeStyle(3, '71%', '89.1%')}
            onMouseEnter={(e) =>
              handleNodeEnter(
                {
                  name: 'Ben Taylor',
                  role: 'Passenger',
                  invited: 'Rahul Mehta',
                  rides: '2 Completed',
                  score: '76/100',
                  corridor: 'Industrial Ring'
                },
                e
              )
            }
            onMouseLeave={handleNodeLeave}
          >
            <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
              BT
            </div>
          </div>

          {/*  Node Tooltip Card (Dynamic)  */}
          {tooltip && (
            <div
              className="absolute z-50 pointer-events-none transition-opacity duration-200 bg-primary text-on-primary p-3 rounded-lg shadow-xl min-w-[210px] flex flex-col gap-1 text-xs"
              style={{
                left: `${tooltip.x}px`,
                top: `${tooltip.y}px`,
                opacity: 1
              }}
            >
              <div className="flex items-center justify-between pb-1 border-b border-primary-container">
                <span className="font-bold text-sm text-secondary-container">{tooltip.name}</span>
                <span className="font-mono text-[10px] text-on-primary-container">Score: {tooltip.score}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-on-primary-container">Role:</span>
                <span className="font-semibold text-on-primary">{tooltip.role}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-on-primary-container">Invited By:</span>
                <span className="text-on-primary">{tooltip.invited}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-on-primary-container">Activity:</span>
                <span className="text-secondary-container font-semibold">{tooltip.rides}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-primary-container">
                <span className="text-on-primary-container">Corridor:</span>
                <span className="truncate max-w-[120px] text-on-primary">{tooltip.corridor}</span>
              </div>
            </div>
          )}
        </div>

        {/*  Live Footnote Indicator  */}
        <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
          <div className="flex items-center gap-2">
            <MousePointerClick size={14} className="text-secondary" />
            <span>Hover any member to view invite path and rides.</span>
          </div>
          <div className="font-mono text-mono text-outline">Verified connections</div>
        </div>
      </div>

      {/*  SUPPORTING PANELS: 2-COLUMN BALANCED GRID  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/*  LEFT COLUMN (7 COLUMNS): STRATEGIC INTERVENTION & BEFORE/AFTER  */}
        <div className="lg:col-span-7 flex flex-col space-y-space-lg">
          {/*  1. THE SMALLEST INTERVENTION  */}
          <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Strategy</span>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  High Impact
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">The Smallest Intervention</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                We didn't blast ads. We found 1 key community connector.
              </p>
              {/*  Connector Profile Cardlet  */}
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shrink-0">
                    AM
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface">Alex Morgan</span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                        Connector
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Northside Community · Reach: 24</span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md font-mono text-mono self-stretch sm:self-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="text-outline text-[10px] uppercase">Score</span>
                    <span className="font-bold text-primary text-sm">96/100</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-outline text-[10px] uppercase">Invites</span>
                    <span className="font-bold text-secondary text-sm">1 Sent</span>
                  </div>
                </div>
              </div>
              {/*  Comparative Callout  */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="p-space-sm rounded-lg bg-error-container/40 flex flex-col justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-semibold">Paid Ads</span>
                  <span className="font-headline-sm text-headline-sm text-error font-bold mt-1">₹4,800 Spend</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">High churn, cold leads, 92% drop-off.</p>
                </div>
                <div className="p-space-sm rounded-lg bg-secondary-container/40 flex flex-col justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-container font-semibold">
                    Community Connector
                  </span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold mt-1">1 Direct Invite</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Zero ad spend, trusted neighbors, instant rides.</p>
                </div>
              </div>
            </div>
          </div>

          {/*  2. BEFORE VS AFTER TRANSFORMATION  */}
          <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Comparison</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Network Growth</h3>
              </div>
              <span className="font-mono text-mono text-secondary font-bold px-2 py-1 bg-secondary/10 rounded">+355% Health</span>
            </div>
            {/*  Before & After Comparison Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-md">
              {/*  BEFORE  */}
              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">Before (0h)</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-label-sm">Cold</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Active Riders:</span>
                      <span className="font-mono font-semibold text-on-surface">0</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Completed Rides:</span>
                      <span className="font-mono font-semibold text-on-surface">0</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Supply / Demand:</span>
                      <span className="font-mono text-error font-semibold">Unmatched</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-outline-variant/30">
                  <span className="text-[11px] font-mono text-outline uppercase">Health</span>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-outline font-bold">18 / 100</span>
                    <span className="font-label-sm text-label-sm text-error font-medium">Inactive</span>
                  </div>
                </div>
              </div>

              {/*  AFTER  */}
              <div className="p-space-md rounded-xl bg-secondary-container/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">After (36h)</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Activated Members:</span>
                      <span className="font-mono font-bold text-secondary">32 Connected</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Active Drivers:</span>
                      <span className="font-mono font-semibold text-on-surface">9 Drivers</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm">
                      <span className="text-on-surface-variant">Shared Rides:</span>
                      <span className="font-mono text-secondary font-bold">14 Rides</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-outline-variant/30">
                  <span className="text-[11px] font-mono text-outline uppercase">Health</span>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">82 / 100</span>
                    <span className="font-label-sm text-label-sm text-secondary font-medium">Healthy & Growing</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  Health Meter Transition Bar  */}
            <div className="p-space-md rounded-xl bg-surface-container-low">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">Self-Sustaining Threshold</span>
                <span className="font-mono text-mono text-secondary font-bold">18 → 82 / 100</span>
              </div>
              <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden flex">
                <div className="h-full bg-outline-variant" style={{ width: '18%' }}></div>
                <div className="h-full bg-secondary" style={{ width: '64%' }}></div>
                <div className="h-full bg-transparent" style={{ width: '18%' }}></div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-tight">
                The community reached critical mass: rides now organize spontaneously among neighbors without central promotion.
              </p>
            </div>
          </div>
        </div>

        {/*  RIGHT COLUMN (5 COLUMNS): METRICS MATRIX & GROWTH CASCADE  */}
        <div className="lg:col-span-5 flex flex-col space-y-space-lg">
          {/*  3. NETWORK IMPACT MATRIX  */}
          <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Results</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Network Output</h3>
              </div>
              <Activity size={24} className="text-secondary" />
            </div>

            {/*  Metric Grid  */}
            <div className="grid grid-cols-2 gap-space-sm mb-space-md">
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Activated</span>
                <span className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
                  {currentWave.members}
                </span>
                <span className="font-mono text-[11px] text-secondary font-semibold">
                  {currentWave.members} {currentWave.members === 1 ? 'person' : 'people'} activated
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Drivers</span>
                <span className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">
                  {currentWave.drivers}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">
                  {Math.round((currentWave.drivers / currentWave.members) * 100)}% of network
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Passengers</span>
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">
                  {currentWave.passengers}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant">
                  {Math.round((currentWave.passengers / currentWave.members) * 100)}% of network
                </span>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Rides</span>
                <span className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">
                  {currentWave.rides}
                </span>
                <span className="font-mono text-[11px] text-secondary font-semibold">100% matched</span>
              </div>
            </div>

            {/*  Secondary Mobility Metrics  */}
            <div className="space-y-2 pt-2 border-t border-surface-container">
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <Share2 size={16} className="text-secondary" />
                  <span className="text-on-surface">Referrals</span>
                </div>
                <span className="font-mono font-bold text-on-surface">{currentWave.referrals} Referrals</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <Repeat size={16} className="text-secondary" />
                  <span className="text-on-surface">Daily Commuters</span>
                </div>
                <span className="font-mono font-bold text-on-surface">{currentWave.repeatRiders} Active</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <Leaf size={16} className="text-secondary" />
                  <span className="text-on-surface">CO₂ Avoided</span>
                </div>
                <span className="font-mono font-bold text-secondary">{currentWave.co2} kg / Week</span>
              </div>
            </div>

            <div className="mt-space-md p-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm">
              <p className="leading-tight text-on-surface-variant">
                <strong className="text-on-surface">Summary:</strong> {currentWave.drivers} drivers · {currentWave.passengers} passengers · {currentWave.rides} rides · {currentWave.referrals} referrals
              </p>
            </div>
          </div>

          {/*  4. REFERRAL NETWORK CASCADE  */}
          <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
            <div className="flex items-center justify-between mb-space-md">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Sequence</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Invite Path</h3>
              </div>
              <GitFork size={20} className="text-outline" />
            </div>

            {/*  Linear Cascade Sequence  */}
            <div className="relative pl-6 space-y-space-md before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-secondary-container">
              {/*  Node 1  */}
              <div className="relative flex items-start gap-space-sm">
                <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary-container ring-4 ring-surface-container-lowest flex items-center justify-center text-on-secondary-container text-xs font-bold">
                  1
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">Alex Morgan</span>
                    <span className="px-1.5 py-0.2 rounded bg-secondary/10 text-secondary text-[10px] font-bold">CONNECTOR</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Sent 3 direct invites (0h)</p>
                </div>
              </div>
              {/*  Node 2  */}
              <div className="relative flex items-start gap-space-sm">
                <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest flex items-center justify-center text-primary text-xs font-bold">
                  2
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">Sam Carter</span>
                    <span className="px-1.5 py-0.2 rounded bg-secondary text-on-secondary text-[10px] font-bold">DRIVER</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Offered 4 seats, invited 2 colleagues (4h)</p>
                </div>
              </div>
              {/*  Node 3  */}
              <div className="relative flex items-start gap-space-sm">
                <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest flex items-center justify-center text-primary text-xs font-bold">
                  3
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">Priya Shah</span>
                    <span className="px-1.5 py-0.2 rounded bg-primary text-on-primary text-[10px] font-bold">HYBRID</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Joined evening route, invited 3 peers (11h)</p>
                </div>
              </div>
              {/*  Node 4  */}
              <div className="relative flex items-start gap-space-sm">
                <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest flex items-center justify-center text-primary text-xs font-bold">
                  4
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">Kiran & Meera</span>
                    <span className="px-1.5 py-0.2 rounded bg-surface-variant text-on-surface text-[10px] font-bold">RIDERS</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Joined commute, invited neighbors (20h)</p>
                </div>
              </div>
              {/*  Terminal  */}
              <div className="relative flex items-start gap-space-sm">
                <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary ring-4 ring-surface-container-lowest flex items-center justify-center text-on-secondary text-xs font-bold">
                  ✓
                </span>
                <div>
                  <span className="font-label-lg text-label-lg font-bold text-secondary">32 People Activated</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Network reached self-sustaining growth (36h)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  5. KEY TAKEAWAY FOOTER BANNER  */}
      <div className="relative overflow-hidden rounded-xl bg-primary text-on-primary p-space-lg shadow-md">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container font-bold block mb-1">
              Takeaway
            </span>
            <blockquote className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary mb-1">
              “The goal isn't to acquire everyone. It's to find the person who starts everyone.”
            </blockquote>
            <p className="font-body-md text-body-md text-on-primary-container">
              Turn trusted community connections into self-driving ride networks.
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <Link
              to="/app/connectors"
              className="px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-secondary/90 transition-all font-semibold shadow-sm flex items-center gap-2"
            >
              <Radar size={16} />
              <span>Find Connector</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
