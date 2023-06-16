// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../../../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
// COMPONENTS
import { Footer } from "./footer";
// MOCKS
vi.mock("../../../assets/vite.svg");
vi.mock("../../../assets/react.svg");
vi.mock("../../../assets/ts.svg");

describe("Footer component", () => {
  test("renders the footer correctly", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const authorLink = screen.getByRole("link", { name: "Antonio Delgado" });
    const viteLink = screen.getByRole("link", { name: "Vite logo" });
    const reactLink = screen.getByRole("link", { name: "React logo" });
    const tsLink = screen.getByRole("link", { name: "TypeScript logo" });

    expect(authorLink).toHaveAttribute("href", "https://tonii.dev");
    expect(viteLink).toHaveAttribute("href", "https://vitejs.dev");
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
    expect(tsLink).toHaveAttribute("href", "https://www.typescriptlang.org/");
  });
});
