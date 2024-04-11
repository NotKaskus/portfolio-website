<<<<<<< HEAD
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
=======
import { EnvelopeOpenIcon, FolderIcon } from "@heroicons/react/24/outline";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import {
  Home,
  NotebookPen,
  Newspaper,
  BriefcaseBusiness,
  Contact,
} from "lucide-react";
import { MdEmail } from "react-icons/md";

export const meta = {
  title: "Paul Andrew",
  author: "Paul Andrew",
  description:
    "I'm a full-stack developer based in Philippines. I have a passion for building back-end applications and solving problems",
  //url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  url: "https://paul.is-a.dev",
  locale: "en_US",
  siteName: "Paul Andrew",
  accounts: {
    github: {
      username: "NotKaskus",
    },
    twitter: {
      username: "its_kaskus",
    },
    discord: {
      username: "paulandrew",
      invite: "https://discord.gg/sgt4QEyDxK", // TODO: CHANEGE ME
      id: "544164729354977282",
    },
    instagram: {
      username: "its_kaskus",
    },
    email: "paulandrew103@proton.me",
>>>>>>> source/main
  },
};

export const header = {
<<<<<<< HEAD
  title: 'Paul Andrew',
  subtitle: 'Full-stack developer',
  description: meta.description,
  code: {
    user: 'kaskus', // TODO: CHANEGE ME
=======
  title: "Paul Andrew",
  subtitle: "Full-stack developer",
  description: meta.description,
  code: {
    user: "kaskus", // TODO: CHANEGE ME
>>>>>>> source/main
  },
};

export const nav = {
  left: [
    {
<<<<<<< HEAD
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
=======
      href: "/",
      Icon: Home,
      title: "Home",
    },
    {
      href: "/about",
      Icon: NotebookPen,
      title: "About Me",
    },
    {
      href: "/posts",
      Icon: Newspaper,
      title: "Posts",
>>>>>>> source/main
    },
  ],
  more: [
    {
<<<<<<< HEAD
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
=======
      href: "/work",
      Icon: FolderIcon,
      title: "My Work",
      description: "My projects and contributions",
    },
    {
      href: "/contact",
      Icon: EnvelopeOpenIcon,
      title: "Contact",
      description: "Do you have any questions? Contact me!",
>>>>>>> source/main
    },
  ],
  right: [
    {
      href: meta.accounts.discord.invite,
<<<<<<< HEAD
      title: 'Discord',
      target: '_blank',
=======
      title: "Discord",
      target: "_blank",
>>>>>>> source/main
    },
  ],
};

export const footer = {
  categories: [
    {
<<<<<<< HEAD
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
=======
      title: "Important Links",
      links: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "My work",
          href: "/work",
        },
        {
          title: "Posts",
          href: "/posts",
>>>>>>> source/main
        },
      ],
    },
    {
<<<<<<< HEAD
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
=======
      title: "Social",
      links: [
        {
          title: "Github",
          href: `https://github.com/${meta.accounts.github.username}`,
          target: "_blank",
        },
        {
          title: "Instagram",
          href: `https://instagram.com/${meta.accounts.instagram.username}`,
          target: "_blank",
        },

        {
          title: "Discord",
          href: meta.accounts.discord.invite,
          target: "_blank",
>>>>>>> source/main
        },
      ],
    },
    {
<<<<<<< HEAD
      title: 'Other',
      links: [
        {
          title: 'About me',
          href: '/about',
        },
        {
          title: 'Contact',
          href: '/contact',
=======
      title: "Other",
      links: [
        {
          title: "About me",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
>>>>>>> source/main
        },
      ],
    },
  ],
};

export const contact = {
  links: [
    {
<<<<<<< HEAD
      href: `mailto:${meta.accounts.email}`,
      title: 'Email',
      Icon: MdEmail,
    },
    {
      href: meta.accounts.discord.invite,
      title: 'Discord',
=======
      href: meta.accounts.discord.invite,
      title: "Discord",
      description: 'Join my Discord server',
>>>>>>> source/main
      Icon: FaDiscord,
    },
    {
      href: `https://x.com/${meta.accounts.twitter.username}`,
<<<<<<< HEAD
      title: 'Twitter / X',
=======
      title: "Twitter / X",
      description: 'Check out my tweets',
>>>>>>> source/main
      Icon: FaTwitter,
    },
    {
      href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
<<<<<<< HEAD
      title: 'Instagram',
      Icon: FaInstagram,
    },
  ],
};
=======
      title: "Instagram",
      description: 'Follow me on Instagram',
      Icon: FaInstagram,
    },
    {
      href: `https://github.com/${meta.accounts.github.username}/`,
      title: "Github",
      description: 'Check out my repos',
      Icon: FaInstagram,
    },
    {
      href: `mailto:${meta.accounts.email}`,
      title: "Email",
      description: 'Send me an email',
      Icon: MdEmail,
    },
  ],
};

const RelativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
  style: 'long',
});
const dob = new Date('01-21-2006');
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
const hasHadBirthdayThisYear =
  new Date().getMonth() > dob.getMonth() ||
  (new Date().getMonth() === dob.getMonth() && new Date().getDate() >= dob.getDate());

const nextBirthdayYear = new Date().getFullYear() + (hasHadBirthdayThisYear ? 1 : 0);
export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
  Math.abs(
      Math.floor(
          (new Date(nextBirthdayYear, dob.getMonth(), dob.getDate()).getTime() - Date.now()) /
              1000 /
              60 /
              60 /
              24,
      ),
  ),
  'day',
)[1].value.toString();
>>>>>>> source/main
