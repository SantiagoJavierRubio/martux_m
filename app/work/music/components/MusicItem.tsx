import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSoundcloud, FaSpotify } from "react-icons/fa";
import { convertToSrc } from "../../utils/convertToGoogleImageSrc";
import CoverImage from "./CoverImage";

type MusicItemProps = {
  title: string;
  description: string;
  spotifyUrl?: string;
  soundCloudUrl?: string;
  image: string;
};

export default function MusicItem({
  description,
  image,
  title,
  soundCloudUrl,
  spotifyUrl,
}: MusicItemProps) {
  return (
    <div className="grow w-full grid grid-cols-4 gap-4">
      <CoverImage url={image} alt={title + " cover"} />
      <div className="grow h-full flex flex-col col-span-3 col-start-2 justify-center gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{description}</p>
        <div className="flex items-center gap-4 p-4">
          {spotifyUrl && (
            <Link
              href={spotifyUrl}
              className="hover:text-green-600 transition-colors"
            >
              <FaSpotify size={24} />
            </Link>
          )}
          {soundCloudUrl && (
            <Link
              href={soundCloudUrl}
              className="hover:text-orange-600 transition-colors"
            >
              <FaSoundcloud size={28} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
