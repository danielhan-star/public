import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turning Point MEA | Connecting Korea & the Middle East",
  description:
    "A leading corporate innovation and business consulting firm bridging Korea and the Middle East. Market entry, business acceleration, and strategic partnerships.",
  openGraph: {
    title: "Turning Point MEA",
    description:
      "Connecting Korean Innovation with Middle Eastern Opportunities",
    siteName: "Turning Point MEA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
