import React from "react";
import SlideTabs from "./components/SlideTabs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { GridHero } from "./components/GridHero";

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
    </main>
  );
}

export default App;
