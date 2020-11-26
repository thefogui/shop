import React, { Component } from 'react'

import { Container } from './styles'

type Props = {
    text : string,
    handle: any,
    type: string
}

export default class CustomButton extends Component<Props> {

    render() {
        const { text } = this.props
        const { handle } = this.props
        const { type } = this.props

        return (
            <Container onClick={ handle } type={type === 'submit' ? 'submit' : 'button'} >
                { text }
            </Container>
        )
    }
}

