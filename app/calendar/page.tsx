import React from "react";
import { env } from "@/env";
import { Event, GoogleCalendarEvent } from "./components/Event";
import Container from "../_components/common/Container";

async function getEvents(): Promise<GoogleCalendarEvent[]> {
  const res = await fetch(`${env.HOST_URL}/api/calendar`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

export default async function Calendar() {
  const events = await getEvents();
  return (
    <Container className="divide-y-2 divide-blue-500">
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </Container>
  );
}
