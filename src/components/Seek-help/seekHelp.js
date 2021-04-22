import React from 'react'
import './seekHelp.scss'
import Dishwasher from '../../Images/dishwasher.jpg'

const seekHelp = () => {

    return <div className='seek-help-wrapper'>

        <div className='search-bar'>
            <section className='section-1'>
                <input placeholder="What are you looking"></input>
            </section>
            <section className='section-2'>
                < select name="cities" id="cities" >
                    <option value="Prishtine">Prishtine</option>
                    <option value="Prizren">Prizren</option>
                    <option value="Mitrovice">Mitrovice</option>
                </select >
            </section>
            <section className='section-3'>
                < select name="jobs" id="jobs" >
                    <option value="Elektricist">Elektricist</option>
                    <option value="Instalues">Instalues</option>
                    <option value="Makineri">Makineri</option>
                </select >
            </section>
            <section className='section-4'>
                <button>Search</button>
            </section>
        </div>

        <div className='cards-wrapper'>
            <div className='card'>
                <span className='card-image'>
                    <div className='card-image__content'>
                        <div className='image'><img src={Dishwasher}></img></div>
                    </div>
                </span>
                <span className='card-content'>
                    <h4>Title</h4>
                    {/* <h5>Name of user</h5> */}
                    <h5>Price</h5>
                    {/* <p>Descriptionnn...</p> */}
                    <p>Address</p>
                </span>
            </div>
            <div className='card'>
                <span className='card-image'>
                    <div className='card-image__content'>
                        <div className='image'><img src={Dishwasher}></img></div>
                    </div>
                </span>
                <span className='card-content'>
                    <h4>Title</h4>
                    {/* <h5>Name of user</h5> */}
                    <h5>Price</h5>
                    {/* <p>Descriptionnn...</p> */}
                    <p>Address</p>
                </span>
            </div>
        </div>

        <div className='full-card'>
            <h2>FULL CARD VIEW </h2>
            <h3>TITLE </h3>
            <h3>PRICE </h3>
            <h3>DESCRIPTION </h3>
            <h3>ADDRESS </h3>
        </div>

    </div>
}

export default seekHelp




