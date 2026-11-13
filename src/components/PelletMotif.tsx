type PelletMotifProps = {
  className?: string;
  spin?: boolean;
};

export function PelletMotif({ className = "", spin = false }: PelletMotifProps) {
  return (
    <img
      src="/icons/pellet-spiral.svg"
      alt=""
      aria-hidden="true"
      className={`${spin ? "motif-spin-slow" : ""} ${className}`}
      width={200}
      height={200}
    />
  );
}

export function PelletDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-teal/50 sm:w-20" />
      <PelletMotif className="h-8 w-8 opacity-70" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-teal/50 sm:w-20" />
    </div>
  );
}
