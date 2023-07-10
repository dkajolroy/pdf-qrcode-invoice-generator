"use client";
import { fetcher } from "@/lib/api";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";

const nav = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Documents",
    url: "/document",
  },
  {
    title: "Settings",
    url: "/settings",
  },
];
function Navigation() {
  const { data, isLoading } = useSWR<
    Document[] | undefined,
    boolean,
    string | undefined
  >("/api/document?search=", fetcher);
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between bg-zinc-500 ">
      <div className="flex  items-center flex-1">
        {nav.map((item, i) => (
          <Link
            key={i}
            className={`${
              item.url === pathname ? "bg-zinc-800" : "bg-zinc-600"
            } text-white px-5 py-2 hover:bg-zinc-800`}
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-around flex-1 items-center">
        <h2 className="text-white "> Total Doc: {data?.length}</h2>
        <button
          onClick={() => signOut()}
          className="text-white px-5 py-2 hover:text-zinc-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
