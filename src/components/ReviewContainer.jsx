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
      <div className="mx-auto bg-primary pb- w-[90%]  md:w-[80%] 3xl:container 3xl:w-[80%] xl:px-8 md:pb-8">
      <div className="w-full  py-8">
          <h1 className="text-3xl font-averia font-semibold">What our customers says</h1>
          <h2 className="text-xl  font-inter font-light text-black/75">
            Review section xd
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((review) => {
            return (
              <SwiperSlide id={review.id}>
                <div>
                  <div className="mb-6">
                    <img
                      src={review.ProfilePic}
                      alt={review.name}
                    />
                    <h4>{review.name}</h4>
                    <h5>{review.position}</h5>
                  </div>
                  <div>
                    <p className="px-4 w-full h-[75px]">{review.reviewContent}</p>
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
