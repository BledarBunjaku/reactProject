import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Header from '../components/Layout/Header/header'
import Home from '../components/Home/home'
import About from '../components/About/about'
import Footer from '../components/Layout/Footer/footer'
import UserProfile from '../components/User-profile/userProfile'
import SeekHelp from "../components/Seek-help/seekHelp";
import Error404 from "../components/Errors/Error404";
import axios from 'axios'
import OfferHelp from '../components/Offer_help/offerHelp'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from '../store/reducer'


axios.defaults.baseURL = "http://8f2e874dcb9e.ngrok.io/api/"



const store = createStore(reducer);


const App = () => {

    // let token = localStorage.getItem("token")

    const [tokenUse, setTokenUse] = useState()
    const [userData, setUserData] = useState()





    let getToken = (token) => {
        // let config = {
        //     headers: { Authorization: "Bearer " + token }
        // }
        // console.log("configgggg", config)
        // setTokenUse({ ...config })
        // if (!token) {
        //     setUserData("")
        // }
    }

    // if (!tokenUse && localStorage.getItem("token")) {
    //     getToken(localStorage.getItem("token"))
    // }



    useEffect(() => {


        setUserData(localStorage.getItem("token"))
        // axios.get(`user`, tokenUse)
        //     .then(response => {
        //         setUserData({ ...response.data })
        //         console.log('thenResponse', response)
        //     })
        //     .catch(error => { console.log('errorrCatch', error) })
    }, [localStorage.getItem("token")])





    const handleUserData = () => {
        // axios.get('user', config)
        //     .then(response => {
        //         setUserData({ ...response.data })
        //         console.log('thenResponse', response)
        //     })
        //     .catch(error => { console.log('errorrCatch', error) })
    }


    return (
        <Provider store={store}><Router>
            <Header userData={userData} handleUserData={handleUserData} getToken={getToken} />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/seek">
                    <SeekHelp />
                </Route>
                <Route path="/offer">
                    <OfferHelp token={tokenUse} />
                </Route>
                {userData ? <Route path="/profile"  >
                    <UserProfile />
                </Route> : <Error404 />
                }
            </Switch>
            <Footer />
        </Router>
            {/* <button onClick={setlocalstorage}>localstorage</button>
            <button onClick={deletelocalstorage}>deletelocalstorage</button> */}
        </Provider>
    )
}
export default App

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

