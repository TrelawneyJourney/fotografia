import { icons } from "../assets/icons";

export default function PhotoDescription({ description }) {
  const Arrow = icons.arrow;
  return (
    <div className="text-white p-6 bg-neutral-800/20 backdrop-blur-2xl backdrop-opacity-55 max-w-md">
      <h2 className="text-2xl lg:text-3xl font-pt mb-6">{description}</h2>
      <button className="border px-4 py-2 flex justify-between items-center">
        <p className="text-sm pr-10">Ver más</p>
        <div className="">
          <Arrow />
        </div>
      </button>
    </div>
  );
}
