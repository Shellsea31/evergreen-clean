import React from "react";
import Appointments from "../components/Body/Appointments";
import FAQ from "../components/Body/FAQ";
import Introduction from "../components/Body/Introduction";
import Slides from "../components/Body/Slides";
import Testimonials from "../components/Body/Testimonials";


//All main components besides navbar and footer get filtered here
const Body = () => {
  return (
    <div>
      <Slides />
      <Introduction />
      <FAQ />
      <Appointments />
      <Testimonials />
      
    </div>
  );
};

export default Body;
