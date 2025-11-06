import { client } from "@/app/lib/sanity.client";
import { profileQuery } from "@/app/lib/queries";
import HeroSlider from "./components/HeroSlider";
import VisionMission from "./components/visionMission";
import AboutSection from "./components/AboutSection";
import ProgramStudi from "./components/Prodi";

export default async function HomePage() {
  const profile = await client.fetch(profileQuery);

  return (
    <main>
      <HeroSlider />
      <VisionMission />
      <AboutSection />
      <ProgramStudi />
      {/* <section className="px-16 py-10">
        <h1 className="text-3xl font-bold mb-4">{profile?.name}</h1>
        <h2 className="text-xl font-semibold mb-2">Visi</h2>
        <p>{profile?.vision}</p>

        <h2 className="text-xl font-semibold mt-4">Misi</h2>
        <ul className="list-disc list-inside">
          {profile?.mission.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Kontak</h2>
        <p>{profile?.address}</p>
        <p>{profile?.email}</p>
        <p>{profile?.phone}</p>
      </section> */}
    </main>
  );
}
