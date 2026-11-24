import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PROFILE } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[#E5E0D5] bg-[#F2EFE8] text-[#102A56]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-bold text-[#102A56]">{PROFILE.name}</div>
          <p className="mt-2 text-sm leading-relaxed text-[#525D70]">
            {PROFILE.academicStatus} · Lovely Professional University. Actively seeking AI
            Engineering, Agentic Systems, Computer Vision, and Full-Stack LLM roles.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#0D6E4E]/25 bg-[#E8F5EF] px-3 py-1 text-xs font-semibold text-[#0D6E4E]">
            <span className="h-2 w-2 rounded-full bg-[#0D6E4E]" />
            Available for Interviews
          </div>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1746A2]">
            Portfolio Sections
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5 text-sm font-medium text-[#102A56]">
            <Link to="/" className="hover:text-[#1746A2]">Overview &amp; 3D Studio</Link>
            <Link to="/projects" className="hover:text-[#1746A2]">All AI Projects (40)</Link>
            <Link to="/experience" className="hover:text-[#1746A2]">Experience</Link>
            <Link to="/about" className="hover:text-[#1746A2]">About Me</Link>
            <Link to="/resume" className="hover:text-[#1746A2]">Resume &amp; Role Fit</Link>
            <Link to="/contact" className="hover:text-[#1746A2]">Contact</Link>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1746A2]">
            Connect &amp; Verify
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-btn rounded-lg border border-[#D2CBB9] bg-white px-3 py-1.5 text-xs text-[#102A56] hover:border-[#1746A2]"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-btn rounded-lg border border-[#D2CBB9] bg-white px-3 py-1.5 text-xs text-[#102A56] hover:border-[#1746A2]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="studio-btn rounded-lg bg-[#1746A2] px-3 py-1.5 text-xs text-white hover:bg-[#103580]"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-[#525D70]">
            {PROFILE.previousPortfolios.map((p) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-[#1746A2]"
              >
                {p.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E0D5] bg-[#FAF8F4] px-4 py-3.5 text-center font-mono text-xs text-[#525D70]">
        © {CURRENT_YEAR} {PROFILE.name} · AI Systems Engineering Portfolio
      </div>
    </footer>
  );
}
