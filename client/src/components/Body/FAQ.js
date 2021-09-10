import React from "react";
import { Link, NavLink } from "react-router-dom";

const FAQ = () => {
  // const cardStyle = {
  //   minWidth: "auto",
  //   padding: "50px",
  //   backgroundColor: "#2a3d45",
  //   margin: "75px",
  // };

  return (
    <div className="card mb-3 border-0 rounded-0" id="faq">
      <div className="row">
        <div className="col-md-6 mt-5">
          <h5 className="card-text text-light">
            A few of our frequently asked Questions
          </h5>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p>
              <a
                className="faq-btn btn btn-outline-light text-light"
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                Why should I choose Evergreen Cleaning over your competitors?
              </a>
            </p>

            <div className="collapse text-light" id="collapseExample1">
              <div className="faq-text card card-body bg-transparent border-0">
                We offer a trustworthy service unique to your needs. Unlike most
                standard cleaning service, we are completely flexible and
                encourage our clients to communicate with us whenever something
                becomes inconvenient.
              </div>
            </div>
            <p>
              <a
                className="faq-btn btn btn-outline-light text-light "
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Do you bring your own equipment and cleaning supplies?
              </a>
            </p>
            <div className="collapse text-light" id="collapseExample2">
              <div className="faq-text card card-body bg-transparent border-0">
                Because we like to cater to your needs and want to be as
                versatile as possible with all our clients, we ask that you
                provide the supplies you believe are safe and best for your home
                or work space.
              </div>
            </div>

            <p>
              <a
                className="faq-btn btn btn-outline-light text-light"
                data-bs-toggle="collapse"
                href="#collapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Do I have to be home while you are cleaning?
              </a>
            </p>

            <div className="collapse text-light" id="collapseExample3">
              <div className="faq-text card card-body bg-transparent border-0">
                We love when there is trust between us and our clients. However,
                we recognize that it's not immediate. So, we have no problem
                with you being present at some or all the cleaning sessions.
              </div>
            </div>

            <Link to="/faq">
              <button className="faq-btn btn btn-light mt-3"> View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
