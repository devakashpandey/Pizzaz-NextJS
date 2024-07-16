import React from "react";
import Hero from "./HeroSection/Hero";
import Feature from "./Feature/Feature";
import PopularPizza from "./PopularPizzaz/PopularPizza";
import Delivery from "./Delivery/Delivery";
import Team from "./Team/Team";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Feature />
        <PopularPizza />
        <Delivery />
        <Team />
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
