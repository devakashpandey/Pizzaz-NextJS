import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? "transalate-x-0" : "translate-x-[-100%]";
  return (
    <>
      <div
        className={`fixed ${navStyle} left-0 top-0 right-0 bottom-0 transition-all duration-500 h-[100vh] bg-[#000000e0] z-50`}
      >
        <IoClose
          onClick={closeNav}
          className="absolute top-[1.5rem] right-[1rem] text-white h-[2rem] w-[2rem] cursor-pointer"
        />
        {/* Nav links */}
        <div
          className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}
        >
          {" "}
          <ul className="space-y-10 text-white">
            <li className="text-[30px] font-medium hover:text-yellow-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[30px] font-medium hover:text-yellow-500">
              <Link href="/">Shop</Link>
            </li>
            <li className="text-[30px] font-medium hover:text-yellow-500">
              <Link href="/">Menu</Link>
            </li>
            <li className="text-[30px] font-medium hover:text-yellow-500">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobNav;
