import { Link } from "react-router-dom";
import { icons } from "../assets/icons";
import StudioGrid from "../components/StudioGrid";

export default function Estudio() {
  const Arrow = icons.arrow;
  return (
    <main className="h-screen w-full bg-gradient-to-b from-neutral-300 to-stone-50 md:overflow-hidden">
      {/* portada */}
      {/* <div className="h-[500px] w-full overflow-hidden">
        <img src={photoStudio.portada} className="w-full h-full object-cover" />
      </div> */}

      <section className="grid grid-cols-12 gap-6 px-8 h-screen">
        {/* Columna izquierda */}
        <div className="py-32 col-span-12 md:col-span-4 md:col-start-2">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-xs tracking-widest text-neutral-500 my-1">
                formo parte de
              </span>
              <h2 className="text-xl font-light">HECHIZARTE</h2>
              <h3 className=" text-xs tracking-widest text-neutral-500">
                estudio fotografico
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600 max-w-xs">
              Junto con mi colega Eru, somos creadoras de un espacio donde cada
              imagen cuenta una historia única. En nuestro estudio capturamos tu
              esencia con profesionalismo, dedicación y una atención
              personalizada pensada especialmente para vos. Desde retratos que
              celebran tu personalidad hasta sesiones para parejas, familias o
              momentos especiales, cada sesión está diseñada para ser una
              experiencia auténtica y memorable. Tu historia merece ser
              inmortalizada de forma única… y nosotros sabemos cómo lograrlo.
            </p>
            <Link
              to={"https://www.instagram.com/hechizarte.fotografia/"}
              className="border w-36 px-4 py-2 flex justify-around items-center cursor-pointer hover:bg-neutral-800/90"
            >
              <p className="text-sm">Saber más</p>
              <div className="">
                <Arrow />
              </div>
            </Link>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="py-10 col-span-12 md:col-span-5 md:col-start-7">
          <StudioGrid />
        </div>
      </section>
    </main>
  );
}
