import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FiShoppingCart } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

import { Container, Search, Navbar } from './styles'
import UserMenu from './../../components/UserMenu'
import Logo from './../../components/Logo'

interface MyState {
    isUserLogged: boolean,
    isShowUserMenu: boolean,
}

export default class Home extends Component<{}, MyState> {

    constructor(props: any) {
        super(props)

        let isTokenSaved = localStorage.getItem('userToken') ? true : false

        this.state = {
            isUserLogged : isTokenSaved,
            isShowUserMenu: false,
        }
    }

    logout = () => {
        localStorage.removeItem('userToken')
        this.setState({isUserLogged : false})
        this.setState({isShowUserMenu : false})
    }

    showUserMenu = () => {
        const isShowingUserMenu = this.state.isShowUserMenu

        this.setState({isShowUserMenu : !isShowingUserMenu})
    }

    render() {
        return (
            <Container>
                <header>
                    <div className="menu">
                        <div className="ham-menu">
                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <Logo />
                    </div>

                    <Search>
                        <input type="text" name="search" placeholder="Search ..." />

                        <div className="icons-container">
                            <div className="icon-search"></div>
                            <div className="icon-close">
                                <div className="x-up"></div>
                                <div className="x-down"></div>
                            </div>
                        </div>
                    </Search>

                    <Navbar className="nav-menu">
                        <ul>
                            <li className="cart">
                                <Link to='/shoppingcart'>
                                    <div className="">
                                        <span className="count animated">
                                            1
                                        </span>

                                        <FiShoppingCart size={22} />
                                    </div>
                                </Link>
                            </li>

                            {!this.state.isUserLogged && <li><Link to='/login'>Login</Link></li> }
                            {!this.state.isUserLogged && <li><Link to='/register'>Register</Link></li> }

                            {this.state.isUserLogged &&
                                <li>
                                    <div className="user-toggle" onClick={this.showUserMenu}>
                                        <div className="user-toggle-button" onClick={this.showUserMenu}>
                                            <div className="user-image">
                                            </div>

                                            <IoIosArrowDown />
                                        </div>

                                    </div>
                                </li>
                            }
                        </ul>

                        {this.state.isShowUserMenu  &&
                            <UserMenu handlerLogout={this.logout} />
                        }
                    </Navbar>
                </header>
            </Container>
        )
    }
}
