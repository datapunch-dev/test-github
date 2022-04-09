import Navbar from './components/navbar';
import Card from './components/card';
import React, {Component} from 'react';
import renegade from './images/renegade.jpg';
import wrangler from './images/wrangler.jpg';
import cherokee from './images/cherokee.jpg';
import rubicon from './images/rubicon.jpg';

class App extends Component {
  state = {
    cards: [
              { id: 0, auto: 'Renegade', prezzo: 50.000, immagineauto: renegade, quantità: 0 },
              { id: 1, auto: 'Wrangler', prezzo: 70.000, immagineauto: wrangler, quantità: 0 },
              { id: 2, auto: 'Cherokee', prezzo: 40.000, immagineauto: cherokee, quantità: 0 },
              { id: 3, auto: 'Rubicon',  prezzo: 80.000, immagineauto: rubicon, quantità: 0 },              
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card}
    cards[id].quantità++;
    this.setState({ cards });
  }
 

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <div className='row'>
            {this.state.cards.map(card => (
                <Card
                key  ={card.id}
                card ={card} 
                onDelete ={this.handleDelete}
                onIncrement ={this.handleIncrement}
                />
              ))
            }
          </div>
          <hr />
        </div>  
      </>
    );  
  }  
}

export default App;
