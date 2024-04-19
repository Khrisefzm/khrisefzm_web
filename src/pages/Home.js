import React from "react";
import "../styles/home.css";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="projects">projects</section>
        <section id="contact">contact</section>
      </main>
    </>
  );
}

export default Home;
