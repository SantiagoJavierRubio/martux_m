"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SITES = [
  {
    name: "Home",
    url: "/modelo1",
    code: "%$",
  },
  {
    name: "Music",
    url: "/modelo1/work/music",
    code: "music",
  },
  {
    name: "Visual arts",
    url: "/modelo1/work/visual",
    code: "visual",
  },
  {
    name: "About",
    url: "/modelo1#about",
    code: "about",
  },
  {
    name: "Contact",
    url: "/modelo1#contact",
    code: "contact",
  },
];

const closedStyles =
  "rounded-full w-9 h-9 p-2 items-center justify-center cursor-pointer";
const openedStyles =
  "rounded-md w-36 h-fit flex-col items-stretch justify-start gap-2";

export default function Menu() {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (ev: PointerEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(ev.target as HTMLElement)
      ) {
        if (open) setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [menuRef, open]);

  return (
    <div
      className={`fixed left-5 top-5 sm:left-10 sm:top-10 z-50 bg-white flex transition-all ease-in-out ${
        open ? openedStyles : closedStyles
      }`}
      ref={menuRef}
    >
      {open ? (
        <>
          {SITES.map((site) => {
            if (path.includes(site.code)) return <></>;
            return (
              <Link
                href={site.url}
                key={site.code}
                className="pr-2 pl-4 py-1 hover:font-bold"
                onClick={() => setOpen(false)}
              >
                {site.name}
              </Link>
            );
          })}
        </>
      ) : (
        <MenuIcon onClick={() => setOpen(true)} />
      )}
    </div>
  );
}
