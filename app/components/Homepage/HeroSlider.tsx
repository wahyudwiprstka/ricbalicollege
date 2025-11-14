import Image from "next/image";

export default function HeroSlider() {
  return (
    <section className="relative w-full">
      <Image
        src="/img/banner.jpg"
        width={1920}
        height={756}
        alt="Banner"
        className="w-full"
      />
    </section>
  );
}
