import { content } from "@/lib/content.ko";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 | Turning Point MEA",
  description: content.services.subtitle,
};

export default function ServicesPageKo() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/services"
        homeHref="/ko"
      />

      <main className="pt-20">
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {c.services.sectionTitle}
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
              {c.services.subtitle}
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-8">
              {c.services.items.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              맞춤형 솔루션이 필요하신가요?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              모든 비즈니스는 고유합니다. 귀사의 국경 간 목표에 맞는 맞춤형
              전략을 함께 논의해 보겠습니다.
            </p>
            <a
              href="/ko/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors text-sm tracking-wide uppercase"
            >
              문의하기
            </a>
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
