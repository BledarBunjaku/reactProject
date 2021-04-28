import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './offerHelp.scss'
import Select from 'react-select'
import UserProfile from '../User-profile/userProfile'
import TextareaAutosize from 'react-textarea-autosize';

import { Redirect } from "react-router-dom";
import axios from 'axios'

import { Modal, Button, Form, Row, Col, Container } from 'react-bootstrap'
import OfferHelpForm from './OfferHelpForm'
import Error404 from '../Errors/Error404';




class offerHelp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userDetails: [],
            postDetails: {
                service_id: '',
                location: '',
                title: '',
                content: '',
                price: ''
            },
            services: [],
            cities: [],
            userDetailsNotFound: false,
            unauthenticated: false
        }
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/user', { headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } })
            .then(response => {

                console.log(response.data)
                this.setState({ userDetails: response.data })

            })
            .catch(error => {
                // console.log(error.response.data.error)
                if (error.response.status == 401) {
                    this.setState({ unauthenticated: true })
                }
                this.setState({ userDetailsNotFound: true })
            })
        axios.get('http://127.0.0.1:8000/api/services')
            .then(response => {

                response.data.map(item => {
                    this.state.services.push({ 'value': item.id, 'label': item.service_name })
                })


            })
            .catch(error => {
                //console.log(error.response.data.error)
                //this.setState({ userDetailsNotFound: true })
            })
        axios.get('http://127.0.0.1:8000/api/cities?country_id=1')
            .then(response => {
                response.data.map(item => {
                    this.state.cities.push({ 'value': item.id, 'label': item.city_name })
                })

            })
            .catch(error => {
                //console.log(error.response.data.error)
                //this.setState({ userDetailsNotFound: true })
            })

    }

    serviceOnChangeHandler = (event) => {

        this.setState(prevState => ({
            postDetails: {
                ...prevState.postDetails,
                service_id: event.value
            }
        }))

    }
    citiesOnChangeHandler = (event) => {


        let citiesString = ""
        event.map((city) => {
            citiesString += city.label + ","
        })
        citiesString = citiesString.slice(0, -1);
        // console.log(citiesString)
        this.setState(prevState => ({
            postDetails: {
                ...prevState.postDetails,
                location: citiesString
            }
        }))
        // console.log(this.state.postDetails.location)
    }



    onChangeHandler = (event) => {
        this.setState(prevState => ({
            postDetails: {
                ...prevState.postDetails,
                [event.target.name]: event.target.value
            }
        }))
    }
    /* onClickHandler = () => {
        let url = 'http://127.0.0.1:8000/api/offerhelp/createPost'
        axios.post(url, this.state.postDetails, { headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    } */

    render() {
        const style = {
            width: '100%',
            resize: 'none',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '15px'
        };
        const { userDetailsNotFound, userDetails, services, cities, priceBorder, unauthenticated } = this.state
        return (
            <Container width="50%" >
                {unauthenticated ? <Error404 /> : <OfferHelpForm userDetails={userDetails} services={services} cities={cities} />}

            </Container>
        )
    }
}

export default offerHelp



