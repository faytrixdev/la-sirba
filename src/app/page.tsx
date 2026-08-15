import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { Presentation } from "@/components/sections/Presentation";
import { NotreCuisine } from "@/components/sections/NotreCuisine";
import { Incontournables } from "@/components/sections/Incontournables";
import { CartePreview } from "@/components/sections/CartePreview";
import { Cheffe } from "@/components/sections/Cheffe";
import { Traiteur } from "@/components/sections/Traiteur";
import { GaleriePreview } from "@/components/sections/GaleriePreview";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Presentation />
      <NotreCuisine />
      <Incontournables />
      <CartePreview />
      <Cheffe />
      <Traiteur />
      <GaleriePreview />
      <ContactInfo />
      <CTA />
    </>
  );
}
