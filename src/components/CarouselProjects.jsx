import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { proyectos } from "../data/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function CarouselProjects() {
  const stackRef = useRef([]);

  useEffect(() => {
    stackRef.current.forEach((item, i) => {
      if (i === 0) return;

      gsap.fromTo(
        item,
        {
          y: "100%",
          scale: 1.05,
        },
        {
          y: "0%",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: `${i * 100}vh top`,
            end: `${(i + 1) * 100}vh top`,
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <>
      {/*  scroll */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: `${proyectos.length * 100}vh` }}
      />

      {/* fixed scene */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[400px]">
          {proyectos.map((ph, index) => (
            <div
              key={ph.id}
              ref={(el) => (stackRef.current[index] = el)}
              className="absolute inset-0"
              style={{ zIndex: proyectos.length - index }}
            >
              <img
                src={ph.portada}
                alt={ph.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
