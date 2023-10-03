import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Qualifications from "./components/Qualifications";

export default function Website() {
  return (
    <div>
      <Home />
      <About />
      <Qualifications />
      <ProjectList />
    </div>
  );
}
