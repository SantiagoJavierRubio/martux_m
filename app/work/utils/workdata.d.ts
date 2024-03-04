type MusicEntry = {
  title: string;
  year: number;
  author: string;
  label: string;
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
  youtubeUrl?: string;
  vimeoUrl?: string;
};

export type WorkData = {
  music: MusicEntry[];
  visual: VisualEntry[];
};
