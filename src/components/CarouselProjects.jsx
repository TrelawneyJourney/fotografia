import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { proyectos } from "../data/Projects";
import { Link } from "react-router-dom";

export default function CarouselProjects({
  onSlideChange,
  setSwiper,
  initialSlide,
  active,
}) {
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
      <Swiper
        direction="vertical"
        mousewheel={{ forceToAxis: true }}
        speed={800}
        modules={[EffectFade, Mousewheel]}
        className="mySwiper h-screen w-full"
        rewind={true}
        initialSlide={initialSlide >= 0 ? initialSlide : 0}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {proyectos.map((ph, index) => (
          <SwiperSlide
            key={ph.id}
            className="slide"
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className="h-full w-full flex items-center justify-center">
              <div className="flex flex-col gap-2 bg-neutral-200 p-3 shadow-md shadow-neutral-500 hover:shadow-lg transition duration-300">
                <div className="w-[300px] h-[300px] md:w-[800px] md:h-[400px] slide_inner">
                  <Link to={`/projects/${ph.url}`} className="relative ">
                    <img
                      src={ph.portada}
                      alt={ph.titulo}
                      className="slide-image w-full h-full object-cover cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-2 font-light tracking-wider md:hidden">
                  <p className="text-md">
                    {String(active + 1).padStart(2, "0")}
                  </p>
                  <p className="text-lg">{ph.titulo}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
