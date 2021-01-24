module.exports = function countCats(matrix) {
  return matrix.flat().filter(ar => ar === '^^').length
};

