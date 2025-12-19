import { useParams } from "react-router-dom";
import { proyectos } from "../data/Projects";

export default function ProjectsDetail() {
  const { url } = useParams();
  const project = proyectos.find((p) => p.url === url);

  return (
    <div className="bg-amber-600 h-screen w-full">
      proyect detail galeria de imagen completa
      <h1>Imagen: {url}</h1>
      <p>titulo: {project.titulo}</p>
    </div>
  );
}
