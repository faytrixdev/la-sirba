import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/contact";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="La Sirba - Spécialités africaines, grillades et cuisine classique"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brun-fonce/80 via-brun-fonce/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 md:px-6 md:py-40">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-ocre md:text-base">
            Restaurant &amp; Traiteur
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl">
            La Sirba
          </h1>
          <p className="mt-4 font-serif text-xl italic text-ocre md:text-2xl">
            {contactInfo.slogan}
          </p>
          <p className="mt-4 max-w-lg text-base text-cream/80 md:text-lg">
            Spécialités africaines, grillades &amp; cuisine classique. Un voyage
            gastronomique au cœur des traditions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              href="/carte"
            >
              Découvrir la carte
            </Button>
            <Link
              href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour La Sirba ! Je souhaite réserver une table. Merci !")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-medium text-white transition-colors duration-300 hover:bg-white hover:text-brun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-cream/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
