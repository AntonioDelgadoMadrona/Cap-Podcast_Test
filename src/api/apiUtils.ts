// TYPES
import { PodcastListItemType } from "../types";

export function formatPodcastList(data: any[]): PodcastListItemType[] {
  return [...data].map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    artistName: podcast["im:artist"].label,
    image: podcast["im:image"][0].label,
    name: podcast["im:name"].label,
  }));
}
