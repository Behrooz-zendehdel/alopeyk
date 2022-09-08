import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/slider2.webp";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";
import { Navigation, Pagination, A11y } from "swiper";

const SwiperImage = () => {
  return (
    <div>
      {" "}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          width: "500px",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <SwiperSlide>
          <img src={slider1} alt="" className="imageSlider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" className="imageSlider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="imageSlider" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="imageSlider" alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default SwiperImage;
