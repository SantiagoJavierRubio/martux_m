import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-5 w-full h-full grow">
      <div className="col-span-2 relative">
        <Image src="/profile1.jpg" alt="profile" fill objectFit="contain" />
      </div>
      <div className="col-span-3 col-start-3 flex flex-col items-center justify-center w-full gap-2 pt-8">
        <h3 className="text-lg">Meet the artist</h3>
        <h1 className="text-6xl font-extrabold">MARTUX_M</h1>
        <p className="py-8 px-4 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut commodi
          aliquid omnis, quia sapiente officiis qui enim provident expedita
          quibusdam veritatis natus voluptatum, voluptate non vero assumenda
          eveniet accusantium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quod a sit temporibus repudiandae dolorum similique
          repellat cupiditate pariatur, deserunt aperiam eos, amet, ipsa dolore
          sint? Modi similique nihil earum exercitationem?
        </p>
      </div>
    </div>
  );
}
