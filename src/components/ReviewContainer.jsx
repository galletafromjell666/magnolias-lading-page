import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { reviewsData } from "../data/reviews";

const ReviewContainer = () => {
  const data = reviewsData;
  return (
    <div className="w-full h-auto bg-primary">
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="700" className="mx-auto bg-primary overflow-hidden w-[90%]  md:w-[80%] 3xl:container 3xl:w-[80%] xl:px-8 md:pb-8">
        <div className="w-full  pt-4 pb-12 ">
          <h1 className="text-3xl font-averia font-semibold">
          Valoraciones de nuestros clientes
          </h1>
          <h2 className="text-xl  font-inter font-light text-black/75">
            Nuestra  motivación para continuar mejorando 
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          loopedSlides={4}
          initialSlide={2}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Autoplay, FreeMode]}
          className="mySwiper custom-overflow relative"
        >
          {data.map((review) => {
            return (
              <SwiperSlide key={review.id} className="drop-shadow-2xl">
                <div className="px-6 ">
                  <div className="font-inter">
                    <img
                      className="drop-shadow-2xl"
                      src={review.ProfilePic}
                      alt={review.name}
                    />
                    <h4 className="text-xl font-bold font-averia">
                      {review.name}
                    </h4>
                    <h5 className="text-md font-semilbold text-black/75 font-averia">
                      {review.position}
                    </h5>
                  </div>
                  <div className="flex items-center content-center overflow-hidden h-[180px]">
                    <p className="review-quote relative text-xl w-full">
                      <span className="text-4xl font-bold">"</span>
                      {review.reviewContent}
                      <span className="text-4xl absolute font-bold bottom-[-0.3rem] "> "</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewContainer;
