import React from "react";

const Faq = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };

  return (
    <div className="card mt-5 mb-5 bg-transparent border-0" id="about" style={cardStyle}>
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
                <div className="accordion-body">
                  We offer a trustworthy service unique to your needs. Unlike
                  most standard cleaning service, we are completely flexible and
                  encourage our clients to communicate with us whenever
                  something becomes inconvenient.{" "}
                </div>
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
                <div className="accordion-body">
                  Because we like to cater to your needs and want to be as
                  versatile as possible with all our clients, we ask that you
                  provide the supplies you believe are safe and best for your
                  home or work space.{" "}
                </div>
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
                <div className="accordion-body">
                  We love when there is trust between us and our clients.
                  However, we recognize that it's not immediate. So, we have no
                  problem with you being present at some or all the cleaning
                  sessions.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-check-label mb-4" for="exampleCheck1">
                Send us your questions!
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInput"
                aria-describedby="question"
              ></input>
            </div>
            <button type="submit" className="btn btn-light mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
