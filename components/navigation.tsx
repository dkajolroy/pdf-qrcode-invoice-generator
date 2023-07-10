"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between bg-teal-500 ">
      <div className="flex  items-center flex-1">
        {nav.map((item, i) => (
          <Link
            key={i}
            className={`${
              item.url === pathname ? "bg-cyan-800" : "bg-cyan-700"
            } text-white px-5 py-2 hover:bg-cyan-800`}
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-around flex-1 items-center">
        <h2 className="text-white "> Total Doc: 55</h2>
        <button
          onClick={() => signOut()}
          className="text-white px-5 py-2 hover:text-teal-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
