import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="pt-[5rem] pb-[5rem]">
        <div className="text-center">
          <h1 className="text-[25px] sm:text-[38px] md:text-[45px] text-black font-bold uppercase">
            JOIN FOR HOT <span className="text-red-600">OFFERS</span>
          </h1>
          <p className="text-black text-opacity-70 w-[80%] mx-auto ">
            Hey Users!! Subscribe to our store and get crazy offer on every
            meal...
          </p>

          <div className="flex items-center space-x-2 mt-[2rem] justify-center">
            <input
              type="mail"
              placeholder="Enter Email"
              className="px-4 py-3 lg:px-6 lg:py-4 bg-gray-300 w-[50%] outline-none rounded-lg placeholder:text-black"
            ></input>
            <button className="px-5 py-3 lg:px-8 lg:py-4 bg-green-700 hover:bg-green-900 rounded-md text-white transition-all delay-100 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
