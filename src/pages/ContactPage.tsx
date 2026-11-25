import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Briefcase } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { PROFILE } from '../data/profile';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('AI Engineering Internship / Full-Time Role');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[AI Portfolio Inquiry] ${topic} — from ${name || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Type: ${topic}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF7EC] pb-16 pt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="studio-card rounded-2xl p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#245B45]/25 bg-[#EBF4EE] px-3 py-1 text-xs font-semibold text-[#245B45]">
            <Briefcase className="h-3.5 w-3.5" />
            {PROFILE.jobStatus}
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
            Let&apos;s Connect for AI Roles &amp; Collaborations
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
            {PROFILE.availabilityNote}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <div className="space-y-4 md:col-span-5">
            <div className="studio-card rounded-2xl p-6">
              <h2 className="font-display text-lg font-bold text-[#352219]">
                Direct Contact Information
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="h-4 w-4 shrink-0 text-[#C94F16]" />
                    <span className="truncate font-mono text-xs font-semibold text-[#352219]">
                      {PROFILE.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="shrink-0 rounded-lg border border-[#DEC9B4] bg-white px-2 py-1 font-mono text-[10px] font-semibold text-[#352219] cursor-pointer hover:border-[#C94F16]"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-[#245B45]" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#C94F16]" />
                  <span className="font-mono text-xs font-semibold text-[#352219]">{PROFILE.phone}</span>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                  <MapPin className="h-4 w-4 shrink-0 text-[#C94F16]" />
                  <span className="text-xs font-medium text-[#352219]">{PROFILE.location}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-btn rounded-xl bg-[#352219] px-4 py-2 text-xs text-white hover:bg-[#C94F16]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-btn rounded-xl bg-[#C94F16] px-4 py-2 text-xs text-white hover:bg-[#A83D10]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="studio-card rounded-2xl p-6 md:col-span-7">
            <h2 className="font-display text-lg font-bold text-[#352219]">
              Send an Interview / Project Inquiry
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-xs font-semibold uppercase text-[#6C5B50]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Hiring Manager / Recruiter"
                  className="mt-1.5 w-full rounded-xl border border-[#DEC9B4] bg-[#FFF7EC] px-3.5 py-2 text-sm text-[#352219] focus:border-[#C94F16] focus:bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-semibold uppercase text-[#6C5B50]">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="recruiter@company.com"
                  className="mt-1.5 w-full rounded-xl border border-[#DEC9B4] bg-[#FFF7EC] px-3.5 py-2 text-sm text-[#352219] focus:border-[#C94F16] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-xs font-semibold uppercase text-[#6C5B50]">
                Inquiry Type
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#DEC9B4] bg-[#FFF7EC] px-3.5 py-2 text-sm font-medium text-[#352219] focus:border-[#C94F16] focus:bg-white focus:outline-none"
              >
                <option>AI Engineering Internship / Full-Time Role</option>
                <option>Agentic AI / LLM Workflow Role</option>
                <option>Computer Vision / Applied ML Role</option>
                <option>3D WebGL / Digital Twin Engineering</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-xs font-semibold uppercase text-[#6C5B50]">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share role details, interview availability, or AI project scope..."
                className="mt-1.5 w-full rounded-xl border border-[#DEC9B4] bg-[#FFF7EC] px-3.5 py-2 text-sm text-[#352219] focus:border-[#C94F16] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="studio-btn rounded-xl bg-[#C94F16] px-5 py-2.5 text-sm text-white hover:bg-[#A83D10]"
              >
                <Send className="h-4 w-4" />
                Send Email
              </button>

              {submitted && (
                <span className="font-mono text-xs font-semibold text-[#245B45]">
                  Email client opened — or copy {PROFILE.email} directly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
