import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

//COMPONENTS
import CustomButton from './../CustomButton';

import { Container } from './styles';

interface MyState {
    email: string,
    emailConfirmation: string,
    password: string,
    isSuccess: boolean,
    message: string,
    errors: {
        email: string,
        emailConfirmation: string,
        password: string,
    },
}

export default class BoxRegister extends Component<{}, MyState> {

    private validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            emailConfirmation: '',
            password: '',
            isSuccess: false,
            message: '',
            errors: {
                email: '',
                emailConfirmation: '',
                password: '',
            },
        }
    }

    handleChange(event: any) {
        const name = event.target.name
        const value = event.target.value
        let errors = this.state.errors

        errors.password = ''
        errors.email = ''
        errors.emailConfirmation = ''

        this.setState({...this.state, [name]: value})
        this.setState(prevState => ({
            ...prevState,
            errors : errors
        }))
    }

    generateToken() : string {
        let rand = function() {
            return Math.random().toString(36).substr(2); // remove `0.`
        }

        return rand() + rand()
    }

    sendRegistrationRequest() : void {
        let { email } = this.state
        let { password } = this.state

        const e = localStorage.getItem('emailRegistration')

        if (e === email) {
            let error = "Email already in use!"
            this.setState({message: error})
        } else {
            const token = this.generateToken()
            console.log(token)

            localStorage.setItem('userToken', token)
            localStorage.setItem('emailRegistration', email)
            localStorage.setItem('passwordRegistration', password)


            this.setState({isSuccess: true})
        }
    }

    handlerSignUp = (event :  any) => {
        event.preventDefault()
        let error: string

        if (this.state.email !== this.state.emailConfirmation) {
            error = 'Email confirmation does not match!'
            this.setState(prevState => ({
                ...prevState,
                errors : {
                    ...prevState.errors,
                    emailConfirmation : error
                }
            }))
        } else if (!this.validEmailRegex.test(this.state.email)) {
            error = 'Email is not valid'
            this.setState(prevState => ({
                ...prevState,
                errors : {
                    ...prevState.errors,
                    email : error
                }
            }))
        } else {
            if (this.validEmailRegex.test(this.state.email)) {
                if (this.state.password === '') {
                    error = 'Password is empty!'
                    this.setState(prevState => ({
                        ...prevState,
                        errors : {
                            ...prevState.errors,
                            password : error
                        }
                    }))
                } else {
                    this.sendRegistrationRequest()
                }
            }
        }
    }

    render() {

        const  buttonText = 'Sign In'

        return (
            <Container>
                <form>
                    <h2>Create an account</h2>

                    <label>
                        Email
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={(event : any) => this.handleChange(event)}
                            required
                        />
                    </label>

                    {this.state.errors.email && <p className="error"> { this.state.errors.email } </p> }

                    <label>
                        Confirm Email
                        <input
                            type="text"
                            name="emailConfirmation"
                            value={this.state.emailConfirmation}
                            onChange={(event : any) => this.handleChange(event)}
                            required
                        />
                    </label>

                    {this.state.errors.emailConfirmation &&
                        <p className="error"> { this.state.errors.emailConfirmation } </p>
                    }

                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={(event : any) => this.handleChange(event)}
                            required
                        />
                    </label>

                    {this.state.errors.password &&
                        <p className="error"> { this.state.errors.password } </p>
                    }

                    <div className="checkBoxSection">
                        <input type="checkbox" required />
                        <span>
                            I have read and accept the
                            <Link to="/register"> service terms </Link>
                            and
                            <Link to="/register"> privacity policy</Link>
                            .
                        </span>
                    </div>

                    <CustomButton
                        text={ buttonText }
                        type="submit"
                        handle={(event : any) => this.handlerSignUp(event) } />
                    <Link to="/login">Already have an account?</Link>
                </form>

                {!this.state.isSuccess ? <div>{this.state.message}</div> : <Redirect to='/' />}
            </Container>
        )
    }
}
