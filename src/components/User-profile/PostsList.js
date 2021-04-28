import React, { useState } from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'

function PostsList({ userPosts, postNotFound }) {

    return (
        <ListGroup>

            {userPosts.map(item => (

                < ListGroup.Item key={item.id} className={item.payment_status ? "border border-success my-2 p-1" : "border border-danger my-2 p-1"} >
                    <Row >
                        <Col sm="3" md="3" lg="3"  >
                            {item.service_name}
                        </Col>
                        <Col sm="3" md="3" lg="3" >
                            {item.created_at}
                        </Col>
                        <Col sm="1" md="1" lg="1" >
                            {item.price}€
                                            </Col>
                        <Col sm="2" md="2" lg="2">
                            <Button className='pt-0 pb-0 pl-3 pr-3 '
                            >Delete</Button>
                        </Col>
                        <Col sm="1" md="1" lg="1">
                            <Button className='pt-0 pb-0 pl-3 pr-3 '>Edit</Button>
                        </Col>
                        <Col sm="1" md="1" lg="1">
                            <Button className='pt-0 pb-0 pl-3 pr-3 ml-4'>$</Button>
                        </Col>

                    </Row>
                </ListGroup.Item>


            ))
            }


        </ListGroup >
    )
}

export default PostsList
