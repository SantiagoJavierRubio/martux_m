import Link from "next/link";
import Image from "next/image";
import NavBar2 from "@/app/components/NavBar2";
import { DifuminatedName } from "../components/DifuminatedName";

export default function Home() {
  return (
    <>
      <section className="bg-black h-screen max-h-screen w-full relative overflow-hidden z-0">
        <Link href="#home" className="fixed inset-0 z-0">
          <video
            src="/video/bellaciao.mp4"
            autoPlay
            poster="/video/bellaciao_stillframe.png"
            muted
            loop
            width={1921}
            height={1021}
            className="object-cover w-full h-full object-center"
          />
        </Link>
      </section>
      <section
        className="min-h-screen h-full w-full bg-zinc-50 z-10 relative"
        id="home"
      >
        <NavBar2 className="sticky w-full border-0" />
        <div className="absolute top-16 inset-x-0 bottom-0 bg-black">
          <Image
            src="/fotos/eclipse1.jpg"
            alt="eclipse work cover"
            width={740}
            height={740}
            className="object-cover object-center w-full h-full z-0"
          />
        </div>
        <div className="flex flex-col max-w-2xl m-auto gap-8 items-center justify-center h-screen">
          <Image
            src="/logos/LogoMini.png"
            alt="Logo Mx"
            width={500}
            height={500}
            className="invert w-1/4"
          />
          {/* <h1 className="text-[2.8rem] text-white z-10">
            <span className="blur-[3.8px]">MARTU</span>
            <span className="text-8xl blur-[1px] font-light font-lato opacity-40">
              X
            </span>
            <span className="blur-[3.8px]">_M</span>
          </h1> */}
          <p className="text-xl px-8 leading-9 text-center tracking-wider text-gray-200 z-10">
            MARTUX_M IS AN ITALIAN SOUND ARTIST, COMPOSER, PERFORMER, AND
            PRODUCER. HIS WORK EXPLORES THE REALMS OF ELECTRONIC MUSIC WITH A
            FOCUS ON INNOVATION AND EXPERIMENTATION, RESULTING IN UNIQUE
            SOUNDSCAPES AND A DIVERSE WORLD OF MUSICAL CREATIONS.
          </p>
        </div>
      </section>
    </>
  );
}
