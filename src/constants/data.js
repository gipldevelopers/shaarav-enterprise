export const media = {
  hero: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80',
  boardroom: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  financial: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  planning: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  family: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
  realEstate: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  founder: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80',
  workspace: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  contact: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
}

export const navItems = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Services', route: 'services' },
  { label: 'Founder', route: 'founder' },
  { label: 'Blog', route: 'blog' },
  { label: 'Contact', route: 'contact' },
]

export const serviceCards = [
  {
    id: 'financial-investment',
    title: 'Financial & Investment Consulting',
    description: 'Tailored consulting for individuals and MSMEs across investment strategy, financial direction, and decision clarity.',
    image: media.financial,
  },
  {
    id: 'family-office-estate',
    title: 'Family Office Management & Estate Planning',
    description: 'Holistic support for families seeking continuity, governance, estate structure, and wealth protection across generations.',
    image: media.family,
  },
  {
    id: 'real-estate-investment',
    title: 'Real Estate Investment',
    description: 'Reliable property guidance for homebuyers and investors looking for smart, grounded, and opportunity-led decisions.',
    image: media.realEstate,
  },
  {
    id: 'small-enterprise-solutions',
    title: 'Small Enterprise Solutions',
    description: 'Structured help for growing businesses through operational clarity, financial discipline, and practical strategic support.',
    image: media.workspace,
  },
]

export const blogCards = [
  {
    id: 'micro-enterprise-financial-discipline',
    title: 'How Micro Enterprises Can Build Financial Discipline',
    category: 'Insights',
    summary: 'A simple framework who want better control without overcomplicating daily operations.',
  },
  {
    id: 'family-wealth-planning-practical',
    title: 'Family Wealth Planning That Actually Feels Practical',
    category: 'Family Office',
    summary: 'Thoughtful ways to approach continuity, structure, and intergenerational planning with more clarity.',
  },
  {
    id: 'real-estate-investment-intent',
    title: 'Choosing Real Estate With Investment Intent',
    category: 'Property',
    summary: 'What to evaluate when property is both an emotional decision and a long-term financial commitment.',
  },
]

export const contactCards = [
  {
    title: 'Instagram',
    text: 'Drop a DM',
    href: 'https://www.instagram.com/shaarav_ent24/',
    icon: 'instagram',
    colorClass: 'social-card--instagram',
  },
  {
    title: 'LinkedIn',
    text: 'Connect With Us',
    href: 'https://www.linkedin.com/company/shaarav-enterprise/',
    icon: 'linkedin',
    colorClass: 'social-card--linkedin',
  },
  {
    title: 'Facebook',
    text: 'Join the Conversation',
    href: 'https://www.facebook.com/ShaaravEnterprise/',
    icon: 'facebook',
    colorClass: 'social-card--facebook',
  },
]
