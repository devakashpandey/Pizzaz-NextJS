import React from "react";
import chef from "@/public/assets/t1.jpg";
import chef2 from "@/public/assets/t2.jpg";
import chef3 from "@/public/assets/t3.jpg";
import Image from "next/image";

const TeamCard = () => {
  const team = [
    {
      img: chef,
      tName: "Ranjan Mehta",
      tag: "Kitchen Porter",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, magnam ullam illum ducimus eos!",
    },
    {
      img: chef2,
      tName: "Shivani Gupta",
      tag: "Executive Chef",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, magnam ullam illum ducimus eos!",
    },
    {
      img: chef3,
      tName: "Shivam Kumar",
      tag: "Head Chef",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, magnam ullam illum ducimus eos!",
    },
  ];

  return (
    <>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] items-center">
        {team.map((item, index) => (
          <div className="flex flex-col gap-4 items-center" key={index}>
            <Image
              src={item.img}
              alt="team"
              height={400}
              width={400}
              className="rounded-2xl mx-auto"
            />

            <h1 className="text-[40px] text-gray-800  text-center font-semibold">
              {item.tName}
            </h1>

            <p className="bg-green-600 text-white py-1.5 px-4 rounded-sm w-fit">
              {item.tag}
            </p>

            <p className="text-center md:w-[90%] mx-auto text-gray-600">
              {item.about}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCard;
