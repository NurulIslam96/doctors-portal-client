import React from "react";
import Banner from "./Banner";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="md:mx-5 mx-3 space-y-14">
      <Banner></Banner>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
