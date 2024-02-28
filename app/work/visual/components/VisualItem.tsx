import Image from "next/image";
import Link from "next/link";
import React from "react";

type VisualItemProps = {
  imgUrl: string;
  name: string;
  id: string;
};

export default function VisualItem({ id, imgUrl, name }: VisualItemProps) {
  return (
    <Link
      href={`/modelo2/work/visual/${id}`}
      className="relative group w-full max-w-xl aspect-square rounded-md overflow-hidden"
    >
      <div className="absolute inset-0 bg-zinc-950/55 z-10 text-white text-center font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="animate-pulse">{name}</span>
      </div>
      <Image
        src={imgUrl}
        alt={name}
        fill
        objectFit="cover"
        className="group-hover:blur-sm"
      />
    </Link>
  );
}
