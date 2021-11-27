import { getRandomNumber, isPrime } from '../functions.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameEngine = () => {
  const question = getRandomNumber(2, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rules, gameEngine };
