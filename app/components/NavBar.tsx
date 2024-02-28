"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

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
        <Link href="/">
          <h1 className="text-5xl font-extrabold">MARTUX_M</h1>
        </Link>
        <div className="items-center gap-4 hidden sm:flex">
          <Link
            href="https://www.instagram.com/martux_m"
            className="hover:text-instagram transition-colors"
            target="_blank"
          >
            <FaInstagram size={22} />
          </Link>
          <Link
            href="https://open.spotify.com/artist/6Swewarx8jg2mFGrToPPZm"
            className="hover:text-spotify transition-colors"
            target="_blank"
          >
            <FaSpotify size={22} />
          </Link>
          {/* <Link
            href="https://www.youtube.com/user/martuxM"
            className="hover:text-red-600 transition-colors"
            target="_blank"
          >
            <FaYoutube size={24} />
          </Link> */}
          <Link
            href="https://soundcloud.com/martuxm"
            className="hover:text-soundcloud transition-colors"
            target="_blank"
          >
            <FaSoundcloud size={24} />
          </Link>
          <Link
            href="https://music.apple.com/us/artist/martux-m/1468193451"
            className="hover:text-applemusic transition-colors"
            target="_blank"
          >
            <SiApplemusic size={22} />
          </Link>
        </div>
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
