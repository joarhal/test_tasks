/*
  Поиск цикла в ненаправленном графе

  Проходимся по узлам. Если уже посещали узел - цикл найден.
  Алгоритм O(n) сложности, так как нам нужен максимум только один проход по всем нодам
*/
function findDeadlock(connections) {
  const passedEdges = [];

  for (let position in connections) {
    if (connections[position].some((point) => passedEdges.includes(point))) {
      return true;
    }
    passedEdges.push(+position);
  }

  return false;
}

module.exports = findDeadlock;
