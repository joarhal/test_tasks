/*
  Поиск повторяющихся подстрок из 10 символов

  Проходимся по входной строке и берем слайсы по 10 символов. Если таковой уже находили,
  значит найдена одна из искомых последовательностей
*/
function repeatedDNASequences(s) {
  const sequences = [];
  const resultSequences = [];

  for (let i = 0; i < s.length - 9; i++) {
    const sequence = s.slice(i, i + 10);
    sequences.includes(sequence)
      ? resultSequences.push(sequence)
      : sequences.push(sequence);
  }
  return resultSequences.sort();
}

module.exports = repeatedDNASequences;
