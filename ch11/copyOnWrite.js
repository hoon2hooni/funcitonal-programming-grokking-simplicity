// Page 270

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

function push(array, elem) {
  var copy = array.slice();
  copy.push(elem);
  return copy;
}

function drop_last(array) {
  var array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

// 적용 후

function arraySet(array, idx, value) {
  return withArrayCopy(array, function (copy) {
    copy[idx] = value;
  });
}

function withArrayCopy(array, modify) {
  let copy = array.slice();
  modify(copy);
  return copy;
}

const sortedArray = withArrayCopy(array, function (copy) {
  SuperSorter.sort(copy);
});

function push(array, elem) {
  return withArrayCopy(array, function (copy) {
    copy.push(elem);
  });
}

function drop_first(array) {
  return withArrayCopy(array, (copy) => copy.shift());
}
