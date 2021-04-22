import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./section.scss"
import service from '../../Images/service.jpg'
import photo5 from '../../Images/photo5.jpg'
import bg1 from '../../Images/bg1.jpg'


const section = () => (
      
      <div className="row ">
           <div className='col-md-12 owning-product bg-white '>
               <div className='text-center '>
                  
                   <div className='card-product bg-white'>
                   <div className='text-center  mt-5'>
                   
                   </div>
               </div>
           </div>
           </div>
           <div className='col-md-2 card-product bg-white'>
          
         
          </div>
           <div className='col-md-4 card-product1 bg-white'>
               <div className='text-center  mt-2'>
                   <img src={photo5} width="350" height="200" ></img>
                   
                      
               </div>
  
           </div>
  
           <div className='col-md-0 card-product bg-white'>
          
        
           </div>
           <div className='col-md-6 card-product bg-white'>
           <div className='text-center '>
          
           <h3>How is it work  </h3>
            <ul>
			<p>Register</p>
			<p>Login</p>
			<p>Payment</p>
            <p>Services</p>
            <p>Details</p>
			</ul>
           </div>
           </div>
          </div>
           
         
   )
   export default section;