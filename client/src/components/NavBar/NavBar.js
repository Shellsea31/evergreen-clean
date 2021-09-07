import React from "react";

// Basic menu, mobile responsive
const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">Evergreen Cleaning</span>
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
              <button className="btn" name="home">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn" name="about">
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="btn" name="faq">
                FAQs
              </button>
            </li>
            <li className="nav-item">
              <button className="btn" name="appts">
                Appointments
              </button>
            </li>
            <li className="nav-item">
              <button className="btn" name="contact">
                Contact Us
              </button>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
