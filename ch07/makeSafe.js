const makeSafe = (cb) => {
  return (args) => {
    const copyArgs = deepCopy(args);
    cb(args);
    return copyArgs;
  };
};
