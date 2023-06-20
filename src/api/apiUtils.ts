// TYPES
import { EpisodeDetailsType, PodcastDetailsType, PodcastEpisodeType, PodcastListItemType } from "../types";
import {
  PodcastDetailsServerType,
  PodcastEpisodeServerType,
  PodcastListItemServerType,
  EpisodeDetailsServerType,
} from "./types";

export function formatPodcastList(data: PodcastListItemServerType[]): PodcastListItemType[] {
  return [...data].map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    artistName: podcast["im:artist"].label,
    image: podcast["im:image"][0].label,
    name: podcast["im:name"].label,
  }));
}

export function formatPodcastDetails(data: PodcastDetailsServerType): PodcastDetailsType {
  const { artistName, artworkUrl100, collectionId, collectionName } = data;
  return {
    artistName,
    id: collectionId,
    image: artworkUrl100,
    name: collectionName,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
}

export function formatPodcastEpisodes(data: PodcastEpisodeServerType[]): PodcastEpisodeType[] {
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

export function formatEpisodeDetails(data: EpisodeDetailsServerType[], episodeId: string): EpisodeDetailsType {
  const episodeDetails = data.find((item) => item.trackId === Number(episodeId));
  return {
    id: episodeDetails?.trackId || 0,
    name: episodeDetails?.trackName || "",
    previewUrl: episodeDetails?.previewUrl || "",
    description: episodeDetails?.description || "",
  };
}
