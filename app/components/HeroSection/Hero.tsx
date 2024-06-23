"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pizza1 from "@/public/assets/p1.png";
import pizza2 from "@/public/assets/p2.png";
import Image from "next/image";
import { PiPizza } from "react-icons/pi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <div className="w-[100%] h-[91vh] flex items-center justify-center flex-col bg-green-600 ">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
              <Image
                src={pizza2}
                alt="burger1"
                className="w-[100%] hidden md:flex"
              />
              <div>
                <h1 className="text-[40px] font-semibold text-yellow-400">
                  Fast Food Pizza
                </h1>
                <h2 className="text-[80px] md:text-[90px] leading-[5rem] uppercase text-white font-bold ">
                  Best <br /> Pizzaz
                </h2>
                <p className="mt-4 text-white text-opacity-80 text-xl">
                  Pizza, dish of Italian origin consisting of a flattened disk
                  of bread dough topped with some combination of olive oil,
                  oregano, tomato, olives, cheese, and many other ingredients
                  and baked quickly.
                </p>
                <button
                  className="flex items-center gap-2 sm:px-6 sm:py-2.5 px-4 py-2 text-[14px] sm:text-[17px]
            bg-blue-900 transition-all duration-200  rounded-md text-white hover:translate-x-2 mt-4 hover:bg-blue-950"
                >
                  <span>
                    <PiPizza className="w-[1.2rem] h-[1.2rem] sm:w-[1.5rem] sm:h-[1.5rem]" />
                  </span>
                  <span className="text-[15px] sm:text-[20px] font-semibold">
                    {" "}
                    Order Now
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* 2nd carousel  */}

          <div className="w-[100%] h-[91vh] flex items-center justify-center flex-col bg-red-500 ">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
              <Image
                src={pizza1}
                alt="burger1"
                className="w-[90%] hidden md:flex"
              />
              <div>
                <h1 className="text-[40px] font-semibold text-yellow-400">
                  Tasty Pizza
                </h1>
                <h2 className="text-[80px] md:text-[90px] leading-[5rem] uppercase text-white font-bold ">
                  Top <br /> Pizzaz
                </h2>
                <p className="mt-4 text-white text-opacity-80 text-xl">
                  Pizza, dish of Italian origin consisting of a flattened disk
                  of bread dough topped with some combination of olive oil,
                  oregano, tomato, olives, cheese, and many other ingredients
                  and baked quickly.
                </p>
                <button
                  className="flex items-center gap-2 sm:px-6 sm:py-2.5 px-4 py-2 text-[14px] sm:text-[17px]
            bg-blue-900 transition-all duration-200  rounded-md text-white hover:translate-x-2 mt-4 hover:bg-blue-950"
                >
                  <span>
                    <PiPizza className="w-[1.2rem] h-[1.2rem] sm:w-[1.5rem] sm:h-[1.5rem]" />
                  </span>
                  <span className="text-[15px] sm:text-[20px] font-semibold">
                    {" "}
                    Order Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
