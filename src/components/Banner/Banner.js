"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        rewind={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-screen">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              fill
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <Image
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <Image
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen">
            <Image
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
