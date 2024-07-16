"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PizzaCard from "./PizzaCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1300, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const PopularPizza = () => {
  return (
    <>
      <div className="pt-[4rem] pb-[4rem] ">
        <h1 className="heading">
          Our Popular <span className="text-red-500">Pizzaz</span>
        </h1>

        <div className="w-[80%] mt-4 mx-auto ">
          <PizzaCard />
        </div>
      </div>
    </>
  );
};

export default PopularPizza;
