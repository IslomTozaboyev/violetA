import React, { Component } from 'react';
import ServicesBox from '../../components/ServicesBox';
import "./Services.css";


export default class Services extends Component {
    constructor(props) {
        super(props)
        
        this.state = props;
    }
    render() {
        return (
            <div className="container mt-5 services">
                <div className="row">
                    <p>Services</p>
                    <hr  className="hr"/>
                    <h1>What  actually I love to do</h1>
                    {
                        this.state.data.map((v, i) => {
                            return  <ServicesBox className="col-lg-4 mt-5 services__box">
                            <div className="d-flex align-items-center">
                                 <img className="img me-3 my-3" src={v.img} alt="rasm" />
                                    <p className="subtitle">{v.title}</p>
                             </div>
                                <p className="description">{v.subtitle}</p>
                         </ServicesBox>
                        })
                    }
                </div>
            </div>
        )
    }
}
