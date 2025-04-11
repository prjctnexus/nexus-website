import {NewspaperIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import { useEffect } from "react";
import BetterURL from "../functions/BetterURLs";

export default function SearchComponent() {
  useEffect(() => {
    if (window.location.pathname !== "/company/newsroom/articles") {
      (
        document.getElementById("query") as HTMLInputElement
      ).value = BetterURL(new URLSearchParams(window.location.search).get("query")) || "General"
    }
  }, [])
    return (
        <form className="flex items-center max-w-sm mt-6" method="GET" action="/company/newsroom/articles/searchArticles">
            <label htmlFor="query" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <NewspaperIcon className="size-5 dark:text-gray-200"/>
              </div>
              <input
                type="text" name="query"
                autoComplete="off" id="query"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                placeholder="Search for an Article" required />
            </div>
            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-teal-700 rounded-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
              <MagnifyingGlassIcon className="size-5"/>
              <span className="sr-only">Search</span>
            </button>
          </form>
    )
}