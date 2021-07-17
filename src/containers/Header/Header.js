import React, { Component } from 'react';
import "./Header.css"
import logo from "../../img/logo.png"
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default class Header extends Component {
    
    state = { a: false }
        showNav = () => {
        this.setState((state) => {
            return {a: !state.a}
        })
}   

    render() {
        return (
            <header className="px-5 py-2 header">
              <div className="container-fluid my-2">
                   <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img className="w-100 h-100  mt-1" src={logo} alt="rasm" />

                        <div className={`nav__menu  ${this.state.a && "nav__start" || ""}`}>
                            <a href="#Product">About</a>
                            <a href="#Templates">Services
                            </a>
                            <a href="#Pricing">Works</a>
                                <a href="#Customers">Blog</a>
                                <Button className="times" onClick={this.showNav} color="success">
                                    <FontAwesomeIcon icon={faTimes}/>
                                 </Button>
                        </div>

                            </div>
                        <div className="nav__btn d-flex">
                            <Button className="d-none d-lg-flex me-4 light__button" color="light">
                                <FontAwesomeIcon icon={faBars}/>
                             </Button>
                                
                                <Button className="bars ms-3" onClick={this.showNav}>
                                    <FontAwesomeIcon icon={faBars}/>
                                </Button>
                        </div>
                   </div>
              </div>
            </header>
        )
    }
}