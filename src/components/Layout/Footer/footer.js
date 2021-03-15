import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {


    return (
        <footer className='row bg-light' >
            <div className='col-md-3  footer__items rounded pt-3'>
                <p>Contact Us</p>
                <ul className=' navbar-nav'>
                    <li className=' nav-item'><FontAwesomeIcon className='mr-1' icon={faPhoneSquare} />+383 44 123-456</li>
                    <li className=' nav-item'><FontAwesomeIcon className='mr-1' icon={faEnvelopeSquare} />example@gmail.com</li>
                    <li className=' nav-item'><FontAwesomeIcon className='mr-1' icon={faMapMarkerAlt} />Prishtinë</li>
                </ul>
            </div>
            <div className='col-md-3  footer__items rounded pt-3'>
                <p>Our Company</p>
                <ul className=' navbar-nav'>
                    <li className=' nav-item'><Link to="/seek" >Seek Help</Link></li>
                    <li className=' nav-item'><Link to="/offer" >Offer Help</Link></li>
                    <li className=' nav-item'><Link to="/about" >About Us</Link></li>
                </ul>
            </div>
            <div className='col-md-3  footer__items rounded pt-3'>
                <p>Social Contacts</p>
                <ul className=' navbar-nav'>
                    <li className=' nav-item'>Facebook</li>
                    <li className=' nav-item'>Instagram</li>
                    <li className=' nav-item'>YouTube</li>
                </ul>
            </div>
            <div className='col-md-3  footer__items rounded pt-3'>
                <p>Adress</p>
                <ul className=' navbar-nav'>
                    <li className=' nav-item'>Rruga "Mbreteresha Teutë, nr.123"</li>
                    <li className=' nav-item'>
                        <div className='d-flex social-links'>
                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                            <FontAwesomeIcon icon={faInstagram} size='2x' />
                            <FontAwesomeIcon icon={faYoutube} size='2x' />
                            <FontAwesomeIcon icon={faSkype} size='2x' />
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer