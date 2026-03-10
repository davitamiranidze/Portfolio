import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/approach">Approach</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
