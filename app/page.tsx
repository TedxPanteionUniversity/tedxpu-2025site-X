/* Homepage */
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import Timeline from "@/components/home/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen  text-white py-20">
      <section style={{}}>
        <Marquee />
        <HeroSection />
        <Marquee reverse />
      </section>
        <Timeline />
      
    </main>
  );
}
