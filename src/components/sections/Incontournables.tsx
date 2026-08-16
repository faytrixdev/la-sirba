import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const highlights = [
  { name: "Foutou sauce graine", price: 4000, category: "Spécialité", image: "/images/foutou-sauce-graine.jpg" },
  { name: "Choukouya de bœuf", price: 5000, category: "Grillade", image: "/images/choukouya-de-boeuf.jpeg" },
  { name: "Attiéké poisson braisé", price: 7000, category: "Poisson", image: "/images/attieque-poisson-braise.jpg" },
  { name: "Placali sauce kopè", price: 4000, category: "Spécialité", image: "/images/placali-sauce-kope.jpg" },
  { name: "Brochéttes de filet de bœuf", price: 5000, category: "Grillade", image: "/images/brochette-de-filet-de-boeuf.jpg" },
  { name: "Ailes de poulet", price: 4500, category: "Grillade", image: "/images/ailes-de-poulet.jpg" },
];

export function Incontournables() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Nos incontournables"
          subtitle="Les plats que nos clients adorent, préparés avec passion et authenticité."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-medium text-brun">{item.name}</h3>
                  <p className="mt-1 text-xs text-brun/50 capitalize">
                    {item.category}
                  </p>
                </div>
                <span className="whitespace-nowrap rounded-full bg-cream px-3 py-1 text-sm font-semibold text-brun">
                  {formatPrice(item.price)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" size="lg" href="/carte">
            Voir toute la carte
          </Button>
        </div>
      </div>
    </section>
  );
}
