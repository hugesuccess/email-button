import React, { Component } from 'react';
import './emailButton.css'

class EmailButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.email = this.email.bind(this);
    }

    email() {
        return window.open('mailto:test@example.com?subject=subject&body=body')
    }

    render() {
        return (
            <button
                className="text-glow"
                onClick={this.email}
            >Contact Us</button>
       );
    }
}

export default EmailButton;
