"use client";

import HeaderElement from "../../../../components/HeaderElement";
import { useEffect, useState } from "react";
import { Article } from "../../../../types/Article";
import ArticlesRenderer from "../../../../components/ArticlesRenderer";
import { supabaseClient } from "../../../../functions/SupabaseSetup";
import {NewspaperIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";

export default function NewsroomAllArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderedMessage, setMessage] = useState<string | undefined>(undefined)

  useEffect(() => {
    const supabaseTest = async () => {
      const { data, error } = await supabaseClient.from("articles").select().order("created_at", { ascending: false })
      if (error) {
        setMessage("Something Went Wrong")
      } else {
        setArticles(data as Article[])
      }
      setIsLoading(false)
    }
    supabaseTest()
  }, [])

  return (
    <>
      <HeaderElement />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-100 sm:text-5xl">
            Nexus Newsroom<span className="text-teal-500">.</span>
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
            Showing All Articles In The Nexus Newsroom
          </p>
          <form className="flex items-center max-w-sm mt-4" method="GET" action="/company/newsroom/articles/viewByCategory">
            <label htmlFor="category" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <NewspaperIcon className="size-5 dark:text-gray-200"/>
              </div>
              <input
                type="text" name="category"
                autoComplete="off" id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Search Articles By Category" required />
            </div>
            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-teal-700 rounded-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
              <MagnifyingGlassIcon className="size-5"/>
              <span className="sr-only">Search</span>
            </button>
          </form>

        </div>
        <ArticlesRenderer articles={articles} isLoading={isLoading} message={renderedMessage} />
      </div>
    </>
  );
}