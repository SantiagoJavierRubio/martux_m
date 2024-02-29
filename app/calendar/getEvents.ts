import { google } from "googleapis";
import { env } from "@/env";

const GOOGLE_API_KEY = env.GOOGLE_API_KEY;
const GOOGLE_CALENDAR_ID = env.GOOGLE_CALENDAR_ID;

const client = google.auth.fromAPIKey(GOOGLE_API_KEY);
const calendar = google.calendar("v3");

export async function getEvents() {
  const result = await calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    orderBy: "startTime",
    singleEvents: true,
    auth: client,
  });
  if (result.status !== 200) {
    throw new Error("Failed to fetch calendar data");
  }
  return result.data.items;
}
