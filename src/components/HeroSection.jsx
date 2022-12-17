import React from "react";
import { SocialIcon } from "react-social-icons";
import ParticlesBackground from "./ParticlesBackground";
const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="relative  w-full min-w-fit bg-primary flex flex-col md:flex-row md:h-[35rem] text-selection-disable"
    >
      <ParticlesBackground />
      <div className="flex-1 w-100 md:w-40 z-10 ">
        <div className="flex font-averia h-full w-full pt-4 pb-2 justify-center items-center flex-col text-4xl md:text-6xl md:py-0 md:pl-6">
          <div>
            <h1 className="font-bold self">Professional</h1>
            <h1>
              nails and beauty <br></br>salon
            </h1>
            <h2 className=" mt-4 text-xl  md:text-2xl">
            Es tu momento de brillar <span className=" text-2xl md:text-4xl">✨</span>
          </h2>
          </div>
        </div>
      </div>
      <div className="relative w-100 h-[400px] md:flex-1 md:h-full md:w-60">
        <img
          className="h-full mx-auto"
          src="/hero-pexels-vincenzo-giove-1925482.png"
          alt="girl smiling"
        ></img>
        <div data-aos="fade-up-left" data-aos-delay="400" data-aos-easing="ease-out-cubic" data-aos-duration="600" className="absolute w-80 py-4 px-4 md:w-[23rem] h-[6rem] bottom-[15%] inset-x-0 mx-auto flex flex-row justify-around items-center  bg-brick rounded-[1rem] shadow-md shadow-pink-400/25 text-black/75 md:left-[-4rem] md:py-6 md:px-10">
          <h2 className="text-lg text-black/90 font-bold">
            Pregunta por nuestras promociones diarias
          </h2>
          <div><SocialIcon className="btn-social-media" network="whatsapp" /></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
