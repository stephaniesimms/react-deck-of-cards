import React, { Component } from 'react';
import './Card.css';
import { directive } from '@babel/types';

class Card extends Component {
  constructor(props) {
    super(props);

    //Calculate randomly rotated card position and store as instance variable
    let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    this._transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`;
  }

  render() {
    const { imgUrl, name } = this.props;

    return (
      <img className="Card"
        alt={name}
        src={`${imgUrl}`}
        style={{ transform: this._transform }} />
    );
  }
}

export default Card;