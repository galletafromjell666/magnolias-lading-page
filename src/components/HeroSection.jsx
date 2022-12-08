import React from "react";
import ParticlesBackground from "./ParticlesBackground";
const HeroSection = () => {
  return (
    <div className="relative w-full min-w-fit bg-primary flex flex-col md:flex-row md:h-[35rem] text-selection-disable">
      <ParticlesBackground />
      <div className="flex-1 w-100 md:w-40 z-10 ">
        <div className="flex h-full w-full py-5 justify-center items-center flex-col text-5xl md:text-6xl md:py-0 md:pl-6">
          <h1>
            <h1 className="font-bold">Professional</h1>
            spa and beauty <br></br>center
          </h1>
          <h2 className=" mt-8 text-xl md:text-2xl">
            Are u a girl looking for some beauty?
          </h2>
        </div>
      </div>
      <div className="relative flex-1 w-100 md:w-60 z-10 max-width">
        <img
          className="h-full mx-auto"
          src="/hero-pexels-vincenzo-giove-1925482.png"
          alt="girl smiling"
        ></img>
        <div className="absolute w-80 py-4 px-4 md:w-[23rem] h-[6rem] bottom-[15%] inset-x-0 mx-auto flex flex-row justify-around items-center  bg-brick rounded-[1rem] shadow-md shadow-pink-400/25 text-black/75 md:left-[-4rem] md:py-6 md:px-10">
          <h2 className="text-lg">Schedule an appoinment now, it's free</h2>
          <img
            className="h-11 md:h-[3.2rem] ml-4 md:ml-0"
            src="/whatsapp.svg"
            alt="whatsapp logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
