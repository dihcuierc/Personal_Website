import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import projectData from "./projectData.json";
import projects from "./Projects.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  return (
    <div className={classes.card}>
      <div className={projects.projectsBoard}>
        <Card.Title className={classes.contentTitle}>
          Projects I've Done <AssignmentIcon fontSize="large" />
        </Card.Title>
        <Container fluid className="gx-0">
          <Row className="gx-0" xs={2}>
            {Object.values(projectData)
              .reverse()
              .map((project) => (
                <Col>
                  <div className={projects.container} key={project.image}>
                    <a className={projects.titleLink} href={project.link}>
                      <h2>{project.title}</h2>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className={projects.image}
                      />
                    </a>
                    <div className={projects.content}>
                      {project.description}
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
