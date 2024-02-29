import Link from "next/link";
import React, { type HTMLAttributes } from "react";
import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { twMerge } from "tailwind-merge";

type SocialLinkProps = {
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  soundcloudUrl?: string;
  instagramUrl?: string;
  size: number;
} & HTMLAttributes<HTMLDivElement>;

export default function SocialLinks({
  soundcloudUrl,
  spotifyUrl,
  appleUrl,
  youtubeUrl,
  instagramUrl,
  size,
  className,
  ...props
}: SocialLinkProps) {
  return (
    <div className={twMerge("flex items-center gap-4", className)} {...props}>
      {instagramUrl && (
        <Link
          href={instagramUrl}
          className="hover:text-instagram transition-colors"
          target="_blank"
        >
          <FaInstagram size={size} />
        </Link>
      )}
      {spotifyUrl && (
        <Link
          href={spotifyUrl}
          target="_blank"
          className="hover:text-spotify transition-colors"
        >
          <FaSpotify size={size} />
        </Link>
      )}
      {soundcloudUrl && (
        <Link
          href={soundcloudUrl}
          target="_blank"
          className="hover:text-soundcloud transition-colors"
        >
          <FaSoundcloud size={size + 2} />
        </Link>
      )}
      {appleUrl && (
        <Link
          href={appleUrl}
          className="hover:text-applemusic transition-colors"
          target="_blank"
        >
          <SiApplemusic size={size} />
        </Link>
      )}
      {youtubeUrl && (
        <Link
          href={youtubeUrl}
          className="hover:text-red-600 transition-colors"
          target="_blank"
        >
          <FaYoutube size={size} />
        </Link>
      )}
    </div>
  );
}
