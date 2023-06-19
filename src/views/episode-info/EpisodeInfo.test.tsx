// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
// COMPONENTS
import { EpisodeInfo } from "./EpisodeInfo";
// MOCKS
vi.mock("./hooks/useEpisodeInfo", () => ({
  useEpisodeInfo: () => ({
    episodeInfo: {
      podcastDetails: {},
      episodeDetails: {},
    },
  }),
}));
vi.mock("../../components/podcast-details/PodcastDetails", () => ({
  PodcastDetails: () => <aside data-testid="podcast-details">Mock PodcastDetails</aside>,
}));
vi.mock("./components/episode-details/EpisodeDetails", () => ({
  EpisodeDetails: () => <section data-testid="episode-details">Mock EpisodeDetails</section>,
}));

describe("EpisodeInfo component", () => {
  test("renders episode info component", () => {
    render(<EpisodeInfo />);

    const podcastDetails = screen.getByTestId("podcast-details");
    expect(podcastDetails).toBeInTheDocument();

    const episodeDetails = screen.getByTestId("episode-details");
    expect(episodeDetails).toBeInTheDocument();
  });
});
