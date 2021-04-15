import React from 'react'
import Info from '../Info/Info'
import "./about.scss"
import Service1 from '../../Images/service.jpg'
import Service2 from '../../Images/service1.jpg'

const About = () => {

    return (
        <div className='about-wrapper'>
            <Info />
            <h1>Our Work</h1>
            <div className='our-work'>
                <div className='section-work'>
                    <section className='section-work__text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               </p>
                    </section>
                    <section className='section-work__image'>
                        <img src={Service1}></img>
                    </section>
                </div>
                <div className='section-work'>
                    <section className='section-work__image'>
                        <img src={Service2}></img>
                    </section>
                    <section className='section-work__text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               </p>
                    </section>
                </div>
            </div>
        </div>
    )

}

export default About