const assert = require("assert");

const utils = (module.exports = {});

utils.benchmark = (method) => {
  const start = +new Date();
  method();
  const end = +new Date();
  return end - start;
};

utils.getDishes = (numberDishes, numberIngredients) => {
  const dishes = Array(numberDishes)
    .fill()
    .map(() => {
      let dish = "";
      for (let i = 0; i < 10; i++) {
        dish += Math.floor(Math.random() * 7).toString();
      }

      return dish;
    });
  return dishes.map((dish) => {
    return [
      dish,
      ...Array(numberIngredients)
        .fill()
        .map(() => {
          let ingredient = "";
          for (let i = 0; i < 50; i++) {
            ingredient += Math.floor(Math.random() * 10).toString();
          }
          return ingredient;
        }),
    ];
  });
};

utils.arrayIsEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

utils.getNumbersArray = (length) =>
  Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * 5));

utils.generateDNASequence = (length) => {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += Math.random() > 0.5 ? "A" : "B";
  }
  return string;
};

utils.safeAssert = (truthy, message) =>
  console.log(truthy ? " [ok]\t" : " [fail]\t", message);

utils.generateMatrix = (size) => {
  return new Array(size).fill().map(() =>
    new Array(size)
      .fill()
      .map(() => Math.floor(Math.random() * 5))
      .map((x) => (x > 1 ? 1 : x))
  );
};
