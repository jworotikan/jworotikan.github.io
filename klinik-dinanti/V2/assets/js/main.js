/* =========================================================
   Klinik Dinanti — Mockup interactions
   ========================================================= */
(function () {
  const D = window.DINANTI;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Icons (Font Awesome 6) ---------- */
  const FA = {
    calendar: "fa-regular fa-calendar-check", chat: "fa-regular fa-comment-dots", heart: "fa-solid fa-heart",
    award: "fa-solid fa-award", stethoscope: "fa-solid fa-stethoscope", microscope: "fa-solid fa-microscope",
    users: "fa-solid fa-user-group", shield: "fa-solid fa-shield-halved", lock: "fa-solid fa-lock",
    check: "fa-solid fa-check", checkCircle: "fa-solid fa-circle-check", x: "fa-solid fa-xmark",
    plus: "fa-solid fa-plus", arrow: "fa-solid fa-arrow-right", down: "fa-solid fa-chevron-down",
    menu: "fa-solid fa-bars", clock: "fa-regular fa-clock", phone: "fa-solid fa-phone",
    mail: "fa-regular fa-envelope", pin: "fa-solid fa-location-dot", sparkle: "fa-solid fa-seedling",
    flask: "fa-solid fa-flask", baby: "fa-solid fa-baby", male: "fa-solid fa-mars", female: "fa-solid fa-venus",
    scissors: "fa-solid fa-kit-medical", dna: "fa-solid fa-dna", snow: "fa-regular fa-snowflake",
    brain: "fa-solid fa-brain", leaf: "fa-solid fa-leaf", coffee: "fa-solid fa-mug-hot", wallet: "fa-solid fa-wallet",
    book: "fa-solid fa-graduation-cap", search: "fa-solid fa-magnifying-glass", play: "fa-solid fa-play",
    download: "fa-solid fa-download", share: "fa-solid fa-share-nodes", instagram: "fa-brands fa-instagram",
    youtube: "fa-brands fa-youtube", tiktok: "fa-brands fa-tiktok", star: "fa-solid fa-star",
    quiz: "fa-solid fa-clipboard-question", doctor: "fa-solid fa-user-doctor", hospital: "fa-solid fa-hospital",
  };
  const ic = (n, cls = "") => `<i class="ico ${FA[n] || "fa-solid fa-circle"} ${cls}" aria-hidden="true"></i>`;
  const waIcon = `<i class="ico fa-brands fa-whatsapp" aria-hidden="true"></i>`;
  window.ic = ic;

  const logoSvg = `<svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="24" r="23" fill="#F5E6E0"/>
    <path d="M17 13 V29" stroke="#E07A5F" stroke-width="4" stroke-linecap="round"/>
    <path d="M27 13 V29" stroke="#E07A5F" stroke-width="4" stroke-linecap="round"/>
    <path d="M11 27 C12 36 19 39 22 39 C25 39 33 37 35 27" stroke="#6B8E7D" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <circle cx="22" cy="31" r="3" fill="#C6A15B"/>
  </svg>`;

  /* ---------- WhatsApp Smart Router (FR-02) ---------- */
  const WA_TEMPLATES = {
    default: "Halo Sahabat Dinanti, saya ingin bertanya seputar program hamil dan jadwal konsultasi. Mohon infonya. Terima kasih.",
    andrologi: "Halo Sahabat Dinanti, saya ingin menanyakan jadwal konsultasi dengan dr. Christian Melka Parmanto, Sp.And untuk pemeriksaan sperma/andrologi. Mohon infonya. Terima kasih.",
    ivf: "Halo Sahabat Dinanti, saya dan pasangan ingin mendapatkan rincian jadwal dan estimasi biaya Paket Program Bayi Tabung (IVF) di Dinanti. Boleh dibantu informasinya?",
    paket: "Halo Sahabat Dinanti, saya ingin menanyakan rincian dan estimasi biaya paket promil di Dinanti (Harmoni Berdua / IUI / IVF). Boleh dibantu informasinya?",
    dokter: "Halo Sahabat Dinanti, saya ingin menanyakan jadwal praktik dokter dan membuat janji konsultasi. Mohon infonya. Terima kasih.",
  };
  const waLink = (msg) => `https://wa.me/${D.clinic.waNumber}?text=${encodeURIComponent(msg)}`;
  const pageCtx = () => document.body.dataset.waContext || "default";
  const openWA = (msg) => window.open(waLink(msg || WA_TEMPLATES[pageCtx()] || WA_TEMPLATES.default), "_blank", "noopener");
  window.openWA = openWA;

  /* ---------- Shared layout ---------- */
  const NAV = [
    { href: "layanan.html", label: "Layanan Promil", key: "layanan", mega: [
      ["layanan.html#skrining", "users", "Skrining Awal Berdua", "Paket Harmoni Berdua dalam 1 hari kunjungan"],
      ["layanan-ivf.html", "flask", "Bayi Tabung (IVF)", "ICSI, blastokista & time-lapse incubator"],
      ["layanan.html#iui", "heart", "Inseminasi (IUI)", "Memperpendek jarak sperma ke sel telur"],
      ["layanan-andrologi.html", "male", "Klinik Andrologi Pria", "Analisa sperma CASA, DFI, varikokel"],
      ["layanan.html#bedah", "scissors", "Laparoskopi & Histeroskopi", "Bedah invasif minimal"],
      ["layanan.html#psikologi", "brain", "Pendampingan Psikologis", "Konseling promil untuk pasutri"],
    ]},
    { href: "dokter.html", label: "Tim Dokter", key: "dokter" },
    { href: "paket.html", label: "Paket & Biaya", key: "paket" },
    { href: "kisah.html", label: "Kisah Sukses", key: "kisah" },
    { href: "tools.html", label: "Edukasi & Tools", key: "edukasi", mega: [
      ["tools.html#kalkulator", "calendar", "Kalkulator Masa Subur", "Hitung ovulasi & jendela subur"],
      ["tools.html#kuis", "quiz", "Kuis Skrining 1 Menit", "Rekomendasi langkah awal personal"],
      ["edukasi.html", "book", "Artikel Medis", "Ditinjau oleh dokter spesialis"],
      ["edukasi.html#glosarium", "search", "Glosarium A–Z", "Istilah fertilitas bahasa awam"],
    ]},
    { href: "tentang.html", label: "Tentang", key: "tentang" },
  ];

  function renderHeader() {
    const el = $("#site-header");
    if (!el) return;
    const active = document.body.dataset.page;
    el.outerHTML = `
    <div class="mockup-ribbon"><b>MOCKUP</b> · Foto, harga & kontak adalah data dummy untuk keperluan presentasi desain.</div>
    <div class="topbar"><div class="container">
      <div class="tb-left">
        <span class="hide-sm" style="display:flex;gap:6px;align-items:center">${ic("clock")} ${D.clinic.hours}</span>
        <a href="#" data-wa style="display:flex;gap:6px;align-items:center;color:#86EFAC">${waIcon} Careline ${D.clinic.waDisplay}</a>
      </div>
      <div class="tb-right"><span class="lang"><a href="#" class="active">ID</a> | <a href="#">EN</a></span></div>
    </div></div>
    <header class="header" id="header"><div class="container">
      <a href="index.html" class="logo" aria-label="Beranda Dinanti"><img src="assets/img/logo/logo-horizontal.png" alt="Dinanti Klinik Utama" class="logo-img"></a>
      <ul class="nav">
        ${NAV.map((n) => `<li><a href="${n.href}" class="${active === n.key ? "active" : ""}">${n.label}${n.mega ? ic("down", "caret") : ""}</a>
          ${n.mega ? `<div class="mega">${n.mega.map((m) => `<a href="${m[0]}"><span class="mi">${ic(m[1])}</span><span><strong>${m[2]}</strong><span>${m[3]}</span></span></a>`).join("")}</div>` : ""}
        </li>`).join("")}
      </ul>
      <div class="header-cta">
        <button class="btn btn-primary btn-sm" data-book>${ic("calendar")} Buat Janji Konsultasi</button>
        <button class="burger" aria-label="Menu" id="burger">${ic("menu")}</button>
      </div>
    </div></header>
    <div class="mobile-menu" id="mobileMenu">
      <div class="mm-backdrop" data-mm-close></div>
      <div class="mm-panel">
        <div class="mm-head"><a href="index.html" class="logo"><img src="assets/img/logo/logo-horizontal.png" alt="Dinanti Klinik Utama" class="logo-img"></a>
          <button class="modal-close" data-mm-close aria-label="Tutup">${ic("x")}</button></div>
        <nav class="mm-links">
          <a href="index.html">Beranda</a>
          ${NAV.map((n) => `<a href="${n.href}">${n.label}</a>${(n.mega || []).map((m) => `<a class="sub" href="${m[0]}">${m[2]}</a>`).join("")}`).join("")}
          <a href="kontak.html">Kontak & Lokasi</a>
        </nav>
        <button class="btn btn-primary btn-block" data-book>${ic("calendar")} Buat Janji Konsultasi</button>
        <button class="btn btn-wa btn-block" data-wa style="margin-top:10px">${waIcon} Chat Careline</button>
      </div>
    </div>`;
  }

  function renderFooter() {
    const el = $("#site-footer");
    if (!el) return;
    el.outerHTML = `
    <footer class="footer"><div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo"><img src="assets/img/logo/logo-horizontal-white.png" alt="Dinanti Klinik Utama" class="logo-img"></a>
          <p style="margin-top:18px;max-width:340px">Teman seperjuangan menjemput buah hati yang dinanti. Perpaduan teknologi reproduksi mutakhir & sentuhan empati sepenuh hati.</p>
          <div class="socials">
            <a href="#" aria-label="Instagram">${ic("instagram")}</a><a href="#" aria-label="TikTok">${ic("tiktok")}</a><a href="#" aria-label="YouTube">${ic("youtube")}</a>
          </div>
          <div class="cert-row"><span class="cert">${ic("award")} Lab Standar RTAC</span><span class="cert">${ic("lock")} Data Terenkripsi · UU PDP</span></div>
        </div>
        <div><h4>Layanan</h4><ul>
          <li><a href="layanan.html#skrining">Skrining Harmoni Berdua</a></li>
          <li><a href="layanan.html#iui">Inseminasi (IUI)</a></li>
          <li><a href="layanan-ivf.html">Bayi Tabung (IVF)</a></li>
          <li><a href="layanan-andrologi.html">Klinik Andrologi</a></li>
          <li><a href="layanan.html#preservasi">Egg & Sperm Freezing</a></li>
          <li><a href="layanan.html#psikologi">Konseling Promil</a></li>
        </ul></div>
        <div><h4>Jelajahi</h4><ul>
          <li><a href="dokter.html">Tim Dokter & Jadwal</a></li>
          <li><a href="paket.html">Paket & Biaya</a></li>
          <li><a href="kisah.html">Kisah Pejuang Garis Dua</a></li>
          <li><a href="tools.html">Kalkulator & Kuis</a></li>
          <li><a href="edukasi.html">Artikel & Glosarium</a></li>
          <li><a href="tentang.html">Tentang Dinanti</a></li>
        </ul></div>
        <div><h4>Kunjungi Kami</h4>
          <div class="contact-line">${ic("pin")}<span>${D.clinic.address}</span></div>
          <div class="contact-line">${ic("clock")}<span>${D.clinic.hours}</span></div>
          <div class="contact-line">${ic("phone")}<span>${D.clinic.phone}</span></div>
          <div class="contact-line">${ic("mail")}<span>${D.clinic.email}</span></div>
          <p style="font-size:12.5px;color:#94A3B8;margin-top:10px">No. Izin Operasional Faskes: [XXX/XXXX/XXXX]</p>
        </div>
      </div>
      <div class="disclaimer"><strong style="color:#CBD5E1">Medical Disclaimer:</strong> Informasi pada website ini bersifat edukatif dan tidak menggantikan diagnosis, saran, atau penanganan medis profesional. Hasil program kehamilan dapat berbeda pada setiap pasangan. Selalu konsultasikan kondisi Anda dengan dokter spesialis.</div>
      <div class="footer-bottom"><span>© 2026 Klinik Fertilitas Dinanti. Seluruh hak dilindungi.</span><span><a href="#">Kebijakan Privasi</a> · <a href="#">Syarat & Ketentuan</a></span></div>
    </div></footer>
    <button class="fab-wa" data-wa aria-label="Tanya Sahabat Dinanti via WhatsApp"><span class="pulse"></span>${waIcon}<span>Tanya Sahabat Dinanti</span></button>
    <div class="bottom-bar">
      <button class="btn btn-wa" data-wa>${waIcon} Chat Careline</button>
      <button class="btn btn-primary" data-book>${ic("calendar")} Buat Janji</button>
    </div>
    ${bookingModalHtml()}`;
  }

  /* ---------- Booking modal (FR-01) ---------- */
  function bookingModalHtml() {
    const fertDocs = D.doctors.filter((d) => ["obsgyn", "andrologi", "akupuntur"].includes(d.poli));
    const otherDocs = D.doctors.filter((d) => !["obsgyn", "andrologi", "akupuntur"].includes(d.poli));
    return `
    <div class="modal" id="bookModal" role="dialog" aria-modal="true" aria-labelledby="bookTitle">
      <div class="modal-backdrop" data-close></div>
      <div class="modal-dialog">
        <div class="modal-head">
          <div><h3 id="bookTitle">Buat Janji Konsultasi</h3><p>Isi data singkat berikut. Perawat konselor Careline akan mengonfirmasi jadwal via WhatsApp.</p></div>
          <button class="modal-close" data-close aria-label="Tutup">${ic("x")}</button>
        </div>
        <div class="modal-body">
          <form id="bookForm" novalidate>
            <div class="form-grid">
              <div class="field full"><label>Pilih Dokter</label>
                <select class="select" name="doctor" id="bkDoctor">
                  <option value="">Belum tahu — bantu pilihkan</option>
                  <optgroup label="Fertilitas & Reproduksi">${fertDocs.map((d) => `<option value="${d.id}">${d.name}</option>`).join("")}</optgroup>
                  <optgroup label="Poli Lainnya">${otherDocs.map((d) => `<option value="${d.id}">${d.name}</option>`).join("")}</optgroup>
                </select></div>
              <div class="field"><label>Hari Praktik</label><select class="select" name="day" id="bkDay"></select></div>
              <div class="field"><label>Jenis Layanan</label>
                <select class="select" name="service">${D.services.map((s) => `<option>${s}</option>`).join("")}</select></div>
              <div class="field"><label>Nama Lengkap Istri</label><input class="input" name="wife" placeholder="cth. Maya Anggraini" required><span class="error-text">Mohon isi nama istri</span></div>
              <div class="field"><label>Usia Istri</label><input class="input" name="wifeAge" type="number" min="17" max="60" placeholder="28"></div>
              <div class="field"><label>Nama Lengkap Suami</label><input class="input" name="husband" placeholder="cth. Rian Pratama" required><span class="error-text">Mohon isi nama suami</span></div>
              <div class="field"><label>Usia Suami</label><input class="input" name="husbandAge" type="number" min="17" max="80" placeholder="30"></div>
              <div class="field"><label>Nomor WhatsApp Aktif</label><input class="input" name="phone" inputmode="tel" placeholder="08xx atau +62xx" required><span class="error-text">Format nomor Indonesia: 08xx / +628xx (10–14 digit)</span></div>
              <div class="field"><label>Email <span class="muted" style="font-weight:500">(opsional)</span></label><input class="input" name="email" type="email" placeholder="nama@email.com"></div>
              <div class="field full"><label>Catatan Singkat <span class="muted" style="font-weight:500">(opsional)</span></label><textarea class="textarea" name="note" placeholder="cth. Sudah menikah 2 tahun, siklus haid tidak teratur"></textarea></div>
              <div class="full privacy-note">${ic("lock")}<div><strong>Privasi Anda adalah Prioritas Tertinggi Kami.</strong>Data dan nomor kontak Anda dienkripsi secara aman dan hanya digunakan oleh perawat konselor (Careline) Dinanti untuk mengonfirmasi jadwal konsultasi Anda.</div></div>
              <div class="field full"><label class="check"><input type="checkbox" name="consent" required> Saya menyetujui <a href="#" class="accent">Kebijakan Privasi</a> dan pemrosesan data sesuai UU PDP No. 27/2022.</label><span class="error-text">Mohon centang persetujuan privasi</span></div>
              <div class="full"><button class="btn btn-primary btn-block" type="submit">${ic("calendar")} Kirim Permintaan Janji Temu</button></div>
            </div>
          </form>
          <div id="bookSuccess" hidden></div>
        </div>
      </div>
    </div>`;
  }

  function fillDays(docId, presetDay) {
    const sel = $("#bkDay");
    if (!sel) return;
    const doc = D.doctors.find((d) => d.id === docId);
    const opts = doc
      ? doc.schedule.map((s) => `<option value="${s[0]} ${s[1]}–${s[2]}">${s[0]} · ${s[1]} – ${s[2]}</option>`)
      : D.days.map((d) => `<option value="${d}">${d}</option>`);
    sel.innerHTML = opts.join("");
    if (presetDay) {
      const o = Array.from(sel.options).find((o) => o.value.startsWith(presetDay));
      if (o) sel.value = o.value;
    }
  }

  function openBooking(opts = {}) {
    const m = $("#bookModal");
    $("#bookForm").hidden = false;
    $("#bookSuccess").hidden = true;
    $("#bkDoctor").value = opts.doctor || "";
    fillDays(opts.doctor, opts.day);
    if (opts.service) $('#bookForm [name="service"]').value = opts.service;
    m.classList.add("open");
    document.body.classList.add("modal-open");
    closeMobileMenu();
  }
  window.openBooking = openBooking;
  function closeModal() {
    $$(".modal.open").forEach((m) => m.classList.remove("open"));
    document.body.classList.remove("modal-open");
  }

  const validPhone = (v) => /^(\+62|62|0)8\d{8,12}$/.test(v.replace(/[\s-]/g, ""));

  function bindBooking() {
    $("#bkDoctor").addEventListener("change", (e) => fillDays(e.target.value));
    $("#bookForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      let ok = true;
      const setErr = (name, bad) => {
        const field = f[name].closest(".field");
        field.classList.toggle("has-error", bad);
        if (bad) ok = false;
      };
      setErr("wife", !f.wife.value.trim());
      setErr("husband", !f.husband.value.trim());
      setErr("phone", !validPhone(f.phone.value));
      setErr("consent", !f.consent.checked);
      if (!ok) return;
      const doc = D.doctors.find((d) => d.id === f.doctor.value);
      const data = {
        Dokter: doc ? doc.name : "Dibantu pilihkan Careline",
        Jadwal: f.day.value,
        Layanan: f.service.value,
        Istri: `${f.wife.value}${f.wifeAge.value ? ` (${f.wifeAge.value} th)` : ""}`,
        Suami: `${f.husband.value}${f.husbandAge.value ? ` (${f.husbandAge.value} th)` : ""}`,
        WhatsApp: f.phone.value,
      };
      const msg = `Halo Sahabat Dinanti, saya ingin membuat janji konsultasi:\n${Object.entries(data).map(([k, v]) => `• ${k}: ${v}`).join("\n")}${f.note.value ? `\n• Catatan: ${f.note.value}` : ""}\nMohon konfirmasinya. Terima kasih.`;
      f.hidden = true;
      const s = $("#bookSuccess");
      s.hidden = false;
      s.innerHTML = `<div class="success">
        <div class="ok">${ic("check")}</div>
        <h3 class="serif" style="font-size:26px;font-weight:600">Permintaan Janji Temu Terkirim</h3>
        <p class="muted">Ringkasan pemesanan dikirim ke WhatsApp Anda & tim Careline Dinanti. Kami akan menghubungi Anda dalam 1×24 jam kerja.</p>
        <div class="summary-box">${Object.entries(data).map(([k, v]) => `<div><span>${k}</span><span>${v}</span></div>`).join("")}</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <a class="btn btn-wa" href="${waLink(msg)}" target="_blank" rel="noopener">${waIcon} Lanjutkan di WhatsApp</a>
          <button class="btn btn-ghost" data-close>Tutup</button>
        </div>
        <p class="small-disclaimer">(Mockup: tidak ada data yang benar-benar dikirim.)</p>
      </div>`;
    });
  }

  /* ---------- Global bindings ---------- */
  function bindGlobal() {
    document.addEventListener("click", (e) => {
      const t = e.target.closest("[data-book],[data-wa],[data-close],[data-mm-close],#burger");
      if (!t) return;
      if (t.matches("[data-book]")) {
        e.preventDefault();
        openBooking({ doctor: t.dataset.doctor, day: t.dataset.day, service: t.dataset.service });
      } else if (t.matches("[data-wa]")) {
        e.preventDefault();
        openWA(t.dataset.waMsg ? WA_TEMPLATES[t.dataset.waMsg] || t.dataset.waMsg : null);
      } else if (t.matches("[data-close]")) closeModal();
      else if (t.matches("[data-mm-close]")) closeMobileMenu();
      else if (t.id === "burger") $("#mobileMenu").classList.add("open");
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeMobileMenu(); } });
    const header = $("#header");
    const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  function closeMobileMenu() { const m = $("#mobileMenu"); if (m) m.classList.remove("open"); }

  /* ---------- Reveal on scroll ---------- */
  function bindReveal() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* ---------- Accordion & tabs ---------- */
  function bindAccordion() {
    $$(".acc-btn").forEach((b) => b.addEventListener("click", () => {
      const item = b.closest(".acc-item");
      const panel = item.querySelector(".acc-panel");
      const open = item.classList.toggle("open");
      panel.style.maxHeight = open ? panel.scrollHeight + "px" : 0;
      b.setAttribute("aria-expanded", open);
    }));
  }
  function bindTabs() {
    $$("[data-tabs]").forEach((wrap) => {
      const tabs = $$(".tab", wrap);
      tabs.forEach((t) => t.addEventListener("click", () => {
        tabs.forEach((x) => x.classList.toggle("active", x === t));
        $$(".tab-panel", wrap).forEach((p) => p.classList.toggle("active", p.id === t.dataset.tab));
      }));
    });
  }

  /* ---------- Doctor card ---------- */
  const initials = (n) => n.replace(/^(dr\.|drg\.)\s*/i, "").split(/[ ,]/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const poliOf = (id) => D.polis.find((p) => p.id === id);

  function doctorCard(d, { full = false } = {}) {
    const daysOn = d.schedule.map((x) => x[0]);
    const poli = poliOf(d.poli);
    const pillCls = d.poli === "andrologi" ? "sage" : d.poli === "akupuntur" ? "gold" : "";
    const idx = D.doctors.indexOf(d) + 1;
    // split "dr. Nama, Sp.OG, Subsp.FER" -> name + degree
    const cut = d.name.indexOf(",");
    const nm = cut > 0 ? d.name.slice(0, cut) : d.name;
    const deg = cut > 0 ? d.name.slice(cut + 1).trim() : "";
    const sched = (day) => d.schedule.find((x) => x[0] === day);
    return `<article class="doc-card2 reveal">
      <div class="dc-photo">${SCENES.doctor(d.id, idx)}<span class="pill ${pillCls}">${poli.label}</span></div>
      <div class="dc-body">
        <h3 title="${d.name}">${nm}</h3>
        <div class="dc-deg">${deg || "&nbsp;"}</div>
        <div class="dc-spec">${d.title}</div>
        ${full ? `<div class="days-label">Jadwal praktik</div><div class="slots">${d.schedule.map((x) => `<button class="slot-chip" data-book data-doctor="${d.id}" data-day="${x[0]}" title="Pilih jadwal ${x[0]}"><b>${x[0]}</b><span>${x[1]}–${x[2]}</span></button>`).join("")}</div>` : ""}
        <div class="dc-foot ${full ? "plain" : ""}">
        ${full ? "" : `<div class="days-label">Jadwal praktik</div><div class="days">${D.days.map((day, i) => { const s = sched(day); return `<span class="${s ? "on" : ""}" title="${s ? `${day} · ${s[1]}–${s[2]}` : `${day} · tidak praktik`}">${D.daysShort[i]}</span>`; }).join("")}</div>`}
        <button class="btn btn-primary btn-sm btn-block" data-book data-doctor="${d.id}">${ic("calendar")} Buat Janji</button>
        </div>
      </div>
    </article>`;
  }
  window.doctorCard = doctorCard;

  function renderFeaturedDoctors() {
    const el = $("#featuredDoctors");
    if (!el) return;
    el.innerHTML = D.doctors.filter((d) => d.featured).map((d) => doctorCard(d)).join("");
  }

  /* ---------- Doctor directory (FR-05) ---------- */
  function initDirectory() {
    const grid = $("#doctorGrid");
    if (!grid) return;
    const state = { poli: "fertilitas", day: "all", view: "card" };
    const hash = location.hash.replace("#", "");
    if (hash && (hash === "all" || D.polis.some((p) => p.id === hash))) state.poli = hash;

    const poliChips = [["fertilitas", "Fertilitas & Reproduksi"], ["all", "Semua Poli"], ...D.polis.map((p) => [p.id, p.label])];
    $("#poliFilter").innerHTML = poliChips.map(([v, l]) => `<button class="chip" data-v="${v}">${l}</button>`).join("");
    $("#dayFilter").innerHTML = `<option value="all">Semua hari</option>` + D.days.map((d) => `<option value="${d}">${d}</option>`).join("");

    const match = (d) => {
      const okPoli = state.poli === "all" ? true : state.poli === "fertilitas" ? poliOf(d.poli).fertility : d.poli === state.poli;
      const okDay = state.day === "all" || d.schedule.some((s) => s[0] === state.day);
      return okPoli && okDay;
    };

    function render() {
      $$("#poliFilter .chip").forEach((c) => c.classList.toggle("active", c.dataset.v === state.poli));
      $("#dayFilter").value = state.day;
      $$(".view-toggle button").forEach((b) => b.classList.toggle("active", b.dataset.view === state.view));
      const list = D.doctors.filter(match);
      $("#resultCount").textContent = `${list.length} dokter${state.day !== "all" ? ` yang praktik hari ${state.day}` : ""}`;
      if (state.view === "card") {
        $("#tableView").hidden = true; grid.hidden = false;
        grid.innerHTML = list.length ? list.map((d) => doctorCard(d, { full: true })).join("") : `<div class="empty-state" style="grid-column:1/-1">Tidak ada dokter yang sesuai filter. Coba hari lain.</div>`;
        $$(".reveal", grid).forEach((e) => e.classList.add("in"));
      } else {
        grid.hidden = true; $("#tableView").hidden = false;
        const todayIdx = (new Date().getDay() + 6) % 7;
        const byPoli = D.polis.map((p) => [p, list.filter((d) => d.poli === p.id)]).filter(([, l]) => l.length);
        $("#tableView").innerHTML = `<div class="week-table-wrap"><table class="week-table">
          <thead><tr><th style="min-width:240px">Dokter</th>${D.days.map((d, i) => `<th class="${i === todayIdx ? "today" : ""}">${d}${i === todayIdx ? " · Hari ini" : ""}</th>`).join("")}</tr></thead>
          <tbody>${byPoli.map(([p, l]) => `<tr class="poli-row"><td colspan="8">${p.name}</td></tr>` + l.map((d) => `<tr>
            <td><div class="dname">${d.name}</div><div class="dspec">${d.title}</div></td>
            ${D.days.map((day, i) => { const s = d.schedule.find((x) => x[0] === day); return `<td class="slot ${i === todayIdx ? "today" : ""}">${s ? `<span>${s[1]}–${s[2]}</span>` : `<span style="background:none;color:#CBD5E1">—</span>`}</td>`; }).join("")}
          </tr>`).join("")).join("")}</tbody></table></div>`;
      }
    }
    $("#poliFilter").addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) { state.poli = c.dataset.v; render(); } });
    $("#dayFilter").addEventListener("change", (e) => { state.day = e.target.value; render(); });
    $$(".view-toggle button").forEach((b) => b.addEventListener("click", () => { state.view = b.dataset.view; render(); }));
    render();
  }

  /* ---------- Fertility calculator (FR-03) ---------- */
  const MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const fmt = (d, opt = {}) => d.toLocaleDateString("id-ID", { day: "numeric", month: "long", ...opt });
  const fmtShort = (d) => d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const isoDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const parseDate = (v) => { const [y, m, d] = v.split("-").map(Number); return new Date(y, m - 1, d); };

  function calc(lmp, cycle, luteal = 14) {
    const ovulation = addDays(lmp, cycle - luteal);
    return { lmp, ovulation, fertileStart: addDays(ovulation, -5), fertileEnd: addDays(ovulation, 1), nextPeriod: addDays(lmp, cycle), cycle };
  }

  function initQuickCalc() {
    const f = $("#quickCalc");
    if (!f) return;
    const d = f.querySelector("[name=lmp]");
    d.value = isoDate(addDays(new Date(), -10));
    d.max = isoDate(new Date());
    const show = () => {
      if (!d.value) return;
      const r = calc(parseDate(d.value), +f.cycle.value || 28);
      $("#quickResult").innerHTML = `
        <div class="r-row"><span>Perkiraan ovulasi</span><b>${fmt(r.ovulation)}</b></div>
        <div class="r-row"><span>Hari terbaik berhubungan</span><b>${fmtShort(r.fertileStart)} – ${fmtShort(r.fertileEnd)}</b></div>
        <div class="r-row"><span>Haid berikutnya</span><b style="color:var(--primary-dark)">${fmt(r.nextPeriod)}</b></div>`;
    };
    f.addEventListener("submit", (e) => { e.preventDefault(); show(); });
  }

  function initFullCalc() {
    const f = $("#calcForm");
    if (!f) return;
    f.lmp.max = isoDate(new Date());
    f.lmp.value = isoDate(addDays(new Date(), -8));
    const sync = () => { $("#cycleVal").textContent = f.cycle.value + " hari"; $("#lutealVal").textContent = f.luteal.value + " hari"; };
    f.cycle.addEventListener("input", sync); f.luteal.addEventListener("input", sync); sync();
    let last = null;

    function monthCal(year, month, r) {
      const first = new Date(year, month, 1);
      const offset = (first.getDay() + 6) % 7;
      const days = new Date(year, month + 1, 0).getDate();
      const today = new Date();
      let cells = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => `<div class="dow">${d}</div>`).join("");
      for (let i = 0; i < offset; i++) cells += `<div class="d empty"></div>`;
      for (let i = 1; i <= days; i++) {
        const dt = new Date(year, month, i);
        const cls = [];
        if (sameDay(dt, r.ovulation)) cls.push("ovulation");
        else if (dt >= r.fertileStart && dt <= r.fertileEnd) cls.push("fertile");
        if (dt >= r.nextPeriod && dt < addDays(r.nextPeriod, 5)) cls.push("period");
        if (sameDay(dt, r.lmp)) cls.push("lmp");
        if (sameDay(dt, today)) cls.push("today");
        cells += `<div class="d ${cls.join(" ")}">${i}</div>`;
      }
      return `<div class="cal"><h4>${MONTHS[month]} ${year}</h4><div class="cal-grid">${cells}</div></div>`;
    }

    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!f.lmp.value) return;
      const r = calc(parseDate(f.lmp.value), +f.cycle.value, +f.luteal.value);
      last = r;
      const m1 = r.lmp, m2 = new Date(r.lmp.getFullYear(), r.lmp.getMonth() + 1, 1);
      $("#calcOut").innerHTML = `
        <div class="result-cards">
          <div class="rc ov"><small>Puncak Masa Subur (Ovulasi)</small><strong>${fmt(r.ovulation, { weekday: "long" })}</strong></div>
          <div class="rc fw"><small>Jendela Masa Subur</small><strong>${fmtShort(r.fertileStart)} – ${fmt(r.fertileEnd)}</strong></div>
          <div class="rc np"><small>Perkiraan Haid Berikutnya</small><strong>${fmt(r.nextPeriod, { weekday: "long" })}</strong></div>
        </div>
        <div class="cal-wrap">${monthCal(m1.getFullYear(), m1.getMonth(), r)}${monthCal(m2.getFullYear(), m2.getMonth(), r)}</div>
        <div class="cal-legend">
          <span><i style="background:var(--sage-dark)"></i> Hari ovulasi (puncak)</span>
          <span><i style="background:#CFE0D6"></i> Jendela masa subur tinggi</span>
          <span><i style="background:var(--blush-dark)"></i> Perkiraan haid berikutnya</span>
          <span><i style="outline:2px dashed var(--primary);outline-offset:-2px"></i> HPHT</span>
        </div>
        <div class="tool-actions">
          <button class="btn btn-primary btn-sm" id="icsBtn">${ic("download")} Simpan ke Kalender (.ics)</button>
          <button class="btn btn-wa btn-sm" id="calcWa">${waIcon} Kirim Hasil ke WhatsApp</button>
          <a class="btn btn-ghost btn-sm" href="#kuis">${ic("quiz")} Lanjut Kuis Skrining 1 Menit</a>
        </div>
        <p class="small-disclaimer">Hasil berupa perkiraan berdasarkan siklus rata-rata dan tidak menggantikan pemeriksaan USG folikel oleh dokter.</p>`;
      $("#icsBtn").addEventListener("click", () => downloadICS(last));
      $("#calcWa").addEventListener("click", () => openWA(`Halo Sahabat Dinanti, hasil kalkulator masa subur saya: ovulasi ${fmt(last.ovulation)}, masa subur ${fmtShort(last.fertileStart)}–${fmt(last.fertileEnd)}, haid berikutnya ${fmt(last.nextPeriod)}. Saya ingin konsultasi program hamil.`));
      if (window.innerWidth < 900) $("#calcOut").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    f.requestSubmit ? f.requestSubmit() : f.dispatchEvent(new Event("submit"));
  }

  function downloadICS(r) {
    const d = (x) => isoDate(x).replace(/-/g, "");
    const ev = (start, end, title, desc) => `BEGIN:VEVENT\r\nUID:${d(start)}-${Math.random().toString(36).slice(2)}@dinanti\r\nDTSTAMP:${d(new Date())}T000000Z\r\nDTSTART;VALUE=DATE:${d(start)}\r\nDTEND;VALUE=DATE:${d(end)}\r\nSUMMARY:${title}\r\nDESCRIPTION:${desc}\r\nEND:VEVENT\r\n`;
    const ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Dinanti//Kalkulator Masa Subur//ID\r\n" +
      ev(r.fertileStart, addDays(r.fertileEnd, 1), "Jendela Masa Subur 💚", "Perkiraan dari Kalkulator Klinik Dinanti") +
      ev(r.ovulation, addDays(r.ovulation, 1), "Perkiraan Ovulasi ✨", "Puncak masa subur — Klinik Dinanti") +
      ev(r.nextPeriod, addDays(r.nextPeriod, 1), "Perkiraan Haid Berikutnya", "Klinik Dinanti") + "END:VCALENDAR";
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "dinanti-masa-subur.ics";
    a.click();
  }

  /* ---------- Fertility quiz (FR-04) ---------- */
  const QUIZ = [
    { key: "duration", q: "Sudah berapa lama Anda dan pasangan mencoba hamil secara rutin tanpa kontrasepsi?", hint: "Hitung sejak berhubungan teratur 2–3 kali seminggu tanpa alat kontrasepsi.",
      opts: [["lt6", "Kurang dari 6 bulan"], ["6to12", "6 – 12 bulan"], ["gt1", "Lebih dari 1 tahun"], ["gt2", "Lebih dari 2 tahun"]] },
    { key: "age", q: "Berapa usia Bunda dan Ayah saat ini?", hint: "Usia Bunda berpengaruh besar pada cadangan sel telur.",
      sub: [
        { key: "wifeAge", label: "Usia Bunda", opts: [["lt30", "< 30 tahun"], ["30to35", "30 – 35 tahun"], ["gt35", "> 35 tahun"]] },
        { key: "husbandAge", label: "Usia Ayah", opts: [["lt35", "< 35 tahun"], ["35to45", "35 – 45 tahun"], ["gt45", "> 45 tahun"]] },
      ] },
    { key: "cycle", q: "Bagaimana pola siklus menstruasi Bunda?", hint: "Pilih yang paling sesuai dengan kondisi 6 bulan terakhir.",
      opts: [["regular", "Teratur (28–30 hari)"], ["irregular", "Tidak teratur / jarang haid"], ["pain", "Sangat nyeri hebat setiap haid"]] },
    { key: "male", q: "Apakah Ayah pernah melakukan pemeriksaan sperma di laboratorium?", hint: "Sekitar 40% faktor kesuburan berasal dari pihak pria.",
      opts: [["normal", "Pernah, hasilnya normal"], ["issue", "Pernah, ada keluhan / hasil kurang baik"], ["never", "Belum pernah sama sekali"]] },
    { key: "history", q: "Adakah riwayat medis berikut pada Anda berdua atau keluarga?", hint: "Boleh pilih lebih dari satu.", multi: true,
      opts: [["diabetes", "Diabetes"], ["hipertensi", "Hipertensi"], ["pcos", "PCOS"], ["kista", "Kista / endometriosis"], ["varikokel", "Varikokel"], ["gagal", "Pernah gagal program (IUI/IVF)"], ["none", "Tidak ada"]] },
  ];

  function triage(a) {
    const reasons = [];
    const hist = a.history || [];
    // Merah/Emas
    if (a.wifeAge === "gt35" || a.duration === "gt2" || hist.includes("gagal")) {
      if (a.wifeAge === "gt35") reasons.push("Usia Bunda di atas 35 tahun — waktu biologis menjadi faktor penting");
      if (a.duration === "gt2") reasons.push("Sudah mencoba lebih dari 2 tahun");
      if (hist.includes("gagal")) reasons.push("Ada riwayat program yang belum berhasil sebelumnya");
      return { cat: "merah", label: "Kategori Merah/Emas · Fast-Track", title: "Konsultasi Prioritas dengan Dokter Subspesialis Fertilitas (KFER)", reco: "Konsultasi Prioritas Dokter Subspesialis Fertilitas", body: "Kami sarankan Ayah & Bunda segera berkonsultasi dengan dokter Sp.OG Subsp.FER untuk evaluasi menyeluruh dan rencana program yang dipersonalisasi — termasuk opsi IUI atau Bayi Tabung (IVF) bila diperlukan.", doctor: "andriana", service: "Program Bayi Tabung (IVF)", reasons };
    }
    // Oranye
    if (a.cycle === "pain" || a.male === "never" || a.male === "issue" || hist.includes("varikokel") || hist.includes("kista")) {
      if (a.cycle === "pain") reasons.push("Nyeri haid hebat — perlu evaluasi kemungkinan endometriosis");
      if (a.male === "never") reasons.push("Ayah belum pernah melakukan analisa sperma");
      if (a.male === "issue") reasons.push("Hasil analisa sperma sebelumnya perlu dievaluasi ulang");
      if (hist.includes("varikokel")) reasons.push("Riwayat varikokel pada Ayah");
      if (hist.includes("kista")) reasons.push("Riwayat kista / endometriosis");
      const male = a.male !== "normal" || hist.includes("varikokel");
      return { cat: "oranye", label: "Kategori Oranye · Evaluasi Khusus", title: male ? "Analisa Sperma CASA & Konsultasi Andrologi" : "USG Khusus & Evaluasi Endometriosis", reco: male ? "Analisa Sperma CASA" : "USG Khusus Evaluasi Endometriosis", body: male ? "Langkah paling efektif saat ini adalah pemeriksaan sperma berbasis komputer (CASA) berstandar WHO bersama dokter spesialis andrologi — di ruang pengambilan sampel yang sepenuhnya privat." : "Kami sarankan pemeriksaan USG transvaginal khusus untuk mengevaluasi kemungkinan endometriosis atau kista, bersama dokter kandungan fertilitas.", doctor: male ? "christian" : "andriana", service: male ? "Skrining Sperma / Andrologi" : "Konsultasi Pertama Berdua", reasons };
    }
    // Kuning
    if (a.duration === "gt1" || a.cycle === "irregular" || hist.includes("pcos") || a.wifeAge === "30to35") {
      if (a.duration === "gt1") reasons.push("Sudah mencoba lebih dari 1 tahun");
      if (a.cycle === "irregular") reasons.push("Siklus haid tidak teratur");
      if (hist.includes("pcos")) reasons.push("Riwayat PCOS");
      if (a.wifeAge === "30to35") reasons.push("Usia Bunda 30–35 tahun");
      return { cat: "kuning", label: "Kategori Kuning · Skrining Awal Berdua", title: "Paket Skrining Harmoni Berdua (Obgyn + Andrologi)", reco: "Paket Skrining Harmoni Berdua", body: "Waktunya memeriksa kondisi kesuburan Ayah & Bunda secara bersamaan dalam satu kali kunjungan — konsultasi dokter kandungan fertilitas, USG transvaginal, konsultasi andrologi, dan analisa sperma CASA.", doctor: "", service: "Paket Skrining Harmoni Berdua", reasons };
    }
    reasons.push("Masa mencoba masih dalam rentang wajar", "Usia & siklus haid mendukung program hamil alami");
    return { cat: "hijau", label: "Kategori Hijau · Edukasi & Optimasi Alami", title: "Panduan Promil Mandiri & Konsultasi Gaya Hidup", reco: "Panduan Promil Mandiri & Konsultasi Gaya Hidup", body: "Kondisi Anda berdua mendukung program hamil alami. Manfaatkan kalkulator masa subur, perbaiki pola makan & tidur, dan jadwalkan konsultasi gaya hidup bila belum berhasil dalam 6–12 bulan.", doctor: "evy", service: "Konsultasi Pertama Berdua", reasons };
  }

  function initQuiz() {
    const root = $("#quizRoot");
    if (!root) return;
    let step = 0;
    const ans = { history: [] };

    function stepDone(s) {
      const q = QUIZ[s];
      if (q.sub) return q.sub.every((x) => ans[x.key]);
      if (q.multi) return ans[q.key].length > 0;
      return !!ans[q.key];
    }
    const optBtn = (key, v, l, multi) => {
      const sel = multi ? ans[key].includes(v) : ans[key] === v;
      return `<button type="button" class="opt ${multi ? "multi" : ""} ${sel ? "selected" : ""}" data-k="${key}" data-v="${v}" data-multi="${multi ? 1 : ""}"><span class="radio"></span>${l}</button>`;
    };

    function render() {
      if (step >= QUIZ.length) return renderResult();
      const q = QUIZ[step];
      root.innerHTML = `
        <div class="quiz-progress"><span style="width:${(step / QUIZ.length) * 100 + 4}%"></span></div>
        <div class="quiz-step-label"><span>Langkah ${step + 1} dari ${QUIZ.length}</span><span>± 1 menit</span></div>
        <h3>${q.q}</h3><p class="q-hint">${q.hint}</p>
        ${q.sub ? q.sub.map((s) => `<div class="sub-q"><label>${s.label}</label><div class="opts">${s.opts.map(([v, l]) => optBtn(s.key, v, l)).join("")}</div></div>`).join("")
                : `<div class="opts">${q.opts.map(([v, l]) => optBtn(q.key, v, l, q.multi)).join("")}</div>`}
        <div class="quiz-nav">
          <button class="btn btn-ghost" id="qBack" ${step === 0 ? 'style="visibility:hidden"' : ""}>Kembali</button>
          <button class="btn btn-primary" id="qNext" ${stepDone(step) ? "" : "disabled style='opacity:.5;cursor:not-allowed'"}>${step === QUIZ.length - 1 ? "Lihat Rekomendasi" : "Lanjut"} ${ic("arrow")}</button>
        </div>`;
    }

    function renderResult() {
      const r = triage(ans);
      const doc = D.doctors.find((d) => d.id === r.doctor);
      const waMsg = `Halo Dinanti, saya sudah mengisi kuis skrining fertilitas di website dengan hasil rekomendasi ${r.reco}. Saya ingin konsultasi langkah awalnya.`;
      root.innerHTML = `<div class="quiz-result">
        <span class="cat cat-${r.cat}"><i></i>${r.label}</span>
        <h3>Rekomendasi Anda: ${r.title}</h3>
        <p class="muted">${r.body}</p>
        <div class="reco-box"><div class="list-label" style="margin-top:0">Mengapa rekomendasi ini?</div>
          <ul class="reasons">${r.reasons.map((x) => `<li>${ic("checkCircle")}<span>${x}</span></li>`).join("")}</ul>
          ${doc ? `<div style="font-size:14px">Dokter yang disarankan: <strong>${doc.name}</strong></div>` : `<div style="font-size:14px">Dokter: <strong>Tim Obgyn Fertilitas + Andrologi</strong></div>`}
        </div>
        <div class="tool-actions">
          <a class="btn btn-wa" href="${waLink(waMsg)}" target="_blank" rel="noopener">${waIcon} Konsultasikan Hasil Kuis Ini via WhatsApp</a>
          <button class="btn btn-primary" data-book data-doctor="${r.doctor}" data-service="${r.service}">${ic("calendar")} Buat Janji Dokter</button>
          <button class="btn btn-ghost" id="qRestart">Ulangi Kuis</button>
        </div>
        <p class="small-disclaimer">Hasil kuis bersifat skrining awal & edukatif, bukan diagnosis medis.</p>
      </div>`;
      $("#qRestart").addEventListener("click", () => { step = 0; Object.keys(ans).forEach((k) => delete ans[k]); ans.history = []; render(); });
    }

    root.addEventListener("click", (e) => {
      const o = e.target.closest(".opt");
      if (o) {
        const k = o.dataset.k, v = o.dataset.v;
        if (o.dataset.multi) {
          if (v === "none") ans[k] = ["none"];
          else { ans[k] = ans[k].filter((x) => x !== "none"); ans[k] = ans[k].includes(v) ? ans[k].filter((x) => x !== v) : [...ans[k], v]; }
          render();
        } else {
          ans[k] = v;
          const q = QUIZ[step];
          if (!q.sub) { render(); setTimeout(() => { step++; render(); }, 260); } else render();
        }
        return;
      }
      if (e.target.closest("#qNext") && stepDone(step)) { step++; render(); }
      if (e.target.closest("#qBack")) { step = Math.max(0, step - 1); render(); }
    });
    render();
  }

  /* ---------- Two to Tango donut ---------- */
  function initDonut() {
    const w = $("#donut");
    if (!w) return;
    const segs = [
      { k: "istri", v: 40, c: "#E07A5F", lbl: "Faktor dari Bunda", txt: "Gangguan ovulasi (PCOS), endometriosis, sumbatan tuba, cadangan sel telur" },
      { k: "suami", v: 40, c: "#6B8E7D", lbl: "Faktor dari Ayah", txt: "Jumlah, gerak & bentuk sperma, varikokel, fragmentasi DNA" },
      { k: "kombinasi", v: 20, c: "#C6A15B", lbl: "Kombinasi Keduanya", txt: "Faktor pada Ayah & Bunda yang saling memengaruhi" },
    ];
    const R = 80, C = 2 * Math.PI * R;
    let off = 0;
    const svg = `<svg viewBox="0 0 200 200">${segs.map((s) => {
      const len = (s.v / 100) * C, gap = 3;
      const el = `<circle class="donut-seg" data-k="${s.k}" cx="100" cy="100" r="${R}" fill="none" stroke="${s.c}" stroke-width="34" stroke-dasharray="${len - gap} ${C - len + gap}" stroke-dashoffset="${-off}"/>`;
      off += len; return el;
    }).join("")}</svg>`;
    w.innerHTML = svg + `<div class="donut-center"><div class="big" id="dBig">100%</div><div class="lbl" id="dLbl">Perjalanan berdua, berikhtiar bersama</div></div>`;
    $("#donutLegend").innerHTML = segs.map((s) => `<button data-k="${s.k}"><i style="background:${s.c}"></i>${s.v}% ${s.lbl.replace("Faktor dari ", "")}</button>`).join("");
    const set = (k) => {
      const s = segs.find((x) => x.k === k);
      w.classList.toggle("has-active", !!s);
      $$(".donut-seg", w).forEach((c) => c.classList.toggle("active", c.dataset.k === k));
      $$("#donutLegend button").forEach((b) => b.classList.toggle("active", b.dataset.k === k));
      $("#dBig").textContent = s ? s.v + "%" : "100%";
      $("#dLbl").textContent = s ? s.lbl : "Perjalanan berdua, berikhtiar bersama";
      $("#donutNote").textContent = s ? s.txt : "Pilih segmen untuk melihat rinciannya.";
    };
    w.addEventListener("mouseover", (e) => { const c = e.target.closest(".donut-seg"); if (c) set(c.dataset.k); });
    w.addEventListener("mouseleave", () => set(null));
    $("#donutLegend").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) set(b.classList.contains("active") ? null : b.dataset.k); });
  }

  /* ---------- Articles, stories, glossary ---------- */
  const articleCard = (a, i) => `<article class="card article-card hover reveal">
    <div class="ar-img">${SCENES[a.scene]("", 200 + i)}</div>
    <div class="ar-body"><div style="margin-bottom:10px"><span class="pill ${a.cat.includes("Pria") ? "sage" : a.cat.includes("Mitos") ? "gold" : ""}">${a.cat}</span></div>
      <h3><a href="#">${a.title}</a></h3>
      <div class="ar-meta"><span class="reviewer">${ic("shield")} Ditinjau: ${a.reviewer.split(",")[0]}</span><span>· ${a.date}</span><span>· ${a.read} menit baca</span></div>
    </div></article>`;

  function initArticles() {
    const home = $("#homeArticles");
    if (home) home.innerHTML = D.articles.slice(0, 3).map(articleCard).join("");
    const grid = $("#articleGrid");
    if (!grid) return;
    const cats = ["Semua", ...new Set(D.articles.map((a) => a.cat))];
    let cur = "Semua";
    const render = () => {
      $("#articleCats").innerHTML = cats.map((c) => `<button class="chip ${c === cur ? "active" : ""}" data-c="${c}">${c}</button>`).join("");
      grid.innerHTML = D.articles.filter((a) => cur === "Semua" || a.cat === cur).map(articleCard).join("");
      $$(".reveal", grid).forEach((e) => e.classList.add("in"));
    };
    $("#articleCats").addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) { cur = b.dataset.c; render(); } });
    render();
  }

  function initStories() {
    const grid = $("#storyGrid");
    if (!grid) return;
    let cur = "all";
    const render = () => {
      $$("#storyFilter .chip").forEach((c) => c.classList.toggle("active", c.dataset.c === cur));
      grid.innerHTML = D.stories.filter((s) => cur === "all" || s.case === cur).map((s, i) => `<article class="card story-card hover">
        <div class="st-img">${SCENES[s.scene]("", 300 + i)}<span class="pill gold" style="position:absolute;top:14px;left:14px">${s.badge}</span></div>
        <div class="st-body"><span class="quote-mark" style="font-size:80px;height:34px">“</span><blockquote>${s.quote}</blockquote>
          <div class="story-meta"><div><strong>${s.who}</strong>Didampingi ${s.doctor.split(",")[0]}</div><span style="color:var(--gold);display:flex">${ic("star")}${ic("star")}${ic("star")}${ic("star")}${ic("star")}</span></div>
        </div></article>`).join("");
      $$(".story-card .st-meta svg, .story-meta svg", grid).forEach((s) => { s.style.width = "14px"; s.style.height = "14px"; });
    };
    $("#storyFilter").addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) { cur = b.dataset.c; render(); } });
    render();
  }

  function initGlossary() {
    const grid = $("#glossGrid");
    if (!grid) return;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const have = new Set(D.glossary.map((g) => g[0][0].toUpperCase()));
    let letter = null, q = "";
    const render = () => {
      $("#azBar").innerHTML = `<button class="${!letter ? "active" : ""}" data-l="" style="width:auto;padding:0 14px">Semua</button>` + letters.map((l) => `<button data-l="${l}" ${have.has(l) ? "" : "disabled"} class="${letter === l ? "active" : ""}">${l}</button>`).join("");
      const list = D.glossary.filter((g) => (!letter || g[0][0].toUpperCase() === letter) && (!q || (g[0] + g[1] + g[2]).toLowerCase().includes(q)));
      grid.innerHTML = list.length ? list.map((g) => `<div class="gloss"><div class="term"><strong>${g[0]}</strong>${g[1] ? `<em>${g[1]}</em>` : ""}</div><p>${g[2]}</p></div>`).join("") : `<div class="empty-state" style="grid-column:1/-1">Istilah tidak ditemukan.</div>`;
    };
    $("#azBar").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b && !b.disabled) { letter = b.dataset.l || null; render(); } });
    $("#glossSearch").addEventListener("input", (e) => { q = e.target.value.toLowerCase().trim(); letter = null; render(); });
    render();
  }

  /* ---------- Fill photo slots: <div data-scene="couple" data-label="..."> ---------- */
  function fillScenes() {
    $$("[data-scene]").forEach((el, i) => {
      const fn = SCENES[el.dataset.scene];
      if (fn) el.insertAdjacentHTML("afterbegin", fn(el.dataset.label || undefined, +(el.dataset.lock || 500 + i)));
    });
    $$("[data-doc]").forEach((el) => { const d = D.doctors.find((x) => x.id === el.dataset.doc); if (d) el.insertAdjacentHTML("afterbegin", SCENES.doctor(d.id, D.doctors.indexOf(d) + 1, +el.dataset.w || 600, +el.dataset.h || 760)); });
    $$("[data-ic]").forEach((el) => { el.innerHTML = ic(el.dataset.ic) + el.innerHTML; });
    $$("[data-waicon]").forEach((el) => { el.insertAdjacentHTML("afterbegin", waIcon); });
  }

  /* ---------- Contact form ---------- */
  function initContactForm() {
    const f = $("#contactForm");
    if (!f) return;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const phoneField = f.phone.closest(".field");
      const bad = !validPhone(f.phone.value);
      phoneField.classList.toggle("has-error", bad);
      if (bad || !f.consent.checked) { if (!f.consent.checked) f.consent.closest(".field").classList.add("has-error"); return; }
      f.innerHTML = `<div class="success"><div class="ok">${ic("check")}</div><h3 class="serif" style="font-weight:600">Pesan Terkirim</h3><p class="muted">Perawat konselor Careline akan menghubungi Anda melalui WhatsApp. (Mockup)</p></div>`;
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    fillScenes();
    bindGlobal();
    bindBooking();
    renderFeaturedDoctors();
    initDirectory();
    initQuickCalc();
    initFullCalc();
    initQuiz();
    initDonut();
    initArticles();
    initStories();
    initGlossary();
    initContactForm();
    bindAccordion();
    bindTabs();
    bindReveal();
  });
})();
