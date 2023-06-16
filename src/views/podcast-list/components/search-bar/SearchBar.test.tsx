// DEPENDENCIES
import { vi } from "vitest";
import { render, screen, fireEvent } from "../../../../utils/test-utils";
// COMPONENTS
import { SearchBar } from "./SearchBar";

describe("SearchBar component", () => {
  test("renders correctly", () => {
    const podcastListLength = 10;
    const podcastListHandler = vi.fn();

    render(<SearchBar podcastListLength={podcastListLength} podcastListHandler={podcastListHandler} />);

    const span = screen.getByText("10");
    const input = screen.getByPlaceholderText("Filter podcast...");

    expect(span).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("calls podcastListHandler with search term", () => {
    const podcastListLength = 10;
    const podcastListHandler = vi.fn();

    render(<SearchBar podcastListLength={podcastListLength} podcastListHandler={podcastListHandler} />);

    const input = screen.getByPlaceholderText("Filter podcast...");
    fireEvent.change(input, { target: { value: "test" } });

    expect(podcastListHandler).toHaveBeenCalledWith("test");
  });
});
