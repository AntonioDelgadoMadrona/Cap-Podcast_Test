// UTILS
import { isHTML } from "../../../../utils/data-utils";
// TYPES
import { EpisodeDetailsType } from "../../../../types";
// STYLES
import "./EpisodeDetails.css";

export function EpisodeDetails({ name, description, previewUrl }: EpisodeDetailsType) {
  const desciptionContent = isHTML(description) ? descriptionHtml(description) : description;
  return (
    <section className="episode-details">
      <h4>{name}</h4>
      <p>{desciptionContent}</p>
      <div className="episode-details-audio">
        <audio controls>
          <source src={previewUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}

function descriptionHtml(description: string): JSX.Element {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
}
