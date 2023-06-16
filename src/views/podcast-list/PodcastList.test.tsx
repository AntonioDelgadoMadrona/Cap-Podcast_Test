// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { PodcastList } from "./PodcastList";
// MOCKS
vi.mock("../../assets/podcastList.json", async () => {
  const content = await vi.importActual("../../assets/podcastList.json");
  return content;
});
vi.mock("./components/search-bar/SearchBar", () => ({
  SearchBar: () => <form data-testid="mock-search-bar">Mock SearchBar</form>,
}));
vi.mock("./components/podcast-item/PodcastItem", () => ({
  PodcastItem: () => <article data-testid="mock-podcast-item">Mock PodcastItem</article>,
}));

describe("PodcastList component", () => {
  test("renders SearchBar & PodcastItem correctly", () => {
    render(<PodcastList />);

    const searchBar = screen.getByTestId("mock-search-bar");
    const podcastItems = screen.getAllByTestId("mock-podcast-item");

    expect(searchBar).toBeInTheDocument();
    expect(podcastItems.length).toBe(100);
  });
});
