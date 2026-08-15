import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Presentation() {
  return (
    <section id="apropos" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <div className="order-2 md:order-1">
            <SectionHeader
              title="Une cuisine qui raconte une histoire"
              subtitle="Chaque plat est un héritage. Chaque saveur, une tradition transmise avec passion."
              centered={false}
            />
            <div className="space-y-4 text-sm leading-relaxed text-brun/70 md:text-base">
              <p>
                La Sirba, c&apos;est bien plus qu&apos;un restaurant. C&apos;est un
                espace dédié à la célébration de la cuisine africaine dans toute
                sa richesse et sa diversité.
              </p>
              <p>
                Nos racines sont africaines, notre savoir-faire est
                gastronomique. Nous puisons dans les traditions culinaires les
                plus authentiques pour créer des expériences qui honorent
                l&apos;héritage culinaire du continent.
              </p>
              <p>
                De la préparation des sauces traditionnelles à l&apos;art de la
                grillade, en passant par la cuisine classique, chaque détail est
                pensé avec soin pour offrir une expérience conviviale et
                mémorable.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <PlaceholderImage
              variant="restaurant"
              aspect="video"
              label="Intérieur du restaurant La Sirba"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
