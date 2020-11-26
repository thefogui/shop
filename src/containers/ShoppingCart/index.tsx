import React, { Component } from 'react'

import { Container } from './styles'

import Header from './../../components/Header/'
import ShoppingCartLayout from './../../components/ShoppingCartLayout/'

export default class ShoppingCart extends Component {
    render() {
        return (
            <Container>
                <Header />
                <ShoppingCartLayout />
            </Container>
        )
    }
}
