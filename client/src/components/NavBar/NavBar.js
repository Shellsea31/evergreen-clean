import React from "react";
import { Link } from "react-router-dom";

// Basic menu, mobile responsive
const NavBar = () => {
  const color = {
    color: "#629460",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" style={color}>
          Evergreen Cleaning
          <i className="fas fa-broom" style={color}></i>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-text btn" name="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-text btn" name="about" href="/#about">
                About
              </a>
            </li>
            <Link to="/faq">
              <li className="nav-item">
                <p className="nav-text btn" name="faq" href="/faq">
                  FAQs
                </p>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-text btn" name="appts" href="/#appts">
                Appointments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-text btn" name="contact" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
