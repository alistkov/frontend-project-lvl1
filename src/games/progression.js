import { getRandomNumber, makeProgression } from '../functions.js';

const rules = 'What number is missing in the progression?';

const gameEngine = () => {
  const progression = makeProgression();
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[randomIndex];
  progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export { rules, gameEngine };
