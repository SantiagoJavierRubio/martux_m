import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GOOGLE_API_KEY: z.string().min(1),
    GOOGLE_CALENDAR_ID: z.string().min(1),
    HOST_URL: z.string().url().min(1),
  },
  client: {},
  runtimeEnv: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_CALENDAR_ID: process.env.GOOGLE_CALENDAR_ID,
    HOST_URL:
      process.env.NODE_ENV === "production"
        ? process.env.HOST_URL
        : "http://localhost:3000",
  },
});
