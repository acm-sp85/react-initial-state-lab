import React, { Component } from 'react';


export default class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft : props.initialCount
        }
    }

    
    render() {
        // let timer = this.props.initialCount
        let timer = this.state.secondsLeft
      return (
        <div>
            { timer > 0  ? `${timer} seconds left before I go boom!` : "Boom!" }
            
            </div>

      )
    }
  }
  