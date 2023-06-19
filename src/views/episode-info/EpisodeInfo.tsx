// HOOKS
import { useEpisodeInfo } from "./hooks/useEpisodeInfo";
// COMPONENTS
import { PodcastDetails } from "../../components/podcast-details/PodcastDetails";
import { EpisodeDetails } from "./components/episode-details/EpisodeDetails";
// STYLES
import "./EpisodeInfo.css";

export function EpisodeInfo() {
  const { episodeInfo } = useEpisodeInfo();
  return (
    <div className="episode-info">
      {episodeInfo?.podcastDetails && <PodcastDetails {...episodeInfo.podcastDetails} />}
      {episodeInfo?.episodeDetails && <EpisodeDetails {...episodeInfo.episodeDetails} />}
    </div>
  );
}
