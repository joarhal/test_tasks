/*
  Поиск максимального квадратра из 1 в матрице из нулей и еденици

  Поиск квадрата начинается с наибольшего возможного. Для матрицы размера 3 - ищется квадрат
  размера 3. Если таковой не находится, то выполняется поиска квадрат размера 2 и так далее,
  пока искомое значение не будет найдено.
*/
function maximalSquare(matrix) {
  const matrixSize = matrix.length;

  const checkSquare = (squareSize) => {
    const maxOffset = matrixSize - squareSize;
    for (let vOffset = 0; vOffset <= maxOffset; vOffset++) {
      for (let hOffset = 0; hOffset <= maxOffset; hOffset++) {
        const isSquare = matrix
          .reduce((acc, row, rowId) => {
            if (rowId >= vOffset && rowId < vOffset + squareSize) {
              row
                .slice(hOffset, hOffset + squareSize)
                .forEach((subRow) => acc.push(subRow));
            }
            return acc;
          }, [])
          .every((x) => !!+x);
        if (isSquare) return squareSize;
      }
    }
    return false;
  };

  for (let squareSize = matrixSize; squareSize > 0; squareSize--) {
    if (checkSquare(squareSize)) {
      return squareSize * squareSize;
    }
  }
  return 0;
}

module.exports = maximalSquare;
