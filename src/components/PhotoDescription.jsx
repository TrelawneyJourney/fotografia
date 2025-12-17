import { Link } from "react-router-dom";
import { icons } from "../assets/icons";

export default function PhotoDescription({ description }) {
  const Arrow = icons.arrow;
  return (
    <div className="text-white p-6 bg-neutral-800/20 backdrop-blur-2xl backdrop-opacity-55 max-w-md ">
      <h2 className="text-2xl lg:text-3xl font-pt mb-6">{description}</h2>
      <Link
        to="/projects"
        className="border w-36 px-4 py-2 flex justify-around items-center cursor-pointer hover:bg-neutral-800/90"
      >
        <p className="text-sm">Ver más</p>
        <div className="">
          <Arrow />
        </div>
      </Link>
    </div>
  );
}
