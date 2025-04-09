import HeaderElement from "@/components/HeaderElement";
import Image from "next/image";

const people = [
  {
    name: 'Gautham Krishna Vinayachandran',
    role: 'The Creator',
    imageUrl:
      'https://raw.githubusercontent.com/prjctnexus/nexus-website/refs/heads/main/public/leadership-assets/164372549.jpg',
  }
]

export default function LeadershipPage() {
  return (
    <>
      <HeaderElement />
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3 mt-24">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            We Are A Talented Team Of Innovators,
            Committed To Excellence And Driven By A Shared Vision To Build Cutting-Edge,
            Open-Source Solutions.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image alt={person.name + ", " + person.role} src={person.imageUrl} className="rounded-full" height={64} width={64} />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight dark:text-white text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-teal-600 dark:text-teal-400">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}