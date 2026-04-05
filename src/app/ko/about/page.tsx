import { content } from "@/lib/content.ko";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개 | Turning Point MEA",
  description: content.about.mission,
};

export default function AboutPageKo() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/about"
        homeHref="/ko"
      />

      <main className="pt-20">
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {c.about.sectionTitle}
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">미션</h2>
                <p className="text-text-secondary leading-relaxed">{c.about.mission}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">비전</h2>
                <p className="text-text-secondary leading-relaxed">{c.about.vision}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="우리의 이야기" />
            <div className="max-w-3xl mx-auto space-y-6">
              {c.about.story.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="핵심 가치" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.about.values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-navy">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {c.about.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-5xl font-bold text-gold">{stat.value}</p>
                  <p className="text-white/70 text-sm mt-2">{stat.label}</p>
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
