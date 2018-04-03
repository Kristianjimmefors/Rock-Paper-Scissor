var React = require('react');
var ReactDOM = require('react-dom');


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
    this.setRock = this.setRock.bind(this),
    this.setPaper = this.setPaper.bind(this),
    this.setScissor = this.setScissor.bind(this),
    this.aiChoice = this.aiChoice.bind(this),
    this.scoreCounter = this.scoreCounter.bind(this);
  }
//sätter state till sten
setRock() {
  this.setState({humanChoice: 'rock'});
  this.aiChoice();
}
//sätter state till påse
setPaper() {
  this.setState({humanChoice: 'paper'});
  this.aiChoice();
}
//ätter state till sax
setScissor() {
  this.setState({humanChoice: 'scissor'});
  this.aiChoice();
}
//dator väljer sten sax eller påse och nollställer sedan bilden och valen
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
  }, 1500);
  //nollställer bilderna och valen
  setTimeout(() => {
    this.setState({humanChoice: null});
    this.setState(this.state);
    this.setState({aiChoice: null});
    this.setState(this.state);
  }, 3000);
}
//kollar vem som vinner och räknar poäng
scoreCounter() {
  //kollar vem som vinnar
  var b = this.state.humanChoice === null && this.state.aiChoice === null? '':
  (this.state.humanChoice === this.state.aiChoice? '':
  (this.state.humanChoice === 'scissor' && this.state.aiChoice === 'rock'? false:
  (this.state.humanChoice === 'paper' && this.state.aiChoice === 'rock'? true:
  (this.state.humanChoice === 'rock' && this.state.aiChoice === 'paper'? false:
  (this.state.humanChoice === 'scissor' && this.state.aiChoice === 'paper'? true:
  (this.state.humanChoice === 'paper' && this.state.aiChoice === 'scissor'? false:
  (this.state.humanChoice === 'rock' && this.state.aiChoice === 'scissor'? true:''
)))))));
//lägger till poång till den som vann
if (b === true) {
  this.setState({humanPoints: +1});
  this.setState(this.state);
}else if (b ===false){
  this.setState({aiPoints:  + 1});
  this.setState(this.state);
}else;
}
  render(){
    return <div>
      <input id="rock" type="button" value="rock" onClick={this.setRock}></input>
      <input id="paper" type="button" value="paper" onClick={this.setPaper}></input>
      <input id="scissor" type="button" value="scissor" onClick={this.setScissor}></input>
      <p>{}</p>
      <img src={"img/" + this.state.humanChoice + ".jpg"}></img>
      <img src={"img/" + this.state.aiChoice + ".jpg"}></img>
      <p>Your points: {this.state.humanPoints}</p>
      <p>Computer points: {this.state.aiPoints}</p>
    </div>
  }
}

ReactDOM.render(<Game></Game>, document.getElementById('app'));
