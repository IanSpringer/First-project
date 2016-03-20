var game = false;

var rulesFunction = function(){
  console.log("I was clicked");
}

var playFunction = function(){
  alert("You are about to go to war!")
  game = true;;
}
var Card = function(rank, suit, value) {
  this.rank = rank;
  this.suit = suit;
  this.value = value;
};
var cardDeck = {
  suit: ["Heart", "Spade", "Diamond","Club"],
  rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
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










