import React, { Component, useState } from 'react'
import './Login.css'


export default class Login extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='login__body'>
                <main className='login__container'>
                    <div className='login__icon'></div>
                    <div className='login__form'></div>
                    <div className='login__auths'>or</div>
                    <div className='login__auths'></div>
                </main>
            </div>
        )
    }
}