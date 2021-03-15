import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from '../components/Layout/Header/header'
import Home from '../components/Home/home'
import About from '../components/About/about'
import Footer from '../components/Layout/Footer/footer'
import UserProfile from '../components/User-profile/userProfile'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

const App = () => {

    const [userData, setUserData] = useState({ user: '' })

    useEffect(() => {

        axios.get('http://9b17d15735c6.ngrok.io/api/user')
            .then(response => {
                setUserData({ user: response.data })
                console.log('datasssssssssssssssss', userData)
            })
            .catch(error => { console.log('errorr', error) })
    })


    console.log('datasssssssssssssssss', userData)

    return (
        <><Router>
            <Header userData={userData} />
            <div className='container-fluid'>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    {userData.user ? <Route path="/profile">
                        <UserProfile />
                    </Route> :
                        <Route path="/profile">
                            <h1>404 Not found!</h1>
                        </Route>}

                </Switch>
                <Footer />
            </div>
        </Router>
        </>
    )
}
export default App


