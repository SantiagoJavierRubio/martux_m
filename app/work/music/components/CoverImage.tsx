"use client";

import React, { useState } from "react";
import Image from "next/image";
import { convertToSrc } from "../../utils/convertToGoogleImageSrc";

export default function CoverImage({
  alt,
  url,
}: {
  alt: string;
  url?: string;
}) {
  const [imgSrc, setImgSrc] = useState(convertToSrc(url));
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="relative aspect-square rounded-md overflow-hidden col-span-1">
      <div
        className={`absolute opacity-95 inset-0 from-gray-400 from-60% to-gray-300 bg-gradient-to-b animate-pulse ${
          !loading && "hidden"
        }`}
      />
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={`object-cover transition-all ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        onError={() => {
          setImgSrc("https://static.thenounproject.com/png/1554489-200.png");
        }}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
