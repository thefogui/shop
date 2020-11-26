import React, { Component } from 'react'

import { Container } from './styles'

export default class Intro extends Component {
    render() {
        return (
            <Container>
                <div className="intro-info">
                    <h1>Collection</h1>
                    <p>
                        Discover this month's pieces from our lastest collection 
                        Autum Winter Man and Woman Collection.
                    </p>
                </div>
            </Container>
        )
    }
}
