const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Game', function (){

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

  it('should have 2 players', function (){
    const actual = game.players.length;
    assert.strictEqual(actual, 2);
  });

  it('should start with full deck', function (){
    const actual = game.deck.length;
    assert.strictEqual(actual, 6);
  });

  it('should be able to deal cards to players', function(){
    game.dealCards();
    assert.strictEqual(player1.hand.length, 3);
    assert.strictEqual(player2.hand.length, 3);
  })

  it("higher value should win", function(){
    game.dealCards();
    const choice = "strength";
    const p1choice = player1.playCard(choice);
    const p2choice = player2.playCard(choice);
    const actual = game.compareHands(p1choice,p2choice);
    assert.strictEqual(actual,"Player 2 Wins!");
  })






});
