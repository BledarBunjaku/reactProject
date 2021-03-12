import React from 'react';
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

const App = () => {
    return (
        <><Router>
            <Header />
            <div className='container-fluid'>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/profile">
                        <UserProfile />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
        </>
    )
}
export default App


