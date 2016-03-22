
var playFunction = function(){
  $('#rules').remove();
  $('#play').remove();
  $('.war').remove();
  $('.war-header').append('<div class="draw" onclick="draw()">Draw</div>');
  $('#reset').append('<div class="resetButton" onclick="reset()">Reset</div>');
  $('#header2').append('<div class="card1" id="card1"></div>');
  $('#header2').append('<div class="card2" id="card2"></div>')
  $('#computerScore').html("Computer Score:");
  $('#playerScore').html("Player Score:");
};



var rulesFunction = function(){
  $('#rules').remove();
  $('#play').remove();
  $('#war-header').append('<p>');
  $('p').attr('id', 'pTag');
  $('#pTag').text('War is a classic 2-player card game. When you click "Play" you and the computer will be dealt a hand of 26 cards, half of a standard deck. Once you have your hand, click "Draw" and the first card of your hand and the computer hand will be revealed. The two cards will be compared based on their value. A 2 card has the lowest value and an Ace card has the highest. Whoever possesses the higher valued card wins that round and collects the two cards to be kept in a separate pile. Should two cards with equal value be drawn (ex. King of Hearts and King of Spades), war will be initiated. Click draw again and two more cards will be take from your hand, as well as the computer hand. The player with highest valued card of the six laid out will collect all six cards. Once both hands have been played, the player who collected the most amount of cards wins!');
  $('#pTag').append('<div class="playFromRules" id="playFromRules" onclick="playFromRules()">Play</div>')
};

var playFromRules = function() {
  $('.war').remove();
  $('p').remove();
  $('.war-header').append('<div class="draw" onclick="draw()">Draw</div>');
  $('#reset').append('<div class="resetButton" onclick="reset()">Reset</div>');
  $('#header2').append('<div class="card1" id="card1"></div>');
  $('#header2').append('<div class="card2" id="card2"></div>');
  $('#computerScore').html("Computer Score:");
  $('#playerScore').html("Player Score:");
};




// Card Constructor
var Card = function(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
};

Card.prototype.toString = function(){
  // "Ace of Spades"
  return this.rank + " of " + this.suit;
}
// card ingredients
var cardDeck = {
  suit: ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
  rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
};

var playerCardValue;
var computerCardValue;



var deck = [];
var makeDeck = function() {
  for (var i = 0; i < cardDeck.rank.length; i++){
    for (var j = 0; j < cardDeck.suit.length; j++){
      // var cardString = (cardDeck.rank[i] + ' of ' + cardDeck.suit[j])
      // var card = new Card(cardDeck.suit[0], cardDeck.rank[0], cardDeck.value[0]);
      // var card = new Card('Heart', '2', 2);
      // var card = {suit: 'Heart', rank: '2', value: 2};
      var card = new Card(cardDeck.suit[j], cardDeck.rank[i], cardDeck.value[i]);
      deck.push(card);
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



var playerCard;
var computerCard;

var playerWinsRound = function() {
  $('<p class="playerWinsRound" id="playerWinsRound">').appendTo($('.war-header'));
  $('#playerWinsRound').html("Player wins the round");
};

var computerWinsRound = function() {
  $('<p class="computerWinsRound" id="computerWinsRound">').appendTo($('.war-header'));
  $('#computerWinsRound').html("Computer wins the round");

}

var cardSymbol = function() {
  $('#card1').html(computerCard.rank + " of " + computerCard.suit);
  $('#card2').html(playerCard.rank + " of " + computerCard.suit);
}

var draw = function() {
  playerCard = playerHand[0];
  computerCard = computerHand[0];
  playerHand.shift();
  computerHand.shift();
  cardSymbol();
  // compare cards
  if (playerCard.value > computerCard.value){
    $('#computerWinsRound').remove();
    $('#playerWinsRound').remove();
    console.log("Player Wins the round")
     playerWinsRound();
    //console.log("Player wins the round")
    // player gets 2 points - changes state of game
    // computer gets nothing
    // show player wins the round - visually shows state
  }else if (computerCard.value > playerCard.value){
    $('#computerWinsRound').remove();
    $('#playerWinsRound').remove();
    computerWinsRound();
    console.log("Computer wins the round");

  } else {

  }

  console.log("You drew a " + playerCard.toString() + ", " + "computer drew a " + computerCard.toString());

  return playerHand;
  return computerHand;
};









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










