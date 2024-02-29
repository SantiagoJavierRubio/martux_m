"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SocialLinks from "./SocialLinks";
import { MEDIA_LINKS } from "./consts/mediaLinks";

export default function NavBar() {
  const path = usePathname();
  const getIsPath = (name: string) => {
    if (path.includes(name)) return true;
    return false;
  };

  const currentStyle = "cursor-default font-bold hover:no-underline";
  const { youtubeUrl, ...mediaLinks } = MEDIA_LINKS;
  return (
    <nav className="fixed z-50 top-0 inset-x-0 text-black h-24 flex flex-col items-stretch justify-between border-b-2 border-black/20 shadow-md bg-zinc-50">
      <div className="flex flex-row py-2 px-8 sm:px-16 items-center justify-between">
        <Link href="/">
          <h1 className="text-5xl font-extrabold">MARTUX_M</h1>
        </Link>
        <SocialLinks {...mediaLinks} size={22} className="hidden sm:flex" />
      </div>
      <div className="flex items-center justify-evenly py-1">
        <Link
          className={`hover:underline ${getIsPath("music") && currentStyle}`}
          href="/work/music"
        >
          Music
        </Link>
        <Link
          className={`hover:underline ${getIsPath("visual") && currentStyle}`}
          href="/work/visual"
        >
          Visual arts
        </Link>
        <Link
          className={`hover:underline ${getIsPath("about") && currentStyle}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`hover:underline ${getIsPath("calendar") && currentStyle}`}
          href="/calendar"
        >
          Events
        </Link>
        <Link className="hover:underline" href="#footer">
          Contact
        </Link>
      </div>
    </nav>
  );
}
