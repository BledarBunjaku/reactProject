import React from 'react'
import Style from './home.scss'


const Home = ({ name, germ }) => {
    return <main>
        <h2>{name}{germ}</h2>
    </main>
}
export default Home