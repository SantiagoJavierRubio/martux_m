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
}: MusicEntry) {
  return (
    <div className="grow w-full grid grid-cols-4 gap-4">
      <CoverImage url={image} alt={title + " cover"} />
      <div className="grow h-full flex flex-col col-span-3 col-start-2 justify-center gap-2">
        <h3 className="font-bold text-2xl my-2">
          {title} <span className="font-normal text-xl">- {author}</span>
        </h3>
        <p>{description}</p>
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
