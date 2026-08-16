import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez l'univers de La Sirba en images — plats, grillades, ambiance, traiteur et événements.",
};

const galleryImages = [
  { label: "Plats traditionnels", image: "/images/plats-traditionnels.jpg", span: "large" },
  { label: "Grillades", image: "/images/grillades.jpg", span: "normal" },
  { label: "Ambiance restaurant", image: "/images/ambiance-restaurant.jpg", span: "normal" },
  { label: "Spécialités africaines", image: "/images/specialites-africaines.jpg", span: "normal" },
  { label: "Événement traiteur", image: "/images/evenement-traiteur.jpg", span: "large" },
  { label: "Cuisine africaine", image: "/images/cuisine-africaine.jpg", span: "normal" },
  { label: "Cuisine classique", image: "/images/cuisine-classique.jpg", span: "normal" },
  { label: "Foutou sauce graine", image: "/images/foutou-sauce-graine.jpg", span: "normal" },
  { label: "Choukouya de bœuf", image: "/images/choukouya-de-boeuf.jpeg", span: "large" },
  { label: "Brochette de filet", image: "/images/brochette-de-filet-de-boeuf.jpg", span: "normal" },
  { label: "Attiéké poisson braisé", image: "/images/attieque-poisson-braise.jpg", span: "normal" },
  { label: "Ailes de poulet", image: "/images/ailes-de-poulet.jpg", span: "normal" },
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
          {/* Mobile: simple grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg"
              >
                <Image
                  src={img.image}
                  alt={img.label}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="50vw"
                />
              </div>
            ))}
          </div>

          {/* Desktop: editorial grid */}
          <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg ${
                  img.span === "large" ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${img.span === "large" ? "aspect-[16/9]" : "aspect-square"}`}>
                  <Image
                    src={img.image}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes={img.span === "large" ? "(max-width: 1024px) 66vw, 50vw" : "(max-width: 1024px) 33vw, 25vw"}
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
