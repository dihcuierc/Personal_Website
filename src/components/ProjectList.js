import Card from "react-bootstrap/Card";
import AssignmentIcon from "@mui/icons-material/Assignment";
import projectData from "../data/projectData.json";
import classes from "./ProjectList.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className={classes.card}>
      <div className={classes.projectsBoard}>
        <Card.Title className={classes.contentTitle}>
          Projects <AssignmentIcon fontSize="large" />
        </Card.Title>
        <Container fluid className="gx-0">
          <Row className="gx-0" xs={2}>
            {Object.values(projectData)
              .reverse()
              .map((project) => (
                <Col>
                  <Link to={project.nav}>
                    <div className={classes.container} key={project.image}>
                      <h2 className={classes.title}>{project.title}</h2>
                      <div className={classes.about}>{project.about}</div>
                    </div>
                  </Link>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
