"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Layout() {
  const path = usePathname();
  const isMusic = path.includes("music");
  const isVisual = path.includes("visual");
  return (
    <nav className="flex items-center justify-evenly p-4 relative">
      <div className="absolute left-4 inset-y-0 flex items-center justify-center gap-4">
        <Link href="/modelo1#main">
          <Home />
        </Link>
        <h1 className="font-bold">Work</h1>
      </div>
      <Link
        href="/modelo1/work/music"
        className={`${isMusic ? "underline" : "no-underline"}`}
      >
        Music
      </Link>
      <Link
        href="/modelo1/work/visual"
        className={`${isVisual ? "underline" : "no-underline"}`}
      >
        Digital art & installations
      </Link>
    </nav>
  );
}
