import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { chef } from "@/data/chef";

export function Cheffe() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Le savoir-faire derrière La Sirba"
          subtitle="Une passion pour la gastronomie africaine, un engagement pour l'excellence."
        />

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div>
            <PlaceholderImage
              variant="chef"
              aspect="portrait"
              label="Diallo Safiatou - Cheffe"
              className="w-full rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-brun md:text-3xl">
              {chef.name}
            </h3>
            <p className="mt-2 text-base text-ocre md:text-lg">
              {chef.title}
            </p>

            <div className="mt-6 rounded-lg border-l-4 border-ocre bg-cream p-5">
              <p className="text-sm font-medium text-brun md:text-base">
                {chef.distinction}
              </p>
              <p className="mt-1 text-xs text-brun/60 md:text-sm">
                {chef.distinctionDetail}
              </p>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-brun/70 md:text-base">
              {chef.bio}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-cream p-4 text-center">
                <p className="font-serif text-2xl font-bold text-brun">🏅</p>
                <p className="mt-1 text-xs text-brun/60">Médaille d&apos;or</p>
                <p className="text-[10px] text-brun/40">Gastronomie 2025</p>
              </div>
              <div className="rounded-lg bg-cream p-4 text-center">
                <p className="font-serif text-2xl font-bold text-brun">🍽️</p>
                <p className="mt-1 text-xs text-brun/60">Entrée gastronomique</p>
                <p className="text-[10px] text-brun/40">Catégorie speciale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
