import React from "react";
const cardStyle = {
  minWidth: "auto",
};

const Introduction = () => {
  return (
    <div>
      <div class="card mb-3 bg-transparent border-0" style={cardStyle}>
        <div class="row g-0">
          {/* Image styling container */}
          <div class="col-sm-4">
            <img
              src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/009/456/original/family2.png"
              class="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <h5 class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt et ad dolores consequuntur nam dolorem laudantium dicta
                voluptas pariatur beatae non ea labore nobis, commodi nesciunt
                molestias quaerat animi libero. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Beatae nam sapiente excepturi
                quidem quam fuga odit, eius iure, natus sint consequuntur ab,
                dolore minima? Obcaecati dolorem quaerat id tenetur temporibus.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
