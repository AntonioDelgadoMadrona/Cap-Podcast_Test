// DEPENDENCIES
import { Link } from "react-router-dom";
// HOOKS
import { useFetching } from "../hooks/useFetching";
// COMPONENTS
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Loader } from "../components/loader/loader";
// STYLES
import "./layout.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isFetching } = useFetching();
  return (
    <>
      <Header />
      <main>
        <div className="children-header">
          <Link to="/">
            <h3>Podcaster</h3>
          </Link>
          {isFetching && <Loader />}
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
