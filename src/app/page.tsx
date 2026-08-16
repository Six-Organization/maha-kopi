import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Why } from "@/components/site/why";
import { Signatures } from "@/components/site/signatures";
import { MenuSection } from "@/components/site/menu-section";
import { Gallery } from "@/components/site/gallery";
import { Visit } from "@/components/site/visit";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Why />
        <Signatures />
        <MenuSection />
        <Gallery />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
