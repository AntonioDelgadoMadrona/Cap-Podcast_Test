// DEPENDENCIES
import { Link } from "react-router-dom";
// STYLES
import "./PodcastDetails.css";
// TYPES
import { PodcastDetailsType } from "../../types";

export function PodcastDetails({ id, name, artistName, image, description }: PodcastDetailsType) {
  return (
    <aside className="summary-podcast">
      <Link to={`/podcast/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="summary-details">
        <h5>{name}</h5>
        <p>by {artistName}</p>
      </div>
      <div className="summary-description">
        <p>Description:</p>
        <span>{description}</span>
      </div>
    </aside>
  );
}
