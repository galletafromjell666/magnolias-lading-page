import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[35rem] flex flex-col md:flex-row bg-primary ">
      <div className="flex-1 w-40 ">
        <div className="flex h-full w-full justify-center items-center flex-col text-6xl">
          <h1>
          Professional<br></br>
            spa and beauty <br></br>center
          </h1>
          <h2 className=" mt-8 text-2xl">Are u a girl looking for some beauty?</h2>
        </div>
      </div>
      <div className="flex-1 w-60 relative">
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
