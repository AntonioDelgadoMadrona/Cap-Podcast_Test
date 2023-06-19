// SERVICES
import { getEpisodeInfoService } from "../services/episode-info.service";
// UTILS
import { formatPodcastDetails, formatEpisodeDetails } from "../apiUtils";

export async function getEpisodeInfoHandler(podcastId: string, episodeId: string) {
  const response = await getEpisodeInfoService(podcastId, episodeId);
  if (response?.contents) {
    const { results } = JSON.parse(response.contents);
    const podcastDetails = formatPodcastDetails(results[0]);
    const episodeDetails = formatEpisodeDetails(results, episodeId);
    return {
      podcastDetails,
      episodeDetails,
    };
  }
  return {};
}
