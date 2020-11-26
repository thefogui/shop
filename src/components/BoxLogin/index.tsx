import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { Card } from './styles'

import CustomButton from './../CustomButton'

import mountain from './../../static/img/mountain.jpg'

interface MyState {
    username: string,
    password: string,
    isUserLogged: boolean,
    message: string
}

export default class BoxLogin extends Component<{}, MyState> {

    constructor(props: any) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isUserLogged: false,
            message: ''
        }
    }

    handleChange(event: any) {
        const name = event.target.name
        const value = event.target.value

        this.setState({...this.state, [name]: value})
    }

    generateToken() : string {
        let rand = function() {
            return Math.random().toString(36).substr(2); // remove `0.`
        }

        return rand() + rand()
    }

    handleLogin = (event: any) => {
        event.preventDefault()
        const email = localStorage.getItem('emailRegistration')
        const password = localStorage.getItem('passwordRegistration')

        if (email === this.state.username && password === this.state.password) {
            localStorage.setItem('userToken', this.generateToken())
            this.setState({ isUserLogged : true})
        } else {
            let error = 'Username or password not valid!'
            this.setState({ message : error })
        }
    }

    render() {
        const buttonText = 'Log In'

        return (
            <Card>
                <div className="form-box">
                    <div>
                        <h2>Hello friend!</h2>
                        <h3>Welcome Back!</h3>

                        <form>
                            <label>
                                USERNAME
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={(event : any) => this.handleChange(event)}
                                />
                            </label>

                            <label>
                                PASSWORD
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(event : any) => this.handleChange(event)}
                                />
                                <Link to="/register">Forgot your password?</Link>
                            </label>

                            <CustomButton type="submit" text={ buttonText } handle={(event: any) => this.handleLogin(event)} />
                        </form>

                        <p>Don't have an account? <Link to="/register" >Sign up</Link></p>

                        {!this.state.isUserLogged ? <p className="error">{this.state.message}</p> : <Redirect to='/' />}
                    </div>
                </div>

                <picture className="overlay">
                    <div className="path">
                        <div className="overlapping">
                            <img src={ mountain } alt="mountain" />
                            <span className="border"></span>
                        </div>
                    </div>
                </picture>
            </Card>
        )
    }
}
