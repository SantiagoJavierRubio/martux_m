import React from "react";
import SocialLinks from "./SocialLinks";
import { MEDIA_LINKS } from "./consts/mediaLinks";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-lvh/3 min-h-44 bg-zinc-900 flex items-center justify-center text-center text-white flex-col gap-2 py-8"
    >
      <h6 className="text-3xl font-bold">Get in touch</h6>
      <a href="mailto: martuxm@gmail.com" className="text-lg hover:underline">
        martuxm@gmail.com
      </a>
      <SocialLinks {...MEDIA_LINKS} size={18} className="py-6" />
    </footer>
  );
}
