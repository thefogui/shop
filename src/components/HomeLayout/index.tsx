import React, { Component } from 'react'

import { Container } from './styles';

import man from './../../static/svg/man.svg'
import woman from './../../static/svg/woman.svg'

//Containers
import PopInCard from './../PopInCard/'
import Slider from './../Slider/'
import Intro from './../Intro/'
import { Link } from 'react-router-dom';


export default class index extends Component {
    render() {
        const colorMan1 = '#BA68C8'
        const colorMan2 = '#9C27B0'
        const colorWoman1 = '#FFB74D'
        const colorWoman2 = '#FF9800'

        return (
            <Container>
                <div className="box item1">
                    <Intro />
                </div>
                <div className="box item2">
                    <Link to="/catalogseason">
                        <Slider />
                    </Link>
                </div>
                <div className="box item3">
                    <Link to={{ pathname: '/catalog', search: "woman" }}>
                        <PopInCard
                            image={ woman }
                            bg1={ colorWoman1 }
                            bg2={ colorWoman2 }
                            title="Woman"
                            subtitle="Shop Woman Clothes" />
                    </Link>
                </div>
                <div className="box item4">
                    <Link to={{ pathname: '/catalog', search: "man" }}>
                        <PopInCard
                            image={ man }
                            bg1={ colorMan1 }
                            bg2={ colorMan2 }
                            title="Man"
                            subtitle="Shop Man Clothes" />
                    </Link>
                </div>
            </Container>
        )
    }
}
