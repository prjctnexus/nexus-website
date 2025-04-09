import HeaderElement from "@/components/HeaderElement";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: 'We\'re Redesigning The Nexus Website',
    href: 'https://github.com/prjctnexus/nexus-website',
    description:
      'We\'re Redesigning The Nexus Website — And The Code Is Now Open Source On GitHub! Dive In, Explore, And Contribute To Help Shape The Future Of Nexus.',
    date: 'April 9, 2025',
    datetime: '2025-04-09',
    category: { title: 'General', href: 'https://github.com/prjctnexus/' },
    author: {
      name: 'Gautham Krishna Vinayachandran',
      role: 'The Creator',
      href: 'https://github.com/myselfgautham',
      imageUrl:
        'https://raw.githubusercontent.com/prjctnexus/nexus-website/refs/heads/main/public/leadership-assets/164372549.jpg'
    },
  }
]

export default function NewsroomPage() {
  return (
    <>
      <HeaderElement />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-100 sm:text-5xl">
            Nexus Newsroom<span className="text-teal-500">.</span>
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">Stay Updated With the Latest Innovations and Stories From Nexus</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-300">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-zinc-300 group-hover:underline">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-300">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt="Author Image"
                  src={post.author.imageUrl}
                  className="rounded-full bg-gray-50"
                  width={40} height={40}
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}