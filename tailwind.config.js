/** Tailwind is scoped to elements inside #approach (prefix tw-, no preflight)
 *  so it never overrides the site's hand-written CSS. Rebuild: npm run build:css */
module.exports = {
  prefix: "tw-",
  important: "#approach",
  content: ["./index.html"],
  corePlugins: { preflight: false },
  theme: { extend: {} },
};
