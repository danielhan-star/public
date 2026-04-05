import Link from "next/link";
import { NavLink } from "@/lib/types";

interface FooterProps {
  siteName: string;
  navLinks: NavLink[];
  copyright: string;
  tagline: string;
  email: string;
  homeHref: string;
}

export default function Footer({
  siteName,
  navLinks,
  copyright,
  tagline,
  email,
  homeHref,
}: FooterProps) {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href={homeHref} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-lg">TP</span>
              </div>
              <span className="font-bold text-xl">{siteName}</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">{tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h4>
            <a
              href={`mailto:${email}`}
              className="text-gold hover:text-gold-light transition-colors text-sm"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
