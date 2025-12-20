import { useParams } from "react-router-dom";
import { proyectos } from "../data/Projects";

export default function ProjectsDetail() {
  const { url } = useParams();
  const project = proyectos.find((p) => p.url === url);
  const layout = [
    "md:col-span-7",
    "md:col-span-4 md:col-start-9 mt-24",
    "md:col-span-5 md:col-start-2",
    "md:col-span-6 md:col-start-7 mt-24",
  ];

  return (
    <main className="h-full w-full flex flex-col items-center justify-center gap-4">
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={project.portada}
          alt={project.titulo}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-12 my-24">
        <div className="md:col-start-2 md:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
            {project.fotos.map((photo, i) => (
              <div key={photo} className={layout[i % layout.length]}>
                <img src={photo} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
