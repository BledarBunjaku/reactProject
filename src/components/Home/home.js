import React from 'react'
import Style from './home.scss'
import Hero from '../Hero/HeroComponent'
import Info from '../Info/Info'


const Home = ({ name, germ }) => {
    return <main>
        <h2>{name}{germ}</h2>
        <Hero />
    </main>
}
export default Home