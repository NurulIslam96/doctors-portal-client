import React from "react";
import Banner from "./Banner";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="md:mx-5 mx-3 space-y-16">
      <Banner></Banner>
      <OurServices></OurServices>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
