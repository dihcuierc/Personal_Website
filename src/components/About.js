import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card"
import textStyle from "./Text.module.css"
import cardStyle from "./Card.module.css"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import React from "react";

export default function About() {
   
    const skills= ["Python", "C" ,"C++", "Java", "HTML", "JavaScript", "CSS", "Reactjs", "SQL", "NoSQL"]

    return (
        <div className='About'>
            <Container className="h-100 d-grid justify-content-center" style={{paddingTop: '50px'}}>
                <Card className={`${cardStyle.dashboard} bg-dark opacity-75`} text='white'>
                    <Card.Title className={textStyle.dashboard_title}>About me
</Card.Title>
                    <Card.Body className="justify-content-center">
                        <p >
                            Hello, I am Lee Yen Foong Ernest, Year 2 Computer Science at Nanyang Technological Univeristy. I am aspiring to be a Software Engineer in the future. I am constantly on the look out for more challenges to push myself to greater heights and to expand my horizon. 
                        </p>
                        <p > 
                            Outside of my studies, I also enjoy to exercise. I like to run and play floorball as a means of enjoyment and to always remain active. 
                        </p>
                    </Card.Body>
                    

                    <Card.Title className={textStyle.dashboard_title}> Skills &amp; Technologies
</Card.Title>
                    <Card.Body className="d-flex justify-content-left">
                      
                      <Col>
                          {skills.map((skill) => (
                            <Row>
                                {skill}
                            </Row>
                                
                           
                          ))}
                       
                       </Col>
                     
                    </Card.Body>
                    
                  
                </Card>
            </Container>
        </div>
    )
}
