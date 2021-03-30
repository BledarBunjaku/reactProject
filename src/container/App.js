import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from '../components/Layout/Header/header'
import Home from '../Pages/Home/home'
import About from '../Pages/About/about'
import Footer from '../components/Layout/Footer/footer'
import UserProfile from '../Pages/User profile/userProfile'
import axios from 'axios'
import OfferHelp from '../Pages/Offer help/offerHelp'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import store from '../Redux/store'
// import loginReducer from '../Redux/loginReducer'
// import registerReducer from '../Redux/registerReducer'
// import '../store/reducer'


axios.defaults.baseURL = "http://8f2e874dcb9e.ngrok.io/api/"

// const reducers = combineReducers({
//     loginReducer,
//     registerReducer
// })

// const store = createStore(reducers)


const App = () => {


    const [tokenUse, setTokenUse] = useState()
    const [userData, setUserData] = useState()


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

    if (!tokenUse && localStorage.getItem("token")) {
        getToken(localStorage.getItem("token"))
    }


    useEffect(() => {
        axios.get(`user`, tokenUse)
            .then(response => {
                setUserData({ ...response.data })
                console.log('thenResponse', response)
            })
            .catch(error => { console.log('errorrCatch', error) })
    }, [tokenUse])



    console.log("testtttttttttttttttttt", process.env.URL_SOURCE)

    const handleUserData = () => {
        // axios.get('user', config)
        //     .then(response => {
        //         setUserData({ ...response.data })
        //         console.log('thenResponse', response)
        //     })
        //     .catch(error => { console.log('errorrCatch', error) })
    }
    const setlocalstorage = () => {
        localStorage.setItem("name", "10")
        console.log(localStorage.getItem("name"))
    }
    const deletelocalstorage = () => {
        localStorage.clear()
        console.log("cleared")
    }

    console.log('datasssssssssssssssss', tokenUse)

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
        </Router>
            <button onClick={setlocalstorage}>localstorage</button>
            <button onClick={deletelocalstorage}>deletelocalstorage</button>
        </Provider>
    )
}
export default App

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

