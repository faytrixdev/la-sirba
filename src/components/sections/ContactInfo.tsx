import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

export function ContactInfo() {
  return (
    <section id="contact" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          title="Venez nous rencontrer"
          subtitle="Nous vous accueillons du mardi au dimanche pour une expérience gastronomique unique."
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {/* Horaires */}
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream">
              <svg
                className="h-6 w-6 text-brun"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-brun">
              Horaires
            </h3>
            <p className="mt-2 text-sm text-brun/70">
              {contactInfo.hours.days}
            </p>
            <p className="text-sm font-medium text-brun">
              {contactInfo.hours.time}
            </p>
            <p className="mt-1 text-xs text-ocre">{contactInfo.hours.closed}</p>
          </div>

          {/* Adresse */}
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream">
              <svg
                className="h-6 w-6 text-brun"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-brun">
              Adresse
            </h3>
            <p className="mt-2 text-sm text-brun/70">
              {contactInfo.address.street}
            </p>
            <p className="text-sm font-medium text-brun">
              {contactInfo.address.city}
            </p>
          </div>

          {/* Réservation */}
          <div className="rounded-lg bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream">
              <svg
                className="h-6 w-6 text-brun"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-semibold text-brun">
              Réservation
            </h3>
            <div className="mt-2 space-y-1">
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

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            size="lg"
            href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour, je souhaite réserver une table chez La Sirba.")}`}
            external
          >
            Réserver une table
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour, je souhaite contacter La Sirba.")}`}
            external
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
}
