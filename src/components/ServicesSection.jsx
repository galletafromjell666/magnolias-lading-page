import React from "react";
import SectionBox from "./SectionBox";
import { servicesData } from "../data/services";
const ServicesSection = () => {
  
  const test01 = servicesData
  //console.log(test01);
  return (
    <div className="w-full bg-primary text-selection-disable">
      <div data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="800" data-aos-delay="200" className=" mx-auto bg-primary pb-1 h-[auto] w-[90%]  md:w-[80%] 3xl:container 3xl:w-[80%] xl:px-8 md:pb-6">
        <div className="w-full  py-8">
          <h1 className="text-3xl font-averia font-semibold">Descubre nuestros servicios</h1>
          <h2 className="text-xl  font-inter font-light text-black/75">
            Los mejores productos para destacar tu belleza
          </h2>
        </div>
        <div className="grid font-averia pb-1 grid-cols-2 h-auto w-full grid-rows-custom grid-flow-row gap-6 gap-y-2 md:gap-x-12 md:pb-8 md:h-[700px] md:grid-cols-3 xl:h-[1000px] xl:gap-x-20 md:gap-y-6 ">
          {test01.map((uwu) => {
            //console.log(uwu);
            return <SectionBox key={uwu.id} {...uwu} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
