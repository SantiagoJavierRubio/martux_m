import React from "react";
import { Event } from "./components/Event";
import { getEvents } from "./getEvents";

export default async function Calendar() {
  const events = (await getEvents()) ?? [];
  const prevIndex = events.reverse().findIndex((ev) => {
    ev.start && ev.start.dateTime && new Date(ev.start.dateTime) <= new Date();
  });

  const [upcoming, previous] = [
    events.slice(0, prevIndex),
    events.slice(prevIndex),
  ];
  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold text-center uppercase  underline underline-offset-8 decoration-1">
        Upcoming events
      </h2>
      <div className="mt-6 divide-y-2 divide-gray-500/30">
        {upcoming.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
      <h2 className="text-4xl font-bold text-center uppercase  underline underline-offset-8 decoration-1">
        Past events
      </h2>
      <div className="divide-y-2 divide-gray-500/30">
        {previous.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
