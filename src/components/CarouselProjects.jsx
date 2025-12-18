import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useState, useEffect, useRef } from "react";
import VerticalPagination from "./VerticalPagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { proyectos } from "../data/Projects";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    slidesRef.current.forEach((slide) => {
      const image = slide.querySelector(".slide-image");
      gsap.fromTo(
        image,
        { opacity: 0, scale: 1.05, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <>
      <VerticalPagination active={activeIndex} total={proyectos.length} />

      <Swiper
        rewind={true}
        mousewheel={{ forceToAxis: true }}
        speed={800}
        threshold={5}
        direction="vertical"
        modules={[EffectFade, Mousewheel]}
        className="mySwiper h-screen w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {proyectos.map((ph, index) => (
          <SwiperSlide
            key={ph.id}
            className="slide"
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className=" h-full w-full flex items-center justify-center">
              <div className="w-[800px] h-[400px] slide_inner">
                <img
                  src={ph.portada}
                  alt={ph.titulo}
                  className="slide-image w-full h-full object-cover cursor-pointer"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
