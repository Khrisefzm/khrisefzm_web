import React from "react";
import "../styles/home.css";
import { Navbar } from "../components/Navbar";
import { CatAnimation } from "../components/CatAnimation";
import { Icon } from "../components/Buttons";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Icon icon="github" link="https://github.com/Khrisefzm" />
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
