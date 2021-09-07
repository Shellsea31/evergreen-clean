import React from "react";

const FAQ = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };

  return (
    <div>
      <div
        className="card mb-3 bg-transparent border-0"
        id="faq"
        style={cardStyle}
      >
        <div className="row">
          <div className="col-md-6 mt-5">
            <h5 className="card-text">
              A few of our frequently asked Questions
            </h5>
            <i className="bi bi-arrow-right" style={{ fontSize: "50px" }}></i>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <p>
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  Why should I choose Evergreen Cleaning over your competitors?
                </a>
              </p>

              <div className="collapse" id="collapseExample1">
                <div className="card card-body bg-transparent border-0">
                  Answer 1
                </div>
              </div>
              <p>
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  Do you bring your own equipment and cleaning supplies?
                </a>
              </p>
              <div className="collapse" id="collapseExample2">
                <div className="card card-body bg-transparent border-0">
                  Answer 2
                </div>
              </div>

              <p>
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  Do I have to be home while you are cleaning?
                </a>
              </p>

              <div className="collapse" id="collapseExample3">
                <div className="card card-body bg-transparent border-0">
                  Answer 3
                </div>
              </div>
              <a href="/faq"> View More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
