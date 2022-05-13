import React from "react";
import Anouncements from "../components/Anouncements";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Anouncements></Anouncements>
      <Navbar></Navbar>
      <Slider></Slider>
    </div>
  );
};

export default Home;
