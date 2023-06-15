// DEPENDENCIES

// COMPONENTS
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
// STYLES
import "./layout.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
