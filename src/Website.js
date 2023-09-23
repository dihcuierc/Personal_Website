import NavBar from "./components/NavBar";
import background from "./components/Background.module.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Website() {
  return (
    <div className={background.main}>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
