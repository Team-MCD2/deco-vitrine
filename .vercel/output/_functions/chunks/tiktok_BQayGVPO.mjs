import { c as createComponent } from './astro-component_D2AR_LaI.mjs';
import 'piccolore';
import { r as renderComponent, s as renderTemplate, o as maybeRenderHead } from './entrypoint_VoPcLABy.mjs';
import { $ as $$Layout } from './Layout_1We7cIU9.mjs';

const $$Tiktok = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section id="tiktok" class="tiktok-section section-padding" style="padding-top: 4rem;"> <div class="container text-center"> <h2 class="section-title hidden-scroll" style="color: #FFF;">Au Cœur de Nos Projets</h2> <p class="hidden-scroll delay-100" style="color: var(--text-light); max-width: 600px; margin: 0 auto 3rem; font-size: 1.1rem;">Découvrez nos dernières réalisations, nos arrivages de meubles et nos astuces d'aménagement en vidéo.</p> <div class="tiktok-grid"> <div class="tiktok-card hidden-scroll delay-100"> <video src="/videos/tiktok_new_00001.mp4" autoplay muted loop playsinline class="video-player" poster="/images/hero-showroom.png"></video> <div class="tiktok-overlay" style="pointer-events: none;"> <i class="fab fa-tiktok"></i> <span>Aménagement Appartement</span> </div> </div> <div class="tiktok-card hidden-scroll delay-200"> <video src="/videos/tiktok_new_00002.mp4" autoplay muted loop playsinline class="video-player" poster="/images/staging-bedroom.png"></video> <div class="tiktok-overlay" style="pointer-events: none;"> <i class="fab fa-tiktok"></i> <span>Nouveautés Lits</span> </div> </div> <div class="tiktok-card hidden-scroll delay-300"> <video src="/videos/tiktok_new_00003.mp4" autoplay muted loop playsinline class="video-player" poster="/images/staging-dining.png"></video> <div class="tiktok-overlay" style="pointer-events: none;"> <i class="fab fa-tiktok"></i> <span>Idée Déco</span> </div> </div> <div class="tiktok-card hidden-scroll delay-100"> <video src="/videos/tiktok_new_00004.mp4" autoplay muted loop playsinline class="video-player" poster="/images/hero-showroom.png"></video> <div class="tiktok-overlay" style="pointer-events: none;"> <i class="fab fa-tiktok"></i> <span>Table Design</span> </div> </div> <!-- Duplicate for endless scroll effect --> <div class="tiktok-card hidden-scroll delay-200"> <video src="/videos/tiktok_00001.mp4" autoplay muted loop playsinline class="video-player" poster="/images/hero-showroom.png"></video> <div class="tiktok-overlay" style="pointer-events: none;"> <i class="fab fa-tiktok"></i> <span>Notre Showroom</span> </div> </div> <div class="tiktok-card hidden-scroll delay-300"> <video src="/videos/tiktok_00002.mp4" autoplay muted loop playsinline class="video-player" poster="/images/staging-bedroom.png"></video> <div class="tiktok-overlay" style="pointer-events: none;"> <i class="fab fa-tiktok"></i> <span>Pack Investisseur</span> </div> </div> </div> <a href="https://www.tiktok.com/@decoshoptoulouse" target="_blank" class="cta-button hidden-scroll delay-300" style="margin-top: 3rem; display: inline-block;">
Abonnez-vous à notre TikTok
</a> </div> </section> ` })}`;
}, "D:/PROBOOK 445 G7/Desktop/STAGE-MICRODIDAC/decoshop-vitrine/astro-app/src/pages/tiktok.astro", void 0);

const $$file = "D:/PROBOOK 445 G7/Desktop/STAGE-MICRODIDAC/decoshop-vitrine/astro-app/src/pages/tiktok.astro";
const $$url = "/tiktok";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tiktok,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
