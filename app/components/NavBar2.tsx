"use client";

import type { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const currentStyle = "cursor-default font-bold hover:no-underline";
const defaultStyles =
  "font-archivo tracking-wider fixed z-50 top-0 px-16 inset-x-0 text-zinc-950 h-16 flex items-center justify-between border-b-2 border-black/20 shadow-md bg-zinc-50";

export default function NavBar2({ className }: HTMLAttributes<HTMLDivElement>) {
  const path = usePathname();
  const getIsPath = (name: string) => {
    if (path.includes(name)) return true;
    return false;
  };
  return (
    <nav className={twMerge(defaultStyles, className)}>
      <Link href="/#home" className="h-full flex items-center">
        <Image
          src="/logos/LogoEsteso.png"
          alt="Martux_M logo"
          width={932}
          height={244}
          className="w-40 pt-1"
        />
        {/* <h1 className="text-xl font-extrabold text-zinc-950/40 tracking-widest">
          MARTUX_M
        </h1> */}
      </Link>
      <div className="flex items-center underline-offset-4 text-zinc-700 justify-end gap-12 uppercase text-lg text-black/80">
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
