import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PROFILE } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t-2 border-[#352219] bg-[#F9EBDC] text-[#352219]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-extrabold text-[#352219]">
            {PROFILE.name}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#6C5B50]">
            {PROFILE.academicStatus} · Lovely Professional University. Focused 100% on Agentic AI,
            Computer Vision, LLM Workflows, and 3D WebGL Digital Twins.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#A83D10]">
            Quest Worlds &amp; Sections
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-semibold">
            <Link to="/" className="hover:text-[#C94F16]">3D Overworld</Link>
            <Link to="/projects" className="hover:text-[#C94F16]">All AI Projects</Link>
            <Link to="/experience" className="hover:text-[#C94F16]">Experience</Link>
            <Link to="/about" className="hover:text-[#C94F16]">Who Am I</Link>
            <Link to="/lab" className="hover:text-[#C94F16]">AI Arcade</Link>
            <Link to="/contact" className="hover:text-[#C94F16]">Contact</Link>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#A83D10]">
            Verified Links
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="game-btn rounded-xl bg-white px-3 py-1.5 text-xs text-[#352219]"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="game-btn rounded-xl bg-white px-3 py-1.5 text-xs text-[#352219]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="game-btn rounded-xl bg-[#B5430F] px-3 py-1.5 text-xs text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#6C5B50]">
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

      <div className="border-t border-[#EADBCB] bg-[#FFF7EC] px-4 py-3 text-center font-mono text-xs text-[#6C5B50]">
        © {CURRENT_YEAR} A. Praneeth Karthikeya Sharma · Orange &amp; Milk 3D AI Portfolio
      </div>
    </footer>
  );
}
