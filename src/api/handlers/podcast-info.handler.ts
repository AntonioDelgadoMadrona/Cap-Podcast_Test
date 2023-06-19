// SERVICES
import { getPodcastInfoService } from "../services/podcast-info.service";
// UTILS
import { formatPodcastDetails, formatPodcastEpisodes } from "../apiUtils";

export async function getPodcastInfoHandler(podcastId: string) {
  const response = await getPodcastInfoService(podcastId);
  if (response?.contents) {
    const { results } = JSON.parse(response.contents);
    const podcastDetails = formatPodcastDetails(results[0]);
    const podcastEpisodes = formatPodcastEpisodes(results.slice(1));
    return {
      podcastDetails,
      podcastEpisodes,
    };
  }
  return {};
}
