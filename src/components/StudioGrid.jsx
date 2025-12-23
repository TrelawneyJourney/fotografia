import { studioImg } from "../data/Estudio";

export default function StudioGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {studioImg.map((img) => (
        <div key={img.id} className="aspect-square overflow-hidden">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
