import Image from "next/image";
import { Article } from "../types/Article";
import LoadingElement from "./LoadingElement";

interface ArticlesRendererProps {
  articles: Article[];
  isLoading: boolean;
  message?: string|undefined;
}

export default function ArticlesRenderer({ articles, isLoading, message = "Sorry, No Articles Found" }: ArticlesRendererProps) {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {isLoading ? (
        <LoadingElement />
      ) : articles.length === 0 ? (
        <p className="text-center col-span-full text-gray-700 dark:text-gray-300">
          {message}
        </p>
      ) : (
        [...articles]
          .map((article) => (
            <article key={article.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={new Date(article.created_at).toString()} className="text-gray-500 dark:text-gray-300">
                  {new Date(article.created_at).toLocaleDateString("en-US", {
                    year: 'numeric', month: 'long', day:'numeric'
                  }).replace(",", '')}
                </time>
                <a
                  href={`/company/newsroom/articles/viewByCategory?category=${article.category}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {article.category}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-zinc-300 group-hover:underline">
                  <a href={article.href}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </a>
                </h3>
                <p className="mt-5  text-sm/6 text-gray-600 dark:text-gray-300">{article.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt="Author Image"
                  src={article.author_image_url}
                  className="rounded-full bg-gray-50"
                  width={40}
                  height={40}
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    <a href={article.author_href}>
                      <span className="absolute inset-0" />
                      {article.author_name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{article.author_role}</p>
                </div>
              </div>
            </article>
          ))
      )}
    </div>
  );
}