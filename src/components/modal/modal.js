import React from 'react'
import './modal.css'


const Modal = (props) => {
    return <div className='backdrop' onClick={props.close}>
        <div className='modal-layout' >
            {props.children}
        </div>
    </div>
}

export default Modal