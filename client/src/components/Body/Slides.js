import React from "react";

// A carousel of attractive images, last 5 seconds without intervention
const Slides = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://wcblind.org/wp-content/uploads/2021/03/Photo-by-Penn-State-Health-News.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_41/2187641/171012-better-stock-house-cleaner-ew-531p.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://evergreenmaids.com/wp-content/uploads/2020/06/Make-a-bleach-mixture-to-clean-your-floors-1080x675.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slides;
