"use client";

import HeaderElement from "@/components/HeaderElement";
import { useEffect, useState } from "react";
import { Article } from "@/types/Article";
import ArticlesRenderer from "@/components/ArticlesRenderer";
import { supabaseClient } from "@/functions/SupabaseSetup";

export default function NewsroomPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderedMessage, setMessage] = useState<string|undefined>(undefined)

  useEffect(() => {
    const supabaseTest = async () => {
        const { data, error } = await supabaseClient.from("articles").select().order("created_at", {ascending: false}).limit(3)
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
            Stay Updated With the Latest Innovations and Stories From Nexus
          </p>
          <a href="/company/newsroom/articles" className="dark:text-gray-100 group tracking-wide hover:underline underline-offset-2">
            View All Articles <span aria-hidden="true" className="group-hover:text-teal-500">&rarr;</span>
          </a>
        </div>
        <ArticlesRenderer articles={articles} isLoading={isLoading} message={renderedMessage} />
      </div>
    </>
  );
}