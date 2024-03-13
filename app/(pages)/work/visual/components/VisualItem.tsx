"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { VisualEntry } from "../../utils/workdata";
import { convertToSrc } from "../../utils/convertToGoogleImageSrc";
import { CgClose } from "react-icons/cg";
import { convertToEmbed } from "../../utils/convertToEmbedVideo";

export default function VisualItem({ ...entry }: VisualEntry) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "unset";
    }
  }, []);

  return (
    <>
      {open ? (
        <OpenedVisualItem handleClose={handleClose} {...entry} />
      ) : (
        <ClosedVisualItem
          image={entry.image}
          title={entry.title}
          handleOpen={handleOpen}
        />
      )}
    </>
  );
}

const OpenedVisualItem = ({
  title,
  year,
  author,
  image,
  description,
  youtubeUrl,
  vimeoUrl,
  handleClose,
}: VisualEntry & { handleClose: () => void }) => {
  return (
    <div className="fixed inset-0 top-16 w-full h-full flex items-center justify-center z-20">
      <Image
        src={convertToSrc(image)}
        alt={title}
        fill
        className="blur-sm object-cover"
      />
      <div className="relative w-full h-full min-h-svh bg-black/80 backdrop-blur-lg z-20 overflow-y-auto">
        <button
          className="sticky top-4 left-4 text-white cursor-pointer"
          onClick={handleClose}
        >
          <CgClose size={42} />
        </button>
        <div className="flex flex-col text-white items-center h-full justify-start gap-5 py-4 max-w-5xl m-auto mb-72">
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
    </div>
  );
};

const ClosedVisualItem = ({
  handleOpen,
  title,
  image,
}: {
  handleOpen: () => void;
  title: VisualEntry["title"];
  image: VisualEntry["image"];
}) => {
  return (
    <div
      className="relative group aspect-square rounded-md overflow-hidden cursor-pointer transition-all"
      onClick={handleOpen}
    >
      <div className="absolute inset-0 bg-zinc-950/65 z-10 text-gray-100 text-xl text-center font-bold flex items-center justify-center ">
        {title}
      </div>
      <Image
        src={convertToSrc(image)}
        alt={title}
        fill
        className="blur-sm object-cover"
      />
    </div>
  );
};
