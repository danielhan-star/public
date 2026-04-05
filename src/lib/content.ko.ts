import { SiteContent } from "./types";

export const content: SiteContent = {
  site: {
    name: "Turning Point MEA",
    tagline: "한국의 혁신과 중동의 기회를 연결합니다",
    description:
      "한국과 중동을 잇는 기업 혁신 및 비즈니스 컨설팅 전문 기업입니다.",
    email: "hello@tpmea.com",
    phone: "+971 4 000 0000",
    address: [
      "Meydan Hotel, Grandstand, 6층",
      "Meydan Road, Nad Al Sheba",
      "두바이, 아랍에미리트",
    ],
  },
  nav: [
    { label: "회사소개", href: "/ko/about" },
    { label: "서비스", href: "/ko/services" },
    { label: "파트너", href: "/ko/partners" },
    { label: "팀", href: "/ko/team" },
    { label: "블로그", href: "/ko/blog" },
    { label: "문의하기", href: "/ko/contact" },
  ],
  hero: {
    headline: "한국의 혁신과 중동의 기회를 연결합니다",
    subheadline:
      "기업이 국경을 넘어 성장할 수 있도록 지원합니다. 한국의 첨단 기술과 중동의 역동적인 성장 시장을 잇는 가교 역할을 합니다.",
    cta1: "시작하기",
    cta2: "서비스 보기",
  },
  about: {
    sectionTitle: "회사소개",
    mission:
      "한국의 혁신과 중동의 기회를 잇는 확실한 가교가 되어, 양쪽 기업들의 원활한 시장 진출과 확장 가능한 성장을 지원합니다.",
    vision:
      "지리적 경계가 더 이상 비즈니스 잠재력을 제한하지 않는 세상 — 한국과 중동의 최고의 아이디어가 만나 지속적인 가치를 창출하는 세상을 만듭니다.",
    story: [
      "Turning Point MEA는 세계에서 가장 역동적인 두 경제 지역을 연결하겠다는 비전으로 설립되었습니다. 한국 비즈니스 문화와 중동 시장 환경 모두에 깊은 뿌리를 두고, 국경 간 비즈니스 촉진에서의 핵심적인 격차를 발견했습니다.",
      "오늘날 우리는 선도 기업, 야심찬 스타트업, 미래지향적 기업가들과 함께 국제 확장의 복잡성을 해결합니다. 우리 팀은 현지 전문성과 글로벌 시각을 결합하여, 모든 고객에게 성과를 만들어내는 맞춤형 전략을 제공합니다.",
      "글로벌 상거래의 교차로인 두바이에 본사를 둔 우리는 MEA 지역 전반에 걸쳐 파트너십을 촉진하고, 성장을 가속화하며, 새로운 기회를 열어갈 수 있는 독보적인 위치에 있습니다.",
    ],
    values: [
      {
        title: "전략적 탁월함",
        description:
          "데이터 기반 인사이트와 검증된 프레임워크로 시장의 복잡성을 경쟁 우위로 전환합니다.",
      },
      {
        title: "문화적 지능",
        description:
          "한국과 중동 비즈니스 문화 모두에 대한 깊은 이해로 다른 이들이 메울 수 없는 격차를 해소합니다.",
      },
      {
        title: "파트너십 우선",
        description:
          "고객의 성공이 곧 우리의 성공입니다. 모든 프로젝트는 신뢰, 투명성, 장기적 약속 위에 구축됩니다.",
      },
      {
        title: "혁신 주도",
        description:
          "시장 트렌드를 앞서가기 위해 지속적으로 방법론을 발전시키고 최첨단 솔루션을 제공합니다.",
      },
    ],
    stats: [
      { value: "50+", label: "서비스 고객" },
      { value: "3", label: "년의 경험" },
      { value: "12+", label: "진출 국가" },
      { value: "95%", label: "고객 유지율" },
    ],
  },
  services: {
    sectionTitle: "서비스",
    subtitle: "국경을 넘는 비즈니스 성공을 위한 종합 솔루션",
    items: [
      {
        title: "시장 진출",
        description: "중동 및 아프리카 전략적 시장 진출",
        details:
          "시장 조사, 규제 가이드, 법인 설립, 시장 진출 전략 등 엔드투엔드 시장 진출 지원을 제공합니다. 현지 전문성으로 새로운 시장으로의 원활한 전환을 보장합니다.",
        icon: "globe",
      },
      {
        title: "비즈니스 액셀러레이션",
        description: "MEA 지역에서 비즈니스를 확장하세요",
        details:
          "스타트업과 중소기업이 새로운 고객을 발굴하고, 제품-시장 적합성을 검증하며, 중동에서 지속 가능한 성장을 달성할 수 있도록 맞춤형 액셀러레이션 프로그램을 운영합니다.",
        icon: "rocket",
      },
      {
        title: "비즈니스 개발 & 파트너십",
        description: "전략적 현지 파트너십 구축",
        details:
          "적합한 파트너, 유통업체, 이해관계자를 연결합니다. 양 지역에 걸친 광범위한 네트워크로 가치를 창출하는 의미 있는 비즈니스 관계를 촉진합니다.",
        icon: "handshake",
      },
      {
        title: "법인 설립 & 회계",
        description: "비즈니스 등록 및 컴플라이언스 간소화",
        details:
          "법인 설립부터 지속적인 회계 및 세무 컴플라이언스까지, 행정적 복잡성을 처리하여 고객이 지역 내 비즈니스 성장에 집중할 수 있도록 합니다.",
        icon: "building",
      },
    ],
  },
  partners: {
    sectionTitle: "파트너",
    subtitle: "한국과 중동의 선도 기관들이 신뢰합니다",
    description:
      "정부 기관, 액셀러레이터, 벤처캐피탈, 산업 리더들과 협력하여 국경 간 비즈니스 성공을 위한 종합 생태계를 구축합니다.",
    types: [
      {
        title: "정부 및 무역 기관",
        description:
          "무역과 투자를 촉진하는 한국 및 UAE 정부 기관과의 전략적 파트너십.",
      },
      {
        title: "액셀러레이터 & 인큐베이터",
        description:
          "새로운 시장에 진출하는 신흥 기업을 지원하기 위한 선도 스타트업 생태계와의 협력.",
      },
      {
        title: "산업 파트너",
        description:
          "시너지를 창출하고 상호 비즈니스 기회를 열기 위한 기업들과의 협업.",
      },
    ],
  },
  team: {
    sectionTitle: "팀 소개",
    subtitle: "두 세계를 잇는 전문가들",
    members: [
      {
        name: "이상욱",
        role: "대표 파트너",
        bio: "한국-중동 비즈니스 관계 및 기업 개발 분야에서 풍부한 경험을 가진 비즈니스 전략가.",
      },
      {
        name: "한다니엘",
        role: "파트너",
        bio: "MEA 스타트업 생태계와 투자 환경에 대한 깊은 지식을 가진 국경 간 비즈니스 개발 전문가.",
      },
      {
        name: "김사라",
        role: "운영 이사",
        bio: "품질과 효율성에 중점을 두고 고객 프로그램의 원활한 실행을 보장하는 운영 전문가.",
      },
      {
        name: "Ahmed Al-Rashid",
        role: "파트너십 총괄",
        bio: "두바이 기반 파트너십 전문가. GCC 및 광역 중동 지역에 걸친 광범위한 네트워크 보유.",
      },
    ],
  },
  blog: {
    sectionTitle: "인사이트",
    subtitle: "국경 간 비즈니스와 MEA 시장에 대한 최신 인사이트",
    posts: [
      {
        slug: "korean-startups-dubai-2026",
        title: "한국 스타트업이 두바이를 중동 진출 거점으로 선택하는 이유",
        date: "2026-03-15",
        summary:
          "두바이의 전략적 위치, 기업 친화적 규제, 성장하는 테크 생태계가 MEA 지역을 겨냥하는 한국 기업에게 이상적인 발판이 되는 이유.",
        category: "시장 인사이트",
      },
      {
        slug: "mea-market-trends",
        title: "2026년 MEA 비즈니스 환경을 형성하는 5가지 핵심 트렌드",
        date: "2026-02-28",
        summary:
          "AI 도입부터 지속 가능성 의무화까지, 중동 및 아프리카 전역의 비즈니스 기회를 재편하는 트렌드를 살펴봅니다.",
        category: "산업 트렌드",
      },
      {
        slug: "cross-border-partnership-guide",
        title: "국경 간 파트너십 구축을 위한 필수 가이드",
        date: "2026-01-20",
        summary:
          "문화적 차이, 법적 프레임워크, 비즈니스 에티켓 — 한국과 중동 간 확장을 추진하는 기업을 위한 실용 가이드.",
        category: "비즈니스 가이드",
      },
    ],
  },
  contact: {
    sectionTitle: "문의하기",
    subtitle: "중동에서의 기회를 탐색할 준비가 되셨나요? 이야기해 보세요.",
    form: {
      name: "이름",
      email: "이메일",
      company: "회사명",
      message: "어떻게 도와드릴까요?",
      submit: "메시지 보내기",
    },
  },
  footer: {
    copyright: "© 2026 Turning Point MEA. All rights reserved.",
    tagline: "한국과 중동을 잇는 가교",
  },
  languageSwitch: "English",
};
