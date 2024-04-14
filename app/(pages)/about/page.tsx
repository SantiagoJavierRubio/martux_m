import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DifuminatedName } from "@/app/components/DifuminatedName";

export default function About() {
  return (
    <div className="grid grid-cols-5 w-full h-full grow relative text-black">
      <div className="absolute inset-0">
        <Image
          src="/fotos/Martux1.jpg"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
      {/* <div className="col-span-2 col-start-4 flex flex-col items-center justify-center w-full gap-2 pt-8"> */}
      <div className="col-span-full lg:col-span-1 col-start-1 p-16 my-12 flex items-center lg:block">
        <DifuminatedName
          className="text-zinc-950 m-auto text-4xl"
          centerStyles="blur-[0.6px]"
        />
      </div>
      <div className="p-6 mt-44 lg:mt-0 text-2xl py-12 lg:py-0 lg:pr-6 text-justify lg:text-xl leading-7 tracking-wide col-span-full col-start-1 lg:col-span-2 lg:col-start-4 z-20 bg-slate-50/75 lg:bg-transparent">
        <p>
          <span className="font-semibold">Maurizio Martusciello</span>, also
          known as Martux_M, is an Italian electronic music musician, composer,
          and record producer. Hailing from Naples, he has played a pivotal role
          in shaping the European electronic music scene since the 1990s.
          <br /> With a career spanning over{" "}
          <Link href="/work/music" className="underline hover:text-blue-700">
            several albums and singles
          </Link>
          , both as a solo artist and with his group Martux_M Crew, he has left
          an indelible mark on the electronic scene.
          <br />
          His collaborative ventures include esteemed musicians such as Danilo
          Rea, Markus Stockhausen, Francesco Bearzatti, Giulio Maresca, Ramin
          Mahrami, Lymbic, Zeno, Kocleo, Nils Petter Molvaer, among others.
        </p>
        <br />
        <p>
          Beyond his musical endeavors, Martux_M also delves into the realm of
          installations, seamlessly blending{" "}
          <Link href="/work/visual" className="underline hover:text-blue-700">
            audiovisual and digital art.
          </Link>
        </p>
        <br />
        <p>
          His multimedia works have garnered acclaim at prestigious festivals
          and events worldwide, including the Venice Biennale, El Sónar
          (Barcelona), the International Festival of Contemporary Music
          (Venice), Digital Life Festival (Rome), Festival RomaEuropa (Rome),
          Villette Numérique (Paris), and the MUTEK Festival in Canada and
          Argentina.
        </p>
      </div>
    </div>
    // </div>
  );
}
