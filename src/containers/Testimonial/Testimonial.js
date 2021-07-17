import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Testimonial.css";
import user1 from "../../img/user1.png";
import user2 from "../../img/user2.png";
import user3 from "../../img/user3.png";
import user4 from "../../img/user4.png";
import user5 from "../../img/user5.png";
import test from "../../img/test.png";

class Swiper extends Component {
    render() {
        return <div className={this.props.className}>
            {
                this.props.children
            }
        </div>
    }
}

export default class Testimonial extends Component {
    render() {
        return (
            <div className="container services portfolio">
            <div className="row ">
                    <p>Testimonials</p>
                    <hr  className="hr"/>
                    <h1>What People Says</h1>

                    <Swiper className="col-md-12 mb-5 testimonial">
                        <div className="d-flex justify-content-between align-items-center text-center p-5">
                            <div>
                                <img className="d-none d-lg-block" src={user1} alt="rasm" />
                            </div>
                            <div className="mt-4">
                                <img  src={test} alt="rasm" />
                                <p>Quote testimonials demonstrate support for your product or feature from a <br /> user who has experience with it.
                                    This can be significantly more effective than <br /> traditional advertising methods as most consumers will trust.</p>
                            </div>
                            <div>
                                <img className="d-none d-lg-block" src={user2} alt="rasm" />
                            </div>
                        </div>
                    </Swiper>

                    <Swiper className="testimonial">
                        <div className="d-flex justify-content-between align-items-center text-center">
                            <div>
                                <img className="w-100" src={user3} alt="rasm" />
                            </div>
                            <div>
                                <img className="w-100" src={user4} alt="rasm" />
                                <h1>Michael John</h1>
                                <p className="subtitle">CEO of MZP</p>
                            </div>
                            <div>
                                <img src={user5} alt="rasm" />
                            </div>
                        </div>
                    </Swiper>

                  
            </div>
        </div>
        )
    }
}
