import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";

const galleryItems = [
  { label: "Plats traditionnels", variant: "food" as const, aspect: "video" as const },
  { label: "Grillades", variant: "food" as const, aspect: "square" as const },
  { label: "Ambiance restaurant", variant: "ambiance" as const, aspect: "video" as const },
  { label: "La cheffe au travail", variant: "chef" as const, aspect: "portrait" as const },
  { label: "Événement traiteur", variant: "event" as const, aspect: "video" as const },
  { label: "Cuisine africaine", variant: "food" as const, aspect: "square" as const },
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
              className={`group overflow-hidden rounded-lg ${
                index === 0 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <PlaceholderImage
                variant={item.variant}
                aspect={item.aspect}
                label={item.label}
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
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
