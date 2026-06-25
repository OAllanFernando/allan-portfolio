'use strict';

/**
 * Renderiza o portfólio a partir de CONTENT (assets/data/content.js).
 * Troca de idioma (pt/en) re-renderiza tudo e persiste em localStorage.
 */

(function () {
  const LANG_KEY = 'allan-portfolio-lang';
  const DEFAULT_LANG = 'pt';

  const $ = (sel) => document.querySelector(sel);
  const el = (id) => document.getElementById(id);

  // Escapa texto para uso seguro em HTML.
  const esc = (s) =>
    String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const linkIcon = {
    github: 'logo-github',
    video: 'play-circle-outline',
    live: 'open-outline',
    store: 'phone-portrait-outline',
    doc: 'document-outline',
  };

  function getLang() {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === 'pt' || saved === 'en' ? saved : DEFAULT_LANG;
  }

  // ---- Section renderers -------------------------------------------------

  function renderNav(d, lang) {
    const links = [
      ['about', d.nav.about],
      ['experience', d.nav.experience],
      ['projects', d.nav.projects],
      ['skills', d.nav.skills],
      ['contact', d.nav.contact],
    ];
    el('nav-links').innerHTML = links
      .map(([id, label]) => `<li><a class="nav-link" href="#${id}">${esc(label)}</a></li>`)
      .join('');
    el('lang-toggle').textContent = d.langButtonLabel;
    el('lang-toggle').setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
  }

  function renderHero(d, shared) {
    const stats = d.hero.stats
      .map(
        (s) =>
          `<div class="stat"><span class="stat-value">${esc(s.value)}</span><span class="stat-label">${esc(
            s.label
          )}</span></div>`
      )
      .join('');
    el('hero').innerHTML = `
      <div class="hero-inner">
        <p class="hero-eyebrow">${esc(d.hero.tagline)}</p>
        <h1 class="hero-name">${esc(shared.name)}</h1>
        <p class="hero-role">${esc(d.hero.role)}</p>
        <p class="hero-stack">${esc(d.hero.stack)}</p>
        <p class="hero-summary">${esc(d.hero.summary)}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#projects">${esc(d.hero.ctaProjects)}</a>
          <a class="btn btn-ghost" href="${esc(shared.cv)}" target="_blank" rel="noopener">${esc(d.hero.ctaCv)}</a>
          <a class="btn btn-ghost" href="#contact">${esc(d.hero.ctaContact)}</a>
        </div>
        <div class="hero-stats">${stats}</div>
      </div>`;
  }

  function renderAbout(d) {
    const paras = d.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('');
    const services = d.about.services
      .map(
        (s) => `
        <li class="service-card">
          <img class="service-icon" src="${esc(s.icon)}" alt="" width="48" height="48" loading="lazy">
          <h4>${esc(s.title)}</h4>
          <p>${esc(s.text)}</p>
        </li>`
      )
      .join('');
    el('about').innerHTML = `
      <h2 class="section-title">${esc(d.about.heading)}</h2>
      <div class="about-text">${paras}</div>
      <h3 class="subsection-title">${esc(d.about.whatIDoHeading)}</h3>
      <ul class="service-grid">${services}</ul>`;
  }

  function tagPills(arr, cls) {
    return `<ul class="${cls}">${arr.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`;
  }

  function renderExperience(d) {
    const items = d.experience.items
      .map(
        (job) => `
        <li class="timeline-item">
          <div class="timeline-head">
            <h4 class="timeline-role">${esc(job.role)}</h4>
            <span class="timeline-period">${esc(job.period)}</span>
          </div>
          <p class="timeline-company">${
            job.companyUrl
              ? `<a href="${esc(job.companyUrl)}" target="_blank" rel="noopener">${esc(job.company)}</a>`
              : esc(job.company)
          } · <span class="timeline-location">${esc(job.location)}</span></p>
          <ul class="timeline-bullets">${job.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
          ${tagPills(job.tech, 'tech-tags')}
        </li>`
      )
      .join('');
    el('experience').innerHTML = `
      <h2 class="section-title">${esc(d.experience.heading)}</h2>
      <ol class="timeline">${items}</ol>`;
  }

  function projectCard(p, featuredLabel, statusLabel) {
    const thumb = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
      : `<div class="project-thumb-placeholder" aria-hidden="true">${esc(
          p.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()
        )}</div>`;
    const links = p.links
      .map(
        (l) =>
          `<a class="project-link" href="${esc(l.url)}" target="_blank" rel="noopener"><ion-icon name="${
            linkIcon[l.type] || 'link-outline'
          }"></ion-icon>${esc(l.label)}</a>`
      )
      .join('');
    return `
      <li class="project-card${p.featured ? ' project-card--featured' : ''}">
        <div class="project-thumb">${thumb}${
      p.featured ? `<span class="project-badge">${esc(featuredLabel)}</span>` : ''
    }</div>
        <div class="project-body">
          <h4 class="project-name">${esc(p.name)}</h4>
          <p class="project-desc">${esc(p.description)}</p>
          ${tagPills(p.tags, 'project-tags')}
          ${links ? `<div class="project-links">${links}</div>` : ''}
        </div>
      </li>`;
  }

  function renderProjects(d) {
    const ordered = d.projects.items
      .slice()
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    const cards = ordered
      .map((p) => projectCard(p, d.projects.featuredLabel, d.projects.statusLabel))
      .join('');
    const pubs = d.projects.publications.map((p) => `<li>${esc(p)}</li>`).join('');
    el('projects').innerHTML = `
      <h2 class="section-title">${esc(d.projects.heading)}</h2>
      <ul class="project-grid">${cards}</ul>
      <h3 class="subsection-title">${esc(d.projects.publicationsHeading)}</h3>
      <ul class="publications">${pubs}</ul>`;
  }

  function renderSkills(d) {
    const groups = d.skills.groups
      .map(
        (g) => `
        <div class="skill-group">
          <h4>${esc(g.title)}</h4>
          ${tagPills(g.items, 'skill-tags')}
        </div>`
      )
      .join('');
    el('skills').innerHTML = `
      <h2 class="section-title">${esc(d.skills.heading)}</h2>
      <div class="skill-grid">${groups}</div>
      <h3 class="subsection-title">${esc(d.skills.softHeading)}</h3>
      ${tagPills(d.skills.soft.concat(d.skills.languages), 'skill-tags skill-tags--soft')}`;
  }

  function renderContact(d, shared) {
    const rows = [
      { label: d.contact.emailLabel, value: shared.email, url: `mailto:${shared.email}`, icon: 'mail-outline' },
      { label: d.contact.phoneLabel, value: shared.phone, url: shared.phoneHref, icon: 'phone-portrait-outline' },
      { label: 'GitHub', value: shared.githubLabel, url: shared.github, icon: 'logo-github' },
      { label: 'LinkedIn', value: shared.linkedinLabel, url: shared.linkedin, icon: 'logo-linkedin' },
      { label: d.contact.cvLabel, value: d.contact.cvText, url: shared.cv, icon: 'document-text-outline' },
      { label: d.contact.locationLabel, value: d.hero.location, url: '', icon: 'location-outline' },
    ];
    const list = rows
      .map(
        (r) => `
        <li class="contact-row">
          <span class="contact-icon"><ion-icon name="${r.icon}"></ion-icon></span>
          <span class="contact-meta"><span class="contact-label">${esc(r.label)}</span>
          ${
            r.url
              ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.value)}</a>`
              : `<span>${esc(r.value)}</span>`
          }</span>
        </li>`
      )
      .join('');
    el('contact').innerHTML = `
      <h2 class="section-title">${esc(d.contact.heading)}</h2>
      <p class="contact-intro">${esc(d.contact.intro)}</p>
      <ul class="contact-list">${list}</ul>`;
  }

  // Realça o link de navegação da seção visível.
  let observer;
  function setupScrollSpy() {
    if (observer) observer.disconnect();
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const map = {};
    navLinks.forEach((a) => (map[a.getAttribute('href').slice(1)] = a));
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove('active'));
            const link = map[entry.target.id];
            if (link) link.classList.add('active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['about', 'experience', 'projects', 'skills', 'contact'].forEach((id) => {
      const s = el(id);
      if (s) observer.observe(s);
    });
  }

  // ---- Orchestration -----------------------------------------------------

  function render(lang) {
    const d = CONTENT[lang];
    const shared = CONTENT.shared;

    document.documentElement.lang = d.langCode;
    document.title = d.pageTitle;

    renderNav(d, lang);
    renderHero(d, shared);
    renderAbout(d);
    renderExperience(d);
    renderProjects(d);
    renderSkills(d);
    renderContact(d, shared);
    el('footer').innerHTML = `<p>${esc(d.footer)}</p>`;

    setupScrollSpy();
  }

  function init() {
    let lang = getLang();
    render(lang);

    el('lang-toggle').addEventListener('click', () => {
      lang = lang === 'pt' ? 'en' : 'pt';
      localStorage.setItem(LANG_KEY, lang);
      render(lang);
    });

    // Menu mobile
    const menuBtn = el('menu-toggle');
    const nav = el('site-nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
      nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) nav.classList.remove('open');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
