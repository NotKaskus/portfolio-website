import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href='/'>
            <div className="flex items-center">
                {/* <Image src='/sukuna_logo.png' width={64} height={64} className='mr-3 h-full' priority alt='' /> */}
                <img src='/sukuna_logo.png' className='mr-3 w-10 h-10 rounded ring-2 ring-gray-300 dark:ring-gray-500' alt='' />
                <span className="text-xl font-semibold whitespace-nowrap dark:text-white">Kaskus</span>
            </div>
        </Link>
    )
}