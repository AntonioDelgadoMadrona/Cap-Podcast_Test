// SERVICES
import { getPodcastListService } from "../services/podcast-list.service";
// UTILS
import { formatPodcastList } from "../apiUtils";

export async function getPodcastListHandler() {
  const response = await getPodcastListService();
  if (response?.contents) {
    return formatPodcastList(JSON.parse(response.contents)?.feed?.entry ?? []);
  } else {
    return [];
  }
}
