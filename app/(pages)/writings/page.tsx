import React from "react";
import interviewsCover from "@/public/fotos/Martux 3.jpg";

import { CoverImageSection } from "../components/CoverImageSection";
import Writing from "./Writing";

const files = [
  '-Martusciello-Metaxu.html',
  'About a silent way 4.html',
  'About Olindo Fortino.html',
  'beat-ween zone.html',
  'Dissectio in Francese.html',
  'ENG About in a Silent Way 3-1.html',
  'Essere dei capolavori.html',
  'Interv auditorium.html',
  'intervista Blow Up.html',
  'intervista digicult.html',
  'Intervista Pereira.html',
  'Ipercorpo spaesamenti...html',
  'Le Tre bolle.html',
  'M-Chion.html',
  'Martux_m + acustico.html',
  'Metaxu - Intervista in 80F.html',
  'metaxu-di massimo Canevacci.html',
  'NON-DICE.html',
  'Presentazione Reminescence.html',
  'Scritto per paolo ruffini 2.html',
  'testo Reminescence 2.html'
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
      <div className="min-h-svh flex flex-col gap-6">
        {files.map(file => 
          <Writing key={file} title={file.replace('.html', '')} text={file} />
        )}
      </div>
    </CoverImageSection>
  );
}