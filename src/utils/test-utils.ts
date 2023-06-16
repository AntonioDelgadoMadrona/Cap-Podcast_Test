// DEPENDENCIES
import { render, RenderOptions } from "@testing-library/react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return children;
};

const customRender = (
  ui: JSX.Element,
  options: RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement> | undefined = {}
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
