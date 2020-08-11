/*
  Поиск первого повторения значения в массиве
*/
function firstDuplicate(a) {
  let values = [];
  for (let n of a) {
    if (values.includes(n)) return n;
    values.push(n);
  }
  return -1;
}

module.exports = firstDuplicate;
