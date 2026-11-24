export type ProjectCategory =
  | 'Agentic AI & OS'
  | '3D Spatial AI & Twins'
  | 'Computer Vision & ML'
  | 'LLM & Knowledge AI'
  | 'Developer & Workflow AI'
  | '3D WebGL Worlds';

export type ZoneId =
  | 'citadel'
  | 'foundry'
  | 'spatial'
  | 'vision'
  | 'guild'
  | 'arcade';

export interface AIProject {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  zoneId: ZoneId;
  year: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  hostingLabel: string;
  description: string;
  architectureSummary: string;
  highlights: string[];
  stack: string[];
  accentHex: string;
}

export interface WorldZone {
  id: ZoneId;
  number: string;
  name: string;
  subtitle: string;
  color: string;
  position: [number, number, number];
  landmarkType: 'citadel' | 'foundry' | 'spatial' | 'vision' | 'guild' | 'arcade';
  route: string;
  summary: string;
}

export const WORLD_ZONES: WorldZone[] = [
  {
    id: 'citadel',
    number: 'ZONE 01',
    name: 'Origin Citadel',
    subtitle: 'Who Am I · 4th Yr B.Tech ECE',
    color: '#C94F16',
    position: [0, 0, 0],
    landmarkType: 'citadel',
    route: '/about',
    summary:
      'Start here: A. Praneeth Karthikeya Sharma — 4th-Year B.Tech ECE Student (Class of 2027) building AI Systems, Agents & 3D Worlds.',
  },
  {
    id: 'foundry',
    number: 'ZONE 02',
    name: 'Agentic Foundry',
    subtitle: 'Autonomous AI OS & C-Suite Agents',
    color: '#E6A23C',
    position: [-9.5, 0, -5.5],
    landmarkType: 'foundry',
    route: '/projects?cat=Agentic+AI+%26+OS',
    summary:
      'Zero-cost multi-model AI OS (KODA), multi-agent C-suite debate simulators (Nexus Factory), and conversational workspaces.',
  },
  {
    id: 'spatial',
    number: 'ZONE 03',
    name: 'Spatial Twin Peaks',
    subtitle: '3D WebGL2 Digital Twins & Simulators',
    color: '#245B45',
    position: [9.5, 0, -5.5],
    landmarkType: 'spatial',
    route: '/projects?cat=3D+Spatial+AI+%26+Twins',
    summary:
      'Real-time Three.js WebGL2 digital twins for smart megacities (CityOS), factories (MirrorWorld), architecture (Archon), physics (Reality Engine), and neural anatomy (NeuroSpace).',
  },
  {
    id: 'vision',
    number: 'ZONE 04',
    name: 'Vision & ML Outpost',
    subtitle: 'YOLO, TensorFlow & Predictive Models',
    color: '#673B70',
    position: [-9.5, 0, 6.5],
    landmarkType: 'vision',
    route: '/projects?cat=Computer+Vision+%26+ML',
    summary:
      'YOLOv8 pothole detection, AI Indian traffic signal optimization, TFLite smart-grid load forecasting, and Gemini Pro Vision analyzers.',
  },
  {
    id: 'guild',
    number: 'ZONE 05',
    name: 'Knowledge & Workflow Guild',
    subtitle: 'LLMs, MCP, Reverse Engineering & n8n',
    color: '#A83D10',
    position: [9.5, 0, 6.5],
    landmarkType: 'guild',
    route: '/projects?cat=LLM+%26+Knowledge+AI',
    summary:
      'BLACKBOX codebase analyzer, ARTISAN AI Picasso, NewsChakra MCP desk, AITube, PRD Forge, CertifyAI, and 750+ AI Agent Skills.',
  },
  {
    id: 'arcade',
    number: 'ZONE 06',
    name: '3D Sandbox Arcade',
    subtitle: 'Playable Voxel & WebGL Experiences',
    color: '#D9822B',
    position: [0, 0, 11.5],
    landmarkType: 'arcade',
    route: '/lab',
    summary:
      'Interactive 3D worlds from GitHub (CraftScape voxel sandbox, Sandalwood Garden Estate, Echoes of Earth, Porsche 3D) plus the live AI Boss Arena mini-game.',
  },
];

export const AI_PROJECTS: AIProject[] = [
  // === AGENTIC AI & OS ===
  {
    slug: 'koda',
    title: 'KODA — Zero-Cost Jarvis Personal AI OS',
    tagline: '12-model $0 OpenCode failover router, 25 safety-gated tools & full-duplex voice',
    category: 'Agentic AI & OS',
    zoneId: 'foundry',
    year: '2026',
    featured: true,
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/koda',
    hostingLabel: 'Local Desktop AI OS (GitHub Source)',
    description:
      'A complete zero-cost Jarvis-class personal AI operating system for Windows executing 100% of LLM inference through free $0 OpenCode models. Features automatic <100ms SQLite circuit-breaker failover when a model hits quota or rate limits, full-duplex voice with <150ms barge-in, a PySide6 Dynamic Island, and a React 19 Spatial Command Deck.',
    architectureSummary:
      'Supervised opencode.EXE serve runtime paired with a FastAPI + SQLite WAL/FTS5 memory engine, 4-lane model routing, SafetyGate (AUTO/NOTIFY/CONFIRM/DENY) guarding 25 desktop/browser/filesystem tools, OpenWakeWord + faster-whisper + edge-tts voice loop, and allowlisted Telegram bridge.',
    highlights: [
      '$0.00 hard cost cap across 12 verified free models with instant circuit-breaker failover',
      '25 SafetyGate-protected automation tools (Windows UIA, Playwright Chromium, Git, Shell, Notes)',
      '40/40 pytest suite, TypeScript clean, headless Playwright HUD verified',
    ],
    stack: ['Python 3.13', 'FastAPI', 'React 19', 'TypeScript', 'PySide6', 'SQLite FTS5', 'Playwright', 'OpenWakeWord'],
    accentHex: '#C94F16',
  },
  {
    slug: 'nexus-factory',
    title: 'NEXUS FACTORY — Autonomous AI C-Suite Simulator',
    tagline: 'Multi-agent CEO, CMO, CFO & COO debate chamber with 12-month timeline branching',
    category: 'Agentic AI & OS',
    zoneId: 'foundry',
    year: '2026',
    featured: true,
    liveUrl: 'https://nexus-factory-rho.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/nexus-factory',
    hostingLabel: 'Live on Vercel',
    description:
      'Enterprise business simulation platform powered by four autonomous AI C-Suite agents (CEO, CMO, CFO, COO) running independent cognitive thought cycles. Agents debate strategy in a live Debate Chamber, vote on proposals, respond to reactive competitors, and project 12-month What-If financial timelines.',
    architectureSummary:
      'Deterministic multi-agent simulation kernel in React 19 + TypeScript modeling 4 customer cohorts, A/B marketing experiments with statistical confidence scoring, monthly P&L Income Statements (LTV/CAC, Rule of 40), and interactive Board directives.',
    highlights: [
      '4 autonomous C-Suite executive agents with live inter-agent debate & voting',
      '12-month What-If timeline branching and A/B marketing experimentation studio',
      'Verified live on Vercel with zero console errors across 8 state audits',
    ],
    stack: ['React 19', 'TypeScript', 'Vite 6', 'Tailwind CSS v4', 'Multi-Agent Engine'],
    accentHex: '#E6A23C',
  },
  {
    slug: 'ai-os',
    title: 'AI OS — Multi-Workspace Web Intelligence Suite',
    tagline: 'Unified Next.js 16 workspace with Agent Studio, Workflows Canvas & Routing Center',
    category: 'Agentic AI & OS',
    zoneId: 'foundry',
    year: '2026',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/ai-os',
    hostingLabel: 'Local Next.js App (GitHub Source)',
    description:
      'A modular web-based AI operating environment unifying an Agent Workspace, visual Workflows Canvas, Model Intelligence inspector, Routing Center, Benchmark Center, Code Studio, Research Workspace, and PDF export into a single cohesive command interface.',
    architectureSummary:
      'Built on Next.js 16 + React 19 + Tailwind v4 with jsPDF dossier export and local-first Ollama / multi-model routing abstractions.',
    highlights: [
      '14 dedicated AI workspaces including WorkflowsCanvas, BenchmarkCenter & RoutingCenter',
      'One-click deep-research PDF generation via jsPDF',
      'Modular component architecture designed for local and cloud LLM backends',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'Ollama', 'jsPDF'],
    accentHex: '#C94F16',
  },
  {
    slug: 'ownbot-gpt',
    title: 'OwnBotGPT — Conversational AI & Voice Companion',
    tagline: 'Gemini SDK function-calling chat workspace paired with Python speech-to-speech bot',
    category: 'Agentic AI & OS',
    zoneId: 'foundry',
    year: '2026',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/ownbot-gpt',
    hostingLabel: 'Local Full-Stack (GitHub Source)',
    description:
      'Dual-interface conversational AI suite combining a React 19 + TypeScript web workspace (supporting Google Generative AI SDK function calling and live news tool integration) with a companion Python SpeechRecognition voice assistant.',
    architectureSummary:
      'React frontend manages persistent multi-session history and Gemini tool calls while pythonassistant.py provides hands-free spoken interaction.',
    highlights: [
      'Gemini SDK function-calling pipeline with real-time news retrieval',
      'Companion Python SpeechRecognition speech-to-speech loop',
      'Clean TypeScript + Vite architecture with persistent local thread history',
    ],
    stack: ['React 19', 'TypeScript', 'Gemini SDK', 'Python', 'SpeechRecognition'],
    accentHex: '#A83D10',
  },

  // === 3D SPATIAL AI & TWINS ===
  {
    slug: 'cityos',
    title: 'CITYOS — 3D Digital Twin of an Indian Megacity',
    tagline: 'WebGL2 urban twin with AI City Optimizer, traffic LOS, BESS micro-grids & smog advection',
    category: '3D Spatial AI & Twins',
    zoneId: 'spatial',
    year: '2026',
    featured: true,
    liveUrl: 'https://cityos-digital-twin.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/cityos',
    hostingLabel: 'Live on Vercel',
    description:
      'Interactive 3D WebGL2 virtual digital twin simulating cross-coupled Indian smart megacity systems: multi-modal traffic (BMTC electric buses, autos, two-wheelers), 220kV/66kV solar micro-grids & 25MWh battery storage, Hardy-Cross water hydraulics, 3D PM2.5 smog advection, V2X emergency dispatch, and an autonomous AI City Planning optimizer.',
    architectureSummary:
      'Three.js WebGL2 3D city canvas paired with deterministic engineering solvers and an AI capital investment optimizer that tests 1-click policy interventions.',
    highlights: [
      '5 coupled urban subsystems including Hardy-Cross water pressure & PM2.5 plume physics',
      'Autonomous AI City Planning optimizer with 1-click simulation sandbox',
      'Playwright WebGL2 verified across 10 interactive states on Vercel',
    ],
    stack: ['React 19', 'TypeScript', 'Three.js WebGL2', 'Python FastAPI', 'AI Optimizer'],
    accentHex: '#245B45',
  },
  {
    slug: 'mirrorworld',
    title: 'MIRRORWORLD — Industrial AI Digital Twin',
    tagline: '3D WebGL2 factory & AMR warehouse twin with Theory of Constraints AI diagnostics',
    category: '3D Spatial AI & Twins',
    zoneId: 'spatial',
    year: '2026',
    featured: true,
    liveUrl: 'https://mirrorworld-amber.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/mirrorworld',
    hostingLabel: 'Live on Vercel',
    description:
      'High-craft 3D WebGL2 operational digital twin replicating a Precision Assembly Factory (SMT, 5-axis CNC, 6-axis robotic welder, optical QA) and a Smart Autonomous Warehouse (pallet racking + LiDAR AMRs). Implements Theory of Constraints Drum-Buffer-Rope bottleneck diagnostics and a What-If A/B sandbox.',
    architectureSummary:
      'Three.js 0.187 WebGL2 scene with Little’s Law flow equations, thermal/bottleneck heatmaps, 5 camera modes (God View, WASD Walkthrough, Product Cam, Entity Lock, VR Spatial), and Chaos Injection tests.',
    highlights: [
      'Goldratt Theory of Constraints root-cause diagnostics & 1-click interventions',
      'What-If A/B comparative sandbox tracking Throughput, Lead Time, WIP & OEE',
      'Vitest 8/8 passing and live WebGL2 verified on Vercel',
    ],
    stack: ['React 19', 'TypeScript', 'Three.js WebGL2', 'Tailwind v4', 'Vitest'],
    accentHex: '#245B45',
  },
  {
    slug: 'archon',
    title: 'ARCHON — AI Architecture Design Intelligence',
    tagline: 'Natural language briefs to 2D vector blueprints, 3D WebGL dollhouse & solar studies',
    category: '3D Spatial AI & Twins',
    zoneId: 'spatial',
    year: '2026',
    featured: true,
    liveUrl: 'https://archon-ai-architecture.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/archon',
    hostingLabel: 'Live on Vercel',
    description:
      'Computational architectural studio converting natural-language building briefs into generative 2D vector SVG blueprints, real-time 3D WebGL isometric dollhouse models with PBR materials, solar shadow studies (06:00–19:00), space circulation analytics, and a 7-trade parametric cost estimator.',
    architectureSummary:
      'NLP parameter extraction engine drives synchronized SVG drafting geometry and Three.js procedural rooms with solstice/equinox sun angles and Passive House cost modifiers.',
    highlights: [
      'Natural language brief parser generating downloadable 2D vector SVG blueprints',
      'Real-time 3D WebGL isometric cutaway & eye-level walkthroughs',
      'Live solar shadow study + 7-trade parametric construction cost estimation',
    ],
    stack: ['React 19', 'TypeScript', 'Three.js WebGL', 'SVG Drafting', 'Parametric AI'],
    accentHex: '#C94F16',
  },
  {
    slug: 'reality-engine',
    title: 'REALITY ENGINE — 3D WebGL2 Scientific Solver Lab',
    tagline: '6 numerical physics solvers, 18 3D apparatuses, 84 concepts & 60 FPS KaTeX telemetry',
    category: '3D Spatial AI & Twins',
    zoneId: 'spatial',
    year: '2026',
    featured: true,
    liveUrl: 'https://reality-engine-orpin.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/reality-engine',
    hostingLabel: 'Live on Vercel',
    description:
      'Pure client-side WebGL2 scientific simulation laboratory running 6 specialized numerical solvers (Symplectic Velocity-Verlet, Impulse-Momentum, RK4 Lorentz E&B, SPH Fluids, Kinetic Gas, Quantum Double-Slit) across 18 3D apparatuses with 84 derived academic concepts and live 60 FPS KaTeX variable substitution.',
    architectureSummary:
      'Custom numerical integration engines coupled to Three.js WebGL2 geometry, rolling energy-conservation graphs, 9 historical lab dossiers, and PDF/JSON lab report export.',
    highlights: [
      '6 real-time numerical solvers maintaining phase-space energy conservation ΔE/E < 0.005',
      '84 interactive academic concepts with 1-click testable 3D presets',
      'Vitest 9/9 passing, 0 TypeScript errors, 10/10 Playwright screenshots verified',
    ],
    stack: ['React 19', 'TypeScript', 'Three.js WebGL2', 'KaTeX', 'Numerical Solvers'],
    accentHex: '#673B70',
  },
  {
    slug: 'neurospace',
    title: 'NEUROSPACE — 3D Neural & Humanome Simulator',
    tagline: '376 cortical brain meshes, synaptic glow & 4 radiological imaging modes (CT / MRI / X-Ray)',
    category: '3D Spatial AI & Twins',
    zoneId: 'spatial',
    year: '2026',
    featured: true,
    liveUrl: 'https://neurospace-3d.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/neurospace',
    hostingLabel: 'Live on Vercel',
    description:
      'Interactive 3D WebGL2 Medical Atlas and Neural Architecture Simulator built on the Z-Anatomy (BodyParts3D) coordinate system. Features 376 cortical & cerebellar brain meshes with synaptic pulse shaders, 6 bodily systems, coronal cutaway cross-sections, and 4 real-time radiological rendering modes.',
    architectureSummary:
      'Three.js WebGL2 + GLTFLoader + MeshoptDecoder clinical organ isolation engine supporting X-Ray, Photoreal, Computed Tomography (CT), and Magnetic Resonance Imaging (MRI) shaders.',
    highlights: [
      '376 cortical/cerebellar meshes with real-time synaptic pulse & coronal cutaways',
      '4 radiological rendering shaders (X-Ray, Photoreal, CT, MRI)',
      'Playwright WebGL2 verified across 10 clinical states on Vercel',
    ],
    stack: ['React 19', 'TypeScript', 'Three.js WebGL2', 'MeshoptDecoder', 'GLSL'],
    accentHex: '#245B45',
  },

  // === COMPUTER VISION & ML ===
  {
    slug: 'pothole-ai-detector',
    title: 'Pothole AI Detector (CivicVision AI)',
    tagline: 'Real-time Ultralytics YOLO road hazard inference via FastAPI & interactive HUD',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2026',
    featured: true,
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/pothole-ai-detector',
    hostingLabel: 'Local FastAPI + React Stack (GitHub Source)',
    description:
      'End-to-end computer vision web application detecting road hazards and potholes in real time. A FastAPI backend serves custom-trained Ultralytics YOLO weights (best_pothole_model.pt) to a React + TypeScript dashboard featuring bounding-box overlays, latency telemetry, and an adjustable confidence threshold slider.',
    architectureSummary:
      'FastAPI multipart inference endpoint running PyTorch/Ultralytics YOLO with base64 annotated image rendering and React drag-and-drop comparison views.',
    highlights: [
      'Custom-trained Ultralytics YOLO neural network loaded at FastAPI startup',
      'Interactive original-vs-annotated toggle with real-time confidence sensitivity slider',
      'Clear hazard telemetry: pothole count, peak confidence %, and inference ms',
    ],
    stack: ['Ultralytics YOLO', 'FastAPI', 'Python', 'React', 'TypeScript', 'Tailwind CSS'],
    accentHex: '#673B70',
  },
  {
    slug: 'ai-smart-indian-traffic-system',
    title: 'AI Smart Indian Traffic System',
    tagline: 'AI vehicle detection, .h5 neural signal models & Gemini route optimization (-47% congestion)',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2025',
    featured: true,
    liveUrl: 'https://ai-smart-indian-traffic-system.vercel.app/',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/traffic-management',
    hostingLabel: 'Live on Vercel',
    description:
      'Intelligent traffic management platform combining AI-based vehicle detection, TensorFlow/Keras neural models (traffic density, accident prediction, signal optimization .h5), live weather & AQI telemetry, and Gemini AI route optimization across OpenStreetMap.',
    architectureSummary:
      'React frontend deployed on Vercel paired with TensorFlow/Keras .h5 predictive models and scikit-learn preprocessing pipelines simulating traditional vs. AI-optimized signaling.',
    highlights: [
      'Interactive simulation demonstrating up to 47% congestion reduction over fixed timers',
      'Integrates weather, Air Quality Index (AQI), and Gemini AI route guidance',
      'Backed by 3 trained Keras .h5 neural models for density, accidents & signal timing',
    ],
    stack: ['React', 'Python', 'TensorFlow/Keras', 'Gemini AI', 'Computer Vision', 'OpenStreetMap'],
    accentHex: '#C94F16',
  },
  {
    slug: 'india-urban-traffic-analysis',
    title: 'India Urban Traffic AI Analytics & Predictor',
    tagline: '10-year (2015–2025) congestion pattern analytics paired with FastAPI ML microservice',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2025',
    liveUrl: 'https://india-traffic-analysis.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/india-urban-traffic-analysis',
    hostingLabel: 'Live on Netlify (+ FastAPI ML Repo)',
    description:
      'Interactive analytics dashboard examining Indian urban traffic congestion patterns from 2015 to 2025, complemented by a standalone FastAPI ML inference service (traffic-manage) using a serialized scikit-learn/joblib predictor and live traffic monitoring interface.',
    architectureSummary:
      'TypeScript interactive data dashboard + companion FastAPI /predict endpoint evaluating day-of-week, hour, temperature, weather, and vehicle count.',
    highlights: [
      '10-year Indian urban congestion visualization & peak-hour bottleneck analysis',
      'Companion FastAPI ML microservice (KARTHIKEYASHARMA672/traffic-manage)',
      'Also includes live dashboard deployment at trafficmonitor.tiiny.site',
    ],
    stack: ['TypeScript', 'FastAPI', 'Scikit-learn', 'Joblib', 'Data Analytics'],
    accentHex: '#673B70',
  },
  {
    slug: 'smart-grid-platform',
    title: 'Smart Grid Load Forecasting & Edge TFLite Sim',
    tagline: 'Zero-backend Edge-AI vs. Cloud latency simulation powered by TFLite weights',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2026',
    liveUrl: 'https://smart-grid-platform-seven.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/smart-grid-platform',
    hostingLabel: 'Live on Vercel',
    description:
      'Interactive simulation platform modeling electrical smart-grid load forecasting using TensorFlow Lite trained weights and benchmarking Edge-AI inference latency against centralized Cloud processing.',
    architectureSummary:
      'React + TypeScript + Vite zero-backend SPA executing deterministic inference benchmarks derived from Jupyter Notebook TFLite model training.',
    highlights: [
      'Real-time Edge vs. Cloud inference latency & bandwidth comparison',
      'TFLite-trained load forecasting curves for peak grid balancing',
      'Deployed live on Vercel for instant browser simulation',
    ],
    stack: ['React', 'TypeScript', 'TensorFlow Lite', 'Jupyter Notebook', 'Vite'],
    accentHex: '#245B45',
  },
  {
    slug: 'auto-edge-sim',
    title: 'AutoEdgeSim — Autonomous Vehicle AI Latency Lab',
    tagline: 'Cloud-Fog-Edge workload offloading simulation & latency benchmarks for AVs',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2026',
    liveUrl: 'https://auto-edge-sim.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/auto-edge-sim',
    hostingLabel: 'Live on Netlify',
    description:
      'Autonomous vehicle Cloud-Fog-Edge computing simulation platform benchmarking neural inference offloading, task scheduling, and end-to-end decision latency across distributed compute tiers.',
    architectureSummary:
      'Python/Jupyter simulation models paired with an interactive web benchmark explorer visualizing millisecond latency budgets.',
    highlights: [
      'Models Cloud, Fog, and On-Vehicle Edge compute offloading trade-offs',
      'Interactive latency telemetry visualizations across traffic densities',
      'Live web benchmark hosted on Netlify with full GitHub source',
    ],
    stack: ['Python', 'Jupyter Notebook', 'Edge AI Simulation', 'Web Benchmarks'],
    accentHex: '#E6A23C',
  },
  {
    slug: 'image-recognizer',
    title: 'Image Recognizer — Gemini Pro Vision Lab',
    tagline: 'Multi-mode visual intelligence identifying objects, flora, food & scenes',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2025',
    liveUrl: 'https://image-recognizer-t.streamlit.app/',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/image-recognizer',
    hostingLabel: 'Live on Streamlit Cloud',
    description:
      'Multimodal vision web app built with Streamlit and Google Gemini Pro Vision API. Analyzes uploaded imagery to identify objects, people, animals, plants, and food, returning structured domain-specific insights across multiple expert analysis modes.',
    architectureSummary:
      'Python Streamlit frontend encoding PIL image payloads directly into structured Google Gemini Vision prompts.',
    highlights: [
      'Multiple expert analysis modes tailored to domain-specific visual inspection',
      'Structured markdown & tabular breakdown of identified entities',
      'Live hosted on Streamlit Cloud',
    ],
    stack: ['Python', 'Streamlit', 'Gemini Pro Vision', 'PIL'],
    accentHex: '#C94F16',
  },
  {
    slug: 'matrix-calculator',
    title: 'Matrix Operations Engine (ML Linear Algebra)',
    tagline: 'Interactive NumPy matrix solver for ML/AI transformations & compatibility checks',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2025',
    liveUrl: 'https://matrix-calculator-egeyaw6hfusicqwuu5uexo.streamlit.app/',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/matrix-calculator',
    hostingLabel: 'Live on Streamlit Cloud',
    description:
      'Interactive linear algebra computation tool built with Streamlit and NumPy supporting matrix addition, subtraction, multiplication, scalar operations, transposition, determinants, inverses, and dimension compatibility validation.',
    architectureSummary:
      'Vectorized NumPy operations exposed through a responsive Streamlit numerical workbench.',
    highlights: [
      'Instant dimension validation and tabular matrix output',
      'Supports full core linear algebra transforms used in ML pipelines',
      'Hosted live on Streamlit Cloud',
    ],
    stack: ['Python', 'NumPy', 'Streamlit', 'Linear Algebra'],
    accentHex: '#673B70',
  },
  {
    slug: 'calories-app',
    title: 'Calorie Vision AI Estimator',
    tagline: 'Gemini multimodal food photo analyzer calculating per-item nutritional breakdown',
    category: 'Computer Vision & ML',
    zoneId: 'vision',
    year: '2024',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/calories-app',
    hostingLabel: 'Local Streamlit App (GitHub Source)',
    description:
      'Computer-vision nutrition analyzer built with Python, Streamlit, and Google Gemini Vision. Users upload meal photos to receive automated item-by-item calorie estimation and macronutrient insights.',
    architectureSummary:
      'Streamlit uploader converts food imagery into binary MIME parts for Gemini Vision zero-shot nutritional reasoning.',
    highlights: [
      'Multimodal food item recognition from single meal photographs',
      'Per-ingredient calorie breakdown and dietary balance summary',
      'Early multimodal Gemini Vision prototype on GitHub',
    ],
    stack: ['Python', 'Streamlit', 'Gemini Vision API', 'Multimodal AI'],
    accentHex: '#245B45',
  },

  // === LLM & KNOWLEDGE AI ===
  {
    slug: 'artisan-ai-picasso',
    title: 'ARTISAN AI — Picasso (Evidence-Grounded AI)',
    tagline: 'Citation-linked Ask Pablo QA with banned-quote firewall & 307-page research archive',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2026',
    featured: true,
    liveUrl: 'https://artisan-ai-picasso.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/artisan-ai-picasso',
    hostingLabel: 'Live on Vercel',
    description:
      'Evidence-grounded interactive AI museum reconstruction where every response in Ask Pablo is strictly citation-linked to verified primary sources with zero invented quotes. Features an 11-regime chronology explorer, 11-step Bull-state SVG scrubber, searchable verified-claims archive, and type-level banned-quote firewall.',
    architectureSummary:
      'Offline-first React 19 + TypeScript + Vite 8 application backed by 40 parallel research sweeps, 5 adversarial verification audits (~90 errors blocked), and a 307-page master research dossier PDF.',
    highlights: [
      'Zero-hallucination citation-linked QA with compile-time banned-quote firewall',
      'Backed by 120,000+ words of adversarial-verified historical research',
      '89 kB gzip bundle, 0 console errors, live on Vercel',
    ],
    stack: ['React 19', 'TypeScript', 'Vite 8', 'Citation Retrieval', 'Rights Firewall'],
    accentHex: '#A83D10',
  },
  {
    slug: 'newschakra',
    title: 'NewsChakra — 360° Live AI News & MCP Desk',
    tagline: 'Zero-key live internet news wheel with Ask AI bar & native Claude/Cursor MCP server',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2026',
    featured: true,
    liveUrl: 'https://newschakra.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/newschakra',
    hostingLabel: 'Live on Vercel + MCP Server',
    description:
      'A 360° AI & World news intelligence desk requiring zero API keys and zero database — recalling fresh events from the live internet on demand. Includes a natural-language Ask bar, an interactive India State News Explorer, and a built-in Model Context Protocol (MCP) server so AI apps like Claude Desktop and Cursor can query it directly.',
    architectureSummary:
      'JavaScript full-stack intelligence desk combining live RSS/web retrieval, MCP tool endpoints (verified via npm run test:mcp), and Vercel edge hosting.',
    highlights: [
      'Native MCP server integration for Claude Desktop, Cursor & Kimaki',
      'Zero API keys, zero stored DB — live internet recall across AI, Markets, World & India',
      'Interactive India state-level news explorer & Ask bar',
    ],
    stack: ['JavaScript', 'MCP Protocol', 'Live Web Recall', 'Vercel', 'AI Search'],
    accentHex: '#C94F16',
  },
  {
    slug: 'aitube',
    title: 'AITube — 1,326-Channel Curated Video Intelligence',
    tagline: '14,140+ uploads across 13 genres tracked via InnerTube API without clickbait algorithms',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2026',
    liveUrl: 'https://ai-tube-one.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/aitube',
    hostingLabel: 'Live on Vercel',
    description:
      'Algorithm-free curated video discovery platform monitoring 1,326 verified Indian and global knowledge channels across 13 genres and indexing 14,140+ latest uploads in a single distraction-free interface.',
    architectureSummary:
      'Next.js 16 + React 19 + TypeScript + Tailwind v4 app integrating YouTube’s public InnerTube API (zero API key required) alongside a bundled snapshot for instant cold-starts.',
    highlights: [
      'Curates 1,326 hand-picked channels and 14,140+ videos across 13 genres',
      'Zero-API-key YouTube InnerTube synchronization with live on-demand refresh',
      'Live on Vercel with clean distraction-free playback',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind v4', 'InnerTube API'],
    accentHex: '#A83D10',
  },
  {
    slug: 'billease-ai-nexus',
    title: 'BillEase AI Nexus — Gemini 2.5 Financial Copilot',
    tagline: 'Context-aware Gemini 2.5 Flash assistant analyzing bills, cashflow velocity & dues',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2026',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/BillEase-AI-Nexus',
    hostingLabel: 'Local Vite + React App (GitHub Source)',
    description:
      'AI-powered personal bill and liability management workspace integrated with Google Gemini 2.5 Flash. Its Nexus AI Assistant reads live paid/unpaid ledger data to forecast financial velocity, flag upcoming dues on a visual calendar, and export smart reports.',
    architectureSummary:
      'React 18 + Vite + Recharts frontend injecting structured user ledger context into Gemini 2.5 Flash prompts for grounded financial Q&A.',
    highlights: [
      'Gemini 2.5 Flash Nexus assistant grounded on live user bill telemetry',
      'Interactive Recharts spending velocity & liability projections',
      'Visual due-date calendar, notification center & 1-click report export',
    ],
    stack: ['React 18', 'Vite', 'Gemini 2.5 Flash', 'Recharts', 'JavaScript'],
    accentHex: '#673B70',
  },
  {
    slug: 'ai-study-buddy',
    title: 'AI Study Buddy — Adaptive Learning Assistant',
    tagline: 'ML-driven study schedules, adaptive quizzes & document-grounded study modules',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://mobile-builder-brain.lovable.app/',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/mobile-builder-brain',
    hostingLabel: 'Live on Lovable',
    description:
      'Full-featured AI study companion generating personalized learning schedules, retention-optimized recommendations, document-based quizzes, and interactive progress dashboards.',
    architectureSummary:
      'React + TypeScript + Radix UI multi-page study workspace with Upload, Quiz, QuizResults, Library, and GeneratedContent views.',
    highlights: [
      'Multi-page learning suite (Dashboard, Upload, Quiz, Library, GeneratedContent)',
      'Personalized ML-inspired study retention scheduling',
      'Live deployed web app with full TypeScript GitHub repo',
    ],
    stack: ['React', 'TypeScript', 'Radix UI', 'AI/ML APIs', 'Tailwind CSS'],
    accentHex: '#E6A23C',
  },
  {
    slug: 'ai-notes-generator',
    title: 'AI Notes Generator (Offline Flan-T5 + OCR)',
    tagline: 'Zero-API-key study notes & multilingual Q&A from text or uploaded question images',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://sage-malasada-a86fa8.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/ai-notes',
    hostingLabel: 'Live Web UI (Netlify) + Python HF Engine',
    description:
      'Zero-API-key AI study solver combining HuggingFace FLAN-T5 local text generation, PyTesseract image-to-text OCR extraction, and multi-language translation alongside a hosted React web interface.',
    architectureSummary:
      'Python Streamlit backend running google/flan-t5-base + pytesseract + googletrans, paired with a hosted responsive web app.',
    highlights: [
      '100% free local HuggingFace FLAN-T5 inference — no API keys required',
      'PyTesseract OCR pipeline reads uploaded question images directly',
      'Live web interface deployed on Netlify',
    ],
    stack: ['Python', 'HuggingFace Flan-T5', 'PyTesseract OCR', 'Streamlit', 'React'],
    accentHex: '#245B45',
  },
  {
    slug: 'lucky-news-ai',
    title: 'Lucky News AI & News Hub Aggregators',
    tagline: 'Intelligent multi-source news curation & category-sorted AI feeds',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://luckynewsai.lovable.app/',
    hostingLabel: 'Live on Lovable & Vercel (attractive-news-aggregator)',
    description:
      'Dual AI news curation web platforms (Lucky News AI and News Hub) aggregating global news APIs across Tech, World, AI, and Business categories with instant search and AI-assisted feed sorting. Also hosted at attractive-news-aggregator.vercel.app.',
    architectureSummary:
      'React + REST News API aggregation frontends engineered for sub-second category filtering and clean editorial readability.',
    highlights: [
      'Live at both luckynewsai.lovable.app and attractive-news-aggregator.vercel.app',
      'Multi-category real-time feed sorting across Tech, AI, Business & World',
      'Instant client-side search and responsive card layout',
    ],
    stack: ['React', 'News API', 'AI Curation', 'JavaScript', 'REST APIs'],
    accentHex: '#C94F16',
  },
  {
    slug: 'img-analyzer',
    title: 'AI Analyzer & Video Idea Organizer',
    tagline: 'Gemini Vision multimodal media analyzer & structured creator ideation workbench',
    category: 'LLM & Knowledge AI',
    zoneId: 'guild',
    year: '2025',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/img',
    hostingLabel: 'Local Streamlit App (GitHub Source)',
    description:
      'Multimodal Gemini Streamlit studio combining automated image/text analysis with a persistent session-state Video Idea Organizer for creators and researchers.',
    architectureSummary:
      'Python Streamlit multi-pane app maintaining separate analyzer_history and video_idea_history pipelines over Google Gemini API.',
    highlights: [
      'Dual-mode workflow: Image & Text Analyzer + Video Idea Organizer',
      'Session-persisted history tracking across iterative prompts',
      'Open-source Python implementation on GitHub',
    ],
    stack: ['Python', 'Streamlit', 'Google Gemini API', 'PIL'],
    accentHex: '#A83D10',
  },

  // === DEVELOPER & WORKFLOW AI ===
  {
    slug: 'blackbox',
    title: 'BLACKBOX — Client-Side AI Reverse Engineering Lab',
    tagline: 'Ingest any codebase in-browser for Mermaid architecture, API maps & security audits',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2026',
    featured: true,
    liveUrl: 'https://blackbox-nine-psi.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/blackbox',
    hostingLabel: 'Live on Vercel (100% Client-Side)',
    description:
      'Zero-backend AI software reverse-engineering laboratory. Upload any repository folder or .zip archive and BLACKBOX extracts structural topology, generates live Mermaid architecture diagrams, detects dependency risks and leaked secrets, maps API routes, and exports a complete Markdown engineering dossier.',
    architectureSummary:
      '100% client-side React 18 + TypeScript + Vite static analysis and BYOK LLM orchestration — source code never leaves the user’s browser tab.',
    highlights: [
      'Zero backend, zero signup, zero telemetry — full client-side privacy',
      'Auto-generates live Mermaid architecture diagrams & security scan dossiers',
      'Supports folder and .zip ingestion with 1-click Markdown report export',
    ],
    stack: ['React 18', 'TypeScript', 'Vite', 'Mermaid.js', 'BYOK LLM', 'Static Analysis'],
    accentHex: '#352219',
  },
  {
    slug: 'open-code-find-skills',
    title: 'OpenCode Skills & 750+ AI Agent Skills Ecosystem',
    tagline: 'Programmatic generator of 1,000+ AI engineering skills + 4 GitHub skill repositories',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2026',
    featured: true,
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/open-code-find-skills',
    hostingLabel: 'Open-Source GitHub Ecosystem (5 Repos)',
    description:
      'Comprehensive AI agent governance and skills infrastructure on GitHub: open-code-find-skills programmatically generates 1,000+ AI-first engineering/ops skills + automation PDFs, complementing 4 curated skill repos (skills, new-skills, claude-skills, extension-skills) totaling 750+ active skills.',
    architectureSummary:
      'Python skill synthesis pipeline outputting structured SKILL.md manifests, JSON entity registries, and PDF automation catalogs for autonomous coding agents.',
    highlights: [
      '1,000+ generated skills in open-code-find-skills + 750+ active skills across 4 repos',
      'Includes custom frontend, 3D WebGL, color science, YouTube & Vercel deployment skills',
      'Powers GitHub-first on-demand agent execution with zero local token bloat',
    ],
    stack: ['Python', 'Agent Skills', 'JSON Registry', 'PDF Synthesis', 'GitHub MCP'],
    accentHex: '#C94F16',
  },
  {
    slug: 'prd-forge',
    title: 'PRD Forge — AI Product Requirements Generator',
    tagline: 'Turns raw app concepts into 9-section engineering PRDs via Gemini & Streamlit',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://prdgenerator.streamlit.app/',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/Product-Requirements-Document-PRD-Generator',
    hostingLabel: 'Live on Streamlit Cloud',
    description:
      'AI product management workbench transforming simple app ideas into structured 9-section Product Requirements Documents covering Core Features, Tech Stack, Design Preferences, Screen Maps, Navigation, User Flows, and Monetization.',
    architectureSummary:
      'Python Streamlit frontend orchestrating structured Gemini prompt templates (also extended in plan-PRD-Generator).',
    highlights: [
      'Generates complete 9-section technical PRDs from a one-sentence idea',
      'Tailors architecture and screens to selected app type & language',
      'Live public web app on Streamlit Cloud',
    ],
    stack: ['Python', 'Streamlit', 'Google Gemini API', 'Prompt Engineering'],
    accentHex: '#E6A23C',
  },
  {
    slug: 'ai-career-opportunity-report-generator',
    title: 'AI Career Opportunity Report Generator',
    tagline: 'LLM resume parser generating job-match analytics & dual PDF/DOCX roadmaps',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2026',
    liveUrl: 'https://ai-career-opportunity-report-genera.vercel.app/',
    hostingLabel: 'Live on Vercel',
    description:
      'AI career intelligence platform that parses uploaded resumes via custom LLM prompt pipelines to surface domain-specific skill gaps, eligible company matches, role suitability scores, and downloadable PDF & DOCX career improvement reports.',
    architectureSummary:
      'Next.js document-parsing pipeline combined with structured LLM evaluation and dual-format (PDF + DOCX) report synthesis.',
    highlights: [
      'Automated resume parsing with role & company eligibility matching',
      'Dual-format downloadable PDF and DOCX structured career reports',
      'Live deployed on Vercel',
    ],
    stack: ['Next.js', 'LLM Pipelines', 'Resume Parsing', 'PDF/DOCX Export'],
    accentHex: '#673B70',
  },
  {
    slug: 'certifyai',
    title: 'CertifyAI — Automated Bulk Certificate Engine',
    tagline: 'CSV/Excel-to-certificate generation with automated email dispatch & delivery tracking',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://ai-certificate-automation-app.vercel.app/upload',
    hostingLabel: 'Live on Vercel',
    description:
      'High-velocity hackathon automation platform enabling organizers to upload CSV/Excel participant sheets, batch-generate customized certificates, dispatch them automatically via email APIs, and track delivery status in real time.',
    architectureSummary:
      'React + Next.js + Node.js bulk CSV/Excel parser coupled with automated templating and transactional email delivery telemetry.',
    highlights: [
      'Instant bulk certificate generation from CSV/Excel participant rosters',
      'Automated email dispatch pipeline with live delivery status dashboard',
      'Built during hackathon sprint and live on Vercel',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'CSV Processing', 'Email API'],
    accentHex: '#245B45',
  },
  {
    slug: 'ai-ats-resume-analyzer',
    title: 'AI ATS Resume Analyzer',
    tagline: 'Automated HR resume screening simulation & keyword fit scoring workflow',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://ats-landing-page-ruddy.vercel.app/',
    hostingLabel: 'Live on Vercel',
    description:
      'Modern Applicant Tracking System (ATS) simulation interface designed to evaluate resume formatting, keyword alignment, and automated HR shortlisting workflows.',
    architectureSummary:
      'React + TypeScript scoring interface modeled around automated AI screening pipelines.',
    highlights: [
      'Simulates real-world ATS shortlisting heuristics & keyword coverage',
      'Actionable scoring breakdown for technical resumes',
      'Live landing & analyzer showcase on Vercel',
    ],
    stack: ['React', 'TypeScript', 'AI Screening', 'Automation'],
    accentHex: '#C94F16',
  },
  {
    slug: 'ai-image-creator',
    title: 'AI Image Creator — Generative Text-to-Image Studio',
    tagline: 'Prompt-driven generative image creation web app with responsive gallery UI',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://ai-image-creator-ten.vercel.app/',
    hostingLabel: 'Live on Vercel',
    description:
      'Generative AI web studio transforming natural-language prompts into synthesized visual artwork with style presets and instant preview.',
    architectureSummary:
      'React UI integrated with generative text-to-image inference endpoints deployed on Vercel.',
    highlights: [
      'Clean prompt-to-image generation interface with aspect & style guidance',
      'Instant download and responsive gallery presentation',
      'Hosted live on Vercel',
    ],
    stack: ['React', 'Generative AI', 'Text-to-Image', 'Vercel'],
    accentHex: '#A83D10',
  },
  {
    slug: 'milk-store-order-automation',
    title: 'Milk Store Multimodal Order Automation',
    tagline: 'n8n + Telegram Bot (text, voice, image) synced to Google Sheets backends',
    category: 'Developer & Workflow AI',
    zoneId: 'guild',
    year: '2025',
    liveUrl: 'https://live-order-peek.lovable.app/',
    hostingLabel: 'Live on Lovable + n8n Workflows',
    description:
      'End-to-end operational automation engine powered by n8n workflows and Telegram Bot integration. Processes multimodal customer orders (text, voice messages, and receipt/product images) and synchronizes real-time inventory and order logs to Google Sheets and a live React dashboard.',
    architectureSummary:
      'n8n orchestration nodes parse Telegram multimodal inputs, update Google Sheets backends in real time, and push notifications to the live web dashboard.',
    highlights: [
      'Accepts multimodal Telegram orders across text, voice & image inputs',
      'Eliminates manual data entry with synchronized Google Sheets inventory',
      'Live real-time order dashboard deployed on Lovable',
    ],
    stack: ['React', 'n8n Workflows', 'Telegram Bot API', 'Google Sheets API'],
    accentHex: '#E6A23C',
  },

  // === 3D WEBGL WORLDS & INTERACTIVE SHOWCASES (FROM GITHUB) ===
  {
    slug: 'craftscape',
    title: 'CraftScape — 3D Procedural Voxel Sandbox Game',
    tagline: 'Pure ES2024 JS + Three.js voxel engine with 5 biomes, BFS lighting, mobs & Web Audio',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    featured: true,
    liveUrl: 'https://craftscape-voxel.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/craftscape',
    hostingLabel: 'Live on Netlify',
    description:
      'Full Minecraft-inspired 3D voxel sandbox game engineered in pure ES2024 JavaScript and Three.js without TypeScript overhead. Includes 5 procedural biomes, cave/ore generation, BFS sky+torch lighting, smooth per-vertex ambient occlusion, 37 crafting recipes, furnaces, mobs, slash commands, and IndexedDB multi-world persistence.',
    architectureSummary:
      '27 modular ES2024 files featuring split opaque/cutout/water chunk meshers, 3D DDA raycasting, swept AABB collision physics, procedural 256×256 texture atlas, and Web Audio synthesizer SFX.',
    highlights: [
      '60/60 Vitest tests passing, 0 ESLint warnings, verified WebGL2 at 60 FPS',
      '5 biomes, 5 articulated mobs, 37 crafting recipes & IndexedDB saves',
      'Playable live in browser at craftscape-voxel.netlify.app',
    ],
    stack: ['Pure ES2024 JS', 'Three.js', 'GLSL Shaders', 'Web Audio API', 'IndexedDB'],
    accentHex: '#245B45',
  },
  {
    slug: 'sandalwood-garden-estate',
    title: 'Sandalwood Garden Estate — 3D Architectural Walkthrough',
    tagline: '1:1m procedural 12-zone luxury estate in Three.js with male/female rigs & PMREM sky',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    liveUrl: 'https://sandalwood-garden-estate.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/sandalwood-garden-estate',
    hostingLabel: 'Live on Netlify',
    description:
      'Interactive first-person and third-person 3D architectural exploration of an 80×70m estate built in pure ES2024 JavaScript and Three.js. Features 12 furnished interior/exterior zones, 13 interactive doors, punched ExtrudeGeometry walls, animated pool & espresso bar, and a dynamic Day/Sunset/Night PMREM cycle.',
    architectureSummary:
      '53-file pure-JS Three.js engine with 349/349 passing Vitest checks, anatomically calibrated character rigs, and bespoke PBR interior craft.',
    highlights: [
      '349/349 Vitest tests passing with zero console or WebGL errors',
      '12 zones, 13 interactive doors, Day/Sunset/Night lighting & interactive Espresso Bar',
      'Live playable walkthrough at sandalwood-garden-estate.netlify.app',
    ],
    stack: ['Pure ES2024 JS', 'Three.js', 'PMREM Lighting', 'Vitest'],
    accentHex: '#C94F16',
  },
  {
    slug: 'echoes-of-earth',
    title: 'Echoes of Earth — 3D Planetary Storytelling',
    tagline: 'Next.js + React Three Fiber + Lenis interactive 3D planetary experience',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    liveUrl: 'https://echoes-of-earth-test.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/echoes-of-earth',
    hostingLabel: 'Live on Netlify',
    description:
      'Interactive 3D WebGL planetary storytelling experience combining React Three Fiber shaders, smooth Lenis scroll choreography, and glassmorphic editorial panels.',
    architectureSummary:
      'Next.js + TypeScript + React Three Fiber + Lenis scroll-linked 3D orbital camera rig.',
    highlights: [
      'Scroll-synchronized 3D planetary shaders & camera keyframes',
      'Smooth Lenis inertia scrolling paired with crisp editorial UI',
      'Live on Netlify with full TypeScript GitHub source',
    ],
    stack: ['Next.js', 'TypeScript', 'React Three Fiber', 'Lenis'],
    accentHex: '#245B45',
  },
  {
    slug: 'porsche-911-gt3rs-experience',
    title: 'Porsche 911 GT3 RS — 3D WebGL Showcase',
    tagline: 'Draco/Basis compressed 3D supercar experience with clearcoat PBR & scroll choreography',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    liveUrl: 'https://porsche-911-gt3rs-experience.netlify.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/porsche-911-gt3rs-experience',
    hostingLabel: 'Live on Netlify',
    description:
      'Awwwards-inspired interactive 3D WebGL Porsche 911 GT3 RS (992) automotive showcase with Draco/Basis asset decompression, clearcoat lacquer materials, contact shadows, and scroll-linked camera choreography.',
    architectureSummary:
      'Three.js + Draco/Basis loaders + studio HDR reflections + multi-waypoint scroll camera rig.',
    highlights: [
      'Automotive clearcoat PBR materials & studio HDR environment reflections',
      'Draco & Basis Universal asset compression for fast web loading',
      'Live interactive 3D experience on Netlify',
    ],
    stack: ['Three.js', 'WebGL', 'Draco / Basis', 'JavaScript'],
    accentHex: '#A83D10',
  },
  {
    slug: 'fish-hub',
    title: 'Fish Hub — 3D Underwater WebGL Dive',
    tagline: 'Interactive 3D underwater WebGL experience with scroll-linked ocean camera dives',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    liveUrl: 'https://fish-hub.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/fish-hub',
    hostingLabel: 'Live on Vercel',
    description:
      'Interactive 3D underwater WebGL landing experience featuring animated marine life, volumetric depth cues, and smooth scroll-linked camera dives into the ocean floor.',
    architectureSummary:
      'Three.js WebGL scene with depth-graded underwater fog, particle plankton, and scroll choreography hosted on Vercel.',
    highlights: [
      'Scroll-linked underwater depth camera dive',
      'Animated 3D marine assets & volumetric depth lighting',
      'Live hosted on Vercel',
    ],
    stack: ['Three.js', 'WebGL', 'HTML5', 'CSS3', 'JavaScript'],
    accentHex: '#245B45',
  },
  {
    slug: 'adidas-3d-landing-page',
    title: 'Adidas Samba 3D — 240-Frame Scroll Showcase',
    tagline: 'High-FPS 240-frame canvas video-ad showcase (Shoe & Keyboard editions)',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    liveUrl: 'https://adidas-3d-landing-page-pied.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/adidas-3d-landing-page',
    hostingLabel: 'Live on Vercel',
    description:
      'Frame-sequence 3D product showcase scrubbing 240 pre-rendered cinema frames smoothly on an HTML5 canvas as the user scrolls across Shoe and Keyboard editions.',
    architectureSummary:
      'Zero-jank image-sequence canvas renderer synchronized to normalized scroll velocity and editorial typography.',
    highlights: [
      '240-frame preloaded canvas scrubber running at silky 60 FPS',
      'Dual product showcase editions (Sneaker & Mechanical Keyboard)',
      'Live on Vercel',
    ],
    stack: ['HTML5 Canvas', 'JavaScript', 'CSS3', 'Scroll Choreography'],
    accentHex: '#352219',
  },
  {
    slug: 'praneeth-3d-portfolio',
    title: 'Praneeth 3D Portfolio v1 & Lovable Showcase',
    tagline: 'Earlier WebGL & Lovable portfolio editions archived in my engineering evolution',
    category: '3D WebGL Worlds',
    zoneId: 'arcade',
    year: '2026',
    liveUrl: 'https://praneethkarthikeyaportfolio.vercel.app',
    githubUrl: 'https://github.com/KARTHIKEYASHARMA672/praneeth-3d-portfolio',
    hostingLabel: 'Live on Vercel (+ praneethsportfolio.lovable.app)',
    description:
      'My earlier 3D WebGL developer portfolio on Vercel alongside my Lovable portfolio (praneethsportfolio.lovable.app), documenting the progression toward this full AI-exclusive 3D Quest World.',
    architectureSummary:
      'Interactive Three.js WebGL portfolio canvas hosted on Vercel.',
    highlights: [
      'Live on Vercel at praneethkarthikeyaportfolio.vercel.app',
      'Companion archive to praneethsportfolio.lovable.app',
      'Public GitHub source available for inspection',
    ],
    stack: ['Three.js', 'WebGL', 'HTML5', 'Vercel'],
    accentHex: '#C94F16',
  },
];

export const PROJECT_CATEGORIES: Array<'All' | ProjectCategory> = [
  'All',
  'Agentic AI & OS',
  '3D Spatial AI & Twins',
  'Computer Vision & ML',
  'LLM & Knowledge AI',
  'Developer & Workflow AI',
  '3D WebGL Worlds',
];
