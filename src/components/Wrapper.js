import React, { Component } from 'react';

import Start from '../components/game-container/game-functions/Start.js';

import '../css/character.css';
import '../css/wrapper.css';

class Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            characters: []
        }
        // binding for access to 'this'
        this.btnClick = this.btnClick.bind(this);
    }


    btnClick() {
        this.setState({
            clicked: true,
            characters: ["Human", "Orc", "Dwarf"]
        }, console.log('State after set: ', this.state.characters))
    }

    render() {
        return (
            <div className="super">
                <Start
                    btnClick = {this.btnClick}
                />
                <div>
                    {/* Mapping out characters available into the UI */}
                    {this.state.characters.map((char, index) => (
                        <div key={char+index}>{char}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Wrapper;
