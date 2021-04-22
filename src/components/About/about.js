import React from 'react'
import Info from '../Info/Info'
import "./about.scss"
import photo1 from '../../Images/photo1.jpg'
import photo2 from '../../Images/photo2.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Accordian from '../Accordian/Accordian'
import Scroll from '../Scroll/scroll'



const About = () => {

    return (
        <div className='about-wrapper'>
            <Info />
            <Row className="justify-content-center py-2 ">
            <h1 className="display-6 font-weight-light text-body">Our Work</h1>
            </Row>
            <div className='our-work'>
                <div className='section-work'>
                    <section className='section-work__text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               </p>
                    </section>
                    <section className='section-work__image'>
                        <img src={photo1}></img>
                    </section>
                </div>
                <div className='section-work'>
                    <section className='section-work__image'>
                        <img src={photo2}></img>
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
           
          
                
                
            <Row className="justify-content-center py-2">
           
            <Accordian />
            <Scroll />
            </Row>
          
            </div>
            
       
    )

}
export default About