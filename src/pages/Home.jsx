import React from "react";
import Anouncements from "../components/Anouncements";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Anouncements></Anouncements>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
