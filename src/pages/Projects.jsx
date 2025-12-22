import { useEffect, useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { proyectos } from "../data/Projects";
import CarouselProjects from "../components/CarouselProjects";
import VerticalPagination from "../components/VerticalPagination";

export default function Projects() {
  // del menu
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const [searchParams] = useSearchParams();
  const projectSlug = searchParams.get("project");

  //busco el indice del click
  const initialIndex = projectSlug
    ? proyectos.findIndex((p) => p.url === projectSlug)
    : 0;

  //bloquear scroll
  const location = useLocation();
  const isDetailOpen = location.pathname.includes("/projects/");

  useEffect(() => {
    if (isDetailOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isDetailOpen]);

  return (
    <main className="relative bg-gradient-to-b from-neutral-200 to-stone-50">
      <aside className="fixed left-0 bottom-10 z-20 hidden md:block pl-14">
        {/* menu */}
        <ul className="space-y-2">
          {proyectos.map((item, index) => (
            <li
              key={item.id}
              onClick={() => swiper?.slideTo(index)}
              className={`relative text-xl text-neutral-600 hover:text-neutral-950 cursor-pointer  `}
            >
              {item.titulo}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-neutral-400 transition-all duration-500 ${
                  activeIndex === index ? "w-full hover:bg-neutral-950" : "w-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </aside>

      <div className="md:hidden">
        <VerticalPagination active={activeIndex} total={proyectos.length} />
      </div>

      <CarouselProjects
        setSwiper={setSwiper}
        onSlideChange={setActiveIndex}
        initialSlide={initialIndex}
      />
      <div
        className={`absolute inset-0 z-30 transition ${
          isDetailOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <Outlet />
      </div>
    </main>
  );
}
