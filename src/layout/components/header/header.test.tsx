// DEPENDENCIES
import { render, screen } from "../../../utils/test-utils";
import { BrowserRouter } from "react-router-dom";
// COMPONENTS
import { Header } from "./header";

describe("Header component", () => {
  test("renders header with a link to home", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", { name: "Home" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");
  });
});
