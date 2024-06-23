import Link from "next/link";
import React from "react";
import { GiFullPizza } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { RiMenu3Fill } from "react-icons/ri";
import { PiPizza } from "react-icons/pi";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <>
      <div className="h-[8vh] sm:h-[9vh] bg-white sticky top-0 z-10 shadow-md">
        <div className="sm:w-[90%] w-[95%] mx-auto flex justify-between items-center h-[100%]">
          {/* logo section  */}
          <div className="flex items-center gap-1 cursor-pointer">
            {/* <Image
              src={logo}
              alt="logo"
              className="w-[1.2rem] h-[1.2rem] sm:w-[3rem] sm:h-[3rem]"
            /> */}

            <GiFullPizza className="text-orange-500  w-[1.2rem] h-[1.2rem] sm:w-[2rem] sm:h-[2rem]" />
            <h1 className="text-[18px] sm:text-[25px] font-semibold">Pizzaz</h1>
          </div>

          {/* nav links  */}
          <div>
            <ul className="hidden lg:flex items-center space-x-10 ">
              <li className="text-[20px] font-medium hover:text-red-500 hover:border-b-2 transition-all duration-150 border-red-400">
                <Link href="/">Home</Link>
              </li>
              <li className="text-[20px] font-medium hover:text-red-500 hover:border-b-2 transition-all duration-150 border-red-400">
                <Link href="/">Shop</Link>
              </li>
              <li className="text-[20px] font-medium hover:text-red-500 hover:border-b-2 transition-all duration-150 border-red-400">
                <Link href="/">Menu</Link>
              </li>
              <li className="text-[20px] font-medium hover:text-red-500 hover:border-b-2 transition-all duration-150 border-red-400">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          {/* buttons here  */}
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 sm:px-6 sm:py-2.5 px-4 py-2 text-[14px] sm:text-[17px]
             bg-blue-950 transition-all duration-200  rounded-md text-white hover:-translate-y-1"
            >
              <span>
                <PiPizza className="w-[1.2rem] h-[1.2rem] sm:w-[1.5rem] sm:h-[1.5rem]" />
              </span>
              <span className="text-[15px] sm:text-[20px] font-semibold">
                {" "}
                Order Now
              </span>
            </button>
            <button
              className="sm:px-6 sm:py-3 px-4 py-2.5 text-[14px] sm:text-[17px]
              transition-all duration-200 hover:bg-green-600 rounded-md bg-red-500 text-white"
            >
              <HiShoppingBag className="w-[1.2rem] h-[1.2rem] sm:w-[1.6rem] sm:h-[1.6rem] " />
            </button>
            <div>
              {" "}
              <RiMenu3Fill
                className="lg:hidden w-[1.5rem] h-[1.5rem]"
                onClick={openNav}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
