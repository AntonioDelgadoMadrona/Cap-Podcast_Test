// DEPENDENCIES
import { Link, useParams } from "react-router-dom";
// TYPES
import { PodcastEpisodeType } from "../../../../types";
// STYLES
import "./PodcastEpisodes.css";

export function PodcastEpisodes({ podcastEpisodes }: { podcastEpisodes: PodcastEpisodeType[] }) {
  const { id: podcastId } = useParams();
  return (
    <section className="podcast-episodes">
      <div className="podcast-episodes-header">
        <span>Episodes: {podcastEpisodes.length}</span>
      </div>
      <div className="podcast-episodes-body">
        <div>
          <span>Title</span>
          <span>Date</span>
          <span>Duration</span>
        </div>
        <ul>
          {podcastEpisodes.length > 0 &&
            podcastEpisodes.map(({ id, name, releaseDate, duration }) => (
              <li key={id}>
                <Link to={`/podcast/${podcastId}/episode/${id}`}>{name}</Link>
                <span>{releaseDate}</span>
                <span>{duration}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
