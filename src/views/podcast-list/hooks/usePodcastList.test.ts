// DEPENDENCIES
import { vi } from "vitest";
import { renderHook } from "../../../utils/test-utils";
// HOOKS
import { usePodcastList } from "./usePodcastList";
// MOCKS
vi.mock("../../../api/handlers/podcast-list.handler", () => ({
  getPodcastListHandler: () => Promise.resolve([]),
}));

describe("usePodcastList", async () => {
  test("should provide the hook data", () => {
    const hookReturnProps = ["handleFilterPodcastList", "podcastItems"];
    const { result } = renderHook(() => usePodcastList());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
