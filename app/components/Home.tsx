import React from "react";
import Hero from "./HeroSection/Hero";
import Feature from "./Feature/Feature";
import PopularPizza from "./PopularPizzaz/PopularPizza";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Feature />
        <PopularPizza />
      </div>
    </>
  );
};

export default Home;
