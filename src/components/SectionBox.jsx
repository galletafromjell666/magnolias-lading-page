import React from "react";

const SectionBox = ({ title, imgSrc, tailwindClass, details }) => {
  return (
    <div
      className={"section-box-card relative bg-fuchsia-400 rounded-lg " + tailwindClass}
    >
      <img
        style={{
          verticalAlign: "top",
          objectFit: "cover",
          transition: "0.6s",
          transitionProperty: "opacity",
        }}
        className="relative w-full h-full rounded-lg opacity-80"
        src={imgSrc}
        alt={title}
      />
      <div className="z-10 absolute top-0 right-0 text-white w-full h-full text-center flex flex-col justify-around">
        <div className="card-details">
        <h1 className="text-3xl tracking-wide md:text-4xl font-bold lg:text-5xl text-center">{title}</h1>
        <div className="card-details-text px-4  md:block">
          <h4 className="text-xl font-inter font-semibold h-0">
            {details}
          </h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBox;
