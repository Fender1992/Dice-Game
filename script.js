const dice_one = document.querySelector(".dice1");
const dice_two = document.querySelector(".dice2");
const rollBtn = document.querySelector(".roll");

const diceImages = ["dice1", "dice2", "dice3", "dice4", "dice5", "dice6"];

rollBtn.addEventListener("click", () => {
  let randomIndex1 = Math.floor(Math.random() * diceImages.length);
  let randomIndex2 = Math.floor(Math.random() * diceImages.length);

  const randomDiceImage1 = diceImages[randomIndex1];
  const randomDiceImage2 = diceImages[randomIndex2];

  // Update the src attributes of the dice images
  dice_one.src = `./images/${randomDiceImage1}.png`;
  dice_two.src = `./images/${randomDiceImage2}.png`;
});
