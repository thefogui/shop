import React, { Component } from 'react'

import { Container } from './styles'

//COMPONENTS
import Header from './../../components/Header'
import HomeLayout from './../../components/HomeLayout'


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header />
                <HomeLayout />
            </Container>
        )
    }
}
