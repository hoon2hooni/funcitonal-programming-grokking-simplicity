function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function objectDelete(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function withObjectCopy(object, f) {
  const copy = { ...object };
  f(copy);
  return copy;
}

function objectSet(object, key, value) {
  return withObjectCopy(object, (copy) => {
    copy[key] = value;
  });
}
