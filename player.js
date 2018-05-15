

const Player = function(name, hand){
  this.name = name;
  this.hand = [];
}

Player.prototype.playCard = function (cat) {
  cardToPlay = this.hand[0];
  this.hand.shift();
  if (cat === "strength"){
    return cardToPlay.strength;
  } else if (cat === "intelligence"){
    return cardToPlay.intelligence;
  } else if (cat === "agility"){
    return cardToPlay.agility;
  }
};





module.exports = Player;
