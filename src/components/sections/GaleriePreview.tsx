import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const galleryItems = [
  { label: "Plats traditionnels", image: "/images/plats-traditionnels.jpg" },
  { label: "Grillades", image: "/images/grillades.jpg" },
  { label: "Ambiance restaurant", image: "/images/ambiance-restaurant.jpg" },
  { label: "Événement traiteur", image: "/images/evenement-traiteur.jpg" },
  { label: "Cuisine africaine", image: "/images/cuisine-africaine.jpg" },
];

export function GaleriePreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Galerie"
          subtitle="Découvrez l'univers de La Sirba en images."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" size="lg" href="/galerie">
            Voir toute la galerie
          </Button>
        </div>
      </div>
    </section>
  );
}
