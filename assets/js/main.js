// Sash.Ai Forge — vanilla JS bootstrap
// Handles: mobile nav, smooth-scroll, sticky CTA, reveal-on-scroll, form helpers.

(function () {
  'use strict';

  const cfg = window.SAF_CONFIG || {};
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Mobile nav ------------------------------------------------------------
  function initMobileNav() {
    const toggle = document.querySelector('[data-nav-toggle]');
    const menu = document.querySelector('[data-nav-menu]');
    if (!toggle || !menu) return;

    function close() {
      toggle.setAttribute('aria-expanded', 'false');
      menu.dataset.open = 'false';
      document.body.style.overflow = '';
    }
    function open() {
      toggle.setAttribute('aria-expanded', 'true');
      menu.dataset.open = 'true';
      document.body.style.overflow = 'hidden';
    }
    toggle.addEventListener('click', () => {
      (toggle.getAttribute('aria-expanded') === 'true') ? close() : open();
    });
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
    const mq = window.matchMedia('(min-width: 860px)');
    const onChange = () => { if (mq.matches) close(); };
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange);
  }

  // --- Smooth anchor scroll --------------------------------------------------
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  // --- Sticky CTA bar --------------------------------------------------------
  function initStickyCta() {
    const bar = document.querySelector('[data-sticky-cta]');
    const hero = document.querySelector('[data-hero]');
    if (!bar || !hero) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        bar.dataset.visible = entry.isIntersecting ? 'false' : 'true';
      });
    }, { rootMargin: '-60% 0px 0px 0px' });
    io.observe(hero);
  }

  // --- Header scroll shadow --------------------------------------------------
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let ticking = false;
    const update = () => {
      header.dataset.scrolled = window.scrollY > 4 ? 'true' : 'false';
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  // --- Reveal-on-scroll ------------------------------------------------------
  function initReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;
    if (reduceMotion) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach((el) => io.observe(el));
  }

  // --- Current year in footer -----------------------------------------------
  function initYear() {
    const el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  // --- Apply config-driven hrefs --------------------------------------------
  function applyConfigLinks() {
    const wa = cfg.whatsappUrl || 'https://wa.me/918951280606';
    const email = cfg.contactEmail || 'info@sashai.tech';
    const subject = encodeURIComponent(cfg.emailSubject || 'Free AI Audit — Sash.Ai Forge');
    const body = encodeURIComponent(cfg.emailBody || "Hi, I'd like to book a free AI Audit.");

    document.querySelectorAll('[data-wa]').forEach((a) => {
      const suffix = a.dataset.wa ? ` Came from: ${a.dataset.wa}` : '';
      const text = encodeURIComponent("Hi Sash.Ai Forge — I'd like to book a free AI Audit." + suffix);
      a.href = `${wa}?text=${text}`;
    });
    document.querySelectorAll('[data-email]').forEach((a) => {
      a.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
    document.querySelectorAll('[data-phone]').forEach((a) => {
      a.href = `tel:${(cfg.contactPhone || '').replace(/\s|-/g, '')}`;
    });
  }

  // --- init -----------------------------------------------------------------
  function init() {
    initMobileNav();
    initSmoothScroll();
    initStickyCta();
    initHeaderScroll();
    initReveal();
    initYear();
    applyConfigLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
