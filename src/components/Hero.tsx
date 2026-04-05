import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta1: string;
  cta1Href: string;
  cta2: string;
  cta2Href: string;
}

export default function Hero({
  headline,
  subheadline,
  cta1,
  cta1Href,
  cta2,
  cta2Href,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          {headline}
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={cta1Href}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors text-sm tracking-wide uppercase w-full sm:w-auto"
          >
            {cta1}
          </Link>
          <Link
            href={cta2Href}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors text-sm tracking-wide uppercase w-full sm:w-auto"
          >
            {cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
