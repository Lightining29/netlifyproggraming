/**
 * PROGRAMMINGWALA - Technology Comparisons Dataset
 * In-depth technical comparison matrices, execution models, and architectural trade-offs.
 */

const COMPARISONS = [
  {
    id: 'java-vs-python',
    url: '/comparisons/java-vs-python/',
    title: 'Java vs Python: In-Depth Technical & Career Comparison for 2026',
    h1: 'Java vs Python: Architecture, Performance, Ecosystem & Career Choices',
    metaDescription: 'Detailed technical comparison between Java and Python: static vs dynamic typing, JVM vs CPython execution, concurrency, enterprise use cases, and salaries.',
    courseUrls: [
      { name: 'Java Course', url: '/courses/java/index.html' },
      { name: 'Python Course', url: '/courses/python/index.html' }
    ],
    criteria: [
      { dimension: 'Typing System', java: 'Statically typed; checked at compile-time', python: 'Dynamically typed; checked at runtime (supports optional type hints)' },
      { dimension: 'Execution Speed', java: 'High performance via HotSpot JIT compiler to native machine code', python: 'Interpreted via CPython bytecode; slower for pure CPU loops' },
      { dimension: 'Concurrency Model', java: 'True multi-core threading + Java 21 Virtual Threads', python: 'Global Interpreter Lock (GIL) limits multi-threading for CPU tasks' },
      { dimension: 'Primary Use Cases', java: 'Enterprise backends, banking systems, Spring Boot microservices, Android', python: 'Data science, machine learning, automation, scripting, FastAPI/Django web' },
      { dimension: 'Learning Curve', java: 'Moderate; requires understanding OOP, types, and compiler rules', python: 'Gentle; readable syntax resembling English prose' }
    ],
    verdict: 'Choose Java if you aspire to build high-scale, transactional enterprise backends, banking systems, or large microservice architectures. Choose Python if you want to enter Data Science, Machine Learning, automated scripting, or rapid web API prototyping.'
  },
  {
    id: 'nodejs-vs-spring-boot',
    url: '/comparisons/nodejs-vs-spring-boot/',
    title: 'Node.js vs Spring Boot: Backend Architecture & Performance Comparison',
    h1: 'Node.js vs Spring Boot: Choosing the Right Backend Framework',
    metaDescription: 'Compare Node.js and Spring Boot: Event Loop vs Multi-threading, I/O performance, microservices, developer productivity, and enterprise scalability.',
    courseUrls: [
      { name: 'Node.js Course', url: '/courses/nodejs/index.html' },
      { name: 'Spring Boot Course', url: '/courses/spring-boot/index.html' }
    ],
    criteria: [
      { dimension: 'Runtime / Language', java: 'Java / Kotlin on the Java Virtual Machine', python: 'JavaScript / TypeScript on Google V8 Engine' },
      { dimension: 'Architecture', java: 'Thread-per-request / Virtual Threads with Spring Boot', python: 'Single-threaded event loop with non-blocking asynchronous I/O' },
      { dimension: 'Ecosystem Maturity', java: 'Over 20 years of battle-tested enterprise tooling (Spring, Hibernate)', python: 'Vast NPM package ecosystem with rapid modern innovations' },
      { dimension: 'CPU Heavy Tasks', java: 'Excellent multi-core CPU parallelism and optimized JVM garbage collectors', python: 'Poor for CPU-intensive tasks; blocks the main event loop' },
      { dimension: 'Startup Time & Memory', java: 'Higher memory footprint (typically 200MB - 500MB baseline)', python: 'Lightweight memory footprint (typically 50MB - 100MB baseline)' }
    ],
    verdict: 'Choose Spring Boot for complex domain logic, strict transactional integrity (ACID), and massive enterprise applications. Choose Node.js for real-time collaboration apps, streaming services, and lightweight I/O-bound REST APIs sharing code with a React frontend.'
  },
  {
    id: 'mongodb-vs-mysql',
    url: '/comparisons/mongodb-vs-mysql/',
    title: 'MongoDB vs MySQL: NoSQL Document Store vs Relational Database',
    h1: 'MongoDB vs MySQL: Schema Design, ACID, Queries & Scalability',
    metaDescription: 'Compare MongoDB and MySQL: BSON documents vs structured tables, SQL joins vs embedding, ACID transactions, and horizontal sharding.',
    courseUrls: [
      { name: 'MongoDB Course', url: '/courses/mongodb/index.html' },
      { name: 'MySQL Course', url: '/courses/mysql/index.html' }
    ],
    criteria: [
      { dimension: 'Data Model', java: 'Relational tables with strict schemas and foreign keys (MySQL)', python: 'Flexible JSON/BSON document collections (MongoDB)' },
      { dimension: 'Query Language', java: 'Standard SQL with complex multi-table JOIN support', python: 'MQL (MongoDB Query Language) and Aggregation Pipelines' },
      { dimension: 'ACID Compliance', java: 'Native, multi-row ACID transactions with strict isolation', python: 'Single-document atomic operations; multi-document ACID supported since v4.0' },
      { dimension: 'Scaling Strategy', java: 'Vertical scaling (bigger servers) or read replicas', python: 'Horizontal scaling via native sharding and replica sets' }
    ],
    verdict: 'Use MySQL when data has clear relationships, requires strict schema integrity, and demands bulletproof transactional guarantees (financial records, e-commerce checkouts). Use MongoDB when dealing with hierarchical data, polymorphic content models, or rapid schema iteration.'
  },
  {
    id: 'docker-vs-virtual-machine',
    url: '/comparisons/docker-vs-virtual-machine/',
    title: 'Docker vs Virtual Machine: Containers vs Hypervisors Explained',
    h1: 'Docker Containers vs Virtual Machines: Architecture & Performance',
    metaDescription: 'Comprehensive guide comparing Docker containers to Virtual Machines: kernel sharing, memory overhead, startup latency, and isolation security.',
    courseUrls: [
      { name: 'Docker Course', url: '/courses/docker/index.html' },
      { name: 'DevOps Course', url: '/courses/devops/index.html' }
    ],
    criteria: [
      { dimension: 'Architecture', java: 'Shares host OS kernel; isolates via namespaces & cgroups', python: 'Runs full guest OS on top of a Type-1 or Type-2 hypervisor' },
      { dimension: 'Startup Time', java: 'Milliseconds to seconds', python: 'Minutes (boots entire operating system)' },
      { dimension: 'Resource Overhead', java: 'Extremely lightweight; only consumes memory needed by the process', python: 'Heavy; reserves dedicated CPU cores, RAM, and gigabytes of storage' },
      { dimension: 'Isolation Level', java: 'Process-level isolation (shared kernel)', python: 'Hardware-level virtualization (fully isolated kernel)' }
    ],
    verdict: 'Containers win decisively for deploying modern microservices, CI/CD builds, and scalable web apps. Virtual Machines remain essential when you must run different operating system kernels on the same hardware or require strict hardware-isolated multi-tenant security.'
  },
  {
    id: 'data-science-vs-data-analytics',
    url: '/comparisons/data-science-vs-data-analytics/',
    title: 'Data Science vs Data Analytics: Skills, Tools, and Career Paths',
    h1: 'Data Science vs Data Analytics: Key Differences & Career Guide',
    metaDescription: 'Understand the difference between Data Science and Data Analytics: predictive modeling vs historical reporting, Python vs SQL/Excel, and salary outcomes.',
    courseUrls: [
      { name: 'Data Science Course', url: '/courses/data-science/index.html' },
      { name: 'SQL Course', url: '/courses/sql/index.html' }
    ],
    criteria: [
      { dimension: 'Primary Objective', java: 'Predictive modeling, machine learning algorithms, forecasting future outcomes', python: 'Descriptive & diagnostic analysis: understanding historical performance and trends' },
      { dimension: 'Core Toolset', java: 'Python, NumPy, Pandas, Scikit-Learn, PyTorch, Jupyter, Docker', python: 'SQL, Excel, Power BI, Tableau, Pandas, Google Analytics' },
      { dimension: 'Math Requirements', java: 'Linear algebra, calculus, advanced probability, algorithmic optimization', python: 'Descriptive statistics, percentages, ratios, hypothesis testing' },
      { dimension: 'Typical Questions', java: '"Which customers are likely to churn next month and what features predict it?"', python: '"Why did customer churn increase by 12% in Q3 in North India?"' }
    ],
    verdict: 'If you enjoy business intelligence, dashboard storytelling, and querying databases to understand what happened, start with Data Analytics. If you want to code predictive algorithms and deploy automated machine learning models, choose Data Science.'
  }
];

module.exports = { COMPARISONS };
