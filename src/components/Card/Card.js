
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Card.scss"
import Foto1 from '../../Images/Foto1.png'
import Foto2 from '../../Images/Foto2.png'
import Foto3 from '../../Images/Foto3.png'
import foto4 from '../../Images/foto4.png'
import foto5 from '../../Images/foto5.png'
import foto6 from '../../Images/foto6.png'



 const Card = () => (
  //me ba ni div container 
    <div className="row">
         <div className='col-md-12 owning-product bg-white '>
             <div className='text-center '>
                
                 <div className='card-product bg-white'>
                 <div className='text-center  mt-5'>
                 <h3>Some of our work examples in details </h3>
                 </div>
             </div>
         </div>
         </div>

         <div className='col-md-4 card-product bg-white'>
             <div className='text-center  mt-5'>
                 <img src={Foto1} alt='thumbnail'></img>
                 <h3>Power Maintenance</h3>
                 <p>For every issue involving power installation or maintenance, our professional staff provides effective and quality services.</p>
             </div>

         </div>

         <div className='col-md-4 card-product bg-white'>

             <div className='text-center mt-5 '>
                 <img src={Foto3} alt='thumbnail'></img>
                 <h3>Various Repairs</h3>
                 <p>For all home repairs:doors,windows,cabinets,etc</p>
                
             </div>
         </div>

         <div className='col-md-4 card-product bg-white'>

             <div className='text-center  mt-5'>
                 <img src={Foto2} alt='thumbnail'></img>
                 <h3>Water Maintenance</h3>
                 <p>Proffessional services always ready to handle all problems dealing with water installation</p>
                
             </div>
         </div>
          <div className='col-md-4 card-product bg-white'>
             <div className='text-center  mt-5'>
                 <img src={foto4} alt='thumbnail'></img>
                 <h3>Painting</h3>
                 <p>Our home need some changes and enhancement from time to time. our professional staff will take great care of your needs.</p>
             </div>

         </div>

         <div className='col-md-4 card-product bg-white'>

             <div className='text-center mt-5 '>
                 <img src={foto5} alt='thumbnail'></img>
                 <h3>Air condition Maintenance</h3>
                 <p>Motor services, freon filling,filter cleaning are just some of the issues that we can fix</p>
                
             </div>
         </div>

         <div className='col-md-4 card-product bg-white'>

             <div className='text-center  mt-5'>
                 <img src={foto6}  alt='thumbnail'></img>
                 <h3>Heating Maintenance</h3>
                 <p>Our staff offers services for all issues regarding heater installation and maintenance.</p>
                
                
             </div>
           
         </div>
         
       

         </div>
 )
 export default Card;