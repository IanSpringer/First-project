var game = false;

var rulesFunction = function(){
  $('#rules').remove();
  $('#play').remove();
  $('#clickers').append('<div class="readRules"><h2>War is a classic 2-player card game. When you click "Play" you and the computer will be dealt a hand of 26 cards, or half of a standard deck. Once you have your hand, click "Draw" and the first card of your hand and the computer hand will be revealed. The two cards will be compared based on their value. A 2 card has the lowest value and an Ace card has the highest. Whoever possesses the higher valued card wins that draw and collects the two cards to be counted later. Should two cards with equal value be drawn (ex. King of Hearts and King of Spades), war will be initiated. Click draw again and two more cards will be take from your hand, as well as the computer hand. The player with highest valued card of the six laid out will collect all six cards. Once both hands have been played, the player who collected the most amount of cards wins!</h2></div>')
}

var playFunction = function(){
  $('#rules').remove();
  $('#play').remove();
  $('#clickers').append('<div class="draw" onclick="draw()">Draw</div>')
  game = true;
}
var Card = function(rank, suit, value) {
  this.rank = rank;
  this.suit = suit;
  this.value = value;
};
var cardDeck = {
  suit: ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
  rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
};

var deck = [];
var makeDeck = function() {
  for (var i = 0; i < cardDeck.rank.length; i++){
    for (var j = 0; j < cardDeck.suit.length; j++){
       deck.push((cardDeck.rank[i] + ' of ' + cardDeck.suit[j]));
    }
  }

};

makeDeck();

var shuffleDeck = function(array) {
    var j, x, i;
    for (i = array.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
};
shuffleDeck(deck);

var playerHand = [];
var computerHand = [];

var dealPlayer = function(){
    for(var i = 0; i< 26; i ++){
      playerHand.push(deck[i]);
  }
  };

var dealComputer = function(){
  for (var i = 27; i < 52; i++) {
    computerHand.push(deck[i]);
  }
};

dealPlayer();
dealComputer();



var playerDraw;
var computerDraw;


var draw = function() {
  playerDraw = playerHand[0];
  computerDraw = computerHand[0];
  playerHand.shift();
  computerHand.shift();
  console.log("You drew a " + playerDraw + ", " + "computer drew a " + computerDraw);
  return playerHand;
  return computerHand;
};

var t;

var compareDraw = function(player, computer){
  cardDeck.rank[t] === cardDeck.value[t];
  if(player > computer) {
    console.log("Player wins the draw");
  } else if (computer > player) {
    console.log("Computer wins the draw");
  }
};
compareDraw







//Deck.prototype.count = function(){
  //return this.cards.length
//}

//Deck.prototype.draw = function(){
  //return this.cards.pop();
//}

//var deck = new Deck();
//deck.cards  //an array of Card objects
//deck.count()// should give us 52
//deck.isEmpty() {
  //return this.cards.length === 0 {

  //}
//};



//var Car = function(year, make, model, condition) {
  //this.year = year;
  //this.make = make;
  //this.model = model;
  //this.condition = condition;
//}










