// HOOKS
import { usePodcastInfo } from "./hooks/usePodcastInfo";
// COMPONENTS
import { PodcastDetails } from "../../components/podcast-details/PodcastDetails";
import { PodcastEpisodes } from "./components/podcast-episodes/PodcastEpisodes";
// STYLES
import "./PodcastInfo.css";

export function PodcastInfo() {
  const { podcastInfo } = usePodcastInfo();
  return (
    <div className="podcast-info">
      {podcastInfo?.podcastDetails && <PodcastDetails {...podcastInfo.podcastDetails} />}
      {podcastInfo?.podcastEpisodes && <PodcastEpisodes podcastEpisodes={podcastInfo.podcastEpisodes} />}
    </div>
  );
}
