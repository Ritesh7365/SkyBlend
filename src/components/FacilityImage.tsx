import Image from "next/image";

type FacilityImageProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  overlay?: "none" | "navy" | "soft";
};

const aspectClass = {
  video: "aspect-[1.6]",
  square: "aspect-square",
  portrait: "aspect-[0.8]",
  wide: "aspect-[2.33]",
};

export function FacilityImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspect = "video",
  overlay = "soft",
}: FacilityImageProps) {
  return (
    <figure
      className={`group relative h-full w-full overflow-hidden bg-navy/5 ${className}`}
    >
      <div className={`relative h-full w-full ${aspectClass[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {overlay === "navy" ? (
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/20 to-navy/5"
            aria-hidden="true"
          />
        ) : null}
        {overlay === "soft" ? (
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent"
            aria-hidden="true"
          />
        ) : null}
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
          aria-hidden="true"
        />
        {caption ? (
          <figcaption className="absolute inset-x-0 bottom-0 z-10 px-4 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase sm:px-5 sm:text-xs">
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
