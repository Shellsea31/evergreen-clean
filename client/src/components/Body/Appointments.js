import React from "react";

const Appointments = () => {
  return (
    <div
      className="card mb-3 bg-transparent border border-dark rounded-0"
      id="appts"
    >
      <div className="row">
        <div className="mx-auto" id="inputForm">
          <h1>Book your Cleaning!</h1>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              aria-label="name"
              aria-describedby="basic-addon1"
            ></input>
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon2"
            ></input>
          </div>

          <div className="input-group mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              aria-label="cell"
              aria-describedby="basic-addon2"
            ></input>
          </div>

          <label className="form-label">Tell us about your goals</label>

          <div className="input-group mb-3">
            <textarea
              placeholder="office space needs dust and mop twice a week..."
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <button className="btn btn-light"> Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
