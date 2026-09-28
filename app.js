const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "915 740-3500",
  "hero.kicker": "El Paso, Texas · Auto repair you can trust",
  "hero.title": "Brakes & alignment<br>done right.",
  "hero.sub": "5.0-star rated on Google (63 reviews): brake service, wheel alignments, tires and general auto repair — honest work, explained clearly, done right the first time.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays 8:30 – 5:00",
  "stats.makesNum": "All",
  "stats.makes": "makes & models serviced",
  "stats.diagNum": "5.0",
  "stats.diag": "Google rating · 63 reviews",
  "stats.quoteNum": "Free",
  "stats.quote": "brake inspection with appointment",
  "services.kicker": "What we do",
  "services.title": "Brakes, alignment & full auto care",
  "services.s1t": "Brake service & repair",
  "services.s1d": "Pads, rotors, calipers — your brakes done right and guaranteed.",
  "services.s2t": "Wheel alignments",
  "services.s2d": "Laser-precise alignment for even tire wear and straight tracking.",
  "services.s3t": "General auto repair",
  "services.s3d": "Full-service repair for all makes — from diagnostics to major work.",
  "services.s4t": "Tires",
  "services.s4d": "Sales, installation, rotation and balancing — flats fixed too.",
  "services.s5t": "A/C service",
  "services.s5d": "Recharge, leak detection and repair — stay cool in the El Paso heat.",
  "services.s6t": "Oil changes & maintenance",
  "services.s6d": "Oil changes, fluids and scheduled maintenance to keep you rolling.",
  "walkin.w1t": "Free brake inspection",
  "walkin.w1d": "With every appointment",
  "walkin.w2t": "All makes",
  "walkin.w2d": "Cars, SUVs, light trucks",
  "walkin.w3t": "Clear pricing",
  "walkin.w3d": "Approved by you before we start",
  "makes.kicker": "All makes and models",
  "makes.title": "Your car is welcome here",
  "makes.sub": "Cars, SUVs and light trucks — we take care of everything, whatever the brand.",
  "why.kicker": "Why choose us",
  "why.title": "El Paso drivers trust Rudy's",
  "why.intro": "Simple things done well: an accurate diagnosis, a price explained up front and work we stand behind. You leave knowing exactly what was done — and why.",
  "why.l1t": "Honest diagnosis",
  "why.l1d": "We explain what is needed — and what isn't.",
  "why.l2t": "Upfront pricing",
  "why.l2d": "The price is confirmed before we touch your car.",
  "why.l3t": "Work guaranteed",
  "why.l3d": "We stand behind every repair we do.",
  "why.l4t": "Local shop",
  "why.l4d": "Right on Texas Ave in El Paso — easy to reach, fast service.",
  "products.kicker": "Sold at the shop",
  "products.title": "Quality parts we trust",
  "products.sub": "The same quality parts we install in our repairs — available right at the shop.",
  "products.p1t": "Brake pads & rotors",
  "products.p1d": "Quality brake components for every make — installed or over the counter.",
  "products.p2t": "Tires",
  "products.p2d": "All sizes, mounting and balancing on site — for safe grip year-round.",
  "products.p3t": "Car batteries",
  "products.p3d": "Reliable batteries tested and installed while you wait.",
  "products.note": "Stop by or call to check a product's availability.",
  "products.cta": "Call to ask",
  "gallery.kicker": "The shop in action",
  "gallery.title": "A clean shop, careful work",
  "gallery.c1": "Precision wheel alignment on a modern rack",
  "gallery.c2": "A clean, professional shop you can trust",
  "gallery.c3": "Brake components serviced with care",
  "reviews.kicker": "Word on the street",
  "reviews.title": "Trusted by El Paso drivers",
  "reviews.more": "<strong>5.0 rating · 63 Google reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Do I need an appointment?",
  "faq.a1": "Appointments are recommended — and every appointment includes a free brake inspection. Walk-ins are welcome for quick checks.",
  "faq.q2": "Do you service all makes and models?",
  "faq.a2": "Yes — cars, SUVs and light trucks of all makes, with quality parts.",
  "faq.q3": "How much does a brake job cost?",
  "faq.a3": "Start with a free brake inspection, then you get a clear, fixed price before any work begins.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 8:30 AM to 5:00 PM. Closed weekends.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:30 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Customer favorite",
  "promo.title": "Free brake inspection",
  "promo.text": "Brake pads, rotors and a full brake system check — and a free inspection with every appointment. Stop by or call to book.",
  "promo.cta": "Book your inspection",
  "footer.tag": "Auto repair · Brakes & alignment · El Paso, Texas"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
