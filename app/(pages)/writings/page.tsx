import React from "react";
import interviewsCover from "@/public/fotos/Martux 3.jpg";

import { CoverImageSection } from "../components/CoverImageSection";

export default async function Music() {
  return (
    <CoverImageSection
      title="Interviews & writings"
      imgSource={interviewsCover}
      imgAltText="Martux_m sitting in front of the camera"
      imgSizes={{ width: 1400, height: 1400 }}
      className="gap-8 pt-20"
      imgStyles="object-top"
    >
      <div className="min-h-svh">
        <h1>Escrito de ejemplo n1</h1>
        <h1>Escrito de ejemplo n2</h1>
        <h1>Escrito de ejemplo n3</h1>
      </div>
    </CoverImageSection>
  );
}
