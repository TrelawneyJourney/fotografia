const colors = {
  white: {
    text: "text-white",
    line: "bg-white",
    lineMuted: "bg-white/20",
  },
  neutral: {
    text: "text-neutral-500",
    line: "bg-neutral-500",
    lineMuted: "bg-neutral-500/20",
  },
};

export default function VerticalPagination({ active, total, color = "white" }) {
  // Progreso entre 0 y 1
  const progress = (active + 1) / total;
  const c = colors[color];

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-40 ${c.text}`}
    >
      {/* Número actual */}
      <span className="text-lg font-light tracking-wider">
        {String(active + 1).padStart(2, "0")}
      </span>

      {/* Línea completa */}
      <div
        className={`h-32 w-[2px] ${c.lineMuted} relative my-4 overflow-hidden `}
      >
        {/* Línea animada */}
        <div
          className={`absolute left-0 top-0 w-full ${c.line} transition-all duration-500`}
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
