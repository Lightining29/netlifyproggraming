/**
 * PROGRAMMINGWALA - HTML Templates & UI Components
 * Generates semantic, accessible, SEO-optimized HTML snippets.
 */

const SITE_CONFIG = {
  name: 'Appletree Infotech',
  tagline: 'Technical Education & Software Development Institute',
  phone: '7503962162',
  phoneDisplay: '7503962162',
  email: 'info@aticlasses.com',
  address: 'C-60 R.K Tower, 3rd Floor, RDC, Ghaziabad',
  city: 'Ghaziabad',
  state: 'Uttar Pradesh',
  country: 'India',
  postalCode: '201001',
  baseUrl: 'https://programmingwala.netlify.app',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=C-60+R.K+Tower+3rd+Floor+RDC+Ghaziabad+Uttar+Pradesh'
};

function getRelativePrefix(urlPath) {
  if (urlPath === '/' || urlPath === '/index.html' || urlPath === 'index.html' || !urlPath.includes('/')) {
    return './';
  }
  const clean = urlPath.replace(/^\//, '').replace(/\/$/, '');
  const segments = clean.split('/').filter(s => s && !s.endsWith('.html'));
  if (segments.length === 0) return './';
  return '../'.repeat(segments.length);
}

function renderHead({ title, description, canonicalUrl, ogType = 'website', schemaJson = null, relativePrefix = './' }) {
  const fullCanonical = `${SITE_CONFIG.baseUrl}${canonicalUrl}`;
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": SITE_CONFIG.name,
    "description": "Professional technical education institute specializing in Job-Ready Programming, Data Science, Full Stack & SEO training in Ghaziabad.",
    "url": SITE_CONFIG.baseUrl,
    "telephone": SITE_CONFIG.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address,
      "addressLocality": SITE_CONFIG.city,
      "addressRegion": SITE_CONFIG.state,
      "addressCountry": SITE_CONFIG.country,
      "postalCode": SITE_CONFIG.postalCode
    }
  };

  const schemaArray = [defaultSchema];
  if (schemaJson) {
    if (Array.isArray(schemaJson)) {
      schemaArray.push(...schemaJson);
    } else {
      schemaArray.push(schemaJson);
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${fullCanonical}">
  <meta name="google-site-verification" content="google516be02d92410125">
  
  <!-- Open Graph Metadata -->
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${fullCanonical}">
  <meta property="og:site_name" content="${SITE_CONFIG.name}">
  <meta property="og:locale" content="en_IN">
  
  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="${relativePrefix}assets/images/favicon.svg">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="${relativePrefix}assets/css/style.css">
  <link rel="stylesheet" href="${relativePrefix}assets/css/components.css">
  
  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
${JSON.stringify(schemaArray, null, 2)}
  </script>
</head>
<body>
  <a href="#mainContent" class="skip-to-content">Skip to primary content</a>
`;
}

function renderHeader(relativePrefix = './') {
  return `
  <header class="site-header">
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-location">
          <span>Training Center: <strong>${SITE_CONFIG.address}</strong></span>
        </div>
        <div>
          <a href="tel:${SITE_CONFIG.phone}" class="top-bar-phone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now: <strong>${SITE_CONFIG.phoneDisplay}</strong>
          </a>
        </div>
      </div>
    </div>
    
    <div class="container nav-bar">
      <a href="${relativePrefix}index.html" class="brand-logo" aria-label="Appletree Infotech - Technical Institute">
        <div class="brand-logo-icon">AI</div>
        <div class="brand-text">
          <span class="brand-name">Appletree Infotech</span>
          <span class="brand-tagline">Ghaziabad Technical Institute</span>
        </div>
      </a>
      
      <nav aria-label="Main Navigation">
        <ul class="nav-menu">
          <li><a href="${relativePrefix}index.html" class="nav-link">Home</a></li>
          <li><a href="${relativePrefix}courses/java/index.html" class="nav-link">Java</a></li>
          <li><a href="${relativePrefix}courses/python/index.html" class="nav-link">Python</a></li>
          <li><a href="${relativePrefix}courses/data-science/index.html" class="nav-link">Data Science</a></li>
          <li><a href="${relativePrefix}courses/mern-full-stack/index.html" class="nav-link">MERN Stack</a></li>
          <li><a href="${relativePrefix}courses/seo/index.html" class="nav-link">SEO</a></li>
          <li><a href="${relativePrefix}locations/ghaziabad/index.html" class="nav-link">Ghaziabad Center</a></li>
          <li><a href="${relativePrefix}contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <a href="tel:${SITE_CONFIG.phone}" class="btn btn-cta btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call 7503962162
        </a>
        <button id="mobileMenuToggle" class="btn-menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileDrawer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div id="mobileOverlay" class="mobile-overlay" aria-hidden="true"></div>
  <aside id="mobileDrawer" class="mobile-drawer" aria-hidden="true">
    <div class="drawer-header">
      <span class="brand-name">Navigation</span>
      <button id="mobileDrawerClose" class="drawer-close" aria-label="Close navigation menu">&times;</button>
    </div>
    <ul class="drawer-links">
      <li><a href="${relativePrefix}index.html">Home</a></li>
      <li><a href="${relativePrefix}courses/java/index.html">Java Training</a></li>
      <li><a href="${relativePrefix}courses/python/index.html">Python Training</a></li>
      <li><a href="${relativePrefix}courses/data-science/index.html">Data Science Program</a></li>
      <li><a href="${relativePrefix}courses/mern-full-stack/index.html">MERN Full Stack</a></li>
      <li><a href="${relativePrefix}courses/seo/index.html">SEO & Digital Marketing</a></li>
      <li><a href="${relativePrefix}courses/devops/index.html">DevOps & Cloud</a></li>
      <li><a href="${relativePrefix}courses/sql/index.html">SQL & Databases</a></li>
      <li><a href="${relativePrefix}locations/ghaziabad/index.html">Ghaziabad Center Details</a></li>
      <li><a href="${relativePrefix}about.html">About Institute</a></li>
      <li><a href="${relativePrefix}contact.html">Contact & Directions</a></li>
    </ul>
    <div class="mt-auto">
      <a href="tel:${SITE_CONFIG.phone}" class="btn btn-accent btn-full">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Call 7503962162
      </a>
    </div>
  </aside>
`;
}

function renderBreadcrumb(items, relativePrefix = './') {
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url.startsWith('http') ? item.url : `${SITE_CONFIG.baseUrl}${item.url}`
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  };

  const htmlList = items.map((item, index) => {
    const isLast = index === items.length - 1;
    if (isLast) {
      return `<li aria-current="page">${escapeHtml(item.name)}</li>`;
    }
    const resolvedUrl = item.url.startsWith('/') ? `${relativePrefix}${item.url.replace(/^\//, '')}` : item.url;
    return `<li><a href="${resolvedUrl}">${escapeHtml(item.name)}</a></li>`;
  }).join('');

  return `
  <nav aria-label="Breadcrumb" class="breadcrumb-nav">
    <div class="container">
      <ul class="breadcrumbs">
        ${htmlList}
      </ul>
    </div>
  </nav>
  <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
`;
}

function renderLocationCard(relativePrefix = './') {
  return `
  <div class="center-info-box">
    <div class="center-info-grid">
      <div>
        <span class="card-tag">Physical Training Center</span>
        <h3>Visit Our Ghaziabad Training Center</h3>
        <p>Join classroom batches, attend interactive lab sessions, code with mentors, and take advantage of our high-speed dev workstations.</p>
        
        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <div>
            <strong>Campus Address:</strong><br>
            <span>${SITE_CONFIG.address}, ${SITE_CONFIG.city}, ${SITE_CONFIG.state}</span>
          </div>
        </div>

        <div class="info-item">
          <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <div>
            <strong>Direct Counseling Helpline:</strong><br>
            <a href="tel:${SITE_CONFIG.phone}">Call ${SITE_CONFIG.phoneDisplay}</a>
          </div>
        </div>
      </div>
      
      <div style="display: flex; flex-direction: column; justify-content: center; gap: 1rem;">
        <a href="${SITE_CONFIG.mapsSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-full">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
          Get Google Maps Directions
        </a>
        <a href="tel:${SITE_CONFIG.phone}" class="btn btn-primary btn-full">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now: 7503962162
        </a>
        <a href="${relativePrefix}locations/ghaziabad/index.html" class="btn btn-secondary btn-full">
          Explore Ghaziabad Training Hub
        </a>
      </div>
    </div>
  </div>
`;
}

function renderInquiryForm(relativePrefix = './') {
  return `
  <section class="section section-muted" id="inquiryFormSection">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Direct Course Admissions</span>
        <h2>Speak with a Course Mentor or Counselor</h2>
        <p>Receive syllabus details, batch timings, hands-on lab plans, and career roadmaps without sales pressure.</p>
      </div>
      
      <div style="max-width: 680px; margin: 0 auto; background: var(--color-surface); padding: var(--space-8); border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
        <form class="js-contact-form" novalidate>
          <div class="form-success-banner" tabindex="-1">
            <strong>Thank you!</strong> Your inquiry has been logged. Our academic team at ${SITE_CONFIG.address} will contact you shortly via phone/WhatsApp.
          </div>
          
          <div class="form-group">
            <label class="form-label" for="fullName">Student / Candidate Full Name *</label>
            <input type="text" id="fullName" name="fullName" class="form-control" placeholder="e.g. Rahul Sharma" required autocomplete="name">
            <span id="nameError" class="form-error-msg" role="alert"></span>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="phone">Active Mobile / WhatsApp Number *</label>
            <input type="tel" id="phone" name="phone" class="form-control" placeholder="e.g. 7503962162" required autocomplete="tel">
            <span id="phoneError" class="form-error-msg" role="alert"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email Address *</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="e.g. rahul@example.com" required autocomplete="email">
            <span id="emailError" class="form-error-msg" role="alert"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="courseInterest">Select Course / Specialization Track *</label>
            <select id="courseInterest" name="courseInterest" class="form-control" required>
              <option value="">-- Choose Your Learning Track --</option>
              <option value="Java Full Stack Development">Java Full Stack & Spring Boot Microservices</option>
              <option value="Python & Django Automation">Python Developer & Backend Engineering</option>
              <option value="Data Science & Machine Learning">Data Science, Pandas & ML Engineering</option>
              <option value="MERN Full Stack Development">MERN Stack (React, Node, Express, MongoDB)</option>
              <option value="Technical SEO & Performance">Technical SEO & Digital Marketing Strategy</option>
              <option value="DevOps & AWS Cloud">DevOps, Docker, Kubernetes & AWS Cloud</option>
              <option value="SQL & Relational Databases">SQL, MySQL & Database Engineering</option>
              <option value="Data Structures & Algorithms">Data Structures, Algorithms (DSA) & Coding Prep</option>
            </select>
            <span id="courseError" class="form-error-msg" role="alert"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Current Background / Educational Goals (Optional)</label>
            <textarea id="message" name="message" class="form-control" rows="3" placeholder="Tell us if you are a college student, working professional, or preparing for developer job switches..."></textarea>
            <span id="messageError" class="form-error-msg" role="alert"></span>
          </div>

          <button type="submit" class="btn btn-primary btn-full btn-lg">Submit Course Inquiry</button>
          
          <p style="font-size: 0.825rem; color: var(--color-text-subtle); margin-top: 1rem; text-align: center;">
            Prefer immediate answers? Call <a href="tel:${SITE_CONFIG.phone}"><strong>${SITE_CONFIG.phoneDisplay}</strong></a> or visit <strong>${SITE_CONFIG.address}</strong>.
          </p>
        </form>
      </div>
    </div>
  </section>
`;
}

function renderFooter(relativePrefix = './') {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand-logo" style="margin-bottom: 1rem;">
            <div class="brand-logo-icon" style="background: #ffffff; color: var(--color-primary-dark);">AI</div>
            <div class="brand-text">
              <span class="brand-name" style="color: #ffffff;">Appletree Infotech</span>
              <span class="brand-tagline" style="color: var(--color-accent-light);">Ghaziabad Technical Institute</span>
            </div>
          </div>
          <p>Practical, job-ready programming, data science, full stack web development, and ethical SEO coaching. Learn in real lab environments with hands-on enterprise codebases.</p>
          <p style="color: #ffffff; font-weight: 600;">
            Training Center Location:<br>
            <span style="color: #94a3b8; font-weight: normal;">${SITE_CONFIG.address}, ${SITE_CONFIG.city}, ${SITE_CONFIG.state}</span>
          </p>
          <p>
            <a href="tel:${SITE_CONFIG.phone}" class="btn btn-accent btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call 7503962162
            </a>
          </p>
        </div>
        
        <div class="footer-col">
          <h4>Core Courses</h4>
          <ul class="footer-links">
            <li><a href="${relativePrefix}courses/java/index.html">Java Training</a></li>
            <li><a href="${relativePrefix}courses/python/index.html">Python Course</a></li>
            <li><a href="${relativePrefix}courses/data-science/index.html">Data Science Track</a></li>
            <li><a href="${relativePrefix}courses/mern-full-stack/index.html">MERN Full Stack</a></li>
            <li><a href="${relativePrefix}courses/seo/index.html">SEO Flagship Course</a></li>
            <li><a href="${relativePrefix}courses/spring-boot/index.html">Spring Boot & Microservices</a></li>
            <li><a href="${relativePrefix}courses/devops/index.html">DevOps & Cloud</a></li>
            <li><a href="${relativePrefix}courses/sql/index.html">SQL & Databases</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Ghaziabad Hubs</h4>
          <ul class="footer-links">
            <li><a href="${relativePrefix}courses/java/ghaziabad/index.html">Java in Ghaziabad</a></li>
            <li><a href="${relativePrefix}courses/python/ghaziabad/index.html">Python in Ghaziabad</a></li>
            <li><a href="${relativePrefix}courses/data-science/ghaziabad/index.html">Data Science in Ghaziabad</a></li>
            <li><a href="${relativePrefix}courses/mern-full-stack/ghaziabad/index.html">MERN in Ghaziabad</a></li>
            <li><a href="${relativePrefix}courses/seo/ghaziabad/index.html">SEO in Ghaziabad</a></li>
            <li><a href="${relativePrefix}locations/ghaziabad/index.html">RDC Training Center</a></li>
            <li><a href="${relativePrefix}locations/ghaziabad/devops/index.html">DevOps Ghaziabad</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Tutorials & Prep</h4>
          <ul class="footer-links">
            <li><a href="${relativePrefix}tutorials/java/hashmap/index.html">Java HashMap Guide</a></li>
            <li><a href="${relativePrefix}tutorials/java/multithreading/index.html">Multithreading Tutorial</a></li>
            <li><a href="${relativePrefix}tutorials/python/pandas-basics/index.html">Pandas Data Analysis</a></li>
            <li><a href="${relativePrefix}tutorials/seo/technical-seo-checklist/index.html">Technical SEO Guide</a></li>
            <li><a href="${relativePrefix}interview-questions/java/index.html">Java Interview Prep</a></li>
            <li><a href="${relativePrefix}interview-questions/python/index.html">Python Interview Prep</a></li>
            <li><a href="${relativePrefix}interview-questions/sql/index.html">SQL Interview Prep</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Career Roadmaps</h4>
          <ul class="footer-links">
            <li><a href="${relativePrefix}career/java-developer-roadmap/index.html">Java Developer Roadmap</a></li>
            <li><a href="${relativePrefix}career/python-developer-roadmap/index.html">Python Developer Roadmap</a></li>
            <li><a href="${relativePrefix}career/full-stack-developer-roadmap/index.html">Full Stack Roadmap</a></li>
            <li><a href="${relativePrefix}career/data-scientist-roadmap/index.html">Data Scientist Roadmap</a></li>
            <li><a href="${relativePrefix}career/devops-engineer-roadmap/index.html">DevOps Engineer Roadmap</a></li>
            <li><a href="${relativePrefix}career/seo-specialist-roadmap/index.html">SEO Specialist Roadmap</a></li>
            <li><a href="${relativePrefix}about.html">About Institute</a></li>
            <li><a href="${relativePrefix}contact.html">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div>
          &copy; 2026 ${SITE_CONFIG.name}. Technical Education &amp; Software Development Institute.
        </div>
        <ul class="footer-legal-links">
          <li><a href="${relativePrefix}about.html">About</a></li>
          <li><a href="${relativePrefix}contact.html">Contact</a></li>
          <li><a href="${relativePrefix}privacy-policy.html">Privacy Policy</a></li>
          <li><a href="${relativePrefix}terms.html">Terms of Service</a></li>
          <li><a href="${relativePrefix}disclaimer.html">Academic Disclaimer</a></li>
          <li><a href="${relativePrefix}cookie-policy.html">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <!-- Sticky Bottom Mobile Action Bar -->
  <div class="mobile-sticky-bar">
    <a href="tel:${SITE_CONFIG.phone}" class="btn btn-cta">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      Call 7503962162
    </a>
    <a href="#inquiryFormSection" class="btn btn-primary">
      Get Course Details
    </a>
  </div>

  <!-- Scripts -->
  <script src="${relativePrefix}assets/js/main.js" defer></script>
  <script src="${relativePrefix}assets/js/form.js" defer></script>
</body>
</html>
`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = {
  SITE_CONFIG,
  getRelativePrefix,
  renderHead,
  renderHeader,
  renderBreadcrumb,
  renderLocationCard,
  renderInquiryForm,
  renderFooter,
  escapeHtml
};
