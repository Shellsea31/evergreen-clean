import React from "react";

//A basic footer with potential links
const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="google.com" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link px-2 text-muted">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#appts" className="nav-link px-2 text-muted">
                Appointments
              </a>
            </li>
          </ul>

          <p className="text-center text-muted" id="contact">
            Contact us:
          </p>
          <p className="text-center text-muted">Phone: 408-836-8483</p>
          <p className="text-center text-muted">
            Email: duniavbarrera@gmail.com
          </p>
          <p className="text-center text-muted">Based in Olympia, WA</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
