import readlineSync from 'readline-sync';
import greeting from './cli.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  let steps = 3;
  const name = greeting();
  const minNumber = 1;
  const maxNumber = 20;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (steps) {
    const number = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    steps -= 1;
  }

  console.log(`Congratulations, ${name}!`);
};
