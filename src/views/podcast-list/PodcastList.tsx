// DEPENDENCIES
// HOOKS
// COMPONENTS
import { SearchBar } from "./components/search-bar/SearchBar";
import { PodcastItem } from "./components/podcast-item/PodcastItem";
// STYLES
import "./PodcastList.css";
import podcastItems from "../../assets/podcastList.json";

export function PodcastList() {
  const handleFilterPodcastList = (searchTerm: string) => {
    console.log(searchTerm);
  };
  return (
    <div className="podcast-list">
      <SearchBar podcastListLength={podcastItems.content.length} podcastListHandler={handleFilterPodcastList} />
      <section>
        {podcastItems.content.map((podcastItem) => (
          <PodcastItem key={podcastItem.id} podcast={podcastItem} />
        ))}
      </section>
    </div>
  );
}
