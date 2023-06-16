// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../../../utils/test-utils";
// COMPONENTS
import { PodcastItem } from "./PodcastItem";
// MOCKS
vi.mock("react-router-dom", () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe("PodcastItem component", () => {
  const podcast = {
    id: "1",
    artistName: "John Doe",
    image: "image-url",
    name: "Podcast Title",
  };

  test("renders podcast details correctly", () => {
    render(<PodcastItem podcast={podcast} />);

    const img = screen.getByRole("img");
    const title = screen.getByText(/Podcast Title/);
    const author = screen.getByText(/Author: John Doe/);

    expect(img).toHaveAttribute("src", "image-url");
    expect(img).toHaveAttribute("alt", "John Doe");
    expect(title).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });

  test("truncates long titles correctly", () => {
    const longTitlePodcast = {
      ...podcast,
      name: "This is a very long podcast title that should be truncated",
    };

    render(<PodcastItem podcast={longTitlePodcast} />);

    const title = screen.getByText(/This is a very long podcast ti.../);

    expect(title).toBeInTheDocument();
  });
});
