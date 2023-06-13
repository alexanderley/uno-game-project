class Game {
  constructor() {
    this.startBtn = document.querySelector(".startGame");
    this.playerHand = document.querySelector(".player1Container");
    this.cardStack = document.querySelector(".activeCardList");

    this.playerOneCards = document.querySelector(".playerOneCards");
    this.playerEnemyCards = document.querySelector(".enemyCards");
    this.topDeckCard = document.querySelector(".topDeckCard");
    this.fieldCards = document.querySelector(".activeCardList");

    this.playerCards = [];
    this.enemyCards = [];
    this.tableCards = [];

    // click handler
    this.startBtn.addEventListener("click", this.startGame.bind(this));
    this.topDeckCard.addEventListener("click", this.drawSingleCard.bind(this));

    this.playerOneCards.addEventListener("click", this.playCard);
  }
  startGame() {
    this.drawCards(7, "player");
    this.drawCards(7, "enemy");
    this.renderCardHand();

    // create the fist field card
    const firstCardData = this.randomCard(gameCards);
    const firstCardElement = this.createCard(firstCardData);
    this.tableCards.push(firstCardData);
    // console.log("firstCard", firstCardData);
    // console.log("the array", this.tableCards);
    console.log("fieldscards array", this.fieldCards);
    this.renderFieldCard();
    // this.fieldCards.appendChild(firstCardElement);
  }

  renderCardHand() {
    // render Player cards
    playerCards.forEach((card) => {
      const li = document.createElement("li");
      li.classList.add("card");
      const img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("color", card.color);
      img.setAttribute("number", card.number);
      img.setAttribute("special", card.special);

      li.appendChild(img);
      this.playerOneCards.appendChild(li);
    });

    // render place holder of the enemy
    enemyCards.forEach((card) => {
      const li = document.createElement("li");
      li.classList.add("card");
      const img = document.createElement("img");
      img.src = "assets/Deck.png";
      img.setAttribute("color", card.color);
      img.setAttribute("number", card.number);
      img.setAttribute("special", card.special);

      li.appendChild(img);
      this.playerEnemyCards.appendChild(li);
    });
  }

  renderFieldCard() {
    this.tableCards.forEach((card) => {
      const li = document.createElement("li");
      li.classList.add("card");
      const img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("color", card.color);
      img.setAttribute("number", card.number);
      img.setAttribute("special", card.special);

      li.appendChild(img);
      this.fieldCards.appendChild(li);
    });
  }

  randomCard(arr) {
    const arrayLength = arr.length;
    const randomIndex = Math.floor(Math.random() * arrayLength);
    const randomElement = arr[randomIndex];
    return randomElement;
  }

  createCard(cardData) {
    const newCardLi = document.createElement("li");
    newCardLi.classList.add("card");
    const img = document.createElement("img");
    img.src = cardData.image;
    img.setAttribute("color", cardData.color);
    img.setAttribute("number", cardData.number);
    img.setAttribute("special", cardData.special);
    newCardLi.appendChild(img);
    return newCardLi;
  }

  drawCards(amount, player) {
    if (player === "player") {
      for (let i = 0; i < amount; i++) {
        playerCards.push(this.randomCard(gameCards));
      }
    } else if (player === "enemy") {
      for (let i = 0; i < amount; i++) {
        enemyCards.push(this.randomCard(gameCards));
      }
    }
    console.log("Enemy hand", enemyCards);
    console.log("Player hand", playerCards);
  }

  // playCard(event) {
  //   if (event.target.tagName === "IMG") {
  //     if (event.target.color === fieldCards[0].color) {
  //       const liElement = event.target.closest("li");
  //       if (liElement) {
  //         liElement.remove();
  //       }
  //     }
  //   }
  // }

  playCard(event) {
    if (event.target.tagName === "IMG") {
      console.log(event.target);
      const liElement = event.target.closest("li");
      if (liElement) {
        liElement.remove();
      }
    }
  }

  drawSingleCard() {
    const newCardData = this.randomCard(gameCards);
    const newCardLi = this.createCard(newCardData);
    this.playerCards.push(newCardData);
    this.playerOneCards.appendChild(newCardLi);
  }

  playSingleCard() {}

  pushCards() {
    this.checkGameState();
    this.renderCardHand();
  }

  checkGameState() {
    if (playerCards.length === 0) {
      console.log("You win the game");
    } else if (enemyCards.length === 0) {
      console.log("You lost the game");
    }
  }
}

const game = new Game();
