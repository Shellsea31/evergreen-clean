import React from "react";

const FAQ = () => {
  return (
    <div class="card">
      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          Questions 1
        </a>
      </p>

      <div class="collapse" id="collapseExample1">
        <div class="card card-body">Answer 1</div>
      </div>
      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample2"
        >
          Questions 2
        </a>
      </p>
      <div class="collapse" id="collapseExample2">
        <div class="card card-body">Answer 2</div>
      </div>

      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample3"
        >
          Questions 3
        </a>
      </p>

      <div class="collapse" id="collapseExample3">
        <div class="card card-body">Answer 3</div>
      </div>

      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample4"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample4"
        >
          Questions 4
        </a>
      </p>

      <div class="collapse" id="collapseExample4">
        <div class="card card-body">Answer 4</div>
      </div>

      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample5"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample5"
        >
          Question 5
        </a>
      </p>

      <div class="collapse" id="collapseExample5">
        <div class="card card-body">Answer 5</div>
      </div>
    </div>
  );
};

export default FAQ;
