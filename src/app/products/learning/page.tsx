import { UsersIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/20/solid';
import HeaderElement from "@/components/HeaderElement";
import Image from "next/image";
import { CheckIcon } from '@heroicons/react/20/solid'

const stats = [
  { name: 'Server Uptime', value: '99.99%' },
  { name: 'On Call Support', value: '24x7' },
  { name: 'Hidden Fees', value: '0%' },
  { name: 'Operational Transparency', value: '100%' },
]

const tiers = [
  {
    name: 'Standard',
    id: 'tier-hobby',
    href: '/contact/',
    priceMonthly: '$9.99',
    description: "The Perfect Plan If You're Just Getting Started With Our Products And Services.",
    features: [
      'Access To Core Nexus Learning Services',
      'Student Progress Tracking Dashboard',
      'Basic AI-powered Learning Assistance',
      'Upto 10,000 Students'
    ],
    featured: false,
  },
  {
    name: 'Advanced',
    id: 'tier-enterprise',
    href: '/contact/',
    priceMonthly: '$24.99',
    description: 'The Ultimate Nexus Learning Package: All the Essentials in Our Standard Offering, Plus Everything You Need—Crafted for Schools with Over 10,000 Students.',
    features: [
      'AI-driven Personalized Learning Paths',
      'Real-world Project-based Assessments',
      'Advanced Analytics & Performance Insights',
      'Integration With Existing Systems & Third-party Tools',
      'Dedicated Support & Training For Educators',
      'Access To The Best Of Nexus Learning'
    ],
    featured: true,
  },
]

const features = [
  {
    name: 'Personalized Learning Paths.',
    description:
      'Tailors educational journeys to individual needs, ensuring each student learns at their own pace.',
    icon: UsersIcon,
  },
  {
    name: 'Interactive Content',
    description: 'Engages students with dynamic, hands-on materials that enhance understanding and retention.',
    icon: ChartBarIcon,
  },
  {
    name: 'Automated Lesson Creation',
    description: 'Instantly generates personalized lessons based on student progress and learning preferences.',
    icon: BookOpenIcon,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NexusForLearning() {
  return (
    <>
      <HeaderElement />
      <div className="mx-auto px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-teal-600 dark:text-teal-500">Introducing The Brand New</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-300 sm:text-5xl">
                Nexus Learning
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
                Nexus Learning Revolutionizes Education with Innovative Tools, Personalized Lessons, and Seamless Parent Engagement, Empowering Every Step of the Learning Journey.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-teal-600 dark:text-teal-500" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Nexus Learning Background"
            src="https://raw.githubusercontent.com/prjctnexus/nexus-website/e30b1d45a6d1ea084f2eaf5c0e5f2d2067ea02b0/public/Nexus%20Learning.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 py-24">
        <h2 className="text-center text-base/7 font-semibold text-teal-600 dark:text-teal-500">Let{"'"}s Get Into It</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 dark:text-white sm:text-5xl">
          Everything You Need To Futurise Education
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-lime-200 dark:bg-cyan-800 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                  Mobile Friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center dark:text-gray-200">
                  Nexus Learning is seamlessly mobile-friendly, ensuring smooth and interactive learning on any device.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    className="object-cover object-top"
                    src="https://raw.githubusercontent.com/prjctnexus/nexus-website/refs/heads/main/public/Nexus%20Mobile.png"
                    alt="Nexus Learning Mobile Friendliness" fill
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-sky-200 dark:bg-sky-950 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-200 max-lg:text-center">
                  Nexus Learning is designed for smooth, responsive performance, delivering an exceptional experience on any device.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt="Nexus Learning Performance"
                  width={100} height={100}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-emerald-200 dark:bg-emerald-700"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-200 max-lg:text-center">
                  Nexus Learning is built with robust security, ensuring safe and private learning on any device.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <div className="relative w-full" style={{ height: "min(152px, 40cqw)" }}>
                  <Image
                    className="object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    alt="Nexus Learning Security" fill
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-teal-200 dark:bg-teal-700 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-200 max-lg:text-center">
                  Nexus Learning features a powerful API, offering seamless integration and customization for developers and enthusiasts alike, empowering everyone to enhance and extend the platform{"'"}s capabilities.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NexusTest.ts
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">NexusSetup.ts</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14 text-white">
                    <span className='text-indigo-500'>import </span>{
                      "{LessonGenerator, CourseManager}"
                    } <span className='text-indigo-500'>from</span> <span className='text-neutral-400'>{"'nexus-learning'"}</span><br />
                    <br /><span className='text-indigo-500'>const </span>{"lessonGenerator = "}<span className='text-amber-300'>new </span>{"LessonGenerator();"}<br />
                    <br /><span className='text-indigo-500'>const </span>{"courseManager = "}<span className='text-amber-300'>new </span>{"CourseManager();"}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-teal-600 dark:text-teal-500">Affordable Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-6xl">
          Pricing That Grows With You
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 dark:text-gray-200 sm:text-xl/8">
        Empower your students with AI-driven learning. Nexus Learning offers flexible plans for schools of all sizes, providing interactive courses and real-world projects at an affordable cost.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 pb-24">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-teal-800 dark:bg-teal-950 shadow-2xl' : 'bg-white/60 dark:bg-white/95 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-teal-400' : 'text-teal-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/ per student</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400 dark:text-teal-400' : 'text-indigo-600 dark:text-teal-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-teal-500 dark:bg-teal-600 text-white shadow-xs hover:bg-teal-400 dark:hover:bg-teal-500 focus-visible:outline-yellow-500 dark:focus-visible:outline-yellow-300'
                  : 'text-teal-600 ring-1 ring-teal-400 dark:text-teal-600 dark:ring-teal-500 ring-inset hover:ring-teal-500 focus-visible:outline-teal-600 dark:focus-visible:outline-zinc-600 focus-visible:ring-0 dark:hover:ring-teal-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get Started Today
            </a>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl dark:text-white">The Nexus Promise</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 dark:text-gray-200 sm:text-xl/8">
            A commitment to providing schools with a comprehensive, innovative, and reliable learning platform that evolves with their needs.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight dark:text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}