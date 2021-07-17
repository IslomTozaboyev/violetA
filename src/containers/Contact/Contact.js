import React, { Component } from 'react';
import "./Contact.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBath, faFile, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import link1 from "../../img/link1.png";
import link2 from "../../img/link2.png";
import link3 from "../../img/link3.png";


class ContactPlus extends Component{
    render() {
        return <div className={this.props.className}>
            {
                this.props.children
            }
        </div>
    }
}


export default class Contact extends Component {
    render() {
        return (
            <div className="container contact my-5">
                <div className="row ">
                    <div className="col-12 col-lg-6 services">
                        <p>Services</p>
                        <hr className="hr" />
                       <div className="d-flex">
                            <h1 className="text">Let me know if you want to talk  about a potential collaboration. I'm available for freelance work.</h1>
                       </div>
                    </div>
                    <div className="col-lg-6 text-lg-end mt-5">
                      <a className="mt-5 inforname" href="#">infoname@mail.com</a>
                    </div>
                </div>
                <ContactPlus>
                     <Input className="mt-4 input py-3" type="text" name="text" id="text" placeholder="What’s your name?" />
                     <Input className="mt-4 input py-3" type="email" name="email" id="exampleEmail" placeholder="Your email" />
                    <Input className="mt-4 input py-3" type="text" name="text" id="text" placeholder="with a placeholder" />

                  <div className="d-flex justify-content-between align-items-center my-4">
                       <div>
                            <Button className="button">Get a Quote</Button>
                       </div>
                        <div>
                            <FontAwesomeIcon className="me-3 text-secondary" icon={faPaperclip}/>
                            <FontAwesomeIcon className="text-secondary" icon={faArrowRight}/>
                        </div>
                    </div>
                    
                    <div className="text-center my-5">
                        <h1 className="link">Let’s be Friends</h1>
                        <img className="me-3 my-2" src={link1} alt="rasm" />
                        <img className="me-3 my-2" src={link2} alt="rasm" />
                        <img className="me-3 my-2" src={link3} alt="rasm" />
                    </div>
                </ContactPlus>
            </div>
        )
    }
}
