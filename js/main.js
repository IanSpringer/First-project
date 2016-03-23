
$('#play').on('click', function(){
  $('#rules').remove();
  $('#play').remove();
  $('.war').remove();
  $('.war-header').append('<div class="draw" onclick="draw()">Draw</div>');
  $('body').append('<div class="resetButton" onclick="reset()">Reset</div>');
  $('#header2').append('<div class="card1" id="card1"></div>');
  $('#header2').append('<div class="card2" id="card2"></div>');
  $('#computerScore').html("Computer: 0");
  $('#playerScore').html("Player: 0" );
});

$('#goBack').on('click', function() {
  console.log('hello')
  $('#pTag').remove();
  $('#clickers').append('<h1 class="rules" id="rules" >Rules</h1><h1 class="play" id="play" >Play</h1>')

  //window.history.back();
});

$('#rules').on('click', function(){
  $('#rules').remove();
  $('#play').remove();
  $('#rulesDiv').append('<p>');
  //$('#war-header').append('<p>');
  $('p').attr('id', 'pTag');
  $('#pTag').text('War is a classic 2-player card game. When you click "Play" you and the computer will be dealt a hand of 26 cards, half of a standard deck. Once you have your hand, click "Draw" and the first card of your hand and the computer hand will be revealed. The two cards will be compared based on their value. A 2 card has the lowest value and an Ace card has the highest. Whoever possesses the higher valued card wins that round and collects the two cards to be kept in a separate pile. Should two cards with equal value be drawn (ex. King of Hearts and King of Spades), war will be initiated. Click draw again and two more cards will be take from your hand, as well as the computer hand. The player with highest valued card of the six laid out will collect all six cards. Once both hands have been played, the player who collected the most amount of cards wins!');
  $('#pTag').append('<div class="goBack" id="goBack" onclick="goBack()">Back</div>')
});





// Card Constructor
var Card = function(suit, rank, value, symbol) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.symbol = symbol;
};

//Card.prototype.toString = function(){
  // "Ace of Spades"
  //return this.rank + " of " + this.suit;
//}

// card ingredients
var cardDeck = {
  suit: ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
  rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  symbol: ['♥', '♠', '♦', '♣']
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
      var card = new Card(cardDeck.suit[j], cardDeck.rank[i], cardDeck.value[i], cardDeck.symbol[j]);
      deck.push(card);
    }
  }

};
var war = false;

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
  $('#card1').html(computerCard.rank + "" + computerCard.symbol);
  $('#card2').html(playerCard.rank + "" + playerCard.symbol);
}
var war = function(){
  alert("Are you ready to go to war?");
  $('#warCards').append('<div class="card3" id="card3"></div>');
  $('#warCards').append('<div class="card4" id="card4"></div>');
  $('#warCards2').append('<div class="card5" id="card5"></div>');
  $('#warCards2').append('<div class="card6" id="card6"></div>');
  $('#card3').html(playerHand[0].rank + "" + playerHand[0].symbol);
  $('#card6').html(playerHand[1].rank + "" + playerHand[1].symbol);
  $('#card4').html(computerHand[0].rank + "" + computerHand[0].symbol);
  $('#card5').html(computerHand[1].rank + "" + computerHand[1].symbol);
};
var playerScore = 0;
var computerScore = 0



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
     playerWinsRound();
     playerScore = playerScore + 2;
     $('#playerScore').html("Player: " + playerScore);


    //console.log("Player wins the round")
    // player gets 2 points - changes state of game
    // computer gets nothing
    // show player wins the round - visually shows state
  }else if (computerCard.value > playerCard.value){
    $('#computerWinsRound').remove();
    $('#playerWinsRound').remove();
    computerWinsRound();
    computerScore = computerScore + 2;
    $('#computerScore').html("Computer: " + computerScore)
  } else if (computerCard.value === playerCard.value) {
    war();
    war = true;
      if(computerHand[0].value > playerHand[0].value && playerHand[1].value){
        computerWinsRound();
        computerScore = computerScore + 6;
        $('#computerScore').html("Computer: " + computerScore)
        console.log("Computer wins war");
      } else if (computerHand[1].value > playerHand[0].value && playerHand[1].value){
        computerWinsRound();
        computerScore = computerScore + 6;
        $('#computerScore').html("Computer: " + computerScore)

        console.log("Computer wins war");
      } else if (playerHand[0].value > computerHand[0].value && computerHand[1].value) {
        playerWinsRound();
        playerScore = playerScore + 6;
        $('#playerScore').html("Player: " + playerScore);
        console.log("Player wins war");
      } else if (playerHand[1].value > computerHand[0].value && computerHand[1].value){
        playerWinsRound();
        playerScore = playerScore + 6;
        $('#playerScore').html("Player: " + playerScore);
        console.log ("Player wins war");
      }
    $('#computerWinsRound').remove();
    $('#playerWinsRound').remove();
    //warButton();

}
  }

  var checkWinner = function() {
    if(playerHand.length === 0) {
      if (playerScore > computerScore) {
        alert("You are a true warrior!");
      } else if (playerScore < computerScore) {
        alert("You have been defeated!");
      }
    }
};
 playerScore;
 computerScore;


 // playerHand;
  //computerHand;


checkWinner();







