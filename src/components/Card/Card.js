import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Jumbotron, Button } from 'react-bootstrap';
import TextInput from '../TextArea/TextArea';
import './Card.css';


class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [`Click the 'Add' button and create some stickers!`],
      textField: ''
    }
    this.deleteCard = this.deleteCard.bind(this);
    this.inputText = this.inputText.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  deleteCard = (event) => {
    let cards = this.state.cards;
    cards.splice(event.target.id, 1);
    this.setState({
      cards: cards
    });
  }

  inputText = (text) => {
    this.setState({
      textField: text
    })
  }

  createItem = (event) => {
    let cards = this.state.cards;
    cards.push(this.state.textField);
    this.setState({
      cards: cards
    })
    let text = document.getElementById('input-box');
    text.value = '';
  }


  render() {

    const cards = this.state.cards;

    return (
      <div className='card-container'>
        <div className='card-input'>
          <TextInput className='card-input-text font-shri' inputText={this.inputText} createItem={this.createItem}/>
          <Button className='card-button br-100 font-gugi' bsStyle="primary" onClick={this.createItem}>Add</Button>
        </div>
        <div className='card-stickers'>
          {
            cards.map((card, index) => {
              return (
                <Draggable key={card + index}>
                  <Jumbotron className='draggable-card br4 font-indie'>
                    <div>
                      {card}
                    </div>
                    <Button id={index} className='draggable-button font-gugi f4' bsStyle="primary" onClick={this.deleteCard}>Delete</Button>
                  </Jumbotron>
                </Draggable>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Card;