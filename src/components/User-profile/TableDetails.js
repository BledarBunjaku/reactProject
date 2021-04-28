import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import UpdateDetails from './UpdateDetails'


function TableDetails({ userDetails }) {
    const [detailsForm, setDetailsForm] = useState(false)


    const submitHandler = () => setDetailsForm(true)
    const changeSubmitHandler = () => setDetailsForm(false)



    return (
        <Table striped bordered hover size="sm" className="text-left">
            <tbody>
                <tr className="text-center" >
                    <th colSpan="2">Details</th>
                </tr>
                <tr>
                    <th>Emri</th>
                    <td>{userDetails.first_name}</td>
                </tr>
                <tr>
                    <th>Mbiemri</th>
                    <td>{userDetails.last_name}</td>
                </tr>
                <tr>
                    <th>Gjinia</th>
                    <td>{userDetails.gender}</td>
                </tr>
                <tr>
                    <th>Mosha</th>
                    <td>{userDetails.age}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{localStorage.getItem('email')}</td>
                </tr>
                <tr>
                    <th>Numri i telefonit</th>
                    <td>{userDetails.phone_number}</td>
                </tr>
                <tr>
                    <th>Shteti</th>
                    <td>{userDetails.country}</td>
                </tr>
                <tr>
                    <th>Qyteti</th>
                    <td>{userDetails.city}</td>
                </tr>
                <tr>
                    <th>Regjioni</th>
                    <td>{userDetails.region}</td>
                </tr>
                <tr>
                    <th>Rruga</th>
                    <td>{userDetails.street_name}, {userDetails.street_number}, {userDetails.postal_code} </td>
                </tr>
                <tr>
                    <th colSpan="2">Krijimi i llogarisë : {userDetails.created_at}</th>

                </tr>
                <tr>
                    <th colSpan="2" >Përmisimi i fundit i të dhënave : {userDetails.updated_at}</th>

                </tr>
                <tr className="text-center">
                    <th></th>
                    <td><Button onClick={submitHandler} onMouseOver={changeSubmitHandler}>Ndrysho/Ploteso te dhenat</Button></td>
                    {detailsForm ? <UpdateDetails userDetails={userDetails}></UpdateDetails> : null}


                </tr>
            </tbody>
        </Table>
    )
}


export default TableDetails