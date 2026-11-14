(function () {
  'use strict';

  var WA_NUMBER = '62811964036';
  var EMAIL = 'maggie.ek@gmail.com';
  var WA_GREETING = 'Halo Elina & Tim KALA, saya mendapatkan kontak ini dari website dan ingin mengobrol santai mengenai kondisi tim di perusahaan kami. Kapan kira-kira ada waktu?';

  document.documentElement.classList.add('js');

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // WhatsApp langsung dengan pesan pembuka yang sopan
  document.querySelectorAll('.js-wa-link').forEach(function (a) {
    a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_GREETING);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Garis tipis pada navbar saat scroll
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    menu.hidden = !open;
  }
  toggle.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setMenu(false); });

  // Accordion layanan: satu terbuka dalam satu waktu
  var accItems = document.querySelectorAll('.acc__item');
  accItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      accItems.forEach(function (other) { if (other !== item) other.open = false; });
    });
  });

  // Fade-in tenang saat scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Conversational form -> WhatsApp / Email
  var form = document.getElementById('convo-form');
  var errorEl = form.querySelector('.form-error');
  var fields = ['nama', 'bisnis', 'topik', 'kontak'].map(function (n) { return form.elements[n]; });

  fields.forEach(function (f) {
    f.addEventListener('input', function () { f.classList.remove('is-invalid'); });
    f.addEventListener('change', function () { f.classList.remove('is-invalid'); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var via = (e.submitter && e.submitter.value) || 'wa';
    var empty = fields.filter(function (f) { return !f.value.trim(); });

    fields.forEach(function (f) { f.classList.toggle('is-invalid', empty.indexOf(f) !== -1); });
    if (empty.length) {
      errorEl.hidden = false;
      empty[0].focus();
      return;
    }
    errorEl.hidden = true;

    var v = {};
    fields.forEach(function (f) { v[f.name] = f.value.trim(); });

    var body =
      'Halo Elina & Tim, nama saya ' + v.nama + ' dari perusahaan ' + v.bisnis + '. ' +
      'Saat ini saya sedang ingin berdiskusi mengenai ' + v.topik + '. ' +
      'Bisa hubungi saya kembali di ' + v.kontak + '. Terima kasih.';

    if (via === 'email') {
      window.location.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(v.topik + ' — ' + v.bisnis) +
        '&body=' + encodeURIComponent(body);
    } else {
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(body), '_blank', 'noopener');
    }
  });
})();
