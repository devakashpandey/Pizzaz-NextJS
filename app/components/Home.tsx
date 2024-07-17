import React from "react";
import Hero from "./HeroSection/Hero";
import Feature from "./Feature/Feature";
import PopularPizza from "./PopularPizzaz/PopularPizza";
import Delivery from "./Delivery/Delivery";
import Team from "./Team/Team";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

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
        <Footer />
      </div>
    </>
  );
};

export default Home;
