export type PodcastListItemServerType = {
  id: {
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
  "im:name": {
    label: string;
  };
};

export type PodcastDetailsServerType = {
  artistName: string;
  artworkUrl100: string;
  collectionId: string;
  collectionName: string;
};

export type PodcastEpisodeServerType = {
  trackId: string;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
};

export type EpisodeDetailsServerType = {
  trackId: number;
  trackName: string;
  previewUrl: string;
  description: string;
};
