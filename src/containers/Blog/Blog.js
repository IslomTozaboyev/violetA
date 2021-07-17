import React, { Component } from 'react';
import "./Blog.css";
import blog from "../../img/blog.png";

export default class Blog extends Component {
    render() {
        return (
            <div className="container blog my-5">

                 <div className="d-flex">
                        <div className="services">
                            <p>Blog</p>
                            <hr className="hr" />
                            <h1>Get News Feeds</h1>
                        </div>
                <div className="row justify-content-center overflow-hidden">
                     
                        <div className="col-12 col-md-6 col-lg-4 blog__box ms-5">
                            <img src={blog} alt="rasm" />
                            <p>20 June/2020</p>
                            <h1>Technology is evolving rapidly. New <br /> devices and applications.</h1>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 back ms-5">
                            <div className="back__box">
                                <p>20 June/2020</p>
                                <h5 className="text" >New devices and  applications come to the market.</h5>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 back2 ms-4">
                            <div className="back__box2">
                                <p>20 June/2020</p>
                                <h5 className="text2" >Every day providing solutions to problems.</h5>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}
