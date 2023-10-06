import { useParams } from "react-router-dom";
import projectData from "../data/projectData.json";
import classes from "./Project.module.css";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import github from "../images/github.svg";
import ScrollToTop from "../ScrollToTop";

export default function Project() {
  const params = useParams();

  const project = Object.values(projectData).find(
    (item) => item.nav === params.projectTitle
  );

  return (
    <ScrollToTop>
      <div className={classes.card}>
        <div className={classes.container}>
          <div style={{ display: "flex" }}>
            <h1 className={classes.maintitle}>{project.title}</h1>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image fluid="true" src={github} alt="Github" /> Github
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer">
                <h5>Website</h5>
              </a>
            )}
          </div>
          <div className={classes.content}>
            <h3 className={classes.title}>About</h3>
            <p>{project.about}</p>
          </div>
          <Image
            src={project.image}
            alt={project.alt}
            className={classes.image}
          />

          {project.motivations.length !== 0 && (
            <div className={classes.content}>
              <h3 className={classes.title}>Motivation</h3>
              <ul className={classes.motivations}>
                {project.motivations.map((motivation) => (
                  <li>{motivation}</li>
                ))}
              </ul>
            </div>
          )}
          {Object.values(project.features).length !== 0 && (
            <div className={classes.content}>
              <h3 className={classes.title}>Features</h3>
              <ul className={classes.features}>
                {Object.keys(project.features).map((featureName) => (
                  <li>
                    {featureName}:
                    <ul>
                      {project.features[featureName].map((feature) => (
                        <li>{feature}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.libraries.length !== 0 && (
            <div className={classes.content}>
              <h3 className={classes.title}>Libraries used</h3>
              <ul className={classes.libraries}>
                {project.libraries.map((lib) => (
                  <li>{lib}</li>
                ))}
              </ul>
            </div>
          )}
          {project.conclusion.length !== 0 && (
            <div className={classes.content}>
              <h3 className={classes.title}>Conclusion</h3>
              <ul className={classes.conclusion}>
                {project.conclusion.map((para) => (
                  <li>{para}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </ScrollToTop>
  );
}
