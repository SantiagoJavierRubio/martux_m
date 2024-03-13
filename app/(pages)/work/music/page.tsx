import React from "react";
import { promises as fs } from "fs";
import Link from "next/link";
import Image from "next/image";

import MusicItem from "./components/MusicItem";
import type { WorkData } from "../utils/workdata";
import { CoverImageSection } from "../components/CoverImageSection";

export default async function Music() {
  const file = await fs.readFile(
    process.cwd() + "/app/(pages)/work/data.json",
    "utf8"
  );
  const data = JSON.parse(file) as WorkData;

  return (
    <CoverImageSection
      title="Music"
      imgSource="/cover-music.jpg"
      imgAltText="Music studio with console and keyboards"
      imgSizes={{ width: 3024, height: 3780 }}
      className="gap-8 pt-20"
    >
      {data.music.map((item) => (
        <MusicItem key={item.title} {...item} />
      ))}
    </CoverImageSection>
  );
}
