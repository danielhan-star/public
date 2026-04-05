import { content } from "@/lib/content.ko";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인사이트 | Turning Point MEA",
  description: content.blog.subtitle,
};

export default function BlogPageKo() {
  const c = content;

  return (
    <>
      <Header
        siteName={c.site.name}
        navLinks={c.nav}
        languageSwitch={c.languageSwitch}
        languageHref="/blog"
        homeHref="/ko"
      />

      <main className="pt-20">
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {c.blog.sectionTitle}
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
              {c.blog.subtitle}
            </p>
            <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {c.blog.posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
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
