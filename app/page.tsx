import React from "react";
import Home from "./components/Home";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#f4f1ea]">
        <Head>
          <link rel="icon" href="/app/p3.png" />
        </Head>{" "}
        <Home />
      </div>
    </>
  );
};

export default HomePage;
