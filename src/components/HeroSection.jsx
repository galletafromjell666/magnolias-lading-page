import React from "react";
import ParticlesBackground from "./ParticlesBackground";
const HeroSection = () => {
  return (
    <div className="relative w-full min-w-fit bg-primary flex flex-col md:flex-row md:h-[35rem] ">
      <ParticlesBackground/>
      <div className="flex-1 w-100 md:w-40 z-10 ">
        <div className="flex h-full w-full pt-10 justify-center items-center flex-col text-6xl md:pt-0">
          <h1>
            <h1 className="font-bold">Professional</h1>
            spa and beauty <br></br>center
          </h1>
          <h2 className=" mt-8 text-2xl">
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
        <div className="absolute w-[23rem] h-[6rem] bottom-[15%] inset-x-0 mx-auto py-6 px-10 flex flex-row justify-around items-center  bg-brick rounded-lg shadow-lg shadow-pink-400/50 text-white/75 md:left-[-5rem]">
          <h2 className="text-lg">Schedule an appoinment now, it's free</h2>
          <img className="h-14 fill-white" src="/whatsapp.svg" alt="whatsapp logo"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
