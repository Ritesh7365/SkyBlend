import { FacilityImage } from "@/components/FacilityImage";
import { SectionHeading } from "@/components/SectionHeading";
import { PHOTOS } from "@/lib/photos";

const TILES = [
  PHOTOS.exterior,
  PHOTOS.warehouse,
  PHOTOS.office,
  PHOTOS.quality,
] as const;

export function FacilityGallery() {
  return (
    <section className="bg-surface content-visibility-auto">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Facility"
          title="Real plant. Real process."
          description="A look inside our Morbi manufacturing environment — office, development floor, warehouse and unit exterior."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {TILES.map((photo) => (
            <FacilityImage
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              aspect="video"
              overlay="navy"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
