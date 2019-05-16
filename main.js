// define variables
var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["spades", "diamonds", "clubs", "hearts"];
var deck = new Array();

// create the deck
function getDeck() {

  var deck = new Array();

  for (var i = 0; i < suits.length; i++)
  {
    for (var x = 0; x < cards.length; x++)
    {
      var card = {Value: cards[x], Suit: suits[i]};
      deck.push(card);
    }
  }

  return deck;

}


// shuffle cards
function shuffle() {
  //for 1000 turns
  //switch the values of two random cards
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

  renderDeck();
}

// make the cards appear
function renderDeck() {
  document.getElementById('deck').innerHTML = '';

  for(var i = 0; i < deck.length; i++)
  {
    var card = document.createElement("div");
    var icon = '';
    if (deck[i].Suit == 'hearts')
    icon = '&hearts;';
    else if (deck[i].Suit == 'spades')
    icon = '&spades;';
    else if (deck[i].Suit == 'diamonds')
    icon = '&diams;';
    else
    icon = '&clubs;';

      card.innerHTML = deck[i].Value + '' + icon;
      card.className = 'card';
      document.getElementById("deck").appendChild(card);
    }
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;
