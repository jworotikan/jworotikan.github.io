(function () {
  'use strict';

  var WA_NUMBER = '62816964036';
  var EMAIL = 'elina.kesuma@gmail.com';
  var WA_GREETING = 'Halo Ibu Elina, saya mendapatkan kontak ini dari website EL-HR Consultant dan ingin berdiskusi mengenai kebutuhan tim di perusahaan kami.';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function waUrl(text) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text); }

  document.documentElement.classList.add('js');
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('.js-wa').forEach(function (a) {
    a.href = waUrl(a.getAttribute('data-msg') || WA_GREETING);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* ---- Nav: transparan di atas hero, solid setelah scroll ---- */
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var limit = hero ? hero.offsetHeight - 90 : 40;
    nav.classList.toggle('is-solid', window.scrollY > Math.min(limit, 120));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    menu.hidden = !open;
    nav.classList.toggle('menu-open', open);
  }
  toggle.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 980) setMenu(false); });

  /* ---- Reveal + counters ---- */
  function countUp(el) {
    if (reduceMotion) return;
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.hasAttribute('data-plain') ? '' : '+';
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        var num = entry.target.querySelector('[data-count]');
        if (num) countUp(num);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Services: pratinjau foto berbentuk lengkungan yang mengikuti kursor ---- */
  var preview = document.querySelector('.svc-preview');
  var previewImg = preview && preview.querySelector('img');
  var list = document.getElementById('svc-list');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (preview && list && finePointer && !reduceMotion) {
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
    // preload
    list.querySelectorAll('[data-img]').forEach(function (row) { var i = new Image(); i.src = row.getAttribute('data-img'); });
    function loop() {
      cx += (tx - cx) * 0.14; cy += (ty - cy) * 0.14;
      preview.style.transform = 'translate3d(' + (cx + 40) + 'px,' + (cy - 140) + 'px,0) scale(' + (preview.classList.contains('is-on') ? 1 : .85) + ')';
      raf = requestAnimationFrame(loop);
    }
    list.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; });
    list.querySelectorAll('.svc__row').forEach(function (row) {
      row.addEventListener('mouseenter', function (e) {
        previewImg.src = row.getAttribute('data-img');
        if (!preview.classList.contains('is-on')) { cx = tx = e.clientX; cy = ty = e.clientY; }
        preview.classList.add('is-on');
        if (!raf) loop();
      });
    });
    list.addEventListener('mouseleave', function () {
      preview.classList.remove('is-on');
      setTimeout(function () { if (!preview.classList.contains('is-on') && raf) { cancelAnimationFrame(raf); raf = null; } }, 500);
    });
  }

  /* ---- Form dialog ---- */
  var dlg = document.getElementById('need-form');
  var form = document.getElementById('need-form-el');
  var errorEl = form.querySelector('.form-error');
  var required = ['nama', 'perusahaan', 'kebutuhan'].map(function (n) { return form.elements[n]; });

  function openForm(need) {
    if (typeof dlg.showModal !== 'function') { window.open(waUrl(WA_GREETING), '_blank', 'noopener'); return; }
    if (need) form.elements.kebutuhan.value = need;
    errorEl.hidden = true;
    required.forEach(function (f) { f.classList.remove('is-invalid'); });
    dlg.showModal();
    (form.elements.nama.value ? form.elements.pesan : form.elements.nama).focus();
  }
  document.querySelectorAll('.js-open-form').forEach(function (btn) {
    btn.addEventListener('click', function () { openForm(btn.getAttribute('data-need')); });
  });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  required.forEach(function (f) {
    ['input', 'change'].forEach(function (ev) { f.addEventListener(ev, function () { f.classList.remove('is-invalid'); }); });
  });

  form.addEventListener('submit', function (e) {
    var via = e.submitter && e.submitter.value;
    if (via === 'cancel') return;
    e.preventDefault();
    var empty = required.filter(function (f) { return !f.value.trim(); });
    required.forEach(function (f) { f.classList.toggle('is-invalid', empty.indexOf(f) !== -1); });
    if (empty.length) { errorEl.hidden = false; empty[0].focus(); return; }
    errorEl.hidden = true;

    var v = { nama: form.elements.nama.value.trim(), perusahaan: form.elements.perusahaan.value.trim(), kebutuhan: form.elements.kebutuhan.value, pesan: form.elements.pesan.value.trim() };
    var body = 'Halo Ibu Elina,\n\nSaya ' + v.nama + ' dari ' + v.perusahaan + '.\nKebutuhan: ' + v.kebutuhan + '\n' +
      (v.pesan ? 'Situasi singkat: ' + v.pesan + '\n' : '') + '\nMohon info jadwal untuk berdiskusi. Terima kasih.';

    if (via === 'email') {
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Formulir Kebutuhan — ' + v.kebutuhan) + '&body=' + encodeURIComponent(body);
    } else {
      window.open(waUrl(body), '_blank', 'noopener');
    }
    dlg.close();
  });

  /* ---- Formulir percakapan (dari V0) ---- */
  var convo = document.getElementById('convo-form');
  if (convo) {
    var cErr = convo.querySelector('.form-error');
    var cFields = ['nama', 'bisnis', 'topik'].map(function (n) { return convo.elements[n]; });
    cFields.forEach(function (f) { ['input', 'change'].forEach(function (ev) { f.addEventListener(ev, function () { f.classList.remove('is-invalid'); }); }); });
    convo.addEventListener('submit', function (e) {
      e.preventDefault();
      var via = (e.submitter && e.submitter.value) || 'wa';
      var empty = cFields.filter(function (f) { return !f.value.trim(); });
      cFields.forEach(function (f) { f.classList.toggle('is-invalid', empty.indexOf(f) !== -1); });
      if (empty.length) { cErr.hidden = false; empty[0].focus(); return; }
      cErr.hidden = true;
      var nama = cFields[0].value.trim(), bisnis = cFields[1].value.trim(), topik = cFields[2].value;
      var body = 'Halo Elina, nama saya ' + nama + ' dari ' + bisnis + '. Saya ingin berdiskusi tentang ' + topik + '. Kapan kira-kira ada waktu untuk mengobrol? Terima kasih.';
      if (via === 'email') {
        window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Diskusi: ' + topik + ' — ' + bisnis) + '&body=' + encodeURIComponent(body);
      } else {
        window.open(waUrl(body), '_blank', 'noopener');
      }
    });
  }

  /* ---- Newsletter (tanpa backend: lewat email) ---- */
  var nl = document.getElementById('newsletter');
  var nlMsg = nl.querySelector('.newsletter__msg');
  nl.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = nl.elements.email.value.trim();
    nlMsg.hidden = false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { nlMsg.textContent = 'Mohon masukkan alamat email yang valid.'; nl.elements.email.focus(); return; }
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Berlangganan Insight EL-HR Consultant') + '&body=' + encodeURIComponent('Mohon daftarkan email saya untuk insight EL-HR Consultant: ' + email);
    nlMsg.textContent = 'Aplikasi email Anda akan terbuka untuk mengonfirmasi pendaftaran.';
  });
})();
