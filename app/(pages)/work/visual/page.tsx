import React from "react";
import { promises as fs } from "fs";
import VisualItem from "./components/VisualItem";
import { WorkData } from "../utils/workdata";
import { CoverImageSection } from "../../components/CoverImageSection";
import visualCover from "@/public/fotos/cover-visual.jpg";

export default async function Visual() {
  const file = await fs.readFile(
    process.cwd() + "/app/(pages)/work/data.json",
    "utf8"
  );
  const data = JSON.parse(file) as WorkData;
  return (
    <CoverImageSection
      title="Installations & digital art"
      imgSource={visualCover}
      imgAltText="Out of focus human figure with white background"
      imgSizes={{ width: 9600, height: 6376 }}
      className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 pt-20 pb-[100svh] mt-6 relative"
      imgStyles="object-bottom"
    >
      {data.visual.map((work) => (
        <VisualItem key={work.title} {...work} />
      ))}
    </CoverImageSection>
  );
}
