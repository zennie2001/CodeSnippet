"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { Button } from "../ui/button";
import { GoDotFill } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";



type Snippet = {
  id: number;
  title: string;
  code: string;
  language: string;
  createdAt: string; // ISO string
  updatedAt: string;
  
};

function SnippetList({snippets}:{snippets: Snippet[]}) {
    const [query, setQuery] = useState<string>("");
    const [favorites, setFavorites] = useState<number[]>([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);



     // Load favorites from localStorage once on mount
        useEffect(() => {
          const stored = localStorage.getItem("favorites");
          if (stored) setFavorites(JSON.parse(stored));
        }, []);

        // Save favorites to localStorage whenever it changes
        useEffect(() => {
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }, [favorites]);


    const toggleFavorite = (id: number) => {
      setFavorites((prev) =>
        prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
      );
    };

  const filtered = snippets
    .filter((s) => s.title.toLowerCase().includes(query.toLowerCase()))
    .filter((s) => (showFavoritesOnly ? favorites.includes(s.id) : true));


  return (
    <div className="lg:w-[65%] w-full pt-4">
            
      <div className="text-center">
        <div className="inline-flex gap-4 items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-3xl w-3/4 sm:w-1/2">
          <CiSearch />
          <input
            className="flex-1 outline-none bg-inherit text-sm"
            type="text"
            placeholder="Search by Title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
        className="px-3 py-1 border rounded-md mb-4"
      >
        {showFavoritesOnly ? "Show All" : "Show Favorites"}
      </button>

      <div className="flex items-center justify-between my-4 mx-2">
        <h1 className="text-xl font-semibold">Snippets</h1>
        <Link href="/snippet/new">
          <button className= " bg-[#3D8D7A] text-white px-4 py-2 flex items-center gap-1 rounded-xl hover:bg-[#4e7641]">
            <span>New</span>
            <div className="pt-0.5 ">
              <GoPlus />
            </div>
            
          </button>
        </Link>
      </div>

      {filtered.map((snippet) => (
        <div
          key={snippet.id}
          className="flex flex-col gap-4 py-2 px-2 border border-gray-400 rounded-md my-4 bg-white"
        >
          <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">{snippet.title}</h1>

           
            <button onClick={() => toggleFavorite(snippet.id)}>
              {favorites.includes(snippet.id) ? (
                <FaHeart className="text-[#3D8D7A]" />
              ) : (
                <FaRegHeart className="text-gray-400 hover:text-[#3D8D7A]" />
              )}
            </button>
          
          
          </div>

          <div className="flex justify-between mt-2">
            <div>
            <div className="flex items-center font-light ">
            <GoDotFill  className="text-[#3D8D7A]"/>

            <p className="text-sm text-gray-500">{snippet.language}</p>
          </div>

          <div className="flex items-center font-light gap-1 ">
            <FaRegCalendar  className="text-[#3D8D7A] text-sm"/>

            <p className="text-sm text-gray-500">
               {snippet.updatedAt !== snippet.createdAt
                ? `Updated on: ${new Date(snippet.updatedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}`
                : `Created on: ${new Date(snippet.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
        })}`}
            </p>
          </div>
          </div>
          <Link href={`/snippet/${snippet.id}`}>
          <button className="text-[#3D8D7A]  border-[#3D8D7A] border-2 px-4 py-1 rounded-md hover:bg-[#eaf1ef]">View</button>
            {/* <Button variant="link" className="font-semibold text-lg">View</Button> */}
          </Link>

          </div>

        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No matching snippets.</p>
      )}
    </div>
  )
}

export default SnippetList