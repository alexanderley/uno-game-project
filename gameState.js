const gameCards = [
  // Red Cards
  { id: 1, color: "red", number: 0, image: "red_0.png" },
  { id: 2, color: "red", number: 1, image: "red_1.png" },
  { id: 3, color: "red", number: 2, image: "red_2.png" },
  { id: 4, color: "red", number: 3, image: "red_3.png" },
  { id: 5, color: "red", number: 4, image: "red_4.png" },
  { id: 6, color: "red", number: 5, image: "red_5.png" },
  { id: 7, color: "red", number: 6, image: "red_6.png" },
  { id: 8, color: "red", number: 7, image: "red_7.png" },
  { id: 9, color: "red", number: 8, image: "red_8.png" },
  { id: 10, color: "red", number: 9, image: "red_9.png" },
  { id: 11, color: "red", special: "return", image: "red_return.png" },
  { id: 12, color: "red", special: "skip", image: "red_skip.png" },
  { id: 13, color: "red", special: "plus2", image: "red_plus4.png" },

  // Blue Cards
  { id: 14, color: "blue", number: 0, image: "blue_0.png" },
  { id: 15, color: "blue", number: 1, image: "blue_1.png" },
  { id: 16, color: "blue", number: 2, image: "blue_2.png" },
  { id: 17, color: "blue", number: 3, image: "blue_3.png" },
  { id: 18, color: "blue", number: 4, image: "blue_4.png" },
  { id: 19, color: "blue", number: 5, image: "blue_5.png" },
  { id: 20, color: "blue", number: 6, image: "blue_6.png" },
  { id: 21, color: "blue", number: 7, image: "blue_7.png" },
  { id: 22, color: "blue", number: 8, image: "blue_8.png" },
  { id: 23, color: "blue", number: 9, image: "blue_9.png" },
  { id: 24, color: "blue", special: "return", image: "blue_return.png" },
  { id: 25, color: "blue", special: "skip", image: "blue_skip.png" },
  { id: 26, color: "blue", special: "plus2", image: "blue_plus4.png" },

  // Green Cards
  { id: 27, color: "green", number: 0, image: "green_0.png" },
  { id: 28, color: "green", number: 1, image: "green_1.png" },
  { id: 29, color: "green", number: 2, image: "green_2.png" },
  { id: 30, color: "green", number: 3, image: "green_3.png" },
  { id: 31, color: "green", number: 4, image: "green_4.png" },
  { id: 32, color: "green", number: 5, image: "green_5.png" },
  { id: 33, color: "green", number: 6, image: "green_6.png" },
  { id: 34, color: "green", number: 7, image: "green_7.png" },
  { id: 35, color: "green", number: 8, image: "green_8.png" },
  { id: 36, color: "green", number: 9, image: "green_9.png" },
  { id: 37, color: "green", special: "return", image: "green_return.png" },
  { id: 38, color: "green", special: "skip", image: "green_skip.png" },
  { id: 39, color: "green", special: "plus2", image: "green_plus4.png" },

  // Yellow Cards
  { id: 40, color: "yellow", number: 0, image: "yellow_0.png" },
  { id: 41, color: "yellow", number: 1, image: "yellow_1.png" },
  { id: 42, color: "yellow", number: 2, image: "yellow_2.png" },
  { id: 43, color: "yellow", number: 3, image: "yellow_3.png" },
  { id: 44, color: "yellow", number: 4, image: "yellow_4.png" },
  { id: 45, color: "yellow", number: 5, image: "yellow_5.png" },
  { id: 46, color: "yellow", number: 6, image: "yellow_6.png" },
  { id: 47, color: "yellow", number: 7, image: "yellow_7.png" },
  { id: 48, color: "yellow", number: 8, image: "yellow_8.png" },
  { id: 49, color: "yellow", number: 9, image: "yellow_9.png" },
  { id: 50, color: "yellow", special: "return", image: "yellow_return.png" },
  { id: 51, color: "yellow", special: "skip", image: "yellow_skip.png" },
  { id: 52, color: "yellow", special: "plus2", image: "yellow_plus4.png" },

  // Black cards
  // +4
  { id: 53, color: "black", special: "plus4", image: "black_plus4.png" },
  { id: 54, color: "black", special: "plus4", image: "black_plus4.png" },
  { id: 55, color: "black", special: "plus4", image: "black_plus4.png" },
  { id: 56, color: "black", special: "plus4", image: "black_plus4.png" },

  // change color
  { id: 52, color: "yellow", special: "changeColor", image: "changeColor" },
  { id: 52, color: "yellow", special: "changeColor", image: "changeColor" },
  { id: 52, color: "yellow", special: "changeColor", image: "changeColor" },
  { id: 52, color: "yellow", special: "changeColor", image: "changeColor" },
];

function shuffleCards(cards) {
  let currentIndex = cards.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [cards[currentIndex], cards[randomIndex]] = [
      cards[randomIndex],
      cards[currentIndex],
    ];
  }

  return cards;
}


// padd in the shuffle function and push 7 elements to the array, at the beginning of the game
const player1 = [];
const player2 = [];


// holds logic of the cards on the field
const fieldCards = []