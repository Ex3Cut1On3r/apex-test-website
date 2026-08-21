export type Locale = "en" | "ar";

export type AP_IconName =
  | "brain" | "layers" | "nodes" | "database" | "code" | "flow"
  | "briefcase" | "compass" | "grid" | "chart" | "shield"
  | "arrow-up-right" | "arrow-right" | "menu" | "graduation" | "leaf"
  | "check" | "search" | "calendar" | "message" | "lock" | "globe"
  | "spark" | "mail" | "box";

export type NavItem = {
  label: string;
  href: string;
};

export type Principle = {
  icon: AP_IconName;
  title: string;
  body: string;
};

export type HeroContent = {
  eyebrow: string;
  lines: [string, string, string];
  body: string;
  primaryCta: string;
  secondaryCta: string;
  principles: Principle[];
};

export type AboutContent = {
  eyebrow: string;
  statement: string;
  body: string;
};

export type SolutionKey = "ai" | "legacy" | "integration" | "data" | "software" | "workflow";

export type SolutionItem = {
  key: SolutionKey;
  number: string;
  icon: AP_IconName;
  title: string;
  body: string;
};

export type SolutionsContent = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  items: SolutionItem[];
};

export type IndustryKey = "education" | "service" | "environment";

export type IndustryItem = {
  key: IndustryKey;
  number: string;
  icon: AP_IconName;
  title: string;
  body: string;
  bullets: string[];
};

export type IndustriesContent = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  openDoorTitle: string;
  openDoorBody: string;
  openDoorCta: string;
  items: IndustryItem[];
};

export type CaseFact = {
  icon: AP_IconName;
  title: string;
  body: string;
};

export type CaseStudyContent = {
  eyebrow: string;
  title: string;
  intro: string;
  client: string;
  clientLogo: string;
  screenshot: string;
  headline: string;
  body: string;
  capabilities: string[];
  facts: CaseFact[];
  modalTitle: string;
  modalBody: string;
  projectScope: string;
  businessNeed: string;
  delivered: string;
  whyItMatters: string;
  cta: string;
};

export type MethodStep = {
  number: string;
  icon: AP_IconName;
  title: string;
  body: string;
};

export type MethodContent = {
  eyebrow: string;
  title: string;
  body: string;
  principles: Principle[];
  steps: MethodStep[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaBody: string;
  cta: string;
};

export type FooterContent = {
  legal: string;
};

export type ProductsPageContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  secondaryBody: string;
  primaryCta: string;
  secondaryCta: string;
  suiteEyebrow: string;
  suiteTitle: string;
  suiteBody: string;
  emptyTitle: string;
  emptyBody: string;
  ecosystemEyebrow: string;
  ecosystemTitle: string;
  ecosystemBody: string;
};

export type BlogsPageContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  subscribeTitle: string;
  subscribeBody: string;
  featuredLabel: string;
  emptyTitle: string;
  emptyBody: string;
  categories: string[];
};


export type SocialContent = {
  whatsapp: string;
  linkedin: string;
  instagram: string;
  whatsappLabel: string;
  chatbotLabel: string;
  chatbotTitle: string;
  chatbotSubtitle: string;
};

export type CareerValue = {
  title: string;
  body: string;
};

export type CareerRole = {
  title: string;
  type: string;
  location: string;
  summary: string;
};

export type CareersPageContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  primaryCta: string;
  valuesEyebrow: string;
  valuesTitle: string;
  values: CareerValue[];
  rolesEyebrow: string;
  rolesTitle: string;
  rolesBody: string;
  emptyTitle: string;
  emptyBody: string;
  roles: CareerRole[];
};

export type SiteMeta = {
  title: string;
  description: string;
};

export type SiteContent = {
  locale: Locale;
  direction: "ltr" | "rtl";
  meta: SiteMeta;
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  solutions: SolutionsContent;
  industries: IndustriesContent;
  caseStudy: CaseStudyContent;
  method: MethodContent;
  footer: FooterContent;
  products: ProductsPageContent;
  blogs: BlogsPageContent;
  careers: CareersPageContent;
  social: SocialContent;
};

export type ContactRequest = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type ContactResponse =
  | { ok: true; message: string }
  | { ok: false; error: string };

export type SubscribeRequest = {
  email: string;
};

export type SubscribeResponse =
  | { ok: true; message: string }
  | { ok: false; error: string };

export type CmsEnvelope<T> = {
  data: T;
  locale: Locale;
  source: "cms" | "fallback-json";
  updatedAt?: string;
};

export type AdminSessionPayload = {
  email: string;
  exp: number;
};

export type AdminLoginRequest = {
  email: string;
  password: string;
};

export type AdminLoginResponse =
  | { ok: true }
  | { ok: false; error: string };

export type AdminLogoutResponse = { ok: true };

export type AdminContentGetResponse =
  | { ok: true; locale: Locale; content: SiteContent }
  | { ok: false; error: string };

export type AdminContentUpdateRequest = {
  locale: Locale;
  content: SiteContent;
};

export type AdminSaveResult = {
  mode: "local-json" | "github";
  updatedAt: string;
  commitSha?: string;
};

export type AdminContentUpdateResponse =
  | ({ ok: true } & AdminSaveResult)
  | { ok: false; error: string };

export type AdminMediaUploadResult = {
  path: string;
  mode: "local-json" | "github";
};

export type AdminMediaResponse =
  | ({ ok: true } & AdminMediaUploadResult)
  | { ok: false; error: string };
