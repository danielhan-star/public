import { content } from "@/lib/content.ko";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 | Turning Point MEA",
  description: "Turning Point MEA에 연락하여 국경 간 비즈니스 기회를 탐색하세요.",
};

export default function ContactPageKo() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/contact"
        homeHref="/ko"
      />

      <main className="pt-20">
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {c.contact.sectionTitle}
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
              {c.contact.subtitle}
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <ContactForm labels={c.contact.form} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">사무실</h3>
                  <div className="text-text-secondary text-sm leading-relaxed">
                    {c.site.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">이메일</h3>
                  <a
                    href={`mailto:${c.site.email}`}
                    className="text-gold hover:text-gold-dark transition-colors text-sm"
                  >
                    {c.site.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy mb-3">전화</h3>
                  <p className="text-text-secondary text-sm">{c.site.phone}</p>
                </div>

                <div className="bg-bg-alt rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    업무 시간
                  </h3>
                  <p className="text-text-secondary text-sm">
                    일요일 — 목요일: 오전 9:00 — 오후 6:00 (GST)
                  </p>
                  <p className="text-text-secondary text-sm mt-1">
                    금요일 — 토요일: 휴무
                  </p>
                </div>
              </div>
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
