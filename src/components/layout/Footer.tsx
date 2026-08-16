import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/data/navigation";
import { contactInfo } from "@/data/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brun-fonce text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="La Sirba"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
            <p className="mt-2 text-sm italic text-ocre">
              {contactInfo.slogan}
            </p>
            <p className="mt-3 text-sm text-cream/70">
              {contactInfo.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocre">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocre">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-cream/70">
              <p>
                {contactInfo.address.street}
                <br />
                {contactInfo.address.city}, {contactInfo.address.country}
              </p>
              {contactInfo.phones.map((phone) => (
                <p key={phone.number}>
                  <a
                    href={`tel:${phone.raw}`}
                    className="transition-colors hover:text-white"
                  >
                    {phone.number}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ocre">
              Horaires
            </h4>
            <div className="space-y-2 text-sm text-cream/70">
              <p>
                {contactInfo.hours.days}
                <br />
                {contactInfo.hours.time}
              </p>
              <p className="text-ocre/80">{contactInfo.hours.closed}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/50">
          <p>
            &copy; {currentYear} {contactInfo.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
