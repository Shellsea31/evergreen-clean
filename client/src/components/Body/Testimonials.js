import React from "react";

const Testimonials = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };

  return (
    <div className="card bg-transparent border-0" style={cardStyle}>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <figure>
              <blockquote class="blockquote">
                <p>Very professional and always made me feel safe.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">Mary Anne</cite>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure>
              <blockquote class="blockquote">
                <p>I trust Evergreen Cleaning with my workspace. They always do a great job!</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">Joe Biden</cite>
              </figcaption>
            </figure>
          </div>
          <div class="carousel-item">
            <figure>
              <blockquote class="blockquote">
                <p>It was really easy to start up a schedule and I love how flexible they are.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title">Jennifer Hudson</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i
            class="bi bi-arrow-left-circle"
            style={{ fontSize: "50px", color: "black" }}
          ></i>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i
            class="bi bi-arrow-right-circle"
            style={{ fontSize: "50px", color: "black" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
