import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
      <div className="pt-[4rem] pb-[3rem] ">
        <h1 className="heading ">
          Meet our <span className="text-red-600">expert</span>
        </h1>

        <div>
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default Team;
