import React, { Component } from 'react'

import { Container, Loading } from './styles'

//FUNCTIONS
import { getAllClothes } from './../../api/api'


//COMPONENTS
import Header from './../../components/Header/'
import Aside from './../../components/Aside/'
import SimpleCard from '../../components/SimpleCard'


interface MyProps {
    sizes: string[]
}

interface MyState {
    cardsPerRow: number,
    totalItems: number,
    actualItem: number,
    loading: boolean,
    allClothes: any[],
    isLoaded: boolean,
    sizes: string[],
}

export default class CatalogSeason extends Component<MyProps, MyState> {

    constructor(props: any) {
        super(props)

        this.state = {
            cardsPerRow: 3,
            totalItems: 12,
            actualItem: 0,
            loading: true,
            allClothes: [],
            isLoaded: false,
            sizes: [],
        }
    }

    componentDidMount() {
        if (this.state.isLoaded === false) {
            this.retrieveClothes()
        }

        this.setState({isLoaded : true})
    }


    retrieveClothes() {
        const loadClothes = async () => {
            this.setState({loading: true})

            const newClothes = await getAllClothes(this.state.actualItem, this.state.totalItems)
            this.setState((state) => ({actualItem : state.actualItem + state.totalItems}))
            this.setState((state) => ({allClothes : [...state.allClothes, ...newClothes]}))

            this.setState({loading: false})
        }

        loadClothes()
    }

    handleScroll = (event: any) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget

        //reached the bottom of the page
        if (scrollHeight - scrollTop === clientHeight) {
            this.retrieveClothes()
        }
    }

    handleCallback = (childData : string[]) => {

    }

    render() {

        const styles = {
            width: "%",
            display: "grid",
            gridTemplateColumns: `repeat(${this.state.cardsPerRow}, auto)`,
            gridGap: "30px",
            gridTemplateRows: `repeat(${this.state.totalItems/this.state.cardsPerRow}, 600px)`,
            height: "auto",
        }

        return (
            <div>
                <Header />

                <Aside parentCallback={this.handleCallback} />

                <Container>
                    

                    <Loading />
                </Container>
            </div>

        )
    }
}
