"use client";
import { Icon124Spinner2 } from "@/components/IconFile";
import Document from "@/components/document";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (query: string) => fetch(query).then((res) => res.json());

function DocumentPage() {
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useSWR<
    Document[] | undefined,
    boolean,
    string | undefined
  >(`/api/document?search=${search.trim()}`, fetcher);

  return (
    <div className="container">
      <div className="flex items-center justify-between my-2">
        <h2 className="text-lg">All Documents</h2>
        <div className="flex border rounded  border-zinc-500  items-center">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type text..."
            className="border-none outline-none focus:border-gray-300 focus:bg-gray-100 py-1 rounded px-2"
          />
          <button className="bg-zinc-500  py-1 px-2 hover:bg-zinc-600 transition text-white ">
            Search
          </button>
        </div>
      </div>
      <div className="border-b"></div>
      {isLoading && (
        <div className="flex h-[50vh] justify-center items-center">
          <span className="animate-spin text-6xl mr-3 ">
            <Icon124Spinner2 />
          </span>
        </div>
      )}
      <div className="grid lg:grid-cols-2 gap-5 my-5 items-center">
        {!error && data?.length
          ? data?.map((item, i) => <Document item={item} key={i} />)
          : null}
      </div>
    </div>
  );
}

export default DocumentPage;
