import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
} from "react-router-dom";
import Style from './header.scss'
import Modal from 'react-modal'
import Tabs from '../Header/Tabs/tabs'

const Header = () => {

    const [modal, setModal] = useState(false);

    const showModal = (e) => {
        e.preventDefault();
        setModal(!modal);
    }

    return <> <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">coTech</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item px-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item px-3">
                    <Link to="/seek">Seek Help</Link>
                </li>
                <li className="nav-item px-3">
                    <Link to="/offer">Offer Help</Link>
                </li>
                <li className="nav-item px-3">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={(e) => showModal(e)} >Sign Up</button>
            </form>
        </div>
    </nav>
        <Modal isOpen={modal} onRequestClose={() => setModal(false)}>
            <button className='d-block btn-danger rounded ml-auto' onClick={() => setModal(false)}>Close</button>
            <Tabs />
        </Modal>
    </>
}

export default Header