function incrementField(item, field) {
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// Extracted

function incrementField(item, field) {
  return updateField(item, field, increment);
}

function updateField(item, field, modify) {
  const value = item[field];
  const newValue = modify(value);
  const newItem = objectSet(item, field, newValue);
  return newItem;
}

function increment(value) {
  return value + 1;
}
/// Called update()

function update(object, key, modify) {
  const value = object[key];
  const newValue = modify(value);
  const newObject = objectSet(object, key, newValue);
  return newObject;
}
