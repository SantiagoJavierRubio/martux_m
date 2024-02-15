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
      <section className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl mt-8 mb-6">Upcoming events</h2>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <AgendaItem
            date={new Date()}
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
            url="kdjaskda"
            imgUrl="/profile1.jpg"
          />
          <AgendaItem
            date={new Date()}
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
            url="kdjaskda"
            imgUrl="/profile1.jpg"
          />
          <AgendaItem
            date={new Date()}
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
            url="kdjaskda"
            imgUrl="/profile1.jpg"
          />
          <AgendaItem
            date={new Date()}
            title="Lorem"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
            url="kdjaskda"
            imgUrl="/profile1.jpg"
          />
        </div>
      </section>
      <section className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl mt-8 mb-6">Previous events</h2>
        <AgendaItem
          date={new Date()}
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          url="kdjaskda"
          imgUrl="/eclipse1.jpg"
        />
        <AgendaItem
          date={new Date()}
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          url="kdjaskda"
          imgUrl="/profile1.jpg"
        />
        <AgendaItem
          date={new Date()}
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          url="kdjaskda"
          imgUrl="/profile1.jpg"
        />
        <AgendaItem
          date={new Date()}
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?"
          url="kdjaskda"
          imgUrl="/profile1.jpg"
        />
      </section>
    </main>
  );
}
