import { useParams } from "react-router-dom";
import { proyectos } from "../data/Projects";

export default function ProjectsDetail() {
  const { url } = useParams();
  const project = proyectos.find((p) => p.url === url);

  return (
    <main className="h-full w-full flex flex-col items-center justify-center gap-4">
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={project.portada}
          alt={project.titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.fotos.map((foto) => (
          <img src={foto} />
        ))}
      </div>
    </main>
  );
}
