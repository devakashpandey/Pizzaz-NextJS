import React from "react";
import Hero from "./HeroSection/Hero";
import Feature from "./Feature/Feature";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Feature />
      </div>
    </>
  );
};

export default Home;
