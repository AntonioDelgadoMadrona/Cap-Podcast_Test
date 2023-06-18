// HOOKS
import { usePodcastList } from "./hooks/usePodcastList";
// COMPONENTS
import { SearchBar } from "./components/search-bar/SearchBar";
import { PodcastItem } from "./components/podcast-item/PodcastItem";
// STYLES
import "./PodcastList.css";

export function PodcastList() {
  const { podcastItems, handleFilterPodcastList } = usePodcastList();
  return (
    <div className="podcast-list">
      <SearchBar podcastListLength={podcastItems.length} podcastListHandler={handleFilterPodcastList} />
      <section>
        {podcastItems.map((podcastItem) => (
          <PodcastItem key={podcastItem.id} podcast={podcastItem} />
        ))}
      </section>
    </div>
  );
}
