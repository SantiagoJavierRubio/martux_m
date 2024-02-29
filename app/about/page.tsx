import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="grid grid-cols-5 w-full h-full grow">
      <div className="col-span-2 relative">
        <Image
          src="/profile1.jpg"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-3 col-start-3 flex flex-col items-center justify-center w-full gap-2 pt-8">
        <h3 className="text-lg">Meet the artist</h3>
        <h1 className="text-6xl font-extrabold">MARTUX_M</h1>
        <div className="p-8 text-justify leading-6">
          <p>
            <span className="font-semibold">Maurizio Martusciello</span>, also
            known as Martux_M, is an Italian electronic music musician,
            composer, and record producer. Hailing from Naples, he has played a
            pivotal role in shaping the European electronic music scene since
            the 1990s.
            <br /> With a career spanning over{" "}
            <Link href="/work/music" className="underline hover:text-blue-700">
              several albums and singles
            </Link>
            , both as a solo artist and with his group Martux_M Crew, he has
            left an indelible mark on the electronic scene.
            <br />
            His collaborative ventures include esteemed musicians such as Danilo
            Rea, Markus Stockhausen, Francesco Bearzatti, Giulio Maresca, Ramin
            Mahrami, Lymbic, Zeno, Kocleo, among others.
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
    </div>
  );
}
