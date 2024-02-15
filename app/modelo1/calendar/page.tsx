import React from "react";
import AgendaItem from "./components/AgendaItem";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Agenda() {
  return (
    <main className="h-full min-h-screen overflow-hidden flex flex-col">
      <nav className="flex items-center justify-evenly p-4 relative w-full">
        <div className="absolute inset-x-0 w-full flex items-center justify-evenly gap-4">
          <Link href="/modelo1#main">
            <Home />
          </Link>
          <h1 className="font-bold">Agenda</h1>
          <Link className="hover:underline" href="/modelo1/work/music">
            Work
          </Link>
          <Link className="hover:underline" href="/modelo#about">
            About
          </Link>
          <Link className="hover:underline" href="/modelo#contact">
            Contact
          </Link>
        </div>
      </nav>
      <section>
        <h2>Upcoming events</h2>
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
      </section>
      <section>
        <h2>Past events</h2>
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
      </section>
    </main>
  );
}
