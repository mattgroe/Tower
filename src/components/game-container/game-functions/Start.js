import React, { Component } from 'react';

class Start extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
        this.start = this.start.bind(this);
    }

    start() {
        console.log('this')
        this.props.btnClick();
    }

    render() {
        return(
            <button onClick={this.start}>Start Game</button>
        )
    }
}

export default Start;