import React from "react";
import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";

import MusicItem from "./components/MusicItem";
import type { WorkData } from "../utils/workdata";

export default async function Music() {
  const file = await fs.readFile(
    process.cwd() + "/app/(pages)/work/data.json",
    "utf8"
  );
  const data = JSON.parse(file) as WorkData;

  return (
    <>
      <div className="bg-black w-full max-w-screen overflow-hidden max-h-screen h-screen relative">
        <Link href="#content" className="fixed inset-0 z-0">
          <Image
            src="/cover-music.jpg"
            alt="Music studio with console and keyboards"
            width={3024}
            height={3780}
            className="object-cover object-center w-full h-full"
          />
          <div className="fixed inset-0 h-full bg-black/50 flex items-center justify-center text-center">
            <h1 className="text-8xl font-semibold tracking-[1rem] text-zinc-50">
              MUSIC
            </h1>
          </div>
        </Link>
      </div>
      <section
        id="content"
        className="flex flex-col grow p-8 pt-16 bg-zinc-100 z-10"
      >
        <div className="grow p-6 flex flex-col items-stretch justify-stretch gap-6">
          {data.music.map((item) => (
            <MusicItem key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
