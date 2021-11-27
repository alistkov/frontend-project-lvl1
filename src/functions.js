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

export {
  isEven,
  getRandomNumber,
  calculateExpression,
  gcd,
};
