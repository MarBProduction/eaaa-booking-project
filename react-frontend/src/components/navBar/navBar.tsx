import "./navBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav id="nav-wrapper">
      <NavLink
        to={"/booking"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
        id="booking-btn"
      >
        <span>|</span>Booking
      </NavLink>
      <NavLink
        to={"/my-bookings"}
        className={({ isActive }) =>
          isActive ? "nav-item active-nav-item" : "nav-item"
        }
        id="my-bookings-btn"
      >
        <span>|</span>My bookings
      </NavLink>
    </nav>
  );
}

export default NavBar;
