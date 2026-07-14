import mongoose from 'mongoose';
import config from '../config/env.js';
import connectDB from '../config/db.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import SocialLink from '../models/SocialLink.js';
import SiteSettings from '../models/SiteSettings.js';

const projects = [
  {
    title: 'D2C Mobile App + Checkout',
    tag: 'Software Development',
    description:
      'End-to-end direct-to-consumer mobile experience with native checkout, subscription flows, and push-driven retention. Built for speed, conversion, and operational visibility from day one.',
    stack: ['React Native', 'Stripe', 'Push Automation'],
    featured: true,
    order: 1,
    liveUrl: '',
    repoUrl: '',
    image: '',
  },
  {
    title: 'Inbox-to-CRM Lead Routing',
    tag: 'AI Automation',
    description:
      'Automated pipeline that ingests inbound leads from email, enriches and scores them with AI agents, routes to the right CRM owner, and notifies teams in Slack — reducing response time and manual triage.',
    stack: ['AI Agents', 'CRM Integration', 'Slack Alerts'],
    featured: true,
    order: 2,
    liveUrl: '',
    repoUrl: '',
    image: '',
  },
  {
    title: 'Creative Portfolio Platform',
    tag: 'Software Development',
    description:
      'High-performance portfolio platform with WebGL-driven visuals, CMS-driven content, and Lighthouse scores above 95. Designed for creators who need speed, polish, and full editorial control.',
    stack: ['WebGL', 'CMS-Driven', 'Lighthouse 95+'],
    featured: true,
    order: 3,
    liveUrl: '',
    repoUrl: '',
    image: '',
  },
];

const skills = [
  { name: 'TypeScript', category: 'Languages', level: 92, order: 1 },
  { name: 'JavaScript', category: 'Languages', level: 95, order: 2 },
  { name: 'Python', category: 'Languages', level: 78, order: 3 },
  { name: 'React', category: 'Frontend', level: 94, order: 1 },
  { name: 'React Native', category: 'Frontend', level: 88, order: 2 },
  { name: 'WebGL', category: 'Frontend', level: 75, order: 3 },
  { name: 'Node.js', category: 'Backend', level: 90, order: 1 },
  { name: 'Express', category: 'Backend', level: 88, order: 2 },
  { name: 'MongoDB', category: 'Backend', level: 85, order: 3 },
  { name: 'AI Agents', category: 'Automation', level: 82, order: 1 },
  { name: 'Stripe', category: 'Integrations', level: 86, order: 1 },
  { name: 'CRM Integration', category: 'Integrations', level: 80, order: 2 },
];

const experience = [
  {
    role: 'Founder & Lead Engineer',
    org: 'NLOGN Labs',
    period: '2023 — Present',
    summary:
      'Building product-grade software and AI automation for startups and growth teams — from mobile commerce to lead routing and high-performance creative platforms.',
    order: 1,
  },
  {
    role: 'Full-Stack Developer',
    org: 'Independent',
    period: '2020 — 2023',
    summary:
      'Delivered web and mobile products for clients across e-commerce, SaaS, and creative industries with a focus on performance, UX, and maintainable architecture.',
    order: 2,
  },
];

const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/nlognlabs',
    label: 'GitHub',
    order: 1,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/nlogn-labs',
    label: 'LinkedIn',
    order: 2,
  },
  {
    platform: 'Email',
    url: 'mailto:hello@nlogn.dev',
    label: 'Email',
    order: 3,
  },
];

const siteSettings = {
  siteName: 'NLOGN Labs',
  tagline: 'Software & AI automation that ships',
  email: 'hello@nlogn.dev',
  description:
    'NLOGN Labs builds production-ready software and AI automation — mobile apps, creative platforms, and intelligent workflows that help teams move faster.',
  seoTitle: 'NLOGN Labs | Software Development & AI Automation',
  seoDescription:
    'Portfolio of NLOGN Labs — D2C mobile apps, inbox-to-CRM AI routing, and high-performance creative platforms.',
  ogImage: '',
};

const seed = async () => {
  try {
    await connectDB();

    console.log('Clearing existing collections...');
    await Promise.all([
      Project.deleteMany({}),
      Skill.deleteMany({}),
      Experience.deleteMany({}),
      SocialLink.deleteMany({}),
      SiteSettings.deleteMany({}),
    ]);

    console.log('Inserting seed data...');
    const [insertedProjects, insertedSkills, insertedExperience, insertedSocial, insertedSettings] =
      await Promise.all([
        Project.insertMany(projects),
        Skill.insertMany(skills),
        Experience.insertMany(experience),
        SocialLink.insertMany(socialLinks),
        SiteSettings.create(siteSettings),
      ]);

    console.log('Seed completed successfully:');
    console.log(`  Projects:      ${insertedProjects.length}`);
    console.log(`  Skills:        ${insertedSkills.length}`);
    console.log(`  Experience:    ${insertedExperience.length}`);
    console.log(`  Social links:  ${insertedSocial.length}`);
    console.log(`  Site settings: 1 (${insertedSettings.siteName})`);
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
};

seed();
