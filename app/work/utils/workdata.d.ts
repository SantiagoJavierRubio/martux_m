type MusicEntry = {
  title: string;
  year: number;
  author: string;
  image: string;
  description: string;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl: string;
  soundcloudUrl?: string;
};

type VisualEntry = {
  title: string;
  year: number;
  author?: string;
  image: string;
  description: string;
};

export type WorkData = {
  music: MusicEntry[];
  visual: VisualEntry[];
};
