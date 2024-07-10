"use client";

import Image from "next/image";
import React from "react";
import slice1 from "@/public/assets/slice1.png";
import slice2 from "@/public/assets/slice2.png";
import slice3 from "@/public/assets/slice3.png";
import slice5 from "@/public/assets/slice5.png";
import slice6 from "@/public/assets/slice6.png";
import { FaStar } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1300, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 600 },
    items: 2,
  },

  small_mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const PizzaCard = () => {
  const pizza_card_details = [
    {
      img: slice1,
      pizza_name: "Cheassy Bite",
      rating: "6",
      descrip:
        "Italian food that was created in Italy.It is made with different toppings.",
      realPrice: "399",
    },
    {
      img: slice2,
      pizza_name: "Cheassy Bite",
      rating: "12",
      descrip:
        "Italian food that was created in Italy.It is made with different toppings.",
      realPrice: "599",
    },
    {
      img: slice3,
      pizza_name: "Cheassy Bite",
      rating: "20",
      descrip:
        "Italian food that was created in Italy.It is made with different toppings.",
      realPrice: "699",
    },
    {
      img: slice5,
      pizza_name: "Cheassy Bite",
      rating: "6",
      descrip:
        "Italian food that was created in Italy.It is made with different toppings.",
      realPrice: "499",
    },
    {
      img: slice6,
      pizza_name: "Cheassy Bite",
      rating: "9",
      descrip:
        "Italian food that was created in Italy.It is made with different toppings.",
      realPrice: "799",
    },
  ];

  return (
    <>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          {pizza_card_details.map((item, index) => (
            <div
              className="bg-white p-4 rounded-lg m-3 transition-all duration-200 hover:-translate-y-2  "
              key={index}
            >
              <div className="w-[210px] mx-auto h-[100%]">
                <Image
                  src={item.img}
                  alt="pizzaSlice"
                  width={400}
                  height={200}
                  className="w-[100%] h-[100%] object-cover"
                />

                <h1 className="mt-4 text-2xl font-semibold text-black">
                  {item.pizza_name}
                </h1>

                <div className="flex items-center mt-2 space-x-3">
                  <div className="flex place-items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-black opacity-55">({item.rating})</p>
                </div>
                <p className="mt-2 text-gray-500">{item.descrip}</p>
                <div className="flex mt-4 items-center justify-between">
                  <h2 className="text-2xl text-red-500 font-semibold">
                    {item.realPrice}₹
                  </h2>{" "}
                  <button
                    className="px-4 py-2 hover:bg-green-700 transition-all duration-300 bg-orange-600 
                flex items-center rounded-[5px]"
                  >
                    <BiShoppingBag className="text-white w-[1.3rem] h-[1.3rem]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default PizzaCard;
