"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VisualEntry } from "../../utils/workdata";
import { convertToSrc } from "../../utils/convertToGoogleImageSrc";
import { CgClose } from "react-icons/cg";
import { convertToEmbed } from "../../utils/convertToEmbedVideo";

export default function VisualItem({
  title,
  year,
  author,
  image,
  description,
  youtubeUrl,
  vimeoUrl,
}: VisualEntry) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    if (!open) setOpen(true);
  };
  return (
    <div
      className={`${
        open
          ? "absolute inset-0 z-20"
          : "relative group aspect-square rounded-md overflow-hidden cursor-pointer"
      } transition-all`}
      onClick={handleOpen}
    >
      {!open && (
        <div className="absolute inset-0 bg-zinc-950/55 z-10 text-white text-center font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="animate-pulse">{title}</span>
        </div>
      )}
      <Image
        src={convertToSrc(image)}
        alt={title}
        fill
        className={"group-hover:blur-sm object-cover"}
      />
      {open && (
        <div className="relative w-full h-full bg-black/80 backdrop-blur-lg z-50">
          <button
            className="absolute top-4 left-4 text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <CgClose size={42} />
          </button>
          <div className="flex flex-col text-white items-center h-full justify-start gap-5 py-4 max-w-5xl m-auto">
            <h3 className="text-5xl font-bold">{title}</h3>
            <p className="text-lg italic">
              {author} - {year}
            </p>
            <p className="text-xl">{description}</p>
            {youtubeUrl && (
              <iframe
                title="YouTube video player"
                src={convertToEmbed(youtubeUrl, "youtube")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full max-w-3xl"
              />
            )}
            {vimeoUrl && !youtubeUrl && (
              <iframe
                title="Vimeo video player"
                src={convertToEmbed(vimeoUrl, "vimeo")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video w-full max-w-3xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
