import HeaderElement from "@/components/HeaderElement";
import {
  GlobeAmericasIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: 'Universality',
    description:
      'Nexus Empowers Everyone, Everywhere—Bridging Technologies Seamlessly. Open-Source And Versatile, It Adapts To Diverse Needs Across Industries And Communities.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Security And Privacy',
    description:
      'Nexus Prioritizes Security And Privacy—Utilizing Advanced Encryption, Decentralized Protocols, And Tamper-Proof Systems To Safeguard Data And Ensure Trust.',
    icon: LockClosedIcon,
  },
  {
    name: 'Customizability',
    description:
      'Nexus Offers Unmatched Customizability—Flexible, Modular, And Open-Source, It Adapts Seamlessly To Unique Needs, Empowering Users To Build Tailored Solutions.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Inclusion And Diversity',
    description:
      'Nexus Upholds Inclusion, Diversity, And Accessibility—Ensuring Equitable Access Through Adaptive Design, Open-Source Collaboration, And Seamless Integration For All Users.',
    icon: UserGroupIcon,
  },
]

const links = [
  { name: 'Get In Touch', href: '/contact/' },
  { name: 'Our Core Values', href: '#' },
  { name: 'Meet The Team', href: '/company/leadership/' },
]

const stats = [
  { name: 'Server Uptime', value: '99.99%' },
  { name: 'Integrations', value: '50+' },
  { name: 'Open Source', value: '100%' },
  { name: 'Possibilities', value: 'Unlimited' },
]

export default function CompanyPage() {
  return (
    <>
      <HeaderElement />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:mt-6 lg:mt-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-teal-600 dark:text-teal-500">Welcome To Project Nexus</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-balance">
            Where We Build The Technologies of Tomorrow
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            Nexus Pioneers Next-Gen Experiences Through Cutting-Edge, Open-Source Technology—Bridging Innovation, Security, And Seamless Digital Solutions For All.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl dark:text-white">Learn More</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-800 sm:text-xl/8 dark:text-gray-400">
              Discover How Nexus Transforms Technology With Innovation, Security, And Flexibility.
              Explore Its Ecosystem And Unlock Limitless Possibilities Today.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-[420px]:grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="dark:text-gray-100">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid max-[420px]:grid-cols-1 gap-8 sm:mt-20 grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-600 dark:text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}