import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import {
  EnvelopeOpenIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

export const meta = {
  title: 'Paul Andrew',
  author: 'Paul Andrew',
  description:
    "I'm a full-stack developer based in Philippines. I have a passion for building back-end applications and solving problems",
  //url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  url: 'https://paul.is-a.dev',
  locale: 'en_US',
  siteName: 'Paul Andrew',
  accounts: {
    github: {
      username: 'NotKaskus',
    },
    twitter: {
      username: 'its_kaskus',
    },
    discord: {
      username: 'paulandrew',
      invite: 'https://discord.gg/sgt4QEyDxK', // TODO: CHANEGE ME
      id: '544164729354977282',
    },
    instagram: {
      username: 'its_kaskus',
    },
    email: 'paulandrew103@proton.me',
  },
};

export const header = {
  title: 'Paul Andrew',
  subtitle: 'Full-stack developer',
  description: meta.description,
  code: {
    user: 'kaskus', // TODO: CHANEGE ME
  },
};

export const nav = {
  left: [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/about',
      title: 'About Me',
    },
    {
      href: '/blogs',
      title: 'Blog',
    },
  ],
  more: [
    {
      href: '/work',
      Icon: FolderIcon,
      title: 'My Work',
      description: 'My projects and contributions',
    },
    {
      href: '/contact',
      Icon: EnvelopeOpenIcon,
      title: 'Contact',
      description: 'Do you have any questions? Contact me!'
    },
  ],
  right: [
    {
      href: meta.accounts.discord.invite,
      title: 'Discord',
      target: '_blank',
    },
  ],
};

export const footer = {
  categories: [
    {
      title: 'Important Links',
      links: [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'My work',
          href: '/work',
        },
        {
          title: 'Blog',
          href: '/blogs',
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          title: 'Github',
          href: `https://github.com/${meta.accounts.github.username}`,
          target: '_blank',
        },
        {
          title: 'Instagram',
          href: `https://instagram.com/${meta.accounts.instagram.username}`,
          target: '_blank',
        },

        {
          title: 'Discord',
          href: meta.accounts.discord.invite,
          target: '_blank',
        },
      ],
    },
    {
      title: 'Other',
      links: [
        {
          title: 'About me',
          href: '/about',
        },
        {
          title: 'Contact',
          href: '/contact',
        },
      ],
    },
  ],
};

export const contact = {
  links: [
    {
      href: `mailto:${meta.accounts.email}`,
      title: 'Email',
      Icon: MdEmail,
    },
    {
      href: meta.accounts.discord.invite,
      title: 'Discord',
      Icon: FaDiscord,
    },
    {
      href: `https://x.com/${meta.accounts.twitter.username}`,
      title: 'Twitter / X',
      Icon: FaTwitter,
    },
    {
      href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
      title: 'Instagram',
      Icon: FaInstagram,
    },
  ],
};
