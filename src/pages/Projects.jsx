import { proyectos } from "../data/Projects";
import CarouselProjects from "../components/CarouselProjects";

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neutral-200 to-stone-50">
      {/* menu */}
      <aside className="fixed left-0 bottom-10 z-50 bg-amber-300 hidden md:block pl-14">
        <ul className="space-y-2">
          {proyectos.map((item) => (
            <li key={item.id}>{item.titulo}</li>
          ))}
        </ul>
      </aside>

      {/* imagen */}

      <CarouselProjects />
    </div>
  );
}
