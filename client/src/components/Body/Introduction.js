import React from "react";

const Introduction = () => {
  return (
    <div className="card mb-3 border-0 rounded-0" id="introduction">
      <div className="row" id="about">
        <div className="col-md-6">
          <img
            src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/009/456/original/family2.png"
            className="intro-img img-fluid rounded-start"
            alt="family icon"
          ></img>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h1 className="card-text text-center">
              A company dedicated to helping families achieve their cleaning
              goals.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
