// DEPENDENCIES
import { vi } from "vitest";
import { renderHook } from "../../../utils/test-utils";
// HOOKS
import { useEpisodeInfo } from "./useEpisodeInfo";
// MOCKS
vi.mock("../../../api/handlers/episode-info.handler", () => ({
  getEpisodeInfoHandler: () => Promise.resolve([]),
}));

describe("useEpisodeInfo", async () => {
  test("should provide the hook data", () => {
    const hookReturnProps = ["episodeInfo"];
    const { result } = renderHook(() => useEpisodeInfo());

    const keys = Object.keys(result.current);
    expect(keys.length).toBe(hookReturnProps.length);
    hookReturnProps.forEach((data) => expect(keys.includes(data)));
  });
});
