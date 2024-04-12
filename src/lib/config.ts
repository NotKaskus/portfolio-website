import { EnvelopeOpenIcon, FolderIcon } from "@heroicons/react/24/outline";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import {
  Home,
  NotebookPen,
  Newspaper,
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
      invite: "https://discord.gg/XcbMwAyUJ9",
      id: "544164729354977282",
    },
    instagram: {
      username: "its_kaskus",
    },
    email: "paulandrew103@proton.me",
  },
};

export const header = {
  title: "Paul Andrew",
  subtitle: "Full-stack developer",
  description: meta.description,
  code: {
    user: "kaskus",
  },
};

export const nav = {
  left: [
    {
      href: "/",
      Icon: Home,
      title: "Home",
    },
    {
      href: "/about",
      Icon: NotebookPen,
      title: "About",
    },
    {
      href: "/posts",
      Icon: Newspaper,
      title: "Posts",
    },
  ],
  more: [
    {
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
    },
  ],
  right: [
    {
      href: meta.accounts.discord.invite,
      title: "Discord",
      target: "_blank",
    },
  ],
};

export const footer = {
  categories: [
    {
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
        },
      ],
    },
    {
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
        },
      ],
    },
    {
      title: "Other",
      links: [
        {
          title: "About me",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ],
    },
  ],
};

export const contact = {
  links: [
    {
      href: meta.accounts.discord.invite,
      title: "Discord",
      description: 'Join my Discord server',
      Icon: FaDiscord,
    },
    {
      href: `https://x.com/${meta.accounts.twitter.username}`,
      title: "Twitter / X",
      description: 'Check out my tweets',
      Icon: FaTwitter,
    },
    {
      href: `https://www.instagram.com/${meta.accounts.instagram.username}/`,
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