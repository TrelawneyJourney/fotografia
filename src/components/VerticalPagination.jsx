const COLORS = {
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

const ORIENTATION = {
  vertical: {
    container: "right-10 top-1/2 -translate-y-1/2 flex-col",
    line: "h-32 w-[2px]",
    lineAnimated: "left-0 top-0 w-full",
    style: (progress) => ({ height: `${progress * 100}%` }),
  },
  horizontal: {
    container: "bottom-4 left-1/2 -translate-x-1/2 flex-row gap-3",
    line: "w-32 h-[2px]",
    lineAnimated: "left-0 top-0 h-full",
    style: (progress) => ({ width: `${progress * 100}%` }),
  },
};

export default function VerticalPagination({
  active,
  total,
  color = "white",
  orientation = "vertical",
}) {
  // Progreso entre 0 y 1
  const progress = (active + 1) / total;
  const c = COLORS[color];
  const o = ORIENTATION[orientation];

  return (
    <div className={`fixed flex items-center ${o.container} z-40 ${c.text}`}>
      {/* Número actual */}
      <span className="text-lg font-light tracking-wider">
        {String(active + 1).padStart(2, "0")}
      </span>

      {/* Línea completa */}
      <div
        className={`${o.line} ${c.lineMuted} relative my-4 overflow-hidden `}
      >
        {/* Línea animada */}
        <div
          className={`absolute ${o.lineAnimated} ${c.line} transition-all duration-500`}
          style={o.style(progress)}
        />
      </div>

      {/* Total */}
      <span className="text-lg font-light tracking-wider opacity-60">
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
