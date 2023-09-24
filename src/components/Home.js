import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import toast, { Toaster } from "react-hot-toast";
import { useCallback } from "react";
import { Image } from "react-bootstrap";
import classes from "./Home.module.css";

import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import email from "../images/email.svg";
import profilepic from "../images/profilepic.jpg";

export default function Home() {
  const success = useCallback(() => {
    toast.success("Email copied to clipboard!");
  }, []);

  return (
    <div>
      <Toaster />
      <Row className="gx-0">
        <Col>
          <Card className={classes.section}>
            <Card className={classes.home}>
              <div>
                <h1>Hi, I am Ernest Lee</h1>
                <h2>NTU Y3 Computer Science</h2>
              </div>
              <Card className={classes.websitelinks}>
                <Col>
                  <a href="https://www.linkedin.com/in/ernest-lee-26a599220/">
                    <Image fluid="true" src={linkedin} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/dihcuierc">
                    <Image fluid="true" src={github} alt="Github" />
                  </a>
                  <a
                    href="mailto:leyefoer@gmail.com"
                    onClick={(event) => {
                      event.preventDefault();
                      navigator.clipboard.writeText("leyefoer@gmail.com");
                      success();
                    }}
                  >
                    <Image fluid="true" src={email} alt="Email" />
                  </a>
                </Col>
              </Card>
            </Card>
          </Card>
        </Col>
        <Col className="align-content-center">
          <Card className={classes.section}>
            <Image
              src={profilepic}
              alt="Profile Image"
              fluid="true"
              style={{
                width: "60%",
                border: "10px solid orange",
                borderRadius: "20px",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
