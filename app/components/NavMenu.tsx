"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { HiMenu, HiX } from "react-icons/hi";

const currentStyle = "cursor-default font-bold";
const defaultStyles =
  "font-archivo tracking-wider fixed z-50 p-12 text-3xl inset-y-0 right-0 landscape:inset-x-0 landscape:max-h-svw origin-right text-zinc-950 flex flex-col border-b-2 border-black/20 bg-zinc-50 gap-6 transition-all";

export default function NavMenu({ className }: HTMLAttributes<HTMLDivElement>) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const path = usePathname();
  const getIsPath = (name: string) => {
    if (path.includes(name)) return true;
    return false;
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (ev: PointerEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(ev.target as HTMLElement)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [menuRef, setOpen]);

  return (
    <>
      <button
        className="fixed top-4 p-2 rounded-l-lg right-0 bg-white text-zinc-950 z-40 lg:hidden shadow-sm shadow-zinc-500"
        onClick={() => setOpen(true)}
      >
        <HiMenu size={36} />
      </button>
      <nav
        ref={menuRef}
        className={twMerge(
          defaultStyles,
          isOpen ? "scale-x-100" : "scale-x-0",
          className
        )}
      >
        <button
          className="absolute top-2 left-2"
          onClick={() => setOpen(false)}
        >
          <HiX size={36} />
        </button>
        <Link
          onClick={() => setOpen(false)}
          href="/#home"
          className="w-full mt-6"
        >
          <Image
            src="/logos/LogoEsteso.png"
            alt="Martux_M logo"
            width={932}
            height={244}
            className="w-40 pt-1"
          />
        </Link>
        <div className="flex flex-col portrait:divide-y-2 portrait:divide-y-gray-300 landscape:grid landscape:grid-cols-2">
          <Link
            onClick={() => setOpen(false)}
            className={`py-6 active:bold  ${
              getIsPath("music") && currentStyle
            }`}
            href="/work/music"
            target="_self"
          >
            Music
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={`py-6 active:bold underline-offset-2 ${
              getIsPath("visual") && currentStyle
            }`}
            href="/work/visual"
            target="_self"
          >
            Visual arts
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={`py-6 active:bold underline-offset-2 ${
              getIsPath("about") && currentStyle
            }`}
            href="/about"
            target="_self"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className={`py-6 active:bold underline-offset-2 ${
              getIsPath("writings") && currentStyle
            }`}
            href="/writings"
            target="_self"
          >
            Writings
          </Link>
          <Link
            onClick={() => setOpen(false)}
            className="py-6 active:bold underline-offset-2"
            href="#footer"
            target="_self"
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
