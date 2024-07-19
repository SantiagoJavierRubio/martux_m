import React from "react";
import interviewsCover from "@/public/fotos/Martux 3.jpg";

import { CoverImageSection } from "../components/CoverImageSection";
import Writing from "./Writing";

const files = [
  "Nebula.html",
  'Be masterpieces by Martux_m.html',
  'Hyperbody by Martux_m.html',
  'Installation Controllo e Divenire by Martux_m.html',
  'interview Martux_m about Metaxu.html',
  'Interview with Martux_m  by Rogelio Pereira.html',
  'Martux_m About Michel Chion.html',
  'Martux_m Philosophy.html',
  'Martux_m the sense of contemporaneity of sounds.html',
  'Massimo Canevacci About METAXU.html',
  'MJ Magazine - Martux_m.html',
  'Reflections Martux_m.html',
  "X-Scape Interview Martux_m  by Claudia D'Alonzo -  Digicult  Magazine.html", 
  'X-Scape Interview to Martux_m.html',
  'in-beat-ween  zone by Martux_m.html'
]

export default async function Music() {
  return (
    <CoverImageSection
      title="Interviews & writings"
      imgSource={interviewsCover}
      imgAltText="Martux_m sitting in front of the camera"
      imgSizes={{ width: 1400, height: 1400 }}
      className="gap-8 p-3 pt-20"
      imgStyles="object-top"
    >
      <div className="min-h-svh flex flex-col gap-12">
        {files.map(file => 
          <Writing key={file} title={file.replace('.html', '')} text={file} />
        )}
      </div>
    </CoverImageSection>
  );
}