import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState } from "react";
import VerticalPagination from "./VerticalPagination";

import { proyectos } from "../data/Projects";
import PhotoDescription from "./PhotoDescription";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <VerticalPagination active={activeIndex} total={proyectos.length} />

      <Swiper
        rewind={true}
        mousewheel={true}
        effect={"fade"}
        direction="vertical"
        modules={[EffectFade, Mousewheel]}
        className="mySwiper h-screen w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {proyectos.map((ph) => (
          <SwiperSlide key={ph.id}>
            <div className="relative h-screen w-full overflow-hidden">
              <Link to={`/projects?project=${ph.url}`}>
                <img
                  src={ph.portada}
                  alt={ph.titulo}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </Link>

              <div className="absolute bottom-40 md:bottom-5 left-10">
                <PhotoDescription
                  description={ph.titulo}
                  phUrl={`/projects?project=${ph.url}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
