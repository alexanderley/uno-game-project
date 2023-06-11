const gameCards = [
  // Red Cards
  { id: 1, color: "red", number: 0, image: "Red_0.png" },
  { id: 2, color: "red", number: 1, image: "Red_1.png" },
  { id: 3, color: "red", number: 2, image: "Red_2.png" },
  { id: 4, color: "red", number: 3, image: "Red_3.png" },
  { id: 5, color: "red", number: 4, image: "Red_4.png" },
  { id: 6, color: "red", number: 5, image: "Red_5.png" },
  { id: 7, color: "red", number: 6, image: "Red_6.png" },
  { id: 8, color: "red", number: 7, image: "Red_7.png" },
  { id: 9, color: "red", number: 8, image: "Red_8.png" },
  { id: 10, color: "red", number: 9, image: "Red_9.png" },
  { id: 11, color: "red", special: "return", image: "Red_Reverse.png" },
  { id: 12, color: "red", special: "skip", image: "Red_Skip.png" },
  { id: 13, color: "red", special: "plus2", image: "Red_Draw.png" },

  // Blue Cards
  { id: 14, color: "blue", number: 0, image: "Blue_0.png" },
  { id: 15, color: "blue", number: 1, image: "Blue_1.png" },
  { id: 16, color: "blue", number: 2, image: "Blue_2.png" },
  { id: 17, color: "blue", number: 3, image: "Blue_3.png" },
  { id: 18, color: "blue", number: 4, image: "Blue_4.png" },
  { id: 19, color: "blue", number: 5, image: "Blue_5.png" },
  { id: 20, color: "blue", number: 6, image: "Blue_6.png" },
  { id: 21, color: "blue", number: 7, image: "Blue_7.png" },
  { id: 22, color: "blue", number: 8, image: "Blue_8.png" },
  { id: 23, color: "blue", number: 9, image: "Blue_9.png" },
  { id: 24, color: "blue", special: "return", image: "Blue_Reverse.png" },
  { id: 25, color: "blue", special: "skip", image: "Blue_Skip.png" },
  { id: 26, color: "blue", special: "plus2", image: "Blue_Draw.png" },

  // Green Cards
  { id: 27, color: "green", number: 0, image: "Green_0.png" },
  { id: 28, color: "green", number: 1, image: "Green_1.png" },
  { id: 29, color: "green", number: 2, image: "Green_2.png" },
  { id: 30, color: "green", number: 3, image: "Green_3.png" },
  { id: 31, color: "green", number: 4, image: "Green_4.png" },
  { id: 32, color: "green", number: 5, image: "Green_5.png" },
  { id: 33, color: "green", number: 6, image: "Green_6.png" },
  { id: 34, color: "green", number: 7, image: "Green_7.png" },
  { id: 35, color: "green", number: 8, image: "Green_8.png" },
  { id: 36, color: "green", number: 9, image: "Green_9.png" },
  { id: 37, color: "green", special: "return", image: "Green_Reverse.png" },
  { id: 38, color: "green", special: "skip", image: "Green_Skip.png" },
  { id: 39, color: "green", special: "plus2", image: "Green_Draw.png" },

  // Yellow Cards
  { id: 40, color: "yellow", number: 0, image: "Yellow_0.png" },
  { id: 41, color: "yellow", number: 1, image: "Yellow_1.png" },
  { id: 42, color: "yellow", number: 2, image: "Yellow_2.png" },
  { id: 43, color: "yellow", number: 3, image: "Yellow_3.png" },
  { id: 44, color: "yellow", number: 4, image: "Yellow_4.png" },
  { id: 45, color: "yellow", number: 5, image: "Yellow_5.png" },
  { id: 46, color: "yellow", number: 6, image: "Yellow_6.png" },
  { id: 47, color: "yellow", number: 7, image: "Yellow_7.png" },
  { id: 48, color: "yellow", number: 8, image: "Yellow_8.png" },
  { id: 49, color: "yellow", number: 9, image: "Yellow_9.png" },
  { id: 50, color: "yellow", special: "return", image: "Yellow_Reverse.png" },
  { id: 51, color: "yellow", special: "skip", image: "Yellow_Skip.png" },
  { id: 52, color: "yellow", special: "plus2", image: "Yellow_Draw.png" },

  // Black cards
  // +4
  { id: 53, color: "black", special: "plus4", image: "black_Draw.png" },
  { id: 54, color: "black", special: "plus4", image: "black_Draw.png" },
  { id: 55, color: "black", special: "plus4", image: "black_Draw.png" },
  { id: 56, color: "black", special: "plus4", image: "black_Draw.png" },

  // change color
  { id: 52, color: "black", special: "changeColor", image: "changeColor" },
  { id: 52, color: "black", special: "changeColor", image: "changeColor" },
  { id: 52, color: "black", special: "changeColor", image: "changeColor" },
  { id: 52, color: "black", special: "changeColor", image: "changeColor" },
];


// shuffle function
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