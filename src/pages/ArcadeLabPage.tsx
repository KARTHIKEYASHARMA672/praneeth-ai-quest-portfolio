import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Sparkles, Play, RotateCcw, ExternalLink, ArrowRight, Trophy } from 'lucide-react';
import { AI_PROJECTS } from '../data/projects';
import { useGameState } from '../context/useGameState';
import { playCollectChime, playTone } from '../utils/sound';

const ORACLE_TRACKS = [
  {
    id: 'agentic',
    label: 'Agentic AI & Multi-Model OS',
    pitch:
      'Need an engineer who builds autonomous AI agents, MCP servers, and zero-cost failover routers?',
    slugs: ['koda', 'nexus-factory', 'ai-os', 'newschakra', 'open-code-find-skills'],
  },
  {
    id: 'spatial',
    label: '3D WebGL Digital Twins & Simulators',
    pitch:
      'Looking for interactive Three.js WebGL2 engineering combined with real-time numerical/AI modeling?',
    slugs: ['cityos', 'mirrorworld', 'archon', 'reality-engine', 'neurospace', 'craftscape'],
  },
  {
    id: 'vision',
    label: 'Computer Vision & Predictive ML',
    pitch:
      'Evaluating YOLO object detection, TensorFlow/Keras traffic prediction, and multimodal Gemini Vision?',
    slugs: [
      'pothole-ai-detector',
      'ai-smart-indian-traffic-system',
      'smart-grid-platform',
      'image-recognizer',
      'auto-edge-sim',
    ],
  },
  {
    id: 'automation',
    label: 'Full-Stack AI Workflows & Automation',
    pitch:
      'Want high-velocity AI products shipping document automation, n8n bots, and client-side code analysis?',
    slugs: [
      'blackbox',
      'artisan-ai-picasso',
      'certifyai',
      'ai-career-opportunity-report-generator',
      'milk-store-order-automation',
      'prd-forge',
    ],
  },
];

interface PromptPacket {
  id: number;
  lane: number;
  x: number;
  kind: 'prompt' | 'glitch';
  speed: number;
}

export function ArcadeLabPage() {
  const { bossHighScore, updateBossHighScore, soundEnabled } = useGameState();
  const [selectedTrackId, setSelectedTrackId] = useState(ORACLE_TRACKS[0].id);

  // Playable "Neural Router Runner" Game State
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(35);
  const [playerLane, setPlayerLane] = useState(1); // 0, 1, 2
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playerLaneRef = useRef(1);
  const scoreRef = useRef(0);

  useEffect(() => {
    playerLaneRef.current = playerLane;
  }, [playerLane]);

  useEffect(() => {
    if (!gameActive) return;

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameActive(false);
          updateBossHighScore(scoreRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [gameActive, updateBossHighScore]);

  useEffect(() => {
    if (!gameActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let packets: PromptPacket[] = [];
    let spawnTimer = 0;
    let packetSeq = 0;
    let lastTime = performance.now();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
        e.preventDefault();
        setPlayerLane((l) => Math.max(0, l - 1));
      } else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
        e.preventDefault();
        setPlayerLane((l) => Math.min(2, l + 1));
      }
    };
    window.addEventListener('keydown', onKey);

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      spawnTimer += dt;

      if (spawnTimer > 0.55) {
        spawnTimer = 0;
        packets.push({
          id: ++packetSeq,
          lane: Math.floor(Math.random() * 3),
          x: canvas.width + 20,
          kind: Math.random() < 0.28 ? 'glitch' : 'prompt',
          speed: 220 + Math.min(scoreRef.current * 4, 220),
        });
      }

      // Update positions & collisions
      const remaining: PromptPacket[] = [];
      for (const pkt of packets) {
        pkt.x -= pkt.speed * dt;
        const hitX = pkt.x >= 55 && pkt.x <= 110;
        if (hitX && pkt.lane === playerLaneRef.current) {
          if (pkt.kind === 'prompt') {
            scoreRef.current += 10;
            setScore(scoreRef.current);
            playCollectChime(soundEnabled);
          } else {
            scoreRef.current = Math.max(0, scoreRef.current - 15);
            setScore(scoreRef.current);
            playTone(180, 0.16, 'sawtooth', 0.07);
          }
          continue;
        }
        if (pkt.x > -30) {
          remaining.push(pkt);
        }
      }
      packets = remaining;

      // Draw Warm Milk + Orange Board
      ctx.fillStyle = '#FFF7EC';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const laneH = canvas.height / 3;
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = i % 2 === 0 ? '#FDF2E4' : '#FFF7EC';
        ctx.fillRect(0, i * laneH, canvas.width, laneH);
        ctx.strokeStyle = '#EADBCB';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, (i + 1) * laneH);
        ctx.lineTo(canvas.width, (i + 1) * laneH);
        ctx.stroke();

        ctx.fillStyle = '#6C5B50';
        ctx.font = 'bold 11px "JetBrains Mono", monospace';
        ctx.fillText(`LANE 0${i + 1}`, 14, i * laneH + 22);
      }

      // Draw Player Router Shield
      const py = playerLaneRef.current * laneH + laneH / 2;
      ctx.fillStyle = '#C94F16';
      ctx.strokeStyle = '#352219';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(62, py - 22, 42, 44, 10);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFF7EC';
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.fillText('AI', 76, py + 4);

      // Draw Packets
      for (const pkt of packets) {
        const y = pkt.lane * laneH + laneH / 2;
        if (pkt.kind === 'prompt') {
          ctx.fillStyle = '#E6A23C';
          ctx.strokeStyle = '#352219';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(pkt.x, y, 15, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#352219';
          ctx.font = 'bold 11px "JetBrains Mono", monospace';
          ctx.fillText('★', pkt.x - 5, y + 4);
        } else {
          ctx.fillStyle = '#352219';
          ctx.strokeStyle = '#C94F16';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.roundRect(pkt.x - 14, y - 14, 28, 28, 6);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#FFF7EC';
          ctx.font = 'bold 10px "JetBrains Mono", monospace';
          ctx.fillText('429', pkt.x - 10, y + 4);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onKey);
    };
  }, [gameActive, soundEnabled]);

  const startGame = () => {
    scoreRef.current = 0;
    setScore(0);
    setTimeLeft(35);
    setPlayerLane(1);
    setGameActive(true);
  };

  const activeTrack = ORACLE_TRACKS.find((t) => t.id === selectedTrackId) ?? ORACLE_TRACKS[0];
  const recommendedProjects = AI_PROJECTS.filter((p) => activeTrack.slugs.includes(p.slug));

  return (
    <div className="paper-grid-bg min-h-screen pb-16 pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="game-card rounded-2xl bg-white p-6 sm:p-8">
          <span className="inline-block rounded-lg border border-[#DEC9B4] bg-[#F9EBDC] px-2.5 py-1 font-mono text-xs font-semibold uppercase text-[#A83D10]">
            Interactive AI Lab &amp; Project Matcher
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-[#352219] sm:text-4xl">
            Multi-Model Failover Sim &amp; Role Matcher
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6C5B50] sm:text-base">
            Inspired by KODA&apos;s multi-model circuit-breaker failover: route valid Prompt Cores
            and dodge <code>429</code> rate-limit spikes in real time, or use the Role-Based
            Project Matcher below to generate a curated shortlist for your engineering team.
          </p>
        </div>

        {/* Interactive Simulation */}
        <section className="game-card mt-8 rounded-2xl bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Gamepad2 className="h-6 w-6 text-[#C94F16]" />
              <div>
                <h2 className="font-display text-xl font-extrabold text-[#352219]">
                  Interactive Simulation: Neural Failover Router
                </h2>
                <p className="text-xs text-[#6C5B50]">
                  Use <strong>W/S</strong>, <strong>Up/Down Arrows</strong>, or click a lane button
                  to steer.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-xl border-2 border-[#352219] bg-[#FFF7EC] px-3 py-1.5 font-mono text-xs font-bold text-[#352219]">
                SCORE: {score}
              </div>
              <div className="rounded-xl border-2 border-[#352219] bg-[#F9EBDC] px-3 py-1.5 font-mono text-xs font-bold text-[#A83D10]">
                TIME: {timeLeft}s
              </div>
              <div className="inline-flex items-center gap-1 rounded-xl border-2 border-[#352219] bg-[#E6A23C] px-3 py-1.5 font-mono text-xs font-bold text-[#352219]">
                <Trophy className="h-3.5 w-3.5" />
                BEST: {Math.max(bossHighScore, score)}
              </div>
              <button
                type="button"
                onClick={startGame}
                className="game-btn rounded-xl bg-[#B5430F] px-4 py-1.5 text-xs text-white"
              >
                {gameActive ? <RotateCcw className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                {gameActive ? 'Restart' : 'Start Run'}
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-10">
              <canvas
                ref={canvasRef}
                width={760}
                height={270}
                className="w-full rounded-2xl border-2 border-[#352219] bg-[#FFF7EC]"
              />
            </div>
            <div className="flex flex-row justify-center gap-2 md:col-span-2 md:flex-col">
              {[0, 1, 2].map((lane) => (
                <button
                  key={lane}
                  type="button"
                  onClick={() => setPlayerLane(lane)}
                  className={`game-btn flex-1 rounded-xl px-3 py-2 font-mono text-xs ${
                    playerLane === lane ? 'bg-[#C94F16] text-white' : 'bg-[#FFF7EC] text-[#352219]'
                  }`}
                >
                  Lane 0{lane + 1}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Quest Oracle Recommender */}
        <section className="game-card mt-8 rounded-2xl bg-white p-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#C94F16]" />
            <h2 className="font-display text-2xl font-extrabold text-[#352219]">
              Role-Based Project Matcher
            </h2>
          </div>
          <p className="mt-1 text-sm text-[#6C5B50]">
            Pick what you are evaluating me for and inspect the top verified GitHub builds.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {ORACLE_TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrackId(track.id)}
                className={`game-btn rounded-xl px-4 py-2 text-xs ${
                  selectedTrackId === track.id
                    ? 'bg-[#C94F16] text-white'
                    : 'bg-[#FFF7EC] text-[#352219]'
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border-2 border-[#352219] bg-[#FFF7EC] p-5">
            <p className="font-display text-base font-bold text-[#352219]">{activeTrack.pitch}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recommendedProjects.map((proj) => (
                <div key={proj.slug} className="rounded-xl border-2 border-[#EADBCB] bg-white p-4">
                  <div className="font-display text-base font-extrabold text-[#352219]">
                    {proj.title}
                  </div>
                  <p className="mt-1 text-xs text-[#6C5B50]">{proj.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#245B45] hover:underline"
                      >
                        Live <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#C94F16] hover:underline"
                    >
                      Dossier <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
