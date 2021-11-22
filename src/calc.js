import readlineSync from 'readline-sync';
import greeting from './cli.js';

const operations = ['+', '-', '*'];
const getRandomOperation = () => {
  const index = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return operations[index];
};
const calculateExpression = (first, second, operation) => {
  if (operation === '+') {
    return first + second;
  }
  if (operation === '-') {
    return first - second;
  }
  return first * second;
};
export default () => {
  let steps = 3;
  const name = greeting();
  const minNumber = 1;
  const maxNumber = 20;
  console.log('What is the result of the expression?');
  while (steps) {
    const first = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const second = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const operator = getRandomOperation();
    console.log(`Question: ${first} ${operator} ${second}`);
    const answer = readlineSync.questionInt('Your answer: ');
    const correctAnswer = calculateExpression(first, second, operator);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    steps -= 1;
  }
  console.log(`Congratulations, ${name}!`);
};
