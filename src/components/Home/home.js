import React from 'react'
import Style from './home.scss'
import Hero from '../Hero/HeroComponent'
import Info from '../Info/Info'
import Accordian from '../Accordian/Accordian'
import Card from '../Card/Card'
import Section from '../Section/section'
import Scroll from '../Scroll/scroll'




const Home = ({ name, germ }) => {
    return <main>
        <h2>{name}{germ}</h2>
        <Hero />
        <Card />
        <Section />
        <Scroll />
       
    </main>
}
export default Home