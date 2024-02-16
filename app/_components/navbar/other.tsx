import Link from "next/link";
import React from "react";

export default function other() {
  return (
    <div
      id="main"
      className="absolute top-0 inset-x-0 text-white h-12 flex items-center justify-evenly"
    >
      <Link className="hover:underline" href="/modelo1/work/music">
        Work
      </Link>
      <Link className="hover:underline" href="#about">
        About
      </Link>
      <Link className="hover:underline" href="/modelo1/calendar">
        Upcoming
      </Link>
      <Link className="hover:underline" href="#contact">
        Contact
      </Link>
    </div>
  );
}
