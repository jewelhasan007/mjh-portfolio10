/**
 * All copy below is sourced verbatim from the live site at
 * https://jewelhasan.vercel.app/ (fetched 2026-07-11) and its /contact route.
 * Nothing here is invented. Sections the original site does not contain
 * (Portfolio, Services, Experience, Education, Testimonials, Process,
 * Achievements, Certifications, FAQ) are intentionally omitted rather
 * than filled with placeholder content.
 */

export const site = {
  name: "Jewel Hasan",
  initials: "JH",
  title: "Jewel Hasan - Developer & Designer",
  description: "Web Developer & UI-UX Designer",
  url: "https://jewelhasan.vercel.app",
  email: "jewelhasan.eee@outlook.com",
  linkedin: "https://www.linkedin.com/in/jewel-hasan-4508b21b1/",
  copyright: "Copyright © 2025 - Designed & Built by Jewel Hasan",
  lastUpdated: "Wednesday, 04/06/2025",
};

export const roles = [
  "Web Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Digital Marketer",
  "Shopify Expert",
  "Amazon Product Research Expert(FBA)"
];

export const hero = {
  eyebrow: "Available for new project",
  headline: ["Innovative Solutions", "For Digital Excellence"],
  cta: "Book a Call",
};

export const about = {
  heading: "Who am I?",
  items: [
    { title: "Web Developer" },
    { title: "A passionate Digital Marketer" },
    { title: "Shopify Expert" },
    { title: "Amazon FBA Expert" },
    { title: "Grow Your Business" },
  ],
};

export const technologies = {
  heading: "Technologies I Use",
  items: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "JS" },
    { name: "React" },
    { name: "NextJS" },
    { name: "MongoDB" },
    { name: "Postgres" },
  ],
};

export const contact = {
  heading: "Let's Contact",
  subheading: "Get in Touch",
  blurb:
    "Always up for new opportunities, collabs, or idea exchanges. Reach out through any of these channels and I'll get back to you ASAP!",
  channels: [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "LinkedIn", value: "@LinkedIn", href: site.linkedin },
  ],
};
