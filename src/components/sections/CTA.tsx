import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

export function CTA() {
  return (
    <section className="bg-ocre py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
          Prêt à découvrir La Sirba ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
          Réservez votre table ou contactez-nous pour votre prochain événement.
          Nous serons ravis de vous accueillir.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour La Sirba ! Je souhaite réserver une table. Merci !")}`}
            external
          >
            Réserver une table
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/carte"
            className="border-white text-white hover:bg-white hover:text-ocre"
          >
            Voir la carte
          </Button>
        </div>
      </div>
    </section>
  );
}
