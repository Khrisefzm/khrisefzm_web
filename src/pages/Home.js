import React from "react";
import "../styles/global.css";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="projects" className="bg-project">
          <Projects />
        </section>
        <section id="contact">contact</section>
      </main>
    </>
  );
}

export default Home;
