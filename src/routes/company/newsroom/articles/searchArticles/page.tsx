"use client";

import HeaderElement from "../../../../../components/HeaderElement";
import { useEffect, useState } from "react";
import { Article } from "../../../../../types/Article";
import ArticlesRenderer from "../../../../../components/ArticlesRenderer";
import { supabaseClient } from "../../../../../functions/SupabaseSetup";
import SearchComponent from "../../../../../components/SearchComponent";

export default function NewsroomArticlesSearchPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderedMessage, setMessage] = useState<string|undefined>(undefined)
  const query = new URLSearchParams(document.location.search).get("query") || "General"

  useEffect(() => {
    const supabaseTest = async () => {
        const { data, error } = await supabaseClient.from("articles").select().textSearch('search_vector', query, {
          type: "websearch"
        }).order("created_at", { ascending: false })
        if (error) {
            setMessage("Something Went Wrong")
        } else {
            setArticles(data as Article[])
        }
        setIsLoading(false)
    }
    supabaseTest()
  }, [query])

  return (
    <>
      <HeaderElement />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-18">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-gray-100 sm:text-5xl">
            Nexus Newsroom<span className="text-teal-500">.</span>
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400">
          Showing Articles For : <span className="font-medium">{query}</span>
          </p>
          <SearchComponent />
        </div>
        <ArticlesRenderer articles={articles} isLoading={isLoading} message={renderedMessage} />
      </div>
    </>
  );
}