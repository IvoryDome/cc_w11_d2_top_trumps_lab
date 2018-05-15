const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function (){

  let player1;
  let player2;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let game;

  beforeEach(function(){
      player1 = new Player('Pat Mustard');
      player2 = new Player('Father Ted');
      card1 = new Card('Superman', 6, 9, 7);
      card2 = new Card('Scarlet Witch', 7, 10, 5);
      card3 = new Card('Black Widow', 8, 6, 9);
      card4 = new Card('The Flash', 7, 4, 10);
      card5 = new Card('Wonder Woman', 8, 7, 5);
      card6 = new Card('Batman', 10, 5, 6);
      game = new Game([player1, player2], [card1, card2, card3, card4, card5, card6]);
  });

  it('should have a name', function (){
    const actual = player1.name;
    assert.strictEqual(actual, 'Pat Mustard');
  });

  it('should start with no cards', function (){
    const actual = player1.hand.length;
    assert.strictEqual(actual, 0);
  });

  it('can play a card', function (){
    game.dealCards();
    const actual = player1.playCard("strength");
    assert.strictEqual(actual, 9);
  });
});
