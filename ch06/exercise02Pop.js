function pop(array) {
  return {
    last: lastElement(array),
    array: dropLast(array),
  };
}

function lastElement(array) {
  return array[array.length - 1];
}

function dropLast(array) {
  const copy = array.slice();
  copy.pop();
  return copy;
}
