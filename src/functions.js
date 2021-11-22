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

export {
  isEven,
  getRandomNumber,
  calculateExpression,
};
