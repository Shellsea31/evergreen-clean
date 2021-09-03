import React from "react";

const FAQ = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };

  const introStyle = {
    fontFamily: "Staatliches, cursive",
  };
  return (
    <div>
      <div class="card mb-3 bg-transparent border-0" style={cardStyle}>
        <div class="row">
          <div class="col-md-6">
            <h5 class="card-text">A few of our frequently asked Questions</h5>
          </div>

          <div class="col-md-6">
            <div class="card-body">
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  Questions 1
                </a>
              </p>

              <div class="collapse" id="collapseExample1">
                <div class="card card-body">Answer 1</div>
              </div>
              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  Questions 2
                </a>
              </p>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body">Answer 2</div>
              </div>

              <p>
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample3"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample3"
                >
                  Questions 3
                </a>
              </p>

              <div class="collapse" id="collapseExample3">
                <div class="card card-body">Answer 3</div>
              </div>
              <a href="#" class="btn btn-primary">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
