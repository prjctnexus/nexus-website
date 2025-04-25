"use client";

import HeaderElement from "@/components/HeaderElement";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: '+91 9778103191', value: 'Phone' },
  { id: 2, name: 'prjctnxs@gmail.com', value: 'Email' },
  { id: 3, name: 'prjctnexus', value: 'Github' },
]

export default function ContactPage() {
  return (
    <>
      <HeaderElement />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight dark:text-white">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
              Reach Out For Support, Collaboration, Or Inquiries—We Are Here To Help And Enhance Your Nexus Experience.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="subject" className="sr-only">
                Subject Of Communication
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Enter The Subject"
                autoComplete="none"
                className="min-w-0 border border-gray-400 dark:border-gray-600 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-800 dark:placeholder:text-gray-400 dark:text-white dark:bg-white/13 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
              />
              <button
                className="flex-none rounded-md bg-teal-500 dark:bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-400 dark:hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:focus-visible:outline-teal-600"
                onClick={() => {
                  window.location.href = `mailto:prjctnxs@gmail.com?subject=${(document.getElementById("subject") as HTMLInputElement).value || "Contacting The Nexus Support Team"
                    }`
                }}
              >
                Continue
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10 dark:text-white dark:bg-gray-800 dark:ring-gray-500">
                <CalendarDaysIcon aria-hidden="true" className="size-6" />
              </div>
              <dt className="mt-4 text-base font-semibold dark:text-white">24x7 Assistance</dt>
              <dd className="mt-2 text-base/7 text-gray-700 dark:text-gray-200">
                Our Team Is Always Ready To Help With Any Questions Or Technical Support.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10 dark:text-white dark:bg-gray-800 dark:ring-gray-500">
                <HandRaisedIcon aria-hidden="true" className="size-6" />
              </div>
              <dt className="mt-4 text-base font-semibold dark:text-white">Community-Driven Support</dt>
              <dd className="mt-2 text-base/7 text-gray-700 dark:text-gray-200">
                Engage With Our Open-Source Community For Insights, Troubleshooting, And Collaboration.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-12 sm:py-24 lg:px-8">
        <dl className="grid max-[420px]:grid-cols-1 max-[639px]:grid-cols-2 gap-x-8 gap-y-8 text-center grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600 dark:text-gray-100">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}