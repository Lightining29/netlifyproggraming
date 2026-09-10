/**
 * PROGRAMMINGWALA - Complete 300-Page Catalog Engine
 * Generates distinct, high-quality, comprehensive educational and career pages.
 */

const { COURSES } = require('./courses');
const { LOCAL_PAGES } = require('./local-pages');
const { TUTORIALS } = require('./tutorials');
const { INTERVIEW_TOPICS } = require('./interviews');
const { ROADMAPS } = require('./roadmaps');
const { COMPARISONS } = require('./comparisons');

function buildFullCatalog() {
  const catalog = [];

  // 1. CORE COURSES (40+ pages)
  for (const course of COURSES) {
    catalog.push({
      type: 'course',
      url: `/courses/${course.id}/`,
      title: course.seoTitle || `${course.title} | Appletree Infotech`,
      metaDescription: course.description,
      h1: course.h1,
      category: course.category,
      courseData: course,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Courses', url: `/courses/${course.id}/index.html` },
        { name: course.title, url: `/courses/${course.id}/index.html` }
      ],
      schemaType: 'Course'
    });
  }

  // 2. ADDITIONAL SPECIALIZED COURSE TRACKS
  const additionalCourses = [
    { id: 'html', title: 'HTML5 & Semantic Web Development Course', category: 'Web Development', tag: 'Frontend Base', duration: '4 Weeks' },
    { id: 'css', title: 'Modern CSS3, Flexbox & CSS Grid Masterclass', category: 'Web Development', tag: 'Styling', duration: '6 Weeks' },
    { id: 'expressjs', title: 'Express.js Web Framework & API Architecture', category: 'Web Development', tag: 'Backend Node', duration: '6 Weeks' },
    { id: 'full-stack-development', title: 'Full Stack Software Engineering Career Track', category: 'Web Development', tag: 'Comprehensive', duration: '20 Weeks' },
    { id: 'frontend-development', title: 'Frontend Engineering & UI Architecture Course', category: 'Web Development', tag: 'UI Specialization', duration: '12 Weeks' },
    { id: 'backend-development', title: 'Backend Software Engineering & Distributed Systems', category: 'Web Development', tag: 'API & Systems', duration: '14 Weeks' },
    { id: 'rest-api', title: 'RESTful API Design, Security & Architecture Course', category: 'Web Development', tag: 'API Standards', duration: '6 Weeks' },
    { id: 'core-java', title: 'Core Java Foundations & OOP Mechanics Course', category: 'Java', tag: 'JVM Base', duration: '8 Weeks' },
    { id: 'advanced-java', title: 'Advanced Java: Concurrency, Streams & Reflection', category: 'Java', tag: 'Enterprise', duration: '8 Weeks' },
    { id: 'java-collections', title: 'Java Collections Framework Deep Dive Course', category: 'Java', tag: 'Data Structures', duration: '4 Weeks' },
    { id: 'java-multithreading', title: 'Java Concurrency, Thread Pools & Virtual Threads', category: 'Java', tag: 'High Concurrency', duration: '6 Weeks' },
    { id: 'hibernate', title: 'Hibernate ORM & JPA Relational Persistence Course', category: 'Java', tag: 'ORM Mapping', duration: '6 Weeks' },
    { id: 'jpa', title: 'Jakarta Persistence API (JPA) Architecture Course', category: 'Java', tag: 'Database Persistence', duration: '4 Weeks' },
    { id: 'microservices', title: 'Microservices Architecture & Distributed Systems', category: 'Java', tag: 'Cloud Native', duration: '10 Weeks' },
    { id: 'django', title: 'Django Full-Stack Web Development Course', category: 'Python', tag: 'Python Framework', duration: '8 Weeks' },
    { id: 'flask', title: 'Flask Microframework & RESTful Services Course', category: 'Python', tag: 'Lightweight Backend', duration: '6 Weeks' },
    { id: 'fastapi', title: 'FastAPI High-Performance Asynchronous Python Course', category: 'Python', tag: 'Modern Async', duration: '6 Weeks' },
    { id: 'python-automation', title: 'Python Automation, Scripting & Web Scraping', category: 'Python', tag: 'Productivity', duration: '6 Weeks' },
    { id: 'data-analytics', title: 'Data Analytics with SQL, Python & Business Dashboards', category: 'Data', tag: 'Analytics', duration: '12 Weeks' },
    { id: 'machine-learning', title: 'Machine Learning Algorithms & Model Engineering Course', category: 'Data', tag: 'Predictive ML', duration: '14 Weeks' },
    { id: 'artificial-intelligence', title: 'Artificial Intelligence Foundations & Modern AI Models', category: 'Data', tag: 'AI Systems', duration: '16 Weeks' },
    { id: 'deep-learning', title: 'Deep Learning with PyTorch & Neural Networks Course', category: 'Data', tag: 'Deep Learning', duration: '12 Weeks' },
    { id: 'mysql', title: 'MySQL Database Administration & Performance Tuning', category: 'Database', tag: 'RDBMS', duration: '8 Weeks' },
    { id: 'postgresql', title: 'PostgreSQL Advanced Relational Architecture Course', category: 'Database', tag: 'Advanced SQL', duration: '8 Weeks' },
    { id: 'redis', title: 'Redis In-Memory Caching & Real-Time Data Architecture', category: 'Database', tag: 'Key-Value Cache', duration: '4 Weeks' },
    { id: 'database-design', title: 'Relational Database Schema Design & Normalization', category: 'Database', tag: 'Data Modeling', duration: '6 Weeks' },
    { id: 'linux', title: 'Linux Administration, Shell Scripting & CLI Fundamentals', category: 'DevOps', tag: 'Systems OS', duration: '6 Weeks' },
    { id: 'git', title: 'Git Version Control & GitHub Collaborative Workflows', category: 'DevOps', tag: 'Version Control', duration: '4 Weeks' },
    { id: 'jenkins', title: 'Jenkins CI/CD Automation & Build Pipelines Course', category: 'DevOps', tag: 'CI/CD Engine', duration: '6 Weeks' },
    { id: 'ci-cd', title: 'Continuous Integration & Continuous Delivery Architecture', category: 'DevOps', tag: 'DevOps Pipeline', duration: '6 Weeks' },
    { id: 'cloud-computing', title: 'Cloud Computing Architecture & Multi-Cloud Fundamentals', category: 'Cloud', tag: 'Cloud Overview', duration: '8 Weeks' },
    { id: 'ethical-hacking', title: 'Ethical Hacking & Penetration Testing Course', category: 'Security', tag: 'Offensive Security', duration: '10 Weeks' },
    { id: 'technical-seo', title: 'Technical SEO Auditing & Core Web Vitals Optimization', category: 'SEO', tag: 'Technical Search', duration: '6 Weeks' },
    { id: 'csharp', title: 'C# Programming Language & .NET Core Development', category: 'Programming', tag: '.NET Stack', duration: '10 Weeks' },
    { id: 'php', title: 'PHP & MySQL Modern Web Application Development', category: 'Programming', tag: 'Web Backend', duration: '8 Weeks' },
    { id: 'kotlin', title: 'Kotlin Programming & Android App Architecture', category: 'Programming', tag: 'Modern Mobile', duration: '10 Weeks' },
    { id: 'go', title: 'Golang (Go) Systems & Cloud Microservices Course', category: 'Programming', tag: 'Cloud Systems', duration: '10 Weeks' },
    { id: 'rust', title: 'Rust Systems Programming & Memory Safety Course', category: 'Programming', tag: 'Systems Safety', duration: '12 Weeks' }
  ];

  for (const c of additionalCourses) {
    catalog.push({
      type: 'sub-course',
      url: `/courses/${c.id}/`,
      title: `${c.title} in Ghaziabad | Appletree Infotech`,
      metaDescription: `Master ${c.title}. In-depth hands-on curriculum, practical projects, code reviews, and career coaching at our RDC Ghaziabad campus.`,
      h1: `${c.title}`,
      category: c.category,
      badge: c.tag,
      duration: c.duration,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Courses', url: `/courses/${c.id}/index.html` },
        { name: c.title, url: `/courses/${c.id}/index.html` }
      ],
      schemaType: 'Course'
    });
  }

  // 3. GHAZIABAD LOCAL PAGES (14 pages)
  for (const loc of LOCAL_PAGES) {
    catalog.push({
      type: 'local',
      url: loc.url,
      title: loc.title,
      metaDescription: loc.metaDescription,
      h1: loc.h1,
      category: 'Ghaziabad Training Center',
      breadcrumbs: loc.breadcrumb,
      rawContent: loc.content,
      schemaType: 'LocalBusiness'
    });
  }

  // 4. TUTORIALS (130+ pages)
  // Base tutorials from data file
  for (const tut of TUTORIALS) {
    catalog.push({
      type: 'tutorial',
      url: tut.url,
      title: `${tut.title} | Appletree Infotech`,
      metaDescription: tut.metaDescription,
      h1: tut.h1,
      category: tut.category,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Tutorials', url: '/tutorials/java/hashmap/index.html' },
        { name: tut.title, url: tut.url }
      ],
      tutData: tut,
      schemaType: 'TechArticle'
    });
  }

  // Additional 80+ tutorials across categories to reach comprehensive depth
  const extendedTutorialList = [
    // Java
    { cat: 'java', sub: 'optional', title: 'Java Optional Class Best Practices and Anti-Patterns', h1: 'Java Optional Class: Handling Nulls Gracefully without NullPointerExceptions' },
    { cat: 'java', sub: 'generics', title: 'Java Generics in Depth: Type Erasure, Wildcards and PECL', h1: 'Java Generics Tutorial: Invariance, Covariance & Type Bounds' },
    { cat: 'java', sub: 'reflection', title: 'Java Reflection API: Dynamic Inspection, Annotations and Costs', h1: 'Java Reflection Explained: Classes, Methods, Fields & Performance' },
    { cat: 'java', sub: 'exception-handling', title: 'Java Exception Hierarchy: Checked vs Unchecked Exceptions', h1: 'Java Exception Handling: try-with-resources, Multi-Catch & Custom Exceptions' },
    { cat: 'java', sub: 'jdbc-connection-pooling', title: 'JDBC Connection Pooling with HikariCP in Java Applications', h1: 'Configuring HikariCP for High-Throughput Relational Database Persistence' },
    { cat: 'java', sub: 'spring-boot-crud', title: 'Spring Boot 3 CRUD REST API Tutorial with Spring Data JPA', h1: 'Complete Spring Boot 3 CRUD Application Step-by-Step' },
    { cat: 'java', sub: 'hibernate-mappings', title: 'Hibernate Entity Relationships: OneToOne, OneToMany and ManyToMany', h1: 'Hibernate Entity Mapping Guide: Ownership, Cascades & Orphan Removal' },
    { cat: 'java', sub: 'jvm-tuning', title: 'JVM Performance Tuning: Heap Sizing, GC Logs and Memory Dumps', h1: 'Practical JVM Tuning for Production Microservices' },
    { cat: 'java', sub: 'concurrency-executors', title: 'Java ExecutorService & ThreadPoolExecutor Configuration', h1: 'Mastering Java Thread Pools: Sizing, Rejection Policies & Futures' },
    { cat: 'java', sub: 'records-sealed-classes', title: 'Java Records, Sealed Classes and Pattern Matching for Switch', h1: 'Modern Java Data Modeling with Records and Sealed Hierarchies' },
    { cat: 'java', sub: 'completable-future', title: 'Java CompletableFuture: Asynchronous Non-Blocking Pipelines', h1: 'Asynchronous Programming in Java using CompletableFuture' },
    { cat: 'java', sub: 'spring-security-jwt', title: 'Spring Security 6 Stateless JWT Authentication Step-by-Step', h1: 'Implementing JWT Token Authentication in Spring Boot 3' },

    // Python
    { cat: 'python', sub: 'generators', title: 'Python Generators & Yield Keyword: Memory-Efficient Streaming', h1: 'Understanding Python Generators, Iterators and Yield Mechanics' },
    { cat: 'python', sub: 'context-managers', title: 'Python Context Managers & with Statement: Custom Implementations', h1: 'Mastering Python Context Managers and contextlib' },
    { cat: 'python', sub: 'list-comprehensions', title: 'Python List, Dict and Set Comprehensions Explained', h1: 'Python Comprehensions: Expressive, High-Speed Iterable Filtering' },
    { cat: 'python', sub: 'asyncio', title: 'Python Asyncio & Event Loop: Asynchronous I/O Programming', h1: 'Python Asynchronous Programming with Asyncio, Coroutines and Tasks' },
    { cat: 'python', sub: 'numpy-arrays', title: 'NumPy Vectorized Computation: Arrays, Broadcasting and Indexing', h1: 'NumPy Arrays & Mathematical Computing for Data Science' },
    { cat: 'python', sub: 'matplotlib-data-visualization', title: 'Data Visualization in Python with Matplotlib and Seaborn', h1: 'Creating Professional Statistical Charts with Matplotlib & Seaborn' },
    { cat: 'python', sub: 'scikit-learn-pipeline', title: 'Scikit-Learn ML Pipelines: Scaling, Encoding and Training', h1: 'Building Reproducible Machine Learning Pipelines in Scikit-Learn' },
    { cat: 'python', sub: 'fastapi-dependency-injection', title: 'FastAPI Dependency Injection System & Security Schemes', h1: 'FastAPI Dependency Injection: Reusable Services and Auth Guards' },
    { cat: 'python', sub: 'django-orm-optimization', title: 'Django ORM Query Optimization: select_related and prefetch_related', h1: 'Eliminating N+1 Queries in Django ORM with Prefetching' },
    { cat: 'python', sub: 'pydantic-validation', title: 'Pydantic V2 Data Validation and Serialization in Python', h1: 'Type-Safe Data Schemas with Pydantic V2 in Python' },
    { cat: 'python', sub: 'pytest-fixtures', title: 'Automated Testing with PyTest: Fixtures, Parameterization and Mocks', h1: 'Writing Reliable Automated Test Suites in Python using PyTest' },
    { cat: 'python', sub: 'python-multiprocessing', title: 'Python Multiprocessing: Bypassing the GIL for Multi-Core CPUs', h1: 'Parallel CPU Execution in Python using the Multiprocessing Module' },

    // Web & JS
    { cat: 'web', sub: 'promises-async-await', title: 'JavaScript Promises and Async/Await Under the Hood', h1: 'Mastering JavaScript Promises, Async/Await and Error Handling' },
    { cat: 'web', sub: 'dom-manipulation-performance', title: 'High-Performance DOM Manipulation: Virtualization & Repaints', h1: 'Minimizing Reflows and Repaints in Modern Vanilla JavaScript' },
    { cat: 'web', sub: 'css-grid-vs-flexbox', title: 'CSS Grid vs Flexbox: When to Use 1D vs 2D Layout Systems', h1: 'CSS Grid vs Flexbox: Practical Layout Architecture Comparison' },
    { cat: 'web', sub: 'react-custom-hooks', title: 'Writing Reusable Custom React Hooks: Patterns & Rules', h1: 'Creating Robust Custom React Hooks for Shared Logic' },
    { cat: 'web', sub: 'react-context-vs-redux', title: 'React Context API vs Redux Toolkit for State Management', h1: 'State Management Architecture: React Context vs Redux Toolkit' },
    { cat: 'web', sub: 'node-streams-buffers', title: 'Node.js Streams and Buffers: Processing Gigabyte Files', h1: 'Handling Large Data Streams and Buffers Efficiently in Node.js' },
    { cat: 'web', sub: 'express-middleware-security', title: 'Securing Express.js Applications: Helmet, CORS & Rate Limits', h1: 'Production Security Hardening for Express.js APIs' },
    { cat: 'web', sub: 'rest-api-design-principles', title: 'RESTful API Design Standards: HTTP Status Codes, URIs & Versioning', h1: 'Architectural Principles for Clean, Scalable REST APIs' },
    { cat: 'web', sub: 'jwt-authentication-flow', title: 'JSON Web Token (JWT) Authentication Architecture and Refresh Tokens', h1: 'Secure JWT Authentication Flow with Access & Refresh Tokens' },
    { cat: 'web', sub: 'css-custom-properties', title: 'CSS Custom Properties (Variables) & Modern Design Systems', h1: 'Building Dynamic Responsive Theming with CSS Variables' },
    { cat: 'web', sub: 'web-accessibility-wcag', title: 'Web Accessibility (a11y): Semantic HTML, ARIA & Keyboard Focus', h1: 'Building WCAG AA Accessible Web Applications Step-by-Step' },
    { cat: 'web', sub: 'react-virtual-dom', title: 'How the React Virtual DOM Works: Reconciliation and Fiber', h1: 'Understanding the React Reconciliation Algorithm & Fiber Architecture' },

    // Database & SQL
    { cat: 'database', sub: 'acid-properties', title: 'ACID Properties in Relational Database Management Systems (RDBMS)', h1: 'ACID Explained: Atomicity, Consistency, Isolation & Durability' },
    { cat: 'database', sub: 'mongodb-aggregation-pipeline', title: 'MongoDB Aggregation Framework: $match, $group and $lookup', h1: 'Mastering the MongoDB Aggregation Pipeline with Real Queries' },
    { cat: 'database', sub: 'postgresql-indexing', title: 'PostgreSQL Indexing: B-Tree, GIN, GiST and Partial Indexes', h1: 'Optimizing PostgreSQL Query Performance with Specialized Indexes' },
    { cat: 'database', sub: 'redis-caching-patterns', title: 'Redis Caching Strategies: Cache-Aside, Write-Through & Eviction', h1: 'High-Speed In-Memory Caching Architecture with Redis' },
    { cat: 'database', sub: 'database-normalization', title: 'Database Normalization: 1NF, 2NF, 3NF and BCNF Explained', h1: 'Relational Database Schema Normalization Guidelines' },
    { cat: 'database', sub: 'query-optimization', title: 'SQL Query Optimization: Avoiding Full Table Scans and Filesorts', h1: 'How to Analyze and Speed Up Slow SQL Queries Using EXPLAIN' },
    { cat: 'database', sub: 'nosql-vs-sql-data-modeling', title: 'Data Modeling in NoSQL vs Relational Databases', h1: 'Schema Design Trade-offs: Embedding vs Referencing in Databases' },
    { cat: 'database', sub: 'database-transactions-isolation', title: 'SQL Transaction Isolation Levels: Dirty Reads, Non-Repeatable Reads', h1: 'Understanding Read Committed, Repeatable Read and Serializable Isolation' },

    // DevOps & Cloud
    { cat: 'devops', sub: 'dockerfile-best-practices', title: 'Dockerfile Optimization Best Practices: Caching, Layers & Security', h1: 'Writing Production-Grade, Lightweight Dockerfiles' },
    { cat: 'devops', sub: 'jenkins-cicd-pipeline', title: 'Jenkins CI/CD Declarative Pipeline Tutorial with Git & Docker', h1: 'Creating Automated Continuous Delivery Pipelines with Jenkins' },
    { cat: 'devops', sub: 'kubernetes-pods-deployments', title: 'Kubernetes Pods, ReplicaSets and Deployments Explained', h1: 'Managing Resilient Workloads in Kubernetes with Deployments' },
    { cat: 'devops', sub: 'kubernetes-services-ingress', title: 'Kubernetes Networking: ClusterIP, NodePort, LoadBalancer & Ingress', h1: 'Routing Traffic to Kubernetes Pods via Services and Ingress' },
    { cat: 'devops', sub: 'git-branching-strategies', title: 'Git Branching Strategies: GitFlow, Trunk-Based Development & Rebasing', h1: 'Professional Git Branching and Release Management Strategies' },
    { cat: 'devops', sub: 'linux-file-permissions', title: 'Linux File Permissions: chmod, chown, SUID and Octal Notation', h1: 'Mastering Linux Permissions, Ownership and User Access Controls' },
    { cat: 'devops', sub: 'aws-ec2-deployment', title: 'Deploying Applications to AWS EC2: Security Groups, SSH & Nginx', h1: 'Step-by-Step Application Deployment on AWS EC2 Instances' },
    { cat: 'devops', sub: 'aws-s3-security', title: 'AWS S3 Bucket Policies, Access Control Lists and Encryption', h1: 'Securing Cloud Object Storage with AWS S3 Best Practices' },
    { cat: 'devops', sub: 'terraform-infrastructure-as-code', title: 'Terraform Infrastructure as Code (IaC): Providers, State & Modules', h1: 'Automating Cloud Infrastructure Provisioning with Terraform' },
    { cat: 'devops', sub: 'nginx-reverse-proxy', title: 'Configuring Nginx as a Reverse Proxy and Load Balancer', h1: 'Nginx Reverse Proxy Configuration for Node and Spring Boot Services' },

    // SEO & Digital Marketing
    { cat: 'seo', sub: 'keyword-research-strategy', title: 'Keyword Research for Technical Sites: Search Intent & Difficulty', h1: 'Step-by-Step Keyword Research Strategy for Organic Traffic' },
    { cat: 'seo', sub: 'internal-linking-mastery', title: 'Internal Linking Architecture: Topic Clusters and PageRank Flow', h1: 'Building Powerful Topic Clusters through Strategic Internal Links' },
    { cat: 'seo', sub: 'schema-markup-jsonld', title: 'Schema.org Structured Data with JSON-LD: Course and Article Types', h1: 'Implementing and Validating Rich Schema Markup with JSON-LD' },
    { cat: 'seo', sub: 'xml-sitemap-optimization', title: 'XML Sitemap Optimization: Structure, Indexing and Submission', h1: 'Creating Clean, Valid XML Sitemaps for Search Engine Crawlers' },
    { cat: 'seo', sub: 'robots-txt-rules', title: 'robots.txt Configuration: Crawl Directives and Common Errors', h1: 'Writing and Testing robots.txt Directives for Optimal Crawling' },
    { cat: 'seo', sub: 'core-web-vitals-optimization', title: 'Core Web Vitals Optimization: Improving LCP, INP and CLS Scores', h1: 'Diagnosing and Fixing Core Web Vitals Performance Bottlenecks' },
    { cat: 'seo', sub: 'canonical-tags-guide', title: 'Canonical Tags (rel="canonical") Implementation & Common Mistakes', h1: 'How to Prevent Duplicate Content Issues Using Canonical Tags' },
    { cat: 'seo', sub: 'meta-tags-best-practices', title: 'SEO Meta Tags: Writing Click-Worthy Titles & Descriptions', h1: 'Crafting High-CTR Meta Titles and Descriptions for Search' },
    { cat: 'seo', sub: 'local-seo-google-business-profile', title: 'Local SEO Strategy: Google Business Profile & Local Citation Signals', h1: 'Optimizing Local Search Visibility with Google Business Profile' },
    { cat: 'seo', sub: 'ecommerce-seo-architecture', title: 'E-Commerce SEO Architecture: Faceted Navigation & Product Schemas', h1: 'Technical SEO for Online Stores and E-Commerce Platforms' },
    { cat: 'seo', sub: 'search-console-coverage-errors', title: 'Fixing Google Search Console Coverage and Indexing Errors', h1: 'Diagnosing and Resolving Indexing Errors in Search Console' },

    // DSA & Algorithms
    { cat: 'dsa', sub: 'time-complexity-big-o', title: 'Big-O Notation & Algorithm Complexity Analysis Explained', h1: 'Understanding Big-O, Space Complexity and Algorithmic Efficiency' },
    { cat: 'dsa', sub: 'binary-search-tree', title: 'Binary Search Tree (BST) Operations: Insertion, Deletion & Traversal', h1: 'Binary Search Tree Algorithms and Balancing Fundamentals' },
    { cat: 'dsa', sub: 'dynamic-programming-memoization', title: 'Dynamic Programming: Memoization vs Tabulation Techniques', h1: 'Mastering Dynamic Programming Patterns for Technical Interviews' },
    { cat: 'dsa', sub: 'graph-traversal-bfs-dfs', title: 'Graph Algorithms: Breadth-First Search (BFS) and Depth-First Search (DFS)', h1: 'Graph Traversal Algorithms: BFS, DFS and Shortest Path Logic' },
    { cat: 'dsa', sub: 'trie-data-structure', title: 'Trie (Prefix Tree) Data Structure Implementation and Autocomplete', h1: 'Implementing a Trie for Fast String Searching & Autocomplete' },
    { cat: 'dsa', sub: 'kadanes-algorithm', title: 'Kadane Algorithm Explained: Maximum Subarray Problem', h1: 'Kadane Algorithm: Solving the Maximum Subarray Sum in O(n) Time' },
    { cat: 'dsa', sub: 'dijkstra-shortest-path', title: 'Dijkstra Shortest Path Algorithm: Adjacency List & PriorityQueue', h1: 'Dijkstra Algorithm: Finding Shortest Paths in Weighted Graphs' },
    { cat: 'dsa', sub: 'lru-cache-implementation', title: 'LRU Cache Design: Doubly Linked List and HashMap in O(1)', h1: 'Designing a Least Recently Used (LRU) Cache in Constant Time' },
    { cat: 'dsa', sub: 'two-sum-three-sum-patterns', title: 'Two Sum and 3Sum Problem Strategies: Hash Table & Two Pointers', h1: 'Solving Two Sum and 3Sum: Optimal Two Pointer Patterns' },
    { cat: 'dsa', sub: 'merge-intervals-pattern', title: 'Merge Intervals Pattern: Interval Overlap & Sorting Strategies', h1: 'Mastering the Merge Intervals Algorithmic Pattern' },
    { cat: 'dsa', sub: 'topological-sort-dag', title: 'Topological Sort for Directed Acyclic Graphs (DAG): Kahn Algorithm', h1: 'Topological Sorting & Dependency Resolution in Graphs' },
    { cat: 'dsa', sub: 'sliding-window-maximum', title: 'Sliding Window Maximum using Deque in O(n) Time', h1: 'Solving Sliding Window Problems with Monotonic Deques' },
    { cat: 'dsa', sub: 'floyds-cycle-detection', title: 'Floyd Cycle Finding Algorithm: Fast and Slow Pointers', h1: 'Detecting Cycles in Linked Lists using Fast and Slow Pointers' },
    { cat: 'dsa', sub: 'monotonic-stack-patterns', title: 'Monotonic Stack Explained: Next Greater Element Problems', h1: 'Solving Next Greater Element with Monotonic Stacks' },
    { cat: 'dsa', sub: 'coin-change-dp', title: 'Coin Change Problem: Minimum Coins & Number of Ways with DP', h1: 'Solving the Coin Change Problem using Dynamic Programming' },

    // Advanced Java & Spring
    { cat: 'java', sub: 'java-memory-model-volatile', title: 'Java Memory Model (JMM) and Happens-Before Guarantee', h1: 'Understanding the Java Memory Model, Instruction Reordering & Volatile' },
    { cat: 'java', sub: 'java-21-pattern-matching', title: 'Java 21 Pattern Matching for Switch and Record Destructuring', h1: 'Modern Java Pattern Matching and Exhaustive Switch Expressions' },
    { cat: 'java', sub: 'java-sequenced-collections', title: 'Java 21 Sequenced Collections: SequencedSet, SequencedMap', h1: 'Working with Java 21 Sequenced Collections and Reverse Traversals' },
    { cat: 'java', sub: 'fork-join-framework', title: 'Java ForkJoinPool and Work-Stealing Algorithm Architecture', h1: 'High-Throughput Parallelism with the Java ForkJoinPool' },
    { cat: 'java', sub: 'spring-boot-actuator-metrics', title: 'Spring Boot Actuator & Micrometer: Production Health Checks', h1: 'Monitoring Production Spring Boot Applications with Actuator' },
    { cat: 'java', sub: 'spring-cloud-openfeign', title: 'Spring Cloud OpenFeign: Declarative REST Clients for Microservices', h1: 'Building Declarative Microservice Clients with Spring Cloud OpenFeign' },
    { cat: 'java', sub: 'hibernate-caching-levels', title: 'Hibernate First-Level vs Second-Level Cache Architecture', h1: 'Optimizing Database Queries with Hibernate First and Second-Level Caching' },
    { cat: 'java', sub: 'hibernate-locking-strategies', title: 'Hibernate Optimistic vs Pessimistic Locking with JPA', h1: 'Preventing Lost Updates with Optimistic and Pessimistic Locking' },

    // Advanced Web, JS & Security
    { cat: 'web', sub: 'web-workers-multithreading', title: 'Web Workers in JavaScript: Offloading Heavy Computations from UI', h1: 'Multithreading in the Browser with JavaScript Web Workers' },
    { cat: 'web', sub: 'service-workers-offline-caching', title: 'Service Workers & Progressive Web App (PWA) Offline Caching', h1: 'Implementing Offline Caching with Modern Service Workers' },
    { cat: 'web', sub: 'intersection-observer-lazy-loading', title: 'Intersection Observer API: Lazy Loading Images & Infinite Scroll', h1: 'High-Performance Lazy Loading with the Intersection Observer API' },
    { cat: 'web', sub: 'websockets-vs-server-sent-events', title: 'WebSockets vs Server-Sent Events (SSE): Choosing Real-Time Protocol', h1: 'Real-Time Communication: WebSockets vs Server-Sent Events (SSE)' },
    { cat: 'web', sub: 'content-security-policy-csp', title: 'Content Security Policy (CSP): Preventing XSS & Data Injections', h1: 'Hardening Web Security with Strict Content Security Policy Headers' },
    { cat: 'web', sub: 'cors-headers-deep-dive', title: 'Cross-Origin Resource Sharing (CORS): Preflight OPTIONS & Headers', h1: 'Demystifying CORS: Preflight Requests, Access-Control Headers & Fixes' },
    { cat: 'web', sub: 'oauth2-openid-connect', title: 'OAuth 2.0 & OpenID Connect (OIDC) Authorization Code Flow', h1: 'Understanding OAuth 2.0 and OpenID Connect Token Exchange Flows' },
    { cat: 'web', sub: 'node-cluster-module', title: 'Node.js Cluster Module: Scaling Applications Across All CPU Cores', h1: 'Multi-Core Process Scaling with the Node.js Cluster Module' },

    // Advanced Data, DevOps & SEO
    { cat: 'database', sub: 'postgresql-mvcc-mechanics', title: 'PostgreSQL MVCC (Multi-Version Concurrency Control) Mechanics', h1: 'How PostgreSQL MVCC Prevents Reader/Writer Locking' },
    { cat: 'database', sub: 'redis-pub-sub-vs-streams', title: 'Redis Pub/Sub vs Redis Streams for Event-Driven Messaging', h1: 'Choosing Between Redis Pub/Sub and Redis Streams Architecture' },
    { cat: 'database', sub: 'database-sharding-vs-partitioning', title: 'Database Sharding vs Partitioning: Horizontal Scaling Strategies', h1: 'Scaling High-Volume Databases: Sharding vs Table Partitioning' },
    { cat: 'devops', sub: 'docker-compose-healthchecks', title: 'Docker Compose Healthchecks, depends_on and Service Startup Order', h1: 'Ensuring Reliable Service Startup with Docker Compose Healthchecks' },
    { cat: 'devops', sub: 'k8s-hpa-autoscaling', title: 'Kubernetes Horizontal Pod Autoscaler (HPA) Tuning with Metrics', h1: 'Configuring Automatic Cluster Scaling with Kubernetes HPA' },
    { cat: 'devops', sub: 'aws-lambda-cold-starts', title: 'Reducing AWS Lambda Cold Starts: Provisioned Concurrency & Tuning', h1: 'Optimizing AWS Lambda Serverless Performance and Cold Starts' },
    { cat: 'devops', sub: 'aws-s3-presigned-urls', title: 'Generating AWS S3 Presigned URLs for Secure Direct Client Uploads', h1: 'Secure File Uploads with AWS S3 Presigned URLs' },
    { cat: 'seo', sub: 'inp-core-web-vital-optimization', title: 'Interaction to Next Paint (INP) Optimization: JavaScript Main Thread', h1: 'Diagnosing and Optimizing Interaction to Next Paint (INP) for SEO' },
    { cat: 'seo', sub: 'faceted-navigation-seo-traps', title: 'Faceted Navigation SEO: Preventing Crawl Traps & Duplicate Content', h1: 'Managing E-Commerce Faceted Navigation and Crawl Budget' },
    { cat: 'seo', sub: 'hreflang-international-seo', title: 'Hreflang Tags Implementation for Multi-Regional and Multi-Language Sites', h1: 'Mastering International SEO with Correct Hreflang Configuration' },
    { cat: 'java', sub: 'gc-tuning-g1-zgc', title: 'Garbage Collection Tuning in Production: G1 vs ZGC Flags', h1: 'JVM Garbage Collection Tuning: Heap Sizing & Pause Time Flags' },
    { cat: 'java', sub: 'memory-leaks-heap-dump-analysis', title: 'Diagnosing Java Memory Leaks: Heap Dump Analysis with VisualVM', h1: 'Detecting and Resolving Java Memory Leaks using Heap Dumps' },
    { cat: 'python', sub: 'python-descriptors-internals', title: 'Python Descriptors Explained: __get__, __set__ and Property Mechanics', h1: 'Understanding Python Descriptors & Custom Attribute Binding' },
    { cat: 'python', sub: 'python-tracemalloc-profiling', title: 'Python Memory Profiling with tracemalloc and Memory Leak Detection', h1: 'Profiling Python Memory Usage and Detecting Leaks' },
    { cat: 'web', sub: 'javascript-detached-dom-leaks', title: 'JavaScript Memory Leaks: Detached DOM Elements & Event Listeners', h1: 'Finding and Fixing JavaScript Memory Leaks in Single Page Apps' },
    { cat: 'web', sub: 'micro-frontends-module-federation', title: 'Micro-Frontends Architecture with Webpack Module Federation', h1: 'Architecting Scalable Micro-Frontends with Module Federation' },
    { cat: 'database', sub: 'recursive-sql-ctes-trees', title: 'Recursive SQL Common Table Expressions (CTEs) for Hierarchical Data', h1: 'Querying Tree Structures with Recursive Common Table Expressions' },
    { cat: 'database', sub: 'mysql-deadlock-resolution', title: 'MySQL Deadlocks: Detection, Analysis and Lock Granularity', h1: 'Analyzing and Preventing Database Deadlocks in MySQL InnoDB' },
    { cat: 'database', sub: 'mongodb-change-streams', title: 'MongoDB Change Streams: Real-Time Event Driven Data Sync', h1: 'Building Real-Time Data Pipelines with MongoDB Change Streams' },
    { cat: 'devops', sub: 'docker-buildkit-secrets', title: 'Docker BuildKit: Secure Build Secrets and SSH Forwarding', h1: 'Handling Build Secrets Safely with Docker BuildKit' },
    { cat: 'devops', sub: 'k8s-network-policies-security', title: 'Kubernetes Network Policies: Isolating Pod Traffic and Namespaces', h1: 'Zero-Trust Pod Isolation using Kubernetes Network Policies' },
    { cat: 'devops', sub: 'aws-cloudfront-cdn-caching', title: 'AWS CloudFront CDN Caching, Invalidation & Edge Lambda Functions', h1: 'Global Content Delivery & Edge Computing with AWS CloudFront' },
    { cat: 'devops', sub: 'elk-stack-centralized-logging', title: 'Centralized Logging with Elasticsearch, Logstash and Kibana (ELK)', h1: 'Setting Up Production Log Aggregation with the ELK Stack' },
    { cat: 'seo', sub: 'log-file-analysis-seo', title: 'SEO Server Log Analysis: Tracking Googlebot Crawl Patterns', h1: 'Analyzing Server Log Files for Real Search Engine Crawl Insights' },
    { cat: 'seo', sub: 'rich-snippets-serp-features', title: 'Optimizing for Google Rich Snippets, Knowledge Panels & FAQ SERPs', h1: 'Winning Google Rich Results with Validated Structured Data' }
  ];

  for (const item of extendedTutorialList) {
    catalog.push({
      type: 'tutorial-extended',
      url: `/tutorials/${item.cat}/${item.sub}/`,
      title: `${item.title} | Appletree Infotech`,
      metaDescription: `Comprehensive guide to ${item.h1.toLowerCase()}. Practical code examples, architectural explanations, best practices, and interview takeaways.`,
      h1: item.h1,
      category: item.cat.toUpperCase(),
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Tutorials', url: `/tutorials/${item.cat}/${item.sub}/index.html` },
        { name: item.title, url: `/tutorials/${item.cat}/${item.sub}/index.html` }
      ],
      topicData: item,
      schemaType: 'TechArticle'
    });
  }

  // 5. INTERVIEW QUESTIONS (40+ pages)
  for (const topic of INTERVIEW_TOPICS) {
    catalog.push({
      type: 'interview',
      url: topic.url,
      title: `${topic.title} | Appletree Infotech`,
      metaDescription: topic.metaDescription,
      h1: topic.h1,
      category: topic.category,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Interview Prep', url: topic.url },
        { name: topic.title, url: topic.url }
      ],
      interviewData: topic,
      schemaType: 'FAQPage'
    });
  }

  // Additional 20+ interview pages to fulfill deep search queries
  const extraInterviewList = [
    { id: 'core-java-oop', cat: 'Java', title: 'Core Java OOP Interview Questions & Answers', h1: 'Top Java Object-Oriented Programming (OOP) Interview Questions' },
    { id: 'java-collections', cat: 'Java', title: 'Java Collections Framework Interview Questions', h1: 'Java Collections & Generics Technical Interview Questions' },
    { id: 'java-multithreading', cat: 'Java', title: 'Java Multithreading & Concurrency Interview Questions', h1: 'Java Concurrency & Thread Synchronization Interview Questions' },
    { id: 'hibernate', cat: 'Java', title: 'Hibernate ORM & JPA Technical Interview Questions', h1: 'Hibernate ORM & Database Persistence Interview Questions' },
    { id: 'microservices', cat: 'Java', title: 'Microservices Architecture Interview Questions', h1: 'Microservices & Distributed Systems Interview Questions' },
    { id: 'django', cat: 'Python', title: 'Django Web Framework Technical Interview Questions', h1: 'Django Developer & ORM Interview Questions & Answers' },
    { id: 'fastapi', cat: 'Python', title: 'FastAPI & Async Python Technical Interview Questions', h1: 'FastAPI & Asynchronous REST Interview Questions' },
    { id: 'data-science', cat: 'Data', title: 'Data Science & Machine Learning Interview Questions', h1: 'Data Scientist Technical & Statistical Interview Questions' },
    { id: 'machine-learning', cat: 'Data', title: 'Machine Learning Engineering Interview Questions', h1: 'Machine Learning Algorithms & Model Tuning Interview Questions' },
    { id: 'data-analytics', cat: 'Data', title: 'Data Analyst & SQL Business Analytics Interview Questions', h1: 'Top Data Analyst Technical Interview Questions' },
    { id: 'mysql', cat: 'Database', title: 'MySQL Query Optimization & DBA Interview Questions', h1: 'MySQL Database Architecture & Query Interview Questions' },
    { id: 'postgresql', cat: 'Database', title: 'PostgreSQL Relational Architecture Interview Questions', h1: 'PostgreSQL Developer & DBA Interview Questions' },
    { id: 'mongodb', cat: 'Database', title: 'MongoDB NoSQL Aggregation Interview Questions', h1: 'MongoDB NoSQL & Aggregation Pipeline Interview Questions' },
    { id: 'redis', cat: 'Database', title: 'Redis Caching & In-Memory Data Interview Questions', h1: 'Redis Architecture & Caching Interview Questions' },
    { id: 'react', cat: 'Web', title: 'React.js & Frontend Architecture Interview Questions', h1: 'React 18 & Frontend Developer Interview Questions' },
    { id: 'nodejs', cat: 'Web', title: 'Node.js & Backend Architecture Interview Questions', h1: 'Node.js Event Loop & Backend Interview Questions' },
    { id: 'expressjs', cat: 'Web', title: 'Express.js & REST API Technical Interview Questions', h1: 'Express.js Routing & Middleware Interview Questions' },
    { id: 'mern', cat: 'Web', title: 'MERN Full Stack Developer Interview Questions', h1: 'MERN Stack Technical Interview Questions & Answers' },
    { id: 'frontend-developer', cat: 'Web', title: 'Frontend Developer (HTML/CSS/JS) Interview Questions', h1: 'Comprehensive Frontend Developer Technical Interview Questions' },
    { id: 'backend-developer', cat: 'Web', title: 'Backend Software Engineer Interview Questions', h1: 'Backend Systems & API Architecture Interview Questions' },
    { id: 'devops', cat: 'DevOps', title: 'DevOps & CI/CD Pipeline Technical Interview Questions', h1: 'Top DevOps Engineer Technical Interview Questions' },
    { id: 'docker', cat: 'DevOps', title: 'Docker Containerization Technical Interview Questions', h1: 'Docker Containers & Multi-Stage Build Interview Questions' },
    { id: 'kubernetes', cat: 'DevOps', title: 'Kubernetes (K8s) Cluster Architecture Interview Questions', h1: 'Kubernetes Administrator & DevOps Interview Questions' },
    { id: 'jenkins', cat: 'DevOps', title: 'Jenkins CI/CD Automation Interview Questions', h1: 'Jenkins Pipeline & Continuous Delivery Interview Questions' },
    { id: 'aws', cat: 'Cloud', title: 'AWS Solutions Architect & Cloud Interview Questions', h1: 'AWS Cloud Architecture Technical Interview Questions' },
    { id: 'linux', cat: 'DevOps', title: 'Linux Administration & Shell Scripting Interview Questions', h1: 'Linux Systems Administrator Interview Questions' },
    { id: 'git', cat: 'DevOps', title: 'Git Version Control & Branching Interview Questions', h1: 'Git Version Control Technical Interview Questions' },
    { id: 'digital-marketing', cat: 'SEO', title: 'Digital Marketing & Growth Strategy Interview Questions', h1: 'Digital Marketing & Paid Ads Technical Interview Questions' },
    { id: 'dsa', cat: 'Programming', title: 'Data Structures & Algorithms (DSA) Coding Interview Questions', h1: 'DSA Coding & Algorithmic Problem Solving Interview Questions' },
    { id: 'cybersecurity', cat: 'Security', title: 'Cybersecurity & Application Defense Interview Questions', h1: 'Cybersecurity Analyst & OWASP Security Interview Questions' },
    { id: 'c', cat: 'Programming', title: 'C Programming & Memory Management Interview Questions', h1: 'C Language Pointers & Memory Allocation Interview Questions' },
    { id: 'cpp', cat: 'Programming', title: 'C++ & Object-Oriented Design Interview Questions', h1: 'C++ Programming & STL Technical Interview Questions' }
  ];

  for (const item of extraInterviewList) {
    catalog.push({
      type: 'interview-extended',
      url: `/interview-questions/${item.id}/`,
      title: `${item.title} | Appletree Infotech`,
      metaDescription: `Prepare for technical rounds with ${item.h1.toLowerCase()}. In-depth answers, practical code snippets, interviewer tips, and common candidate mistakes.`,
      h1: item.h1,
      category: item.cat,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Interview Prep', url: `/interview-questions/${item.id}/index.html` },
        { name: item.title, url: `/interview-questions/${item.id}/index.html` }
      ],
      topicData: item,
      schemaType: 'FAQPage'
    });
  }

  // 6. CAREER ROADMAPS (22 pages)
  for (const roadmap of ROADMAPS) {
    catalog.push({
      type: 'roadmap',
      url: roadmap.url,
      title: `${roadmap.title} | Appletree Infotech`,
      metaDescription: roadmap.metaDescription,
      h1: roadmap.h1,
      category: roadmap.category,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Career Roadmaps', url: roadmap.url },
        { name: roadmap.title, url: roadmap.url }
      ],
      roadmapData: roadmap,
      schemaType: 'Article'
    });
  }

  // Additional career roadmaps
  const extraRoadmaps = [
    { id: 'full-stack-developer-roadmap', title: 'Full Stack Developer Career Roadmap', h1: 'The Complete Full Stack Developer Career Roadmap', cat: 'Web' },
    { id: 'data-analyst-roadmap', title: 'Data Analyst Career Roadmap: SQL to Dashboards', h1: 'The Complete Data Analyst Career Roadmap', cat: 'Data' },
    { id: 'cloud-engineer-roadmap', title: 'Cloud Engineer Career Roadmap: AWS & Cloud Architecture', h1: 'The Complete Cloud Solutions Engineer Roadmap', cat: 'Cloud' },
    { id: 'digital-marketing-roadmap', title: 'Digital Marketing Career Roadmap: SEO to Performance Marketing', h1: 'The Complete Digital Marketing Career Roadmap', cat: 'SEO' },
    { id: 'backend-developer-roadmap', title: 'Backend Developer Career Roadmap: Distributed Systems & APIs', h1: 'The Complete Backend Software Developer Roadmap', cat: 'Web' },
    { id: 'frontend-developer-roadmap', title: 'Frontend Developer Career Roadmap: React to Modern Web UI', h1: 'The Complete Frontend Developer Career Roadmap', cat: 'Web' },
    { id: 'software-developer-roadmap', title: 'Software Developer Career Roadmap: Foundations to SDE', h1: 'The Complete Software Developer Career Roadmap', cat: 'Programming' },
    { id: 'database-administrator-roadmap', title: 'Database Administrator (DBA) Career Roadmap', h1: 'The Complete Database Administrator (DBA) Career Roadmap', cat: 'Database' },
    { id: 'cyber-security-engineer-roadmap', title: 'Cybersecurity Engineer Career Roadmap: Defensive Security', h1: 'The Complete Cybersecurity Engineer Career Roadmap', cat: 'Security' },
    { id: 'machine-learning-engineer-roadmap', title: 'Machine Learning Engineer Career Roadmap: Math to MLOps', h1: 'The Complete Machine Learning Engineer Roadmap', cat: 'Data' },
    { id: 'spring-boot-developer-roadmap', title: 'Spring Boot Developer Career Roadmap: Microservices Path', h1: 'The Complete Spring Boot Developer Career Roadmap', cat: 'Java' },
    { id: 'react-developer-roadmap', title: 'React Developer Career Roadmap: Modern SPA Engineering', h1: 'The Complete React.js Developer Career Roadmap', cat: 'Web' },
    { id: 'nodejs-developer-roadmap', title: 'Node.js Developer Career Roadmap: Asynchronous Backend Path', h1: 'The Complete Node.js Developer Career Roadmap', cat: 'Web' },
    { id: 'aws-solutions-architect-roadmap', title: 'AWS Solutions Architect Career Roadmap', h1: 'The Complete AWS Cloud Architect Career Roadmap', cat: 'Cloud' },
    { id: 'system-architect-roadmap', title: 'Systems & Software Architect Career Roadmap', h1: 'The Complete Enterprise Software Architect Roadmap', cat: 'Architecture' },
    { id: 'qa-automation-engineer-roadmap', title: 'QA Automation Engineer Career Roadmap: Selenium to CI/CD', h1: 'The Complete QA Automation Engineer Career Roadmap', cat: 'Testing' }
  ];

  for (const item of extraRoadmaps) {
    catalog.push({
      type: 'roadmap-extended',
      url: `/career/${item.id}/`,
      title: `${item.title} | Appletree Infotech`,
      metaDescription: `Step-by-step career path for ${item.h1.toLowerCase()}. What to learn first, foundational tools, portfolio projects, interview strategies, and common mistakes.`,
      h1: item.h1,
      category: item.cat,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Career Roadmaps', url: `/career/${item.id}/index.html` },
        { name: item.title, url: `/career/${item.id}/index.html` }
      ],
      topicData: item,
      schemaType: 'Article'
    });
  }

  // 7. COMPARISONS & REAL-WORLD PROJECTS (25 pages)
  for (const comp of COMPARISONS) {
    catalog.push({
      type: 'comparison',
      url: comp.url,
      title: `${comp.title} | Appletree Infotech`,
      metaDescription: comp.metaDescription,
      h1: comp.h1,
      category: 'Comparison',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Comparisons', url: comp.url },
        { name: comp.title, url: comp.url }
      ],
      compData: comp,
      schemaType: 'Article'
    });
  }

  const extraComparisons = [
    { id: 'java-vs-cpp', title: 'Java vs C++: Architecture, Memory Management & Performance', h1: 'Java vs C++: Complete Technical Comparison', cat: 'Programming' },
    { id: 'java-vs-javascript', title: 'Java vs JavaScript: Backend Systems vs Browser Runtime', h1: 'Java vs JavaScript: Architectural Comparison', cat: 'Programming' },
    { id: 'react-vs-angular', title: 'React vs Angular: Component Library vs Full Framework', h1: 'React vs Angular: Modern Frontend Comparison', cat: 'Web' },
    { id: 'react-vs-vue', title: 'React vs Vue: Flexibility, Reactivity & Ecosystem', h1: 'React vs Vue: Choosing Your Frontend Framework', cat: 'Web' },
    { id: 'postgresql-vs-mysql', title: 'PostgreSQL vs MySQL: Advanced Features vs Simplicity', h1: 'PostgreSQL vs MySQL: Comprehensive Database Comparison', cat: 'Database' },
    { id: 'aws-vs-azure', title: 'AWS vs Microsoft Azure: Enterprise Cloud Comparison', h1: 'AWS vs Azure: Public Cloud Platforms Compared', cat: 'Cloud' },
    { id: 'seo-vs-digital-marketing', title: 'SEO vs Digital Marketing: Organic Authority vs Multi-Channel Ads', h1: 'SEO vs Digital Marketing: Strategy, Costs & ROI', cat: 'SEO' },
    { id: 'fastapi-vs-flask', title: 'FastAPI vs Flask: Asynchronous Speed vs Simplicity', h1: 'FastAPI vs Flask: Python Microframework Comparison', cat: 'Python' },
    { id: 'rest-vs-graphql', title: 'REST vs GraphQL: API Architecture, Over-Fetching & Caching', h1: 'REST vs GraphQL: Modern API Architecture Comparison', cat: 'Web' },
    { id: 'sql-vs-nosql', title: 'SQL vs NoSQL: Relational Tables vs Document Stores', h1: 'SQL vs NoSQL Databases: Complete Architecture Guide', cat: 'Database' }
  ];

  for (const item of extraComparisons) {
    catalog.push({
      type: 'comparison-extended',
      url: `/comparisons/${item.id}/`,
      title: `${item.title} | Appletree Infotech`,
      metaDescription: `In-depth technical comparison of ${item.h1.toLowerCase()}. Architecture differences, benchmarks, best use cases, and career advice.`,
      h1: item.h1,
      category: item.cat,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Comparisons', url: `/comparisons/${item.id}/index.html` },
        { name: item.title, url: `/comparisons/${item.id}/index.html` }
      ],
      topicData: item,
      schemaType: 'Article'
    });
  }

  // Real Enterprise Projects Walkthrough Pages
  const projectsList = [
    { id: 'java-microservices-ecommerce', title: 'Java Microservices E-Commerce Project Walkthrough', h1: 'Building an Enterprise E-Commerce Microservices Platform with Spring Boot', cat: 'Java' },
    { id: 'python-predictive-analytics', title: 'Predictive Analytics Engine with Python & FastAPI Project', h1: 'Building an End-to-End Predictive Machine Learning API in Python', cat: 'Data' },
    { id: 'mern-collaborative-workspace', title: 'MERN Stack Real-Time Collaborative Workspace Project', h1: 'Architecting a Real-Time Project Management App with React & Node', cat: 'Web' },
    { id: 'seo-audit-crawler', title: 'Building a Technical SEO Site Crawler in Node.js', h1: 'Developing an Automated SEO Audit and Crawl Engine', cat: 'SEO' },
    { id: 'devops-automated-k8s-pipeline', title: 'Automated Kubernetes Deployment Pipeline Project', h1: 'Building a Zero-Downtime GitOps CI/CD Pipeline on Kubernetes', cat: 'DevOps' }
  ];

  for (const item of projectsList) {
    catalog.push({
      type: 'project',
      url: `/projects/${item.id}/`,
      title: `${item.title} | Appletree Infotech`,
      metaDescription: `Step-by-step project blueprint: ${item.h1.toLowerCase()}. Architecture design, database schemas, code modules, and production deployment guidelines.`,
      h1: item.h1,
      category: item.cat,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Projects', url: `/projects/${item.id}/index.html` },
        { name: item.title, url: `/projects/${item.id}/index.html` }
      ],
      topicData: item,
      schemaType: 'TechArticle'
    });
  }

  // 8. RESOURCES & CHEAT SHEETS (10 pages)
  const resourcesList = [
    { id: 'java-cheat-sheet', title: 'Java Quick Reference & Core Syntax Cheat Sheet', h1: 'Java Developer Cheat Sheet: Core Syntax, Streams & Collections', cat: 'Java' },
    { id: 'python-cheat-sheet', title: 'Python Quick Reference & Data Structures Cheat Sheet', h1: 'Python Developer Cheat Sheet: Syntax, Comprehensions & Methods', cat: 'Python' },
    { id: 'sql-query-reference', title: 'SQL Queries, Joins & Window Functions Quick Reference', h1: 'SQL Query Reference: Commands, Joins, Aggregations & Window Syntax', cat: 'Database' },
    { id: 'docker-commands-cheat-sheet', title: 'Docker CLI Commands & Compose Reference Guide', h1: 'Docker Developer Cheat Sheet: CLI Commands, Compose & Volumes', cat: 'DevOps' },
    { id: 'git-commands-guide', title: 'Git Version Control Commands & Branching Cheat Sheet', h1: 'Git Command Reference: Branching, Rebasing, Stashing & Resolving Conflicts', cat: 'DevOps' },
    { id: 'technical-seo-audit-template', title: 'Technical SEO Audit Checklist & Inspection Template', h1: 'Technical SEO Site Audit Checklist: 50+ Critical Inspection Points', cat: 'SEO' },
    { id: 'linux-command-line-handbook', title: 'Linux Command Line Handbook for Developers & DevOps', h1: 'Linux Developer Handbook: Terminal Navigation, Permissions & Grep', cat: 'DevOps' },
    { id: 'mern-stack-checklist', title: 'MERN Full Stack Project Deployment Checklist', h1: 'MERN Stack Production Readiness & Security Deployment Checklist', cat: 'Web' },
    { id: 'data-science-math-guide', title: 'Essential Mathematics & Statistics for Data Science Guide', h1: 'Math for Data Science: Linear Algebra, Calculus & Statistical Testing', cat: 'Data' }
  ];

  for (const item of resourcesList) {
    catalog.push({
      type: 'resource',
      url: `/resources/${item.id}/`,
      title: `${item.title} | Appletree Infotech`,
      metaDescription: `Practical developer handbook: ${item.h1.toLowerCase()}. Key syntax, terminal commands, architectural checklists, and quick lookup references.`,
      h1: item.h1,
      category: item.cat,
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Resources', url: `/resources/${item.id}/index.html` },
        { name: item.title, url: `/resources/${item.id}/index.html` }
      ],
      topicData: item,
      schemaType: 'Article'
    });
  }

  // 9. LEGAL, TRUST & CORE PAGES (7 pages)
  catalog.push(
    {
      type: 'trust',
      url: '/about.html',
      title: 'About Appletree Infotech | Technical Education Institute in Ghaziabad',
      metaDescription: 'Learn about Appletree Infotech: our practical training philosophy, enterprise mentors, hands-on computer labs, and physical campus in RDC Ghaziabad.',
      h1: 'About Appletree Infotech Technical Institute',
      category: 'About',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'About Us', url: '/about.html' }
      ],
      schemaType: 'AboutPage'
    },
    {
      type: 'trust',
      url: '/contact.html',
      title: 'Contact Appletree Infotech | Training Center in RDC Ghaziabad',
      metaDescription: 'Visit Appletree Infotech at C-60 R.K Tower, 3rd Floor, RDC, Ghaziabad. Call 7503962162 for course counseling, lab tours, and syllabus consultations.',
      h1: 'Contact Our Ghaziabad Training Center',
      category: 'Contact',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Contact', url: '/contact.html' }
      ],
      schemaType: 'ContactPage'
    },
    {
      type: 'trust',
      url: '/privacy-policy.html',
      title: 'Privacy Policy | Appletree Infotech Ghaziabad',
      metaDescription: 'Read Appletree Infotech privacy policy regarding student inquiries, form data protection, contact details security, and cookie usage.',
      h1: 'Privacy Policy',
      category: 'Legal',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Privacy Policy', url: '/privacy-policy.html' }
      ],
      schemaType: 'WebPage'
    },
    {
      type: 'trust',
      url: '/terms.html',
      title: 'Terms of Service | Appletree Infotech Ghaziabad',
      metaDescription: 'Terms of Service for Appletree Infotech classroom and online training programs, academic conduct, and intellectual property guidelines.',
      h1: 'Terms of Service',
      category: 'Legal',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Terms of Service', url: '/terms.html' }
      ],
      schemaType: 'WebPage'
    },
    {
      type: 'trust',
      url: '/disclaimer.html',
      title: 'Academic & Search Ranking Disclaimer | Appletree Infotech',
      metaDescription: 'Official academic disclaimer: Appletree Infotech does not promise guaranteed search rankings or employment without candidate diligence.',
      h1: 'Academic & Search Ranking Disclaimer',
      category: 'Legal',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Disclaimer', url: '/disclaimer.html' }
      ],
      schemaType: 'WebPage'
    },
    {
      type: 'trust',
      url: '/cookie-policy.html',
      title: 'Cookie Policy | Appletree Infotech Ghaziabad',
      metaDescription: 'Information about how Appletree Infotech utilizes minimal first-party browser cookies for local user preferences and functional security.',
      h1: 'Cookie Policy',
      category: 'Legal',
      breadcrumbs: [
        { name: 'Home', url: '/index.html' },
        { name: 'Cookie Policy', url: '/cookie-policy.html' }
      ],
      schemaType: 'WebPage'
    }
  );

  return catalog;
}

module.exports = { buildFullCatalog };
