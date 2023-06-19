// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
// COMPONENTS
import { PodcastInfo } from "./PodcastInfo";
// MOCKS
vi.mock("./hooks/usePodcastInfo", () => ({
  usePodcastInfo: () => ({
    podcastInfo: {
      podcastDetails: {},
      podcastEpisodes: [],
    },
  }),
}));
vi.mock("../../components/podcast-details/PodcastDetails", () => ({
  PodcastDetails: () => <aside data-testid="podcast-details">Mock PodcastDetails</aside>,
}));
vi.mock("./components/podcast-episodes/PodcastEpisodes", () => ({
  PodcastEpisodes: () => <section data-testid="podcast-episodes">Mock PodcastEpisodes</section>,
}));

describe("PodcastInfo component", () => {
  test("renders podcast info component", () => {
    render(<PodcastInfo />);

    const podcastDetails = screen.getByTestId("podcast-details");
    expect(podcastDetails).toBeInTheDocument();

    const podcastEpisodes = screen.getByTestId("podcast-episodes");
    expect(podcastEpisodes).toBeInTheDocument();
  });
});
