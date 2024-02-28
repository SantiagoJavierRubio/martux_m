import { google } from "googleapis";
import { NextResponse } from "next/server";
import { env } from "@/env";

const GOOGLE_API_KEY = env.GOOGLE_API_KEY;
const GOOGLE_CALENDAR_ID = env.GOOGLE_CALENDAR_ID;

const client = google.auth.fromAPIKey(GOOGLE_API_KEY);
const calendar = google.calendar("v3");

export async function GET() {
  const result = await calendar.events
    .list({
      calendarId: GOOGLE_CALENDAR_ID,
      auth: client,
    })
    .then((res) => res.data);
  return NextResponse.json(result.items);
}
