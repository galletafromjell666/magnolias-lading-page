import React from "react";
import SectionBox from "./SectionBox";

const ServicesSection = () => {
  const test01 = [
    {
      id: 1,
      title: "Mechas",
      imgSrc:
        "https://images.pexels.com/photos/3065207/pexels-photo-3065207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "row-span-1",
    },
    {
      id: 2,
      title: "Cuidados",
      imgSrc:
        "https://images.pexels.com/photos/3993461/pexels-photo-3993461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "row-span-2",
    },
    {
      id: 3,
      title: "Alisado",
      imgSrc:
        "https://images.pexels.com/photos/3738359/pexels-photo-3738359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "",
    },
    {
      id: 4,
      title: "Balayage",
      imgSrc:
        "https://images.pexels.com/photos/1321916/pexels-photo-1321916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "row-span-2",
    },
    {
      id: 5,
      title: "Cortes",
      imgSrc:
        "https://images.pexels.com/photos/11595337/pexels-photo-11595337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "row-span-2",
    },
    {
      id: 6,
      title: "Acrilismo",
      imgSrc:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tailwindClass: "",
    },
  ];
  //console.log(test01);
  return (
    <div className="w-full mx-auto bg-primary">
      <div className=" md:px-[70px] w-full  bg-primary h-[auto]">
      <div className="w-full pl-8 py-8">
        <h1 className="text-3xl font-semibold">Browse Services</h1>
        <h2 className="text-xl  font-light text-black/75">
          Manage our bussiness
        </h2>
      </div>
      <div className="grid grid-cols-1 pb-10 md:grid-cols-3 grid-rows grid-flow-row sm:gap-6 sm:px-6 px-10 ">
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
