import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function NotreCuisine() {
  return (
    <section id="notre-cuisine" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Notre cuisine"
          subtitle="Trois univers culinaires, une seule philosophie : l'authenticité."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <PlaceholderImage
                  variant="food"
                  aspect="video"
                  label={service.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-brun">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brun/60">
                  {service.description}
                </p>
                <div className="mt-4">
                  <Button variant="ghost" size="sm" href="/carte">
                    Voir la carte →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
