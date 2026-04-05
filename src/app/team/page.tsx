import { content } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Turning Point MEA",
  description: content.team.subtitle,
};

export default function TeamPage() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/ko/team"
        homeHref="/"
      />

      <main className="pt-20">
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {c.team.sectionTitle}
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
              {c.team.subtitle}
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {c.team.members.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-24 bg-bg-alt">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Join Our Team</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              We&apos;re always looking for talented individuals who are
              passionate about cross-border business and innovation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors text-sm tracking-wide uppercase"
            >
              Get in Touch
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
        homeHref="/"
      />
    </>
  );
}
