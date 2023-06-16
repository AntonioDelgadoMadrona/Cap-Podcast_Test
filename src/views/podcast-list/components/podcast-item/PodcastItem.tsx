// DEPENDENCIES
import { Link } from "react-router-dom";
// INTERFACES
import { PodcastListItemType } from "../../../../types";
// STYLES
import "./PodcastItem.css";

export function PodcastItem({ podcast }: { podcast: PodcastListItemType }) {
  const { id, artistName, image, name } = podcast;
  return (
    <article className="podcast-list-item">
      <Link to={`/podcast/${id}`}>
        <img src={image} alt={artistName} />
        <p className="title">{name.length > 30 ? name?.slice(0, 30) + "..." : name}</p>
        <p className="author">Author: {artistName}</p>
      </Link>
    </article>
  );
}
