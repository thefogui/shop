import React, { Component } from 'react'

import { Container} from './styles'

//COMPONENTS
import BoxLogin from './../../components/BoxLogin'
import Logo from './../../components/Logo'


export default class Login extends Component {
    render() {
        return (
            <Container>
                <Logo />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="a"
                >
                    <path
                        fillOpacity="1"
                        d="M0,64L80,80C160,96,320,128,480,170.7C640,213,800,267,960,245.3C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    >
                    </path>
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="b"
                >
                    <path
                        fillOpacity="1"
                        d="M0,64L80,80C160,96,320,128,480,170.7C640,213,800,267,960,245.3C1120,224,1280,128,1360,80L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    >
                    </path>
                </svg>

                <BoxLogin />
            </Container>
        )
    }
}
