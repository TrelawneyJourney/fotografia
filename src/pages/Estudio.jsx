import { Link } from "react-router-dom";
import { icons } from "../assets/icons";
import StudioGrid from "../components/StudioGrid";

export default function Estudio() {
  const Arrow = icons.arrow;
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-neutral-300 to-stone-50 md:overflow-hidden">
      <div className="grid grid-cols-12 gap-2 md:gap-6 px-10 md:px-8">
        {/* Columna izquierda */}
        <div className="pt-20 md:py-32 col-span-12 md:col-span-4 md:col-start-2">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-xs tracking-widest text-neutral-500">
                formo parte de
              </span>
              <h2 className="text-2xl font-light tracking-widest">
                HECHIZARTE
              </h2>
              <h3 className=" text-xs tracking-widest text-neutral-700">
                estudio fotográfico
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600 md:max-w-xs">
              Junto con mi colega Eru, somos creadoras de un espacio donde cada
              imagen cuenta una historia única. En nuestro estudio capturamos tu
              esencia con profesionalismo, dedicación y una atención
              personalizada pensada especialmente para vos. Desde retratos que
              celebran tu personalidad hasta sesiones para parejas, familias o
              momentos especiales, cada sesión está diseñada para ser una
              experiencia auténtica y memorable. Tu historia merece ser
              inmortalizada de forma única… y nosotros sabemos cómo lograrlo.
            </p>

            <a
              href="https://www.instagram.com/hechizarte.fotografia/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-500 w-36 px-4 py-2 flex justify-around items-center cursor-pointer hover:bg-neutral-300 text-neutral-500"
            >
              <p className="text-sm">Saber más</p>
              <Arrow className="text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="py-10 col-span-12 md:col-span-5 md:col-start-7">
          <StudioGrid />
        </div>
      </div>
    </main>
  );
}
