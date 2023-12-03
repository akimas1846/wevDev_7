import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


export default function imageGallery() {
  var images = [
    "https://http.cat/100",
    "https://http.cat/101",
    "https://http.cat/102",
    "https://http.cat/103",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
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
            <div>
              <SwiperSlide>
                <img key={`slides-${imgs}`} src={imgs} width="300px" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}
