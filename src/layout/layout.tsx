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
      <main>
        <div className="children-header">
          <h3>Podcaster</h3>
          <span>🟢</span>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
