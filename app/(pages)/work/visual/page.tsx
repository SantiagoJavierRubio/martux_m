import React from "react";
import { promises as fs } from "fs";
import VisualItem from "./components/VisualItem";
import { WorkData } from "../utils/workdata";

export default async function Visual() {
  const file = await fs.readFile(
    process.cwd() + "/app/(pages)/work/data.json",
    "utf8"
  );
  const data = JSON.parse(file) as WorkData;
  return (
    <div className="flex flex-col grow p-8 relative overflow-hidden">
      <h1 className="text-5xl uppercase ">Installations & digital art</h1>
      <div className="grow grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 my-6">
        {data.visual.map((work) => (
          <VisualItem key={work.title} {...work} />
        ))}
      </div>
    </div>
  );
}
