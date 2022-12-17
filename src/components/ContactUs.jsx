import React from "react";
import { SocialIcon } from "react-social-icons";
import Map from "./Map";

const ContactUs = () => {
  return (
    <div  className="w-full h-auto bg-primary">
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" className="mx-auto bg-primary overflow-hidden w-[90%]  md:w-[80%] 3xl:container 3xl:w-[80%] xl:px-8 md:pb-4">
        <div className="w-full  pt-2 pb-4 ">
          <h1 className="text-3xl font-averia font-semibold">Comunicate con nosotros</h1>
          <h2 className="text-xl  font-inter font-light text-black/75">
            Estaremos encantados de atenderte ❤
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row h-[650px] md:h-[400px]">
          <div className="h-[220px] mb-6  md:flex-1  md:mb-0 md:h-full">
            <div className="flex flex-col h-full justify-center p-8">
              <h1 className="mx-6 my-6 text-center text-xl font-inter">
                Síguenos en nuestras redes sociales, no te pierdas de nuestras promociones.
              </h1>
              <div className="flex flex-row justify-evenly items-center ">
                <SocialIcon className="btn-social-media" network="whatsapp" />
                <SocialIcon className="btn-social-media" network="facebook" />
                <SocialIcon className="btn-social-media" network="instagram" />
                <SocialIcon className="btn-social-media" network="email" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
