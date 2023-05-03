import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import linkedin from "./img/linkedin.svg"
import github from "./img/github.svg"
import email from "./img/email.svg"
import Image from "react-bootstrap/Image";
import cardStyle from "./Card.module.css"
import profile from "./img/bitmoji.png"
import toast, { Toaster } from "react-hot-toast";
import { useCallback } from "react";

export default function Home() {
    const success = useCallback(() => {
        toast.success("Email copied to clipboard!");

    },[]);
    return (
        
        <div className='Home'>
            <Toaster/>
            <Container className="h-100 d-grid align-content-center">
                <Row className="p-0">
                    <Col className='align-content-center' > 
                        <Card className={`${cardStyle.schedule}`}>
                            <Card className={`${cardStyle.home}`}>
                                <h1>Hi, I am Ernest</h1>
                                <h2>NTU Y2 Computer Science</h2>
                                <Card className={`${cardStyle.exercise}`}>
                                    <Col>
                                        <a href="https://www.linkedin.com/in/ernest-lee-26a599220/" style={{marginRight: "20px"}}>
                                            <Image fluid src={linkedin} alt="LinkedIn"></Image>
                                            
                                        </a>
                                        <a href="https://github.com/dihcuierc">
                                            <Image fluid src={github} alt="Github"></Image>
                                        </a>
                                        <a href="mailto:leyefoer@gmail.com" 
                                            onClick={(event) => {
                                                event.preventDefault();
                                                navigator.clipboard.writeText('leyefoer@gmail.com');
                                                
                                                    success();
                                                
                                                }} style={{marginLeft: "20px"}}>
                                            <Image fluid src={email} alt="Email"></Image>
                                        </a>
                                    </Col>
                                </Card>
                            </Card>
                        </Card>
                    </Col>
                    <Col className='align-content-center'> 
                        <Card className={`${cardStyle.schedule}`}>
                        <Image
                            className="me-3"
                            src={profile}
                            alt="Profile Image"
                            fluid
                            style={{ width: "40vh", border: "10px solid orange", borderRadius: "200px"}}
                        />
                        </Card>
                    </Col>

                </Row>
                
                
            </Container>
        </div>
    )
}
