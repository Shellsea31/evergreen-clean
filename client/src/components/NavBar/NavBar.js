import React from "react";

// Basic menu, mobile responsive
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" style={{ color: "#629460" }}>
          Evergreen Cleaning
          <i className="fas fa-broom" style={{ color: "#629460" }}></i>
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
              <a href="/" className="btn" name="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" name="about" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" name="faq" href="#faq">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" name="appts" href="#appts">
                Appointments
              </a>
            </li>
            <li className="nav-item">
              <a className="btn" name="contact" href="#contact">
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
