// DEPENDENCIES
import { vi } from "vitest";
import { renderHook } from "../../../utils/test-utils";
// HOOKS
import { usePodcastInfo } from "./usePodcastInfo";
// MOCKS
vi.mock("../../../api/handlers/podcast-info.handler", () => ({
  getPodcastInfoHandler: () => Promise.resolve([]),
}));

describe("usePodcastInfo", async () => {
  test("should provide the hook data", () => {
    const hookReturnProps = ["podcastInfo"];
    const { result } = renderHook(() => usePodcastInfo());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
