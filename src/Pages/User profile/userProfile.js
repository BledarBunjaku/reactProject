import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './userProfile.scss'


const UserProfile = (props) => {



    // console.log('userrrrrrrrrrrrrrr', props.userData.user)
    return (<div className='user-profile'>
        <div className='user'>
            <p>{props.userData.username}</p>
            <div className='section-container'>
                <p>{props.userData.name}</p>
                <p>{props.userData.lastname}</p>
                <p>{props.userData.email}</p>
            </div>
        </div >
        <div className='service'>

        </div>

    </div>)
}

export default UserProfile