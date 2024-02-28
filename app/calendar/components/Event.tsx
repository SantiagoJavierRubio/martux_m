import React from "react";
import Image from "next/image";
import parse from "react-html-parser";
import { MdLocationPin, MdOutlineCalendarToday } from "react-icons/md";

const FALLBACK_IMG_ID = "1V8L15l2yj4guOCBCJFY-MZAghmbTzr1l";

type Attachment = {
  fileId: string;
  title: string;
  mimeType: string;
};

export type GoogleCalendarEvent = {
  id: string;
  summary: string;
  description: string;
  htmlLink: string;
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
  htmlLink,
}: GoogleCalendarEvent) {
  const [locationMain, ...locationRest] = location.split(",");
  const startDate = new Date(start.dateTime);
  const addToCalendarUrl = htmlLink.replace("?", "?action=TEMPLATE&tme");
  const hasAttachment = attachments?.length > 0;
  return (
    <div className="w-full h-lvh max-h-96 grid grid-cols-8 text-black py-6 p-2">
      <div className="flex flex-col items-center my-auto gap-4 col-span-2">
        <a
          href={addToCalendarUrl}
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex flex-col items-center justify-center font-semibold text-center gap-2"
        >
          <MdOutlineCalendarToday size={32} />
          <div>
            <p>{startDate.toLocaleDateString()}</p>
            <p>
              {startDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </a>
        {/* <hr className="bg-black w-1/4 h-0.5" /> */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${location}`}
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-center flex items-center flex-col h-min hover:text-blue-700"
        >
          <div className="flex items-center">
            <MdLocationPin size={28} />
            <h6 className="font-bold">{locationMain}</h6>
          </div>
          <p className="text-sm italic">{locationRest.join(",")}</p>
        </a>
      </div>
      <div className="flex flex-col justify-center gap-4 col-span-3">
        <h4 className="text-3xl font-bold uppercase">{summary}</h4>
        <p className="text-left line-clamp-6 lg:line-clamp-none">
          {parse(description)}
        </p>
      </div>
      <div className="relative h-full w-full col-span-3">
        <Image
          src={`https://drive.google.com/thumbnail?id=${
            hasAttachment ? attachments[0].fileId : FALLBACK_IMG_ID
          }&sz=w1000`}
          alt={
            hasAttachment
              ? attachments[0].title
              : "default calendar event picture"
          }
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
