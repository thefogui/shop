import React, { Component } from 'react'

import { Container } from './styles'

interface Props {
    image: any,
    bg1: string,
    bg2: string,
    title: string,
    subtitle: string
}

export default class index extends Component<Props, {}> {
    state = {
        effect: false
    }

    handlerMouseOver = () => this.setState({effect : true})

    handlerMouseLeave = () => this.setState({effect : false})

    render() {
        const styles = !this.state.effect ? {
            backgroundColor : this.props.bg1
        } :
        {
            boxShadow: `inset 0 0 0 1.25vw ${this.props.bg1}`,
            backgroundColor : this.props.bg2,
        }

        return (
            <Container style={ styles }
                onMouseEnter={ this.handlerMouseOver }
                onMouseLeave={ this.handlerMouseLeave }
                >
                    <div className="description">
                        <h1> { this.props.title } </h1>
                        <h2> { this.props.subtitle } </h2>
                    </div>

                    <div className="image-container">
                        <img src={ this.props.image } alt="clothes" />
                    </div>
            </Container>
        )
    }
}
