
import React, { Component } from 'react';
import './index.css';
import './main.js';
import 'boxicons';
import avatar from '../../assets/Image/avatar.jpg';
import logo from '../../assets/Image/logosbut2.png';

class Home extends Component {
    render() {
        return (
            <body id="body-pd">
                <div class="header" id="header">
                    <div class="header__img">
                        <img src={avatar} alt={"logo"} />
                    </div>
                </div>

                <div class="l-navbar" id="nav-bar">
                    <nav class="nav">
                        <div>
                            <a href="#" class="nav__logo">
                                <img id='nav__logo_img' src={logo} alt={"logo"} />
                                <span class="nav__logo-name">SBut Platform</span>
                            </a>

                            <div class="nav__list">
                                <a href="#" class="nav__link active">
                                    <box-icon name='grid-alt' color='#fcfcfc'></box-icon>
                                    <span class="nav__name">Dashboard</span>
                                </a>

                                <a href="#" class="nav__link">
                                    <box-icon name='user' color='#fcfcfc'></box-icon>
                                    <span class="nav__name">Users</span>
                                </a>

                                <a href="#" class="nav__link">
                                    <box-icon name='notification' color='#fcfcfc' ></box-icon>
                                    <span class="nav__name">Notification</span>
                                </a>

                                <a href="#" class="nav__link">
                                    <box-icon name='bookmark-alt' color='#fcfcfc'></box-icon>
                                    <span class="nav__name">Favorites</span>
                                </a>

                                <a href="#" class="nav__link" >
                                    <box-icon name='folder' color='#F7F6FB'></box-icon>
                                    <span class="nav__name">Data</span>
                                </a>

                                <a href="#" class="nav__link">
                                    <box-icon name='bar-chart-alt-2' color='#F7F6FB'></box-icon>
                                    <span class="nav__name">Analytics</span>
                                </a>
                            </div>
                        </div>

                        <a href="#" class="nav__link">
                            <box-icon name='log-out-circle' color='#F7F6FB'></box-icon>
                            <span class="nav__name">Log Out</span>
                        </a>
                    </nav>
                </div>
                <div id='main_componets'>
                    <div id='box_compoents'>
                        <div class="row">

                            <div class="card">
                                <div class="card-header">
                                    <text>Phòng 1 </text>
                                </div>
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi. </p>
                                </div>

                            </div>
                            <div class="card">
                                <div class="card-header">
                                <text>Phòng 1 </text>
                                </div>
                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.</p>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                <text>Phòng 1 </text>
                                </div>

                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.</p>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                <text>Phòng 1 </text>
                                </div>

                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.</p>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                <text>Phòng 1 </text>
                                </div>

                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.</p>

                                </div>
                            </div>

                            <div class="card">
                                <div class="card-header">
                                <text>Phòng 1 </text>
                                </div>

                                <div class="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi neque molestiae eius explicabo mollitia tempore reiciendis, vel, sequi.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default Home;