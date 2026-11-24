import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Compass,
  FolderGit2,
  ScrollText,
  UserCheck,
  Gamepad2,
  Mail,
  Volume2,
  VolumeX,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { useGameState } from '../context/useGameState';
import { WORLD_ZONES } from '../data/projects';

const NAV_ITEMS = [
  { to: '/', label: '3D World', icon: Compass },
  { to: '/projects', label: 'AI Projects', icon: FolderGit2 },
  { to: '/experience', label: 'Experience', icon: ScrollText },
  { to: '/about', label: 'About', icon: UserCheck },
  { to: '/lab', label: 'AI Lab', icon: Gamepad2 },
  { to: '/contact', label: 'Contact', icon: Mail },
];

export function GameNavbar() {
  const { collectedCores, soundEnabled, toggleSound, rankTitle } = useGameState();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DEC9B4] bg-[#FFF7EC]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-[#352219] no-underline group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C94F16] text-white shadow-sm transition-transform group-hover:-translate-y-0.5">
            <span className="font-display text-lg font-extrabold">PK</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-extrabold tracking-tight text-[#352219] sm:text-base">
              A. PRANEETH KARTHIKEYA SHARMA
            </div>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#A83D10]">
              4th-Year B.Tech ECE · AI Systems Engineer
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#C94F16] text-white shadow-sm'
                    : 'text-[#352219] hover:bg-[#F9EBDC]'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Zone Discovery Progress */}
        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-2 rounded-xl border border-[#DEC9B4] bg-white px-3 py-1.5 shadow-xs sm:flex"
            title={`Explorer Status: ${rankTitle}`}
          >
            <Sparkles className="h-4 w-4 text-[#C94F16]" />
            <div className="font-mono text-xs font-semibold text-[#352219]">
              ZONES {collectedCores.length}/{WORLD_ZONES.length}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleSound}
            aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DEC9B4] bg-white text-[#352219] shadow-xs transition-colors hover:bg-[#F9EBDC] cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4 text-[#6C5B50]" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DEC9B4] bg-[#F9EBDC] text-[#352219] lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="border-t-2 border-[#352219] bg-[#FFF7EC] px-4 py-4 lg:hidden">
          <div className="mb-3 flex items-center justify-between rounded-xl border-2 border-[#352219] bg-white px-3 py-2">
            <span className="font-mono text-xs font-bold text-[#352219]">{rankTitle}</span>
            <span className="font-mono text-xs font-bold text-[#C94F16]">
              CORES {collectedCores.length}/{WORLD_ZONES.length}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-sm font-bold ${
                    isActive
                      ? 'border-[#352219] bg-[#C94F16] text-white shadow-[0_2px_0_#352219]'
                      : 'border-[#EADBCB] bg-white text-[#352219]'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
