import { BiLogoGithub, BiLogoTwitter, BiLogoInstagram  } from "react-icons/bi";
import Link from 'next/link';

import { meta } from '@/lib/config';

interface Social {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const socials: Social[] = [
  {
    name: 'Github',
    path: `https://github.com/${meta.accounts.github.username}`,
    icon: <BiLogoGithub />,
  },
  {
    name: 'Twitter',
    path: `https://twitter.com/${meta.accounts.twitter.username}`,
    icon: <BiLogoTwitter />,
  },
  {
    name: 'Instagram',
    path: `https://instagram.com/${meta.accounts.instagram.username}`,
    icon: <BiLogoInstagram />,
  },
];

export default function Socials() {
  return (
    <>
      {socials.map((social: Social) => (
        <Link href={social.path} key={social.name}>
          {social.icon}
          <span className="sr-only">{social.name} Link</span>
        </Link>
      ))}
    </>
  );
}