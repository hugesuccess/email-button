import React, { Component } from 'react';

const style = {
  margin: 24,
};


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
                onClick={this.email}
            >Contact Us</button>
       );
    }
}

export default EmailButton;
