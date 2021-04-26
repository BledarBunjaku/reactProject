import React from 'react'
import { Row, Col, Button, ListGroup } from 'react-bootstrap'

function PostsList({ userPosts }) {
    return (
        <ListGroup>

            {userPosts ? null : userPosts.map(item => (
                <ListGroup.Item className={item.payment_status ? "border border-success my-2 p-1" : "border border-danger my-2 p-1"} >
                    <Row >
                        <Col  >
                            {item.service_name}
                        </Col>
                        <Col  >
                            {item.created_at}
                        </Col>
                        <Col  >
                            {item.price}€
                                            </Col>
                        <Col>
                            {item.payment_status ? null : <Button className='pt-0 pb-0 pl-3 pr-3'>$</Button>}
                        </Col>

                    </Row>
                </ListGroup.Item>


            )) }


        </ListGroup>
    )
}

export default PostsList
