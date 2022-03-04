import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login/Login'
import Main from './Main.js'

export default class Root extends Component {
    render() {
        return (
        <Router>
        <div>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav> */}
            <Routes>
                <Route path="/" exact element={ <Login /> } />
                <Route path="/main" exact element={ <Main /> } />
               {/*  <Route path="/settings" exact element={ <Settings />} /> */}
            </Routes>
              </div>
        </Router>
        )
    }
}
