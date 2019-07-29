import React, { Component } from 'react';
import './Card.css'

															
export default  class Card extends Component {
	constructor(props){
		super(props);
	}
render(){
		const {imgUrl, id} = this.props;
		let angle = Math.random() * 90 - 45;
    let randomX = Math.random() * 40 - 20;
    let randomY = Math.random() * 40 - 20;
    return(  
			<div className="Card-area">
				<img src={`${imgUrl}`} style={{transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`}}></img>
		</div>  
    )
}

}

// style={{transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`}}