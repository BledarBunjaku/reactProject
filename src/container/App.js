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
import OfferHelp from '../components/Offer_help/offerHelp'

axios.defaults.baseURL = "http://73227bda47f6.ngrok.io/api/"
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')



const App = () => {

    const [userData, setUserData] = useState()
    const [tokenUse, setTokenUse] = useState({})


    let getToken = (token) => {
        let config = {
            headers: { Authorization: "Bearer " + token }
        }
        console.log("configgggg", config)
        setTokenUse({ ...config })
        if (!token) {
            setUserData("")
        }
    }


    useEffect(() => {
        axios.get('user', tokenUse)
            .then(response => {
                setUserData({ ...response.data })
                console.log('thenResponse', response)
            })
            .catch(error => { console.log('errorrCatch', error) })
    }, [tokenUse])

    const handleUserData = () => {
        // axios.get('user', config)
        //     .then(response => {
        //         setUserData({ ...response.data })
        //         console.log('thenResponse', response)
        //     })
        //     .catch(error => { console.log('errorrCatch', error) })
    }

    console.log('datasssssssssssssssss', tokenUse)

    return (
        <><Router>
            <Header userData={userData} handleUserData={handleUserData} getToken={getToken} />
            {/* <div className='container-fluid'> */}
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/offer">
                    <OfferHelp userData={userData} token={tokenUse} />
                </Route>
                {userData ? <Route path="/profile"  >
                    <UserProfile userData={userData} />
                </Route> :
                    <Route path="/profile">
                        <h1>404 Not found!</h1>
                    </Route>}

            </Switch>
            <Footer />
            {/* </div> */}
        </Router>
            {/* <button onClick={getToken} ></button> */}
        </>
    )
}
export default App


