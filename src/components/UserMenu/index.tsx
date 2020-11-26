import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { AiOutlinePoweroff } from 'react-icons/ai'


import { Container } from './styles'

//COMPONENTS
import CustomButton from './../CustomButton';

interface MyProps {
    handlerLogout: any,
}

interface MyState {
    goToPerfil: boolean,
}


export default class UserMenu extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)

        this.state = {
            goToPerfil : false,
        }
    }

    goToPerfil = () => {
        this.setState({goToPerfil : true})
    }

    render() {
        const buttonText = 'Perfil'

        return (
            <Container>
                <div className="user-toggle-info">
                    <div className="user-toggle-image"></div>

                    <h3>User Name</h3>

                    <CustomButton
                        text={ buttonText }
                        type="button"
                        handle={(event : any) => this.goToPerfil() }>
                    </CustomButton>
                </div>

                <div className="user-toggle-actions">
                    <ul>
                        <li >
                            <AiOutlinePoweroff />
                            <button onClick={this.props.handlerLogout}>Sign Out</button>
                        </li>
                    </ul>
                </div>

                {this.state.goToPerfil && <Redirect to='/perfil' />}
            </Container>
        )
    }
}
