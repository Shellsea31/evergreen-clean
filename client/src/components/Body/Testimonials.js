import React from "react";

const Testimonials = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };
  return (
    <div class="card bg-transparent border-0" style={cardStyle}>
      <figure class="text-start mt-5 mb-5">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <figure class="text-center mt-5 mb-5">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <figure class="text-end mt-5 mb-5">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonials;
