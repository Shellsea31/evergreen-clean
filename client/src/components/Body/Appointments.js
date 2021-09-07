import React from "react";

const Appointments = () => {
  const cardStyle = {
    minWidth: "auto",
    padding: "50px",
    marginTop: "75px",
    marginLeft: "200px",
    marginRight: "200px",
  };
  return (
    <div
      className="card mb-3 bg-transparent border border-dark rounded-0"
      id="appts"
      style={cardStyle}
    >
      <div className="row">
        <div className="mx-auto" style={{ width: "450px" }}>
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
              placeholder="customer123@gmail.com"
              aria-label="email"
              aria-describedby="basic-addon2"
            ></input>
          </div>

          <div className="input-group mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="000-000-0000"
              aria-label="cell"
              aria-describedby="basic-addon2"
            ></input>
          </div>

          <label className="form-label">Tell us about your goals</label>

          <div className="input-group">
            <textarea
              placeholder="office space needs dust and mop twice a week..."
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
