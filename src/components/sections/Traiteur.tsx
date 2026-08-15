import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

const eventTypes = [
  "Événements privés",
  "Mariages",
  "Réceptions",
  "Événements professionnels",
];

export function Traiteur() {
  return (
    <section id="traiteur" className="bg-brun py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Le savoir-faire La Sirba pour vos événements"
          subtitle="Apportez l'authenticité et la gastronomie de La Sirba à vos moments spéciaux."
          light
        />

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <div>
            <div className="mb-6 inline-block rounded-full bg-ocre/20 px-4 py-2">
              <p className="text-sm font-medium text-ocre">
                Service traiteur disponible
              </p>
            </div>

            <p className="text-sm leading-relaxed text-cream/80 md:text-base">
              Que ce soit pour un mariage, une réception ou un événement
              professionnel, La Sirba met son expertise culinaire au service de
              vos celebrations. Nos plats apportent authenticité et saveur à
              chaque table.
            </p>

            <div className="mt-6 space-y-3">
              {eventTypes.map((type) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-ocre" />
                  <span className="text-sm text-cream/70">{type}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour, je souhaite discuter d'un événement traiteur avec La Sirba.")}`}
                external
              >
                Parler de votre événement
              </Button>
            </div>
          </div>

          {/* Image */}
          <div>
            <PlaceholderImage
              variant="event"
              aspect="video"
              label="Service traiteur La Sirba"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
