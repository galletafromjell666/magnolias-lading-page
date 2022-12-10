import React from "react";
import SectionBox from "./SectionBox";

const ServicesSection = () => {
  const test01 = [
    {
      id: 1,
      title: "Mechas",
      imgSrc:
        "https://images.pexels.com/photos/3065207/pexels-photo-3065207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "row-span-1 ",
    },
    {
      id: 2,
      title: "Cuidados",
      imgSrc:
        "https://images.pexels.com/photos/3993461/pexels-photo-3993461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "md:row-span-2",
    },
    {
      id: 3,
      title: "Alisado",
      imgSrc:
        "https://images.pexels.com/photos/3738359/pexels-photo-3738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "col-span-2 md:col-span-1",
    },
    {
      id: 4,
      title: "Balayage",
      imgSrc:
        "https://images.pexels.com/photos/1321916/pexels-photo-1321916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "md:row-span-2",
    },
    {
      id: 5,
      title: "Cortes",
      imgSrc:
        "https://images.pexels.com/photos/11595337/pexels-photo-11595337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "md:row-span-2",
    },
    {
      id: 6,
      title: "Acrilismo",
      imgSrc:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "col-span-2 md:col-span-1",
    },
  ];
  //console.log(test01);
  return (
    <div className="w-full bg-primary">
      <div className="mx-auto bg-primary pb-2 h-[auto] w-[90%]  md:w-[80%] 3xl:container 3xl:w-[80%] xl:px-8 md:pb-8">
        <div className="w-full  py-8">
          <h1 className="text-3xl font-averia font-semibold">Browse Services</h1>
          <h2 className="text-xl  font-inter font-light text-black/75">
            Manage our bussiness
          </h2>
        </div>
        <div className="grid font-averia grid-cols-2 h-auto w-full grid-rows-custom grid-flow-row gap-6 gap-y-2 md:gap-x-12  md:h-[700px] md:grid-cols-3 xl:h-[1000px] xl:gap-x-20 md:gap-y-4 ">
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
