// STYLES
import "./SearchBar.css";

interface SearchBarProps {
  podcastListLength: number;
  podcastListHandler: (searchTerm: string) => void;
}

export function SearchBar({ podcastListLength, podcastListHandler }: SearchBarProps) {
  return (
    <form className="search-bar">
      <span>{podcastListLength}</span>
      <input type="text" placeholder="Filter podcast..." onChange={({ target }) => podcastListHandler(target.value)} />
    </form>
  );
}
