module.exports = function towelSort(matrix) {
  return Array.isArray(matrix) ? matrix.reduce((a, x, i) => i % 2 ? a.concat(x.reverse()) : a.concat(x), []) : []
};