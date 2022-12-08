import React from "react";

const SectionBox = ({title,imgSrc,tailwindClass}) => {
 // console.log(title,imgSrc,tailwindClass)
  return (
    <div className={tailwindClass}>
      <img style={{"objectFit": "cover"}} className="w-full h-[calc(100%-3rem)] rounded-lg" src={imgSrc} alt={title}/>
      <h1 className="text-3xl font-light text-black/75 h-[3rem] ">{title}</h1>
    </div>
  );
};

export default SectionBox;
