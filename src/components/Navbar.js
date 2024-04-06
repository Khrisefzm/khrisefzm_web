import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Khrisefzm</div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div className={`menu ${isOpen ? "active" : ""}`}>
          <ul onClick={toggleMenu}>
            <li>
              <HashLink smooth exact to="/#about">
                About me
              </HashLink>
            </li>
            <li>
              <HashLink smooth exact to="/#projects">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth exact to="/#contact">
                Contact me
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
