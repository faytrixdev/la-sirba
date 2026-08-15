import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { chef } from "@/data/chef";

export function Expertise() {
  return (
    <section className="bg-brun py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Une expertise récompensée"
          light
        />

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative">
            <PlaceholderImage
              variant="chef"
              aspect="portrait"
              label="Photo de Diallo Safiatou"
              className="w-full rounded-lg"
            />
            {/* Medal badge */}
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-ocre px-4 py-3 shadow-lg md:-bottom-6 md:-right-6 md:px-6">
              <p className="text-xs font-bold uppercase tracking-wider text-white md:text-sm">
                🏅 Médaille d&apos;or
              </p>
              <p className="text-[10px] text-white/80 md:text-xs">
                Mondial de la Gastronomie 2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">
              {chef.name}
            </h3>
            <p className="mt-2 text-sm text-ocre md:text-base">
              {chef.title}
            </p>
            <div className="mt-6 rounded-lg bg-brun-fonce/50 p-5">
              <p className="text-base font-medium text-ocre md:text-lg">
                {chef.distinction}
              </p>
              <p className="mt-1 text-sm text-cream/70">
                {chef.distinctionDetail}
              </p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-cream/80 md:text-base">
              {chef.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
