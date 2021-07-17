import React, { Component } from 'react';
import "./ServicesBox.css";



export default  class ServicesBox extends Component {
    render() {
        return <div className={this.props.className}>
            {this.props.children}
        </div>
    }
}
