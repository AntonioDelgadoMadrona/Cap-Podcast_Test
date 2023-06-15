// DEPENDENCIES
import { Link } from "react-router-dom";
// STYLES
import "./header.css";

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}
