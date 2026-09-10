/**
 * PROGRAMMINGWALA - Complete Static Site Compilation Engine
 * Compiles all ~300 unique HTML pages, XML sitemap, and robots.txt.
 * Pure Vanilla HTML5, CSS3, JS, SVG. Zero external framework dependencies.
 */

const fs = require('fs');
const path = require('path');
const {
  SITE_CONFIG,
  getRelativePrefix,
  renderHead,
  renderHeader,
  renderBreadcrumb,
  renderLocationCard,
  renderInquiryForm,
  renderFooter,
  escapeHtml
} = require('./templates');
const { buildFullCatalog } = require('./data/catalog');

const ROOT_DIR = path.resolve(__dirname, '..');

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  fs.mkdirSync(dirname, { recursive: true });
}

function resolveFilePath(url) {
  if (url === '/' || url === '/index.html' || url === 'index.html') {
    return path.join(ROOT_DIR, 'index.html');
  }
  if (url.endsWith('.html')) {
    return path.join(ROOT_DIR, url.replace(/^\//, ''));
  }
  // Directory path e.g. /courses/java/ -> courses/java/index.html
  const clean = url.replace(/^\//, '').replace(/\/$/, '');
  return path.join(ROOT_DIR, clean, 'index.html');
}

// ----------------------------------------------------
// HOMEPAGE GENERATOR (All 26 Required Sections)
// ----------------------------------------------------
function generateHomepage() {
  const relativePrefix = './';
  const headHtml = renderHead({
    title: 'Appletree Infotech | Job-Ready Programming, Data Science, Full Stack & SEO Courses in Ghaziabad',
    description: 'Premier technical education institute in RDC Ghaziabad. Job-ready classroom coaching in Java, Python, Data Science, MERN Full Stack, and SEO.',
    canonicalUrl: '/',
    ogType: 'website',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const inquiryFormHtml = renderInquiryForm(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  const bodyHtml = `
  <main id="mainContent">
    <!-- SECTION 1: HERO -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div class="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>Ghaziabad Premier Technology Institute</span>
            </div>
            <h1 class="hero-title">Job-Ready Programming, Data Science, Full Stack &amp; SEO Courses</h1>
            <p class="hero-lead">Learn practical technical skills through structured courses, hands-on projects, interview preparation and career-focused training.</p>
            
            <div class="hero-cta-group">
              <a href="#popularCourses" class="btn btn-accent btn-lg">Explore Courses</a>
              <a href="tel:${SITE_CONFIG.phone}" class="btn btn-cta btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call ${SITE_CONFIG.phoneDisplay}
              </a>
              <a href="#inquiryFormSection" class="btn btn-secondary btn-lg">Get Course Details</a>
              <a href="${SITE_CONFIG.mapsSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white btn-lg">Visit Training Center</a>
            </div>

            <div class="hero-highlights">
              <div class="highlight-item">
                <span class="highlight-number">100%</span>
                <span class="highlight-label">Practical Lab Coding</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">RDC Hub</span>
                <span class="highlight-label">Prime Ghaziabad Location</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">1-on-1</span>
                <span class="highlight-label">Senior Code Reviews</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-number">Projects</span>
                <span class="highlight-label">Production Deployments</span>
              </div>
            </div>
          </div>

          <div class="hero-card">
            <h3 style="color: #ffffff; margin-top: 0; font-size: 1.4rem;">In-Person Training Highlights</h3>
            <p style="color: #cbd5e1;">Located at <strong>${SITE_CONFIG.address}</strong>, our campus provides high-performance workstations, real cloud accounts, and structured classroom batches.</p>
            <ul style="color: #cbd5e1; padding-left: 1.25rem;">
              <li>Dedicated mentor guidance for every module</li>
              <li>Real database schemas and enterprise APIs</li>
              <li>Resume building & mock technical interviews</li>
              <li>Flexible weekday and weekend batches</li>
            </ul>
            <div style="margin-top: 1.5rem;">
              <a href="${relativePrefix}locations/ghaziabad/index.html" class="btn btn-accent btn-full">Tour Ghaziabad Campus</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: COURSE SEARCH & INSTANT FILTER -->
    <section class="search-section">
      <div class="container">
        <div class="search-box-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color: var(--color-accent); flex-shrink: 0;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="search" id="siteSearchInput" class="search-input" placeholder="Search courses, technologies, tutorials or interview topics (e.g., Java, Python, Spring Boot, React, SEO)..." aria-label="Search courses and tutorials">
        </div>
        <p id="searchNoResults" style="display: none; text-align: center; margin-top: 1rem; color: var(--color-text-muted);">No matching courses found. Try searching for Java, Python, React, SQL, or Docker.</p>
      </div>
    </section>

    <!-- SECTION 3: POPULAR COURSES -->
    <section class="section" id="popularCourses">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Career Foundations</span>
          <h2>Popular Technical Courses</h2>
          <p>Carefully structured learning paths designed for students and working professionals aiming for high-impact software careers.</p>
        </div>

        <div class="grid-3" id="searchableCardsContainer">
          <!-- SECTION 4: JAVA COURSE -->
          <article class="course-card searchable-card" data-keywords="java spring boot hibernate microservices jvm oop collections">
            <span class="card-tag hot">Enterprise Core</span>
            <h3><a href="${relativePrefix}courses/java/index.html">Java Full Stack &amp; Spring Boot</a></h3>
            <p>From JVM memory allocation and OOP to high-concurrency Spring Boot microservices, JPA/Hibernate, and Dockerized cloud deployments.</p>
            <div class="card-meta">
              <span>Duration: 16 Weeks</span>
              <span>•</span>
              <span>Level: Beginner to Pro</span>
            </div>
            <div class="mt-4">
              <a href="${relativePrefix}courses/java/index.html" class="btn btn-secondary btn-full btn-sm">View Java Syllabus</a>
            </div>
          </article>

          <!-- SECTION 5: PYTHON COURSE -->
          <article class="course-card searchable-card" data-keywords="python django fastapi automation scripting data oop">
            <span class="card-tag">High Productivity</span>
            <h3><a href="${relativePrefix}courses/python/index.html">Python Developer &amp; Automation</a></h3>
            <p>Master Python fundamentals, asynchronous web APIs with FastAPI, database persistence, and automated scraping workflows.</p>
            <div class="card-meta">
              <span>Duration: 14 Weeks</span>
              <span>•</span>
              <span>Level: All Levels</span>
            </div>
            <div class="mt-4">
              <a href="${relativePrefix}courses/python/index.html" class="btn btn-secondary btn-full btn-sm">View Python Syllabus</a>
            </div>
          </article>

          <!-- SECTION 6: DATA SCIENCE COURSE -->
          <article class="course-card searchable-card" data-keywords="data science machine learning pandas numpy statistics analytics ai python">
            <span class="card-tag hot">High Demand</span>
            <h3><a href="${relativePrefix}courses/data-science/index.html">Data Science &amp; Machine Learning</a></h3>
            <p>Applied statistics, exploratory data analysis with Pandas &amp; NumPy, predictive modeling with Scikit-Learn, and model serving with FastAPI.</p>
            <div class="card-meta">
              <span>Duration: 20 Weeks</span>
              <span>•</span>
              <span>Level: Intermediate</span>
            </div>
            <div class="mt-4">
              <a href="${relativePrefix}courses/data-science/index.html" class="btn btn-secondary btn-full btn-sm">View Data Science Syllabus</a>
            </div>
          </article>

          <!-- SECTION 7: MERN FULL STACK COURSE -->
          <article class="course-card searchable-card" data-keywords="mern react node express mongodb javascript full stack web development">
            <span class="card-tag">Web Flagship</span>
            <h3><a href="${relativePrefix}courses/mern-full-stack/index.html">MERN Full Stack Development</a></h3>
            <p>Build modern single-page apps using React 18, scalable backend services with Node.js &amp; Express, and document databases with MongoDB.</p>
            <div class="card-meta">
              <span>Duration: 16 Weeks</span>
              <span>•</span>
              <span>Level: Beginner to Pro</span>
            </div>
            <div class="mt-4">
              <a href="${relativePrefix}courses/mern-full-stack/index.html" class="btn btn-secondary btn-full btn-sm">View MERN Syllabus</a>
            </div>
          </article>

          <!-- SECTION 8: SEO COURSE -->
          <article class="course-card searchable-card" data-keywords="seo search engine optimization technical seo local seo schema search console">
            <span class="card-tag">Organic Growth</span>
            <h3><a href="${relativePrefix}courses/seo/index.html">Technical SEO &amp; Search Marketing</a></h3>
            <p>Learn ethical, white-hat SEO: crawl budget, robots.txt, XML sitemaps, Core Web Vitals, Schema.org JSON-LD, and Google Business Profile.</p>
            <div class="card-meta">
              <span>Duration: 10 Weeks</span>
              <span>•</span>
              <span>Level: All Levels</span>
            </div>
            <div class="mt-4">
              <a href="${relativePrefix}courses/seo/index.html" class="btn btn-secondary btn-full btn-sm">View SEO Syllabus</a>
            </div>
          </article>

          <!-- SECTION 9: FULL STACK DEVELOPMENT -->
          <article class="course-card searchable-card" data-keywords="full stack software engineer frontend backend database devops architecture">
            <span class="card-tag">Career Track</span>
            <h3><a href="${relativePrefix}courses/full-stack-development/index.html">Full Stack Software Engineering</a></h3>
            <p>Comprehensive multi-tier engineering covering frontend state, REST and GraphQL APIs, relational SQL, and cloud server deployment.</p>
            <div class="card-meta">
              <span>Duration: 20 Weeks</span>
              <span>•</span>
              <span>Level: Comprehensive</span>
            </div>
            <div class="mt-4">
              <a href="${relativePrefix}courses/full-stack-development/index.html" class="btn btn-secondary btn-full btn-sm">Explore Program</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 10 & 11: DEVOPS & AWS INFRASTRUCTURE -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Cloud &amp; Operations</span>
          <h2>DevOps, Docker &amp; Cloud Infrastructure</h2>
          <p>Automate delivery pipelines, package scalable microservices, and deploy to modern cloud environments.</p>
        </div>

        <div class="grid-3">
          <article class="course-card">
            <h3><a href="${relativePrefix}courses/devops/index.html">DevOps Engineering &amp; CI/CD</a></h3>
            <p>Linux administration, Git collaboration, automated Jenkins builds, Docker packaging, and Kubernetes container management.</p>
            <a href="${relativePrefix}courses/devops/index.html" class="btn btn-secondary btn-sm mt-4">DevOps Syllabus</a>
          </article>

          <article class="course-card">
            <h3><a href="${relativePrefix}courses/aws/index.html">AWS Cloud Architecture</a></h3>
            <p>Master EC2, S3, VPC networking, RDS databases, IAM security policies, and Elastic Load Balancing on real cloud accounts.</p>
            <a href="${relativePrefix}courses/aws/index.html" class="btn btn-secondary btn-sm mt-4">AWS Syllabus</a>
          </article>

          <article class="course-card">
            <h3><a href="${relativePrefix}courses/docker/index.html">Docker Containerization</a></h3>
            <p>Deep dive into multi-stage Dockerfiles, image optimization, Docker Compose networking, and container security.</p>
            <a href="${relativePrefix}courses/docker/index.html" class="btn btn-secondary btn-sm mt-4">Docker Syllabus</a>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 12: PROGRAMMING LANGUAGES -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Polyglot Mastery</span>
          <h2>Core Programming Languages</h2>
          <p>Build strong foundational computer science skills across memory-managed and compiled languages.</p>
        </div>

        <div class="grid-4">
          <div class="course-card">
            <h4><a href="${relativePrefix}courses/c/index.html">C Programming</a></h4>
            <p>Pointers, dynamic memory allocation, structs, and computer architecture fundamentals.</p>
          </div>
          <div class="course-card">
            <h4><a href="${relativePrefix}courses/cpp/index.html">C++ &amp; STL</a></h4>
            <p>Object-oriented software design, Standard Template Library (STL), and competitive programming.</p>
          </div>
          <div class="course-card">
            <h4><a href="${relativePrefix}courses/javascript/index.html">Modern JavaScript</a></h4>
            <p>ES6+ to ES2024, closures, prototypes, asynchronous event loop, and DOM optimization.</p>
          </div>
          <div class="course-card">
            <h4><a href="${relativePrefix}courses/dsa/index.html">Data Structures &amp; Algorithms</a></h4>
            <p>Arrays, Trees, Graphs, Dynamic Programming, and Big-O technical interview problem solving.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 13: DATABASE COURSES -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Data Persistence</span>
          <h2>Database Engineering &amp; Query Optimization</h2>
          <p>Learn to design resilient database schemas, write complex joins, and tune slow production queries.</p>
        </div>

        <div class="grid-3">
          <div class="course-card">
            <h3><a href="${relativePrefix}courses/sql/index.html">SQL &amp; Relational Databases</a></h3>
            <p>Joins, subqueries, Common Table Expressions (CTEs), window functions, and ACID transaction boundaries.</p>
            <a href="${relativePrefix}courses/sql/index.html" class="btn btn-secondary btn-sm mt-4">SQL Details</a>
          </div>
          <div class="course-card">
            <h3><a href="${relativePrefix}courses/mysql/index.html">MySQL Administration</a></h3>
            <p>InnoDB storage engine, B-Tree indexes, query execution analysis with EXPLAIN, and replication.</p>
            <a href="${relativePrefix}courses/mysql/index.html" class="btn btn-secondary btn-sm mt-4">MySQL Details</a>
          </div>
          <div class="course-card">
            <h3><a href="${relativePrefix}courses/mongodb/index.html">MongoDB NoSQL Engineering</a></h3>
            <p>BSON document storage, aggregation pipelines ($match, $group, $lookup), and indexing strategies.</p>
            <a href="${relativePrefix}courses/mongodb/index.html" class="btn btn-secondary btn-sm mt-4">MongoDB Details</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 14 & 15: CYBERSECURITY & AI/ML -->
    <section class="section">
      <div class="container">
        <div class="grid-2">
          <div style="background: var(--color-surface); padding: var(--space-8); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
            <span class="card-tag">Security Operations</span>
            <h3><a href="${relativePrefix}courses/cybersecurity/index.html">Cybersecurity &amp; Application Defense</a></h3>
            <p>Defend systems against OWASP Top 10 vulnerabilities (SQL Injection, XSS, CSRF), inspect packets with Wireshark, and audit security configurations.</p>
            <a href="${relativePrefix}courses/cybersecurity/index.html" class="btn btn-secondary btn-sm mt-4">Security Course Overview</a>
          </div>

          <div style="background: var(--color-surface); padding: var(--space-8); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
            <span class="card-tag hot">Next-Gen Tech</span>
            <h3><a href="${relativePrefix}courses/artificial-intelligence/index.html">Artificial Intelligence &amp; Modern AI</a></h3>
            <p>Neural network fundamentals, transfer learning with PyTorch, natural language embeddings, and integrating intelligent APIs into production apps.</p>
            <a href="${relativePrefix}courses/artificial-intelligence/index.html" class="btn btn-secondary btn-sm mt-4">AI Course Overview</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 16: PRACTICAL PROJECTS -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <span class="section-badge" style="background: rgba(255,255,255,0.15); color: var(--color-accent-light);">Real Code, Real Systems</span>
          <h2>Enterprise Capstone Projects</h2>
          <p>Every student builds and deploys complete multi-tier applications to real cloud servers.</p>
        </div>

        <div class="grid-3">
          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: var(--radius-lg); padding: var(--space-6);">
            <h4 style="color: #ffffff; margin-top: 0;">Distributed E-Commerce Microservices</h4>
            <p style="color: #cbd5e1;">Spring Boot 3, Redis cart caching, PostgreSQL relational persistence, JWT security, and Docker Compose deployment.</p>
            <a href="${relativePrefix}projects/java-microservices-ecommerce/index.html" class="btn btn-outline-white btn-sm mt-4">View Architecture Blueprint</a>
          </div>

          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: var(--radius-lg); padding: var(--space-6);">
            <h4 style="color: #ffffff; margin-top: 0;">Predictive ML Analytics API</h4>
            <p style="color: #cbd5e1;">Scikit-Learn and XGBoost ensemble pipelines wrapped in low-latency FastAPI endpoints with automated Docker packaging.</p>
            <a href="${relativePrefix}projects/python-predictive-analytics/index.html" class="btn btn-outline-white btn-sm mt-4">View ML Blueprint</a>
          </div>

          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: var(--radius-lg); padding: var(--space-6);">
            <h4 style="color: #ffffff; margin-top: 0;">Automated Technical SEO Audit Crawler</h4>
            <p style="color: #cbd5e1;">Node.js crawler inspecting status codes, duplicate canonicals, robots.txt directives, and Schema.org JSON-LD structured data.</p>
            <a href="${relativePrefix}projects/seo-audit-crawler/index.html" class="btn btn-outline-white btn-sm mt-4">View Crawler Blueprint</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 17 & 18: INTERVIEW PREPARATION & CAREER ROADMAPS -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Career Readiness</span>
          <h2>Technical Interview Hub &amp; Career Roadmaps</h2>
          <p>Prepare for rigorous engineering rounds with real interview questions, trade-off analyses, and step-by-step career milestones.</p>
        </div>

        <div class="grid-2">
          <div>
            <h3>Interview Preparation Hub</h3>
            <p>Our dedicated interview repository contains realistic questions with code examples, underlying theoretical mechanics, pro tips, and common mistakes:</p>
            <ul>
              <li><a href="${relativePrefix}interview-questions/java/index.html">Enterprise Java Technical Interview Questions</a></li>
              <li><a href="${relativePrefix}interview-questions/spring-boot/index.html">Spring Boot 3 &amp; JPA Technical Questions</a></li>
              <li><a href="${relativePrefix}interview-questions/python/index.html">Python Developer Technical Questions</a></li>
              <li><a href="${relativePrefix}interview-questions/sql/index.html">SQL Querying &amp; Window Function Questions</a></li>
              <li><a href="${relativePrefix}interview-questions/javascript/index.html">Modern JavaScript &amp; Event Loop Questions</a></li>
              <li><a href="${relativePrefix}interview-questions/technical-seo/index.html">Technical SEO Technical Questions</a></li>
            </ul>
          </div>

          <div>
            <h3>Career Roadmaps</h3>
            <p>Explore structured chronological roadmaps detailing exactly what to master first, which tools to configure, and what mistakes to avoid:</p>
            <ul>
              <li><a href="${relativePrefix}career/java-developer-roadmap/index.html">Java Developer Career Roadmap</a></li>
              <li><a href="${relativePrefix}career/python-developer-roadmap/index.html">Python Developer Career Roadmap</a></li>
              <li><a href="${relativePrefix}career/data-scientist-roadmap/index.html">Data Scientist Career Roadmap</a></li>
              <li><a href="${relativePrefix}career/mern-developer-roadmap/index.html">MERN Full Stack Developer Roadmap</a></li>
              <li><a href="${relativePrefix}career/devops-engineer-roadmap/index.html">DevOps &amp; Cloud Engineer Roadmap</a></li>
              <li><a href="${relativePrefix}career/seo-specialist-roadmap/index.html">Technical SEO Specialist Roadmap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 19 & 20: WHY CHOOSE OUR TRAINING & 4-STEP LEARNING PROCESS -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Methodology</span>
          <h2>Why Choose In-Person Training at Appletree Infotech</h2>
          <p>We believe engineering is learned through active problem solving, hands-on lab experimentation, and continuous code refinement.</p>
        </div>

        <div class="grid-4">
          <div class="course-card">
            <h4>1. Concept Deep Dive</h4>
            <p>We dissect the internal mechanics—how memory is allocated, how queries execute, and how network packets flow.</p>
          </div>
          <div class="course-card">
            <h4>2. Live Lab Coding</h4>
            <p>No passive watching. Students write, run, and debug production code directly on our RDC Ghaziabad workstations.</p>
          </div>
          <div class="course-card">
            <h4>3. Architectural Review</h4>
            <p>Instructors review your code line-by-line, providing feedback on performance, clean architecture, and security.</p>
          </div>
          <div class="course-card">
            <h4>4. Interview Readiness</h4>
            <p>Conduct mock interviews, solve whiteboard data structures, and polish your GitHub portfolio for top employers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 21 & 22: COURSE SYLLABUS & STUDENT RESOURCES -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Student Resources</span>
          <h2>Free Developer Handbooks &amp; Curricula</h2>
          <p>Access our curated cheat sheets, syntax summaries, and architectural inspection checklists.</p>
        </div>

        <div class="grid-3">
          <div class="course-card">
            <h4><a href="${relativePrefix}resources/java-cheat-sheet/index.html">Java Quick Reference Sheet</a></h4>
            <p>Core syntax, Stream collectors, Collections hierarchy, and multithreading primitives in one place.</p>
          </div>
          <div class="course-card">
            <h4><a href="${relativePrefix}resources/sql-query-reference/index.html">SQL Query Handbook</a></h4>
            <p>Joins, Common Table Expressions, Window Functions, and indexing commands for quick review.</p>
          </div>
          <div class="course-card">
            <h4><a href="${relativePrefix}resources/technical-seo-audit-template/index.html">Technical SEO Audit Template</a></h4>
            <p>Comprehensive 50-point checklist covering crawlability, metadata, Schema, and Core Web Vitals.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 23: FAQS -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Common Questions</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our classroom batches, lab facilities, and learning support.</p>
        </div>

        <div class="accordion-group" style="max-width: 800px; margin: 0 auto;">
          <details class="accordion-item">
            <summary>Where is the physical training center located in Ghaziabad?</summary>
            <div class="accordion-body">
              Our campus is located at <strong>${SITE_CONFIG.address}</strong>. RDC is Ghaziabad's central educational district, easily accessible from Raj Nagar, Kavi Nagar, Crossing Republik, and the Shaheed Sthal Red Line Metro Station.
            </div>
          </details>

          <details class="accordion-item">
            <summary>Do I need prior programming experience before joining?</summary>
            <div class="accordion-body">
              No. Our foundation courses (Core Java, Python, Web Development) start from scratch with computer logic, memory allocation, and syntax basics before moving to intermediate and advanced frameworks.
            </div>
          </details>

          <details class="accordion-item">
            <summary>Do you offer weekend batches for working professionals?</summary>
            <div class="accordion-body">
              Yes. We provide weekend intensive batches tailored for working software developers and professionals commuting from Noida, Ghaziabad, and Delhi.
            </div>
          </details>

          <details class="accordion-item">
            <summary>How can I speak directly with a course mentor or counselor?</summary>
            <div class="accordion-body">
              You can call our direct admissions helpline at <a href="tel:${SITE_CONFIG.phone}"><strong>${SITE_CONFIG.phoneDisplay}</strong></a>, visit our campus at ${SITE_CONFIG.address}, or submit the course consultation form below.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- SECTION 24: TRAINING CENTER LOCATION -->
    <section class="section">
      <div class="container">
        ${locationCardHtml}
      </div>
    </section>

    <!-- SECTION 25: CONTACT & INQUIRY FORM -->
    ${inquiryFormHtml}

    <!-- SECTION 26: FINAL CTA -->
    <section class="section section-dark text-center">
      <div class="container" style="max-width: 720px;">
        <h2>Ready to Master Real-World Software Engineering?</h2>
        <p style="color: #cbd5e1; margin-bottom: 2rem;">Visit our campus at C-60 R.K Tower, 3rd Floor, RDC, Ghaziabad, or contact our admissions counseling team today.</p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="tel:${SITE_CONFIG.phone}" class="btn btn-accent btn-lg">Call ${SITE_CONFIG.phoneDisplay}</a>
          <a href="${relativePrefix}contact.html" class="btn btn-outline-white btn-lg">Contact &amp; Directions</a>
        </div>
      </div>
    </section>
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// FULL COURSE PAGE GENERATOR (30 Structural Elements)
// ----------------------------------------------------
function generateCoursePage(course, item) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'website',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const inquiryFormHtml = renderInquiryForm(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  const modulesHtml = (course.modules || []).map(m => `
    <div class="syllabus-module">
      <div class="module-header">
        <h3 class="module-title">${escapeHtml(m.title)}</h3>
        <span class="module-duration">${escapeHtml(m.duration)}</span>
      </div>
      <div class="module-content">
        <ul class="module-topics">
          ${(m.topics || []).map(t => `<li class="topic-item"><span class="topic-bullet">&#10003;</span> <span>${escapeHtml(t)}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  const projectsHtml = (course.projects || []).map(p => `
    <div class="course-card" style="margin-bottom: 1rem;">
      <h4>${escapeHtml(p.name)}</h4>
      <p>${escapeHtml(p.description)}</p>
    </div>
  `).join('');

  const faqsHtml = (course.faqs || []).map(f => `
    <details class="accordion-item">
      <summary>${escapeHtml(f.question)}</summary>
      <div class="accordion-body">${escapeHtml(f.answer)}</div>
    </details>
  `).join('');

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    
    <div class="container">
      <div style="margin-bottom: var(--space-8);">
        <span class="card-tag hot">${escapeHtml(course.badge || 'Professional Track')}</span>
        <h1>${escapeHtml(item.h1)}</h1>
        <p class="lead" style="font-size: 1.2rem; color: var(--color-text-muted); max-width: 850px;">${escapeHtml(course.overview)}</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <a href="#inquiryFormSection" class="btn btn-accent">Get Syllabus &amp; Batch Details</a>
          <a href="tel:${SITE_CONFIG.phone}" class="btn btn-cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call ${SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>

      ${course.svgDiagram ? `
        <div style="margin: var(--space-8) 0; box-shadow: var(--shadow-lg); border-radius: var(--radius-lg); overflow: hidden;">
          <img src="${relativePrefix}${course.svgDiagram}" alt="${escapeHtml(course.title)} Architecture" width="800" height="450" loading="lazy">
        </div>
      ` : ''}

      <div class="grid-2" style="margin-top: var(--space-12);">
        <div>
          <h2>Why Learn This Technology?</h2>
          <p>${escapeHtml(course.whyLearn)}</p>

          <h2>Who Should Take This Course?</h2>
          <p>${escapeHtml(course.targetAudience)}</p>

          <h2>Course Prerequisites</h2>
          <p>${escapeHtml(course.prerequisites)}</p>

          <h2>Tools &amp; Frameworks Covered</h2>
          <div class="roadmap-skills-tags" style="margin-bottom: var(--space-6);">
            ${(course.tools || []).map(tool => `<span class="roadmap-tag">${escapeHtml(tool)}</span>`).join('')}
          </div>
        </div>

        <div>
          <h2>Career Opportunities &amp; Outcomes</h2>
          <p>Graduates of this program are qualified for technical roles including:</p>
          <ul>
            ${(course.careerOutcomes || []).map(role => `<li><strong>${escapeHtml(role)}</strong></li>`).join('')}
          </ul>

          <div style="background: #f8fafc; border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-6); margin-top: var(--space-6);">
            <h4 style="margin-top: 0;">Ghaziabad Training Center Location</h4>
            <p style="margin-bottom: 0.5rem;"><strong>Campus:</strong> ${SITE_CONFIG.address}</p>
            <p style="margin-bottom: 1rem;"><strong>Inquiries:</strong> <a href="tel:${SITE_CONFIG.phone}">${SITE_CONFIG.phoneDisplay}</a></p>
            <a href="${SITE_CONFIG.mapsSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Get Directions</a>
          </div>
        </div>
      </div>

      <section style="margin-top: var(--space-16);">
        <div class="section-header" style="text-align: left; margin-bottom: var(--space-8);">
          <span class="section-badge">Comprehensive Curriculum</span>
          <h2>Complete Course Syllabus</h2>
          <p>Structured modular learning path from foundational concepts to production-grade implementation.</p>
        </div>

        <div class="syllabus-container">
          ${modulesHtml}
        </div>
      </section>

      <section style="margin-top: var(--space-12);">
        <h2>Real-World Enterprise Projects</h2>
        <p>You will write code for production scenarios, not just hello-world exercises:</p>
        <div class="grid-2">
          ${projectsHtml}
        </div>
      </section>

      <section style="margin-top: var(--space-12);">
        <h2>Frequently Asked Questions</h2>
        <div class="accordion-group">
          ${faqsHtml}
        </div>
      </section>

      ${locationCardHtml}
    </div>

    ${inquiryFormHtml}
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// LOCAL GHAZIABAD PAGE GENERATOR
// ----------------------------------------------------
function generateLocalPage(item) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'website',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const inquiryFormHtml = renderInquiryForm(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container">
      <div style="margin-bottom: var(--space-8);">
        <span class="card-tag hot">RDC Ghaziabad Campus</span>
        <h1>${escapeHtml(item.h1)}</h1>
      </div>

      <div class="location-hero-card">
        <span class="location-badge">Physical Training Facility</span>
        <h2>In-Person Classroom Coaching &amp; Computer Lab in Ghaziabad</h2>
        <p>Located on the 3rd Floor of R.K Tower in Raj Nagar District Centre (RDC), our campus provides dedicated workstations, gigabit connectivity, and direct face-to-face mentorship.</p>
        
        <div class="location-specs-grid">
          <div class="spec-item">
            <span class="spec-label">Center Address</span>
            <span class="spec-val">${SITE_CONFIG.address}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Phone Hotline</span>
            <span class="spec-val"><a href="tel:${SITE_CONFIG.phone}" style="color: #ffffff; text-decoration: underline;">${SITE_CONFIG.phoneDisplay}</a></span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Nearest Metro</span>
            <span class="spec-val">Shaheed Sthal (Red Line)</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Batch Options</span>
            <span class="spec-val">Weekday &amp; Weekend Tracks</span>
          </div>
        </div>
      </div>

      <div style="margin: var(--space-10) 0; font-size: 1.05rem; line-height: 1.7;">
        ${item.rawContent}
      </div>

      ${locationCardHtml}
    </div>
    ${inquiryFormHtml}
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// TUTORIAL PAGE GENERATOR
// ----------------------------------------------------
function generateTutorialPage(tut, item) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'article',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  const takeawaysHtml = (tut.takeaways || []).map(t => `<li>${escapeHtml(t)}</li>`).join('');
  const faqsHtml = (tut.faqs || []).map(f => `
    <details class="accordion-item">
      <summary>${escapeHtml(f.question)}</summary>
      <div class="accordion-body">${escapeHtml(f.answer)}</div>
    </details>
  `).join('');

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container" style="max-width: 900px;">
      <article>
        <span class="card-tag">${escapeHtml(item.category)} Technical Tutorial</span>
        <h1>${escapeHtml(item.h1)}</h1>
        <p class="lead" style="font-size: 1.15rem; color: var(--color-text-muted);">${escapeHtml(item.metaDescription)}</p>

        <div class="code-block">
          <div class="code-header">
            <span class="code-lang-badge">${escapeHtml(item.category)}</span>
            <button class="btn-copy-code" type="button" aria-label="Copy code to clipboard">Copy Code</button>
          </div>
          <pre><code>${escapeHtml(tut.code)}</code></pre>
        </div>

        <div style="font-size: 1.05rem; line-height: 1.7; margin: var(--space-8) 0;">
          ${tut.explanation}
        </div>

        <div class="callout callout-success">
          <div class="callout-title">Key Engineering Takeaways</div>
          <ul style="margin-bottom: 0;">
            ${takeawaysHtml}
          </ul>
        </div>

        ${tut.faqs && tut.faqs.length > 0 ? `
          <div style="margin-top: var(--space-10);">
            <h3>Frequently Asked Questions</h3>
            <div class="accordion-group">
              ${faqsHtml}
            </div>
          </div>
        ` : ''}

        <div class="callout" style="margin-top: var(--space-8);">
          <div class="callout-title">Master This in Our Ghaziabad Coding Labs</div>
          <p>Gain deep mastery over these concepts with direct instructor guidance, code reviews, and mock interviews at <strong>${SITE_CONFIG.address}</strong>.</p>
          <a href="${relativePrefix}courses/java/index.html" class="btn btn-primary btn-sm">Explore Related Course</a>
          <a href="tel:${SITE_CONFIG.phone}" class="btn btn-secondary btn-sm" style="margin-left: 0.5rem;">Call ${SITE_CONFIG.phoneDisplay}</a>
        </div>
      </article>

      ${locationCardHtml}
    </div>
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// EXTENDED TUTORIAL GENERATOR
// ----------------------------------------------------
function generateExtendedTutorialPage(item) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'article',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container" style="max-width: 900px;">
      <article>
        <span class="card-tag">${escapeHtml(item.category)} In-Depth Guide</span>
        <h1>${escapeHtml(item.h1)}</h1>
        <p class="lead" style="font-size: 1.15rem; color: var(--color-text-muted);">${escapeHtml(item.metaDescription)}</p>

        <div style="font-size: 1.05rem; line-height: 1.7; margin: var(--space-8) 0;">
          <h2>1. Overview &amp; Architectural Context</h2>
          <p>In modern software engineering, mastering ${escapeHtml(item.h1)} is essential for writing robust, scalable, and maintainable systems. Developers who grasp these underlying mechanics avoid critical production pitfalls, reduce memory churn, and build more performant applications.</p>

          <h2>2. Core Concepts &amp; Implementation</h2>
          <p>When working with ${escapeHtml(item.category)} in production environments, adhering to industry best practices ensures that code remains clean, modular, and easily testable. Key considerations include resource management, boundary validation, and adhering to standard design patterns.</p>

          <div class="code-block">
            <div class="code-header">
              <span class="code-lang-badge">${escapeHtml(item.category)}</span>
              <button class="btn-copy-code" type="button" aria-label="Copy code to clipboard">Copy Code</button>
            </div>
            <pre><code>// Production Reference Implementation: ${escapeHtml(item.h1)}
// Demonstrating clean separation of concerns and robust error handling

public class ImplementationReference {
    public static void executeBestPractice() {
        System.out.println("Applying verified engineering standards for ${escapeHtml(item.h1)}");
    }
}</code></pre>
          </div>

          <h2>3. Common Pitfalls &amp; Performance Traps</h2>
          <ul>
            <li>Neglecting proper error boundaries and relying on unhandled exception bubbles.</li>
            <li>Failing to consider memory lifecycle and thread-safety under concurrent load.</li>
            <li>Over-complicating abstractions when straightforward, idiomatic patterns suffice.</li>
          </ul>

          <h2>4. Interview Preparation Tips</h2>
          <p>In technical rounds, interviewers often present edge-case scenarios around ${escapeHtml(item.h1)}. Focus on explaining the architectural trade-offs, space/time complexity considerations, and how you would diagnose issues using logging and profiling tools.</p>
        </div>

        <div class="callout callout-success">
          <div class="callout-title">Practical Lab Learning at ProgrammingWala</div>
          <p>Learn these architectural patterns through hands-on coding sessions at our physical training center at <strong>${SITE_CONFIG.address}</strong>.</p>
          <a href="tel:${SITE_CONFIG.phone}" class="btn btn-primary btn-sm">Call 7503962162</a>
          <a href="${relativePrefix}contact.html" class="btn btn-secondary btn-sm" style="margin-left: 0.5rem;">Visit Training Center</a>
        </div>
      </article>
      ${locationCardHtml}
    </div>
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// INTERVIEW QUESTIONS PAGE GENERATOR
// ----------------------------------------------------
function generateInterviewPage(item, isExtended = false) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'article',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  let questionsHtml = '';
  if (!isExtended && item.interviewData && item.interviewData.questions) {
    questionsHtml = item.interviewData.questions.map((q, idx) => `
      <article class="interview-card">
        <span class="interview-q-badge">Question ${idx + 1}</span>
        <h2 class="interview-q-title">${escapeHtml(q.q)}</h2>
        
        <span class="interview-section-label">Theoretical Concept</span>
        <p>${escapeHtml(q.theory)}</p>

        <span class="interview-section-label">Comprehensive Answer</span>
        <p>${escapeHtml(q.answer)}</p>

        ${q.example ? `
          <span class="interview-section-label">Code Demonstration</span>
          <div class="code-block">
            <div class="code-header">
              <span class="code-lang-badge">${escapeHtml(item.category)}</span>
              <button class="btn-copy-code" type="button" aria-label="Copy code">Copy Code</button>
            </div>
            <pre><code>${escapeHtml(q.example)}</code></pre>
          </div>
        ` : ''}

        <span class="interview-section-label">Real-World Enterprise Scenario</span>
        <p>${escapeHtml(q.scenario)}</p>

        <div class="interview-pro-tip">
          <strong>Interviewer Pro Tip:</strong> ${escapeHtml(q.proTip)}
        </div>

        <div class="interview-mistake">
          <strong>Common Candidate Mistake:</strong> ${escapeHtml(q.mistake)}
        </div>

        <p style="font-size: 0.85rem; color: var(--color-text-subtle); margin-top: 1rem;">
          Related follow-up question: <strong>${escapeHtml(q.relatedQ)}</strong>
        </p>
      </article>
    `).join('');
  } else {
    // Extended questions template
    questionsHtml = `
      <article class="interview-card">
        <span class="interview-q-badge">Core Architecture Question</span>
        <h2 class="interview-q-title">Explain the core principles and architectural trade-offs of ${escapeHtml(item.h1)}?</h2>
        <span class="interview-section-label">Theoretical Concept</span>
        <p>Technical interviews evaluate depth of understanding rather than mere memorization. Candidates must articulate the underlying runtime mechanisms, resource implications, and alternatives.</p>
        <span class="interview-section-label">Comprehensive Answer</span>
        <p>When asked this question in an interview, structure your response into three clear tiers: 1) What problem the technology solves, 2) How the engine or runtime handles execution internally, and 3) Practical constraints such as thread safety, latency, or memory consumption.</p>
        <div class="interview-pro-tip">
          <strong>Interviewer Pro Tip:</strong> Always back up theoretical claims with an example from a real application you have built.
        </div>
        <div class="interview-mistake">
          <strong>Common Candidate Mistake:</strong> Providing vague one-sentence answers without mentioning performance trade-offs or practical edge cases.
        </div>
      </article>
    `;
  }

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container" style="max-width: 900px;">
      <div style="margin-bottom: var(--space-8);">
        <span class="card-tag hot">${escapeHtml(item.category)} Technical Prep</span>
        <h1>${escapeHtml(item.h1)}</h1>
        <p class="lead" style="font-size: 1.15rem; color: var(--color-text-muted);">${escapeHtml(item.metaDescription)}</p>
      </div>

      <div>
        ${questionsHtml}
      </div>

      <div class="callout" style="margin-top: var(--space-10);">
        <div class="callout-title">Mock Technical Interviews in Ghaziabad</div>
        <p>Prepare for tier-1 company coding and system design rounds with face-to-face mock interview practice at <strong>${SITE_CONFIG.address}</strong>.</p>
        <a href="tel:${SITE_CONFIG.phone}" class="btn btn-primary btn-sm">Call ${SITE_CONFIG.phoneDisplay}</a>
      </div>

      ${locationCardHtml}
    </div>
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// CAREER ROADMAP PAGE GENERATOR
// ----------------------------------------------------
function generateRoadmapPage(item, isExtended = false) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'article',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  let stepsHtml = '';
  if (!isExtended && item.roadmapData && item.roadmapData.timeline) {
    stepsHtml = item.roadmapData.timeline.map(step => `
      <div class="roadmap-step">
        <div class="roadmap-step-marker">${step.step}</div>
        <div class="roadmap-step-card">
          <h4>${escapeHtml(step.title)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--color-text-subtle);">(${escapeHtml(step.duration)})</span></h4>
          <p>${escapeHtml(step.description)}</p>
          <div class="roadmap-skills-tags">
            ${(step.skills || []).map(s => `<span class="roadmap-tag">${escapeHtml(s)}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  } else {
    stepsHtml = `
      <div class="roadmap-step">
        <div class="roadmap-step-marker">1</div>
        <div class="roadmap-step-card">
          <h4>Phase 1: Foundational Theory &amp; Syntax</h4>
          <p>Master syntax, core programming concepts, environment setup, and version control with Git.</p>
        </div>
      </div>
      <div class="roadmap-step">
        <div class="roadmap-step-marker">2</div>
        <div class="roadmap-step-card">
          <h4>Phase 2: Frameworks &amp; Real-World Architecture</h4>
          <p>Learn dominant production frameworks, database persistence, and API integration.</p>
        </div>
      </div>
      <div class="roadmap-step">
        <div class="roadmap-step-marker">3</div>
        <div class="roadmap-step-card">
          <h4>Phase 3: Testing, Deployment &amp; Portfolio</h4>
          <p>Build enterprise-grade projects, write automated tests, and containerize services.</p>
        </div>
      </div>
    `;
  }

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container" style="max-width: 900px;">
      <div style="margin-bottom: var(--space-8);">
        <span class="card-tag">${escapeHtml(item.category)} Career Track</span>
        <h1>${escapeHtml(item.h1)}</h1>
        <p class="lead" style="font-size: 1.15rem; color: var(--color-text-muted);">${escapeHtml(item.metaDescription)}</p>
      </div>

      <div class="roadmap-timeline">
        ${stepsHtml}
      </div>

      <div class="callout callout-success" style="margin-top: var(--space-8);">
        <div class="callout-title">Fast-Track Your Journey with Hands-On Mentorship</div>
        <p>Skip the guesswork and follow this exact roadmap with structured in-person mentoring at our campus in <strong>${SITE_CONFIG.address}</strong>.</p>
        <a href="tel:${SITE_CONFIG.phone}" class="btn btn-primary btn-sm">Speak with a Mentor: ${SITE_CONFIG.phoneDisplay}</a>
      </div>

      ${locationCardHtml}
    </div>
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// COMPARISON PAGE GENERATOR
// ----------------------------------------------------
function generateComparisonPage(item, isExtended = false) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'article',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  let tableRows = '';
  let verdictText = '';

  if (!isExtended && item.compData && item.compData.criteria) {
    tableRows = item.compData.criteria.map(c => `
      <tr>
        <td><strong>${escapeHtml(c.dimension)}</strong></td>
        <td>${escapeHtml(c.java)}</td>
        <td>${escapeHtml(c.python)}</td>
      </tr>
    `).join('');
    verdictText = item.compData.verdict;
  } else {
    tableRows = `
      <tr>
        <td><strong>Primary Design Goal</strong></td>
        <td>Enterprise stability, static typing, high concurrency</td>
        <td>Rapid developer velocity, expressive syntax</td>
      </tr>
      <tr>
        <td><strong>Performance &amp; Scaling</strong></td>
        <td>Optimized JIT compiled execution for CPU throughput</td>
        <td>High-speed I/O with asynchronous event loop</td>
      </tr>
    `;
    verdictText = 'Select the technology that aligns directly with your application requirements and engineering constraints.';
  }

  let techAName = 'Option A';
  let techBName = 'Option B';
  const cData = item.compData;
  if (cData && cData.courseUrls && cData.courseUrls.length >= 2) {
    techAName = cData.courseUrls[0].name.replace(/ Course| Training/gi, '');
    techBName = cData.courseUrls[1].name.replace(/ Course| Training/gi, '');
  } else if (item.url && item.url.includes('-vs-')) {
    const slug = item.url.replace(/^\/comparisons\//, '').replace(/\/$/, '');
    const parts = slug.split('-vs-');
    if (parts.length >= 2) {
      techAName = parts[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      techBName = parts[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  }

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container" style="max-width: 900px;">
      <div style="margin-bottom: var(--space-8);">
        <span class="card-tag">Architectural Comparison</span>
        <h1>${escapeHtml(item.h1)}</h1>
        <p class="lead" style="font-size: 1.15rem; color: var(--color-text-muted);">${escapeHtml(item.metaDescription)}</p>
      </div>

      <div class="table-responsive">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Evaluation Dimension</th>
              <th>${escapeHtml(techAName)}</th>
              <th>${escapeHtml(techBName)}</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>

      <div class="callout callout-success" style="margin-top: var(--space-8);">
        <div class="callout-title">Architectural Verdict &amp; Guidance</div>
        <p>${escapeHtml(verdictText)}</p>
      </div>

      ${locationCardHtml}
    </div>
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// TRUST / LEGAL PAGES GENERATOR
// ----------------------------------------------------
function generateTrustPage(item) {
  const relativePrefix = getRelativePrefix(item.url);
  const headHtml = renderHead({
    title: item.title,
    description: item.metaDescription,
    canonicalUrl: item.url,
    ogType: 'website',
    relativePrefix
  });

  const headerHtml = renderHeader(relativePrefix);
  const breadcrumbHtml = renderBreadcrumb(item.breadcrumbs, relativePrefix);
  const locationCardHtml = renderLocationCard(relativePrefix);
  const inquiryFormHtml = renderInquiryForm(relativePrefix);
  const footerHtml = renderFooter(relativePrefix);

  let pageContent = '';

  if (item.url === '/about.html') {
    pageContent = `
      <h2>Who We Are</h2>
      <p><strong>ProgrammingWala</strong> is a premier technical education and software development institute based in Ghaziabad, Uttar Pradesh. Our physical campus is situated at <strong>${SITE_CONFIG.address}</strong>.</p>
      
      <h3>Our Educational Philosophy</h3>
      <p>We believe that high-impact software engineering cannot be mastered solely through passive video streaming. True engineering competence requires active problem solving, hands-on computer lab sessions, rigorous code reviews by experienced developers, and building full-scale projects from scratch.</p>

      <h3>What Makes Our Training Distinct</h3>
      <ul>
        <li><strong>Physical Lab Environment:</strong> High-speed development workstations equipped with modern developer tooling, Docker, and relational databases.</li>
        <li><strong>Honest, Transparent Pedagogy:</strong> We do not make misleading claims, guaranteed ranking promises, or unrealistic placement guarantees. We focus relentlessly on student skill mastery.</li>
        <li><strong>Production-Grade Curricula:</strong> Programs updated for modern industry needs, including Java 21 Virtual Threads, Spring Boot 3, FastAPI, React 18, and Technical SEO.</li>
      </ul>
    `;
  } else if (item.url === '/contact.html') {
    pageContent = `
      <h2>Connect with Our Admissions &amp; Counseling Team</h2>
      <p>Whether you want to inspect our computer labs, discuss a specific course syllabus, or attend a counseling session, our team in RDC Ghaziabad is ready to help.</p>

      <div class="grid-2" style="margin: var(--space-8) 0;">
        <div style="background: var(--color-surface); padding: var(--space-6); border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
          <h4>Direct Counseling Helpline</h4>
          <p>Speak directly with our academic advisor:</p>
          <a href="tel:${SITE_CONFIG.phone}" class="btn btn-primary">
            Call ${SITE_CONFIG.phoneDisplay}
          </a>
        </div>
        <div style="background: var(--color-surface); padding: var(--space-6); border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
          <h4>Physical Training Center</h4>
          <p><strong>Address:</strong> ${SITE_CONFIG.address}, ${SITE_CONFIG.city}, ${SITE_CONFIG.state}, ${SITE_CONFIG.country}</p>
          <a href="${SITE_CONFIG.mapsSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm">Get Google Maps Directions</a>
        </div>
      </div>
    `;
  } else if (item.url === '/disclaimer.html') {
    pageContent = `
      <h2>Academic &amp; Search Ranking Disclaimer</h2>
      <p>ProgrammingWala is committed to complete transparency and ethical education standards.</p>
      
      <h3>No Search Engine Position Guarantees</h3>
      <p>While our <strong>SEO Course</strong> teaches industry best practices, crawl optimization, structured data, and Core Web Vitals, we strictly do NOT promise or guarantee first-page, first-position, or specific rankings on Google or any search engine. Search algorithms depend on dynamic third-party evaluation factors beyond any individual's direct control.</p>

      <h3>Employment &amp; Career Disclaimers</h3>
      <p>Technical hiring decisions depend entirely on individual student diligence, interview performance, portfolio depth, and employer evaluation criteria. We provide comprehensive training, resume guidance, and mock interviews, but do not make unverified guaranteed placement claims.</p>
    `;
  } else if (item.url === '/privacy-policy.html') {
    pageContent = `
      <h2>Privacy Policy</h2>
      <p>At ProgrammingWala, accessible from https://programmingwala.com, we respect your privacy. This policy explains what information we collect and how it is protected.</p>
      
      <h3>Information We Collect</h3>
      <p>When you fill out our course inquiry form, we collect your name, phone number, email address, and course interest solely to respond to your educational request.</p>

      <h3>How We Use Your Data</h3>
      <p>We use your contact information solely to provide syllabus details, discuss course enrollment, and coordinate lab visits at ${SITE_CONFIG.address}. We never sell, rent, or distribute your personal data to third parties.</p>
    `;
  } else if (item.url === '/terms.html') {
    pageContent = `
      <h2>Terms of Service</h2>
      <p>By accessing or enrolling in training programs at ProgrammingWala, you agree to comply with our campus academic standards and terms of service.</p>
      
      <h3>Lab &amp; Equipment Conduct</h3>
      <p>Students attending in-person batches at C-60 R.K Tower, 3rd Floor, RDC, Ghaziabad must adhere to classroom lab guidelines, respect hardware workstations, and maintain professional conduct toward peers and instructors.</p>

      <h3>Intellectual Property</h3>
      <p>All course materials, syllabi, exercises, and proprietary code templates provided during training are for personal educational use only.</p>
    `;
  } else {
    pageContent = `
      <h2>Cookie Policy</h2>
      <p>ProgrammingWala uses minimal first-party cookies necessary for basic website functionality, search filtering, and form state preservation. We do not employ third-party tracking or intrusive advertising cookies.</p>
    `;
  }

  const bodyHtml = `
  <main id="mainContent">
    ${breadcrumbHtml}
    <div class="container" style="max-width: 900px;">
      <article>
        <h1>${escapeHtml(item.h1)}</h1>
        <div style="font-size: 1.05rem; line-height: 1.7; margin: var(--space-8) 0;">
          ${pageContent}
        </div>
      </article>
      ${locationCardHtml}
    </div>
    ${item.url === '/contact.html' ? inquiryFormHtml : ''}
  </main>
  `;

  return `${headHtml}${headerHtml}${bodyHtml}${footerHtml}`;
}

// ----------------------------------------------------
// SITEMAP & ROBOTS GENERATOR
// ----------------------------------------------------
function generateSitemap(catalog) {
  const currentDate = new Date().toISOString().split('T')[0];

  const urlsXml = catalog.map(item => {
    let urlPath = item.url;
    if (urlPath === '') urlPath = '/';
    const loc = `${SITE_CONFIG.baseUrl}${urlPath}`;
    
    let priority = '0.8';
    let changefreq = 'weekly';
    
    if (item.url === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (item.type === 'course' || item.type === 'sub-course') {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (item.type === 'local') {
      priority = '0.85';
      changefreq = 'weekly';
    } else if (item.type === 'tutorial' || item.type === 'tutorial-extended' || item.type === 'roadmap' || item.type === 'comparison') {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (item.type === 'trust') {
      priority = '0.5';
      changefreq = 'monthly';
    }

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlsXml}
</urlset>
`;
}

function generateRobotsTxt() {
  return `# ==============================================================================
# ROBOTS.TXT - APPLETREE INFOTECH
# Default: ${SITE_CONFIG.baseUrl}/
# Full Access for Googlebot, Bingbot, and All Search Engine Crawlers
# ==============================================================================

User-agent: *
Allow: /

# Allow crawling of all CSS, JS, and image assets for full page rendering
Allow: /assets/css/
Allow: /assets/js/
Allow: /assets/images/

# Primary XML Sitemap
Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml
`;
}

// ----------------------------------------------------
// MAIN EXECUTION PIPELINE
// ----------------------------------------------------
function buildWebsite() {
  console.log('--- STARTING COMPLETE STATIC PLATFORM GENERATION ---');
  const catalog = buildFullCatalog();
  console.log(`Discovered ${catalog.length} catalog pages to compile.`);

  // 1. Generate Homepage
  const homepageHtml = generateHomepage();
  const homePath = resolveFilePath('/');
  ensureDirectoryExistence(homePath);
  fs.writeFileSync(homePath, homepageHtml, 'utf8');
  console.log(`[GENERATED] Homepage: ${homePath}`);

  // 2. Generate All Catalog Pages
  let count = 1; // including homepage
  for (const item of catalog) {
    let pageHtml = '';

    if (item.type === 'course') {
      pageHtml = generateCoursePage(item.courseData, item);
    } else if (item.type === 'sub-course') {
      // Create course-like page for sub-courses
      const mockCourse = {
        title: item.title,
        overview: item.metaDescription,
        whyLearn: `Mastering ${item.h1} provides critical advantages in modern production environments, ensuring solid code architecture and high system reliability.`,
        targetAudience: 'Software developers, college students, and engineering professionals seeking mastery.',
        prerequisites: 'Basic programming fundamentals.',
        tools: ['Modern Dev Tools', 'VS Code', 'Git', 'CLI'],
        careerOutcomes: ['Software Engineer', 'Specialist Developer', 'Systems Consultant'],
        modules: [
          { title: 'Core Fundamentals & Syntax', duration: 'Weeks 1-2', topics: ['Architecture and setup', 'Syntax & variables', 'Control flow & functions'] },
          { title: 'Advanced Architecture & Integration', duration: 'Weeks 3-4', topics: ['Modular design', 'Database persistence', 'Testing & debugging'] }
        ],
        projects: [
          { name: `Production ${item.h1} Application`, description: 'Comprehensive capstone project demonstrating end-to-end integration and error handling.' }
        ],
        faqs: [
          { question: `Is this course suitable for beginners?`, answer: `Yes, we start from foundations before advancing into complex enterprise topics.` }
        ]
      };
      pageHtml = generateCoursePage(mockCourse, item);
    } else if (item.type === 'local') {
      pageHtml = generateLocalPage(item);
    } else if (item.type === 'tutorial') {
      pageHtml = generateTutorialPage(item.tutData, item);
    } else if (item.type === 'tutorial-extended') {
      pageHtml = generateExtendedTutorialPage(item);
    } else if (item.type === 'interview') {
      pageHtml = generateInterviewPage(item, false);
    } else if (item.type === 'interview-extended') {
      pageHtml = generateInterviewPage(item, true);
    } else if (item.type === 'roadmap') {
      pageHtml = generateRoadmapPage(item, false);
    } else if (item.type === 'roadmap-extended') {
      pageHtml = generateRoadmapPage(item, true);
    } else if (item.type === 'comparison') {
      pageHtml = generateComparisonPage(item, false);
    } else if (item.type === 'comparison-extended' || item.type === 'project' || item.type === 'resource') {
      pageHtml = generateComparisonPage(item, true);
    } else if (item.type === 'trust') {
      pageHtml = generateTrustPage(item);
    }

    if (pageHtml) {
      const targetPath = resolveFilePath(item.url);
      ensureDirectoryExistence(targetPath);
      fs.writeFileSync(targetPath, pageHtml, 'utf8');
      count++;
    }
  }

  // 3. Generate Sitemap and Robots.txt
  // Include homepage in catalog for sitemap
  const sitemapCatalog = [{ url: '/', type: 'home' }, ...catalog];
  const sitemapXml = generateSitemap(sitemapCatalog);
  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`[GENERATED] sitemap.xml with ${sitemapCatalog.length} URLs.`);

  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt, 'utf8');
  console.log(`[GENERATED] robots.txt.`);

  console.log(`--- SUCCESS: Compiled ${count} unique HTML pages, sitemap.xml, and robots.txt ---`);
}

if (require.main === module) {
  buildWebsite();
}

module.exports = { buildWebsite };
