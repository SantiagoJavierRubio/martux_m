import React from "react";
import { env } from "@/env";
import { Event } from "./components/Event";
import { getEvents } from "./getEvents";

export default async function Calendar() {
  const events = (await getEvents()) ?? [];
  return (
    <div className="divide-y-2 divide-gray-500/30">
      {events.reverse().map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </div>
  );
}
