"use client";
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { Button } from "../ui/button";

type Snippet = {
  id: number;
  title: string;
  code: string;
  
};

function SnippetList({snippets}:{snippets: Snippet[]}) {
    const [query, setQuery] = useState("");

  const filtered = snippets.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );
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

      <div className="flex items-center justify-between my-4 mx-2">
        <h1 className="text-xl font-semibold">Snippets</h1>
        <Link href="/snippet/new">
          <button className="bg-[#3D8D7A] text-white px-4 py-2 flex items-center gap-1 rounded-xl hover:bg-[#4e7641]">
            <span>New</span>
            <GoPlus />
          </button>
        </Link>
      </div>

      {filtered.map((snippet) => (
        <div
          key={snippet.id}
          className="flex items-center justify-between py-2 px-2 border border-gray-400 rounded-md my-4 bg-white"
        >
          <h1>{snippet.title}</h1>
          <Link href={`/snippet/${snippet.id}`}>
            <Button variant="link">View</Button>
          </Link>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No matching snippets.</p>
      )}
    </div>
  )
}

export default SnippetList