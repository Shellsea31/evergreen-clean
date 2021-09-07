import React from "react";

const Faq = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };

  return (
    <div className="card mb-3 bg-transparent bg-0" id="about" style={cardStyle}>
      <div className="row">
        <div className="col-md-6">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Why should I choose Evergreen Cleaning over your competitors?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">Answer 1</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Do you bring your own equipment and cleaning supplies?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">Answer 2</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Do I have to be home while you are cleaning?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">Answer 3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-check-label" for="exampleCheck1">
                Send us your questions!
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInput"
                aria-describedby="question"
              ></input>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
