'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, EnvelopeIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  { name: 'Nexus for Learning', description: 'Learning Solutions For The Future', href: '/products/learning/', icon: ChartPieIcon },
]
const callsToAction = [
  { name: 'On GitHub', href: 'https://github.com/prjctnexus/', icon: CodeBracketIcon },
  { name: 'Contact Sales', href: 'mailto:prjctnxs@gmail.com', icon: EnvelopeIcon },
]

export default function HeaderElement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setTheme] = useState<boolean>(true);

  useEffect(() => {
    const getColorState = (fn: { (state: boolean): void; (arg0: boolean): void }) => {
      if (!window.matchMedia) { return; }
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      fn(query.matches)
      query.addEventListener('change', (event) => fn(event.matches));
    }
    getColorState((state) => setTheme(state))
  }, [])

  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Project Nexus</span>
            <Image
              alt="Project Nexus Logo"
              src={isDarkMode ? "https://raw.githubusercontent.com/prjctnexus/nexus-website/a731ca53b7651d32406e77649a732abc06dbdf1f/public/FaviconWhite.svg" : "https://raw.githubusercontent.com/prjctnexus/nexus-website/a731ca53b7651d32406e77649a732abc06dbdf1f/public/Favicon.svg"}
              className={`${mobileMenuOpen ? "hidden" : ""}`}
              height={48} width={48}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-900 group-hover:bg-white dark:group-hover:bg-gray-800">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 dark:text-gray-400 group-hover:text-teal-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 dark:text-gray-200">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-700">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link href="/company/" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
            Company
          </Link>
          <Link href="/company/newsroom/" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
            Newsroom
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/under_construction/" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
            Log In <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-[#121212] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Project Nexus</span>
              <Image
                alt="Project Nexus Logo"
                src={isDarkMode ? "https://raw.githubusercontent.com/prjctnexus/nexus-website/a731ca53b7651d32406e77649a732abc06dbdf1f/public/FaviconWhite.svg" : "https://raw.githubusercontent.com/prjctnexus/nexus-website/a731ca53b7651d32406e77649a732abc06dbdf1f/public/Favicon.svg"}
                height={48} width={48}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-300">
                    Product & Actions
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-300"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/company/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-300"
                >
                  Company
                </Link>
                <Link
                  href="/company/newsroom/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-300"
                >
                  Newsroom
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="/under_construction/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-300"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}