import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez l'univers de La Sirba en images — plats, grillades, ambiance, traiteur et événements.",
};

const galleryImages = [
  { label: "Poulet braisé", variant: "food" as const, aspect: "video" as const },
  { label: "Sauce traditionnelle", variant: "food" as const, aspect: "square" as const },
  { label: "Ambiance restaurant", variant: "ambiance" as const, aspect: "wide" as const },
  { label: "Brochettes de filet", variant: "food" as const, aspect: "square" as const },
  { label: "La cheffe Safiatou", variant: "chef" as const, aspect: "portrait" as const },
  { label: "Service traiteur", variant: "event" as const, aspect: "video" as const },
  { label: "Foutou igname", variant: "food" as const, aspect: "square" as const },
  { label: "Grillades au feu", variant: "food" as const, aspect: "video" as const },
  { label: "Événement privé", variant: "event" as const, aspect: "video" as const },
  { label: "Plat du chef", variant: "food" as const, aspect: "square" as const },
  { label: "Intérieur du restaurant", variant: "restaurant" as const, aspect: "wide" as const },
  { label: "Salade composée", variant: "food" as const, aspect: "square" as const },
];

export default function GaleriePage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brun py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Galerie
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-cream/80 md:text-lg">
            Plats, grillades, ambiance, traiteur — découvrez l&apos;univers de
            La Sirba.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
              >
                <PlaceholderImage
                  variant={img.variant}
                  aspect={img.aspect}
                  label={img.label}
                  className="w-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
