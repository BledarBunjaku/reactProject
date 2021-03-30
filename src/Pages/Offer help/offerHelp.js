import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './offerHelp.scss'
import axios from 'axios'

export default class OfferHelp extends React.Component {

    state = {
        name: this.props.userData.name,
        email: this.props.userData.email,
        phoneNo: this.props.userData.phoneNo,
        cities: '',
        jobs: '',
        description: "",
        price: "",
        job_id: '',
        optionCity: '',
        phoneNumberError: '',

    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    validatePhoneNumber = () => {

        let phoneNumberError = ""

        if (!this.state.phoneNo) {
            phoneNumberError = 'Cant be empty'

        }

        if (phoneNumberError) {
            this.setState({ phoneNumberError })
            return false
        }

        return true
    }

    componentDidMount() {
        axios.get('getJobs')
            .then(response => {
                console.log('dataaaaa', response.data)
                this.setState({ jobs: response.data })
            })
            .catch(error => { console.log(error) })
    }

    postService = () => {

        let object = {}
        object.name = this.state.name
        object.email = this.state.email
        object.phoneNo = this.state.phoneNo
        object.description = this.state.description
        object.price = this.state.price
        object.job_id = this.state.job_id
        object.optionCity = this.state.optionCity

        axios.post("offerhelp/createService", object, this.props.token)
            .then(response => { console.log(response) })
            .catch(errorr => { console.log(errorr) })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let isValid = this.validatePhoneNumber();

        if (isValid) {
            this.postService();

        }


    }





    render() {

        console.log("asasssssssssssssssss", this.props.token)
        // 
        return (<div className='offer-help'> <form >
            <div>
                <p className='d-flex align-items-center px-1'>{this.props.userData.name}</p>
            </div>
            <div>
                <p className='d-flex align-items-center px-1'>{this.props.userData.email}</p>
            </div>
            {this.props.userData.phoneNo ? <div>
                <p className='d-flex align-items-center px-1'>{this.props.userData.phoneNo}</p>
            </div> :
                <div>
                    <label>Last Name:</label>
                    <input
                        type='number'
                        name="phoneNo"
                        placeholder="Phone number"
                        value={this.state.phoneNo}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.phoneNumberError}
                    </div>
                </div>}
            <div>
                <label>Payment:</label>
                <input
                    name="payment"
                    placeholder="Payment"
                    value={this.state.payment}
                    onChange={this.handleChange}
                    disabled="true"
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {/* {this.state.lastnameError} */}
                </div>
            </div>

            <div>

                {/* //Job dropdown */}
                <label for="cities">Choose a car:</label>

                <select name='optionCity' onChange={this.handleChange}>
                    <option value="Prishtinë">Prishtinë</option>
                    <option value="Prizren">Prizren</option>
                    <option value="Ferizaj">Ferizaj</option>
                    <option value="Pejë">Pejë</option>
                    <option value="Gjakovë">Gjakovë</option>
                    <option value="Gjilan">Gjilan</option>
                    <option value="Podujevë">Podujevë</option>
                    <option value="Mitrovicë">Mitrovicë</option>
                    <option value="Vushtrri">Vushtrri</option>
                    <option value="Suharekë">Suharekë</option>
                    <option value="Lipjan">Lipjan</option>
                    <option value="Rahovec">Rahovec</option>
                    <option value="Malishevë">Malishevë</option>
                    <option value="Skenderaj">Skenderaj</option>
                    <option value="Viti">Viti</option>
                    <option value="Decan">Decan</option>
                    <option value="Istog">Istog</option>
                    <option value="Klinë">Klinë</option>
                    <option value="Kamenicë">Kamenicë</option>
                    <option value="Dragash">Dragash</option>
                    <option value="Fushë Kosovë">Fushë Kosovë</option>
                    <option value="Shtime">Shtime</option>
                    <option value="Obilic">Obilic</option>
                </select>
            </div>


            <div>

                {/* //Job dropdown */}
                <label for="jobs">Choose a car:</label>

                <select name="job_id" onChange={this.handleChange}>
                    {this.state.jobs ? this.state.jobs.map(job => <option value={job.id}>{job.name}</option>) : null}

                </select>
            </div>

            <textarea name="description" value={this.state.description} onChange={this.handleChange} rows="4" cols="100" placeholder='Description'>

            </textarea>
            <div>
                <label>Price:</label>
                <input
                    type='number'
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {/* {this.state.lastnameError} */}
                </div>
            </div>
            <button onClick={this.handleSubmit} className='submit-button' type="submit" >Submit</button>
        </form></div>
        )
    }
}


{/* <button onClick={(e) => { this.handle(e) }}>nameee</button> */ }
