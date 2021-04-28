import React from 'react'
import { Toast } from 'react-bootstrap'

function ShortMessage() {
    return (
        <Toast delay={2000}>
            <Toast.Header>
                {/*   <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                <strong className="mr-auto">CleanEx</strong>
                <small></small>
            </Toast.Header>
            <Toast.Body>Plotëso të dhënat tua në fillim!</Toast.Body>
        </Toast>
    )
}

export default ShortMessage
