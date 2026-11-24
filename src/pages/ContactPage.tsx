import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { PROFILE } from '../data/profile';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('AI Engineering Internship / Role');
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
    const subject = encodeURIComponent(`[AI Portfolio] ${topic} — from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="paper-grid-bg min-h-screen pb-16 pt-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="game-card rounded-2xl bg-white p-6 sm:p-8">
          <span className="inline-block rounded-lg border border-[#DEC9B4] bg-[#F9EBDC] px-2.5 py-1 font-mono text-xs font-semibold uppercase text-[#A83D10]">
            Direct Contact &amp; Collaboration
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
            Let&apos;s Build Intelligent Systems Together
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
            Open to AI Engineering internships, Agentic AI builder roles, Computer Vision / LLM
            collaborations, and creative 3D WebGL software projects.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          {/* Direct Channels */}
          <div className="space-y-4 md:col-span-5">
            <div className="game-card rounded-2xl bg-white p-5">
              <h2 className="font-display text-lg font-extrabold text-[#352219]">
                Direct Contact Info
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="h-4 w-4 shrink-0 text-[#C94F16]" />
                    <span className="truncate font-mono text-xs font-bold text-[#352219]">
                      {PROFILE.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 rounded-lg border border-[#352219] bg-white px-2 py-1 font-mono text-[10px] font-bold text-[#352219] cursor-pointer"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-[#245B45]" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#C94F16]" />
                  <span className="font-mono text-xs font-bold text-[#352219]">{PROFILE.phone}</span>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3">
                  <MapPin className="h-4 w-4 shrink-0 text-[#C94F16]" />
                  <span className="text-xs font-semibold text-[#352219]">{PROFILE.location}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="game-btn rounded-xl bg-[#352219] px-4 py-2 text-xs text-white"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="game-btn rounded-xl bg-[#B5430F] px-4 py-2 text-xs text-white"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Project Inquiry Form */}
          <form onSubmit={handleSubmit} className="game-card rounded-2xl bg-white p-6 md:col-span-7">
            <h2 className="font-display text-lg font-extrabold text-[#352219]">
              Send an Inquiry
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-[#6C5B50]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="mt-1.5 w-full rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3.5 py-2 text-sm text-[#352219] focus:border-[#C94F16] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold uppercase text-[#6C5B50]">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3.5 py-2 text-sm text-[#352219] focus:border-[#C94F16] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-xs font-bold uppercase text-[#6C5B50]">
                Mission Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1.5 w-full rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3.5 py-2 text-sm font-semibold text-[#352219] focus:border-[#C94F16] focus:outline-none"
              >
                <option>AI Engineering Internship / Role</option>
                <option>Agentic AI / LLM Automation Project</option>
                <option>3D WebGL / Digital Twin Collaboration</option>
                <option>Computer Vision / ML Prototype</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block font-mono text-xs font-bold uppercase text-[#6C5B50]">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the AI system, role, or idea you want to build..."
                className="mt-1.5 w-full rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3.5 py-2 text-sm text-[#352219] focus:border-[#C94F16] focus:outline-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="game-btn rounded-xl bg-[#B5430F] px-5 py-2.5 text-sm text-white"
              >
                <Send className="h-4 w-4" />
                Send Email
              </button>

              {submitted && (
                <span className="font-mono text-xs font-bold text-[#245B45]">
                  Mail client triggered! Or copy {PROFILE.email} directly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
