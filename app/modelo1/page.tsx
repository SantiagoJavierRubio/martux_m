import React from "react";
import SectionContainer from "../_components/common/SectionContainer";
import Section from "../_components/common/Section";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";

export default function Modelo1() {
  return (
    <SectionContainer>
      <Section className="bg-zinc-950 h-screen relative flex flex-col items-center justify-center text-center px-24">
        <div className="absolute inset-1/2 aspect-square max-w-full h-full -translate-y-1/2 -translate-x-1/2">
          <Image
            src="/eclipse1.jpg"
            fill
            alt="art image"
            objectFit="cover"
            className="opacity-95"
          />
          <div className="w-full h-full relative object-cover bg-gradient-radial from-80% from-transparent to-95% to-zinc-950" />
        </div>
        <div className="z-20">
          <h1 className="text-4xl font-bold text-white">Martux_M</h1>
        </div>
        <Link
          href="#main"
          className="absolute bottom-4 inset-x-0 flex items-center justify-center animate-bounce text-white"
        >
          <ChevronDown />
        </Link>
      </Section>
      <Section
        id="info"
        className="bg-gradient-to-b relative justify-evenly gap-6 from-zinc-950 from-75% to-transparent flex items-center md:px-24"
      >
        <div
          id="main"
          className="absolute top-0 inset-x-0 text-white h-12 flex items-center justify-evenly"
        >
          <Link className="hover:underline" href="/modelo1/work/music">
            Work
          </Link>
          <Link className="hover:underline" href="#about">
            About
          </Link>
          <Link className="hover:underline" href="/modelo1/calendar">
            Upcoming
          </Link>
          <Link className="hover:underline" href="#contact">
            Contact
          </Link>
        </div>
        <Image
          src="/profile1.jpg"
          width={450}
          height={450}
          alt="profile picture"
          className="rounded-full"
        />
        <h4 className="max-w-64 text-lg text-white flex-grow">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi
          dolorum dolore asperiores pariatur repudiandae accusamus excepturi ex
          sit fugiat tenetur beatae quae assumenda recusandae labore in aliquid,
          ipsam officiis?
        </h4>
        <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-6">
          <Link
            href="https://www.instagram.com/martux_m"
            className="hover:text-pink-700 transition-colors"
            target="_blank"
          >
            <FaInstagram size={28} />
          </Link>
          <Link
            href="https://open.spotify.com/artist/6Swewarx8jg2mFGrToPPZm"
            className="hover:text-green-600 transition-colors"
            target="_blank"
          >
            <FaSpotify size={28} />
          </Link>
          <Link
            href="https://www.youtube.com/user/martuxM"
            className="hover:text-red-600 transition-colors"
            target="_blank"
          >
            <FaYoutube size={28} />
          </Link>
        </div>
      </Section>
      <Section className="flex relative flex-col gap-12 items-center justify-center md:px-24">
        <Link
          href="#main"
          className="absolute top-4 inset-x-0 flex items-center justify-center animate-bounce"
        >
          <ChevronUp />
        </Link>
        <h2 id="about" className="text-3xl font-bold">
          About
        </h2>
        <div className="grid grid-cols-5 gap-6">
          <p className="col-span-3 col-start-3 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vero
            esse ipsam, cupiditate voluptate ut consequuntur, accusamus eligendi
            laborum nobis soluta illum sequi necessitatibus debitis? Dolorum
            perferendis cumque eum sequi.
          </p>
          <p className="col-span-3 col-start-1 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vero
            esse ipsam, cupiditate voluptate ut consequuntur, accusamus eligendi
            laborum nobis soluta illum sequi necessitatibus debitis? Dolorum
            perferendis cumque eum sequi.
          </p>
          <p className="col-span-3 col-start-3 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vero
            esse ipsam, cupiditate voluptate ut consequuntur, accusamus eligendi
            laborum nobis soluta illum sequi necessitatibus debitis? Dolorum
            perferendis cumque eum sequi.
          </p>
        </div>
      </Section>
      <Section className="relative overflow-hidden flex items-center justify-start bg-zinc-950 flex-col">
        <Link
          href="#main"
          id="contact"
          className="absolute top-4 inset-x-0 flex items-center z-50 justify-center animate-bounce text-white"
        >
          <ChevronUp />
        </Link>
        <h4 className="text-2xl mt-24 font-bold text-white z-30">Contact</h4>
        <a
          className="text-white hover:underline z-30"
          href="mailto: abc@example.com"
        >
          abc@example.com
        </a>
        <video
          src="/live-video.mp4"
          className="m-auto absolute inset-0"
          autoPlay
          muted
          loop
        />
      </Section>
    </SectionContainer>
  );
}
