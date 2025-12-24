import { useNavigate, useParams } from "react-router-dom";
import { proyectos } from "../data/Projects";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectsDetail() {
  const { url } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        imageRef.current,
        { scale: 1.08, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
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
    "md:col-span-5 md:col-start-2 mt-24 md:mt-0",
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
          ref={imageRef}
          src={project.portada}
          alt={project.titulo}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          ref={textRef}
          className="absolute bottom-10 left-0 right-0 m-auto md:inset-0 flex flex-col  gap-2 md:gap-3 justify-center items-center text-shadow-md/70 text-shadow-neutral-900"
        >
          <p className="text-xl font-light tracking-widest text-neutral-100">
            proyecto
          </p>
          <h2 className="font-pt text-4xl font-semibold tracking-widest text-neutral-200">
            {project.titulo}
          </h2>
        </div>
      </div>

      {/* galeria */}
      <section className="grid grid-cols-1 md:grid-cols-12 my-24">
        <div className="col-start-2 col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
            {project.fotos.map((photo, i) => (
              <div key={photo} className={layout[i % layout.length]}>
                <div>
                  <img
                    src={photo}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  <p className="font-light tracking-wider text-md">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
