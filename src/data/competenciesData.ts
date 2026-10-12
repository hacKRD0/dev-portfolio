import { FaLaptopCode, FaCloud, FaBrain, FaDatabase } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Competency {
  icon: IconType;
  iconColor: string;
  title: string;
  description: string;
  skills: string[];
  paragraphs: string[];
}

export const competencies: Competency[] = [
  {
    icon: FaBrain,
    iconColor: 'text-purple-500',
    title: 'AI Engineering',
    description: 'Production multi-agent systems, evaluation, RAG, and observability for clinical, analytics, and talent products.',
    skills: [
      'Python',
      'OpenAI SDK',
      'Vercel AI SDK',
      'Langfuse',
      'OpenTelemetry',
      'RAG',
      'Google ADK',
      'Streamlit',
      'FastAPI',
      'BigQuery',
    ],
    paragraphs: [
      'At DaVita I design the orchestrator for a nephrologist-facing clinical multi-agent chatbot. Queries route to specialized domain agents based on intent and context. Structured schemas, controlled tool calling, prompt and context engineering, and callback-driven fallbacks keep the system safe enough for clinical use, and PostgreSQL session history supports audit and continuity. A Streamlit evaluation dashboard with LLM-as-judge scoring and human review cut feedback cycles by 90%+. Agent-level latency, token, and execution metrics cut multi-agent workflow latency by 60%. Load testing and process-safe database writes made the API reliable for 500+ concurrent users. Prototypes run on Google ADK and GCP Agent Engine.',
      'At 85SIXTY I built a production agent platform for analytics chat, automated reporting, prompt management, evaluation, and feedback. The chatbot uses Next.js, React, the Vercel AI SDK, and BigQuery, with streaming answers and tool-based retrieval. A planner-analyzer-summarizer architecture handles complex questions. Python reporting agents write results to Cloud Storage and post Slack Block Kit messages, and Langfuse plus OpenTelemetry cover prompt versions, traces, and evals. Multi-tenant isolation gives each client its own BigQuery dataset and Cloud Run pipeline.',
      'SREAI applies the same pattern to site reliability: Bedrock embeddings make a medium-sized repository searchable in under 3 minutes, and an SQS and Lambda log pipeline returns a root-cause report in under 60 seconds. Fashion Finder pairs YOLOv8 detection with CLIP, FAISS, and a BART style classifier. At Trikona I am building a multi-agent career advisor that scores profiles, jobs, and courses against one skill-competency model.'
    ]
  },
  {
    icon: FaLaptopCode,
    iconColor: 'text-pink-500',
    title: 'Full-Stack Development',
    description: 'End-to-end product engineering across React, Go, and Node services, from onboarding flows to portfolio tools.',
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Go',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'Tailwind CSS',
    ],
    paragraphs: [
      'As founding engineer at Trikona I own the product systems behind a construction talent network aimed at 5K+ users: professional identity, profiles, resumes, credentials, and role-based onboarding for professionals, students, corporates, colleges, SMEs, and administrators. LinkedIn onboarding and Digital Walk-In hiring cover application, shortlisting, scheduling, and structured interview rounds. Bridge APIs keep products, memberships, job permissions, learning access, and entitlements aligned to one source of truth. The Go services use clean architecture, JWT, and role checks; the React and TypeScript client uses Redux Toolkit and RTK Query.',
      'At Truemates I built the production dating backend with Node.js, Express.js, Sequelize, PostgreSQL, and Redis: matchmaking, activity tracking, SalesOps, gifting, reviews, and invitations. Apple and Google subscription webhooks use the official verification libraries, so renewals no longer depend on a paid third-party validator. At FlairX I raised interview capacity from 8 to 40+ concurrent sessions, cut candidate wait times by 75%, and shipped benchmark APIs covering every active job posting.',
      'StockCentral is the same shape of work as a personal product: React screens, an Express API, and a PostgreSQL model for uploads, stocks, sectors, CSV ingest, validation, search, and filtering. Earlier services — Pollyglot on Cloudflare, MovieFlex on Spring Boot and Kafka, and this portfolio — are where I practiced splitting a UI, an API, and a data store without losing the path a user actually takes.'
    ]
  },
  {
    icon: FaCloud,
    iconColor: 'text-blue-500',
    title: 'Cloud & DevOps',
    description: 'Cloud Run, AWS serverless, Cloudflare edge, and CI/CD used to ship and recover production systems.',
    skills: [
      'Google Cloud',
      'AWS',
      'Cloudflare',
      'Docker',
      'GitHub Actions',
      'Linux',
      'Nginx',
    ],
    paragraphs: [
      'At Trikona I containerized a WordPress multisite across PHP-FPM, Nginx, MariaDB, Redis, and WP-CLI. Bind-mounted local development plus GitHub Actions images published to GHCR cut full production restoration time by about 80%. A separate Dockerized remote environment, with isolated Git worktrees, lets coding agents implement and validate against a realistic stack while people review from any device. At DaVita I worked through IAM, deployment, and API integration blockers with frontend, BFF, and DevOps so an Agent Engine prototype could reach Alpha, and I load-tested the AI API until it held 500+ concurrent users.',
      'At 85SIXTY, CDC-style Cloud Run ingestion from Azure MSSQL into BigQuery dropped pipeline runtime from about 45 minutes to about 10 and memory from 8 GB to 2 GB. Reporting fans out through Pub/Sub to Cloud Run workers, with Neon locking, retries, backoff, and dead-letter queues so a message cannot run twice or disappear. Each client gets an isolated BigQuery dataset and pipeline. At Truemates, GitHub Actions deployed services to GCP, with Cloud SQL, Firestore, Firebase Authentication, and Cloud Storage holding production data and media.',
      'SREAI splits the hot path and the heavy path: Cloudflare Workers, D1, and KV serve repository lookups at under 20 ms P99, while Lambda, S3, and SQS run indexing and log analysis. LambdaVision and CloudFace are the earlier serverless versions of that idea — Lambda and S3 for video frames, EC2, S3, and SQS for image recognition. FlairX logs land in S3 after Winston structures them, which cut debugging time by 40%.'
    ]
  },
  {
    icon: FaDatabase,
    iconColor: 'text-green-500',
    title: 'Data Engineering',
    description: 'CDC pipelines, read-optimized models, and query work that keep analytics and directories fast.',
    skills: [
      'PostgreSQL',
      'BigQuery',
      'Redis',
      'Neon',
      'Supabase',
      'pgvector',
      'SQL',
    ],
    paragraphs: [
      'The 85SIXTY ingestion job is a CDC-style copy from Azure MSSQL into BigQuery. Reworking that path cut runtime from about 45 minutes to about 10 and the memory footprint from 8 GB to 2 GB, which is what made per-client Cloud Run pipelines practical. Neon holds the locks that keep the Pub/Sub reporting workers from double-processing a job. Vector search shows up again in SREAI, where Bedrock embeddings back repository lookup, and in Fashion Finder, where FAISS matches CLIP crops to a catalog.',
      'On Trikona, discovery and search do not hit the transactional tables directly. Read-optimized profile models and CDC-style synchronization keep directory filters, recommendations, and listings off expensive joins. PostgreSQL is also the system of record for DaVita chatbot sessions, so a clinical conversation can be resumed and audited. At Truemates, Sequelize migrations and Cloud SQL kept the dating data model consistent across environments, with Redis in front of hot reads.',
      'Earlier, at HERE Technologies, I clustered 7K+ EV GPS traces with DBSCAN and GeoPandas and surfaced 6+ candidate charging-station locations. Charging-data QA, synthetic data, and PostgreSQL tuning improved accuracy by 25%, completeness by 14%, and query response time by 35%. BuildSmartDB was the academic version of the same concern: fragment and replicate smart-building metrics so a query does not depend on one node.'
    ]
  },
];
