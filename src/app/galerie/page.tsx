import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez l'univers de La Sirba en images — plats, grillades, ambiance, traiteur et événements.",
};

const galleryImages = [
  { label: "Plats traditionnels", image: "/images/plats-traditionnels.jpg" },
  { label: "Grillades", image: "/images/grillades.jpg" },
  { label: "Ambiance restaurant", image: "/images/ambiance-restaurant.jpg" },
  { label: "Spécialités africaines", image: "/images/specialites-africaines.jpg" },
  { label: "Événement traiteur", image: "/images/evenement-traiteur.jpg" },
  { label: "Cuisine africaine", image: "/images/cuisine-africaine.jpg" },
  { label: "Cuisine classique", image: "/images/cuisine-classique.jpg" },
  { label: "Foutou sauce graine", image: "/images/foutou-sauce-graine.jpg" },
  { label: "Choukouya de bœuf", image: "/images/choukouya-de-boeuf.jpeg" },
  { label: "Brochette de filet", image: "/images/brochette-de-filet-de-boeuf.jpg" },
  { label: "Attiéké poisson braisé", image: "/images/attieque-poisson-braise.jpg" },
  { label: "Ailes de poulet", image: "/images/ailes-de-poulet.jpg" },
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
                <div className="relative overflow-hidden">
                  <Image
                    src={img.image}
                    alt={img.label}
                    width={800}
                    height={600}
                    className="w-full transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
