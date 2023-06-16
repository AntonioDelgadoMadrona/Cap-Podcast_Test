// DEPENDENCIES
import { vi } from "vitest";
import { render, screen } from "../utils/test-utils";
// COMPONENTS
import { Layout } from "./layout";
// MOCKS
vi.mock("./components/header/header", () => ({
  Header: () => <header>Mock Header</header>,
}));
vi.mock("./components/footer/footer", () => ({
  Footer: () => <footer>Mock Footer</footer>,
}));

describe("Layout component", () => {
  test("renders Header and Footer correctly", () => {
    render(<Layout>Application</Layout>);

    const header = screen.findByRole("header");
    const footer = screen.findByRole("footer");

    expect(header).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  test("renders the children correctly", () => {
    render(
      <Layout>
        <div data-testid="mock-children">Mock Children</div>
      </Layout>
    );

    const children = screen.getByTestId("mock-children");

    expect(children).toBeInTheDocument();
  });
});
