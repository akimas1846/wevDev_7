import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

async function fetchImage(id) {
  const url = `https://http.cat/${id}`;
  const response = await fetch(url);
  return response.img();
}

function Loading() {
  return <img src="https://http.cat/101" />;
}
export default function imageGallery() {
  var images = [
    "https://http.cat/101",
    "https://http.cat/101",
    "https://http.cat/101",
    "https://http.cat/101",
    "https://http.cat/101",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="cats-slider"
      >
        {images.map((imgs) => {
          return (
            <div key={imgs}>
              <SwiperSlide>
                <img src={imgs} width="400px" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}
