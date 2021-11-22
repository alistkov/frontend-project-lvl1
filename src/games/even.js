import { isEven, getRandomNumber } from '../functions.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEngine = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { rules, gameEngine };
