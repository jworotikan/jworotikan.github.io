/* =========================================================
   Dinanti V2 — Lightweight FX (no libraries)
   Only transform/opacity animations, triggered once by
   IntersectionObserver. No scroll listeners, no rAF loops.
   ========================================================= */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* split heading into words (few elements = cheap) */
  function splitWords(el) {
    if (!el || el.dataset.split) return;
    el.dataset.split = "1";
    let i = 0;
    const walk = (node) => Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(" "));
          const w = document.createElement("span"); w.className = "w";
          const c = document.createElement("span"); c.className = "c"; c.textContent = part;
          c.style.setProperty("--i", i++);
          w.appendChild(c); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && !n.classList.contains("ico")) walk(n);
    });
    walk(el);
  }

  function countUp(el) {
    const to = +el.dataset.to || 0, fmt = (v) => Math.round(v).toLocaleString("id-ID");
    if (REDUCED) return (el.textContent = fmt(to));
    const t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* one observer for everything: adds .is-in once, then stops watching */
  function observe() {
    // clipped items have no visible area while hidden, so watch their container instead
    const clipHosts = [...new Set($$(".fx-clip").map((c) => c.parentElement))];
    clipHosts.forEach((h) => { h.classList.add("fx-clip-host"); $$(":scope > .fx-clip", h).forEach((c, i) => (c.style.transitionDelay = i * 110 + "ms")); });
    // Two to Tango rings: play only when the rings themselves are well inside the viewport
    const rings = $(".tango-rings");
    if (rings) {
      const ro = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        rings.classList.add("is-in");
        $$(".fx-count", rings).forEach((c, i) => setTimeout(() => countUp(c), 200 + i * 400));
        ro.disconnect();
      }, { threshold: 0.55 });
      ro.observe(rings);
    }
    const targets = $$(".fx-up, .fx-pop, .fx-left, .fx-scale, .fx-clip-host, .fx-stagger, .v2-path, .fx-count:not(.v2-hero .fx-count):not(.v2-tango .fx-count)");
    if (!("IntersectionObserver" in window) || REDUCED) {
      targets.forEach((el) => el.classList.add("is-in"));
      $$(".fx-clip, .tango-rings").forEach((el) => el.classList.add("is-in"));
      $$(".fx-count").forEach(countUp);
      return;
    }
    // stagger siblings inside the same grid
    $$(".fx-pop").forEach((el) => {
      const sib = Array.from(el.parentElement.children).filter((c) => c.classList.contains("fx-pop"));
      el.style.transitionDelay = sib.indexOf(el) % 8 * 70 + "ms";
    });
    $$(".fx-stagger").forEach((g) => Array.from(g.children).forEach((c, i) => (c.style.transitionDelay = i * 90 + "ms")));
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("is-in");
      if (el.classList.contains("fx-clip-host")) $$(":scope > .fx-clip", el).forEach((c) => c.classList.add("is-in"));
      if (el.classList.contains("fx-count")) countUp(el);
      io.unobserve(el);
    }), { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((el) => io.observe(el));
  }

  /* duplicate marquee contents for a seamless CSS loop */
  const loopify = (t) => { if (t && !t.dataset.looped) { t.dataset.looped = "1"; t.innerHTML += t.innerHTML; } };

  /* pause infinite CSS animations while off-screen (saves battery/CPU) */
  function pauseOffscreen() {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("paused", !e.isIntersecting)));
    $$(".fx-marquee, .story-rail, .fx-wave, .v2-hero, .cta-hearts, .tool-grid, .fx-badge").forEach((el) => io.observe(el));
  }

  /* hover-only tilt for doctor cards (no work unless the mouse is on a card) */
  function tilt() {
    if (!FINE || REDUCED) return;
    $$("#featuredDoctors, #doctorGrid, #androDoc").forEach((g) => {
      g.classList.add("fx-tilt-group");
      let raf = 0;
      g.addEventListener("mousemove", (e) => {
        const card = e.target.closest(".doc-card2"); if (!card || raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          card.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 8}deg) rotateX(${(0.5 - py) * 6}deg) translateY(-4px)`;
        });
      });
      g.addEventListener("mouseout", (e) => {
        const card = e.target.closest(".doc-card2");
        if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
      });
    });
  }

  function ctaHearts() {
    const box = $(".cta-hearts"); if (!box || REDUCED) return;
    for (let i = 0; i < 8; i++) {
      const h = document.createElement("i"); h.className = "fa-solid fa-heart";
      h.style.cssText = `left:${8 + i * 11}%;font-size:${12 + (i % 3) * 7}px;animation-duration:${7 + (i % 4)}s;animation-delay:${-i * 1.3}s`;
      box.appendChild(h);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // main.js has already rendered header/footer/cards (its handler is registered first)
    document.documentElement.classList.add("fx-ready");
    $$(".fx-split, .page-hero h1").forEach(splitWords);
    $$(".fx-split-scroll").forEach(splitWords);
    $$(".fx-marquee-track, .story-track").forEach(loopify);
    ctaHearts();
    tilt();
    observe();
    pauseOffscreen();
    // hero intro: start on next frame so the initial state paints first
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.body.classList.add("fx-start");
      $$(".v2-hero .fx-count").forEach((c) => setTimeout(() => countUp(c), 900));
    }));
  });
})();
