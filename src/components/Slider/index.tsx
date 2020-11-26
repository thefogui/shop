import React, { Component } from 'react'

import { Container } from './styles'

import season from './../../static/img/season.jpg'

export default class Slider extends Component {
    render() {
        return (
            <Container>
                <div className="slide">
                    <div className="content">
                        <div className="more">View More</div>
                        <div className="more">View More</div>

                        <div className="season">
                            <span>S</span>
                            <span>E</span>
                            <span>A</span>
                            <span>S</span>
                            <span>O</span>
                            <span>N</span>
                        </div>
                    </div>

                    <img src={ season } alt="season" />

                    <div className="number">
                        <span>0</span>
                        <span>1</span>
                    </div>
                </div>
            </Container>
        )
    }
}
