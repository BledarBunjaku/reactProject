import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Info = () => {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={4} sm={12}>
                    <h1 className="display-6 font-weight-light text-body">This is how it works</h1>
                    <div className="section-work__text">
                        <p>To use cleanEx is easy. Just log in or if you haven't signed up yet sign up.</p>
                        <p>If you want to use cleanEx to get the right help you want then just browse
                            our Seek Help page, find the help you need and book it.</p>
                        <p>If you want to use cleanEx to be the right help then just create a service at 
                            the Offer Help page by describing what you know best, price and your range.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Info

