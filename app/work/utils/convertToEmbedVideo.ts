const VIDEO_SRC = {
  youtube: {
    match: "?v=",
    url: "https://www.youtube.com/embed/",
  },
  vimeo: {
    match: ".com/",
    url: "https://player.vimeo.com/video/",
  },
} as const;

type VideoSources = typeof VIDEO_SRC;

export function convertToEmbed(url: string, source: keyof VideoSources) {
  const id = url.split(VIDEO_SRC[source].match)[1];
  return VIDEO_SRC[source].url + id;
}
