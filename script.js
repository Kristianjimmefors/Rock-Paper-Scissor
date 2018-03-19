var Game = createReactClass({
  //sätter mina state till någonting i början så att dem inte är undefined
  getInitialState: function() {
    return {
      number: null,
      humanChoice: null,
      aiChoice: null,
      aiPoints: 0,
      humanPoints: 0,
    };
  },
//sätter state till sten
setRock: function() {
  this.setState(this.humanChoice = 'rock');
  this.setState(this.state);
  this.aiChoice();
},
//sätter state till påse
setPaper: function() {
  this.setState(this.humanChoice = 'paper');
  this.setState(this.state);
  this.aiChoice();
},
//ätter state till sax
setScissor: function() {
  this.setState(this.humanChoice = 'scissor');
  this.setState(this.state);
  this.aiChoice();
},
//dator väljer sten sax eller påse och nollställer sedan bilden och valen
aiChoice: function(){
  setTimeout( function() {
    this.state.aiChoice = Math.floor(Math.random() * 3 + 1);
    if (this.state.aiChoice < 2) {
      this.state.aiChoice = 'rock';
    } else if (this.state.aiChoice <=2) {
      this.state.aiChoice = 'scissor';
    }else {
      this.state.aiChoice = 'paper';
    }
    this.setState(this.state);
    this.scoreCounter();
  }.bind(this), 1500);
  //nollställer bilderna och valen
  setTimeout(function() {
    this.state.humanChoice = null;
    this.setState(this.state);
    this.state.aiChoice = null;
    this.setState(this.state);
  }.bind(this), 3000);
},
//kollar vem som vinner och räknar poäng
scoreCounter: function() {
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
  this.state.humanPoints = this.state.humanPoints + 1;
  this.setState(this.state);
}else if (b ===false){
  this.state.aiPoints = this.state.aiPoints + 1;
  this.setState(this.state);
}else{};
},
  render: function(){
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
});

ReactDOM.render(<Game></Game>, document.getElementById('app'));
