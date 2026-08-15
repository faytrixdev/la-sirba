import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { menuCategories, menuOptions } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

export function CartePreview() {
  const featuredCategories = menuCategories.slice(0, 3);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="La carte de La Sirba"
          subtitle="Un voyage gastronomique à travers les saveurs d'Afrique et de la cuisine classique."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold text-brun">
                {category.name}
              </h3>
              {category.note && (
                <p className="mt-1 text-xs font-medium text-ocre">
                  {category.note}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {category.items.slice(0, 4).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between text-sm"
                  >
                    <span className="text-brun/70">{item.name}</span>
                    {item.price && (
                      <span className="ml-2 shrink-0 text-xs font-semibold text-brun">
                        {formatPrice(item.price)}
                      </span>
                    )}
                  </li>
                ))}
                {category.items.length > 4 && (
                  <li className="pt-2 text-xs text-brun/40">
                    + {category.items.length - 4} autres...
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Options */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="font-serif text-lg font-semibold text-brun">
            Options
          </h3>
          <p className="mt-2 text-sm text-brun/70">
            <span className="font-medium">Viandes :</span>{" "}
            {menuOptions.viandes.join(" / ")}
          </p>
          <p className="mt-1 text-sm text-brun/70">
            <span className="font-medium">Suppléments :</span>{" "}
            {menuOptions.supplement}
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button variant="primary" size="lg" href="/carte">
            Consulter la carte complète
          </Button>
        </div>
      </div>
    </section>
  );
}
