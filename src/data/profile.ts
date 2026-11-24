export interface SkillBranch {
  id: string;
  title: string;
  level: string;
  xp: number;
  summary: string;
  tools: string[];
  linkedSlugs: string[];
}

export interface ExperienceQuest {
  id: string;
  role: string;
  context: string;
  period: string;
  badge: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  focus: string;
}

export interface CredentialEntry {
  title: string;
  issuer: string;
  date: string;
  kind: 'Certification' | 'Hackathon' | 'Workshop';
  summary: string;
  link?: string;
}

export const PROFILE = {
  name: 'A. Praneeth Karthikeya Sharma',
  shortName: 'Praneeth Karthikeya',
  handle: 'KARTHIKEYASHARMA672',
  title: 'AI Systems & Agentic Architect',
  academicStatus: '4th-Year B.Tech ECE Student (Class of 2027)',
  location: 'Kadapa, Andhra Pradesh & Phagwara, Punjab, India',
  email: 'karthikeyasharma672@gmail.com',
  phone: '+91 949 262 3987',
  github: 'https://github.com/KARTHIKEYASHARMA672',
  linkedin: 'https://www.linkedin.com/in/karthikeya-sharma672/',
  previousPortfolios: [
    {
      label: 'Lovable Portfolio',
      url: 'https://praneethsportfolio.lovable.app/',
    },
    {
      label: '3D WebGL Portfolio v1',
      url: 'https://praneethkarthikeyaportfolio.vercel.app/',
    },
  ],
  bioHeadline:
    'Building zero-cost agentic operating systems, multi-agent AI simulators, computer vision pipelines, and interactive 3D WebGL intelligence studios.',
  bioStory: [
    'I am A. Praneeth Karthikeya Sharma, a 4th-year B.Tech Electronics & Communication Engineering undergraduate at Lovely Professional University (Class of 2027) whose engineering focus is dedicated to Artificial Intelligence, autonomous agentic workflows, and interactive 3D AI experiences.',
    'Rather than stopping at prompt wrappers, I architect complete AI products: multi-model circuit-breaker routers (KODA), multi-agent C-suite debate engines (Nexus Factory), client-side codebase reverse-engineering labs (BLACKBOX), evidence-grounded historical simulations (ARTISAN AI), YOLO computer vision detectors, and WebGL2 digital twins (CityOS, MirrorWorld, Archon, Reality Engine, NeuroSpace).',
    'Across GitHub, I maintain 35+ AI and 3D software repositories alongside a 4-tier open-source AI Agent Skills Ecosystem spanning 750+ curated skills and 1,000+ programmatically generated engineering playbooks.',
  ],
  stats: [
    { label: 'AI & 3D Projects Built', value: '40' },
    { label: 'Live Hosted AI Apps', value: '32' },
    { label: 'Agent Skills Curated', value: '750+' },
    { label: 'B.Tech Standing', value: '4th Yr' },
  ],
};

export const SKILL_BRANCHES: SkillBranch[] = [
  {
    id: 'agentic',
    title: 'Agentic AI & Multi-Model Orchestration',
    level: 'LVL 94',
    xp: 94,
    summary:
      'Designing autonomous multi-agent loops, zero-cost LLM failover chains, MCP servers, and safety-gated tool execution.',
    tools: [
      'Google Gemini SDK',
      'OpenAI & OpenCode',
      'Ollama Local Inference',
      'MCP (Model Context Protocol)',
      'Circuit-Breaker Failover',
      'Prompt Pipelines',
    ],
    linkedSlugs: ['koda', 'nexus-factory', 'ai-os', 'newschakra', 'ownbot-gpt'],
  },
  {
    id: 'spatial-ai',
    title: '3D Spatial AI & Digital Twins',
    level: 'LVL 91',
    xp: 91,
    summary:
      'Merging Three.js WebGL2 simulations, numerical physics solvers, parametric drafting, and AI planning engines in real-time 3D.',
    tools: [
      'Three.js WebGL2',
      'React Three Fiber',
      'GLSL Shaders',
      'Numerical Solvers (RK4 / Verlet)',
      'Digital Twin Telemetry',
      'KaTeX Live Math',
    ],
    linkedSlugs: ['cityos', 'mirrorworld', 'archon', 'reality-engine', 'neurospace'],
  },
  {
    id: 'vision-ml',
    title: 'Computer Vision & Predictive ML',
    level: 'LVL 88',
    xp: 88,
    summary:
      'Training and deploying YOLO object detectors, TensorFlow/Keras neural nets, TFLite edge benchmarks, and Gemini Vision pipelines.',
    tools: [
      'Ultralytics YOLO',
      'TensorFlow / Keras',
      'TensorFlow Lite',
      'OpenCV',
      'Scikit-learn & NumPy',
      'Gemini Pro Vision',
    ],
    linkedSlugs: [
      'pothole-ai-detector',
      'ai-smart-indian-traffic-system',
      'smart-grid-platform',
      'image-recognizer',
      'auto-edge-sim',
    ],
  },
  {
    id: 'automation',
    title: 'AI Workflow & Document Automation',
    level: 'LVL 90',
    xp: 90,
    summary:
      'End-to-end operational automation connecting n8n workflows, Telegram multimodal bots, resume parsing, and automated PDF/DOCX engines.',
    tools: [
      'n8n Workflows',
      'Telegram Bot API',
      'Google Sheets & Email APIs',
      'Resume / ATS Parsing',
      'Automated PDF & DOCX',
      'Playwright Automation',
    ],
    linkedSlugs: [
      'certifyai',
      'ai-career-opportunity-report-generator',
      'milk-store-order-automation',
      'ai-ats-resume-analyzer',
      'prd-forge',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack AI Product Engineering',
    level: 'LVL 92',
    xp: 92,
    summary:
      'Shipping responsive, verified web applications from zero to Vercel production with strict TypeScript, FastAPI, and automated visual QA.',
    tools: [
      'React 19 & Next.js 16',
      'TypeScript & Vite',
      'Python & FastAPI',
      'Streamlit',
      'Tailwind CSS',
      'SQLite FTS5 & REST APIs',
    ],
    linkedSlugs: ['blackbox', 'artisan-ai-picasso', 'aitube', 'billease-ai-nexus'],
  },
];

export const EXPERIENCE_QUESTS: ExperienceQuest[] = [
  {
    id: 'ai-systems-architect',
    role: 'Independent AI Systems & Agentic Builder',
    context: '40 GitHub & CV Projects · 32 Live Hosted Deployments',
    period: '2024 — Present (2026)',
    badge: 'MAIN CAMPAIGN',
    summary:
      'Architected and shipped full-stack AI applications, autonomous multi-agent simulators, and interactive 3D WebGL2 worlds across Vercel, Streamlit Cloud, and local desktop runtimes.',
    achievements: [
      'Built KODA, a zero-cost personal AI OS routing across 12 free OpenCode models with <100ms SQLite circuit-breaker failover, 25 safety-gated tools, and full-duplex voice.',
      'Engineered 5 flagship WebGL2 AI & Digital Twin studios (CityOS, MirrorWorld, Archon, Reality Engine, NeuroSpace) deployed live on Vercel.',
      'Created BLACKBOX (100% client-side AI codebase reverse-engineering lab with live Mermaid diagrams) and ARTISAN AI — Picasso (evidence-grounded QA with a 307-page research dossier).',
      'Deployed NewsChakra (MCP-ready 360° AI news desk) and AITube (1,326 curated channels across 13 genres).',
    ],
    stack: ['React 19', 'TypeScript', 'Python', 'FastAPI', 'Three.js', 'Gemini SDK', 'MCP'],
  },
  {
    id: 'skills-ecosystem',
    role: 'AI Agent Skills Architect & Open-Source Maintainer',
    context: 'KARTHIKEYASHARMA672 4-Tier GitHub Skills Ecosystem',
    period: '2025 — 2026',
    badge: 'ECOSYSTEM',
    summary:
      'Designed a structured, token-optimized GitHub-first skills architecture used to govern multi-agent planning, 3D WebGL engineering, frontend design systems, and automated testing.',
    achievements: [
      'Curated and synced 750+ modular skills across 4 canonical repositories: skills (52 core), new-skills (521+ domain packs), claude-skills (90 multi-modal), and extension-skills (88 plugin skills).',
      'Authored open-code-find-skills to programmatically generate 1,000+ AI-first engineering, ops, and workflow automation skill blueprints.',
      'Engineered automated verification and visual UI testing workflows using headless Playwright WebGL2 diagnostics.',
    ],
    stack: ['Agent Governance', 'Prompt Architecture', 'Python', 'Playwright', 'GitHub MCP'],
  },
  {
    id: 'ai-automation-engineer',
    role: 'AI Workflow & Computer Vision Developer',
    context: 'Applied ML, n8n & Hackathon Systems',
    period: '2024 — 2026',
    badge: 'APPLIED AI',
    summary:
      'Delivered computer vision inference pipelines, predictive traffic/grid models, and multimodal business automation workflows.',
    achievements: [
      'Trained and wrapped Ultralytics YOLO weights in FastAPI + React (Pothole AI Detector) with interactive confidence calibration.',
      'Built AI Smart Indian Traffic System combining vehicle detection, TensorFlow/Keras .h5 predictive models, and Gemini route optimization (up to 47% simulated congestion reduction).',
      'Automated multimodal order processing (text, voice, image) via n8n + Telegram Bot + Google Sheets APIs, plus bulk CSV-to-certificate pipelines (CertifyAI).',
    ],
    stack: ['Ultralytics YOLO', 'TensorFlow', 'n8n', 'Telegram API', 'Streamlit', 'OpenStreetMap'],
  },
  {
    id: 'hackathons-lead',
    role: 'Hackathon Rapid Prototyper & B.Tech ECE Scholar',
    context: 'Lovely Professional University · GeeksforGeeks · IIT Kharagpur NPTEL',
    period: '2023 — Present (4th Year)',
    badge: 'ACADEMIC & ARENA',
    summary:
      'Combining a 4th-year B.Tech Electronics & Communication Engineering foundation with rapid 24-hour AI software prototyping in national/campus hackathons.',
    achievements: [
      'Competed in HackManthan 2025 (GeeksforGeeks @ LPU) and LPU 24-Hour Innovation Hackathon, shipping working prototypes under strict time constraints.',
      'Completed AI Tools & ChatGPT Workflows hands-on workshop (Sep 2025) and NPTEL Database Management Systems (IIT Kharagpur, Sep 2025).',
      'Earned HackerRank Python (Basic) and Six Sigma Yellow Belt credentials for structured analytical optimization.',
    ],
    stack: ['Python', 'SQL / DBMS', 'Rapid AI Prototyping', 'Six Sigma', 'Problem Solving'],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'B.Tech in Electronics & Communication Engineering (4th Year)',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    period: 'June 2023 — Present (Graduating 2027)',
    grade: 'CGPA: 6.84 / 10.0',
    focus:
      'AI Systems Engineering, Autonomous Agents, Computer Vision, Edge-to-Cloud Simulation & Intelligent Automation.',
  },
  {
    degree: 'Intermediate (MPC — Mathematics, Physics, Chemistry)',
    institution: 'Sri Chaithanya Junior College',
    location: 'Kadapa, Andhra Pradesh, India',
    period: 'June 2021 — April 2023',
    grade: 'Percentage: 91.8%',
    focus: 'Strong quantitative foundation in calculus, linear algebra, and analytical problem solving.',
  },
  {
    degree: 'Matriculation (10th Standard)',
    institution: "Queen Mary's High School",
    location: 'Kadapa, Andhra Pradesh, India',
    period: 'April 2020 — June 2021',
    grade: 'Percentage: 99.0%',
    focus: 'Academic distinction across mathematics, science, and foundational computing.',
  },
];

export const CREDENTIALS: CredentialEntry[] = [
  {
    title: 'Database Management System (DBMS)',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Sep 2025',
    kind: 'Certification',
    summary: '8-week rigorous certification covering relational algebra, SQL, normalization, and structured data backends.',
    link: 'https://drive.google.com/file/d/1MrjD3QrAcu9L-ZOdozNkqeP9px58wntV/view',
  },
  {
    title: 'HackManthan 2025 — 24-Hour Hackathon',
    issuer: 'EventEye & GeeksforGeeks @ LPU',
    date: '2025',
    kind: 'Hackathon',
    summary: '24-hour rapid system prototyping challenge focused on building high-impact AI & web solutions.',
    link: 'https://drive.google.com/file/d/1-Pic5yaUmU3Bqa2iAqOXwPg5usL4N8Lo/view?usp=sharing',
  },
  {
    title: 'LPU 24-Hour Innovation Hackathon',
    issuer: 'Lovely Professional University',
    date: 'Mar 2025',
    kind: 'Hackathon',
    summary: 'Built and demonstrated an intelligent real-time automation prototype during a 24-hour campus sprint.',
    link: 'https://drive.google.com/file/d/1cdywRxtMMSFf03rmR2R2Pqc4oZWcG_y-/view?usp=sharing',
  },
  {
    title: 'AI Tools & ChatGPT Workflows Workshop',
    issuer: 'Continuous AI Learning',
    date: 'Sep 2025',
    kind: 'Workshop',
    summary: 'Hands-on workshop covering structured prompt pipelines, workflow automation, and applied LLM tooling.',
  },
  {
    title: 'Six Sigma Yellow Belt Certification',
    issuer: '6sigmastudy',
    date: 'Feb 2025',
    kind: 'Certification',
    summary: 'Process optimization, bottleneck diagnostics, and analytical quality engineering.',
    link: 'https://drive.google.com/file/d/16fEUQsJWFDgcNYNdKr7upBW_EU3A_ErG/view',
  },
  {
    title: 'Python (Basic) Certification',
    issuer: 'HackerRank',
    date: 'Mar 2024',
    kind: 'Certification',
    summary: 'Verified core Python problem solving, data structures, and algorithmic foundations for AI engineering.',
    link: 'https://www.hackerrank.com/certificates/c8ad2baa9b8b',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Sep 2023',
    kind: 'Certification',
    summary: 'Modern accessible CSS Grid, Flexbox, and responsive interface architecture.',
    link: 'https://www.freecodecamp.org/certification/fcc8f81dd80-857d-4a08-9b9a-d5e4da8bf675/responsive-web-design',
  },
];
