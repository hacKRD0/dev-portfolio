import { FaLaptopCode, FaCloud, FaBrain } from 'react-icons/fa';
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
    icon: FaLaptopCode,
    iconColor: 'text-pink-500',
    title: 'Full-Stack Development',
    description: 'Experienced in building scalable, production-ready web applications with modern architectures and best practices.',
    skills: [
      'Go',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Flask',
      'SpringBoot',
      'React',
      'TailwindCSS',
      'Redux Toolkit',
      'PostgreSQL',
      'Docker'
    ],
    paragraphs: [
      'I specialize in designing and delivering scalable full-stack applications with modern architectures and technologies across both frontend and backend domains. At FlairX, I contributed to a high-stakes web application by building TypeScript-based APIs and integrating them with a React + Redux Toolkit frontend. I enhanced platform scalability by supporting concurrent interview scheduling, implemented structured logging, and ensured long-term observability with AWS S3 integration.',
      'I architected and built Trikona, a comprehensive platform with modules for user management and directory services. The system features a Go backend with clean architecture, JWT authentication, and role-based access control. The React/TypeScript frontend uses Redux Toolkit and RTK Query for state management, with responsive UIs built using Tailwind CSS. I implemented secure authentication flows including LinkedIn OAuth, email verification, and password reset functionality using Mailjet.',
      'For StockCentral, I developed a full-stack portfolio management application using Node.js, Express, and PostgreSQL. The platform includes real-time data visualization, secure user authentication with Firebase, and a responsive React frontend. I containerized the application with Docker and set up CI/CD pipelines using GitHub Actions, enabling seamless deployment and updates. The system handles complex financial data relationships and provides intuitive interfaces for portfolio analysis.',
      'My experience extends to building modular, maintainable codebases with proper separation of concerns. I follow test-driven development practices and implement comprehensive error handling, logging, and monitoring. I optimize applications for performance through code splitting, lazy loading, and efficient data fetching strategies. My full-stack expertise allows me to bridge the gap between frontend and backend development, ensuring seamless integration and optimal system architecture.'
    ]
  },
  {
    icon: FaBrain,
    iconColor: 'text-purple-500',
    title: 'AI Engineering',
    description: 'Enthusiastic about AI and its potential to transform industries and create smart solutions.',
    skills: [
      'Python',
      'AI SDK',
      'OpenAI API',
      'NLP',
      'LLMs',
      'RAG',
      'Machine Learning',
      'Computer Vision',
      'Hugging Face',
      'Transformers',
      'Prompt Engineering',
      'Serverless AI',
      'Vector Stores',
      'LoRA',
    ],
    paragraphs: [
      'My expertise in AI engineering spans natural language processing (NLP), recommendation systems, computer vision, and prompt-based AI, with an emphasis on real-world deployment. At 85Sixty, I’m building Brandgravity—a conversational analytics platform that lets marketers query BigQuery datasets in natural language. I implemented Python microservices on Cloud Run, prototyped RAG workflows to augment campaign insights, and automated weekly Slack and SMS report deliveries using the OpenAI and Slack SDKs—demonstrating scalable vector retrieval, multitenant data isolation, and production observability.',
      'In StockSentimentAI, I developed a sentiment-based stock trend predictor by fine-tuning GPT-2 with LoRA adapters. I engineered preprocessing pipelines, combined sentiment scores with n-grams and historical market data, and applied rigorous evaluation metrics to ensure robust financial insights. My work on LambdaVision and CloudFace further showcases cloud-native computer vision workflows—triggering face recognition via AWS Lambda and EC2, handling large video/image streams, and optimizing inference for low latency.',
      'I’ve also explored ethical and context-sensitive AI in my Disease Diagnosis Fine-Tuning project, where I used zero-shot prompting with DistilBERT and built guardrails to filter irrelevant or unsafe outputs. This work underscores my commitment to safe, reliable AI interactions. Collectively, my AI engineering projects reflect a strong foundation in transformer-based models, vector search architectures, and serverless deployment—backed by hands-on certifications from NVIDIA, AWS, and Google.'
    ]
  },
  {
    icon: FaCloud,
    iconColor: 'text-blue-500',
    title: 'Cloud & DevOps',
    description: 'Skilled in deploying and managing applications in cloud environments with CI/CD pipelines.',
    skills: [
      'AWS',
      'GCP',
      'Cloudflare',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'GitHub Actions',
      'Serverless',
      'Terraform',
      'PostgreSQL'
    ],
    paragraphs: [
      'I have extensive hands-on experience architecting, deploying, and optimizing scalable cloud-based systems across AWS, Google Cloud Platform (GCP), and Cloudflare. At FlairX, I architected structured logging pipelines and enabled archival to AWS S3, significantly improving backend observability. I also addressed infrastructure risks by diagnosing TypeORM schema issues that affected production data. While at TrueMates, I automated deployment pipelines using GitHub Actions and GCP’s App Engine, handling CI/CD for multiple backend services and managing PostgreSQL via GCP SQL. I also leveraged Cloud Storage for hosting user-uploaded media and integrated Firebase Authentication for scalable user management.',
      `My personal projects further showcase my cloud proficiency. In Pollyglot, I built a real-time translation app using Cloudflare Workers and Cloudflare AI Gateway for rate-limiting and caching API calls to Hugging Face. I automated deployment via Cloudflare Pages and integrated a CI/CD pipeline for rapid frontend updates. In LambdaVision, I implemented a fully serverless architecture on AWS using Lambda functions to split, analyze, and manage video files stored on S3, demonstrating advanced use of event-driven architectures. For CloudFace, I built a dynamic auto-scaling system with EC2, S3, and SQS to process facial recognition requests in a distributed fashion, ensuring fault tolerance and performance. Across projects, I've consistently delivered resilient, cost-efficient infrastructure using Docker, CI/CD pipelines, and cloud-native tooling tailored to workload needs.`,
    ]
  },
  
  // {
  //   icon: FaDatabase,
  //   iconColor: 'text-green-500',
  //   title: 'Database Management',
  //   description: 'Proficient in designing and optimizing database systems for performance and scalability.',
  //   skills: [
  //     'PostgreSQL',
  //     'MongoDB',
  //     'Redis',
  //     'SQL',
  //     'Database Design',
  //     'Performance Tuning',
  //     'Data Modeling',
  //     'ETL'
  //   ],
  //   paragraphs: [
  //     'Designed and implemented efficient database schemas for both relational and NoSQL databases.',
  //     'Optimized complex SQL queries and database performance through indexing and query optimization.',
  //     'Implemented database migration strategies and version control for schema changes.',
  //     'Worked with both SQL and NoSQL databases, choosing the right tool for specific use cases.'
  //   ]
  // },
  // {
  //   icon: FaServer,
  //   iconColor: 'text-red-500',
  //   title: 'Backend Development',
  //   description: 'Specialized in building robust and scalable server-side applications.',
  //   skills: [
  //     'Go',
  //     'Node.js',
  //     'Python',
  //     'Microservices',
  //     'REST',
  //     'gRPC',
  //     'GraphQL',
  //     'Message Queues'
  //   ],
  //   paragraphs: [
  //     'Architected and implemented scalable microservices using Go and Node.js.',
  //     'Designed and developed RESTful and GraphQL APIs following best practices.',
  //     'Implemented message queue systems for asynchronous processing and event-driven architectures.',
  //     'Ensured application security through proper authentication, authorization, and data validation.'
  //   ]
  // }
];
