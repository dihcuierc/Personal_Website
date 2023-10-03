import Card from "react-bootstrap/Card";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import classes from "./About.module.css";
import Container from "react-bootstrap/Container";
import qualifications from "./Qualifications.module.css";
import interns from "../data/intern.json";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

export default function Qualifications() {
  const awards = [
    "Certificate of Participation for Shopee Code League 2022",
    "Certificate of Distinction for Australian Mathematics Competition 2017 and Certificate of Credit in 2018",
    "Certificate of Participation for Fastest Finger Graphing Calculator Competition 2018",
    "Certificate of Participation for Physics Olympiad 2017",
    "Edusave Merit Bursary Award 2017",
  ];

  return (
    <div className={classes.card}>
      <Card className={qualifications.qualificationsBoard}>
        <Card.Title className={classes.contentTitle}>
          Awards <MilitaryTechIcon fontSize="large" />
        </Card.Title>
        <Card.Body className={classes.aboutText}>
          {awards.map((award) => (
            <div className={qualifications.awards}>{award}</div>
          ))}
        </Card.Body>
        <Card.Title className={classes.contentTitle}>
          Internship <WorkHistoryIcon fontSize="large" />
        </Card.Title>
        <Container fluid className="gx-0">
          {Object.values(interns).map((intern) => (
            <div className={qualifications.intern}>
              <div className={qualifications.title}>{intern.Title}</div>
              <div className={qualifications.company}>{intern.Company}</div>
              <div className={qualifications.descriptions}>
                {intern.Description.map((sentence, index) => (
                  <li key={index}>{sentence}</li>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Card>
    </div>
  );
}
