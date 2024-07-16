import React from "react";
import deliveryImg from "@/public/assets/delivery.svg";
import Image from "next/image";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <>
      <div className="mt-[4rem] pb-[3rem] ">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Image src={deliveryImg} alt="deliveryImg" />
          </div>
          <div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold uppercase leading-[3rem] md:leading-[3.5rem]">
              Your <span className="text-red-600">Favourite Pizza</span> on the
              way
            </h1>
            <p className="mt-4 text-black text-[17px] opacity-70">
              Pizza delivery is a service in which a pizza chain delivers a
              pizza to a customer. An order is typically made either by
              telephone, or over the internet,in which the customer can request
              pizza type and size, and other items to be delivered with it,
            </p>

            <div className="flex items-center space-x-3 mt-[2rem]">
              <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
              <h1 className="text-black font-medium">Delivery in 30 minutes</h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem]">
              <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
              <h1 className="text-black font-medium">
                Free shipping from 1999
              </h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem]">
              <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
              <h1 className="text-black font-medium">
                Delivery on your Doorstep
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
