import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaSoundcloud, FaSpotify } from "react-icons/fa";

type WithImage = {
  title: string;
  description: string;
  spotifyUrl?: string;
  soundCloudUrl?: string;
  imgUrl: string;
  video?: undefined;
};

type WithVideo = {
  title: string;
  description: string;
  spotifyUrl?: string;
  soundCloudUrl?: string;
  imgUrl?: undefined;
  video: JSX.Element;
};

type WorkItemProps = (WithImage | WithVideo) & { mediaLeft?: boolean };

export default function WorkItem({
  description,
  soundCloudUrl,
  spotifyUrl,
  title,
  imgUrl,
  video,
  mediaLeft = false,
}: WorkItemProps) {
  return (
    <article className="p-4 border-white border-2 rounded-lg min-h-96 max-h-screen grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl m-auto">
      <div
        className={`h-full flex flex-col gap-2 justify-evenly ${
          !mediaLeft ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <h4 className="text-center text-2xl font-bold">{title}</h4>
        <p>{description}</p>
        <div className="flex items-center justify-center gap-6">
          {spotifyUrl && (
            <Link
              href={spotifyUrl}
              className="text-white hover:text-green-600 transition-colors"
            >
              <FaSpotify size={24} />
            </Link>
          )}
          {soundCloudUrl && (
            <Link
              href={soundCloudUrl}
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaSoundcloud size={28} />
            </Link>
          )}
        </div>
      </div>
      <div
        className={`relative h-full flex items-center md:col-span-2 w-full ${
          mediaLeft
            ? "sm:order-1 sm:justify-start"
            : "sm:order-2 sm:justify-end"
        }`}
      >
        {video ?? (
          <Image
            src={imgUrl}
            alt={`${title} picture`}
            fill
            objectFit="contain"
          />
        )}
      </div>
    </article>
  );
}
