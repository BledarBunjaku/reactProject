import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./tabs.scss"
import SignIn from './SignIn/signIn'
import Register from './Register/register'
import ForgotPassword from './SignIn/ForgotPassword/forgotPassword'

const Tabs = (props) => {

    const [showPassword, setShowPassword] = useState(false)


    const showPasswordTab = (e) => {
        e.preventDefault();
        setShowPassword(true)
    }

    if (!showPassword) {
        return (<div className='signup'><ul class="d-flex justify-content-between nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Log In</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
            </li>


        </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><SignIn
                    open={(e) => showPasswordTab(e)}
                    getToken={props.getToken}
                    showModal={props.showModal}></SignIn></div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Register></Register></div>

            </div>
        </div>)
    } else {
        return (<div className='signup'><ul class="d-flex justify-content-around nav nav-pills mb-3" id="pills-tab" role="tablist">

            <li className="nav-item">
                <a className="nav-link active" id="pills-password-tab" data-toggle="pill" href="#pills-password" role="tab" aria-controls="pills-password" aria-selected="false">Forgot password</a>
            </li>

        </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab"><ForgotPassword></ForgotPassword></div>
            </div>
        </div>)
    }


}

export default Tabs