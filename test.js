const utils = require("./utils");

const maximalSquare = require("./maximalSquare");
const repeatedDNASequences = require("./repeatedDNASequences");
const firstDuplicate = require("./firstDuplicate");
const groupingDishes = require("./groupingDishes");
const findDeadlock = require("./findDeadlock");

function testMaximalSquare() {
  const matrix = utils.generateMatrix(100);
  const timeExecute = utils.benchmark(maximalSquare.bind(null, matrix));

  utils.safeAssert(timeExecute < 4 * 1000, "time execute < 4s");

  utils.safeAssert(
    maximalSquare([
      ["1", "0", "1", "1", "1"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
      ["1", "0", "0", "1", "0"],
    ]) === 9,
    "solution for task example"
  );
  utils.safeAssert(
    maximalSquare([
      [0, 0],
      [0, 0],
    ]) == 0,
    "check square 0"
  );

  utils.safeAssert(
    maximalSquare([
      [0, 1, 0, 0],
      [1, 0, 1, 1],
      [0, 1, 0, 1],
      [1, 1, 0, 1],
    ]) == 1,
    "check square 1"
  );

  utils.safeAssert(
    maximalSquare([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]) == 4,
    "check square 4"
  );

  utils.safeAssert(
    maximalSquare([
      [0, 1, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
      [1, 1, 1, 1],
    ]) == 9,
    "check square 9"
  );
}

function testRepeatedDNASequences() {
  const DNAString = utils.generateDNASequence(5000);
  const timeExecute = utils.benchmark(
    repeatedDNASequences.bind(null, DNAString)
  );
  utils.safeAssert(timeExecute < 4 * 1000, "time execute < 4s");

  let result = repeatedDNASequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
  utils.safeAssert(
    result.length === 2 &&
      result[0] === "AAAAACCCCC" &&
      result[1] === "CCCCCAAAAA",
    "solution for task example"
  );

  result = repeatedDNASequences("CCCCAAAAAGAAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
  utils.safeAssert(
    result.length === 3 &&
      result[0] === "AAAAACCCCC" &&
      result[1] === "CCCCAAAAAG" &&
      result[2] === "CCCCCAAAAA",
    "check another string"
  );
}

function testFirstDuplicate() {
  utils.safeAssert(
    firstDuplicate([2, 1, 3, 5, 3, 2]) === 3,
    "solution for first tak example"
  );
  utils.safeAssert(
    firstDuplicate([2, 2]) === 2,
    "solution for second task example"
  );
  utils.safeAssert(
    firstDuplicate([2, 4, 3, 5, 1]) === -1,
    "solutions for third task example"
  );
}

function testGroupingDishes() {
  const dishes = utils.getDishes(500, 10);
  const timeExecute = utils.benchmark(groupingDishes.bind(null, dishes));
  utils.safeAssert(timeExecute < 4 * 1000, "time execute < 4s");

  const dishesExample1 = [
    ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
  ];

  const resultToAssert1 = [
    ["Cheese", "Quesadilla", "Sandwich"],
    ["Salad", "Salad", "Sandwich"],
    ["Sauce", "Pizza", "Quesadilla", "Salad"],
    ["Tomato", "Pizza", "Salad", "Sandwich"],
  ];

  const resultExample1 = groupingDishes(dishesExample1);
  utils.safeAssert(
    resultExample1 &&
      resultExample1.length == 4 &&
      resultExample1.every((arr, id) =>
        utils.arrayIsEqual(arr, resultToAssert1[id])
      ),
    "solution for first task example"
  );

  const dishesExample2 = [
    ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
    ["Chicken Curry", "Chicken", "Curry Sauce"],
    ["Fried Rice", "Rice", "Onions", "Nuts"],
    ["Salad", "Spinach", "Nuts"],
    ["Sandwich", "Cheese", "Bread"],
    ["Quesadilla", "Chicken", "Cheese"],
  ];

  const resultToAssert2 = [
    ["Cheese", "Quesadilla", "Sandwich"],
    ["Chicken", "Chicken Curry", "Quesadilla"],
    ["Nuts", "Fried Rice", "Salad"],
    ["Onions", "Fried Rice", "Pasta"],
  ];

  const resultExample2 = groupingDishes(dishesExample2);
  utils.safeAssert(
    resultExample2 &&
      resultExample2.length == 4 &&
      resultExample2.every((arr, id) =>
        utils.arrayIsEqual(arr, resultToAssert2[id])
      ),
    "solution for second task example"
  );
}

function testFindDeadlock() {
  utils.safeAssert(
    findDeadlock([[1], [2], [3, 4], [4], [0]]),
    "solution for first task example"
  );

  utils.safeAssert(
    !findDeadlock([[1, 2, 3], [2, 3], [3], []]),
    "solution for second task example"
  );

  utils.safeAssert(!findDeadlock([[1], [2], [3], []]), "check custom example");
}

console.log("maximalSquare");
testMaximalSquare();

console.log("repeatedDNASequences");
testRepeatedDNASequences();

console.log("firstDuplicate");
testFirstDuplicate();

console.log("groupingDishes");
testGroupingDishes();

console.log("findDeadlock");
testFindDeadlock();
