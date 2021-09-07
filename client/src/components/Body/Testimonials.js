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
            <h1>First</h1>
          </div>
          <div class="carousel-item">
            <h1>Second</h1>
          </div>
          <div class="carousel-item">
            <h1>Third</h1>
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
