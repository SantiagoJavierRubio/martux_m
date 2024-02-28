import React from "react";
import Image from "next/image";
import parse from "react-html-parser";
import { MdLocationPin, MdOutlineCalendarToday } from "react-icons/md";

type Attachment = {
  fileId: string;
  title: string;
  mimeType: string;
};

export type GoogleCalendarEvent = {
  id: string;
  summary: string;
  description: string;
  location: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  attachments: Attachment[];
};

export function Event({
  summary,
  description,
  attachments,
  location,
  start,
}: GoogleCalendarEvent) {
  const [locationMain, ...locationRest] = location.split(",");
  const startDate = new Date(start.dateTime);
  return (
    <div className="w-full h-64 bg-gray-200 flex text-black">
      <h4>{summary}</h4>
      <p className="text-left">{parse(description)}</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${location}`}
        target="_blank"
        referrerPolicy="no-referrer"
        className="text-center flex items-center flex-col h-min hover:text-blue-700"
      >
        <div className="flex items-center">
          <MdLocationPin />
          <h6 className="font-bold">{locationMain}</h6>
        </div>
        <p className="text-sm italic">{locationRest.join(",")}</p>
      </a>
      <div>
        <MdOutlineCalendarToday /> {startDate.toLocaleString()}
      </div>
      {attachments?.length > 0 && (
        <div className="relative w-full max-w-3xl aspect-video">
          <Image
            src={`https://drive.google.com/thumbnail?id=${attachments[0].fileId}&sz=w1000`}
            alt={attachments[0].title}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
