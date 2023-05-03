import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import textStyle from "./Text.module.css"
import cardStyle from "./Card.module.css"
import Image from "react-bootstrap/Image";
 
import React from "react";


export default function Projects() {

  const projectData = {
    "1": {
      "title": "Coding_Pidgeons__SC2006 Project",
      "subtitle": "Reactjs",
      "description":
        "The platform is a full-stack web application that allows people to easy manage and plan their exercise activities, find the nearest exercise and food facility",
      "image": "./img/github.svg",
      "link": "https://github.com/dihcuierc/Coding_Pidgeons__SC2006",
      "alt": "Coding_Pidgeons__SC2006"
    },
    "2": {
      "title": "SC2002-MOBLIMA Project",
      "subtitle": "Java",
      "description":
        "MOBLIMA is an application to computerize the processes of making online booking and purchase of movie tickets, listing of movies and sale reporting.",
      "image": "./project-2.gif",
      "link": "https://github.com/dihcuierc/SC2002-MOBLIMA",
      "alt": "SC2002-MOBLIMA"
    },
    "3":{
      "title": "Game_Analysis_SC1015 Project",
      "subtitle": "Python Pandas",
      "description":
        "Data Science project to find the relationship between Game Sales price with many factors such as Genre, Age-Rating, Year of release etc",
      "image": "../src/img/Game_Analysis.png",
      "link": "https://github.com/dihcuierc/Game_Analysis",
      "alt": "Game_Analysis"
    },
    
    "4":{
      "title": "Decoder_Tool",
      "subtitle": "Python",
      "description":
        "Decoder Tool is an application to faciliate the translation of car error reports to a human readable data format for faster processing of error reports",
      "image": "./img/Game_Analysis.png",
      "link": "https://github.com/dihcuierc/Decoder_Tool",
      "alt": "Decoder_Tool"
    }
}
    return (
      <section id="projects" className="text-gray-400 body-font">
        <Container className="h-100 d-grid justify-content-center" style={{paddingTop: '50px'}}>
          <Card className={`${cardStyle.dashboard} bg-dark opacity-75`} text='white'>
            <Card.Title className={textStyle.dashboard_title}>
              Projects I've Done
            </Card.Title>
            <Card.Body className="flex flex-wrap -m-4 container px-5 py-10 mx-auto text-center lg:px-40">
              {Object.values(projectData).map((project) => (
                <a style={{color:"white"}}
                  href={project["link"]}
                  key={project["image"]}
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative" style={{border:"1px solid black"}}>
                    <Image
                      className="me-3"
                      src={project["image"]}
                      alt={project["alt"]}
                      fluid
                    />
                    <div>
                      <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project["subtitle"]}
                      </h3>
                      <h2>
                        {project["title"]}
                      </h2>
                      <p className="leading-relaxed">{project["description"]}</p>
                    </div>
                  </div>
                </a>
              ))}
            </Card.Body>
          </Card>
        </Container>
      </section>        
    )
}
