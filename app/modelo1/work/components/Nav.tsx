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
    <nav className="flex items-center justify-evenly p-2 relative">
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
