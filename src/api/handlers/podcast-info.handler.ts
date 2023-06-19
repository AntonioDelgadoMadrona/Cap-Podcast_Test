// SERVICES
import { getPodcastInfoService } from "../services/podcast-info.service";
// UTILS
import { formatPodcastDetails, formatPodcastEpisodes } from "../apiUtils";

export async function getPodcastInfoHandler(podcastId: string) {
  const response = await getPodcastInfoService(podcastId);
  if (response?.contents) {
    let podcastDetails = JSON.parse(response?.contents).results[0];
    podcastDetails = formatPodcastDetails(podcastDetails);
    let podcastEpisodes = JSON.parse(response?.contents).results.slice(1);
    podcastEpisodes = formatPodcastEpisodes(podcastEpisodes);
    return {
      podcastDetails,
      podcastEpisodes,
    };
  }
  return {};
}
