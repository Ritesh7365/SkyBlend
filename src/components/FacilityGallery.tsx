import { FacilityImage } from "@/components/FacilityImage";
import { SectionHeading } from "@/components/SectionHeading";
import { PHOTOS } from "@/lib/photos";

const TILES = [
  {
    photo: PHOTOS.exterior,
    priority: true,
  },
  {
    photo: PHOTOS.warehouse,
    priority: false,
  },
  {
    photo: PHOTOS.office,
    priority: false,
  },
  {
    photo: PHOTOS.quality,
    priority: false,
  },
] as const;

export function FacilityGallery() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Facility"
          title="Real plant. Real process."
          description="A look inside our Morbi manufacturing environment — office, development floor, warehouse and unit exterior."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {TILES.map(({ photo, priority }) => (
            <FacilityImage
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              aspect="video"
              overlay="navy"
              priority={priority}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="shadow-[0_12px_40px_rgba(11,42,74,0.08)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
