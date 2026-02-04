
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

//Part 2: Fetching Data from an API with Async/Await

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Failed to fetch advice");
    }

    const data = await response.json();
    console.log("Advice:", data.slip.advice);
  } catch (error) {
    console.log("Error fetching advice:", error.message);
  }
};

fetchAdvice();

