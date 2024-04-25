import About from "@/components/app/about/About";
import Contact from "@/components/app/contact/Contact";
import Hero from "@/components/app/hero/Hero";
import JoinUs from "@/components/app/join-us/JoinUs";
import Speakers from "@/components/app/speakers/Speakers";
import Sponsors from "@/components/app/sponsors/Sponsors";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Speakers />
      <JoinUs />
      <Sponsors />
      <Contact />
    </main>
  );
}
