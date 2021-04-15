import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Accordian.scss"
import {useState} from 'react'

function Accordian ()  {
    const [selected, setSelected] = useState(null)

    const toggle = (i ) => {
        if (selected === i) {
        return setSelected(null)
    }
    setSelected(i)
}
    return ( 
 
<div className="wrapper">
<div className="accordion_question">
             {data.map((item, i) => {
                 return(
                 <div className="item">
                <div className="title" onClick={()=>toggle (i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' :'+'}</span>
                    </div>
                    <div  className= {selected === i ? 'contentshow' :'content'}>{item.answer}</div>
                    </div>
            
            ) } )}
            </div>
            </div>
    )
}
 const data = [
    {
        question: 'Question 1',
        answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
        question: 'Question 2',
        answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
        question: 'Question 3',
        answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    }, 
    {
        question: 'Question 4',
        answer:'Lorem Ipsum ',
    },

];

export default Accordian