console.log('hello');

var Card = function(rank, suit, value) {
  this.rank = rank;
  this.suit = suit;
  this.value = value;
};

var suit = ["Heart", "Spade", "Diamond","Club"];
var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var cards = [];
var deck = function() {
  for (var i = 0; i < rank.length; i++){
    for (var j = 0; j < suit.length; j++){
       cards.push((rank[i] + ' of ' + suit[j]));
    }
  }
  return cards;
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










