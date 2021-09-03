import React from "react";
const cardStyle = {
  minWidth: "auto",
  padding:"50px"
};

const introStyle = {
  fontFamily: "Staatliches, cursive",
};

const Introduction = () => {
  return (
    <div>
      <div className="card mb-3 bg-transparent border-0" style={cardStyle}>
        <div className="row">
          {/* Image styling container */}
          <div className="col-md-6">
            <img
              src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/009/456/original/family2.png"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-text text-center" style={introStyle}>
                A company dedicated to helping
                families achieve their cleaning goals.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
