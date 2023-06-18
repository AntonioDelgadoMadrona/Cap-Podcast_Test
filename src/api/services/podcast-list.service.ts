// CONFIG
import { get } from "../config";

export async function getPodcastListService() {
  return get({
    endpoint: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  });
}
