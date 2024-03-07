"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const currentStyle = "cursor-default font-bold hover:no-underline";

export default function NavBar2() {
  const path = usePathname();
  const getIsPath = (name: string) => {
    if (path.includes(name)) return true;
    return false;
  };
  return (
    <nav className="font-archivo fixed z-50 top-0 px-16 inset-x-0 text-black h-16 flex items-center justify-between border-b-2 border-black/20 shadow-md bg-zinc-50">
      <Link href="/">
        <h1 className="text-xl font-extrabold text-black/30">MARTUX_M</h1>
      </Link>
      <div className="flex items-center underline-offset-4 justify-end gap-12 uppercase text-lg text-black/80">
        <Link
          className={`hover:underline  ${getIsPath("music") && currentStyle}`}
          href="/work/music"
          target="_self"
        >
          Music
        </Link>
        <Link
          className={`hover:underline underline-offset-2 ${
            getIsPath("visual") && currentStyle
          }`}
          href="/work/visual"
          target="_self"
        >
          Visual arts
        </Link>
        <Link
          className={`hover:underline underline-offset-2 ${
            getIsPath("about") && currentStyle
          }`}
          href="/about"
          target="_self"
        >
          About
        </Link>
        {/* <Link
          className={`hover:underline underline-offset-2 ${
            getIsPath("calendar") && currentStyle
          }`}
          href="/calendar"
          target="_self"
        >
          Events
        </Link> */}
        <Link
          className="hover:underline underline-offset-2"
          href="#footer"
          target="_self"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
