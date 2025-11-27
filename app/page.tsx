import { client } from "@/app/lib/sanity.client";
import { profileQuery } from "@/app/lib/queries";
import HeroSlider from "./components/Homepage/HeroSlider";
import VisionMission from "./components/Homepage/visionMission";
import AboutSection from "./components/Homepage/AboutSection";
import ProgramStudi from "./components/Homepage/Prodi";
import CTASection from "./components/Homepage/CTA";
import Footer from "./components/Footer";
import WhatsappPopup from "./components/WhatsappPopup";
import CabangKami from "./components/Homepage/Cabang";

export default async function HomePage() {
  const profile = await client.fetch(profileQuery);

  return (
    <main>
      <HeroSlider />
      <VisionMission />
      <AboutSection />
      <CabangKami />
      <ProgramStudi />
      <CTASection />
    </main>
  );
}
