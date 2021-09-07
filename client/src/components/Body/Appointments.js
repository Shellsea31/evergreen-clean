import React from "react";

const Appointments = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
  };
  return (
    <div class="card mb-3 bg-transparent border-0" id="appts" style={cardStyle}>
      <div class="row">
        <div class="mx-auto" style={{ width: "450px" }}>
          <h1>Book your Cleaning!</h1>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Full Name"
              aria-label="name"
              aria-describedby="basic-addon1"
            ></input>
          </div>

          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="customer123@gmail.com"
              aria-label="email"
              aria-describedby="basic-addon2"
            ></input>
          </div>

          <div class="input-group mb-3">
            <input
              type="tel"
              class="form-control"
              placeholder="000-000-0000"
              aria-label="cell"
              aria-describedby="basic-addon2"
            ></input>
          </div>

          <label for="basic-url" class="form-label">
            Tell us about your goals
          </label>

          <div class="input-group">
            <textarea
              placeholder="office space needs dust and mop twice a week..."
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
