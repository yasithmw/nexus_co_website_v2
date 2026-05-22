import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Statement } from "@/components/sections/statement";
import { Work } from "@/components/sections/work";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <div className="shell">
          <Hero />
        </div>
        <Statement />
        <div className="shell">
          <Services />
          <Work />
        </div>
        <About />
        <Contact />
      </main>
    </>
  );
}
