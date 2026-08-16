"use client";

import { useState, useCallback } from "react";
import { menuCategories, menuOptions, type MenuCategory } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

function CategoryNav({
  categories,
  active,
  onSelect,
}: {
  categories: MenuCategory[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const handleClick = useCallback(
    (id: string) => {
      onSelect(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [onSelect]
  );

  return (
    <div className="sticky top-[72px] z-30 border-b border-brun/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="no-scrollbar flex gap-2 overflow-x-auto py-3 md:flex-wrap md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === cat.id
                  ? "bg-brun text-white"
                  : "bg-white text-brun/70 hover:bg-cream hover:text-brun"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuCategorySection({
  category,
  isActive,
}: {
  category: MenuCategory;
  isActive: boolean;
}) {
  return (
    <div className="scroll-mt-[120px]" id={category.id}>
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold text-brun md:text-3xl">
          {category.name}
        </h2>
        {category.note && (
          <p className="mt-1 text-sm font-medium text-ocre">{category.note}</p>
        )}
      </div>

      <div className="space-y-0 divide-y divide-brun/10">
        {category.items.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline justify-between py-4"
          >
            <span className="text-sm font-medium text-brun md:text-base">
              {item.name}
            </span>
            {item.price && (
              <span className="ml-4 shrink-0 text-sm font-semibold text-brun">
                {formatPrice(item.price)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CartePage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <section className="bg-brun py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            La carte
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-cream/80 md:text-lg">
            Découvrez nos spécialités africaines, grillades et cuisine
            classique.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav
        categories={menuCategories}
        active={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* Menu Content */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {/* Desktop: Show all categories */}
          <div className="hidden md:block">
            {menuCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <MenuCategorySection
                  category={category}
                  isActive={category.id === activeCategory}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Show active category */}
          <div className="md:hidden">
            {menuCategories
              .filter((cat) => cat.id === activeCategory)
              .map((category) => (
                <MenuCategorySection
                  key={category.id}
                  category={category}
                  isActive={true}
                />
              ))}
          </div>

          {/* Options */}
          <div className="mt-8 rounded-lg border border-brun/10 bg-white p-6">
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

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="mb-4 text-sm text-brun/60">
              Pour réserver ou commander, contactez-nous directement.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour La Sirba ! Je souhaite passer une commande. Merci !")}`}
              external
            >
              Commander via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
