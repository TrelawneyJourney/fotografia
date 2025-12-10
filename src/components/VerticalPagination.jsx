export default function VerticalPagination({ active, total }) {
  // Progreso entre 0 y 1
  const progress = (active + 1) / total;

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center text-white z-40">
      {/* Número actual */}
      <span className="text-lg font-light tracking-wider">
        {String(active + 1).padStart(2, "0")}
      </span>

      {/* Línea completa */}
      <div className="h-32 w-[2px] bg-white/20 relative my-4 overflow-hidden">
        {/* Línea animada */}
        <div
          className="absolute left-0 top-0 w-full bg-white transition-all duration-500"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Total */}
      <span className="text-lg font-light tracking-wider opacity-60">
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
