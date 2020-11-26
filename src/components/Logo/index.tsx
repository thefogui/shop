import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export default class Logo extends Component {
    render() {
        return (
            <Container>
                <h1><Link to="/">Logo</Link></h1>
            </Container>
        )
    }
}
