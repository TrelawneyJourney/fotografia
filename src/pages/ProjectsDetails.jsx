import { useParams } from "react-router-dom";

export default function ProjectsDetail() {
  const { url } = useParams();

  return (
    <div className="bg-amber-600 h-screen">
      proyect detail galeria de imagen completa
      <h1>Imagen: {url}</h1>
      {/*
      para llegar a esta pagina hacer esto en la imagen de la pagina projects 
      to={`/projects/detail/${prodId}`} 
      
      path: "projects/detail/:id",
          element: <ProjectstDetails />,
      */}
    </div>
  );
}
