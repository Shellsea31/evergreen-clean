import React from "react";

const Testimonials = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };
  return (
    <div className="card bg-transparent border-0" style={cardStyle}>
      <figure className="text-start mt-5 mb-5">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <figure className="text-center mt-5 mb-5">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>

      <figure className="text-end mt-5 mb-5">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonials;
