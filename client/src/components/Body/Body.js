import React from "react";
import Appointments from "./Appointments";
import FAQ from "./FAQ";
import Introduction from "./Introduction";
import Slides from "./Slides";

//All main components besides navbar and footer get filtered here
const Body = () => {
  return (
    <div>
      <Slides/>
      <Introduction/>
      <FAQ/>
      {/* <Appointments/> */}
    </div>
  );
};

export default Body;
