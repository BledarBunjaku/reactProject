import React from 'react'
import Style from './HeroComponent.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Hero = () => {
    return (
        <Jumbotron className="mx-auto bg-transparent">
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    <h1 className="display-1 font-weight-bolder">CleanEx</h1>
                    <h3 className="display-4 font-weight-light">Too tired or can't seem to find the right guy?</h3>
                    <h2 className="display-4 font-weight-light">We can help you!</h2>      
             </Col>
            </Row>
        </Container>
    </Jumbotron>
    
    )
}

export default Hero