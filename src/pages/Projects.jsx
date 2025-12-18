import CarouselProjects from "../components/CarouselProjects";
import { proyectos } from "../data/Projects";

export default function Projects() {
  return (
    <main className="bg-gradient-to-b from-neutral-200 to-stone-50">
      <aside className="fixed left-0 bottom-10 z-40 hidden md:block pl-14">
        <ul className="space-y-1">
          {proyectos.map((item) => (
            <li
              key={item.id}
              className="text-xl text-neutral-600 hover:text-neutral-950 cursor-pointer"
            >
              {item.titulo}
            </li>
          ))}
        </ul>
      </aside>

      <CarouselProjects />
    </main>
  );
}
