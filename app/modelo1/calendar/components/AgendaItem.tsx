import { Calendar, Ticket } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type AgendaItemProps = {
  date: Date;
  title: string;
  description: string;
  imgUrl: string;
  url: string;
};

const dateFormatOptions = {
  dateStyle: "medium",
  timeStyle: "short",
} as const;

function parseDate(date: Date) {
  return (
    date.toLocaleDateString(undefined, { weekday: "short" }) +
    " " +
    date.toLocaleString(undefined, dateFormatOptions)
  );
}

export default function AgendaItem({
  date,
  description,
  title,
  url,
  imgUrl,
}: AgendaItemProps) {
  return (
    <article className="grid grid-cols-7 border-2 rounded-lg border-white w-full h-80 overflow-hidden">
      <div className="border-r-2 col-span-1 border-white p-2 flex flex-col gap-4 justify-center items-center">
        <Calendar size={30} />
        <p className="text-sm text-center">{parseDate(date)}</p>
      </div>
      <div className="flex h-full flex-col items-center justify-evenly col-span-3 p-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-wrap">{description}</p>
        <Link href={url} className="flex items-center gap-2">
          <Ticket size={16} />{" "}
          <span className="text-blue-600 underline">Get tickets</span>
        </Link>
      </div>
      <div className="border-white border-l-2 h-full relative col-span-3 overflow-hidden">
        <Image
          src={imgUrl}
          alt="background"
          fill
          objectFit="cover"
          className="blur-md"
        />
        <Image
          src={imgUrl}
          alt="Event picture"
          fill
          objectFit="contain"
          className="z-10"
          priority
        />
      </div>
    </article>
  );
}
