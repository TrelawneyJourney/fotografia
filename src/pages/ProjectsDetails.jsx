import { useNavigate, useParams } from "react-router-dom";
import { proyectos } from "../data/Projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectsDetail() {
  const { url } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  //scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const reachedBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 10;

      if (reachedBottom) {
        exitDetail();
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const exitDetail = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -80,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        navigate("/projects");
        window.scrollTo(0, 0);
      },
    });
  };

  const project = proyectos.find((p) => p.url === url);
  if (!project) return null;

  const layout = [
    "md:col-span-7",
    "md:col-span-4 md:col-start-9 mt-24",
    "md:col-span-5 md:col-start-2",
    "md:col-span-6 md:col-start-7 mt-24",
  ];

  return (
    <main
      ref={containerRef}
      className="fixed inset-0 min-h-screen w-full bg-stone-50 overflow-y-auto"
    >
      {/* portada */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src={project.portada}
          alt={project.titulo}
          className="w-full h-full object-cover"
        />
      </div>

      {/* galeria */}
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
