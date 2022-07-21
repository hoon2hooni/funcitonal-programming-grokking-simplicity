function nestedUpdate(object, keys, modify) {
  if (keys.length === 0) {
    return modify(object);
  }

  const [key, ...restOfKeys] = keys;
  return update(object, key, (object) => nestedUpdate(object, restOfKeys, modify));
}
