import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <div className="pt-[4rem] pb-[3rem] bg-gray-800">
        <div
          className="w-[80%] pb-[2rem] bordr-b-[2rpx] border-b-gray-300 grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 gap-[3rem] items-start mx-auto"
        >
          <div>
            <div className="flex items-center gap-1 cursor-pointer">
              <GiFullPizza className="text-orange-500 w-[1.2rem] h-[1.2rem] sm:w-[2rem] sm:h-[2rem]" />
              <h1 className="text-[18px] sm:text-[25px] font-semibold text-white">
                Pizzaz
              </h1>
            </div>
            <p className="text-white text-opacity-55 mt-[0.4rem]">
              Order Pizza Hut's veg and non-veg pizzas to get the best pizza
              deals. Check out the latest meal.
            </p>
            <p className="mt-2 text-white text-[18px]">
              developerakky@gmail.com
            </p>
            <p className="mt-2 text-[18px] font-bold text-red-300">
              +123456789
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h1 className="text-[23px] font-semibold mb-[1rem] text-white">
              Products
            </h1>
            <p className="text-white opacity-55 hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Chiken Pizza
            </p>
            <p className="text-white opacity-55   hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Cheezy Pizza
            </p>
            <p className="text-white opacity-55  hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Veg Pizza
            </p>
            <p className="text-white opacity-55  hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Greek Pizza
            </p>
            <p className="text-white opacity-55  hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Italian Pizza
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h1 className="text-[23px] font-semibold mb-[1rem] text-white">
              Quick Links
            </h1>
            <p className="text-white opacity-55 hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Home
            </p>
            <p className="text-white opacity-55   hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              About
            </p>
            <p className="text-white opacity-55  hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Menu
            </p>
            <p className="text-white opacity-55  hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              Product
            </p>
            <p className="text-white opacity-55  hover:text-orange-400 transition-all duration-150 cursor-pointer w-fit">
              News Letter
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h1 className="text-[23px] font-semibold mb-[1rem] text-white">
              OPENING HOURS
            </h1>
            <p className="text-white">
              Monday - Saturday :{" "}
              <span className="text-yellow-300">8am - 4pm</span>
            </p>
            <p className="text-white">
              Sunday : <span className="text-yellow-300">8am - 12am</span>
            </p>

            <div className="flex mt-[1rem] items-center gap-5">
              <a
                href="https://www.linkedin.com/in/devakashpandey/"
                target="_linkedin"
              >
                {" "}
                <FaLinkedin className="w-[1.5rem] h-[1.5rem] text-blue-500 cursor-pointer" />
              </a>
              <a href="">
                <FaInstagram className="w-[1.5rem] h-[1.5rem] text-red-400 cursor-pointer" />
              </a>
              <a href="">
                <FaTwitter className="w-[1.5rem] h-[1.5rem] text-blue-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-white opacity-55 mt-2">
          Copyright © 2024 <span className="text-yellow-500">Akash Pandey</span>
          . All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
