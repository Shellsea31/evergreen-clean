import React from "react";

// A carousel of attractive images, last 5 seconds without intervention
const Slides = () => {
  const letters = {
    letterSpacing: "5px",
  };
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ maxHeight: "700px" }}>
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://cdn.pixabay.com/photo/2014/12/17/16/54/clean-571679_1280.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
          <div
            class="carousel-caption d-none d-md-block position-absolute bottom-50 text-dark"
            style={letters}
          >
            <h1>A company based in Olympia, WA</h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://cdn.pixabay.com/photo/2014/02/17/13/18/cleaning-268107_1280.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
          <div
            class="carousel-caption d-none d-md-block position-absolute bottom-50"
            style={letters}
          >
            <h1>Over 10 years of experience</h1>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/00/17/broom-1837434_1280.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
          <div
            class="carousel-caption d-none d-md-block position-absolute bottom-50 text-dark"
            style={letters}
          >
            <h1>Book your appointment today!</h1>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slides;
