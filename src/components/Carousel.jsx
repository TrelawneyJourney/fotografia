import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState } from "react";
import VerticalPagination from "./VerticalPagination";

import { photos } from "../data/Projects";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <VerticalPagination active={activeIndex} total={photos.length} />
      <Swiper
        rewind={true}
        mousewheel={true}
        effect={"fade"}
        direction="vertical"
        modules={[EffectFade, Mousewheel]}
        className="mySwiper h-screen w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {photos.map((ph) => (
          <SwiperSlide key={ph.id}>
            <div className="relative h-screen w-full overflow-hidden">
              <img
                src={ph.portada}
                alt={ph.titulo}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-20 left-10 text-white p-4 rounded-lg backdrop-blur-2xl backdrop-opacity-55 max-w-md">
                <h2 className="text-3xl font-pt">{ph.titulo}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
