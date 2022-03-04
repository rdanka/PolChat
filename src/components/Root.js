import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login/Login'
import Main from './Main.js'

export default class Root extends Component {
    render() {
        return (
        <Router>
        <div>
            
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
