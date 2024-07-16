import React from "react";
import feature1 from "@/public/assets/feature1.jpg";
import feature2 from "@/public/assets/feature2.jpg";
import feature3 from "@/public/assets/feature3.jpg";
import Image from "next/image";

const Feature = () => {
  const feature_pizza = [
    {
      img: feature1,
      title: "Our Pizzaz",
      descrip:
        "Pizza and its variants are among the most popular foods in the world. ",
    },
    {
      img: feature3,
      title: "Our Deals",
      descrip:
        "Order Pizza Hut's veg and non-veg pizzas to get the best pizza deals. Check out the latest meal deals.",
    },
    {
      img: feature2,
      title: "Heart Shape Pizza",
      descrip:
        "Pizza Hut's heart-shaped pizza is perfect for a romantic date, cozy night in, or a Valentine's Day surprise.",
    },
  ];

  return (
    <>
      <div className="pt-[4rem] pb-[3rem]">
        <h1 className="heading">
          Pizzaź made with <br /> love and{" "}
          <span className="text-red-500">care</span>
        </h1>

        <div className="w-[90%] md:w-[80%] mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {feature_pizza.map((item, index) => (
            <div>
              <div className="p-6 hover:bg-white rounded-lg transition-all duration-300 hover:-translate-y-2 mt-2">
                <Image
                  src={item.img}
                  alt="feature1"
                  className="rounded-[15px]"
                />
                <h2 className="mt-2 text-black font-semibold text-[2rem] text-center">
                  {item.title}
                </h2>
                <p className="mt-2 text-black text-opacity-65 text-center  lg:text-[17px]">
                  {item.descrip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
