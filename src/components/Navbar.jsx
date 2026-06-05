import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        The Dining Room
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
          <Link to="/reservation">Reserve</Link>
        </li>
        <li>
          <Link to="/cart">🛒 Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <Link to="/reservation" className="book-btn">
        Book Table
      </Link>

    </nav>
  );
}

export default Navbar;