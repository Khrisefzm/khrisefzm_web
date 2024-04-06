import React from "react";
import "../styles/home.css";
import { Navbar } from "../components/Navbar";
import { CatAnimation } from "../components/CatAnimation";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <CatAnimation />
      </div>
      <section id="about" style={{ height: "700px" }}>
        about
      </section>
      <section id="projects" style={{ height: "700px" }}>
        projects
      </section>
      <section id="contact" style={{ height: "700px" }}>
        contact
      </section>
    </>
  );
}

export default Home;
