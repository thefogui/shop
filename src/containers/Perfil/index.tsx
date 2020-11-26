import React, { Component } from 'react'

import {
    AiOutlineMail,
    AiOutlineMessage,
    AiOutlineCalendar,
    AiOutlineUser,
    AiOutlineStar,
    AiOutlineFacebook,
    AiOutlineTwitter
} from 'react-icons/ai'
import { MdLocalShipping, MdSettings } from 'react-icons/md'
import { IoIosStats } from 'react-icons/io'

import { Container } from './styles'

import Header from './../../components/Header/'


export default class Perfil extends Component {
    render() {
        return (
            <Container>
                <Header />

                <div className="box">
                    <div className="top-bar">
                        <ul>
                            <li><MdSettings /> <span>Settings</span></li>
                            <li><AiOutlineUser /> <span>Account</span></li>
                            <li><AiOutlineMessage /> <span>Messages</span></li>
                            <li><AiOutlineStar /> <span>Favotites</span></li>
                        </ul>
                    </div>

                    <div className="profile">
                        <div className="big-ptofile-picture">
                            <img
                                src="https://images.unsplash.com/photo-1520635360276-79f3dbd809f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                alt="pic" />
                        </div>

                        <h1>User Name</h1>

                        <div className="profile-description">
                            Lorem ipsum dolor sit amet consectetuer adipiscing
                        </div>
                    </div>

                    <div className="newsletter">
                        <h1>Join the newsletter</h1>

                        <label>
                            <AiOutlineMail />
                            <input type="text" />
                        </label>

                        <button>
                            Subscribe
                        </button>
                    </div>

                    <div className="menu-box">
                        <div className="head">
                            <h1>Menu box</h1>
                        </div>

                        <div className="body">
                            <ul>
                                <li> <AiOutlineMessage /> <span>Messages</span></li>
                                <li> <MdLocalShipping /> <span>Orders</span></li>
                                <li> <AiOutlineCalendar /> <span>Events</span></li>
                                <li> <MdSettings /> <span>Settings</span></li>
                                <li> <IoIosStats /> <span>Statistics</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="socials">
                        <div className="social facebook">
                            <div>
                                <AiOutlineFacebook />
                            </div>
                            <span>
                                Facebook
                            </span>
                        </div>

                        <div className="social twitter">
                            <div>
                                <AiOutlineTwitter />
                            </div>
                            <span>
                                Twitter
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
