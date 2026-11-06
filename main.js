/* =========================================================
   Centro Odontológico Ausejo — js/main.js
   JavaScript puro, sin librerías. Todos los textos y rutas
   salen de SITE (config.js); aquí solo van los textos de
   interfaz indicados (etiquetas, chips, tags, avisos).
   ========================================================= */
(function () {
  'use strict';

  if (typeof SITE === 'undefined') return;

  /* ---------- Utilidades ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var byId = function (id) { return document.getElementById(id); };
  var noop = function () {};

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function waUrl(text) {
    return 'https://wa.me/' + SITE.phone + '?text=' + encodeURIComponent(text || SITE.waMessage || '');
  }

  /* ---------- 1. Iconos SVG inline (24x24, trazo) ---------- */
  var ICONS = {
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.2A8.4 8.4 0 1 1 21 11.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
    phone: '<path d="M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 5 5l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    nav: '<path d="M3 11l18-8-8 18-2-8z"/>',
    film: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    compare: '<path d="M12 3v18M8 7l-5 5 5 5M16 7l5 5-5 5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    /* Servicios */
    implant: '<path d="M8 3h8v4H8z"/><path d="M9 7v3M15 7v3M8.5 10h7M9 13h6M10 16h4M12 16v5"/>',
    baby: '<circle cx="12" cy="12" r="9"/><path d="M12 3c-1 1.5 0 2.5 1.5 2.5"/><path d="M8.5 14c1 1.5 2.2 2.2 3.5 2.2s2.5-.7 3.5-2.2"/><path d="M9 10.5h.01M15 10.5h.01"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
    tooth: '<path d="M7 3.5c-2.2 0-3.5 1.8-3.5 4 0 2 1 3.2 1.5 5 .6 2.3.6 7 2.5 7 1.6 0 1.4-4 3-4h2c1.6 0 1.4 4 3 4 1.9 0 1.9-4.7 2.5-7 .5-1.8 1.5-3 1.5-5 0-2.2-1.3-4-3.5-4-1.8 0-2.5 1-5 1s-3.2-1-5-1z"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16v4M17 18h4"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14c1.2 2 2.6 3 4 3s2.8-1 4-3"/><path d="M9 9.5h.01M15 9.5h.01"/>',
    pulse: '<path d="M3 12h4l2.5-6 4 12 2.5-6H21"/>',
    braces: '<rect x="3" y="8" width="18" height="8" rx="2"/><path d="M3 12h18M8 8v8M12 8v8M16 8v8"/>',
    scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M4 12h16"/>',
    lab: '<path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/><path d="M7.5 15h9"/>'
  };

  /* Devuelve el SVG como texto (para usar dentro de plantillas) */
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      (ICONS[name] || '') + '</svg>';
  }

  /* Reemplaza cada <i data-icon="x"> dentro de root por su SVG */
  function hydrateIcons(root) {
    $$('i[data-icon]', root || document).forEach(function (el) {
      var tpl = document.createElement('template');
      tpl.innerHTML = icon(el.getAttribute('data-icon'));
      el.replaceWith(tpl.content.firstChild);
    });
  }

  /* ---------- 12. Textos de contacto y enlaces ---------- */
  function fillContact() {
    $$('[data-wa]').forEach(function (a) {
      a.setAttribute('href', waUrl(SITE.waMessage));
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    });
    $$('[data-tel]').forEach(function (a) { a.setAttribute('href', 'tel:+' + SITE.phone); });
    $$('[data-mail]').forEach(function (a) { a.setAttribute('href', 'mailto:' + SITE.email); });
    $$('[data-phone-text]').forEach(function (el) { el.textContent = SITE.phoneDisplay; });
    $$('[data-mail-text]').forEach(function (el) { el.textContent = SITE.email; });
    $$('[data-hours-text]').forEach(function (el) { el.textContent = SITE.hours.text; });
    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  /* ---------- 2. Hero ---------- */
  function initHero() {
    var hero = $('.hero');
    var video = byId('heroVideo');
    var cfg = SITE.heroVideo || {};

    /* Versión vertical (celular / pantalla vertical) u horizontal (PC).
       Si mp4Mobile / posterMobile están vacíos, se usan los normales. */
    var esVertical = window.matchMedia('(max-width: 640px), (orientation: portrait)').matches;
    var poster = (esVertical && cfg.posterMobile) ? cfg.posterMobile : (cfg.poster || '');
    var src = (esVertical && cfg.mp4Mobile) ? cfg.mp4Mobile : (cfg.mp4 || '');

    if (hero && poster) hero.style.backgroundImage = 'url("' + poster + '")';

    /* ¿Se debe evitar el video? (ahorro de datos, 2G o movimiento reducido) */
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    var lite = reducedMotion ||
      !!(conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '')));

    if (video) {
      if (lite || !src) {
        video.remove(); /* solo queda el poster como fondo */
        video = null;
      } else {
        /* Silencioso, en bucle y con reproducción automática */
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        if (poster) video.poster = poster;

        video.addEventListener('error', function () {
          if (video) { video.remove(); video = null; }
        });

        video.src = src;
        var p = video.play();
        if (p && p.catch) p.catch(noop);
      }
    }

    /* Estrellas, texto de calificación y avatares */
    var rating = SITE.rating || {};

    var stars = byId('heroStars');
    if (stars) stars.innerHTML = new Array(6).join(icon('star')); /* 5 estrellas */

    var proof = byId('heroProof');
    if (proof) proof.textContent = rating.text || '';

    var avatars = byId('heroAvatars');
    if (avatars) {
      (SITE.heroAvatars || []).forEach(function (url) {
        var sp = document.createElement('span');
        sp.style.backgroundImage = 'url("' + url + '")';
        avatars.appendChild(sp);
      });
    }

    /* Controlador usado por initScrollEffects() para pausar/reanudar */
    return {
      setVisible: function (visible) {
        if (!video) return;
        if (visible) {
          var pr = video.play();
          if (pr && pr.catch) pr.catch(noop);
        } else {
          try { video.pause(); } catch (e) {}
        }
      }
    };
  }

  /* ---------- 3. Horario / badge abierto-cerrado ---------- */
  function toMinutes(hhmm) {
    var p = String(hhmm).split(':');
    return (parseInt(p[0], 10) || 0) * 60 + (parseInt(p[1], 10) || 0);
  }
  function fmt12(hhmm) {
    var p = String(hhmm).split(':');
    var h = parseInt(p[0], 10) || 0;
    var m = pad2(parseInt(p[1], 10) || 0);
    var suffix = h >= 12 ? 'p.m.' : 'a.m.';
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ':' + m + ' ' + suffix;
  }
  function nowMinutesIn(tz) {
    try {
      var parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: tz, hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      }).formatToParts(new Date());
      var h = 0, m = 0;
      parts.forEach(function (x) {
        if (x.type === 'hour') h = parseInt(x.value, 10) % 24;
        if (x.type === 'minute') m = parseInt(x.value, 10);
      });
      return h * 60 + m;
    } catch (e) {
      var d = new Date();
      return d.getHours() * 60 + d.getMinutes();
    }
  }
  function initOpenBadge() {
    var badges = $$('[data-open-badge]');
    if (!badges.length) return;
    function update() {
      var now = nowMinutesIn(SITE.hours.tz);
      var open = toMinutes(SITE.hours.open);
      var close = toMinutes(SITE.hours.close);
      var isOpen = open <= close ? (now >= open && now < close) : (now >= open || now < close);
      var text = isOpen
        ? 'Abierto ahora · atención hasta las ' + fmt12(SITE.hours.close)
        : 'Cerrado ahora · emergencias por llamada';
      badges.forEach(function (b) {
        b.classList.toggle('is-closed', !isOpen);
        b.innerHTML = '<span class="dot"></span><span>' + esc(text) + '</span>';
      });
    }
    update();
    setInterval(update, 60000);
  }

  /* ---------- 4. Marquee de servicios ---------- */
  function initMarquee() {
    var track = byId('marquee');
    if (!track) return;
    var one = SITE.services.map(function (s) {
      return '<span class="marquee__item">' + icon(s.icon) + '<span>' + esc(s.name) + '</span></span>';
    }).join('');
    track.innerHTML = one;

    /* Mide una copia y repite lo necesario para que cada mitad cubra la pantalla */
    var w = track.scrollWidth || 1;
    var copies = Math.max(1, Math.ceil(window.innerWidth / w));
    var half = '';
    for (var i = 0; i < copies; i++) half += one;
    /* Dos mitades idénticas: el CSS desplaza -50% para un bucle continuo */
    track.innerHTML = half + half;
    $$('.marquee__item', track).forEach(function (it, idx, all) {
      if (idx >= all.length / 2) it.setAttribute('aria-hidden', 'true');
    });
  }

  /* ---------- Gestor de ventanas (modal) ---------- */
  var activeModal = null;
  var lastFocus = null;
  var modalCloseHook = null;
  var heroGone = false;
  var waFloat = $('.wa-float');

  function updateWaFloat() {
    if (!waFloat) return;
    waFloat.classList.toggle('is-hidden', !heroGone || !!activeModal);
  }

  function openModal(modal, onClose, trigger) {
    if (!modal) return;
    if (activeModal) closeModal();
    lastFocus = trigger || document.activeElement;
    activeModal = modal;
    modalCloseHook = onClose || null;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    updateWaFloat();
    var btn = $('.modal__close', modal);
    if (btn) btn.focus({ preventScroll: true });
  }

  function closeModal() {
    if (!activeModal) return;
    var modal = activeModal;
    var hook = modalCloseHook;
    activeModal = null;
    modalCloseHook = null;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (hook) hook();
    updateWaFloat();
    /* Devuelve el foco a quien abrió la ventana */
    if (lastFocus && typeof lastFocus.focus === 'function' && document.contains(lastFocus)) {
      lastFocus.focus({ preventScroll: true });
    }
    lastFocus = null;
  }

  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select,textarea,video[controls],iframe,[tabindex]:not([tabindex="-1"])';

  /* Atrapa el foco con Tab dentro de la ventana abierta */
  function trapFocus(e) {
    var items = $$(FOCUSABLE, activeModal).filter(function (el) {
      return !el.hidden && !el.closest('[hidden]') && el.getClientRects().length > 0;
    });
    if (!items.length) { e.preventDefault(); return; }
    var first = items[0], last = items[items.length - 1];
    if (!activeModal.contains(document.activeElement)) {
      e.preventDefault(); first.focus(); return;
    }
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function initModals() {
    $$('.modal').forEach(function (m) {
      m.addEventListener('click', function (e) {
        if (e.target.closest('[data-close]')) closeModal();
      });
    });
    document.addEventListener('keydown', function (e) {
      if (!activeModal) return;
      if (e.key === 'Escape') { e.preventDefault(); closeModal(); }
      else if (e.key === 'Tab') trapFocus(e);
    });
  }

  /* ---------- 5. Tarjetas de servicio ---------- */
  function initServiceCards() {
    var grid = byId('servicesGrid');
    if (!grid) return;
    SITE.services.forEach(function (s, i) {
      var nVid = (s.videos || []).length;
      var nBA = (s.beforeAfter || []).length;
      var chips = '';
      if (nVid) chips += '<span class="chip">' + icon('film') + (nVid === 1 ? '1 video' : nVid + ' videos') + '</span>';
      if (nBA) chips += '<span class="chip">' + icon('compare') + nBA + ' antes/después</span>';

      var card = document.createElement('article');
      card.className = 'card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-haspopup', 'dialog');
      card.setAttribute('aria-label', s.name);
      card.innerHTML =
        '<div class="card__media">' +
          '<img src="' + esc(s.cover) + '" alt="' + esc(s.name) + '" loading="lazy">' +
          '<span class="card__num">' + pad2(i + 1) + '</span>' +
          (chips ? '<div class="card__chips">' + chips + '</div>' : '') +
        '</div>' +
        '<div class="card__body">' +
          '<h3>' + esc(s.name) + '</h3>' +
          '<p>' + esc(s.short) + '</p>' +
          '<span class="card__link">Ver más ' + icon('arrow') + '</span>' +
        '</div>';

      var img = $('img', card);
      img.addEventListener('error', function () { img.remove(); }); /* queda el degradado */

      card.addEventListener('click', function () { openService(i, card); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openService(i, card); }
      });
      grid.appendChild(card);
    });
  }

  /* ---------- 6. Modal de servicio ---------- */
  var sm = {
    modal: byId('serviceModal'),
    tabs: byId('smTabs'),
    videos: byId('tabVideos'),
    ba: byId('tabBA')
  };

  function setTab(name) {
    $$('.tab', sm.tabs).forEach(function (t) {
      var on = t.getAttribute('data-tab') === name;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    sm.videos.hidden = name !== 'videos';
    sm.ba.hidden = name !== 'ba';
    if (name !== 'videos') pauseAllVideos();
  }

  function pauseAllVideos() {
    $$('video', sm.modal).forEach(function (v) { try { v.pause(); } catch (e) {} });
  }

  /* Galería de videos estilo reels */
  function buildVideos(service) {
    var reels = document.createElement('div');
    reels.className = 'reels';
    (service.videos || []).forEach(function (v) {
      var o = v.orientation === 'horizontal' ? 'horizontal' : 'vertical';
      var reel = document.createElement('figure');
      reel.className = 'reel reel--' + o;
      reel.innerHTML = '<div class="reel__box"></div><figcaption class="reel__cap">' + esc(v.caption) + '</figcaption>';
      var video = document.createElement('video');
      video.controls = true;
      video.preload = 'none';
      video.setAttribute('playsinline', '');
      if (v.poster) video.poster = v.poster;
      video.src = v.src;
      video.addEventListener('error', function () { reel.remove(); });
      $('.reel__box', reel).appendChild(video);
      reels.appendChild(reel);
    });
    /* Al reproducir uno, pausa los demás (el evento play no burbujea: captura) */
    reels.addEventListener('play', function (e) {
      $$('video', reels).forEach(function (v) { if (v !== e.target) v.pause(); });
    }, true);
    return reels;
  }

  /* Slider antes / después */
  function buildBA(service) {
    var pairs = service.beforeAfter || [];
    var wrap = document.createElement('div');
    var stage = document.createElement('div');
    wrap.appendChild(stage);

    var thumbsWrap = null;
    function show(i) {
      var p = pairs[i];
      stage.innerHTML =
        '<div class="ba">' +
          '<img class="ba__img ba__img--after" src="' + esc(p.after) + '" alt="' + esc(p.label) + ' · Después" draggable="false">' +
          '<img class="ba__img ba__img--before" src="' + esc(p.before) + '" alt="' + esc(p.label) + ' · Antes" draggable="false">' +
          '<span class="ba__tag ba__tag--l">Antes</span>' +
          '<span class="ba__tag ba__tag--r">Después</span>' +
          '<div class="ba__handle"><span>' + icon('compare') + '</span></div>' +
          '<input class="ba__range" type="range" min="0" max="100" value="50" aria-label="' + esc(p.label) + '">' +
        '</div>';
      var ba = $('.ba', stage);
      var range = $('.ba__range', stage);
      range.addEventListener('input', function () {
        ba.style.setProperty('--pos', range.value + '%');
      });
      $$('img', ba).forEach(function (im) {
        im.addEventListener('error', function () { im.style.visibility = 'hidden'; });
      });
      if (thumbsWrap) {
        $$('.ba-thumb', thumbsWrap).forEach(function (b, k) {
          b.classList.toggle('is-active', k === i);
          b.setAttribute('aria-pressed', k === i ? 'true' : 'false');
        });
      }
    }

    if (pairs.length > 1) {
      thumbsWrap = document.createElement('div');
      thumbsWrap.className = 'ba-thumbs';
      pairs.forEach(function (p, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'ba-thumb';
        b.textContent = p.label;
        b.addEventListener('click', function () { show(i); });
        thumbsWrap.appendChild(b);
      });
      wrap.appendChild(thumbsWrap);
    }

    var hint = document.createElement('p');
    hint.className = 'hint';
    hint.textContent = 'Desliza para comparar';
    wrap.appendChild(hint);

    show(0);
    return wrap;
  }

  function openService(index, trigger) {
    var s = SITE.services[index];
    if (!s || !sm.modal) return;

    byId('smNum').textContent = pad2(index + 1);
    byId('smTitle').textContent = s.name;
    byId('smDesc').textContent = s.desc;
    byId('smWa').setAttribute('href', waUrl(s.waText));

    var hasVideos = (s.videos || []).length > 0;
    var hasBA = (s.beforeAfter || []).length > 0;

    /* Construye el contenido de cada pestaña */
    sm.videos.innerHTML = '';
    sm.ba.innerHTML = '';
    if (hasVideos) sm.videos.appendChild(buildVideos(s));
    if (hasBA) sm.ba.appendChild(buildBA(s));

    /* Oculta la pestaña vacía y abre la que tenga contenido */
    $('[data-tab="videos"]', sm.tabs).hidden = !hasVideos;
    $('[data-tab="ba"]', sm.tabs).hidden = !hasBA;
    sm.tabs.hidden = !(hasVideos || hasBA);
    setTab(hasVideos ? 'videos' : 'ba');

    var scroller = $('.modal__scroll', sm.modal);
    if (scroller) scroller.scrollTop = 0;

    openModal(sm.modal, function () {
      pauseAllVideos();
      /* Libera el contenido para detener cualquier carga o reproducción */
      sm.videos.innerHTML = '';
      sm.ba.innerHTML = '';
    }, trigger);
  }

  function initServiceModal() {
    if (!sm.tabs) return;
    sm.tabs.addEventListener('click', function (e) {
      var t = e.target.closest('.tab');
      if (t && !t.hidden) setTab(t.getAttribute('data-tab'));
    });
  }

  /* ---------- 7 y 8. WhatsApp flotante, reveal, contadores, menú sólido ---------- */
  function initScrollEffects(heroCtl) {
    var hero = $('.hero');

    /* WhatsApp flotante + pausa del video del hero */
    if (hero && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          heroGone = !en.isIntersecting;
          if (heroCtl) heroCtl.setVisible(en.isIntersecting);
        });
        updateWaFloat();
      }, { threshold: 0 }).observe(hero);
    } else {
      var check = function () {
        heroGone = hero ? window.scrollY > hero.offsetHeight - 80 : true;
        updateWaFloat();
      };
      window.addEventListener('scroll', check, { passive: true });
      check();
    }

    /* Aparición al hacer scroll (una sola vez) */
    var reveals = $$('.reveal');
    if ('IntersectionObserver' in window) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); ro.unobserve(en.target); }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function (el) { ro.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('is-in'); });
    }

        /* Menú sólido y ocultar al hacer scroll hacia abajo */
    var nav = byId('nav');
    var lastScrollY = window.scrollY;

    function onScroll() { 
      if (!nav) return;
      
      var currentScrollY = window.scrollY;
      
      // Fondo sólido
      nav.classList.toggle('is-solid', currentScrollY > 40);
      
      // Ocultar al bajar, mostrar al subir
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        nav.classList.add('nav--hidden');
      } else {
        nav.classList.remove('nav--hidden');
      }
      
      lastScrollY = currentScrollY;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Contadores de estadísticas */
  function initStats() {
    var box = byId('stats');
    if (!box) return;
    var stats = SITE.stats || [];
    box.innerHTML = stats.map(function (s) {
      return '<div class="stat"><b>0' + esc(s.suffix || '') + '</b><span>' + esc(s.label) + '</span></div>';
    }).join('');

    var items = $$('.stat b', box).map(function (el, i) {
      return { el: el, value: stats[i].value, suffix: stats[i].suffix || '' };
    });

    function run() {
      items.forEach(function (it) {
        if (reducedMotion) { it.el.textContent = it.value + it.suffix; return; }
        var dur = 1600, start = null;
        function frame(ts) {
          if (start === null) start = ts;
          var t = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - t, 3); /* ease-out */
          it.el.textContent = Math.round(it.value * eased) + it.suffix;
          if (t < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    }

    if ('IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { so.disconnect(); run(); }
      }, { threshold: 0.4 });
      so.observe(box);
    } else {
      run();
    }
  }

  /* ---------- 9. Menú móvil ---------- */
  function initMobileMenu() {
    var burger = byId('burger');
    var menu = byId('mobileMenu');
    if (!burger || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.innerHTML = icon(open ? 'x' : 'menu');
    }
    burger.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ---------- 10. Recorrido en video ---------- */
  function initTour() {
    var modal = byId('videoModal');
    var video = byId('vmVideo');
    var frame = byId('vmFrame');
    var t = SITE.tour || {};

    var poster = byId('tourPoster');
    if (poster && t.poster) {
      poster.src = t.poster;
      poster.addEventListener('error', function () { poster.remove(); });
    }
    if (!modal) return;

    function stop() {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
      if (frame) frame.removeAttribute('src');
    }

    $$('[data-tour]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (t.youtube) {
          video.hidden = true;
          frame.hidden = false;
          frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(t.youtube) +
            '?autoplay=1&rel=0&modestbranding=1';
        } else if (t.mp4) {
          frame.hidden = true;
          video.hidden = false;
          if (t.poster) video.poster = t.poster;
          video.src = t.mp4;
        } else {
          return;
        }
        openModal(modal, stop, btn);
        if (!t.youtube) {
          var p = video.play();
          if (p && p.catch) p.catch(noop);
        }
      });
    });
  }

  /* ---------- 11. Mapa y sedes ---------- */
  function fillLines(el, lines) {
    el.textContent = '';
    lines.forEach(function (line, i) {
      if (i) el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode(line));
    });
  }

  function initSedes() {
    var sedes = SITE.sedes || [];
    var addrs = sedes.map(function (s) { return s.address; });

    var list = byId('sedesList');
    if (list) fillLines(list, addrs);
    var footerSedes = byId('footerSedes');
    if (footerSedes) fillLines(footerSedes, addrs);

    var tabs = byId('sedeTabs');
    var frame = byId('mapFrame');
    var addr = byId('sedeAddr');
    var dir = byId('sedeDir');
    if (!tabs || !frame || !sedes.length) return;

    function select(i) {
      var s = sedes[i];
      var q = encodeURIComponent(s.mapQuery);
      frame.src = 'https://www.google.com/maps?q=' + q + '&output=embed';
      if (addr) addr.textContent = s.address;
      if (dir) dir.href = 'https://www.google.com/maps/dir/?api=1&destination=' + q;
      $$('.sede-tab', tabs).forEach(function (b, k) {
        b.classList.toggle('is-active', k === i);
        b.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
    }

    tabs.innerHTML = '';
    sedes.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'sede-tab';
      b.setAttribute('role', 'tab');
      b.textContent = s.name;
      b.addEventListener('click', function () { select(i); });
      tabs.appendChild(b);
    });
    select(0);
  }

  /* Lista de servicios en el footer (cada uno abre su modal) */
  function initFooterServices() {
    var ul = byId('footerServices');
    if (!ul) return;
    SITE.services.forEach(function (s, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#services';
      a.textContent = s.name;
      a.addEventListener('click', function (e) { e.preventDefault(); openService(i, a); });
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /* Imágenes sueltas (por qué nosotros) */
  function initWhyImage() {
    var img = byId('whyImg');
    if (!img || !SITE.whyImage) return;
    img.src = SITE.whyImage;
    img.addEventListener('error', function () { img.remove(); });
  }

  /* ---------- Arranque ---------- */
  function init() {
    /* Primero se inyecta el contenido dinámico; los iconos se hidratan al final */
    fillContact();
    var heroCtl = initHero();
    initOpenBadge();
    initMarquee();
    initServiceCards();
    initFooterServices();
    initWhyImage();
    initStats();
    initSedes();
    initTour();
    initModals();
    initServiceModal();
    initMobileMenu();
    hydrateIcons(document);
    initScrollEffects(heroCtl);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();