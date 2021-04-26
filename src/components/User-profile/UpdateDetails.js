import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'
import axios from 'axios'

class UpdateDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true,
            userDetails: props.userDetails,
            //phoneNo: '',
            genders: [],
            countries: [],
            cities: [],
            regions: [],
            selectedGender: "0",
            selectedCountry: "0",
            selectedCity: "0",
            selectedRegion: "0",
            gendersFail: false,
            countriesFail: false,
            citiesFail: false,
            regionsFail: false



        }

        this.onInputChange = this.onInputChange.bind(this)
    }


    componentDidMount() {

        console.log(this.state.userDetails)
        axios.get('http://127.0.0.1:8000/api/genders')
            .then(response => {
                this.setState({ genders: response.data })

                //console.log(response.data)
            })
            .catch(error => {
                this.setState({ gendersFail: true })
            })


        axios.get('http://127.0.0.1:8000/api/countries')
            .then(response => {
                this.setState({ countries: response.data })

                //console.log(response.data)
            })
            .catch(error => {
                this.setState({ countriesFail: true })
            })


        this.setState({
            citiesFail: true,
            regionsFail: true
        })

    }


    phoneNoHandler = (event) => {
        this.setState({ phoneNo: event })
    }
    handleClose = () => {
        this.setState({ show: false })
    }

    selectedGenderHandler(event) {
        this.setState({ selectedGender: event.target.value })
    }
    selectedCountryHandler(event) {

        if (event.target.value === "0") {
            this.setState({ regionsFail: true, citiesFail: true })
        } else {
            this.setState({ selectedCountry: event.target.value, citiesFail: false, selectedCity: 1 })
            let url = 'http://127.0.0.1:8000/api/cities?country_id=' + event.target.value

            axios.get(url)
                .then(response => {
                    this.setState({ cities: response.data })

                    //console.log(response.data)
                })
                .catch(error => {
                    this.setState({ citiesFail: true })
                })

        }




    }
    selectedCityHandler(event) {
        // console.log(event.target.value)
        /* this.setState(prevState => ({
            userDetails: {                   
                ...prevState.userDetails,   
                [event.target.name]: event.target.value       
            }
        })) */
        this.setState({ selectedCity: event.target.value, regionsFail: false, selectedGender: 1 })
        let url = 'http://127.0.0.1:8000/api/regions?city_id=' + event.target.value
        axios.get(url)
            .then(response => {
                this.setState({ regions: response.data })

                //console.log(response.data)
            })
            .catch(error => {
                this.setState({ regionsFail: true })
            })
    }

    selectedRegionHandler(event) {
        this.setState({ selectedRegion: event.target.value })
    }
    onInputChange(event) {


        this.setState(prevState => ({
            userDetails: {                   // object that we want to update
                ...prevState.userDetails,    // keep all other key-value pairs
                [event.target.name]: event.target.value       // update the value of specific key
            }
        }))



    }
    handleSumbit = (event) => {




        let response = {
            "first_name": this.state.userDetails.first_name,
            "last_name": this.state.userDetails.last_name,
            "birthday": this.state.userDetails.birthday,
            "phone_number": this.state.userDetails.phone_number,
            "street_name": this.state.userDetails.street_name,
            "street_number": this.state.userDetails.street_number,
            "postal_code": this.state.userDetails.postal_code,
            "region_id": this.state.selectedRegion,
            "gender_id": this.state.selectedGender

        }

        let url = 'http://127.0.0.1:8000/api/user/details'
        axios.patch(url, response, { headers: { 'Authorization': "Bearer " + localStorage.getItem("token") } })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response.data)
            })



    }


    render() {
        const { userDetails, show, phoneNo, genders, gendersFail, countriesFail, countries, cities, citiesFail, regions, regionsFail } = this.state

        return (
            <Modal
                size='xl'
                show={show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group controlId="details">
                            <Form.Label >Emri:</Form.Label>
                            <Form.Control onChange={this.onInputChange} name="first_name" required type="text" placeholder="Plotëso emrin" value={userDetails.first_name} />

                            <Form.Label>Mbiemri:</Form.Label>
                            <Form.Control onChange={this.onInputChange} name="last_name" required type="text" placeholder="Plotëso mbiemrin" value={userDetails.last_name} />

                            <Form.Label>Viti i lindjes:</Form.Label>
                            <Form.Control onChange={this.onInputChange} name="birthday" required type="text" placeholder="Plotëso vitin e lindjes" value={userDetails.birthday} />

                            <Form.Label>Email:</Form.Label>
                            <Form.Control onChange={this.onInputChange} name="email" required type="email" placeholder="Plotëso emailin" value={userDetails.email} />

                            <Form.Label>Numri i telefonit:</Form.Label>
                            <Form.Control onChange={this.onInputChange} name="phone_number" required type="text" placeholder="Plotëso numrin e telefonit +383 XX XXX XXX" value={userDetails.phone_number} />
                            <Form.Control
                                className={this.state.selectedGender == "0" ? "border border-danger" : ""}
                                as="select"
                                name="gender"
                                defaultValue="Gjinia"
                                custom
                                onChange={this.selectedGenderHandler.bind(this)}
                            >
                                <option value="0">Gjinia</option>
                                {gendersFail ? null : genders.map(gender => (
                                    <option key={gender.id} value={gender.gender_type}>{gender.gender_type}</option>
                                ))}

                            </Form.Control>
                            <Form.Control
                                className={this.state.selectedCountry == "0" ? "border border-danger" : ""}
                                as="select"
                                name="country"
                                defaultValue="Shteti"
                                custom
                                onChange={this.selectedCountryHandler.bind(this)}
                            >
                                <option value="0">Shteti</option>
                                {countriesFail ? null : countries.map(country => (
                                    <option key={country.id} value={country.id}>{country.country_name}</option>
                                ))}

                            </Form.Control>

                            {citiesFail === false ? <Form.Control
                                className={this.state.selectedCity == "0" ? "border border-danger" : ""}
                                as="select"
                                name="city"
                                defaultValue="Qyteti"
                                custom
                                onChange={this.selectedCityHandler.bind(this)}>
                                {cities.map(city => (
                                    <option key={city.id} value={city.id}>{city.city_name}</option>
                                ))}<option key={0} value="0">Zgjidh Qytetin</option> </Form.Control> : null}

                            {regionsFail === false ? <Form.Control
                                className={this.state.selectedRegion == "0" ? "border border-danger" : ""}
                                custom
                                as="select"
                                name="region"
                                defaultValue="Regjioni"
                                onChange={this.selectedRegionHandler.bind(this)} >
                                {regions.map(region => (
                                    <option key={region.id} value={region.id}>{region.region_name}</option>
                                ))
                                }<option key={0} value="0">Zgjidh Vendbanimin</option> </Form.Control> : null}


                            <Form.Control onChange={this.onInputChange} name="street_name" required type="text" placeholder="Emri i rrugës. Psh: Dardania" value={userDetails.street_name} />
                            <Form.Control onChange={this.onInputChange} name="street_number" required type="number" placeholder='Numri i rruges.Psh: No:25' value={userDetails.street_number} />
                            <Form.Control onChange={this.onInputChange} name="postal_code" required type="text" maxLength="5" placeholder='Numri postal .Psh: 10000' value={userDetails.postal_code} />
                        </Form.Group>



                        <Button variant="secondary" className="mr-2" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type={(this.state.selectedCountry == "0" || this.state.selectedGender == "0" || this.state.selectedCity == "0" || this.state.selectedRegion == "0") ? '' : "submit"} onClick={this.handleSumbit}>
                            Submit
                        </Button>

                    </Form>
                </Modal.Body >




            </Modal >
        )
    }
}

export default UpdateDetails
