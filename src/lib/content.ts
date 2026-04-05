import { SiteContent } from "./types";

export const content: SiteContent = {
  site: {
    name: "Turning Point MEA",
    tagline: "Connecting Korean Innovation with Middle Eastern Opportunities",
    description:
      "A leading corporate innovation and business consulting firm bridging Korea and the Middle East.",
    email: "hello@tpmea.com",
    phone: "+971 4 000 0000",
    address: [
      "Meydan Hotel, Grandstand, 6th Floor",
      "Meydan Road, Nad Al Sheba",
      "Dubai, U.A.E.",
    ],
  },
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partners", href: "/partners" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    headline: "Connecting Korean Innovation with Middle Eastern Opportunities",
    subheadline:
      "We help businesses create, accelerate, and scale across borders — bridging Korea's cutting-edge technology with the Middle East's dynamic growth markets.",
    cta1: "Get Started",
    cta2: "Our Services",
  },
  about: {
    sectionTitle: "About Us",
    mission:
      "To be the definitive bridge between Korean innovation and Middle Eastern opportunity, enabling seamless market entry and scalable growth for businesses on both sides.",
    vision:
      "A world where geographical boundaries no longer limit business potential — where the best ideas from Korea and the Middle East converge to create lasting value.",
    story: [
      "Turning Point MEA was founded with a singular vision: to connect two of the world's most dynamic economic regions. With deep roots in both Korean business culture and the Middle Eastern market landscape, we identified a critical gap in cross-border business facilitation.",
      "Today, we work with leading corporations, ambitious startups, and forward-thinking entrepreneurs to navigate the complexities of international expansion. Our team combines local expertise with global perspective, ensuring every client receives tailored strategies that deliver results.",
      "Headquartered in Dubai — the crossroads of global commerce — we are uniquely positioned to facilitate partnerships, accelerate growth, and unlock new opportunities across the MEA region.",
    ],
    values: [
      {
        title: "Strategic Excellence",
        description:
          "We deliver data-driven insights and proven frameworks that transform market complexity into competitive advantage.",
      },
      {
        title: "Cultural Intelligence",
        description:
          "Deep understanding of both Korean and Middle Eastern business cultures enables us to bridge gaps others cannot.",
      },
      {
        title: "Partnership-First",
        description:
          "We measure our success by our clients' success. Every engagement is built on trust, transparency, and long-term commitment.",
      },
      {
        title: "Innovation-Driven",
        description:
          "We continuously evolve our methodologies to stay ahead of market trends and deliver cutting-edge solutions.",
      },
    ],
    stats: [
      { value: "50+", label: "Clients Served" },
      { value: "3", label: "Years of Excellence" },
      { value: "12+", label: "Countries Covered" },
      { value: "95%", label: "Client Retention" },
    ],
  },
  services: {
    sectionTitle: "Our Services",
    subtitle: "Comprehensive solutions for cross-border business success",
    items: [
      {
        title: "Market Entry",
        description: "Strategic market entry into the Middle East and Africa",
        details:
          "We provide end-to-end market entry support including market research, regulatory guidance, entity setup, and go-to-market strategy. Our local expertise ensures a smooth transition into new territories.",
        icon: "globe",
      },
      {
        title: "Business Acceleration",
        description: "Scale your business in the MEA region",
        details:
          "Our acceleration programs are customized to support startups and SMEs in discovering new customers, validating product-market fit, and achieving sustainable growth in the Middle East.",
        icon: "rocket",
      },
      {
        title: "Business Development & Partnership",
        description: "Build strategic local partnerships",
        details:
          "We connect you with the right partners, distributors, and stakeholders. Our extensive network across both regions enables us to facilitate meaningful business relationships that drive value.",
        icon: "handshake",
      },
      {
        title: "Company Set-up & Accounting",
        description: "Streamlined business registration and compliance",
        details:
          "From company formation to ongoing accounting and tax compliance, we handle the administrative complexities so you can focus on growing your business in the region.",
        icon: "building",
      },
    ],
  },
  partners: {
    sectionTitle: "Our Partners",
    subtitle: "Trusted by leading organizations across Korea and the Middle East",
    description:
      "We collaborate with government bodies, accelerators, venture capital firms, and industry leaders to create a comprehensive ecosystem for cross-border business success.",
    types: [
      {
        title: "Government & Trade Bodies",
        description:
          "Strategic partnerships with Korean and UAE government agencies facilitating trade and investment.",
      },
      {
        title: "Accelerators & Incubators",
        description:
          "Collaboration with leading startup ecosystems to support emerging businesses entering new markets.",
      },
      {
        title: "Industry Partners",
        description:
          "Working with established corporations to create synergies and unlock mutual business opportunities.",
      },
    ],
  },
  team: {
    sectionTitle: "Our Team",
    subtitle: "Expert professionals bridging two worlds",
    members: [
      {
        name: "Sangwook Lee",
        role: "Managing Partner",
        bio: "Seasoned business strategist with extensive experience in Korean-Middle Eastern business relations and corporate development.",
      },
      {
        name: "Daniel Han",
        role: "Partner",
        bio: "Expert in cross-border business development with deep knowledge of the MEA startup ecosystem and investment landscape.",
      },
      {
        name: "Sarah Kim",
        role: "Director of Operations",
        bio: "Operations specialist ensuring seamless execution of client programs with a focus on quality and efficiency.",
      },
      {
        name: "Ahmed Al-Rashid",
        role: "Head of Partnerships",
        bio: "Dubai-based partnership expert with an extensive network across the GCC and broader Middle East region.",
      },
    ],
  },
  blog: {
    sectionTitle: "Insights",
    subtitle: "Latest thoughts on cross-border business and the MEA market",
    posts: [
      {
        slug: "korean-startups-dubai-2026",
        title: "Why Korean Startups Are Choosing Dubai as Their Gateway to the Middle East",
        date: "2026-03-15",
        summary:
          "Dubai's strategic location, business-friendly regulations, and growing tech ecosystem make it the ideal launchpad for Korean companies eyeing the MEA region.",
        category: "Market Insights",
      },
      {
        slug: "mea-market-trends",
        title: "5 Key Trends Shaping the MEA Business Landscape in 2026",
        date: "2026-02-28",
        summary:
          "From AI adoption to sustainability mandates, discover the trends that are reshaping business opportunities across the Middle East and Africa.",
        category: "Industry Trends",
      },
      {
        slug: "cross-border-partnership-guide",
        title: "The Essential Guide to Building Cross-Border Partnerships",
        date: "2026-01-20",
        summary:
          "Navigating cultural differences, legal frameworks, and business etiquette — a practical guide for companies expanding between Korea and the Middle East.",
        category: "Business Guide",
      },
    ],
  },
  contact: {
    sectionTitle: "Get in Touch",
    subtitle: "Ready to explore opportunities in the Middle East? Let's talk.",
    form: {
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      message: "How can we help you?",
      submit: "Send Message",
    },
  },
  footer: {
    copyright: "© 2026 Turning Point MEA. All rights reserved.",
    tagline: "Bridging Korea and the Middle East",
  },
  languageSwitch: "한국어",
};
