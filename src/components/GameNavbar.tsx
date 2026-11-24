import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  LayoutGrid,
  FolderGit2,
  Briefcase,
  UserCheck,
  FileText,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Overview', icon: LayoutGrid },
  { to: '/projects', label: 'Projects', icon: FolderGit2 },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/about', label: 'About', icon: UserCheck },
  { to: '/resume', label: 'Resume', icon: FileText },
  { to: '/contact', label: 'Contact', icon: Mail },
];

export function GameNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E0D5] bg-[#FAF8F4]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-3 text-[#102A56] no-underline group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1746A2] text-white shadow-xs transition-colors group-hover:bg-[#103580]">
            <span className="font-display text-sm font-extrabold tracking-tight">PK</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight text-[#102A56] whitespace-nowrap sm:text-base">
              A. Praneeth Karthikeya Sharma
            </div>
            <div className="font-mono text-[10px] font-medium uppercase tracking-wider text-[#525D70] whitespace-nowrap">
              AI Systems Engineer · 4th-Yr B.Tech ECE (2027)
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
                `inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1746A2] text-white'
                    : 'text-[#102A56] hover:bg-[#F2EFE8]'
                }`
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Job-Availability Status & CTA */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/contact"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-[#0D6E4E]/25 bg-[#E8F5EF] px-3 py-1 text-xs font-semibold text-[#0D6E4E] no-underline transition-colors hover:bg-[#D9EFE4] sm:inline-flex"
          >
            <span className="h-2 w-2 rounded-full bg-[#0D6E4E]" />
            <span>Open to AI Roles</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D2CBB9] bg-white text-[#102A56] lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E5E0D5] bg-[#FAF8F4] px-4 py-4 lg:hidden">
          <div className="mb-3 flex items-center justify-between rounded-lg border border-[#0D6E4E]/25 bg-[#E8F5EF] px-3 py-2 text-xs font-semibold text-[#0D6E4E]">
            <span>Open to AI Engineering Roles &amp; Internships</span>
            <span>Class of 2027</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'border-[#1746A2] bg-[#1746A2] text-white'
                      : 'border-[#E5E0D5] bg-white text-[#102A56]'
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
