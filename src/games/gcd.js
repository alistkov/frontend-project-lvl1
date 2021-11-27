import { getRandomNumber, gcd } from '../functions.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gameEngine = () => {
  const first = getRandomNumber(1, 20);
  const second = getRandomNumber(1, 20);
  const question = `${first} ${second}`;
  const correctAnswer = gcd(first, second);
  return [question, correctAnswer];
};

export { rules, gameEngine };
