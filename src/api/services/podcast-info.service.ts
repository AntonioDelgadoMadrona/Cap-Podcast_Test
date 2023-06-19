// CONFIG
import { get } from "../config";

export async function getPodcastInfoService(podcastId: string) {
  return get({
    endpoint: `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&attributes=all&entity=podcastEpisode&limit=10&sort=recent`,
  });
}
