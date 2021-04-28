import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './userProfile.scss'
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap'
import TableDetails from './TableDetails';
import PostsList from './PostsList';
import Error404 from '../Errors/Error404'

class userProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userPosts: [],
            userDetails: [],
            postNotFound: false,
            detailsNotFound: false,
            unauthenticated: false
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/user/posts', { headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } })
            .then(response => {
                //   debugger;
                //    console.log(response)
                //console.log(response.data)
                if (response.data.message != undefined) {
                    this.setState({ postNotFound: true })

                } else {
                    this.setState({ userPosts: response.data })
                }


            })
            .catch(error => {
                if (error.response.status == 401) {
                    this.setState({ unauthenticated: true })
                }
                this.setState({ postNotFound: true })

            })


        axios.get('http://127.0.0.1:8000/api/user', { headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } })
            .then(response => {
                //     console.log(response.data)
                this.setState({ userDetails: response.data })

            })
            .catch(error => {
                if (error.response.status == 401) {
                    this.setState({ unauthenticated: true })
                }
                // console.log(error.response.data.error)
                this.setState({ detailsNotFound: true })
            })
    }




    render() {
        const { userPosts, userDetails, postNotFound, detailsNotFound, unauthenticated } = this.state
        return (

            < Container >

                {unauthenticated ? <Error404 /> : <Row>
                    <Col sm="5" md="5" lg="5" className="text-center my-2">
                        <TableDetails userDetails={userDetails} ></TableDetails>
                    </Col>
                    <Col sm="7" md="7" lg="7" className="text-center my-2">
                        List of Posts
                        {postNotFound ? null : <PostsList userPosts={userPosts} ></PostsList>}

                    </Col>

                </Row>}

            </Container >
        )
    }
}

export default userProfile
