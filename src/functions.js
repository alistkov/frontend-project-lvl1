const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const calculateExpression = (first, second, operation) => {
  if (operation === '+') {
    return first + second;
  }
  if (operation === '-') {
    return first - second;
  }
  return first * second;
};

const gcd = (first, second) => {
  if (second > first) {
    return gcd(second, first);
  }
  if (!second) {
    return first;
  }
  return gcd(second, first % second);
};

const makeProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const startNumber = getRandomNumber(5, 20);
  const step = getRandomNumber(2, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(String(startNumber + (step * i)));
  }
  return progression;
};

export {
  isEven,
  getRandomNumber,
  calculateExpression,
  gcd,
  makeProgression,
};
