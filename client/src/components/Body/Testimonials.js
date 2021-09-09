import React from "react";

const Testimonials = () => {
  const cardStyle = {
    minWidth: "auto",
    marginTop:"75px",
    marginBottom:"75px",
  };

  return (
    <div className="card bg-transparent border-0" style={cardStyle}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure>
              <blockquote className="blockquote">
                <p>Very professional and always made me feel safe.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Mary Anne</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure>
              <blockquote className="blockquote">
                <p>
                  I trust Evergreen Cleaning with my workspace. They always do a
                  great job!
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Joe Biden</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure>
              <blockquote className="blockquote">
                <p>
                  It was really easy to start up a schedule and I love how
                  flexible they are.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <cite title="Source Title">Jennifer Hudson</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left-circle"></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i className="bi bi-arrow-right-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
