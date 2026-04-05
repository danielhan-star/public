import { content } from "@/lib/content.ko";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "파트너 | Turning Point MEA",
  description: content.partners.subtitle,
};

export default function PartnersPageKo() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/partners"
        homeHref="/ko"
      />

      <main className="pt-20">
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {c.partners.sectionTitle}
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
              {c.partners.subtitle}
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16">
              {c.partners.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {c.partners.types.map((type) => (
                <div
                  key={type.title}
                  className="bg-white border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-gold/30 transition-all"
                >
                  <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="w-6 h-6 bg-gold/20 rounded-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {type.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="신뢰받는 파트너" subtitle="성장하는 파트너 네트워크" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 bg-white border border-border rounded-xl flex items-center justify-center"
                >
                  <span className="text-text-secondary/30 text-sm font-medium">
                    파트너 {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer
        siteName={c.site.name}
        navLinks={c.nav}
        copyright={c.footer.copyright}
        tagline={c.footer.tagline}
        email={c.site.email}
        homeHref="/ko"
      />
    </>
  );
}
