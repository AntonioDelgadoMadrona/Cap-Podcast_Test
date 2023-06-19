// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
// COMPONENTS
import { PodcastList } from "./PodcastList";
// MOCKS
vi.mock("./hooks/usePodcastList", () => ({
  usePodcastList: () => ({
    podcastItems: [
      { id: 1, name: "Podcast 1", artistName: "Artist 1" },
      { id: 2, name: "Podcast 2", artistName: "Artist 2" },
      { id: 3, name: "Podcast 3", artistName: "Artist 3" },
    ],
    handleFilterPodcastList: vi.fn(),
  }),
}));
vi.mock("./components/search-bar/SearchBar", () => ({
  SearchBar: () => <form data-testid="search-bar">Mock SearchBar</form>,
}));
vi.mock("./components/podcast-item/PodcastItem", () => ({
  PodcastItem: () => <article data-testid="podcast-items">Mock PodcastItem</article>,
}));

describe("PodcastList component", () => {
  test("renders podcast list component", () => {
    render(<PodcastList />);

    const searchBarElement = screen.getByTestId("search-bar");
    expect(searchBarElement).toBeInTheDocument();

    const podcastItemsElement = screen.getAllByTestId("podcast-items");
    expect(podcastItemsElement.length).toBe(3);
  });
});
