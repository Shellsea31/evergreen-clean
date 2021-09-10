import React from "react";
import { Link } from "react-router-dom";

//A basic footer with potential links
const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="/" className="nav-text nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-text nav-link px-2 text-muted">
                About
              </a>
            </li>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <p
                  href="#faq"
                  className="nav-text nav-link px-2 text-muted"
                >
                  FAQ
                </p>
              </li>
            </Link>
            <li className="nav-item">
              <a href="/#appts" className="nav-text nav-link px-2 text-muted">
                Appointments
              </a>
            </li>
          </ul>

          <p className="nav-text text-center text-muted" id="contact">
            Contact us:
          </p>
          <p className="nav-text text-center text-muted">Phone: 408-836-8483</p>
          <p className="nav-text text-center text-muted">
            Email: duniavbarrera@gmail.com
          </p>
          <p className="nav-text text-center text-muted">
            Based in Olympia, WA
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
