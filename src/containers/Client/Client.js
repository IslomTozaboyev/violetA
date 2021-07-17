import React, { Component } from 'react';
import "./Client.css";
import Project from '../../components/Project';
import client from "../../img/client.png";
import client2 from "../../img/client2.png";
import client3 from "../../img/client3.png";
import client4 from "../../img/client4.png";
import client5 from "../../img/client5.png";

const photo = [
    {img: client},
    {img: client2},
    {img: client3},
    {img: client4},
    {img: client5},
]

export default class Client extends Component {
    render() {
        return (
            <div className="container mt-5 services portfolio">
            <div className="row justify-content-center">
                        <div>
                            <p>Clients</p>
                            <hr  className="hr"/>
                        </div>
                        <h1>Big Deal With</h1>
                        {
                            photo.map((v, i) => {
                                return  <Project className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center align-items-center overflow-hidden">
                                <img src={v.img} alt="rasm" />
                            </Project>
                            })
                        }
            </div>
        </div>
        )
    }
}
