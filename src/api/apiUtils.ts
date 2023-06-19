// TYPES
import { PodcastDetailsType, PodcastEpisodeType, PodcastListItemType } from "../types";

export function formatPodcastList(data: any[]): PodcastListItemType[] {
  return [...data].map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    artistName: podcast["im:artist"].label,
    image: podcast["im:image"][0].label,
    name: podcast["im:name"].label,
  }));
}

export function formatPodcastDetails(data: object): PodcastDetailsType {
  const { artistName, artworkUrl100, collectionId, collectionName }: any = data;
  return {
    artistName,
    id: collectionId,
    image: artworkUrl100,
    name: collectionName,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
}

export function formatPodcastEpisodes(data: any[]): PodcastEpisodeType[] {
  return [...data].map((episode) => {
    const { trackName, trackId, releaseDate = new Date(), trackTimeMillis = 10000 } = episode;
    return {
      id: trackId,
      name: trackName,
      releaseDate: new Date(releaseDate).toLocaleDateString(),
      duration: miliSecondsToMinutes(trackTimeMillis),
    };
  });
}

export function miliSecondsToMinutes(miliSeconds: number): string {
  const minutes = Math.floor(miliSeconds / 60000);
  const seconds = ((miliSeconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
}
