import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Réservation",
  description:
    "Contactez La Sirba pour réserver une table ou pour votre événement traiteur. Cité Azimo, Ouaga 2000.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <section className="bg-brun py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Contact & Réservation
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-cream/80 md:text-lg">
            Nous serons ravis de vous accueillir ou de répondre à vos questions.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Horaires */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-brun">
                Horaires
              </h3>
              <p className="mt-3 text-sm text-brun/70">
                {contactInfo.hours.days}
              </p>
              <p className="text-sm font-medium text-brun">
                {contactInfo.hours.time}
              </p>
              <p className="mt-1 text-xs text-ocre">{contactInfo.hours.closed}</p>
            </div>

            {/* Adresse */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-brun">
                Adresse
              </h3>
              <p className="mt-3 text-sm text-brun/70">
                {contactInfo.address.street}
              </p>
              <p className="text-sm font-medium text-brun">
                {contactInfo.address.city}
              </p>
            </div>

            {/* Téléphone */}
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-brun">
                Téléphone
              </h3>
              <div className="mt-3 space-y-2">
                {contactInfo.phones.map((phone) => (
                  <p key={phone.number}>
                    <a
                      href={`tel:${phone.raw}`}
                      className="text-sm font-medium text-brun transition-colors hover:text-ocre"
                    >
                      {phone.number}
                    </a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour, je souhaite réserver une table chez La Sirba.")}`}
              external
            >
              Réserver via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={`tel:${contactInfo.phones[0].raw}`}
            >
              Appeler le {contactInfo.phones[0].number}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
