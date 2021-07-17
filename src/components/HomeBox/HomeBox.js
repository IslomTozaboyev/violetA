import React, { Component } from 'react';
import "./HomeBox.css"

export default  class HomeBox extends Component{
    render() {

        return <div className={this.props.className || `col-md-6`}>
            {this.props.children}
        </div>
    }
}