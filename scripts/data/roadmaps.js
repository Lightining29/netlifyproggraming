/**
 * PROGRAMMINGWALA - Career Roadmaps Dataset
 * Detailed step-by-step career progression tracks from foundations to enterprise readiness.
 */

const ROADMAPS = [
  {
    id: 'java-developer-roadmap',
    url: '/career/java-developer-roadmap/',
    title: 'Java Developer Career Roadmap: Complete Guide from Beginner to Enterprise Architect',
    h1: 'The Complete Java Developer Career Roadmap',
    metaDescription: 'Step-by-step Java developer roadmap: Core Java, Collections, Multithreading, Spring Boot 3, Hibernate, Microservices, Docker, and interview milestones.',
    category: 'Java',
    courseUrl: '/courses/java/index.html',
    timeline: [
      {
        step: 1,
        title: 'Phase 1: JVM Fundamentals & Core Java Syntax',
        duration: 'Month 1',
        description: 'Understand how code runs on the JVM. Master primitive data types, memory segments (Stack vs Heap), control flow, and object-oriented programming (Encapsulation, Inheritance, Polymorphism, Abstraction).',
        tools: ['Java 21 LTS', 'IntelliJ IDEA Community', 'JShell'],
        skills: ['Variables & Operators', 'Classes & Objects', 'Stack & Heap Allocation', 'Exception Handling', 'Package Management']
      },
      {
        step: 2,
        title: 'Phase 2: Collections, Generics & Modern Functional Idioms',
        duration: 'Month 2',
        description: 'Master the Java Collections Framework (List, Set, Map, Queue). Learn the internal mechanics of HashMap and ConcurrentHashMap. Adopt functional programming with Lambdas and the Stream API.',
        tools: ['Maven', 'JUnit 5', 'Git'],
        skills: ['HashMap Mechanics', 'Generics & Wildcards', 'Stream API & Collectors', 'Optional Pattern', 'Lambda Expressions']
      },
      {
        step: 3,
        title: 'Phase 3: Relational Persistence & Spring Boot Framework',
        duration: 'Month 3',
        description: 'Learn SQL querying, JDBC connection pooling, and Object-Relational Mapping with Hibernate and JPA. Build RESTful web services using Spring Boot 3, IoC dependency injection, and validation.',
        tools: ['PostgreSQL', 'Spring Boot 3', 'Hibernate ORM', 'Postman', 'HikariCP'],
        skills: ['Spring IoC & DI', 'Spring Data JPA', 'REST API Design', 'Input Validation (@Valid)', 'Transaction Management']
      },
      {
        step: 4,
        title: 'Phase 4: Enterprise Microservices, Security & Cloud Deployment',
        duration: 'Month 4',
        description: 'Decompose monolithic backends into distributed microservices. Implement stateless authentication with Spring Security and JWT. Containerize applications using Docker and configure automated CI/CD pipelines.',
        tools: ['Docker', 'Spring Security', 'JWT', 'AWS EC2', 'GitHub Actions'],
        skills: ['Microservices Architecture', 'Spring Security 6', 'Docker Multi-stage Builds', 'API Gateways', 'Production Logging']
      }
    ],
    portfolioProjects: [
      'Multi-Tier E-Commerce Backend with Spring Boot, Redis, and PostgreSQL',
      'High-Concurrency Banking Ledger utilizing Java 21 Virtual Threads and Pessimistic Locking'
    ],
    resumeTips: [
      'Highlight specific architectural design patterns implemented (Repository, Factory, DTO, Strategy).',
      'Quantify performance gains (e.g. "Reduced API latency by 35% through Redis caching and query indexing").',
      'Include links to GitHub repositories with well-structured README files and Docker Compose configurations.'
    ],
    commonMistakes: [
      'Jumping directly into Spring Boot before thoroughly understanding Core Java OOP and Collections.',
      'Treating Hibernate as magic without learning underlying SQL query execution and the N+1 problem.',
      'Ignoring writing unit and integration tests with JUnit and Mockito.'
    ]
  },
  {
    id: 'python-developer-roadmap',
    url: '/career/python-developer-roadmap/',
    title: 'Python Developer Career Roadmap: From Foundations to Backend & Automation',
    h1: 'The Complete Python Developer Career Roadmap',
    metaDescription: 'Step-by-step roadmap for Python developers: Core syntax, OOP, FastAPI, Django, PostgreSQL, Docker, and production backend engineering.',
    category: 'Python',
    courseUrl: '/courses/python/index.html',
    timeline: [
      {
        step: 1,
        title: 'Phase 1: Python Core & Algorithmic Problem Solving',
        duration: 'Weeks 1-4',
        description: 'Learn Python syntax, dynamic typing, built-in data structures (lists, tuples, dicts, sets), functions (*args, **kwargs), and file I/O.',
        tools: ['Python 3.12+', 'VS Code', 'Git'],
        skills: ['Control Structures', 'List Comprehensions', 'Exception Handling', 'File Handling']
      },
      {
        step: 2,
        title: 'Phase 2: Advanced Python & Object-Oriented Design',
        duration: 'Weeks 5-8',
        description: 'Understand OOP, dunder methods, decorators, generators, context managers, and virtual environment management with Poetry.',
        tools: ['Poetry', 'PyTest', 'Black/Flake8'],
        skills: ['Classes & MRO', 'Decorators', 'Generators & Yield', 'Unit Testing']
      },
      {
        step: 3,
        title: 'Phase 3: Web Frameworks & Database Persistence',
        duration: 'Weeks 9-12',
        description: 'Build asynchronous REST APIs with FastAPI and Pydantic. Work with relational databases using SQLAlchemy ORM and Alembic migrations.',
        tools: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Pydantic'],
        skills: ['Asynchronous Programming (async/await)', 'REST API Architecture', 'Database Migrations', 'JWT Auth']
      },
      {
        step: 4,
        title: 'Phase 4: Containerization & Cloud Deployment',
        duration: 'Weeks 13-16',
        description: 'Package Python applications into lightweight Docker containers. Deploy APIs to cloud Linux servers with automated testing pipelines.',
        tools: ['Docker', 'AWS EC2', 'GitHub Actions', 'Nginx'],
        skills: ['Dockerfile Optimization', 'CI/CD Pipelines', 'Gunicorn/Uvicorn Tuning']
      }
    ],
    portfolioProjects: [
      'High-Throughput Asynchronous Task Dispatcher API with FastAPI and Celery',
      'Automated Multi-Tenant Web Platform with Django and PostgreSQL'
    ],
    resumeTips: [
      'Specify asynchronous experience (asyncio, FastAPI, Celery).',
      'Showcase automated test coverage percentages in your project descriptions.'
    ],
    commonMistakes: [
      'Ignoring PEP 8 standards and writing monolithic scripts without type hints.',
      'Over-relying on global variables instead of modular functional/OOP design.'
    ]
  },
  {
    id: 'data-scientist-roadmap',
    url: '/career/data-scientist-roadmap/',
    title: 'Data Scientist Career Roadmap: Math, Machine Learning & MLOps',
    h1: 'The Complete Data Scientist & Machine Learning Roadmap',
    metaDescription: 'Step-by-step roadmap to becoming a Data Scientist: Linear Algebra, Statistics, Pandas, NumPy, Scikit-Learn, XGBoost, Deep Learning, and MLOps.',
    category: 'Data',
    courseUrl: '/courses/data-science/index.html',
    timeline: [
      {
        step: 1,
        title: 'Phase 1: Applied Mathematics & Exploratory Data Analysis',
        duration: 'Month 1',
        description: 'Master linear algebra, descriptive & inferential statistics, probability distributions, hypothesis testing, NumPy, and Pandas.',
        tools: ['Python', 'Jupyter Lab', 'NumPy', 'Pandas', 'Matplotlib'],
        skills: ['Statistics & Probability', 'Vectorized Math', 'Data Wrangling', 'Data Visualization']
      },
      {
        step: 2,
        title: 'Phase 2: Supervised & Unsupervised Machine Learning',
        duration: 'Month 2',
        description: 'Learn core ML algorithms: Linear/Logistic Regression, Decision Trees, Random Forests, XGBoost, and K-Means. Master cross-validation.',
        tools: ['Scikit-Learn', 'XGBoost', 'Seaborn'],
        skills: ['Feature Engineering', 'Model Evaluation (ROC-AUC, F1)', 'Hyperparameter Tuning', 'Ensemble Methods']
      },
      {
        step: 3,
        title: 'Phase 3: Deep Learning & NLP Fundamentals',
        duration: 'Month 3',
        description: 'Understand Artificial Neural Networks, backpropagation, CNNs for vision, and NLP techniques (tokenization, embeddings).',
        tools: ['PyTorch', 'Hugging Face', 'FastAPI'],
        skills: ['Neural Architectures', 'Transfer Learning', 'Text Processing', 'Embeddings']
      },
      {
        step: 4,
        title: 'Phase 4: MLOps, Containerization & Production Serving',
        duration: 'Month 4',
        description: 'Wrap models inside FastAPI REST endpoints, dockerize prediction servers, and implement data drift monitoring.',
        tools: ['Docker', 'MLflow', 'FastAPI', 'AWS'],
        skills: ['Model Serialization', 'API Serving', 'Containerized Deployment', 'Model Monitoring']
      }
    ],
    portfolioProjects: [
      'Customer Churn Prediction Engine with XGBoost, SHAP Interpretability, and FastAPI',
      'Automated Predictive Sales Forecasting Pipeline with Time Series Analysis'
    ],
    resumeTips: [
      'Quantify business impacts (e.g. "Predicted customer churn with 89% ROC-AUC, reducing retention outreach costs by 20%").',
      'Publish live Streamlit or FastAPI demo links alongside your code repositories.'
    ],
    commonMistakes: [
      'Focusing exclusively on complex neural networks while neglecting data cleaning and feature engineering.',
      'Failing to validate models with proper out-of-fold cross-validation, leading to severe data leakage.'
    ]
  },
  {
    id: 'mern-developer-roadmap',
    url: '/career/mern-developer-roadmap/',
    title: 'MERN Full Stack Developer Career Roadmap: React to Node & MongoDB',
    h1: 'The Complete MERN Full Stack Developer Roadmap',
    metaDescription: 'Step-by-step roadmap for MERN developers: Modern JavaScript, React 18, Node.js, Express, MongoDB, RESTful APIs, JWT, and Cloud Deployment.',
    category: 'Web',
    courseUrl: '/courses/mern-full-stack/index.html',
    timeline: [
      {
        step: 1,
        title: 'Phase 1: Modern JavaScript & Frontend UI Foundations',
        duration: 'Weeks 1-4',
        description: 'Master HTML5 semantics, CSS Grid/Flexbox, ES6+ features, asynchronous JavaScript (Promises, async/await), and DOM APIs.',
        tools: ['VS Code', 'Chrome DevTools', 'Git'],
        skills: ['Semantic HTML', 'Modern CSS', 'ES6+ Syntax', 'Asynchronous JS']
      },
      {
        step: 2,
        title: 'Phase 2: React.js & Client Application State',
        duration: 'Weeks 5-8',
        description: 'Build single-page apps with React: components, JSX, hooks (useState, useEffect, custom hooks), React Router, and state management.',
        tools: ['React 18', 'Vite', 'React Router DOM'],
        skills: ['Component Architecture', 'Hooks Lifecycle', 'Routing & Parameters', 'API Integration']
      },
      {
        step: 3,
        title: 'Phase 3: Backend APIs with Node.js & Express',
        duration: 'Weeks 9-12',
        description: 'Architect RESTful web services in Node.js: Express routing, middleware, JWT token authentication, and validation.',
        tools: ['Node.js', 'Express.js', 'Postman', 'JWT'],
        skills: ['RESTful Design', 'Middleware Pipelines', 'Authentication & Authorization', 'Error Handling']
      },
      {
        step: 4,
        title: 'Phase 4: MongoDB Persistence & Full Stack Deployment',
        duration: 'Weeks 13-16',
        description: 'Design NoSQL schemas with Mongoose ODM, write aggregation pipelines, connect React to Express, and deploy to cloud servers.',
        tools: ['MongoDB Atlas', 'Mongoose', 'Docker', 'Linux'],
        skills: ['Document Schemas', 'Aggregation Queries', 'CORS & Security', 'Production Hosting']
      }
    ],
    portfolioProjects: [
      'Collaborative Agile Project Workspace with Live Updates and Role-Based Permissions',
      'Full-Featured Digital Commerce Platform with Secure Checkout and Admin Dashboard'
    ],
    resumeTips: [
      'Demonstrate understanding of both client-side rendering bottlenecks and server-side throughput.',
      'Deploy full-stack apps to accessible cloud URLs so recruiters can test them directly.'
    ],
    commonMistakes: [
      'Storing sensitive credentials and JWT secrets directly in client-side code.',
      'Neglecting proper backend input sanitization and relying solely on frontend HTML form validation.'
    ]
  },
  {
    id: 'devops-engineer-roadmap',
    url: '/career/devops-engineer-roadmap/',
    title: 'DevOps Engineer Career Roadmap: Linux to Kubernetes & AWS Cloud',
    h1: 'The Complete DevOps & Cloud Infrastructure Roadmap',
    metaDescription: 'Step-by-step roadmap for DevOps engineers: Linux administration, Git branching, Docker, Jenkins CI/CD, Kubernetes, and AWS Cloud.',
    category: 'DevOps',
    courseUrl: '/courses/devops/index.html',
    timeline: [
      {
        step: 1,
        title: 'Phase 1: Linux Administration & Shell Scripting',
        duration: 'Month 1',
        description: 'Master command-line operations, file system hierarchy, permissions (chmod/chown), networking commands, and automated Bash scripts.',
        tools: ['Ubuntu Linux', 'Bash', 'SSH', 'Git'],
        skills: ['User Permissions', 'Process Management', 'Bash Automation', 'Network Diagnostics']
      },
      {
        step: 2,
        title: 'Phase 2: Containerization with Docker',
        duration: 'Month 2',
        description: 'Learn container architecture, Dockerfile instructions, multi-stage builds, Docker Compose multi-service stacks, and volumes.',
        tools: ['Docker Engine', 'Docker Compose', 'Docker Hub'],
        skills: ['Layer Optimization', 'Container Networking', 'Persistent Storage', 'Security Hardening']
      },
      {
        step: 3,
        title: 'Phase 3: CI/CD Pipelines with Jenkins & GitHub Actions',
        duration: 'Month 3',
        description: 'Build automated continuous integration and delivery pipelines: automated linting, testing, image building, and automated deployment.',
        tools: ['Jenkins', 'GitHub Actions', 'SonarQube'],
        skills: ['Pipeline as Code (Jenkinsfile)', 'Automated Testing', 'Artifact Management', 'Webhook Triggers']
      },
      {
        step: 4,
        title: 'Phase 4: Kubernetes Orchestration & AWS Cloud',
        duration: 'Month 4',
        description: 'Manage container clusters with Kubernetes: Pods, Deployments, Services, Ingress, and auto-scaling. Deploy on AWS cloud infrastructure.',
        tools: ['Kubernetes (kubectl)', 'Helm', 'AWS EC2/S3/VPC'],
        skills: ['Cluster Management', 'Service Routing & Ingress', 'Horizontal Pod Autoscaling', 'Cloud Architecture']
      }
    ],
    portfolioProjects: [
      'Zero-Downtime Rolling Deployment Pipeline on Kubernetes using Jenkins and Docker',
      'Automated Cloud Infrastructure Provisioning with Terraform on AWS'
    ],
    resumeTips: [
      'Highlight specific metrics: "Reduced deployment lead time from 45 minutes to 6 minutes through automated Jenkins pipelines."',
      'List concrete infrastructure tools: Linux, Docker, Kubernetes, Helm, AWS, Terraform.'
    ],
    commonMistakes: [
      'Trying to learn Kubernetes before having a rock-solid grasp of Linux networking and Docker containers.',
      'Treating security as an afterthought instead of embedding secret management and least-privilege policies early.'
    ]
  },
  {
    id: 'seo-specialist-roadmap',
    url: '/career/seo-specialist-roadmap/',
    title: 'SEO Specialist Career Roadmap: Technical SEO to Organic Growth Strategy',
    h1: 'The Complete Technical SEO & Search Marketing Roadmap',
    metaDescription: 'Step-by-step roadmap to becoming an SEO Specialist: Crawling mechanics, On-page optimization, Technical site audits, Schema.org, and Local SEO.',
    category: 'SEO',
    courseUrl: '/courses/seo/index.html',
    timeline: [
      {
        step: 1,
        title: 'Phase 1: Search Engine Mechanics & On-Page Fundamentals',
        duration: 'Month 1',
        description: 'Learn how Googlebot crawls, renders, and indexes pages. Master search intent classification, keyword research, meta titles, and semantic HTML.',
        tools: ['Google Search Console', 'Keyword Planner', 'Chrome DevTools'],
        skills: ['Search Intent Mapping', 'On-Page Architecture', 'Heading Hierarchy', 'Internal Linking']
      },
      {
        step: 2,
        title: 'Phase 2: Technical SEO & Core Web Vitals Optimization',
        duration: 'Month 2',
        description: 'Audit crawlability: robots.txt directives, XML sitemaps, status codes (301, 404), canonicalization, and Core Web Vitals (LCP, INP, CLS).',
        tools: ['Screaming Frog SEO Spider', 'PageSpeed Insights', 'Schema Validator'],
        skills: ['Crawl Budget Audit', 'Canonical Tag Strategy', 'JSON-LD Structured Data', 'Speed Optimization']
      },
      {
        step: 3,
        title: 'Phase 3: Local Search, Google Business Profile & Analytics',
        duration: 'Month 3',
        description: 'Master local SEO ranking signals, Google Business Profile optimization, local citations, NAP consistency, and GA4 event tracking.',
        tools: ['Google Business Profile', 'Google Analytics 4', 'Looker Studio'],
        skills: ['Local Map Pack Optimization', 'Citation Management', 'GA4 Organic Reporting', 'Conversion Tracking']
      }
    ],
    portfolioProjects: [
      'Complete Technical SEO Audit of a Live Web Platform with Crawl Error Fixes',
      'Local Business Organic Growth Strategy Delivering Verified SERP Visibility'
    ],
    resumeTips: [
      'Focus on tangible organic metrics (e.g. "Grew organic non-branded search impressions by 140% via topic clusters and schema").',
      'Demonstrate technical literacy: mention HTTP headers, structured data, and server response codes.'
    ],
    commonMistakes: [
      'Relying on keyword stuffing or outdated link-buying schemes that trigger search quality penalties.',
      'Treating SEO as separate from web development; modern SEO requires understanding HTML rendering and page speed.'
    ]
  }
];

module.exports = { ROADMAPS };
