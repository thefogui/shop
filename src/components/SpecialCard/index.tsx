import React, { Component } from 'react'

import { Container } from './styles'

import { GoFlame } from 'react-icons/go'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { GoDash } from 'react-icons/go'

import  womanShoes from './../../static/img/women_shoes.png'

export default class SpecialCard extends Component {
    render() {
        return (
            <Container>
                <div className="title">
                    <div className="brand">Hello</div>
                    <div className="icon"><GoFlame /></div>
                </div>

                <div className="body">
                    <div className="image-container">
                        <div className="image">
                            <img src={womanShoes} alt="special-item" />
                        </div>
                        <div className="circle"></div>
                    </div>

                    <div className="description">
                        <h1>Samurai</h1>
                        <div className="text">
                            If not specified (default), the shadow is assumed to be a drop shadow 
                            (as if the box were raised above the content). The presence of the inset 
                            keyword changes the shadow toawn inside the border .
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="action-buttons"></div>
                    <div className="text">
                            View Shoes
                    </div>
                    <div className="icon"><GoDash /><HiOutlineArrowNarrowRight /> </div>
                </div>
            </Container>
        )
    }
}
