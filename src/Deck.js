import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';
import Card from './Card';

const BASE_API_URL = "https://deckofcardsapi.com/api/deck";

export default  class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
				deckId: '',
        cards : []
				};
		this.handleClick = this.handleClick.bind(this);
		this.restart = this.restart.bind(this)
	};

	async componentDidMount() {
    let response = await axios.get(
				`${BASE_API_URL}/new/shuffle/?deck_count=1`
				);
		this.setState({deckId: response.data.deck_id});
	}
	//handle click and request Api for a new card
	async handleClick(evt){
		evt.preventDefault();
		if(this.state.cards.length <= 5){
			let response = await axios.get(
					`${BASE_API_URL}/${this.state.deckId}/draw/?count=1`
			);
			let newCard = { id: uuid(), image: response.data.cards[0].image };
			let cards = [...this.state.cards, newCard ];
			this.setState({cards: cards});
		}
	
	}
	restart(){
		this.setState({cards: []});
	}
	renderCards(){
		if(this.state.cards.length < 52){

			return(
				
				<div>
					{this.state.cards.map(c => (
						< Card   
							imgUrl={c.image} 
							id={c.id}
							key={c.id}/>
						))}
				</div>
			)}
		
		else {
			return( 
				<div>
			<p> No more cards</p>
			<button onClick={this.restart()}></button>
			</div>
			)}
	}
	render(){
		return (
			<div>
				<button onClick={this.handleClick}> Gimme Card</button>
				{this.renderCards()}
			</div>
		)

	}
        
}