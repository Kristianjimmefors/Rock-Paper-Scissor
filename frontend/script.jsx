const React = require('react');
const ReactDOM = require('react-dom');


class Game extends React.Component{
  //sätter mina state till någonting i början så att dem inte är undefined
  constructor(){
    super();
      this.state = {
      number: null,
      humanChoice: null,
      aiChoice: null,
      aiPoints: 0,
      humanPoints: 0,
    };
    this.aiChoice = this.aiChoice.bind(this),
    this.scoreCounter = this.scoreCounter.bind(this);
  }
//sätter humanChoice till sten, sax eller påse
  setHchoice($choice){
    if($choice == 'rock'){
      this.setState({humanChoice: 'rock'});
      this.aiChoice();
    } else if($choice == 'paper'){
      this.setState({humanChoice: 'paper'});
      this.aiChoice();
    } else{
      this.setState({humanChoice: 'scissor'});
      this.aiChoice();
    }
  }
//dator väljer sten, sax eller påse och nollställer sedan bilden och valen
aiChoice(){
  setTimeout( () => {
    this.setState({aiChoice: Math.floor(Math.random() * 3 + 1)});
    if (this.state.aiChoice < 2) {
      this.setState({aiChoice: 'rock'});
    } else if (this.state.aiChoice <=2) {
      this.setState({aiChoice: 'scissor'});
    }else {
      this.setState({aiChoice: 'paper'});
    }
    this.setState(this.state);
    this.scoreCounter();
  }, 1000);
  //nollställer bilderna och valen
  setTimeout(() => {
    this.setState({humanChoice: null});
    this.setState({aiChoice: null});
  }, 2000);
}
//kollar vem som vinner och räknar poäng
scoreCounter() {
  //kollar vem som vinnar
  let b = this.state.humanChoice === null && this.state.aiChoice === null? '':
  (this.state.humanChoice === this.state.aiChoice? '':
  (this.state.humanChoice === 'scissor' && this.state.aiChoice === 'rock'? false:
  (this.state.humanChoice === 'paper' && this.state.aiChoice === 'rock'? true:
  (this.state.humanChoice === 'rock' && this.state.aiChoice === 'paper'? false:
  (this.state.humanChoice === 'scissor' && this.state.aiChoice === 'paper'? true:
  (this.state.humanChoice === 'paper' && this.state.aiChoice === 'scissor'? false:
  (this.state.humanChoice === 'rock' && this.state.aiChoice === 'scissor'? true:''
)))))));
//lägger till poäng till den som vann
if (b === true) {
  this.setState({humanPoints: this.state.humanPoints +1});
}else if (b === false){
  this.setState({aiPoints: this.state.aiPoints +1});
}else;
}
  render(){
    return <div>
      <div id="imgContainer">
        <img src={"img/" + this.state.humanChoice + ".jpg"}></img>
        <img src={"img/" + this.state.aiChoice + ".jpg"}></img>
      </div>
      <button id="rock"  onClick={() => this.setHchoice('rock')}>Sten</button>
      <button id="scissor"  onClick={() => this.setHchoice('scissor')}>Sax</button>
      <button id="paper"  onClick={() => this.setHchoice('paper')}>Påse</button>
      <p>Dina poäng: {this.state.humanPoints}</p>
      <p>Datorns poäng: {this.state.aiPoints}</p>
    </div>
  }
}

ReactDOM.render(<Game></Game>, document.getElementById('app'));
