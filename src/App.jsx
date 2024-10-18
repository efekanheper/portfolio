import React from "react";
import SlideTabs from "./components/SlideTabs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { GridHero } from "./components/GridHero";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black">
      <SlideTabs />
      <section id="home">
        <GridHero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}

export default App;
