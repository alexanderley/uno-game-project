class Game {
  constructor() {
    this.startBtn = document.querySelector(".startGame");
    this.enemyPlays = document.querySelector(".enemyPlays");
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
    this.playerOneCards.addEventListener("click", this.playCard.bind(this));

    this.enemyPlays.addEventListener("click", this.enemyPlayCard.bind(this));
  }
  startGame() {
    this.drawCards(1, "player");
    this.drawCards(1, "enemy");
    // this.renderCardHand();
    this.renderPlayerCardHand();
    this.renderEnemyCardHand();

    // create the fist field card
    const firstCardData = this.randomCard(gameCards);
    const firstCardElement = this.createCard(firstCardData);
    this.tableCards.push(firstCardData);
    console.log("fieldscards array", this.fieldCards);
    this.renderFieldCard();
    console.log("table cards", this.tableCards);
  }

  // renderCardHand() {
  //   this.playerOneCards.innerHTML = "";

  //   // render Player cards
  //   this.playerCards.forEach((card) => {
  //     const li = document.createElement("li");
  //     li.classList.add("card");
  //     const img = document.createElement("img");
  //     img.src = card.image;
  //     img.setAttribute("id", card.id);
  //     img.setAttribute("color", card.color);
  //     img.setAttribute("number", card.number);
  //     img.setAttribute("special", card.special);

  //     li.appendChild(img);
  //     this.playerOneCards.appendChild(li);
  //   });

  //   // remove all elements form the dom array
  //   this.playerEnemyCards.innerHTML = "";

  //   // render place holder of the enemy
  //   this.enemyCards.forEach((card) => {
  //     const li = document.createElement("li");
  //     li.classList.add("card");
  //     const img = document.createElement("img");
  //     // img.src = "assets/Deck.png";
  //     img.src = card.image;
  //     img.setAttribute("id", card.id);
  //     img.setAttribute("color", card.color);
  //     img.setAttribute("number", card.number);
  //     img.setAttribute("special", card.special);

  //     li.appendChild(img);
  //     this.playerEnemyCards.appendChild(li);
  //   });
  // }

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
      img.src = card.image;
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
    }
  }

  enemyPlayCard() {
    console.log("enemy plays his card");
    console.log(this.playerEnemyCards);

    const enemyUl = this.playerEnemyCards;
    const enemyLis = enemyUl.getElementsByTagName("li");

    const topFieldCardLi = this.fieldCards.lastElementChild;
    const topfieldCardImg = topFieldCardLi.querySelector("img");

    const imgArray = Array.from(enemyLis, function (enemyLi) {
      return enemyLi.querySelector("img");
    });
    console.log("imgArray", imgArray);

    const matchingCard = imgArray.find(
      (card) =>
        card.attributes.color.value === topfieldCardImg.getAttribute("color") ||
        card.attributes.number.value === topfieldCardImg.getAttribute("number")
    );
    if (matchingCard === undefined) {
      this.drawCards(1, "enemy");
      this.renderEnemyCardHand();
      return;
    }
    if (matchingCard) {
      const closestLi = matchingCard.closest("li");
      console.log("matching card", matchingCard);
      console.log("closestli", closestLi);

      const liMatchingCard = document.createElement("li");
      liMatchingCard.classList.add("card");
      // liMatchingCard.appendChild(matchingCard);
      // this.cardStack.appendChild(liMatchingCard);

      // this.cardStack.appendChild(closestLi);
      // this.cardStack.appendChild(matchingCard);
      this.cardStack.appendChild(matchingCard);
    }

    console.log("matching", matchingCard);
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
