import {
  Home,
  NotebookPen,
  Newspaper,
	Package
} from "lucide-react";
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';

export const meta = {
	title: "Paul Andrew",
  author: "Paul Andrew",
  description:
    "I'm a full-stack developer based in Philippines. I have a passion for building back-end applications and solving problems",
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
	}
}

export const header = {
	title: "Paul Andrew",
  subtitle: "Full-stack developer",
  description: meta.description,
  code: {
    user: "kaskus",
  }
}

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
      href: "/projects",
      Icon: Package,
      title: "Posts",
    },
    {
      href: "/posts",
      Icon: Newspaper,
      title: "Posts",
    },
  ],
  right: [
		{
			href: `https://github.com/${meta.accounts.github.username}`,
			title: "GitHub Link",
			target: "_blank",
			Icon: SiGithub
		},
		{
			href: `https://x.com/${meta.accounts.github.username}`,
			title: "Twitter Link",
			target: "_blank",
			Icon: SiX
		}
  ],
};

export const footer = {
	categories: [
		{
			title: "Important Links",
			links: [
				{
					title: "Home",
					href: "/"
				},
				{
					title: "Projects",
					href: "/"
				},
				{
					title: "Contact",
					href: "/"
				}
			]
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
          href: "/Posts",
        },
      ],
    }
	]
}