"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { contactInfo } from "@/data/contact";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(!isHome || window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6" style={{ height: "72px" }}>
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center" style={{ height: "100%" }}>
            <Image
              src="/images/logo.png"
              alt="La Sirba"
              width={160}
              height={55}
              className="w-auto object-contain"
              style={{ maxHeight: "48px" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-brun/80 hover:text-brun"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant={scrolled ? "primary" : "secondary"}
              size="sm"
              href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour La Sirba ! Je souhaite réserver une table. Merci !")}`}
              external
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  isOpen
                    ? "translate-y-2 rotate-45 bg-brun"
                    : scrolled
                      ? "bg-brun"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  isOpen
                    ? "opacity-0"
                    : scrolled
                      ? "bg-brun"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  isOpen
                    ? "-translate-y-2 -rotate-45 bg-brun"
                    : scrolled
                      ? "bg-brun"
                      : "bg-white"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-brun transition-colors hover:text-ocre"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <Button
              variant="primary"
              size="lg"
              href={`https://wa.me/${contactInfo.whatsapp.raw}?text=${encodeURIComponent("Bonjour La Sirba ! Je souhaite réserver une table. Merci !")}`}
              external
              onClick={() => setIsOpen(false)}
            >
              Réserver une table
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
