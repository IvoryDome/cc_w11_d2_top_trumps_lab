const Game = function(players, deck){
  this.players = players;
  this.deck = deck;
}




Game.prototype.dealCards = function () {
  this.players[0].hand.push(this.deck[0]);
  this.players[1].hand.push(this.deck[1]);
  this.players[0].hand.push(this.deck[2]);
  this.players[1].hand.push(this.deck[3]);
  this.players[0].hand.push(this.deck[4]);
  this.players[1].hand.push(this.deck[5]);
};


Game.prototype.compareHands = function (p1card,p2card) {
  if (p1card > p2card){
    return "Player 1 Wins!"
  } else if (p1card < p2card){
    return "Player 2 Wins!"
  } else {
    return "draw!"
  }
}









module.exports = Game;
