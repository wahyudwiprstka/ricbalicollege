import { client } from "@/app/lib/sanity.client";
import { profileQuery } from "@/app/lib/queries";
import VisionMission from "./components/Homepage/visionMission";
import AboutSection from "./components/Homepage/AboutSection";
import ProgramStudi from "./components/Homepage/Prodi";
import CTASection from "./components/Homepage/CTA";
import CabangKami from "./components/Homepage/Cabang";
import Hero from "./components/Homepage/Hero";
import Sponsor from "./components/Homepage/Sponsor";
import Partner from "./components/Homepage/Partner";

export default async function HomePage() {
  const profile = await client.fetch(profileQuery);

  return (
    <main>
      <Hero />
      <VisionMission />
      <AboutSection />
      <CabangKami />
      <ProgramStudi />
      <Sponsor />
      <Partner />
      <CTASection />
    </main>
  );
}
