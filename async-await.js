
//Part 1: Refactoring Your Own Promise with Async/Await

//Coin Flip Promise

const flipCoin = () => {
  return new Promise((resolve, reject) => {
    const outcome = Math.random() > 0.5;

    if (outcome) {
      resolve("You win!");
    } else {
      reject("You lose!");
    }
  });
};

//Consuming the Promise with async/await

const coinFlipResult = async () => {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

coinFlipResult();
