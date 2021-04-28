import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import Select from 'react-select'
import MultiSelect from "react-multi-select-component";
import axios from 'axios'
import { Redirect } from 'react-router';

function OfferHelpForm({ userDetails, services, cities }) {


    const [checkService, setCheckSercice] = useState(false);
    const [checkCities, setCheckCities] = useState(false);

    const [postDetails, setPostDetails] = useState({
        service_id: '',
        location: '',
        title: '',
        content: '',
        price: ''
    })

    const [success, setSuccess] = useState(false)
    const onChangeHandler = (event) => {

        setPostDetails({
            ...postDetails,
            [event.target.name]: event.target.value
        })

    }
    const serviceOnChangeHandler = (event) => {

        setPostDetails({
            ...postDetails,
            service_id: event.value
        })


    }
    const citiesOnChangeHandler = (event) => {


        let citiesString = ""
        event.map((city) => {
            citiesString += city.label + ","
        })
        citiesString = citiesString.slice(0, -1);
        setPostDetails({
            ...postDetails,
            location: citiesString
        })



    }
    useEffect(() => {
        if (postDetails.location != "" && postDetails.service_id != "") {
            //    console.log(postDetails.location)
            setCheckCities(true)
            setCheckSercice(true)

        } else if (postDetails.location != "") {
            setCheckCities(true)
            setCheckSercice(false)
        } else if (postDetails.service_id != "") {
            setCheckCities(false)
            setCheckSercice(true)

        } else {
            setCheckCities(false)
            setCheckSercice(false)

        }



    }, [postDetails.location, postDetails.service_id])

    const onClickButton = (event) => {
        let url = 'http://127.0.0.1:8000/api/offerhelp/createPost'
        axios.post(url, postDetails, { headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } })
            .then(response => {
                console.log(response)
                setSuccess(true)
            })
            .catch(error => {
                setPostDetails({
                    ...postDetails,
                    price: ''
                })
            })

    }


    return (

        <Col className="m-5">

            <Row className="m-2 ">
                <Col sm="2" >Emri:</Col>
                <Col sm="10" >{userDetails.first_name}</Col>
            </Row>

            <Row className="m-2">
                <Col sm="2" >Mbiemri:</Col>
                <Col sm="10" >{userDetails.last_name}</Col>
            </Row>

            <Row className="m-2">
                <Col sm="2" >Email:</Col>
                <Col sm="10" >{userDetails.email}</Col>
            </Row>

            <Row className="m-2">
                <Col sm="2" >Numri i telefonit:</Col>
                <Col sm="10" >{userDetails.phone_number}</Col>
            </Row>
            <Row className="m-2">
                <Col sm="2" className="mt-2" >Lokacioni:</Col>
                <Col sm="10" >
                    <Select placeholder="Zgjedh Qytetin/ Qytetet"
                        className={checkCities ? 'border border-success' : 'border border-danger'}
                        options={cities}
                        name="cities"
                        isMulti="true"
                        onChange={citiesOnChangeHandler}>
                    </Select></Col>
            </Row>
            <Row className="m-2">
                <Col sm="2" className="mt-2" >Servisi:</Col>
                <Col sm="10">
                    <Select placeholder="Zgjedh Servisin"
                        className={checkService ? 'border border-success' : 'border border-danger'}
                        options={services}
                        name="services"
                        onChange={serviceOnChangeHandler}>
                    </Select></Col>
            </Row>

            <Row className="m-2">



                <Col column sm="2">
                    Titulli:
    </Col>
                <Col sm="10">
                    <Form.Control name="title" onChange={onChangeHandler} className={postDetails.title != "" ? 'border border-success' : 'border border-danger'} as="textarea" maxLength="150" rows={3} />
                </Col>

            </Row>
            <Row className="m-2">

                <Col sm="2">
                    Përshkrimi:
    </Col>
                <Col sm="10">
                    <Form.Control name="content" onChange={onChangeHandler} className={postDetails.content != "" ? 'border border-success' : 'border border-danger'} type="textarea" maxLength="500" rows={5} />
                </Col>



            </Row>
            <Row className="m-2">

                <Col sm="2">
                    Çmimi:
</Col>
                <Col sm="10">
                    <Form.Control name="price" onChange={onChangeHandler} className={postDetails.price != "" ? 'border border-success' : 'border border-danger'} type="textarea" maxLength="10" rows={1} />
                </Col>



            </Row>

            <Row className="m-2">
                <Col sm="2">
                    <Button
                        variant="primary"
                        onClick={(postDetails.service_id == '' || postDetails.title == '' || postDetails.price == '' || postDetails.location == '' || postDetails.content == '') ? null : onClickButton}
                    >
                        Submit
                    </Button>
                </Col>
                <Col sm="10">

                </Col>
                {success ? <Redirect to="/seek" /> : null}
            </Row>




        </Col >

    )
}

export default OfferHelpForm
