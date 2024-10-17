import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
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
    icon: <SiGithub />,
  },
  {
    name: 'Twitter',
    path: `https://twitter.com/${meta.accounts.twitter.username}`,
    icon: <SiX />,
  }
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