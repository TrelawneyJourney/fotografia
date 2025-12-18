import { proyectos } from "../data/Projects";
import CarouselProjects from "../components/CarouselProjects";
import Carousel from "../components/Carousel";

export default function Projects() {
  return (
    <div className="h-screen bg-gradient-to-b from-neutral-200 to-stone-50">
      <div className="flex gap-44">
        {/* menu */}
        <div className="border border-amber-300 bg-amber-300 self-end hidden md:block pl-14">
          <ul>
            {proyectos.map((item) => (
              <li>{item.titulo}</li>
            ))}
          </ul>
        </div>

        {/* imagen */}
        <div className="">
          <CarouselProjects />
        </div>
      </div>
    </div>
  );
}
