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
  return (
    <div className="relative aspect-square rounded-md overflow-hidden col-span-1">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        placeholder="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        onError={() => {
          setImgSrc("https://static.thenounproject.com/png/1554489-200.png");
        }}
      />
    </div>
  );
}
