export type PodcastListItemType = {
  id: string;
  artistName: string;
  image: string;
  name: string;
};

export type PodcastDetailsType = {
  id: string;
  artistName: string;
  image: string;
  name: string;
  description: string;
};

export type PodcastEpisodeType = {
  id: string;
  name: string;
  releaseDate: string;
  duration: string;
};

export type EpisodeDetailsType = {
  id: string;
  name: string;
  previewUrl: string;
  description: string;
};
