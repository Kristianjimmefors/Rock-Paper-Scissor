import React, { component } from 'react';
import ReactDOM from 'react-dom';


class Game extends React.Component {
  //sets the states to somthing so it's not undefined
  constructor() {
    super();
    this.state = {
      number: null,
      humanChoice: null,
      aiChoice: null,
      aiPoints: 0,
      humanPoints: 0,
      humanClass: 'notActive',
      aiClass: 'notActive'
    };
  }

  
  //sets the human choice to rock, paper or scissor
  setHchoice($choice) {
    if ($choice == 'rock') {
      this.setState({ humanChoice: 'rock' });
    } else if ($choice == 'paper') {
      this.setState({ humanChoice: 'paper' });
    } else {
      this.setState({ humanChoice: 'scissor' });
    }
    this.setState({ humanClass: 'active'})
    this.aiChoice();
  }

  //Computer chooses rock, paper or scissir. Resets the choises and the images
  aiChoice() {
    setTimeout(() => {
      this.setState({ aiChoice: Math.floor(Math.random() * 3 + 1) });
      if (this.state.aiChoice < 2) {
        this.setState({ aiChoice: 'rock' });
      } else if (this.state.aiChoice <= 2) {
        this.setState({ aiChoice: 'paper' });
      } else {
        this.setState({ aiChoice: 'scissor' });
      }
      this.setState({ aiClass: 'active' })
      this.setState(this.state);
      this.scoreCounter();
    }, 500);
    //resets the images and the choices
    setTimeout(() => {
      this.setState({ humanChoice: null });
      this.setState({ aiChoice: null });
      if (this.state.humanClass == 'active' && this.state.aiClass == 'active') {
        this.setState({ aiClass: 'notActive' })
        this.setState({ humanClass: 'notActive' })
      }
    }, 1500);
  }


  //check who wins and count score
  scoreCounter() {
    //check to see who wins
    let b = this.state.humanChoice === null && this.state.aiChoice === null ? '' :
      (this.state.humanChoice === this.state.aiChoice ? '' :
        (this.state.humanChoice === 'scissor' && this.state.aiChoice === 'rock' ? false :
          (this.state.humanChoice === 'paper' && this.state.aiChoice === 'rock' ? true :
            (this.state.humanChoice === 'rock' && this.state.aiChoice === 'paper' ? false :
              (this.state.humanChoice === 'scissor' && this.state.aiChoice === 'paper' ? true :
                (this.state.humanChoice === 'paper' && this.state.aiChoice === 'scissor' ? false :
                  (this.state.humanChoice === 'rock' && this.state.aiChoice === 'scissor' ? true : ''
                  )))))));

    //add points to the one who won
    if (b === true) {
      this.setState({ humanPoints: this.state.humanPoints + 1 });
    } else if (b === false) {
      this.setState({ aiPoints: this.state.aiPoints + 1 });
    } else;
  }

  render() {
    return <div>
      <div id="imgContainer">
        <img className={this.state.humanClass} src={"img/" + this.state.humanChoice + ".jpg"}></img>
        <img className={this.state.aiClass} src={"img/" + this.state.aiChoice + ".jpg"}></img>
      </div>
      <div id="btnContaier">
        <button id="rock" onClick={() => this.setHchoice('rock')}>Sten</button>
        <button id="scissor" onClick={() => this.setHchoice('scissor')}>Sax</button>
        <button id="paper" onClick={() => this.setHchoice('paper')}>Påse</button>
        <p>Dina poäng: {this.state.humanPoints}</p>
        <p>Datorns poäng: {this.state.aiPoints}</p>
      </div>
    </div>
  }
}

ReactDOM.render(<Game></Game>, document.getElementById('app'));
