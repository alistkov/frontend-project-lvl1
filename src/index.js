import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (rules, gameData) => {
  let gameRounds = 3;
  const name = greeting();
  console.log(rules);

  while (gameRounds) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    gameRounds -= 1;
  }
  console.log(`Congratulations, ${name}!`);
};
