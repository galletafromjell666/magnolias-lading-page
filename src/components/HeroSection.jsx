import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full min-w-fit bg-primary flex flex-col md:flex-row md:h-[35rem] ">
      <div className="flex-1 w-100 md:w-40 ">
        <div className="flex h-full w-full pt-10 justify-center items-center flex-col text-6xl md:pt-0">
          <h1>
          Professional<br></br>
            spa and beauty <br></br>center
          </h1>
          <h2 className=" mt-8 text-2xl">Are u a girl looking for some beauty?</h2>
        </div>
      </div>
      <div className="relative flex-1 w-100 md:w-60 ">
        <img
          className="h-full mx-auto"
          src="/hero-pexels-vincenzo-giove-1925482.png"
          alt="girl smiling"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
