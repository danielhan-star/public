import { content } from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/ko"
        homeHref="/"
      />

      <main>
        <Hero
          headline={c.hero.headline}
          subheadline={c.hero.subheadline}
          cta1={c.hero.cta1}
          cta1Href="/contact"
          cta2={c.hero.cta2}
          cta2Href="/services"
        />

        {/* Services Highlight */}
        <section className="py-24 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={c.services.sectionTitle}
              subtitle={c.services.subtitle}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {c.services.items.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* About Summary with Stats */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                  {c.about.sectionTitle}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {c.about.mission}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-gold hover:text-gold-dark font-semibold text-sm uppercase tracking-wide transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {c.about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 bg-bg-alt rounded-2xl"
                  >
                    <p className="text-4xl font-bold text-navy">{stat.value}</p>
                    <p className="text-text-secondary text-sm mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-navy">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to expand into the Middle East?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s build your next chapter together. Our team is ready to
              help you navigate cross-border opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors text-sm tracking-wide uppercase"
            >
              {c.hero.cta1}
            </Link>
          </div>
        </section>
      </main>

      <Footer
        siteName={c.site.name}
        navLinks={c.nav}
        copyright={c.footer.copyright}
        tagline={c.footer.tagline}
        email={c.site.email}
        homeHref="/"
      />
    </>
  );
}
