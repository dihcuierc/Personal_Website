import Card from "react-bootstrap/Card";
import AssignmentIcon from "@mui/icons-material/Assignment";
import projectData from "./projectData.json";
import classes from "./Projects.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  return (
    <div className={classes.card}>
      <div className={classes.projectsBoard}>
        <Card.Title className={classes.contentTitle}>
          Projects I've Done <AssignmentIcon fontSize="large" />
        </Card.Title>
        <Container fluid className="gx-0">
          <Row className="gx-0" xs={2}>
            {Object.values(projectData)
              .reverse()
              .map((project) => (
                <Col>
                  <div className={classes.container} key={project.image}>
                    <a className={classes.titleLink} href={project.link}>
                      <h2>{project.title}</h2>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className={classes.image}
                      />
                    </a>
                    <div className={classes.content}>{project.description}</div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
