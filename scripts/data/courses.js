/**
 * PROGRAMMINGWALA - Courses Dataset
 * Comprehensive course curricula, learning outcomes, real enterprise projects, and technical FAQs.
 */

const COURSES = [
  {
    id: 'java',
    title: 'Java Full Stack & Enterprise Development Course',
    seoTitle: 'Java Full Stack & Enterprise Development Course | Appletree Infotech',
    h1: 'Enterprise Java Development & Full Stack Training Program',
    description: 'Master Core Java, OOP, Collections, Multithreading, Spring Boot, Hibernate, RESTful Microservices, and cloud deployments with in-person lab mentoring in Ghaziabad.',
    category: 'Programming',
    badge: 'Flagship Program',
    duration: '16 Weeks (Practical Lab Track)',
    prerequisites: 'Basic understanding of computer logic or secondary school mathematics. No prior coding experience required.',
    targetAudience: 'College graduates (B.Tech, BCA, MCA), self-taught programmers, and IT professionals transitioning to enterprise backend engineering.',
    overview: 'Java remains the cornerstone of modern enterprise architecture, powering critical transactional backends across financial institutions, e-commerce giants, and Fortune 500 enterprises. This comprehensive training path takes you from memory fundamentals in the JVM to building high-concurrency microservices with Spring Boot and Docker.',
    whyLearn: 'Java consistently ranks among the top enterprise languages globally. Its type safety, robust memory management, backward compatibility, and mature ecosystem (Spring, Hibernate, Kafka) ensure sustainable, high-paying career trajectories for backend engineers.',
    tools: ['Java 21 LTS', 'IntelliJ IDEA', 'Maven', 'Gradle', 'Spring Boot 3', 'Hibernate ORM', 'PostgreSQL', 'Docker', 'Postman', 'Git/GitHub'],
    svgDiagram: 'assets/images/java-architecture.svg',
    modules: [
      {
        title: 'Module 1: JVM Internals, Primitive Types & Control Structures',
        duration: 'Weeks 1-3',
        topics: [
          'JDK, JRE, and JVM Architectural Anatomy',
          'Bytecode compilation, ClassLoader hierarchy, and JIT compilation',
          'Primitive data types, IEEE-754 floating point nuances, and variable scoping',
          'Operators, bitwise manipulation, and precedence rules',
          'Control flow: switch expressions (Java 17/21), pattern matching, and loops',
          'Arrays in memory: 1D, multi-dimensional, and cache locality basics'
        ]
      },
      {
        title: 'Module 2: Object-Oriented Programming (OOP) & Memory Management',
        duration: 'Weeks 4-6',
        topics: [
          'Class structure, object instantiation, and constructor chaining',
          'Encapsulation: Access specifiers, record classes, and immutability patterns',
          'Inheritance: Method overriding, polymorphism, and virtual method tables',
          'Abstraction: Abstract classes vs. Sealed interfaces and default methods',
          'Memory lifecycle: Stack frames, Heap allocation (Young/Old gen), and Garbage Collection algorithms (G1, ZGC)',
          'Exception handling: Checked vs Unchecked exceptions, try-with-resources, and custom exceptions'
        ]
      },
      {
        title: 'Module 3: Java Collections Framework, Generics & Modern Streams',
        duration: 'Weeks 7-9',
        topics: [
          'Collection hierarchy: List (ArrayList vs LinkedList), Set (HashSet vs TreeSet), Queue',
          'Deep dive into Map: HashMap hashing, collision resolution (Red-Black tree rebalancing), ConcurrentHashMap',
          'Generics: Type erasure, bounded wildcards (? extends / ? super), and covariance',
          'Functional Programming: Lambdas, method references, and functional interfaces (Function, Predicate, Consumer, Supplier)',
          'Stream API: Intermediate (map, filter, flatMap) vs Terminal operations (collect, reduce, groupingBy)',
          'Modern features: Optional class best practices, text blocks, and pattern matching'
        ]
      },
      {
        title: 'Module 4: Concurrency, Multithreading & Virtual Threads',
        duration: 'Weeks 10-11',
        topics: [
          'Thread lifecycle, Runnable vs Callable, and Thread states',
          'Synchronization, intrinsic locks, race conditions, and deadlocks',
          'java.util.concurrent: ExecutorService, ThreadPoolExecutor, and Future/CompletableFuture',
          'Concurrent collections: CopyOnWriteArrayList, BlockingQueue',
          'Atomic variables and the Java Memory Model (volatile semantics)',
          'Project Loom: Virtual Threads (Java 21) and high-throughput I/O architectures'
        ]
      },
      {
        title: 'Module 5: Database Persistence with JDBC & Hibernate/JPA',
        duration: 'Weeks 12-13',
        topics: [
          'Relational database fundamentals and ACID properties',
          'JDBC API: DriverManager, PreparedStatement, ResultSet, and SQL injection prevention',
          'Connection Pooling: HikariCP configuration and performance metrics',
          'Object-Relational Mapping (ORM) fundamentals with Hibernate',
          'JPA entity mappings: @Entity, @Table, @Id, @GeneratedValue',
          'Relationships: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany and FetchType (LAZY vs EAGER)',
          'JPQL, Criteria API, and resolving the N+1 query problem'
        ]
      },
      {
        title: 'Module 6: Spring Boot, REST APIs & Cloud Microservices',
        duration: 'Weeks 14-16',
        topics: [
          'Spring Core: Inversion of Control (IoC) and Dependency Injection (DI) mechanisms',
          'Spring Boot 3 auto-configuration, starter dependencies, and application.properties',
          'Building RESTful APIs: @RestController, @GetMapping, @PostMapping, and ResponseEntity',
          'Input validation with Jakarta Validation (@Valid, @NotNull, @Size)',
          'Global exception handling with @ControllerAdvice and ProblemDetails (RFC 7807)',
          'Spring Data JPA: JpaRepository, derived query methods, and pagination',
          'Containerization: Dockerizing Spring Boot apps and deploying to AWS/Linux environments'
        ]
      }
    ],
    projects: [
      {
        name: 'Enterprise Multi-Tier E-Commerce Backend',
        description: 'A modular microservices system featuring catalog management, JWT authentication, cart persistence with Redis, order checkout with transactional boundaries, and PDF invoice generation.'
      },
      {
        name: 'High-Concurrency Banking Transaction Engine',
        description: 'Simulates high-throughput inter-bank transfers utilizing Virtual Threads, pessimistic locking against double-spending, and comprehensive audit logs.'
      },
      {
        name: 'Spring Cloud Distributed Telemetry Platform',
        description: 'Microservice mesh integrating Spring Cloud Gateway, Eureka Service Registry, OpenTelemetry tracing, and Grafana visualization.'
      }
    ],
    careerOutcomes: [
      'Java Software Engineer',
      'Backend Systems Developer',
      'Spring Boot Specialist',
      'Full Stack Java Developer',
      'Enterprise Application Consultant'
    ],
    faqs: [
      {
        question: 'Do I need prior C or C++ knowledge before joining Java training?',
        answer: 'No. While understanding C concepts can be helpful, our curriculum starts directly from computer fundamentals, binary logic, and Java syntax from day one.'
      },
      {
        question: 'Does this course cover modern Java versions like Java 17 and Java 21?',
        answer: 'Yes. We teach standard Java 21 LTS features including Virtual Threads (Project Loom), Record patterns, Sealed Classes, and modernized switch expressions alongside core legacy concepts.'
      },
      {
        question: 'How much time is dedicated to hands-on coding vs lectures?',
        answer: 'Approximately 70% of class time is spent actively writing code, resolving bugs, implementing data structures, and building projects inside our RDC Ghaziabad computer labs.'
      }
    ]
  },
  {
    id: 'python',
    title: 'Python Developer & Automation Engineering Course',
    seoTitle: 'Python Developer & Automation Engineering Course | Appletree Infotech',
    h1: 'Python Programming, Web Frameworks & Automation Training',
    description: 'Learn Core Python, OOP, Data Structures, Web Scraping, FastAPI, Django, PostgreSQL, and Automated Scripting in Ghaziabad.',
    category: 'Programming',
    badge: 'Popular',
    duration: '14 Weeks (Practical Lab Track)',
    prerequisites: 'Basic computer literacy. Open to complete beginners and experienced coders switching from other languages.',
    targetAudience: 'Aspiring software engineers, automation testers, data analysts, and devops engineers.',
    overview: 'Python is celebrated for its elegant, expressive syntax and universal applicability. In this intensive course, you will learn Python from foundational scripting to building production-grade asynchronous web APIs with FastAPI and scalable web applications with Django.',
    whyLearn: 'Python powers everything from web applications (Instagram, Spotify) to artificial intelligence models, automation pipelines, and financial modeling. Its rich package ecosystem makes development extraordinarily productive.',
    tools: ['Python 3.12+', 'VS Code', 'PyCharm', 'FastAPI', 'Django', 'Poetry', 'PostgreSQL', 'Docker', 'PyTest', 'Git'],
    modules: [
      {
        title: 'Module 1: Python Fundamentals & Dynamic Typing',
        duration: 'Weeks 1-3',
        topics: [
          'Python architecture: CPython, bytecode compilation, and the Global Interpreter Lock (GIL)',
          'Dynamic typing, variables, reference counting, and garbage collection',
          'Numeric types, strings, f-strings, and string immutability',
          'Operators, logical evaluation, and walrus operator (:=)',
          'Control flow: if/elif/else, while loops, for loops with enumerate and zip',
          'Functions: *args, **kwargs, default parameters, and scope rules (LEGB)'
        ]
      },
      {
        title: 'Module 2: Advanced Data Structures & Functional Idioms',
        duration: 'Weeks 4-6',
        topics: [
          'Built-in data structures: Lists, Tuples, Dictionaries (hash table internals), Sets',
          'List, dictionary, and set comprehensions with conditional filtering',
          'Iterators and Generators: yield keyword, generator expressions, and memory conservation',
          'Decorators: Function decorators, parameterized decorators, and functools.wraps',
          'Context Managers: The with statement and contextlib module',
          'File I/O: Handling text, JSON, CSV files, and pathlib module'
        ]
      },
      {
        title: 'Module 3: Object-Oriented Python & Software Design',
        duration: 'Weeks 7-9',
        topics: [
          'Classes, instances, and self parameter',
          'Dunder (magic) methods: __init__, __str__, __repr__, __len__, __eq__',
          'Encapsulation: Name mangling, property decorators (@property, @setter)',
          'Inheritance: Single, multiple inheritance, and Method Resolution Order (MRO)',
          'Abstract Base Classes (abc module) and Duck Typing',
          'Dataclasses and Pydantic validation schemas'
        ]
      },
      {
        title: 'Module 4: Web Frameworks with FastAPI & Django',
        duration: 'Weeks 10-14',
        topics: [
          'HTTP protocol, REST constraints, and JSON request/response formats',
          'FastAPI: Path operations, dependency injection system, and OpenAPI documentation',
          'Asynchronous programming: async/await, asyncio event loop, and concurrent tasks',
          'Relational database integration with SQLAlchemy ORM and Alembic migrations',
          'Django: MVT pattern, Django ORM, Admin dashboard, and middleware',
          'Automated testing with PyTest, fixtures, and mock services'
        ]
      }
    ],
    projects: [
      {
        name: 'Asynchronous Real-Time Analytics API with FastAPI',
        description: 'High-speed event ingestion REST API using async database connections, Pydantic schemas, and token authentication.'
      },
      {
        name: 'Django Enterprise Resource Management Portal',
        description: 'Complete multi-user web portal with role-based permissions, custom admin actions, automated email alerts, and PostgreSQL backend.'
      }
    ],
    careerOutcomes: [
      'Python Software Engineer',
      'Backend Web Developer',
      'Automation Engineer',
      'Python Data Engineer'
    ],
    faqs: [
      {
        question: 'Is Python suitable as a first programming language?',
        answer: 'Yes. Python has an intuitive, clean syntax that removes boilerplate while reinforcing rigorous algorithmic principles.'
      },
      {
        question: 'Do you teach Django or FastAPI in this training?',
        answer: 'Both! We teach modern asynchronous API design with FastAPI as well as enterprise monolithic architecture with Django.'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science, Machine Learning & AI Engineering Program',
    seoTitle: 'Data Science, Machine Learning & AI Engineering Program | Appletree Infotech',
    h1: 'Data Science & Machine Learning Engineering Training',
    description: 'Master Python for Data Science, Statistics, Pandas, NumPy, Scikit-Learn, Machine Learning algorithms, Data Visualization, and MLOps deployment in Ghaziabad.',
    category: 'Data',
    badge: 'High Demand',
    duration: '20 Weeks (Hands-On Lab Track)',
    prerequisites: 'Basic math (high school algebra/statistics). Prior coding experience is helpful but not mandatory.',
    targetAudience: 'Graduates, analysts, software engineers, and domain specialists seeking data-driven decision making careers.',
    overview: 'Data science is transforming industries through predictive modeling and automated intelligence. Our Ghaziabad training combines statistical rigor with production software practices, teaching you to extract insights, build ML models, and serve predictions via REST endpoints.',
    whyLearn: 'Organizations rely on data scientists to optimize logistics, forecast revenue, personalize customer experiences, and detect fraud. High demand for skilled practitioners makes this one of the most rewarding tech disciplines.',
    tools: ['Python', 'Jupyter Lab', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'SQL', 'FastAPI', 'Docker'],
    svgDiagram: 'assets/images/data-science-pipeline.svg',
    modules: [
      {
        title: 'Module 1: Applied Statistics & Exploratory Data Analysis (EDA)',
        duration: 'Weeks 1-4',
        topics: [
          'Descriptive statistics: Mean, median, mode, variance, standard deviation, and IQR',
          'Probability distributions: Normal, Binomial, Poisson, and Central Limit Theorem',
          'Hypothesis testing: p-values, t-tests, ANOVA, and Chi-Square tests',
          'NumPy vectorized computation: Arrays, broadcasting, indexing, and linear algebra',
          'Pandas DataFrames: Filtering, grouping, aggregation, merging, and pivot tables',
          'Data visualization: Matplotlib plots, Seaborn statistical charts, and storytelling'
        ]
      },
      {
        title: 'Module 2: Data Preprocessing, Cleaning & Feature Engineering',
        duration: 'Weeks 5-8',
        topics: [
          'Identifying and treating missing values: Imputation techniques (mean, KNN, iterative)',
          'Outlier detection: Z-score, Tukey boxplot fences, and robust scaling',
          'Categorical encoding: One-hot encoding, target encoding, and label encoding',
          'Feature scaling: StandardScaler, MinMaxScaler, and RobustScaler',
          'Dimensionality reduction: Principal Component Analysis (PCA) and t-SNE',
          'Handling imbalanced datasets: SMOTE, class weights, and stratified sampling'
        ]
      },
      {
        title: 'Module 3: Classical Machine Learning Algorithms',
        duration: 'Weeks 9-14',
        topics: [
          'Supervised learning: Linear Regression, Ordinary Least Squares, and Ridge/Lasso regularization',
          'Classification algorithms: Logistic Regression, Decision Trees, and Random Forests',
          'Gradient Boosting machines: XGBoost, LightGBM, and hyperparameter tuning (GridSearch, Optuna)',
          'Unsupervised learning: K-Means clustering, DBSCAN, and hierarchical clustering',
          'Model evaluation metrics: Precision, Recall, F1-Score, ROC-AUC curve, and Confusion Matrix',
          'Preventing overfitting: Bias-Variance tradeoff and k-fold cross validation'
        ]
      },
      {
        title: 'Module 4: Deep Learning Foundations & Production MLOps',
        duration: 'Weeks 15-20',
        topics: [
          'Artificial Neural Networks (ANN): Perceptrons, activation functions, and backpropagation',
          'Convolutional Neural Networks (CNN) for image classification fundamentals',
          'Natural Language Processing (NLP): Tokenization, TF-IDF, Word2Vec, and Transformers overview',
          'Model persistence: Serialization with Joblib and ONNX',
          'Serving predictions with FastAPI and Docker containerization',
          'Model monitoring: Data drift, concept drift, and production observability'
        ]
      }
    ],
    projects: [
      {
        name: 'Customer Churn Prediction & Retention Engine',
        description: 'Predicts enterprise telecom subscriber churn using ensemble boosting (XGBoost), explains feature contributions with SHAP values, and deploys as a Dockerized API.'
      },
      {
        name: 'Real Estate Valuation & Forecasting Model',
        description: 'Multi-variable regression model analyzing historical property sales, geospatial attributes, and economic indicators with automated data pipelines.'
      }
    ],
    careerOutcomes: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Data Analyst',
      'Business Intelligence Developer'
    ],
    faqs: [
      {
        question: 'Do I need a PhD or advanced mathematics degree to become a data scientist?',
        answer: 'No. What employers value most is practical data intuition, proficiency in Python/SQL, strong statistical reasoning, and the ability to deploy functioning models to production.'
      },
      {
        question: 'Which libraries are emphasized during the training?',
        answer: 'We heavily focus on Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, XGBoost, and FastAPI for production delivery.'
      }
    ]
  },
  {
    id: 'mern-full-stack',
    title: 'MERN Full Stack Web Development Course',
    seoTitle: 'MERN Full Stack Web Development Course | Appletree Infotech',
    h1: 'MERN Stack Web Development Bootcamp (React, Node, Express, MongoDB)',
    description: 'Become an industry-ready full stack web developer. Master React, Node.js, Express.js, MongoDB, RESTful APIs, JWT Authentication, and Cloud Deployment.',
    category: 'Web Development',
    badge: 'Trending',
    duration: '16 Weeks (Practical Lab Track)',
    prerequisites: 'Basic familiarity with computer usage and web browsers. No prior programming required.',
    targetAudience: 'Aspiring web developers, software engineering students, and developers wanting modern JavaScript/TypeScript stack mastery.',
    overview: 'The MERN stack (MongoDB, Express.js, React, Node.js) is one of the most widely adopted architectures for building modern, responsive, and data-driven web applications. This hands-on course equips you with both client-side and server-side engineering mastery.',
    whyLearn: 'Single-language full stack development in JavaScript enables rapid prototyping and efficient engineering. Startups and established tech firms alike actively recruit MERN engineers for modern web products.',
    tools: ['JavaScript (ES2024)', 'React 18+', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Postman', 'Git/GitHub', 'Docker', 'Linux/Nginx'],
    svgDiagram: 'assets/images/mern-stack-flow.svg',
    modules: [
      {
        title: 'Module 1: Modern JavaScript & Frontend Foundations',
        duration: 'Weeks 1-4',
        topics: [
          'HTML5 semantic elements, accessibility (WCAG), and modern form controls',
          'CSS3 modern layout: Flexbox, CSS Grid, custom properties, and responsive design',
          'JavaScript ES6+: let/const, arrow functions, destructuring, rest/spread',
          'Asynchronous JavaScript: Callbacks, Promises, and async/await syntax',
          'DOM manipulation, event delegation, and browser storage (localStorage, sessionStorage)',
          'Modular JavaScript (ES Modules) and package management with NPM'
        ]
      },
      {
        title: 'Module 2: React.js & Single Page Application Architecture',
        duration: 'Weeks 5-8',
        topics: [
          'React component model: Functional components and JSX syntax',
          'State & Props: Unidirectional data flow and immutability',
          'Essential React Hooks: useState, useEffect, useRef, useMemo, useCallback',
          'Client-side routing with React Router DOM v6',
          'Global state management: Context API and Redux Toolkit basics',
          'Form handling, custom hooks, and API integration with Axios'
        ]
      },
      {
        title: 'Module 3: Server-Side Engineering with Node.js & Express',
        duration: 'Weeks 9-12',
        topics: [
          'Node.js runtime: Event loop, non-blocking I/O, and CommonJS vs ESM',
          'Building HTTP servers and routing with Express.js',
          'Middleware architecture: Authentication, error handling, CORS, and logging',
          'RESTful API architecture principles and status code standards',
          'User authentication: Password hashing (bcrypt) and JSON Web Tokens (JWT)',
          'Input validation and sanitization using Joi or Zod'
        ]
      },
      {
        title: 'Module 4: MongoDB, Integration & Cloud Deployment',
        duration: 'Weeks 13-16',
        topics: [
          'NoSQL concepts: Document storage vs relational tables',
          'MongoDB CRUD operations and indexing strategies',
          'Object Data Modeling (ODM) with Mongoose: Schemas, validations, hooks',
          'Aggregation framework: $match, $group, $lookup, $project',
          'Full stack integration: Connecting React frontend to Express backend',
          'Production deployment: Environment variables, CORS configuration, and hosting'
        ]
      }
    ],
    projects: [
      {
        name: 'Collaborative Project & Task Management Platform',
        description: 'Real-time kanban board application featuring user auth, drag-and-drop task assignment, comments, and role permissions.'
      },
      {
        name: 'Full Stack Digital Commerce Platform',
        description: 'Complete store with product catalog, cart management, simulated payment gateway integration, order history, and admin inventory dashboard.'
      }
    ],
    careerOutcomes: [
      'Full Stack Developer',
      'MERN Stack Engineer',
      'Frontend React Developer',
      'Backend Node.js Developer'
    ],
    faqs: [
      {
        question: 'Do we learn frontend and backend together in this course?',
        answer: 'Yes. You spend half the course mastering frontend user interfaces with React and the second half mastering backend APIs with Node.js, Express, and MongoDB.'
      },
      {
        question: 'Will I build a complete portfolio website by the end?',
        answer: 'Yes. Every student builds, deploys, and publishes at least two comprehensive full-stack applications with live URLs and GitHub repositories.'
      }
    ]
  },
  {
    id: 'seo',
    title: 'Advanced Technical SEO & Search Marketing Course',
    seoTitle: 'Advanced Technical SEO & Search Marketing Course | Appletree Infotech',
    h1: 'Technical SEO, Search Intent & Organic Growth Training',
    description: 'Learn ethical, high-performance SEO. Master Crawling, Indexing, Technical Audits, Core Web Vitals, Schema.org Markup, Keyword Research, and Local Search Optimization.',
    category: 'SEO',
    badge: 'Industry Essential',
    duration: '10 Weeks (Practical Lab Track)',
    prerequisites: 'Basic familiarity with browsing the web and content editing. No advanced coding required.',
    targetAudience: 'Marketers, business owners, web developers, content creators, and consultants wanting deep organic search authority.',
    overview: 'Search Engine Optimization is no longer about keyword stuffing or manipulative tricks. Modern SEO demands deep alignment with user search intent, rock-solid technical site architecture, fast page experiences, and authoritative content. This course teaches actionable, white-hat search marketing.',
    whyLearn: 'Organic search remains the highest-ROI acquisition channel across digital businesses. Knowing how search engines crawl, render, index, and rank web documents makes you an invaluable asset to any brand or digital agency.',
    tools: ['Google Search Console', 'Google Analytics 4', 'Screaming Frog SEO Spider', 'Schema Validator', 'PageSpeed Insights', 'Google Business Profile'],
    svgDiagram: 'assets/images/seo-crawl-index-rank.svg',
    modules: [
      {
        title: 'Module 1: Search Engine Mechanics & Technical Foundation',
        duration: 'Weeks 1-2',
        topics: [
          'How search engines work: Discovery, crawling, rendering, indexing, and ranking',
          'robots.txt directives, crawl budget management, and user-agent targeting',
          'XML Sitemaps: Structure, image extensions, validation, and index submission',
          'HTTP status codes: 200, 301, 302, 404, 410, and 500 impact on search indexing',
          'Canonicalization: Preventing duplicate content with rel="canonical" tags',
          'URL structure best practices and directory hierarchy'
        ]
      },
      {
        title: 'Module 2: On-Page Optimization & Search Intent Alignment',
        duration: 'Weeks 3-4',
        topics: [
          'Understanding 4 core search intents: Informational, Navigational, Commercial, Transactional',
          'Keyword research: Seed keywords, search volume, keyword difficulty, and search intent classification',
          'Crafting compelling, click-worthy Meta Titles and Descriptions',
          'Heading hierarchy: Semantic H1, H2, and H3 structures that reflect user queries',
          'Image optimization: Descriptive alt text, WebP compression, and responsive sizing',
          'Content clustering and strategic internal linking with descriptive anchors'
        ]
      },
      {
        title: 'Module 3: Technical SEO, Structured Data & Core Web Vitals',
        duration: 'Weeks 5-7',
        topics: [
          'Structured data with Schema.org JSON-LD: Organization, LocalBusiness, Article, FAQPage, Course',
          'Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS)',
          'Diagnosing and resolving performance bottlenecks: Render-blocking resources, font loading',
          'Mobile SEO: Viewport configuration, touch targets, and avoiding intrusive interstitials',
          'International SEO: hreflang tags, geo-targeting, and language-specific architecture'
        ]
      },
      {
        title: 'Module 4: Google Search Console, Audits & Local SEO',
        duration: 'Weeks 8-10',
        topics: [
          'Google Search Console mastery: Coverage reports, indexing inspection, and search queries analysis',
          'Conducting a complete Technical SEO Site Audit with Screaming Frog',
          'Local SEO: Google Business Profile optimization, local citations, and NAP consistency',
          'Ethical link acquisition: Digital PR, resource link building, and broken link reclamation',
          'Competitor content gap analysis and reporting dashboards'
        ]
      }
    ],
    projects: [
      {
        name: 'Comprehensive Technical SEO Audit of a Live Web Platform',
        description: 'Complete crawl audit analyzing status codes, duplicate metadata, canonical issues, Core Web Vitals, and JSON-LD schema implementation.'
      },
      {
        name: 'Local Business Search Growth Campaign',
        description: 'Complete local search optimization strategy covering Google Business Profile setup, local landing page architecture, and structured schema.'
      }
    ],
    careerOutcomes: [
      'Technical SEO Specialist',
      'Organic Search Strategist',
      'Digital Marketing Executive',
      'SEO Content Architect'
    ],
    faqs: [
      {
        question: 'Do you guarantee first-page Google rankings after taking this course?',
        answer: 'No. Legitimate search professionals never promise or guarantee specific search rankings, as search algorithms depend on numerous dynamic third-party signals. We teach proven, ethical, technical, and content best practices that build lasting organic visibility.'
      },
      {
        question: 'Does this course teach coding or just marketing?',
        answer: 'We teach the technical bridge: HTML structure, schema markup, status codes, server directives, and performance optimization alongside organic content strategy.'
      }
    ]
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot & Microservices Architecture Course',
    seoTitle: 'Spring Boot Course in Ghaziabad | Spring Microservices Training',
    h1: 'Spring Boot 3 & Enterprise Microservices Architecture Training',
    description: 'Master Spring Boot 3, Spring Data JPA, Hibernate, Spring Security with JWT, REST APIs, Microservices, and Docker containerization in Ghaziabad.',
    category: 'Java',
    badge: 'Advanced Java',
    duration: '12 Weeks (Lab Track)',
    prerequisites: 'Core Java proficiency (OOP, Collections, Exceptions).',
    targetAudience: 'Java developers aiming to build cloud-native enterprise microservices.',
    overview: 'Spring Boot is the de facto standard framework for enterprise Java backend systems. This specialized curriculum dives into rapid application development, dependency injection, relational persistence, secure RESTful endpoints, and distributed microservices architectures.',
    whyLearn: 'Enterprises worldwide standardize their core banking, healthcare, and retail backends on Spring Boot. Spring Boot developers command strong market demand and career stability.',
    tools: ['Spring Boot 3', 'Java 21', 'Spring Data JPA', 'Spring Security', 'Docker', 'PostgreSQL', 'Postman'],
    modules: [
      {
        title: 'Module 1: Spring Core & Spring Boot 3 Foundations',
        duration: 'Weeks 1-3',
        topics: ['IoC Container', 'Dependency Injection', 'Auto-Configuration', 'Application Properties', 'Profiles']
      },
      {
        title: 'Module 2: RESTful Web Services & Validation',
        duration: 'Weeks 4-6',
        topics: ['@RestController', 'HTTP Methods', 'Jakarta Validation', 'Global Exception Handling', 'OpenAPI/Swagger']
      },
      {
        title: 'Module 3: Spring Data JPA & Database Transactions',
        duration: 'Weeks 7-9',
        topics: ['Hibernate ORM', 'JpaRepository', 'Derived Queries', 'Paging & Sorting', '@Transactional Semantics']
      },
      {
        title: 'Module 4: Spring Security & Microservice Architecture',
        duration: 'Weeks 10-12',
        topics: ['Spring Security 6 FilterChain', 'JWT Authentication', 'API Gateway', 'Config Server', 'Dockerization']
      }
    ],
    projects: [
      {
        name: 'Distributed Microservices Order & Payment Engine',
        description: 'Independent services communicating over REST, protected by Spring Security JWT with PostgreSQL databases.'
      }
    ],
    careerOutcomes: ['Spring Boot Backend Developer', 'Enterprise Java Consultant', 'Microservices Engineer'],
    faqs: [
      { question: 'Is Core Java required before taking Spring Boot?', answer: 'Yes. You should be comfortable with Java OOP, Collections, and Exception handling.' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineering, CI/CD & Cloud Infrastructure Course',
    seoTitle: 'DevOps Course in Ghaziabad | DevOps & Cloud Training',
    h1: 'DevOps Engineering, Docker, Kubernetes & CI/CD Training',
    description: 'Learn Linux administration, Git, Docker containerization, Jenkins CI/CD pipelines, Kubernetes orchestration, and AWS cloud hosting in Ghaziabad.',
    category: 'DevOps',
    badge: 'Enterprise',
    duration: '14 Weeks (Practical Lab Track)',
    prerequisites: 'Basic command-line familiarity or any programming fundamentals.',
    targetAudience: 'Developers, system administrators, and tech enthusiasts seeking cloud infrastructure careers.',
    overview: 'DevOps bridges the gap between software development and IT operations. Learn to automate builds, test suites, container packaging, and production zero-downtime deployments.',
    whyLearn: 'Modern software engineering teams deploy multiple times daily. DevOps engineers ensure reliability, security, and scalability across the delivery lifecycle.',
    tools: ['Linux (Ubuntu)', 'Git', 'Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Terraform'],
    modules: [
      {
        title: 'Module 1: Linux Administration & Version Control',
        duration: 'Weeks 1-3',
        topics: ['Shell navigation', 'User permissions (chmod/chown)', 'Bash scripting', 'Git branching', 'GitHub workflows']
      },
      {
        title: 'Module 2: Containerization with Docker',
        duration: 'Weeks 4-6',
        topics: ['Images vs Containers', 'Dockerfile optimization', 'Multi-stage builds', 'Docker Compose', 'Volumes and Networks']
      },
      {
        title: 'Module 3: Continuous Integration & Deployment (CI/CD)',
        duration: 'Weeks 7-9',
        topics: ['Jenkins pipelines', 'Declarative Jenkinsfile', 'Automated test execution', 'Artifact archiving', 'Webhook triggers']
      },
      {
        title: 'Module 4: Kubernetes Orchestration & Cloud Infrastructure',
        duration: 'Weeks 10-14',
        topics: ['Pods, Deployments, ReplicaSets', 'Services (ClusterIP, NodePort, LoadBalancer)', 'Ingress', 'AWS EC2 & S3', 'Terraform IaC basics']
      }
    ],
    projects: [
      {
        name: 'Automated Multi-Stage CI/CD Pipeline on Kubernetes',
        description: 'End-to-end pipeline checking out code, running unit tests, building Docker containers, and rolling out updates to a Kubernetes cluster.'
      }
    ],
    careerOutcomes: ['DevOps Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Infrastructure Specialist', 'Build & Release Engineer'],
    faqs: [
      { question: 'Do I need prior cloud experience?', answer: 'No. We start with Linux operating system basics and build up through containers and cloud deployment.' }
    ]
  },
  {
    id: 'sql',
    title: 'SQL, Relational Databases & Database Design Course',
    seoTitle: 'SQL Course in Ghaziabad | Database Training & Coaching',
    h1: 'SQL Querying, Relational Database Design & Performance Tuning',
    description: 'Master SQL, PostgreSQL, MySQL, Schema Normalization, Joins, Subqueries, Indexing, and Transaction Management in Ghaziabad.',
    category: 'Database',
    badge: 'Foundational',
    duration: '8 Weeks (Practical Lab Track)',
    prerequisites: 'Open to everyone. No coding or mathematics background required.',
    targetAudience: 'Data analysts, backend developers, business intelligence professionals, and students.',
    overview: 'Data is the core asset of every modern digital application. This course covers everything from crafting complex multi-table SQL queries to designing bulletproof relational schemas and tuning database performance.',
    whyLearn: 'SQL is universally required across software engineering, data science, business analytics, and product management.',
    tools: ['PostgreSQL', 'MySQL', 'pgAdmin', 'DBeaver', 'SQL Workbench'],
    modules: [
      {
        title: 'Module 1: Relational Concepts & Basic Querying',
        duration: 'Weeks 1-2',
        topics: ['Relational Model', 'SELECT, WHERE, ORDER BY', 'Filtering with LIKE, IN, BETWEEN', 'Aggregate functions (COUNT, SUM, AVG)']
      },
      {
        title: 'Module 2: Multi-Table Joins & Grouping',
        duration: 'Weeks 3-4',
        topics: ['INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN', 'GROUP BY & HAVING clauses', 'Primary Keys & Foreign Key constraints']
      },
      {
        title: 'Module 3: Subqueries, CTEs & Window Functions',
        duration: 'Weeks 5-6',
        topics: ['Correlated subqueries', 'Common Table Expressions (WITH clauses)', 'Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD)']
      },
      {
        title: 'Module 4: Normalization, Indexing & Transactions',
        duration: 'Weeks 7-8',
        topics: ['1NF, 2NF, 3NF Normalization', 'B-Tree indexes & EXPLAIN ANALYZE', 'ACID transactions & isolation levels', 'Stored procedures and triggers']
      }
    ],
    projects: [
      {
        name: 'Enterprise Inventory & Sales Database Architecture',
        description: 'Complete schema design with normalized tables, indexed query paths, and complex sales analytics queries.'
      }
    ],
    careerOutcomes: ['Database Developer', 'Data Analyst', 'SQL Specialist', 'Junior DBA'],
    faqs: [
      { question: 'Is SQL still relevant with NoSQL around?', answer: 'Yes. Relational SQL databases power the transactional core of nearly every financial and enterprise system.' }
    ]
  },
  {
    id: 'aws',
    title: 'AWS Cloud Computing & Solutions Architecture Course',
    seoTitle: 'AWS Cloud Course in Ghaziabad | Cloud Computing Training',
    h1: 'AWS Cloud Architecture, Infrastructure & Services Training',
    description: 'Learn AWS EC2, S3, VPC, RDS, IAM, Lambda, Elastic Load Balancing, Auto Scaling, and Cloud Security in Ghaziabad.',
    category: 'Cloud',
    badge: 'In Demand',
    duration: '10 Weeks (Practical Lab Track)',
    prerequisites: 'Basic networking and OS concepts.',
    targetAudience: 'Software developers, sysadmins, and students preparing for cloud architect roles.',
    overview: 'Amazon Web Services (AWS) is the global leader in public cloud computing. Learn to design, deploy, and operate secure, scalable, and resilient cloud architectures.',
    whyLearn: 'AWS certification and practical cloud engineering skills open doors to high-paying enterprise infrastructure roles.',
    tools: ['AWS Management Console', 'AWS CLI', 'EC2', 'S3', 'VPC', 'RDS', 'IAM', 'CloudWatch'],
    modules: [
      {
        title: 'Module 1: Cloud Fundamentals & Identity Access Management (IAM)',
        duration: 'Weeks 1-2',
        topics: ['Global Infrastructure (Regions & AZs)', 'IAM Users, Groups, Roles, Policies', 'MFA and Least Privilege Access']
      },
      {
        title: 'Module 2: Compute & Storage (EC2 & S3)',
        duration: 'Weeks 3-5',
        topics: ['EC2 instance types and lifecycle', 'EBS volumes and snapshots', 'S3 buckets, storage classes, lifecycle rules, bucket policies']
      },
      {
        title: 'Module 3: Networking & Databases (VPC & RDS)',
        duration: 'Weeks 6-8',
        topics: ['Custom VPC creation', 'Public vs Private subnets', 'Route tables & Internet Gateways', 'RDS relational database hosting and Multi-AZ replication']
      },
      {
        title: 'Module 4: Scalability, Monitoring & Serverless',
        duration: 'Weeks 9-10',
        topics: ['Application Load Balancers', 'Auto Scaling Groups', 'CloudWatch alerts and metrics', 'AWS Lambda serverless fundamentals']
      }
    ],
    projects: [
      {
        name: 'High-Availability Multi-Tier Cloud Application Infrastructure',
        description: 'Deploying a resilient web app inside a custom VPC with public load balancers, private app servers, and automated scaling.'
      }
    ],
    careerOutcomes: ['Cloud Support Associate', 'AWS Solutions Architect', 'Cloud Infrastructure Engineer'],
    faqs: [
      { question: 'Do we get hands-on access to AWS services?', answer: 'Yes. All students complete labs in real AWS cloud environments.' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking Foundations Course',
    seoTitle: 'Cybersecurity Course in Ghaziabad | Ethical Hacking Training',
    h1: 'Cybersecurity, Network Defense & Web Application Security Training',
    description: 'Learn foundational cybersecurity, network scanning, OWASP Top 10 vulnerabilities, penetration testing concepts, and security defense in Ghaziabad.',
    category: 'Security',
    badge: 'Crucial Skill',
    duration: '12 Weeks (Lab Track)',
    prerequisites: 'Basic networking and OS concepts.',
    targetAudience: 'Developers, IT administrators, and security enthusiasts.',
    overview: 'In an era of frequent data breaches, cybersecurity is an imperative. This course covers defensive principles, network inspection, web security vulnerabilities, and vulnerability management.',
    whyLearn: 'Every software company must secure their applications and customer data, creating soaring demand for certified security personnel.',
    tools: ['Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP'],
    modules: [
      {
        title: 'Module 1: Networking Foundations & Reconnaissance',
        duration: 'Weeks 1-3',
        topics: ['OSI Model & TCP/IP', 'Packet inspection with Wireshark', 'Port scanning and service detection with Nmap', 'DNS and IP routing fundamentals']
      },
      {
        title: 'Module 2: Web Application Security & OWASP Top 10',
        duration: 'Weeks 4-7',
        topics: ['SQL Injection (SQLi)', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'Broken Authentication & Access Control', 'Security Misconfiguration']
      },
      {
        title: 'Module 3: Defensive Engineering & Cryptography',
        duration: 'Weeks 8-10',
        topics: ['Symmetric vs Asymmetric encryption', 'Hashing algorithms (SHA-256) and salting', 'SSL/TLS certificates and HTTPS handshake', 'Firewalls and intrusion detection']
      },
      {
        title: 'Module 4: Security Auditing & Remediation',
        duration: 'Weeks 11-12',
        topics: ['Vulnerability scanning with Burp Suite', 'Secure coding guidelines', 'Security patching and compliance fundamentals']
      }
    ],
    projects: [
      {
        name: 'Vulnerable Web Application Audit & Security Hardening Report',
        description: 'Comprehensive audit identifying OWASP Top 10 flaws in a test lab, followed by source-level remediation and verification.'
      }
    ],
    careerOutcomes: ['Security Analyst', 'Junior Penetration Tester', 'Application Security Associate'],
    faqs: [
      { question: 'Is this an ethical hacking course?', answer: 'Yes. We strictly teach defensive security and ethical penetration testing within controlled lab environments.' }
    ]
  },
  {
    id: 'javascript',
    title: 'Modern JavaScript (ES6+ to ES2024) Programming Course',
    seoTitle: 'JavaScript Course in Ghaziabad | Modern JS Training',
    h1: 'Modern JavaScript (ES6+) Deep Dive & Async Architecture',
    description: 'Master JavaScript fundamentals, Event Loop, Closures, Prototypes, Promises, Async/Await, and DOM manipulation in Ghaziabad.',
    category: 'Web Development',
    badge: 'Core Tech',
    duration: '8 Weeks (Practical Lab Track)',
    prerequisites: 'Basic HTML/CSS familiarity.',
    targetAudience: 'Aspiring web developers and frontend engineers.',
    overview: 'JavaScript is the runtime of the web. This course dives deep under the hood: memory heaps, call stacks, event loops, closures, and modern asynchronous patterns.',
    whyLearn: 'JavaScript powers nearly 98% of all websites and forms the basis for React, Vue, Node.js, and modern full-stack web development.',
    tools: ['Modern Browsers (Chrome DevTools)', 'Node.js', 'VS Code', 'Git'],
    modules: [
      {
        title: 'Module 1: Engine Execution, Scopes & Closures',
        duration: 'Weeks 1-2',
        topics: ['V8 engine architecture', 'Execution context and Call Stack', 'Hoisting and Temporal Dead Zone', 'Scope chain and Lexical Closures']
      },
      {
        title: 'Module 2: Prototypes & Object-Oriented JS',
        duration: 'Weeks 3-4',
        topics: ['Prototypal inheritance and Prototype chain', 'ES6 Classes and constructors', 'Object methods and Property descriptors', 'this keyword binding rules']
      },
      {
        title: 'Module 3: Asynchronous JS & The Event Loop',
        duration: 'Weeks 5-6',
        topics: ['Event Loop: Macrotask vs Microtask queues', 'Promises and Promise combinators (all, allSettled, race)', 'async/await syntax and error handling', 'Fetch API and HTTP communication']
      },
      {
        title: 'Module 4: DOM Architecture & Modern Browser APIs',
        duration: 'Weeks 7-8',
        topics: ['DOM tree traversal and manipulation', 'Event bubbling, capturing, and delegation', 'Web Storage and IndexedDB overview', 'Performance: Debouncing and Throttling']
      }
    ],
    projects: [
      {
        name: 'High-Performance Vanilla JS Interactive Dashboard',
        description: 'Single-page client dashboard utilizing async Fetch, custom event emitters, debounced search, and zero third-party dependencies.'
      }
    ],
    careerOutcomes: ['JavaScript Developer', 'Frontend Web Developer', 'UI Engineer'],
    faqs: [
      { question: 'Will this prepare me for React and Node.js?', answer: 'Yes! A rock-solid understanding of JS event loops and closures makes learning frameworks effortless.' }
    ]
  },
  {
    id: 'react',
    title: 'React.js Frontend Engineering Course',
    seoTitle: 'React Course in Ghaziabad | React.js Training & Coaching',
    h1: 'React.js Frontend Engineering & Single Page Application Training',
    description: 'Learn React 18, Functional Components, Hooks, State Management, React Router, API Integration, and Performance Optimization in Ghaziabad.',
    category: 'Web Development',
    badge: 'Popular',
    duration: '8 Weeks (Practical Lab Track)',
    prerequisites: 'Strong JavaScript (ES6) fundamentals.',
    targetAudience: 'Frontend developers wanting modern React mastery.',
    overview: 'React is the dominant UI library in the software industry. Learn component-driven design, custom hooks, declarative routing, and state architecture.',
    whyLearn: 'React powers modern web user interfaces worldwide and provides the most ubiquitous job openings for frontend developers.',
    tools: ['React 18', 'Vite', 'React Router', 'Redux Toolkit', 'Axios'],
    modules: [
      {
        title: 'Module 1: Components, JSX & Props',
        duration: 'Weeks 1-2',
        topics: ['JSX rules and transpilation', 'Functional components', 'Props passing and destructuring', 'Conditional rendering and list keys']
      },
      {
        title: 'Module 2: React Hooks Deep Dive',
        duration: 'Weeks 3-4',
        topics: ['useState and state batching', 'useEffect lifecycle simulation and cleanup', 'useRef for DOM access and mutable refs', 'useMemo and useCallback for memoization']
      },
      {
        title: 'Module 3: Routing & Global State',
        duration: 'Weeks 5-6',
        topics: ['React Router DOM v6', 'Dynamic route parameters and nested routes', 'Context API vs Redux Toolkit', 'Custom hooks creation']
      },
      {
        title: 'Module 4: Performance, Forms & Production Build',
        duration: 'Weeks 7-8',
        topics: ['React.memo and re-render profiling', 'Form handling with validation', 'API data fetching with error boundaries', 'Vite production build optimization']
      }
    ],
    projects: [
      {
        name: 'Streaming Video & Media Discovery Portal',
        description: 'React SPA with dynamic routing, debounced search, custom player controls, and responsive UI.'
      }
    ],
    careerOutcomes: ['React Developer', 'Frontend Web Engineer', 'UI Developer'],
    faqs: [
      { question: 'Do we use modern functional components with hooks?', answer: 'Yes, 100% of modern React training is built on functional components and hooks.' }
    ]
  },
  {
    id: 'nodejs',
    title: 'Node.js & Express Server-Side Engineering Course',
    seoTitle: 'Node.js Course in Ghaziabad | Backend Development Training',
    h1: 'Node.js & Express.js Backend Architecture Training',
    description: 'Master Node.js, Event Loop, Asynchronous I/O, Express.js, REST APIs, Authentication, Streams, and Production Deployment in Ghaziabad.',
    category: 'Web Development',
    badge: 'Backend Core',
    duration: '8 Weeks (Practical Lab Track)',
    prerequisites: 'Good JavaScript fundamentals.',
    targetAudience: 'Developers seeking to build fast, asynchronous backend services.',
    overview: 'Node.js enables high-concurrency, event-driven server applications. This course covers everything from core modules to scalable REST APIs and streaming architectures.',
    whyLearn: 'Node.js powers the backend of companies like Netflix, PayPal, and LinkedIn due to its lightweight execution and unified JS stack.',
    tools: ['Node.js 20+ LTS', 'Express.js', 'Postman', 'JWT', 'MongoDB/PostgreSQL'],
    modules: [
      {
        title: 'Module 1: Node Runtime & Core Modules',
        duration: 'Weeks 1-2',
        topics: ['V8 and Libuv', 'Event Loop phases', 'fs, path, events, http modules', 'Buffer and Stream handling']
      },
      {
        title: 'Module 2: Express Framework & Middleware',
        duration: 'Weeks 3-4',
        topics: ['Express app lifecycle', 'Custom middleware creation', 'Route modularization', 'Request/Response parsing and status codes']
      },
      {
        title: 'Module 3: Authentication & Data Persistence',
        duration: 'Weeks 5-6',
        topics: ['Password hashing with bcrypt', 'JWT token issuance and verification', 'Database integration (MongoDB/SQL)', 'Error handling middleware']
      },
      {
        title: 'Module 4: Security & Scalability',
        duration: 'Weeks 7-8',
        topics: ['Rate limiting and CORS', 'Helmet security headers', 'Cluster module & process managers (PM2)', 'Production deployment']
      }
    ],
    projects: [
      {
        name: 'Scalable RESTful API with Authentication & Rate Limiting',
        description: 'Modular Express API with JWT auth, role validation, input sanitization, and database integration.'
      }
    ],
    careerOutcomes: ['Node.js Backend Developer', 'API Engineer', 'Full Stack Developer'],
    faqs: [
      { question: 'Is Node.js fast enough for enterprise workloads?', answer: 'Yes, its non-blocking I/O model is uniquely suited for data-intensive real-time applications.' }
    ]
  },
  {
    id: 'docker',
    title: 'Docker Containerization & Multi-Service Architecture Course',
    seoTitle: 'Docker Course in Ghaziabad | Container Training',
    h1: 'Docker Containerization & Microservice Environments Training',
    description: 'Learn Docker images, containers, multi-stage Dockerfiles, Docker Compose, networking, volumes, and deployment workflows in Ghaziabad.',
    category: 'DevOps',
    badge: 'Essential Tool',
    duration: '6 Weeks (Practical Lab Track)',
    prerequisites: 'Basic command line and software installation experience.',
    targetAudience: 'Developers, sysadmins, and DevOps aspirants.',
    overview: 'Docker revolutionized software delivery by eliminating the "it works on my machine" problem. Master lightweight, portable container architectures.',
    whyLearn: 'Containerization is the foundational building block for modern cloud deployments, microservices, and CI/CD pipelines.',
    tools: ['Docker Engine', 'Docker Compose', 'Docker Hub', 'Linux'],
    modules: [
      {
        title: 'Module 1: Container Fundamentals & Architecture',
        duration: 'Weeks 1-2',
        topics: ['Containers vs Virtual Machines', 'Docker architecture (daemon, client, registry)', 'Running and managing containers', 'Port mapping and environment variables']
      },
      {
        title: 'Module 2: Building Images & Dockerfile Mastery',
        duration: 'Weeks 3-4',
        topics: ['Dockerfile instructions (FROM, RUN, COPY, CMD, ENTRYPOINT)', 'Layer caching and image size optimization', 'Multi-stage builds for Java, Node, and Python', '.dockerignore best practices']
      },
      {
        title: 'Module 3: Multi-Container Apps with Compose & Networking',
        duration: 'Weeks 5-6',
        topics: ['Docker Compose syntax', 'Bridge and overlay networks', 'Named volumes and persistent data', 'Deploying multi-tier web applications']
      }
    ],
    projects: [
      {
        name: 'Multi-Container Microservices Deployment with Docker Compose',
        description: 'Orchestrating a React frontend, Node backend, and PostgreSQL database with health checks and data volumes.'
      }
    ],
    careerOutcomes: ['DevOps Associate', 'Software Engineer (Container-Focused)', 'Build Engineer'],
    faqs: [
      { question: 'Will I learn Docker Compose in this course?', answer: 'Yes, multi-container composition is a core part of the practical training.' }
    ]
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes (K8s) Orchestration & Cloud Native Architecture Course',
    seoTitle: 'Kubernetes Course in Ghaziabad | K8s Training',
    h1: 'Kubernetes (K8s) Cluster Management & Container Orchestration',
    description: 'Learn Kubernetes architecture, Pods, Deployments, Services, ConfigMaps, Secrets, Ingress, and auto-scaling in Ghaziabad.',
    category: 'DevOps',
    badge: 'Advanced Cloud',
    duration: '8 Weeks (Practical Lab Track)',
    prerequisites: 'Solid Docker understanding.',
    targetAudience: 'DevOps engineers, cloud architects, and senior backend developers.',
    overview: 'Kubernetes is the undisputed operating system of the modern cloud. Learn how to orchestrate, scale, heal, and monitor distributed container applications.',
    whyLearn: 'Every major enterprise runs workloads on Kubernetes, making K8s knowledge one of the most lucrative infrastructure skills in technology.',
    tools: ['kubectl', 'Minikube', 'Kubernetes Dashboard', 'Helm', 'AWS EKS overview'],
    modules: [
      {
        title: 'Module 1: K8s Control Plane & Core Objects',
        duration: 'Weeks 1-2',
        topics: ['API Server, etcd, Scheduler, Kubelet', 'Pods lifecycle and multi-container pods', 'Declarative YAML manifests', 'Namespaces and context']
      },
      {
        title: 'Module 2: Workloads & Self-Healing Deployments',
        duration: 'Weeks 3-4',
        topics: ['ReplicaSets and Deployments', 'Rolling updates and rollbacks', 'Readiness and Liveness probes', 'Horizontal Pod Autoscaler (HPA)']
      },
      {
        title: 'Module 3: Networking & Configuration Management',
        duration: 'Weeks 5-6',
        topics: ['ClusterIP, NodePort, and LoadBalancer services', 'Ingress controllers and routing rules', 'ConfigMaps and Secrets management', 'Persistent Volumes (PV) and PVCs']
      },
      {
        title: 'Module 4: Package Management & Production Operations',
        duration: 'Weeks 7-8',
        topics: ['Helm charts basics', 'Resource limits and quotas', 'Cluster monitoring and logging', 'Troubleshooting failing pods and crash loops']
      }
    ],
    projects: [
      {
        name: 'Resilient Microservices Deployment with Ingress and Auto-Scaling',
        description: 'Complete Kubernetes cluster deployment with automatic healing, zero-downtime rolling upgrades, and ingress routing.'
      }
    ],
    careerOutcomes: ['Kubernetes Administrator', 'Cloud Native DevOps Engineer', 'SRE Specialist'],
    faqs: [
      { question: 'Do I need Docker before taking Kubernetes?', answer: 'Yes, building and running Docker containers is a mandatory prerequisite for K8s.' }
    ]
  },
  {
    id: 'c',
    title: 'C Programming & Low-Level Computer Systems Course',
    seoTitle: 'C Programming Course in Ghaziabad | C Coaching & Classes',
    h1: 'C Programming Language & Systems Architecture Training',
    description: 'Master C fundamentals, Pointers, Memory Allocation, Structures, File I/O, and Data Structures in Ghaziabad.',
    category: 'Programming',
    badge: 'Core Foundation',
    duration: '8 Weeks (Practical Lab Track)',
    prerequisites: 'None. Perfect starting point for beginner engineering students.',
    targetAudience: 'B.Tech/BCA students and programmers who want deep understanding of memory.',
    overview: 'C is the mother of modern programming languages. Learning C unlocks a deep appreciation for how memory, pointers, and hardware operate beneath higher-level abstractions.',
    whyLearn: 'C builds unbeatable programming fundamentals and remains vital for embedded systems, operating system kernels, and high-performance computing.',
    tools: ['GCC Compiler', 'GDB Debugger', 'VS Code', 'Linux Shell'],
    modules: [
      {
        title: 'Module 1: Syntax, Variables & Operators',
        duration: 'Weeks 1-2',
        topics: ['Data representation in memory', 'Control structures (if/else, loops)', 'Functions and recursion', '1D and 2D arrays']
      },
      {
        title: 'Module 2: Pointers & Dynamic Memory Management',
        duration: 'Weeks 3-5',
        topics: ['Pointer arithmetic and memory addresses', 'Pointers and arrays relationship', 'malloc, calloc, realloc, and free', 'Memory leaks and segmentation faults']
      },
      {
        title: 'Module 3: Structures, Unions & File I/O',
        duration: 'Weeks 6-8',
        topics: ['struct definition and memory padding', 'Unions and bit fields', 'File pointers, reading and writing files', 'Building a dynamic linked list in C']
      }
    ],
    projects: [
      {
        name: 'Custom Memory Allocator & Linked List System',
        description: 'Low-level C implementation of dynamic data structures with rigorous pointer verification and zero memory leaks.'
      }
    ],
    careerOutcomes: ['Embedded Systems Programmer', 'Systems Software Developer', 'Computer Science Academic Excellence'],
    faqs: [
      { question: 'Is C recommended for first-year engineering students?', answer: 'Absolutely. It is the premier language for understanding pointers and algorithm efficiency.' }
    ]
  },
  {
    id: 'cpp',
    title: 'C++ & Object-Oriented Software Design Course',
    seoTitle: 'C++ Course in Ghaziabad | C++ Programming Training',
    h1: 'C++ Programming, OOP & Standard Template Library (STL) Training',
    description: 'Master C++, Object-Oriented Programming, Memory Management, Templates, STL, and Modern C++ features in Ghaziabad.',
    category: 'Programming',
    badge: 'High Performance',
    duration: '10 Weeks (Practical Lab Track)',
    prerequisites: 'Basic C or programming knowledge.',
    targetAudience: 'Competitive programmers, systems developers, and software engineering students.',
    overview: 'C++ combines the raw speed and hardware control of C with rich object-oriented and generic programming capabilities.',
    whyLearn: 'Dominant in systems programming, high-performance computing, high-frequency trading, and robotics.',
    tools: ['GCC / Clang', 'C++20', 'VS Code', 'GDB'],
    modules: [
      {
        title: 'Module 1: C++ Basics & Object-Oriented Principles',
        duration: 'Weeks 1-3',
        topics: ['References vs Pointers', 'Classes and objects', 'Constructors, Destructors, and Rule of Three/Five', 'Inheritance and virtual functions']
      },
      {
        title: 'Module 2: Standard Template Library (STL)',
        duration: 'Weeks 4-7',
        topics: ['Vectors, Lists, Deques', 'Maps, Sets, and Unordered variants', 'Iterators and algorithms (sort, binary_search)', 'Custom comparators']
      },
      {
        title: 'Module 3: Modern C++ & Memory Safety',
        duration: 'Weeks 8-10',
        topics: ['Smart Pointers (unique_ptr, shared_ptr, weak_ptr)', 'Move semantics and rvalue references', 'Lambda expressions', 'Exception handling']
      }
    ],
    projects: [
      {
        name: 'High-Performance In-Memory Key-Value Store in C++',
        description: 'Thread-safe in-memory cache utilizing STL containers, templates, and smart pointers.'
      }
    ],
    careerOutcomes: ['C++ Software Engineer', 'Systems Programmer', 'Competitive Programming Specialist'],
    faqs: [
      { question: 'Does this course help with competitive programming?', answer: 'Yes, in-depth mastery of the C++ STL gives you an immense algorithmic advantage.' }
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms (DSA) Interview Mastery Course',
    seoTitle: 'DSA Course in Ghaziabad | Data Structures & Algorithms Training',
    h1: 'Data Structures & Algorithms (DSA) for Tech Interviews',
    description: 'Crack coding rounds at top tech companies. Master Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Dynamic Programming, and Big-O in Ghaziabad.',
    category: 'Programming',
    badge: 'Interview Prep',
    duration: '12 Weeks (Intensive Problem Solving)',
    prerequisites: 'Proficiency in any one language (Java, C++, or Python).',
    targetAudience: 'Job seekers, final year college students, and developers aiming for tier-1 product companies.',
    overview: 'Technical coding interviews evaluate algorithmic problem-solving ability. This course trains you to analyze time and space complexity, select optimal data structures, and implement bug-free code under interview constraints.',
    whyLearn: 'DSA rounds are the primary screening gatekeeper for modern software engineering positions worldwide.',
    tools: ['LeetCode', 'HackerRank', 'Java / C++ / Python', 'Whiteboard Problem Solving'],
    modules: [
      {
        title: 'Module 1: Time Complexity & Linear Data Structures',
        duration: 'Weeks 1-3',
        topics: ['Big-O, Big-Theta, Big-Omega notation', 'Array techniques (Two Pointers, Sliding Window)', 'Singly and Doubly Linked Lists', 'Stacks and Queues (Monotonic Stack problems)']
      },
      {
        title: 'Module 2: Recursion, Searching & Sorting',
        duration: 'Weeks 4-6',
        topics: ['Binary Search and variants', 'Divide and conquer algorithms', 'Merge Sort and Quick Sort', 'Backtracking (N-Queens, Sudoku, Subsets)']
      },
      {
        title: 'Module 3: Non-Linear Structures: Trees & Heaps',
        duration: 'Weeks 7-9',
        topics: ['Binary Trees and Binary Search Trees (BST)', 'Tree traversals (Inorder, Preorder, Postorder, Level-order)', 'Priority Queues and Heaps (Min/Max Heap)', 'Tries for prefix search']
      },
      {
        title: 'Module 4: Graphs & Dynamic Programming (DP)',
        duration: 'Weeks 10-12',
        topics: ['Graph representation (Adjacency List/Matrix)', 'BFS, DFS, Topological Sort, and Dijkstra algorithm', 'DP fundamentals: Memoization vs Tabulation', 'Classic DP: 0/1 Knapsack, LCS, LIS, Coin Change']
      }
    ],
    projects: [
      {
        name: 'Complete Portfolio of 150+ Solved Algorithmic Patterns',
        description: 'Documented problem repository spanning sliding window, graph traversals, and dynamic programming patterns.'
      }
    ],
    careerOutcomes: ['Software Development Engineer (SDE 1/2)', 'Algorithmic Problem Solver', 'Product Company Candidate'],
    faqs: [
      { question: 'Can I choose my preferred language for DSA?', answer: 'Yes! We support and mentor students coding in Java, C++, or Python.' }
    ]
  },
  {
    id: 'mongodb',
    title: 'MongoDB & NoSQL Document Database Engineering Course',
    seoTitle: 'MongoDB Course in Ghaziabad | NoSQL Database Training',
    h1: 'MongoDB NoSQL Architecture & Aggregation Pipeline Training',
    description: 'Learn MongoDB document storage, CRUD, Aggregation framework, indexing, schema design, and replication in Ghaziabad.',
    category: 'Database',
    badge: 'Modern Database',
    duration: '6 Weeks (Practical Lab Track)',
    prerequisites: 'Basic understanding of data concepts.',
    targetAudience: 'Backend developers and full-stack engineers.',
    overview: 'MongoDB is the premier document database powering flexible, high-scale modern applications.',
    whyLearn: 'NoSQL databases enable agile schema evolution and horizontal scalability for modern mobile and web backends.',
    tools: ['MongoDB Community Server', 'MongoDB Compass', 'Mongoose ODM', 'Mongosh Shell'],
    modules: [
      {
        title: 'Module 1: Document Model & CRUD Operations',
        duration: 'Weeks 1-2',
        topics: ['JSON/BSON fundamentals', 'insert, find, update, delete commands', 'Query operators ($gt, $in, $regex)', 'Array update operators']
      },
      {
        title: 'Module 2: Aggregation Framework Mastery',
        duration: 'Weeks 3-4',
        topics: ['$match and $project stages', '$group and accumulator operators', '$lookup multi-collection joins', '$unwind and pagination']
      },
      {
        title: 'Module 3: Indexing, Performance & Architecture',
        duration: 'Weeks 5-6',
        topics: ['Single field and Compound indexes', 'Covered queries and executionStats', 'Replica sets and high availability', 'Data modeling patterns (Embedding vs Referencing)']
      }
    ],
    projects: [
      {
        name: 'High-Volume Content Catalog Database with Compound Indexes',
        description: 'NoSQL schema design with rich aggregation pipelines for analytics and sub-millisecond query execution.'
      }
    ],
    careerOutcomes: ['NoSQL Database Developer', 'Full Stack Developer', 'Data Persistence Specialist'],
    faqs: [
      { question: 'When should I choose MongoDB over SQL?', answer: 'When dealing with hierarchical documents, rapidly evolving schemas, or horizontal scaling requirements.' }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth Strategy Course',
    seoTitle: 'Digital Marketing Course in Ghaziabad | Digital Marketing Training',
    h1: 'Digital Marketing, Performance Ads & Organic Growth Training',
    description: 'Learn SEO, Google Ads (SEM), Social Media Marketing, Meta Ads, Email Marketing, Content Strategy, and Analytics in Ghaziabad.',
    category: 'SEO',
    badge: 'Growth Career',
    duration: '10 Weeks (Practical Lab Track)',
    prerequisites: 'Basic internet and computer skills.',
    targetAudience: 'Entrepreneurs, marketing graduates, freelance consultants, and career switchers.',
    overview: 'Master multi-channel digital acquisition across search, social, paid advertising, and automated email funnels.',
    whyLearn: 'Every business needs customer acquisition. Practical digital marketing skills ensure direct employability and freelance capability.',
    tools: ['Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'Canva', 'Mailchimp', 'Search Console'],
    modules: [
      {
        title: 'Module 1: Digital Strategy & Content Marketing',
        duration: 'Weeks 1-2',
        topics: ['Customer personas and sales funnels', 'Content strategy and copywriting', 'Organic brand building']
      },
      {
        title: 'Module 2: Search Engine Optimization (SEO)',
        duration: 'Weeks 3-5',
        topics: ['On-page SEO and keyword research', 'Technical health basics', 'Local SEO & Google Business Profile']
      },
      {
        title: 'Module 3: Paid Advertising (Google Ads & Meta Ads)',
        duration: 'Weeks 6-8',
        topics: ['Search campaign setup and bidding strategies', 'Facebook & Instagram ad targeting', 'Retargeting pixels and conversion tracking']
      },
      {
        title: 'Module 4: Web Analytics & ROI Optimization',
        duration: 'Weeks 9-10',
        topics: ['Google Analytics 4 event tracking', 'A/B testing landing pages', 'Campaign ROI analysis and client reporting']
      }
    ],
    projects: [
      {
        name: 'End-to-End Multi-Channel Product Launch Campaign',
        description: 'Complete campaign architecture covering organic search, landing page copy, Google search ads, and GA4 tracking.'
      }
    ],
    careerOutcomes: ['Digital Marketing Executive', 'PPC Campaign Specialist', 'Growth Marketing Manager'],
    faqs: [
      { question: 'Do we work with real ad campaign dashboards?', answer: 'Yes, training includes hands-on setup in Google Ads and Meta Business Manager.' }
    ]
  }
];

module.exports = { COURSES };
