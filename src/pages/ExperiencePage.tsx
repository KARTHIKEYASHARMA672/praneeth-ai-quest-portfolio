import { Award, Briefcase, CheckCircle2, ExternalLink, Layers } from 'lucide-react';
import { CREDENTIALS, EXPERIENCE_QUESTS, PROFILE } from '../data/profile';

export function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#FFF7EC] pb-16 pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="studio-card rounded-2xl p-6 sm:p-8">
          <span className="inline-block rounded-md border border-[#C94F16]/20 bg-[#FDEEE6] px-2.5 py-1 font-mono text-xs font-semibold uppercase text-[#C94F16]">
            Engineering Experience &amp; Track Record
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
            AI Systems, Automation &amp; Hackathons
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
            Hands-on execution across zero-cost multi-model AI operating systems, 750+ curated
            agent skills, live Vercel digital twins, and 24-hour hackathon prototypes — built
            alongside my {PROFILE.academicStatus}.
          </p>
        </div>

        <section className="mt-10 space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-[#C94F16]" />
            <h2 className="font-display text-2xl font-extrabold text-[#352219]">
              AI Engineering Timeline
            </h2>
          </div>

          <div className="space-y-5">
            {EXPERIENCE_QUESTS.map((quest) => (
              <article key={quest.id} className="studio-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md border border-[#C94F16]/20 bg-[#FDEEE6] px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase text-[#C94F16]">
                    {quest.badge}
                  </span>
                  <span className="font-mono text-xs font-medium text-[#6C5B50]">{quest.period}</span>
                </div>

                <h3 className="mt-3 font-display text-xl font-extrabold text-[#352219] sm:text-2xl">
                  {quest.role}
                </h3>
                <p className="text-sm font-semibold text-[#A83D10]">{quest.context}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#6C5B50]">{quest.summary}</p>

                <ul className="mt-4 space-y-2">
                  {quest.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex items-start gap-2.5 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3 text-sm text-[#352219]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#245B45]" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {quest.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#EADBCB] bg-[#F9EBDC] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#352219]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-[#C94F16]" />
            <h2 className="font-display text-2xl font-extrabold text-[#352219]">
              Production AI Architectures
            </h2>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[
              {
                name: 'Zero-Cost Multi-Model Failover (KODA)',
                flow: 'Voice / Prompt → 4-Lane Router → 12 Free OpenCode Models → SQLite Circuit Breaker (<100ms) → SafetyGate (25 Tools)',
                impact: 'Eliminates single-provider rate-limit failures while enforcing $0.00 API cost.',
              },
              {
                name: 'Evidence-Grounded Citation QA (ARTISAN AI)',
                flow: '31 Verified Reports → Adversarial Verification (~90 Corrections) → Citation-Linked Retrieval → Banned-Quote Compile Firewall',
                impact: 'Guarantees zero invented quotes with primary-source provenance.',
              },
              {
                name: 'Multimodal Business Automation (Milk Store & CertifyAI)',
                flow: 'Telegram Text/Voice/Image or CSV → n8n / Node Parser → Google Sheets / Email API → Live Tracking Dashboard',
                impact: 'Replaces manual data entry with real-time synchronized cloud automation.',
              },
              {
                name: 'Real-Time Vision & Digital Twin Pipelines (YOLO + WebGL2)',
                flow: 'Camera / Spatial State → Ultralytics YOLO / Numerical Solvers → FastAPI / WebGL2 Shaders → 60 FPS Telemetry HUD',
                impact: 'Connects neural perception and physics math to interactive 3D decision studios.',
              },
            ].map((pipe) => (
              <div key={pipe.name} className="studio-card rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold text-[#352219]">{pipe.name}</h3>
                <div className="mt-2.5 rounded-xl border border-[#EADBCB] bg-[#FFF7EC] p-3 font-mono text-xs leading-relaxed text-[#352219]">
                  {pipe.flow}
                </div>
                <p className="mt-2.5 text-sm text-[#6C5B50]">{pipe.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#C94F16]" />
            <h2 className="font-display text-2xl font-extrabold text-[#352219]">
              Hackathons, Workshops &amp; Verified Credentials
            </h2>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {CREDENTIALS.map((cred) => (
              <div key={cred.title} className="studio-card flex flex-col justify-between rounded-2xl p-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md border border-[#EADBCB] bg-[#FFF7EC] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-[#C94F16]">
                      {cred.kind}
                    </span>
                    <span className="font-mono text-xs text-[#6C5B50]">{cred.date}</span>
                  </div>
                  <h3 className="mt-2.5 font-display text-lg font-bold text-[#352219]">
                    {cred.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#A83D10]">{cred.issuer}</p>
                  <p className="mt-2 text-sm text-[#6C5B50]">{cred.summary}</p>
                </div>

                {cred.link && (
                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-xs font-semibold text-[#C94F16] hover:underline"
                  >
                    Verify Credential
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
