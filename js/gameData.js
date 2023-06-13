const gameCards = [
  // Red Cards
  { id: 1, color: "red", number: 0, image: "assets/Red_0.png" },
  { id: 2, color: "red", number: 1, image: "assets/Red_1.png" },
  { id: 3, color: "red", number: 2, image: "assets/Red_2.png" },
  { id: 4, color: "red", number: 3, image: "assets/Red_3.png" },
  { id: 5, color: "red", number: 4, image: "assets/Red_4.png" },
  { id: 6, color: "red", number: 5, image: "assets/Red_5.png" },
  { id: 7, color: "red", number: 6, image: "assets/Red_6.png" },
  { id: 8, color: "red", number: 7, image: "assets/Red_7.png" },
  { id: 9, color: "red", number: 8, image: "assets/Red_8.png" },
  { id: 10, color: "red", number: 9, image: "assets/Red_9.png" },
  // {
  //   id: 11,
  //   color: "red",
  //   special: "return",
  //   image: "assets/Red_Reverse.png",
  // },
  // { id: 12, color: "red", special: "skip", image: "assets/Red_Skip.png" },
  // { id: 13, color: "red", special: "plus2", image: "assets/Red_Draw.png" },

  // Blue Cards
  { id: 14, color: "blue", number: 0, image: "assets/Blue_0.png" },
  { id: 15, color: "blue", number: 1, image: "assets/Blue_1.png" },
  { id: 16, color: "blue", number: 2, image: "assets/Blue_2.png" },
  { id: 17, color: "blue", number: 3, image: "assets/Blue_3.png" },
  { id: 18, color: "blue", number: 4, image: "assets/Blue_4.png" },
  { id: 19, color: "blue", number: 5, image: "assets/Blue_5.png" },
  { id: 20, color: "blue", number: 6, image: "assets/Blue_6.png" },
  { id: 21, color: "blue", number: 7, image: "assets/Blue_7.png" },
  { id: 22, color: "blue", number: 8, image: "assets/Blue_8.png" },
  { id: 23, color: "blue", number: 9, image: "assets/Blue_9.png" },
  // {
  //   id: 24,
  //   color: "blue",
  //   special: "return",
  //   image: "assets/Blue_Reverse.png",
  // },
  // { id: 25, color: "blue", special: "skip", image: "assets/Blue_Skip.png" },
  // { id: 26, color: "blue", special: "plus2", image: "assets/Blue_Draw.png" },

  // Green Cards
  { id: 27, color: "green", number: 0, image: "assets/Green_0.png" },
  { id: 28, color: "green", number: 1, image: "assets/Green_1.png" },
  { id: 29, color: "green", number: 2, image: "assets/Green_2.png" },
  { id: 30, color: "green", number: 3, image: "assets/Green_3.png" },
  { id: 31, color: "green", number: 4, image: "assets/Green_4.png" },
  { id: 32, color: "green", number: 5, image: "assets/Green_5.png" },
  { id: 33, color: "green", number: 6, image: "assets/Green_6.png" },
  { id: 34, color: "green", number: 7, image: "assets/Green_7.png" },
  { id: 35, color: "green", number: 8, image: "assets/Green_8.png" },
  { id: 36, color: "green", number: 9, image: "assets/Green_9.png" },
  // {
  //   id: 37,
  //   color: "green",
  //   special: "return",
  //   image: "assets/Green_Reverse.png",
  // },
  // {
  //   id: 38,
  //   color: "green",
  //   special: "skip",
  //   image: "assets/Green_Skip.png",
  // },
  // {
  //   id: 39,
  //   color: "green",
  //   special: "plus2",
  //   image: "assets/Green_Draw.png",
  // },

  // Yellow Cards
  { id: 40, color: "yellow", number: 0, image: "assets/Yellow_0.png" },
  { id: 41, color: "yellow", number: 1, image: "assets/Yellow_1.png" },
  { id: 42, color: "yellow", number: 2, image: "assets/Yellow_2.png" },
  { id: 43, color: "yellow", number: 3, image: "assets/Yellow_3.png" },
  { id: 44, color: "yellow", number: 4, image: "assets/Yellow_4.png" },
  { id: 45, color: "yellow", number: 5, image: "assets/Yellow_5.png" },
  { id: 46, color: "yellow", number: 6, image: "assets/Yellow_6.png" },
  { id: 47, color: "yellow", number: 7, image: "assets/Yellow_7.png" },
  { id: 48, color: "yellow", number: 8, image: "assets/Yellow_8.png" },
  { id: 49, color: "yellow", number: 9, image: "assets/Yellow_9.png" },
  // {
  //   id: 50,
  //   color: "yellow",
  //   special: "return",
  //   image: "assets/Yellow_Reverse.png",
  // },
  // {
  //   id: 51,
  //   color: "yellow",
  //   special: "skip",
  //   image: "assets/Yellow_Skip.png",
  // },
  // {
  //   id: 52,
  //   color: "yellow",
  //   special: "plus2",
  //   image: "assets/Yellow_Draw.png",
  // },

  // Black cards
  // +4
  // {
  //   id: 53,
  //   color: "black",
  //   special: "plus4",
  //   image: "assets/Wild_Draw.png",
  // },
  // {
  //   id: 54,
  //   color: "black",
  //   special: "plus4",
  //   image: "assets/Wild_Draw.png",
  // },
  // {
  //   id: 55,
  //   color: "black",
  //   special: "plus4",
  //   image: "assets/Wild_Draw.png",
  // },
  // {
  //   id: 56,
  //   color: "black",
  //   special: "plus4",
  //   image: "assets/Wild_Draw.png",
  // },

  // // change color
  // {
  //   id: 52,
  //   color: "black",
  //   special: "changeColor",
  //   image: "assets/Wild.png",
  // },
  // {
  //   id: 52,
  //   color: "black",
  //   special: "changeColor",
  //   image: "assets/Wild.png",
  // },
  // {
  //   id: 52,
  //   color: "black",
  //   special: "changeColor",
  //   image: "assets/Wild.png",
  // },
  // {
  //   id: 52,
  //   color: "black",
  //   special: "changeColor",
  //   image: "assets/Wild.png",
  // },
];

// const playerCards = [];
// const enemyCards = [];
// const fieldCards = [];
