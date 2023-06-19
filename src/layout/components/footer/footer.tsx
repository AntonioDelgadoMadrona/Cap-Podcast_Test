// DEPENDENCIES
import { Link } from "react-router-dom";
// STYLES
import viteLogo from "../../../assets/vite.svg";
import reactLogo from "../../../assets/react.svg";
import tsLogo from "../../../assets/ts.svg";
import "./footer.css";

export function Footer() {
  return (
    <footer>
      <p>
        Technical Test created by{" "}
        <Link to="https://tonii.dev" target="_blank">
          Antonio Delgado
        </Link>
      </p>
      <div>
        <Link to="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        +{" "}
        <Link to="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </Link>
        +{" "}
        <Link to="https://www.typescriptlang.org/" target="_blank">
          <img src={tsLogo} className="logo" alt="TypeScript logo" />
        </Link>
      </div>
    </footer>
  );
}
