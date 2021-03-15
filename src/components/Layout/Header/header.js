import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from "react-router-dom";
import './header.scss'
// import Modal from 'react-modal'
import Tabs from '../Header/Tabs/tabs'
import Modal from '../../modal/modal'

// Modal.setAppElement('#root')

const Header = (props) => {

    const [modal, setModal] = useState(false);
    const [expand, setExpand] = useState(true)

    const expandArea = () => {
        setExpand(false);
    }

    const showModal = (e) => {
        e.preventDefault();
        setModal(!modal);
    }

    return <div className='main-nav'> <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">coTech</Link>
        <button className="navbar-toggler collapsed" onClick={() => setExpand(!expand)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='true' aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="header-links collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item px-3">
                    <Link onClick={props.click} to="/">Home</Link>

                    {/* <i class="fas fa-sign-in-alt"></i> */}
                </li>
                <li className="nav-item px-3">
                    <Link to="/seek">Seek Help</Link>
                </li>
                <li className="nav-item px-3">
                    <Link to="/offer">Offer Help</Link>
                    {/* <a href='http://localhost:3000/offer'>offer</a> */}
                </li>
                <li className="nav-item px-3">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                {props.userData.user ? <div className='sign-up'><button className="my-2 my-sm-0"  ><Link to="/profile"><FontAwesomeIcon className='mr-1' icon={faSignInAlt} />User Profile</Link></button></div>
                    : <div className='sign-up'><button className="my-2 my-sm-0" onClick={(e) => showModal(e)} ><FontAwesomeIcon className='mr-1' icon={faSignInAlt} />Sign Up</button></div>}

            </form>
        </div>
    </nav>
        <div className='modal-register-signin'>
            {/* <Modal isOpen={modal} onRequestClose={() => setModal(false)}>
                <button className='d-block btn-danger rounded ml-auto' onClick={() => setModal(false)}>x</button>
                <Tabs />
            </Modal> */}
            {modal ? <Modal >
                <button onClick={() => { setModal(false) }}>X</button>
                <Tabs />
            </Modal> : null}



        </div>
    </div>
}

export default Header