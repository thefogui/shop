import React, { Component } from 'react'

import { Container } from './styles'

interface ClothesProps {
    id: number,
    name: string,
    description: string,
    size?: string[],
    colour?: string[],
    price: number,
    image: string,
    gender?: string
}

interface MyState {
    url: any;
}


export default class SimpleCard extends Component<ClothesProps, MyState> {
    render() {
        return (
            <Container>
                <div className="header"></div>
                <div className="body">
                    <img src={ require(`./../../static/img/clothes/${this.props.image}`).default }
                         alt={ this.props.name } />
                </div>
                <div className="footer">
                    <h1>{ this.props.name }</h1>
                    <p>{ this.props.description }</p>
                    <span>€{ this.props.price }</span>
                </div>
            </Container>
        )
    }
}
