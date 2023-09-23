import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import classes from "./Card.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import projectData from "./projectData.json";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font">
      <Container
        className="h-100 d-grid justify-content-center"
        style={{ paddingTop: "50px" }}
      >
        <Card
          className={`${classes.dashboard} bg-dark opacity-75`}
          text="white"
        >
          <Card.Title className={classes.dashboard_title}>
            Projects I've Done
            <AssignmentIcon fontSize="large" style={{ marginLeft: "10px" }} />
          </Card.Title>
          <Card.Body className="flex flex-wrap -m-4 container px-5 py-10 mx-auto text-center lg:px-40">
            {Object.values(projectData).map((project) => (
              <div key={project.title}>
                <div
                  className="flex relative"
                  style={{
                    border: "4px solid yellow",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <div>
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href={project["link"]}
                      key={project["image"]}
                      className="sm:w-1/2 w-100 p-4"
                    >
                      <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project["subtitle"]}
                      </h3>
                    </a>
                    <img
                      src={project.image}
                      alt={project["alt"]}
                      width="100%"
                      height="100%"
                    />
                    <h2>{project["title"]}</h2>
                    <p className="leading-relaxed">{project["description"]}</p>
                  </div>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
