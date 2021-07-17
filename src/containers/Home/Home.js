import { Button } from 'reactstrap';
import React, { Component } from 'react';
import "./Home.css";
import avatar from "../../img/avatar.png";
import HomeBox from '../../components/HomeBox';




export default class Home extends Component {
    render() {
        return (
            <div className="container home">
                <div className="row">

                    <HomeBox className="col-md-6 homebox__title">
                        <p className="subtitle">Hello,</p>
                            <h1>Adam Zakob</h1>
                            <p className="my-5 description">a freelance UX Designer</p>
                            <Button color="dark button">Let’s Talk</Button>
                         </HomeBox>
                    
                        <HomeBox>
                            <img className="w-75 avatar" src={avatar} alt="rasm" />
                        </HomeBox>
                </div>
            </div>
        )
    }
}