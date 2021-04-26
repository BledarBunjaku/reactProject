import React from 'react'
import './seekHelp.scss'
import Dizajner from '../../Images/seek_help_images/Dizajner.jpg'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Select from 'react-select'






import { Container, Row, Col, Button, Card } from 'react-bootstrap'





class SeekHelp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cities: [],
            services: [],
            emptyService: '',
            emptyCity: '',
            location: '',
            service: '',
            posts: [],
            postNotFound: false,
            citiesOption: [],
            servicesOption: [],
            selectedCities: '',
            selectedServices: '',
            price: ''
        }
    }



    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/cities?country_id=1')
            .then(response => {
                if (response.data.length === 0) {
                    this.setState({ emptyCity: 'Empty cities list' })
                } else {

                    response.data.map(item => {
                        this.state.citiesOption.push({ 'value': item.id, 'label': item.city_name })
                    })


                    this.setState({ cities: this.state.cities.concat(this.state.citiesOption) });

                    /* this.setState({
                        cities: this.state.cities
                    }) */

                    /* console.log(this.state.citiesOption)
                    this.setState({
                        cities: ""

                    }) */
                }
            })
            .catch(error => console.log(error))


        /* this.state.cities.map(item => {
            
            this.setState({
                citiesOption: this.state.citiesOption.concat({
                    value: item.id,
                    label: item.city_name
                })
            })
        }) */

        axios.get('http://127.0.0.1:8000/api/services')
            .then(response => {
                if (response.data.length === 0) {
                    this.setState({ emptyService: 'Empty services list' })
                } else {

                    response.data.map(item => {
                        this.state.servicesOption.push({ 'value': item.id, 'label': item.service_name })
                    })


                    this.setState({ services: this.state.services.concat(this.state.servicesOption) });

                }
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/seekhelp/posts')
            .then(response => {
                this.setState({ posts: response.data })

                /*   console.log(response.data) */
            })
            .catch(error => {
                this.setState({ postNotFound: true })
            })



    }

    cityOnChangeHandler = (event) => {
        let cityString = ''
        event.map((city) => {
            cityString += city.label + ','
        })
        cityString = cityString.slice(0, -1);
        this.setState({ location: cityString })
    }

    serviceOnChangeHandler = (event) => {
        let serviceString = ''
        event.map((service) => {
            serviceString += service.label + ','
        })
        serviceString = serviceString.slice(0, -1);
        this.setState({ service: serviceString })
    }

    priceOnChangeHandler = (event) => {
        this.setState({ price: event.label })
    }

    submitHandler = () => {

        this.setState({ posts: [] })


        let params = 'location=' + this.state.location + '&service=' + this.state.service + '&price=' + this.state.price




        /*  alert(this.state.params) */
        axios.get('http://127.0.0.1:8000/api/seekhelp/posts?' + params)
            .then(response => {
                this.setState({
                    posts: response.data,
                    postNotFound: false
                })

                /*   console.log(response.data) */
            })
            .catch(error => {
                this.setState({ postNotFound: true })
            })

        /* alert("Selected City : " + this.state.location + ", Selected Service : " + this.state.service) */

    }


    handleOnChange = (selected) => {
        /* let value = Array.from(selected.target.selectedOptions, option => option.value) */
        /*   let selected
          selected.map(item => console.log(item.label)) */

    }


    render() {
        const { cities, emptyCity, services, emptyService, posts, postNotFound, citiesOption, servicesOption } = this.state
        return (
            <Container fluid>
                <Row className="mx-auto my-2 pb-5 pt-2 text-center" >
                    <Col xs={12} md={4}><Select
                        placeholder="Kërko qytetin"
                        options={citiesOption}
                        isMulti="true"
                        name="cities"
                        onChange={this.cityOnChangeHandler}
                    ></Select></Col>
                    <Col xs={12} md={4}><Select
                        /* inputValue="Zgjidh" */
                        placeholder="Kërko servisin"
                        options={servicesOption}
                        isMulti="true"
                        name="services"
                        onChange={this.serviceOnChangeHandler}
                    ></Select></Col>
                    <Col xs={12} md={2}><Select
                        placeholder="Zgjidh çmimin"
                        options={[
                            { 'value': 1, 'label': '0-49' },
                            { 'value': 2, 'label': '50-99' },
                            { 'value': 3, 'label': '100-149' },
                            { 'value': 4, 'label': '150-199' },
                            { 'value': 5, 'label': '200-250' }
                        ]}
                        name="cities"
                        onChange={this.priceOnChangeHandler}
                    ></Select></Col>
                    <Col xs={12} md={2}><Button onClick={this.submitHandler}>Search</Button></Col>
                </Row>
                <Row className="mx-auto my-2 ">

                    {postNotFound ? 'Post Not Found' :

                        //holder.js/100px180
                        posts.map(item => (
                            <Col sm="6" md="4" lg="3" className="my-2">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Dizajner} width="100" height="180" />

                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.location} <br />
                                            Çmimi {item.price}€
                                        </Card.Text>
                                        <Button >Lexo me shume</Button>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}


                </Row>



            </Container>


        )
    }

}



export default SeekHelp




