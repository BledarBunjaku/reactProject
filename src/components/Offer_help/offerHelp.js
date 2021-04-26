import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './offerHelp.scss'
import {Multiselect} from 'multiselect-react-dropdown'
import axios from 'axios'


function OfferHelp(props) {

    const cityOptions = [
        {cId:1, city:'Prishtinë'},
        {cId:2, city:'Prizren'},
        {cId:3, city:'Ferizaj'},
        {cId:4, city:'Pejë'},
        {cId:5, city:'Gjakovë'},
        {cId:6, city:'Gjilan'},
        {cId:7, city:'Podujevë'},
        {cId:8, city:'Mitrovicë'},
        {cId:9, city:'Vushtrri'},
        {cId:10, city:'Suharekë'},
        {cId:11, city:'Lipjan'},
        {cId:12, city:'Rahovec'},
        {cId:13, city:'Malishevë'},
        {cId:14, city:'Skenderaj'},
        {cId:15, city:'Viti'},
        {cId:16, city:'Deçan'},
        {cId:17, city:'Istog'},
        {cId:18, city:'Klinë'},
        {cId:19, city:'Kamenicë'},
        {cId:20, city:'Dragash'},
        {cId:21, city:'Fushë Kosovë'},
        {cId:22, city:'Shtime'},
        {cId:23, city:'Obiliç'},
    ]
    

    const initialState = {
        name: 'Albert',
        email: props.userData.email,
        phoneNo: '123345',
        cities: '',
        jobs: [],
        description: "",
        price: "",
        job_id: '',
        optionCity: '',
        phoneNumberError: '',

    }

    const [cityData, setCityData] = useState(cityOptions)
    const [state, setState] = useState(initialState)

    

      const handleChange = event => {
        event.preventDefault()
        setState({...state, [event.target.name]:event.target.value})
        console.log('Description: '+state.description)
        

    };




    const validatePhoneNumber = () => {

        let phoneNumberError = ""

        if (!state.phoneNo) {
            phoneNumberError = 'Cant be empty'

        }

        if (phoneNumberError) {
            this.setState({ phoneNumberError })
            return false
        }

        return true
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SOURCE_URL}/api/services`)
            .then(response => {
                console.log('dataaaaa', response.data)
                console.log('name: '+state.name)
                console.log('email: '+props.userData.email)
                console.log('phoneNO: '+state.phoneNo)
                setState({...state, jobs:response.data})
                // let jobsFromApi = response.data.map(job => {
                //     return {value: job, display: job}
                // })
                // console.log('jobs from api: '+ jobsFromApi)
                // this.setState({
                //     jobs:[
                //         {
                //             value: "",
                //             display: "Select the job you're able to do"
                //         }
                //     ].concat(jobsFromApi)
                // })
            })
            .catch(error => { console.log(error) })
    }, [])

    const postService = () => {

        let object = {}
        object.name = state.name
        object.email =state.email
        object.phoneNo = state.phoneNo
        object.description = state.description
        object.price = state.price
        object.job_id = state.job_id
        object.optionCity = state.optionCity

        axios.post(`${process.env.REACT_APP_SOURCE_URL}/offerhelp/createPost`, object, props.token)
            .then(response => { console.log(response) })
            .catch(errorr => { console.log(errorr) })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = validatePhoneNumber();

        if (isValid) {
            postService();

        }


    }
    const onSelect = (data) => {
        console.log('Qyteti: '+data.map(city => console.log(city)))
    }


        console.log("asasssssssssssssssss", props.token)
        // 
        return (<div className='offer-help'> <form >
            <div>
                <h1>
                <p className='d-flex align-items-center px-1'>{state.name}</p>
                </h1>
            </div>
            <div>
                <p className='d-flex align-items-center px-1'>{state.email}</p>
            </div>
            {state.phoneNo ? <div>
                <p className='d-flex align-items-center px-1'>{state.phoneNo}</p>
            </div> :
                <div>
                    <label>Last Name:</label>
                    <input
                        type='number'
                        name="phoneNo"
                        placeholder="Phone number"
                        value={state.phoneNo}
                        onChange={handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {state.phoneNumberError}
                    </div>
                </div>}
            <div>
                <label>Payment:</label>
                <input
                    name="payment"
                    placeholder="Payment"
                    value={state.payment}
                    onChange={handleChange}
                    disabled="true"
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {state.lastnameError}
                </div>
            </div>

            <div>
                <div>

                <Multiselect 
                    options={cityOptions}
                    displayValue='city'
                    onSelect={onSelect}></Multiselect>
                    

                {/* //Job dropdown */}
                {/* <label for="cities">Choose a car:</label>
                <select name='optionCity' onChange={handleChange}>
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
                </select> */}
                </div>
            </div>


            <div>

                {/* //Job dropdown */}
              

                <select name="job_id" onChange={handleChange}>
                    {state.jobs ? state.jobs.map(job => <option value={job.id}>{job.service_name}</option>) : null}
                    {/* {this.state.jobs.map(job => (
                        <option
                            key={job.value}
                            value={job.value}
                        >{job.display}
                        </option>
                    ))} */}
                </select>
            </div>

            <textarea name="description" value={state.description} onChange={handleChange} rows="4" cols="100" placeholder='Description'>

            </textarea>
            <div>
                <label>Price:</label>
                <input
                    type='number'
                    name="price"
                    placeholder="Price"
                    value={state.price}
                    onChange={handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                    {state.lastnameError}
                </div>
            </div>
            <button onClick={handleSubmit} className='submit-button' type="submit" >Submit</button>
        </form></div>
        )
}

export default OfferHelp


{/* <button onClick={(e) => { this.handle(e) }}>nameee</button> */ }