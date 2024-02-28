import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-44 bg-zinc-800 flex items-center justify-center text-center text-white flex-col gap-2 py-4"
    >
      <h6 className="text-3xl font-bold">Get in touch</h6>
      <a href="mailto: martuxm@gmail.com" className="text-lg hover:underline">
        martuxm@gmail.com
      </a>
      <div className="flex items-center gap-4 py-6">
        <Link
          href="https://www.instagram.com/martux_m"
          className="hover:text-instagram transition-colors"
          target="_blank"
        >
          <FaInstagram size={16} />
        </Link>
        <Link
          href="https://open.spotify.com/artist/6Swewarx8jg2mFGrToPPZm"
          className="hover:text-spotify transition-colors"
          target="_blank"
        >
          <FaSpotify size={16} />
        </Link>
        <Link
          href="https://soundcloud.com/martuxm"
          className="hover:text-soundcloud transition-colors"
          target="_blank"
        >
          <FaSoundcloud size={18} />
        </Link>
        <Link
          href="https://music.apple.com/us/artist/martux-m/1468193451"
          className="hover:text-applemusic transition-colors"
          target="_blank"
        >
          <SiApplemusic size={16} />
        </Link>
        <Link
          href="https://www.youtube.com/user/martuxM"
          className="hover:text-youtube transition-colors"
          target="_blank"
        >
          <FaYoutube size={16} />
        </Link>
      </div>
    </footer>
  );
}
