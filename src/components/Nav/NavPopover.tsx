'use client';

import { Popover, Transition } from '@headlessui/react';
import {
  ChevronRightIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { nav } from '@/lib/config';

export default function NavPopover() {
  return (
    <Popover className="relative">
      <>
        <Popover.Button className="group relative hidden rounded-lg p-1 text-md font-medium text-gray-700 transition-all duration-200 hover:bg-black/10 hover:text-gray-800 ui-open:bg-black/10 ui-open:text-gray-800 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-200 dark:ui-open:bg-white/10 dark:ui-open:text-neutral-200 sm:px-3 sm:py-2 md:flex md:items-center">
          <span>More</span>
          <ChevronRightIcon className="ml-1 h-4 w-4 text-primary duration-150 ease-in-out group-hover:rotate-90 group-hover:text-gray-800 ui-open:rotate-90 ui-open:text-gray-800 dark:text-neutral-400 dark:group-hover:text-gray-400 dark:ui-open:text-neutral-200" />
        </Popover.Button>
        <Transition
          enter="transition ease-out duration-100 motion-reduce:transition-none"
          enterFrom="transform opacity-0 duration-100 scale-95 motion-reduce:transition-none"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100 motion-reduce:transition-none"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform rounded-xl border-[1px] shadow-md bg-popover p-2 opacity-100 duration-100">
            {nav.more.map((item, index) => (
              <Link
              key={index}
                href={item.href}
                className="mt-1 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-blue-400/20 dark:hover:bg-white/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-400/20 text-white dark:bg-white/10 dark:text-neutral-800 sm:h-12 sm:w-12">
                  <item.Icon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/70" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-popover-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm text-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
