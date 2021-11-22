import { getRandomNumber, calculateExpression } from '../functions.js';

const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const getRandomOperation = () => operations[getRandomNumber(0, 2)];

const gameEngine = () => {
  const first = getRandomNumber(1, 20);
  const second = getRandomNumber(1, 20);
  const operation = getRandomOperation();
  const correctAnswer = calculateExpression(first, second, operation);
  const question = `${first} ${operation} ${second}`;
  return [question, correctAnswer];
};

export { rules, gameEngine };
