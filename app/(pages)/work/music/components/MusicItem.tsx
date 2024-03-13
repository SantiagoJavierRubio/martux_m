import React from "react";
import CoverImage from "./CoverImage";
import SocialLinks from "@/app/components/SocialLinks";
import { MusicEntry } from "../../utils/workdata";

export default function MusicItem({
  description,
  image,
  title,
  soundcloudUrl,
  spotifyUrl,
  appleUrl,
  youtubeUrl,
  author,
  label,
  year,
}: MusicEntry) {
  return (
    <div className="grow w-full grid grid-cols-4 gap-4 text-zinc-900">
      <CoverImage url={image} alt={title + " cover"} />
      <div className="grow h-full flex flex-col col-span-3 col-start-2 justify-center gap-2 leading-8 tracking-wide">
        <div className="my-2">
          <h3 className="font-semibold text-3xl mb-2">
            {title}
            <span className="px-2 font-normal text-xl">-</span>
            <span className="font-normal text-xl">{author}</span>
          </h3>
          <p className="text-lg">
            {year} - <span className="italic">{label}</span>
          </p>
        </div>
        <p className="text-lg leading-5 tracking-normal">{description}</p>
        <SocialLinks
          spotifyUrl={spotifyUrl}
          soundcloudUrl={soundcloudUrl}
          appleUrl={appleUrl}
          youtubeUrl={youtubeUrl}
          size={24}
          className="p-4"
        />
      </div>
    </div>
  );
}
