import HeaderElement from "@/components/HeaderElement";
import Link from "next/link";

export default function PageUnderConstruction() {
  return (
    <>
      <HeaderElement />
      <div className="text-center mt-24">
        <p className="text-base font-semibold text-indigo-600 dark:text-teal-500">Project Nexus</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-300 sm:text-7xl">
          Page Under Construction
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
          Sorry, This Page Is Currently Under Construction
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 dark:bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 dark:hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-teal-600"
          >
            Go Back Home
          </Link>
          <a href="/contact/" className="text-sm font-semibold text-gray-900 dark:text-gray-300">
            Contact Support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </>
  )
}