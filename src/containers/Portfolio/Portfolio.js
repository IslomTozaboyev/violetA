import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./Portfolio.css";
import portfolio1 from "../../img/portfolio1.png";
import portfolio2 from "../../img/portfolio2.png";
import Project from '../../components/Project';


export default class Portfolio extends Component {
    render() {
        return (
            <div className="container mt-5 services portfolio">
                <div className="row">
                        <p>Portfolio</p>
                        <hr  className="hr"/>
                        <div className="d-flex justify-content-between align-items-center">
                            <h1>All Creative Projects</h1>
                            <div className="d-flex align-items-center">
                                <a className="link" href="#">Explore More</a>
                                <FontAwesomeIcon className="p-icon" className="ms-2 mt-2 h5" icon={faArrowRight}/>
                            </div>
                        </div>

                    <Project className="col-md-6">
                        <img className="w-100" src={portfolio1} alt="rasm" />
                    </Project>

                    <Project className="col-md-6">
                        <img className="w-100" src={portfolio2} alt="rasm" />
                    </Project>

                </div>
            </div>
        )
    }
}
