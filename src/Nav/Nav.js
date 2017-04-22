import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <header className="header">
                <div className="constrain">
                    <h1>
                        <img className="logoImg" src="http://lorempixel.com/400/200/" alt="" />
                        Company
                    </h1>
                    <nav className="navigation">
                        <div className="nav-toggle">
                            <span className="trigger">&#9776;</span>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Nav;