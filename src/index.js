
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce( (prev, current) => Math.min(prev, current));
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce( (prev, current) => Math.max(prev, current));
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce( (s, i) => s + i, 0) / array.length;
}