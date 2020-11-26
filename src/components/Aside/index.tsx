import React, { Component } from 'react'

import { Container } from './styles'

import { IoIosArrowForward} from 'react-icons/io'

interface MyProps {
    parentCallback: any
}


interface MyState {
    active: boolean[],
    sizes: string[],
}

export default class Aside extends Component<MyProps, MyState> {
    constructor(props : any) {
        super(props)

        this.state = {
            active: [false, false, false, false],
            sizes: [],
        }
    }

    toggleClassActive = (index : number) => {
        const active = [...this.state.active.slice(0, index),
            !this.state.active[index],
            this.state.active.slice(index + 1)].flat()
        this.setState({active})
    }

    handleChangeChkSizes(event : any) {
        const value = event.target.value

        if (!this.state.sizes.includes(value)) {
            const newAddedSizes: string[] = Object.assign([], this.state.sizes)
            newAddedSizes.push(value)

            this.setState({sizes: newAddedSizes}, () => this.props.parentCallback(newAddedSizes))
        } else {
            let filteredArray = this.state.sizes.filter(item => item !== value)
            this.setState({sizes : filteredArray}, () => this.props.parentCallback(filteredArray))
        }
    }

    render() {
        return (
            <Container>
                <div className="filter-controls">
                    <div className={`filter size ${this.state.active[0] ? "active" : ""}`}>
                        <div className="title" onClick={event => this.toggleClassActive(0)}>
                            <IoIosArrowForward />
                            <h1>Size</h1>
                        </div>

                        <div className="content">
                            <ul>
                                <li><input type="checkbox" value="s" onChange={event => {this.handleChangeChkSizes(event)}} /> S</li>
                                <li><input type="checkbox" value="xs" onChange={event => {this.handleChangeChkSizes(event)}} /> XS</li>
                                <li><input type="checkbox" value="xl" onChange={event => {this.handleChangeChkSizes(event)}} /> XLarge</li>
                                <li><input type="checkbox" value="m" onChange={event => {this.handleChangeChkSizes(event)}} /> Medium</li>
                                <li><input type="checkbox" value="l" onChange={event => {this.handleChangeChkSizes(event)}} /> Large</li>
                                <li><input type="checkbox" value="40" onChange={event => {this.handleChangeChkSizes(event)}} /> 40</li>
                                <li><input type="checkbox" value="42" onChange={event => {this.handleChangeChkSizes(event)}} /> 42</li>
                                <li><input type="checkbox" value="44" onChange={event => {this.handleChangeChkSizes(event)}} /> 44</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`filter colour ${this.state.active[1] ? "active" : ""}`}>
                        <div className="title" onClick={event => this.toggleClassActive(1)}>
                            <IoIosArrowForward />
                            <h1>Colour</h1>
                        </div>

                        <div className="content">
                            <ul>
                                <li><input type="checkbox" value="black" /> Black</li>
                                <li><input type="checkbox" value="blue" /> Blue</li>
                                <li><input type="checkbox" value="grey" /> Grey</li>
                                <li><input type="checkbox" value="pink" /> Pink</li>
                                <li><input type="checkbox" value="green" /> Green</li>
                                <li><input type="checkbox" value="red" /> Red</li>
                                <li><input type="checkbox" value="brown" /> Brown</li>
                                <li><input type="checkbox" value="white" /> White</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`filter category ${this.state.active[2] ? "active" : ""}`}>
                        <div className="title" onClick={event => this.toggleClassActive(2)}>
                            <IoIosArrowForward />
                            <h1>Category</h1>
                        </div>

                        <div className="content">
                            <ul>
                                <li><input type="checkbox" value="dresses" /> Dresses</li>
                                <li><input type="checkbox" value="jumpers" /> Jumpers</li>
                                <li><input type="checkbox" value="tshirts" /> T-Shirts</li>
                                <li><input type="checkbox" value="blouses" /> Blouses</li>
                                <li><input type="checkbox" value="jackets" /> Jackets</li>
                                <li><input type="checkbox" value="boots" /> Boots</li>
                                <li><input type="checkbox" value="hoodies" /> Hoodies</li>
                                <li><input type="checkbox" value="bag" /> Bag</li>
                                <li><input type="checkbox" value="sweaters" /> Sweaters</li>
                            </ul>
                        </div>
                    </div>

                    <div className={`filter price ${this.state.active[3] ? "active" : ""}`}>
                        <div className="title" onClick={event => this.toggleClassActive(3)}>
                            <IoIosArrowForward />
                            <h1>Price</h1>
                        </div>

                        <div className="content">
                            <div className="text">Price Range: €0 - €508</div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
