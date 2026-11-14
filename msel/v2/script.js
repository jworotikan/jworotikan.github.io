(function () {
  'use strict';

  var WA_NUMBER = '62811964036';
  var EMAIL = 'maggie.ek@gmail.com';
  var WA_GREETING = 'Halo Ibu Elina, saya mendapatkan kontak ini dari website EL-HR Consultant dan ingin berdiskusi mengenai kebutuhan HR di perusahaan kami.';

  function waUrl(text) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text); }

  document.documentElement.classList.add('js');

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Semua link WhatsApp: pesan pembuka sesuai konteks kartu
  document.querySelectorAll('.js-wa').forEach(function (a) {
    a.href = waUrl(a.getAttribute('data-msg') || WA_GREETING);
    a.target = '_blank';
    a.rel = 'noopener';
  });

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
  window.addEventListener('resize', function () { if (window.innerWidth > 980) setMenu(false); });

  // Fade-in tenang + hitung angka metrics sekali
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.hasAttribute('data-plain') ? '' : '+';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var start = null, dur = 1200;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // One-stop form (dialog)
  var dlg = document.getElementById('need-form');
  var form = document.getElementById('need-form-el');
  var errorEl = form.querySelector('.form-error');
  var required = ['nama', 'perusahaan', 'kebutuhan'].map(function (n) { return form.elements[n]; });
  var canDialog = typeof dlg.showModal === 'function';

  function openForm(need) {
    if (need) form.elements.kebutuhan.value = need;
    errorEl.hidden = true;
    required.forEach(function (f) { f.classList.remove('is-invalid'); });
    if (canDialog) { dlg.showModal(); } else { window.location.href = waUrl(WA_GREETING); return; }
    (form.elements.nama.value ? form.elements.pesan : form.elements.nama).focus();
  }

  document.querySelectorAll('.js-open-form').forEach(function (btn) {
    btn.addEventListener('click', function () { openForm(btn.getAttribute('data-need')); });
  });

  // Tutup bila klik di luar kartu
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  required.forEach(function (f) {
    ['input', 'change'].forEach(function (ev) { f.addEventListener(ev, function () { f.classList.remove('is-invalid'); }); });
  });

  form.addEventListener('submit', function (e) {
    var via = e.submitter && e.submitter.value;
    if (via === 'cancel') return; // biarkan dialog tertutup

    e.preventDefault();
    var empty = required.filter(function (f) { return !f.value.trim(); });
    required.forEach(function (f) { f.classList.toggle('is-invalid', empty.indexOf(f) !== -1); });
    if (empty.length) { errorEl.hidden = false; empty[0].focus(); return; }
    errorEl.hidden = true;

    var nama = form.elements.nama.value.trim();
    var perusahaan = form.elements.perusahaan.value.trim();
    var kebutuhan = form.elements.kebutuhan.value;
    var pesan = form.elements.pesan.value.trim();

    var body =
      'Halo Ibu Elina,\n\n' +
      'Saya ' + nama + ' dari ' + perusahaan + '.\n' +
      'Kebutuhan: ' + kebutuhan + '\n' +
      (pesan ? 'Situasi singkat: ' + pesan + '\n' : '') +
      '\nMohon info jadwal untuk berdiskusi. Terima kasih.';

    if (via === 'email') {
      window.location.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent('Formulir Kebutuhan — ' + kebutuhan) +
        '&body=' + encodeURIComponent(body);
    } else {
      window.open(waUrl(body), '_blank', 'noopener');
    }
    dlg.close();
  });

  // Newsletter: tanpa backend, kirim permintaan berlangganan via email
  var nl = document.getElementById('newsletter');
  var nlMsg = nl.querySelector('.newsletter__msg');
  nl.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = nl.elements.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nlMsg.hidden = false;
      nlMsg.textContent = 'Mohon masukkan alamat email yang valid.';
      nl.elements.email.focus();
      return;
    }
    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent('Berlangganan EL-HR Consultant Insights') +
      '&body=' + encodeURIComponent('Mohon daftarkan email saya untuk catatan/insight EL-HR Consultant: ' + email);
    nlMsg.hidden = false;
    nlMsg.textContent = 'Aplikasi email Anda akan terbuka untuk mengonfirmasi pendaftaran.';
  });
})();
