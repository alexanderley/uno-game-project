class Game {
  constructor() {
    this.startBtn = document.querySelector(".startGame");
    this.enemyPlays = document.querySelector(".enemyPlays");
    this.playerHand = document.querySelector(".player1Container");
    this.cardStack = document.querySelector(".activeCardList");

    this.startScreen = document.querySelector(".startScreen");
    this.windScreen = document.querySelector(".winScreen");
    this.looseScreen = document.querySelector(".looseScreen");

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
    this.playerOneCards.addEventListener("click", this.playCard.bind(this));
    this.enemyPlays.addEventListener("click", this.enemyPlayCard.bind(this));
  }
  startGame() {
    this.drawCards(7, "player");
    this.drawCards(7, "enemy");
    this.renderPlayerCardHand();
    this.renderEnemyCardHand();

    // create the fist field card
    const firstCardData = this.randomCard(gameCards);
    const firstCardElement = this.createCard(firstCardData);
    this.tableCards.push(firstCardData);
    this.renderFieldCard();
    this.startScreen.style.display = "none";
  }

  renderPlayerCardHand() {
    this.playerOneCards.innerHTML = "";

    // Render player cards
    this.playerCards.forEach((card) => {
      const li = document.createElement("li");
      li.classList.add("card");
      const img = document.createElement("img");
      img.src = card.image;
      img.setAttribute("id", card.id);
      img.setAttribute("color", card.color);
      img.setAttribute("number", card.number);
      img.setAttribute("special", card.special);

      li.appendChild(img);
      this.playerOneCards.appendChild(li);
    });
  }

  renderEnemyCardHand() {
    this.playerEnemyCards.innerHTML = "";

    // Render placeholder of the enemy
    this.enemyCards.forEach((card) => {
      const li = document.createElement("li");
      li.classList.add("card");
      const img = document.createElement("img");
      img.src = "assets/Deck.png";
      img.setAttribute("src2", card.image);
      img.setAttribute("id", card.id);
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
      img.setAttribute("id", card.id);
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
    img.setAttribute("id", cardData.id);
    img.setAttribute("color", cardData.color);
    img.setAttribute("number", cardData.number);
    img.setAttribute("special", cardData.special);
    newCardLi.appendChild(img);
    return newCardLi;
  }

  drawCards(amount, player) {
    if (player === "player") {
      for (let i = 0; i < amount; i++) {
        this.playerCards.push(this.randomCard(gameCards));
      }
    } else if (player === "enemy") {
      for (let i = 0; i < amount; i++) {
        this.enemyCards.push(this.randomCard(gameCards));
      }
    }
  }

  playCard(event) {
    if (event.target.tagName === "IMG") {
      const imgElement = event.target;

      console.log("color", imgElement.getAttribute("color"));

      const liElement = event.target.closest("li");

      const topFieldCardLi = this.fieldCards.lastElementChild;
      const topfieldCardImg = topFieldCardLi.querySelector("img");

      if (
        imgElement.getAttribute("color") !==
          topfieldCardImg.getAttribute("color") &&
        imgElement.getAttribute("number") !==
          topfieldCardImg.getAttribute("number")
      )
        return;

      //  Adds the card to the cardStack
      if (liElement) {
        this.cardStack.appendChild(liElement);
      }

      // remove player cards
      if (imgElement) {
        const id = Number(imgElement.getAttribute("id"));
        let index;
        this.playerCards.forEach((card, i) => {
          if (card.id === id) {
            index = i;
          }
        });

        this.playerCards.splice(index, 1);
      }

      if (this.playerCards.length === 0) {
        console.log("You win!");
        this.windScreen.style.display = "flex";
      }
      setTimeout(() => {
        this.enemyPlayCard();
      }, 2000);
    }
  }

  enemyPlayCard() {
    const enemyUl = this.playerEnemyCards;
    const enemyLis = enemyUl.getElementsByTagName("li");

    const topFieldCardLi = this.fieldCards.lastElementChild;
    const topfieldCardImg = topFieldCardLi.querySelector("img");

    const imgArray = Array.from(enemyLis, function (enemyLi) {
      return enemyLi.querySelector("img");
    });

    const matchingCard = imgArray.find(
      (card) =>
        card.attributes.color.value === topfieldCardImg.getAttribute("color") ||
        card.attributes.number.value === topfieldCardImg.getAttribute("number")
    );

    console.log("matching card", matchingCard);

    if (matchingCard === undefined) {
      this.drawCards(1, "enemy");
      this.renderEnemyCardHand();
      console.log("enemy cards arr", this.enemyCards);
      return;
    }
    const liElement = matchingCard.closest("li");
    liElement.appendChild(matchingCard);

    if (matchingCard) {
      console.log("matching card", matchingCard);
      matchingCard.setAttribute("src", matchingCard.getAttribute("src2"));
      this.cardStack.appendChild(matchingCard.closest("li"));

      const id = Number(matchingCard.getAttribute("id"));
      let index;
      this.enemyCards.forEach((card, i) => {
        console.log(card);
        if (card.id === id) {
          index = i;
        }
      });
      console.log("index", index);
      this.enemyCards.splice(index, 1);
      console.log("enemy cards arr", this.enemyCards);
    }
    if (this.enemyCards.length === 0) {
      console.log("You loose!");
      this.looseScreen.style.display = "flex";
    }
  }

  drawSingleCard() {
    const newCardData = this.randomCard(gameCards);
    const newCardLi = this.createCard(newCardData);
    this.playerCards.push(newCardData);
    this.playerOneCards.appendChild(newCardLi);

    setTimeout(() => {
      this.enemyPlayCard();
    }, 2000);
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
