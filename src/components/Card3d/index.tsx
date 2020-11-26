import React, { Component } from 'react'

import { Container } from './styles'

import sneaker from './../../static/img/sneaker.png'


interface MyState {
    card3d : {
        transform: '',
        transition: 'none'
    }
}

export default class Card3d extends Component<{}, MyState> {

    constructor(props: any) {
        super(props)

        this.state = {
            card3d: {
                transform: '',
                transition: 'none'
            }
        }

    }

    move3dEffect(event: any) : any {
        let x = (window.innerWidth / 2 - event.pageX) / 25
        let y = (window.innerHeight / 2 - event.pageY) / 25;

        //this.setState({ card3d : { transform : `rotateY(${x}deg) rotateX(${y}deg)` }})
    }

    animateIn(event : any) : any {
        //this.setState({card3d : { transition: 'none' }})

        //Popout
        /*this.titleAnimated.style.transform = 'translateZ(150px)'
        this.sneakerAnimated.style.transform = 'translateZ(200px) rotateZ(-45deg)'
        this.purchaseAnimated.style.transform = 'translateZ(125px)'
        this.descriptionAnimated.style.transform = 'translateZ(100px)'
        this.sizesAnimated.style.transform = 'translateZ(75px)'*/
    }

    animateOut(event: any) : any {
        //this.setState({ card3d : { transition: 'all 0.5s ease' }})
        //this.setState({ card3d : { transform : 'rotateY(0deg) rotateX(0deg)' }})

        //Popback
        /*this.titleAnimated.style.transform = 'translateZ(0)'
        this.sneakerAnimated.style.transform = 'translateZ(0) rotateZ(0deg)'
        this.purchaseAnimated.style.transform = 'translateZ(0)'
        this.descriptionAnimated.style.transform = 'translateZ(0)'
        this.sizesAnimated.style.transform = 'translateZ(0)'*/
    }

    render() {
        return (
            <Container>
                <div className="card-3D-effect-container"
                    onMouseMove={ (event) => this.move3dEffect(event) }
                    onMouseLeave={ (event) => this.animateOut(event) }
                    onMouseEnter={ (event) => this.animateIn(event) }>
                        <div className="card-3D-effect" style={ this.state.card3d }>
                            <div className="sneaker">
                                <div className="circle"></div>
                                <img src={ sneaker } alt="" />
                            </div>

                            <div className="info">
                                <h1 className="title">Snekaer name</h1>
                                <h3>Description</h3>

                                <div className="sizes">
                                    <button className="unavaliable" disabled>39</button>
                                    <button>40</button>
                                    <button className="active">41</button>
                                    <button>42</button>
                                    <button>43</button>
                                </div>

                                <div className="purchase">
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        )
    }
}
