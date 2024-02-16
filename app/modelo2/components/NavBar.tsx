"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

export default function NavBar() {
  const path = usePathname();
  const getIsPath = (name: string) => {
    if (path.includes(name)) return true;
    return false;
  };

  const currentStyle = "cursor-default font-bold hover:no-underline";
  return (
    <nav className="fixed z-50 top-0 inset-x-0 text-black h-24 flex flex-col items-stretch justify-between border-b-2 border-black/20 shadow-md bg-zinc-50">
      <div className="flex flex-row py-2 px-8 sm:px-16 items-center justify-between">
        <Link href="/modelo2">
          <h1 className="text-5xl font-extrabold">MARTUX_M</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://www.instagram.com/martux_m"
            className="hover:text-pink-700 transition-colors"
            target="_blank"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://open.spotify.com/artist/6Swewarx8jg2mFGrToPPZm"
            className="hover:text-green-600 transition-colors"
            target="_blank"
          >
            <FaSpotify size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/user/martuxM"
            className="hover:text-red-600 transition-colors"
            target="_blank"
          >
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-evenly py-1">
        <Link
          className={`hover:underline ${getIsPath("music") && currentStyle}`}
          href="/modelo2/work/music"
        >
          Music
        </Link>
        <Link
          className={`hover:underline ${getIsPath("visual") && currentStyle}`}
          href="/modelo2/work/visual"
        >
          Visual arts
        </Link>
        <Link
          className={`hover:underline ${getIsPath("about") && currentStyle}`}
          href="/modelo2/about"
        >
          About
        </Link>
        <Link
          className={`hover:underline ${getIsPath("calendar") && currentStyle}`}
          href="/modelo2/calendar"
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
