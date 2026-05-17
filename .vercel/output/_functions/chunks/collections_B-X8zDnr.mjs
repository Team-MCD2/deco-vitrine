import { c as createComponent } from './astro-component_D2AR_LaI.mjs';
import 'piccolore';
import { r as renderComponent, s as renderTemplate, o as maybeRenderHead } from './entrypoint_VoPcLABy.mjs';
import { $ as $$Layout } from './Layout_1We7cIU9.mjs';

const $$Collections = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="collections" class="portfolio-bg section-padding" style="padding-top: 4rem;"> <div class="container"> <h2 class="section-title hidden-scroll" style="color: #FFF;">Nos Réalisations & Collections</h2> <div class="portfolio-grid"> <!-- Portfolio Item 1 --> <div class="portfolio-item hidden-scroll delay-100"> <img src="/images/hero-showroom.png" alt="Salon Design"> <div class="portfolio-overlay"> <h3>Salon Contemporain</h3> <p>Aménagement complet avec nos collections de canapés et tables basses.</p> </div> </div> <!-- Portfolio Item 2 --> <div class="portfolio-item hidden-scroll delay-200"> <img src="/images/staging-bedroom.png" alt="Chambre LMNP"> <div class="portfolio-overlay"> <h3>Espace Nuit</h3> <p>Lits coffres et literie haut de gamme pour des nuits réparatrices.</p> </div> </div> <!-- Portfolio Item 3 --> <div class="portfolio-item hidden-scroll delay-300"> <img src="/images/staging-dining.png" alt="Salle à Manger"> <div class="portfolio-overlay"> <h3>Salle à Manger</h3> <p>Tables en céramique et chaises en velours pour recevoir avec élégance.</p> </div> </div> <!-- Portfolio Item 4 --> <div class="portfolio-item hidden-scroll delay-100"> <img src="/images/staging-living-2.png" alt="Salon Prestige"> <div class="portfolio-overlay"> <h3>Salon Prestige</h3> <p>Mobilier d'exception mariant matières nobles et design minimaliste.</p> </div> </div> <!-- Portfolio Item 5 --> <div class="portfolio-item hidden-scroll delay-200"> <img src="/images/staging-kitchen.png" alt="Cuisine Contemporaine"> <div class="portfolio-overlay"> <h3>Cuisine Contemporaine</h3> <p>Lignes épurées et finitions haut de gamme pour un espace fonctionnel et convivial.</p> </div> </div> <!-- Portfolio Item 6 --> <div class="portfolio-item hidden-scroll delay-300"> <img src="/images/staging-dressing.png" alt="Dressing Sur-Mesure"> <div class="portfolio-overlay"> <h3>Dressing Sur-Mesure</h3> <p>Optimisation intelligente de l'espace avec des dressings élégants et fonctionnels.</p> </div> </div> <!-- Portfolio Item 7 --> <div class="portfolio-item hidden-scroll delay-100"> <img src="/images/staging-office.png" alt="Bureau d'Exception"> <div class="portfolio-overlay"> <h3>Bureau d'Exception</h3> <p>Espace de travail inspirant alliant confort ergonomique et esthétique soignée.</p> </div> </div> </div> <div class="text-center" style="margin-top: 4rem;"> <h3 style="color: var(--text-dark); margin-bottom: 2rem;" class="hidden-scroll">Besoin de plus d'inspiration ?</h3> <a href="/tiktok" class="cta-button-outline hidden-scroll delay-100">Découvrir nos vidéos immersives</a> </div> </div> </section> ` })}`;
}, "D:/PROBOOK 445 G7/Desktop/STAGE-MICRODIDAC/decoshop-vitrine/astro-app/src/pages/collections.astro", void 0);

const $$file = "D:/PROBOOK 445 G7/Desktop/STAGE-MICRODIDAC/decoshop-vitrine/astro-app/src/pages/collections.astro";
const $$url = "/collections";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Collections,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
