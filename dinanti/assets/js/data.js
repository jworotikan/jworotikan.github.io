/* =========================================================
   Data mockup Klinik Dinanti
   - Jadwal dokter diambil dari doc/jadwal_dokter.jpeg
   - Glosarium & FAQ dari doc/06_CONTENT_COPYWRITING_AND_PROMIL_DICTIONARY.md
   ========================================================= */

window.DINANTI = {
  clinic: {
    name: "Klinik Fertilitas Dinanti",
    waNumber: "6281100000000",            // placeholder — ganti dengan nomor Careline asli
    waDisplay: "+62 811-XXXX-DINANTI",
    phone: "(021) XXX-XXXX",
    email: "careline@dinanti.id",
    address: "Jl. [Alamat Klinik] No. XX, [Kota], Indonesia",
    hours: "Senin – Sabtu 08.00 – 20.00 · Minggu 09.00 – 15.00",
  },

  days: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
  daysShort: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],

  // Poli / spesialisasi. `fertility: true` = ditonjolkan sesuai fokus website.
  polis: [
    { id: "obsgyn",    name: "Poli Obsgyn",     label: "Kandungan & Fertilitas", fertility: true },
    { id: "andrologi", name: "Poli Andrologi",  label: "Andrologi Pria",          fertility: true },
    { id: "akupuntur", name: "Poli Akupuntur",  label: "Akupuntur",               fertility: true },
    { id: "laktasi",   name: "Poli Laktasi",    label: "Laktasi" },
    { id: "anak",      name: "Poli Anak",       label: "Anak" },
    { id: "umum",      name: "Poli Umum",       label: "Umum" },
    { id: "gigi",      name: "Poli Gigi",       label: "Gigi" },
  ],

  // Jadwal sesuai gambar jadwal_dokter.jpeg
  doctors: [
    {
      id: "andriana", poli: "obsgyn", featured: true,
      name: "dr. Andriana Kumala Dewi, Sp.OG, Subsp.FER",
      short: "dr. Andriana",
      title: "Dokter Spesialis Kandungan Konsultan Fertilitas",
      focus: "PCOS, endometriosis, program bayi tabung (IVF) & inseminasi",
      tone: "terracotta",
      schedule: [
        ["Senin", "09:00", "12:00"], ["Selasa", "13:00", "16:00"], ["Rabu", "16:00", "20:00"],
        ["Kamis", "09:00", "12:00"], ["Jumat", "09:00", "12:00"], ["Sabtu", "09:00", "12:00"],
      ],
    },
    {
      id: "christian", poli: "andrologi", featured: true,
      name: "dr. Christian Melka Parmanto, Sp.And",
      short: "dr. Christian",
      title: "Dokter Spesialis Andrologi (Kesehatan Reproduksi Pria)",
      focus: "Analisa sperma, varikokel, azoospermia & kesehatan reproduksi pria",
      tone: "sage",
      schedule: [["Kamis", "11:00", "14:00"]],
    },
    {
      id: "evy", poli: "obsgyn", featured: true,
      name: "dr. Evy Asali, Sp.OG",
      short: "dr. Evy",
      title: "Dokter Spesialis Kebidanan & Kandungan",
      focus: "Program hamil alami terpandu & kehamilan",
      tone: "blush",
      schedule: [
        ["Selasa", "16:00", "20:00"], ["Rabu", "13:00", "16:00"], ["Kamis", "13:00", "16:00"],
        ["Jumat", "13:00", "16:00"], ["Sabtu", "13:00", "16:00"],
      ],
    },
    {
      id: "pravitasari", poli: "obsgyn",
      name: "dr. Pravitasari, Sp.OG",
      short: "dr. Pravitasari",
      title: "Dokter Spesialis Kebidanan & Kandungan",
      focus: "Program hamil alami & pemantauan kehamilan",
      tone: "gold",
      schedule: [["Senin", "16:00", "19:00"], ["Kamis", "16:00", "19:00"], ["Jumat", "16:00", "19:00"]],
    },
    {
      id: "febyana", poli: "akupuntur", featured: true,
      name: "dr. Febyana Anggraeni Tjahjar, Sp.Ak",
      short: "dr. Febyana",
      title: "Dokter Spesialis Akupunktur Medik",
      focus: "Terapi pendukung program hamil & manajemen stres",
      tone: "sage",
      schedule: [["Rabu", "13:00", "15:00"], ["Jumat", "13:00", "15:00"]],
    },
    {
      id: "felicia", poli: "laktasi",
      name: "dr. Felicia Kusnaidi",
      short: "dr. Felicia",
      title: "Dokter Konselor Laktasi",
      focus: "Persiapan & pendampingan menyusui",
      tone: "blush",
      schedule: [["Senin", "08:00", "11:00"], ["Selasa", "08:00", "11:00"], ["Jumat", "08:00", "11:00"]],
    },
    {
      id: "nidya", poli: "laktasi",
      name: "dr. Nidya Edwinna Putri",
      short: "dr. Nidya",
      title: "Dokter Konselor Laktasi",
      focus: "Persiapan & pendampingan menyusui",
      tone: "terracotta",
      schedule: [["Senin", "16:00", "18:00"], ["Selasa", "16:00", "18:00"], ["Jumat", "16:00", "18:00"]],
    },
    {
      id: "kartika", poli: "anak",
      name: "dr. Kartika Eda Clearesta, Sp.A",
      short: "dr. Kartika",
      title: "Dokter Spesialis Anak",
      focus: "Tumbuh kembang & imunisasi anak",
      tone: "gold",
      schedule: [["Selasa", "12:00", "14:00"], ["Kamis", "12:00", "14:00"], ["Jumat", "10:00", "12:00"]],
    },
    {
      id: "permatami", poli: "anak",
      name: "dr. Permatami Herwansyah, Sp.A",
      short: "dr. Permatami",
      title: "Dokter Spesialis Anak",
      focus: "Tumbuh kembang & imunisasi anak",
      tone: "sage",
      schedule: [
        ["Senin", "17:00", "19:00"], ["Selasa", "17:00", "19:00"], ["Rabu", "17:00", "19:00"],
        ["Kamis", "17:00", "19:00"], ["Jumat", "17:00", "19:00"], ["Sabtu", "15:00", "19:00"],
      ],
    },
    {
      id: "andina", poli: "anak",
      name: "dr. Andina Chrisnawati Rahardjo, Sp.A",
      short: "dr. Andina",
      title: "Dokter Spesialis Anak",
      focus: "Tumbuh kembang & imunisasi anak",
      tone: "blush",
      schedule: [["Senin", "13:00", "15:00"], ["Rabu", "08:00", "11:00"], ["Jumat", "15:00", "16:00"]],
    },
    {
      id: "denny", poli: "umum",
      name: "dr. Denny",
      short: "dr. Denny",
      title: "Dokter Umum",
      focus: "Pemeriksaan kesehatan umum & pra-promil",
      tone: "terracotta",
      schedule: [["Selasa", "16:00", "20:00"], ["Sabtu", "14:00", "20:00"]],
    },
    {
      id: "kelvin", poli: "gigi",
      name: "drg. Kelvin Suryaman",
      short: "drg. Kelvin",
      title: "Dokter Gigi",
      focus: "Kesehatan gigi & mulut (termasuk persiapan kehamilan)",
      tone: "gold",
      schedule: [["Senin", "10:00", "15:00"], ["Rabu", "10:00", "15:00"], ["Sabtu", "10:00", "15:00"]],
    },
    {
      id: "priska", poli: "gigi",
      name: "drg. Priska Angelia, Sp.KGA",
      short: "drg. Priska",
      title: "Dokter Gigi Spesialis Kedokteran Gigi Anak",
      focus: "Kesehatan gigi anak",
      tone: "blush",
      schedule: [["Rabu", "16:00", "20:00"], ["Kamis", "10:00", "15:00"], ["Jumat", "16:00", "20:00"], ["Sabtu", "16:00", "20:00"]],
    },
    {
      id: "arieski", poli: "gigi",
      name: "drg. Arieski Putra",
      short: "drg. Arieski",
      title: "Dokter Gigi",
      focus: "Kesehatan gigi & mulut",
      tone: "sage",
      schedule: [["Senin", "16:00", "20:00"], ["Selasa", "10:00", "15:00"], ["Jumat", "10:00", "15:00"]],
    },
  ],

  services: [
    "Konsultasi Pertama Berdua",
    "Skrining Sperma / Andrologi",
    "Paket Skrining Harmoni Berdua",
    "Program Inseminasi (IUI)",
    "Program Bayi Tabung (IVF)",
    "Konsultasi Lanjutan",
  ],

  glossary: [
    ["AMH", "Anti-Müllerian Hormone", "Tes darah untuk mengukur cadangan sel telur (ovarian reserve) yang tersisa di ovarium wanita. Sangat berguna untuk memprediksi respons ovarium terhadap stimulasi program hamil."],
    ["Analisa Sperma CASA", "Computer Assisted Sperm Analysis", "Metode evaluasi sperma berbantuan komputer dengan akurasi tinggi untuk mengukur konsentrasi (jumlah), motilitas (kecepatan gerak), dan morfologi (bentuk normal) sel sperma."],
    ["Azoospermia", "", "Kondisi di mana tidak ditemukan sel sperma sama sekali pada cairan ejakulasi. Dapat ditangani melalui tindakan medis khusus seperti PESA/TESA/Micro-TESE untuk mengambil sperma langsung dari testis."],
    ["Blastokista", "Blastocyst", "Embrio yang telah berkembang selama 5–6 hari di inkubator laboratorium dan memiliki ratusan sel. Peluang penempelan (implantasi) ke dinding rahim lebih tinggi."],
    ["DFI", "DNA Fragmentation Index", "Pemeriksaan untuk mengukur tingkat kerusakan rantai DNA pada sperma. DFI yang tinggi dapat menjadi penyebab keguguran berulang atau kegagalan pembuahan."],
    ["FET", "Frozen Embryo Transfer", "Proses penanaman kembali embrio yang sebelumnya dibekukan (vitrifikasi) ke dalam rahim Bunda pada siklus berikutnya saat kondisi dinding rahim paling optimal."],
    ["ICSI", "Intracytoplasmic Sperm Injection", "Teknik pembuahan modern dalam program IVF: satu sel sperma terbaik disuntikkan secara mikro langsung ke dalam satu sel telur menggunakan mikroskop berkekuatan tinggi."],
    ["Laparoskopi", "Keyhole surgery", "Tindakan bedah invasif minimal dengan kamera kecil melalui sayatan kecil di perut untuk membersihkan kista endometriosis, miom, atau memeriksa saluran tuba yang tersumbat."],
    ["OPU", "Ovum Pick-Up", "Prosedur medis singkat (15–20 menit) dengan pembiusan ringan untuk mengambil sel telur matang dari ovarium Bunda menggunakan jarum panduan USG halus."],
    ["PCOS", "Polycystic Ovary Syndrome", "Gangguan keseimbangan hormon yang menyebabkan sel telur berukuran kecil-kecil dan sulit matang/melepaskan diri secara teratur, sering ditandai siklus haid panjang atau tidak teratur."],
    ["PGT-A", "Preimplantation Genetic Testing for Aneuploidy", "Skrining genetik pada embrio sebelum ditanamkan ke rahim, untuk memastikan jumlah kromosom normal guna mencegah kelainan genetik bawaan dan meningkatkan angka keberhasilan kehamilan."],
    ["RTAC", "Reproductive Technology Accreditation Committee", "Standar akreditasi internasional bergengsi untuk klinik dan laboratorium fertilitas & bayi tabung, menjamin kualitas udara ruang lab, sterilitas, dan prosedur keselamatan embrio."],
    ["Varikokel", "", "Pelebaran pembuluh darah vena di dalam kantong buah zakar (skrotum) yang dapat meningkatkan suhu testis dan menurunkan kualitas sperma. Dapat ditangani oleh dokter spesialis andrologi."],
  ],

  articles: [
    { cat: "Promil Alami", title: "PCOS Bukan Akhir dari Impian Hamil: Ini Langkah Nyata Mengatasinya", read: 5, reviewer: "dr. Andriana Kumala Dewi, Sp.OG, Subsp.FER", date: "28 Okt 2026", scene: "couple" },
    { cat: "Sperma & Pria", title: "Kenapa Suami Wajib Periksa Sperma Sebelum Memulai Promil?", read: 4, reviewer: "dr. Christian Melka Parmanto, Sp.And", date: "21 Okt 2026", scene: "lab" },
    { cat: "Seputar Bayi Tabung", title: "Mengenal Tahapan Bayi Tabung (IVF) dari Stimulasi Hingga Embrio Transfer", read: 7, reviewer: "dr. Andriana Kumala Dewi, Sp.OG, Subsp.FER", date: "14 Okt 2026", scene: "embryo" },
    { cat: "Nutrisi & Diet Promil", title: "Menu Seimbang untuk Pasutri Promil: Asupan Penting bagi Sel Telur & Sperma", read: 4, reviewer: "dr. Evy Asali, Sp.OG", date: "7 Okt 2026", scene: "lounge" },
    { cat: "Mitos vs Fakta", title: "Benarkah Mengangkat Kaki Setelah Berhubungan Bikin Cepat Hamil?", read: 3, reviewer: "dr. Pravitasari, Sp.OG", date: "30 Sep 2026", scene: "hands" },
    { cat: "Sperma & Pria", title: "Varikokel: Gejala, Dampak pada Kesuburan, dan Pilihan Penanganannya", read: 5, reviewer: "dr. Christian Melka Parmanto, Sp.And", date: "23 Sep 2026", scene: "lab" },
    { cat: "Promil Alami", title: "Akupunktur Medik sebagai Pendamping Program Hamil: Apa Kata Penelitian?", read: 4, reviewer: "dr. Febyana Anggraeni Tjahjar, Sp.Ak", date: "16 Sep 2026", scene: "lounge" },
    { cat: "Seputar Bayi Tabung", title: "Blastokista vs Embrio Hari ke-3: Mana yang Lebih Baik untuk Ditransfer?", read: 6, reviewer: "dr. Andriana Kumala Dewi, Sp.OG, Subsp.FER", date: "9 Sep 2026", scene: "embryo" },
    { cat: "Mitos vs Fakta", title: "Mitos: Masalah Kesuburan Selalu dari Pihak Istri", read: 3, reviewer: "dr. Christian Melka Parmanto, Sp.And", date: "2 Sep 2026", scene: "couple" },
  ],

  stories: [
    { quote: "Setelah 4 tahun menanti dan sempat putus asa karena PCOS, dokter di Dinanti sangat telaten mengatur nutrisi dan protokol yang pas. Hari ini anak pertama kami genap 6 bulan.", who: "Bunda Ratna & Ayah Bagus", badge: "4 Tahun Penantian · Pejuang PCOS", case: "pcos", doctor: "dr. Andriana Kumala Dewi, Sp.OG, Subsp.FER", scene: "couple" },
    { quote: "Awalnya suami saya enggan periksa. Ruang pemeriksaannya ternyata sangat privat dan dokternya menjelaskan tanpa menghakimi. Ternyata ada varikokel yang bisa ditangani.", who: "Bunda Sari & Ayah Yoga", badge: "3 Tahun Penantian · Faktor Sperma", case: "pria", doctor: "dr. Christian Melka Parmanto, Sp.And", scene: "hands" },
    { quote: "Usia saya 38 tahun dan sudah pernah gagal di tempat lain. Di Dinanti kami mendapat penjelasan yang jujur soal peluang, dan didampingi psikolog. Kami tidak merasa sendirian.", who: "Bunda Cindy & Ayah Hendra", badge: "7 Tahun Penantian · Usia 35+", case: "usia", doctor: "dr. Andriana Kumala Dewi, Sp.OG, Subsp.FER", scene: "embryo" },
    { quote: "Kami baru setahun menikah dan cuma ingin memastikan semuanya baik. Paket Harmoni Berdua membuat kami paham kondisi masing-masing dalam satu kali kunjungan.", who: "Bunda Maya & Ayah Rian", badge: "1,5 Tahun Penantian · Siklus Tidak Teratur", case: "pcos", doctor: "dr. Evy Asali, Sp.OG", scene: "lounge" },
    { quote: "Hasil analisa sperma suami awalnya membuat kami cemas. Dengan program yang tepat dan sabar, akhirnya dua garis itu datang juga.", who: "Bunda Lina & Ayah Fajar", badge: "2 Tahun Penantian · Faktor Sperma", case: "pria", doctor: "dr. Christian Melka Parmanto, Sp.And", scene: "lab" },
    { quote: "Kalender dari website dan perawat konselor yang responsif di WhatsApp benar-benar membantu kami di tengah jadwal kerja yang padat.", who: "Bunda Dewi & Ayah Arif", badge: "1 Tahun Penantian · Promil Alami", case: "usia", doctor: "dr. Pravitasari, Sp.OG", scene: "couple" },
  ],
};



/* ---------------------------------------------------------
   Foto & gambar DUMMY untuk mockup (Unsplash CDN).
   Ganti dengan fotografi asli klinik sesuai panduan dok. 05 §5.
   --------------------------------------------------------- */
(function () {
  const u = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=70&auto=format&fit=crop`;
  const POOL = {
    couple: ["1516589178581-6cd7833ae3b2", "1474552226712-ac0f0961a954", "1600880292203-757bb62b4baf"],
    hands:  ["1584515933487-779824d29309"],
    baby:   ["1544126592-807ade215a0b", "1555252333-9f8e92e65df9", "1491013516836-7db643ee125a"],
    lounge: ["1618220179428-22790b461013", "1600210492486-724fe5c67fb0", "1586023492125-27b2c045efd7"],
    lab:    ["1582719471384-894fbb16e074", "1581093450021-4a7360e9a6b5", "1579154204601-01588f351e67"],
    embryo: ["1576086213369-97a306d36557", "1544126592-807ade215a0b"],
    clinic: ["1631217868264-e5b90bb7e133", "1666214280557-f1b5022eb634", "1631248055158-edec7a3c072b", "1629909613654-28e377c37b09"],
  };
  const DOC_F = ["1559839734-2b71ea197ec2", "1594824476967-48c8b964273f", "1651008376811-b90baee60c1f", "1614608682850-e0d6ed316d47", "1607746882042-944635dfe10e", "1591604021695-0c69b7c05981", "1580489944761-15a19d654956"];
  const DOC_M = ["1612349317150-e413f6a5b16d", "1612531386530-97286d97c2d2", "1622253692010-333f2da6031d", "1537368910025-700350fe46c7"];
  const MALE = ["christian", "denny", "kelvin", "arieski"];

  const img = (src, label) => `<div class="ph">
    <img src="${src}" alt="${label || "Foto dummy"}" loading="lazy" onerror="this.style.display='none'">
    ${label ? `<span class="ph-label">${label}</span>` : ""}
  </div>`;
  const pick = (arr, n) => arr[Math.abs(n | 0) % arr.length];

  const scene = (key, def) => (label = def, lock = 0) => img(u(pick(POOL[key], lock), 900, 700), label);

  window.SCENES = {
    couple: scene("couple", "Foto dummy: Pasutri"),
    hands:  scene("hands", "Foto dummy: Tangan pasutri"),
    baby:   scene("baby", "Foto dummy: Bayi"),
    lounge: scene("lounge", "Foto dummy: Ruang tunggu privat"),
    lab:    scene("lab", "Foto dummy: Laboratorium"),
    embryo: scene("embryo", "Foto dummy: Embrio"),
    clinic: scene("clinic", "Foto dummy: Ruang konsultasi"),
    doctor: (docId, idx = 0, w = 600, h = 720) => {
      const male = MALE.includes(docId);
      const list = male ? DOC_M : DOC_F;
      const i = male ? MALE.indexOf(docId) : idx;
      return img(u(pick(list, i), w, h), "Foto dummy");
    },
  };
})();
