
//Sets game into motion
var playFunction = function(){
  $('#rules').remove();
  $('#play').remove();
  $('.war').remove();
  $('.war-header').append('<div class="draw" onclick="draw()">Draw</div>');
  $('#header2').append('<div class="card1" id="card1"></div>');
  $('#header2').append('<div class="card2" id="card2"></div>');
  $('#computerScore').html("Computer: 0");
  $('#playerScore').html("Player: 0");
};

//Go back button inside of rules
var goBack = function() {
  $('#pTag').remove();
  $('#clickers').append('<h1 class="rules" id="rules" >Rules</h1><h1 class="play" id="play" onclick="playFunction()">Play</h1>');
};

//Rules button
$('#rules').on('click', function(){
  $('#rules').remove();
  $('#play').remove();
  $('#rulesDiv').append('<p>');
  $('#rulesDiv > p').attr('id', 'pTag');
  $('#pTag').text('War is a classic 2-player card game. When you click "Play" you and the computer will be dealt a hand of 26 cards, half of a standard deck. Once you have your hand, click "Draw" and the first card of your hand and the computer hand will be revealed. The two cards will be compared based on their values. A 2 card has the lowest value and an Ace card has the highest. Whoever possesses the higher valued card wins that round and collects the two cards to be kept in a separate pile. Should two cards with equal value be drawn (ex. King of Hearts and King of Spades), "war" will be initiated. When this happens, you will have the option of wagering points up to 5. The player with highest valued card of the 4 new cards will collect all six cards. If you win the "war", your point total will increase by 6 points plus the amount that you have wagered. But should you lose, your point total will decrease by the amount wagered. Once both hands have been played, the player who collected the most amount of cards wins!');
  $('#pTag').append('<div class="goBack" id="goBack" onclick="goBack()">Back</div>');
});



// Card Constructor
var Card = function(suit, rank, value, symbol) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    this.symbol = symbol;
};


// card ingredients
var cardDeck = {
  suit: ['Hearts', 'Spades', 'Diamonds', 'Clubs'],
  rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  symbol: ['♥', '♠', '♦', '♣']
};

//Creates a fresh deck in order
var deck = [];
var makeDeck = function() {
  for (var i = 0; i < cardDeck.rank.length; i++){
    for (var j = 0; j < cardDeck.suit.length; j++){
      var card = new Card(cardDeck.suit[j], cardDeck.rank[i], cardDeck.value[i], cardDeck.symbol[j]);
      deck.push(card);
    }
  }

};


makeDeck();

//Shuffles deck
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

//Pushes cards into player and computer arrays
var dealPlayer = function(){
    for(var i = 0; i< 26; i ++){
      playerHand.push(deck[i]);
  }
  };

var dealComputer = function(){
  for (var i = 26; i < 52; i++) {
    computerHand.push(deck[i]);
  }
};

dealPlayer();
dealComputer();



var playerCard;
var computerCard;

var showWinner = function(winner) {
  $('#winner').html(winner + " wins the round");
};

var clearWinner = function(){
  $('#winner').html('');
};

var cardSymbol = function() {
  $('#card1').html(computerCard.rank + "" + computerCard.symbol);
  $('#card2').html(playerCard.rank + "" + playerCard.symbol);
};
var getWager = function() {
  var amount = window.prompt("Time to go to war. How many points would you like to wager (maximum 5pts)?");
  amount = parseInt(amount);
  amount = (amount > 5) ? 5 : amount;
  return amount;
};

var war = function(){
  if (playerHand.length > 2) {
    var $makeInline = $('<ul id="make-inline"></ul>');
    $makeInline.append('<div class="card3" id="card3"></div>');
    $makeInline.append('<div class="card4" id="card4"></div>');
    $makeInline.append('<div class="card5" id="card5"></div>');
    $makeInline.append('<div class="card6" id="card6"></div>');
    $('#header2').append($makeInline);
    $('#card3').html(playerHand[0].rank + "" + playerHand[0].symbol);
    $('#card6').html(playerHand[1].rank + "" + playerHand[1].symbol);
    $('#card4').html(computerHand[0].rank + "" + computerHand[0].symbol);
    $('#card5').html(computerHand[1].rank + "" + computerHand[1].symbol);
  }
};

var playerScore = 0;
var computerScore = 0;


//The big kahuna, draws cards and compares values
var draw = function() {
  $('#card3').remove();
  $('#card4').remove();
  $('#card5').remove();
  $('#card6').remove();
  playerCard = playerHand[0];
  computerCard = computerHand[0];
  playerHand.shift();
  computerHand.shift();
  cardSymbol();
  // compare cards
  if (playerCard.value > computerCard.value){
    clearWinner();
    showWinner('Player');
    playerScore = playerScore + 2;
    $('#playerScore').html("Player: " + playerScore);
  }else if (computerCard.value > playerCard.value){
    clearWinner();
    showWinner('Computer');
    computerScore = computerScore + 2;
    $('#computerScore').html("Computer: " + computerScore);
  } else if ((computerCard.value === playerCard.value) && (playerHand.length > 2)) {
      var wager = getWager();
      war();
      if(computerHand[0].value > playerHand[0].value && playerHand[1].value){
        clearWinner();
        showWinner('Computer');
        computerScore = computerScore + 6;
        playerScore = playerScore - wager;
        $('#computerScore').html("Computer: " + computerScore);
        $('#playerScore').html("Player: " + playerScore);
        console.log("Computer wins war");
      } else if (computerHand[1].value > playerHand[0].value && playerHand[1].value){
        clearWinner();
        showWinner('Computer');
        computerScore = computerScore + 6;
        playerScore = playerScore - wager;
        $('#computerScore').html("Computer: " + computerScore);
        $('#playerScore').html("Player: " + playerScore);
        console.log("Computer wins war");
      } else if (playerHand[0].value > computerHand[0].value && computerHand[1].value) {
        clearWinner();
        showWinner('Player');
        playerScore = playerScore + 6 + wager;
        $('#playerScore').html("Player: " + playerScore);
        console.log("Player wins war");
      } else if (playerHand[1].value > computerHand[0].value && computerHand[1].value){
        clearWinner();
        showWinner('Player');
        playerScore = playerScore + 6 + wager;
        $('#playerScore').html("Player: " + playerScore);
        console.log ("Player wins war");
      }
      playerHand.shift();
      computerHand.shift();
      playerHand.shift();
      computerHand.shift();
}
    checkWinner();
};


  var checkWinner = function() {
    if(playerHand.length === 0) {

      if (playerScore > computerScore) {
        $('.draw').remove();
        clearWinner();
        $('.war-header').append('<h3>You are a true warrior!</h3>');
      }else if (playerScore < computerScore) {
        $('.draw').remove();
        clearWinner();
        $('.war-header').append('<h3>You have suffered a mighty defeat!</h3>');
      }else if (playerScore === computerScore){
        $('.draw').remove();
        clearWinner();
        $('.war-header').append('<h3>Tie game!</h3>');

      }
    }
};

// I'm in...








