import { useState } from "react";
import CarouselProjects from "../components/CarouselProjects";
import { proyectos } from "../data/Projects";
import { Outlet } from "react-router-dom";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  return (
    <main className="relative bg-gradient-to-b from-neutral-200 to-stone-50">
      <aside className="fixed left-0 bottom-10 z-40 hidden md:block pl-14">
        <ul className="space-y-2">
          {proyectos.map((item, index) => (
            <li
              key={item.id}
              onClick={() => swiper?.slideTo(index)}
              className="relative text-xl text-neutral-600 hover:text-neutral-950 cursor-pointer"
            >
              {item.titulo}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-amber-500 transition-all duration-500 ${
                  activeIndex === index ? "w-full" : "w-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </aside>

      <CarouselProjects setSwiper={setSwiper} onSlideChange={setActiveIndex} />

      <Outlet />
    </main>
  );
}
