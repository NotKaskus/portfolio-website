import { 
    FaGithub,
    FaTwitter,
    FaInstagram
} from "react-icons/fa6";
import Link from 'next/link';

const icons = [
    {
        path: 'https://github.com/NotKaskus',
        name: <FaGithub />
    },
    {
        path: 'https://twitter.com/not_kaskus',
        name: <FaTwitter />
    },
    {
        path: 'https://instagram.com/not_kaskus',
        name: <FaInstagram />
    }
]

export default function Socials() {
  return (
    <div className="flex justify-center md:flex-col gap-2 mt-8">
        <div className='flex gap-4 text-3xl'>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target="_blank">
                        {icon.name}
                    </Link>
                )
            })}
        </div>
    </div>
  )
}
