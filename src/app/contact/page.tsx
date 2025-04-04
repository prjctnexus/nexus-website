"use client";

import HeaderElement from "@/components/HeaderElement";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useEffect } from "react";

const stats = [
    { id: 1, name: '+91 9778103191', value: 'Phone' },
    { id: 2, name: 'prjctnxs@gmail.com', value: 'Email' },
    { id: 3, name: 'prjctnexus', value: 'Github' },
]

export default function ContactPage() {
    useEffect(() => {
        if (document.readyState === "complete") {
            setTimeout(() => {
                document.title = "Project Nexus | Contact"
            }, 150)
        }
    }, [])
    return (
        <>
        <HeaderElement />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-4xl font-semibold tracking-tight">Get In Touch</h2>
                    <p className="mt-4 text-lg text-gray-800">
                    Reach Out For Support, Collaboration, Or Inquiries—We Are Here To Help And Enhance Your Nexus Experience.
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter The Subject"
                        autoComplete="none"
                        className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                    <button
                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        onClick={() => {
                            window.location.href = `mailto:prjctnxs@gmail.com?subject=${
                                (document.getElementById("subject") as HTMLInputElement).value || "Contacting The Nexus Support Team"
                            }`
                        }}
                    >
                        Continue
                    </button>
                    </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                    <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                        <CalendarDaysIcon aria-hidden="true" className="size-6" />
                    </div>
                    <dt className="mt-4 text-base font-semibold">24x7 Assistance</dt>
                    <dd className="mt-2 text-base/7 text-gray-700">
                    Our Team Is Always Ready To Help With Any Questions Or Technical Support.
                    </dd>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="rounded-md bg-black/5 p-2 ring-1 ring-black/10">
                        <HandRaisedIcon aria-hidden="true" className="size-6" />
                    </div>
                    <dt className="mt-4 text-base font-semibold">Community-Driven Support</dt>
                    <dd className="mt-2 text-base/7 text-gray-700">
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
                      <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                          {stat.value}
                      </dd>
                  </div>
                ))}
            </dl>
        </div>
        </>
    )
}