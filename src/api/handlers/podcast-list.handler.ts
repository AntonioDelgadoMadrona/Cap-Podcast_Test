// SERVICES
import { getPodcastListService } from "../services/podcast-list.service";
// UTILS
import { formatPodcastList } from "../apiUtils";

export async function getPodcastListHandler() {
  const response = await getPodcastListService();
  if (response?.contents) {
    const { feed } = JSON.parse(response.contents);
    return formatPodcastList(feed?.entry ?? []);
  }
  return [];
}
