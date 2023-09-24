import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";
import HandymanIcon from "@mui/icons-material/Handyman";
import InfoIcon from "@mui/icons-material/Info";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "./About.module.css";
import Container from "react-bootstrap/Container";

export default function About() {
  const skills = [
    "Python, Pandas, PyTorch",
    "C, C++",
    "Java",
    "HTML, JavaScript, CSS, Reactjs",
    "SQL, NoSQL",
  ];

  return (
    <div className={classes.card}>
      <Card className={about.aboutBoard}>
        <Card.Title className={classes.contentTitle}>
          About me <InfoIcon fontSize="large" />
        </Card.Title>
        <Card.Body className={about.aboutText}>
          <p>
            Hello, I am Lee Yen Foong Ernest, currently in my third year of
            studying Computer Science at Nanyang Technological University. My
            journey in the world of technology has been an exciting one, and I
            am filled with enthusiasm and determination to become a Software
            Engineer in the future.
          </p>
          <p>
            In the rapidly evolving field of computer science, I see each day as
            an opportunity to learn and grow. I thrive on challenges that test
            my problem-solving abilities, and I actively seek out projects and
            experiences that push me to greater heights. Whether it's diving
            into a complex coding challenge or exploring innovative
            technologies, I am always eager to expand my horizons and stay at
            the forefront of the tech industry.
          </p>
          <p>
            Beyond the realm of code and algorithms, I lead an active lifestyle.
            I find immense joy in activities that keep me physically engaged.
            Running is not just a form of exercise for me; it's a source of
            inspiration and a way to clear my mind. Additionally, I have a
            passion for playing floorball.
          </p>
        </Card.Body>
        <Card.Title className={classes.contentTitle}>
          Skills &amp; Technologies <HandymanIcon fontSize="large" />
        </Card.Title>
        <Container fluid className="gx-0">
          <Row className="gx-0" xs={2}>
            {skills.map((skill) => (
              <Col key={skill}>
                <div className={about.skills}>{skill}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </Card>
    </div>
  );
}
