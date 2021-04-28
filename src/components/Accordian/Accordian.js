import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Accordian.scss"
import { useState } from 'react'

function Accordian() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (

        <div className="wrapper">
            <div className="accordion_question">
                {data.map((item, i) => {
                    return (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'contentshow' : 'content'}>{item.answer}</div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
const data = [
    {
        question: 'What services does  CleanEx offer ?',
        answer: 'CleanEx services include: boiler repairs, washing machine problems, fuse and plug replacement, door and window repairs, lock replacement and many more.',
    },
    {
        question: 'Does  CleanEx  offer services throughout Kosovo ?',
        answer: 'CleanEx function throughout Kosovo, but faster in Pristina.',
    },
    {
        question: 'How to contact CleanEx and how soon is it launching ?',
        answer: 'First register on the website and then you can get detailed information where you can contact at any time and the service will be performed immediately',
    }

];

export default Accordian