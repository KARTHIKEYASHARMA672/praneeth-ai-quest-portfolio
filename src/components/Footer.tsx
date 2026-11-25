import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PROFILE } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[#EADBCB] bg-[#F9EBDC] text-[#352219]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold text-[#352219]">{PROFILE.name}</div>
          <p className="mt-2 text-sm leading-relaxed text-[#6C5B50]">
            {PROFILE.academicStatus} · Lovely Professional University. Actively seeking AI
            Engineering, Agentic Systems, Computer Vision, and Full-Stack LLM roles.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#245B45]/25 bg-[#EBF4EE] px-3 py-1 text-xs font-semibold text-[#245B45]">
            <span className="h-2 w-2 rounded-full bg-[#245B45]" />
            Available for Interviews
          </div>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C94F16]">
            Portfolio Sections
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5 text-sm font-medium text-[#352219]">
            <Link to="/" className="hover:text-[#C94F16]">Overview &amp; 3D Studio</Link>
            <Link to="/projects" className="hover:text-[#C94F16]">All AI Projects (40)</Link>
            <Link to="/experience" className="hover:text-[#C94F16]">Experience</Link>
            <Link to="/about" className="hover:text-[#C94F16]">About Me</Link>
            <Link to="/resume" className="hover:text-[#C94F16]">Resume &amp; Role Fit</Link>
            <Link to="/contact" className="hover:text-[#C94F16]">Contact</Link>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C94F16]">
            Connect &amp; Verify
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-btn rounded-lg border border-[#DEC9B4] bg-white px-3 py-1.5 text-xs text-[#352219] hover:border-[#C94F16]"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-btn rounded-lg border border-[#DEC9B4] bg-white px-3 py-1.5 text-xs text-[#352219] hover:border-[#C94F16]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="studio-btn rounded-lg bg-[#C94F16] px-3 py-1.5 text-xs text-white hover:bg-[#A83D10]"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#6C5B50]">
            {PROFILE.previousPortfolios.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-[#C94F16]"
              >
                {p.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#EADBCB] bg-[#FFF7EC] px-4 py-3.5 text-center font-mono text-xs text-[#6C5B50]">
        © {CURRENT_YEAR} {PROFILE.name} · AI Systems Engineering Portfolio
      </div>
    </footer>
  );
}
