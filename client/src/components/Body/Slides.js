import React from "react";

const Slides = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img
            src="https://wcblind.org/wp-content/uploads/2021/03/Photo-by-Penn-State-Health-News.jpg"
            class="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_41/2187641/171012-better-stock-house-cleaner-ew-531p.jpg"
            class="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://evergreenmaids.com/wp-content/uploads/2020/06/Make-a-bleach-mixture-to-clean-your-floors-1080x675.jpg"
            class="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slides;
