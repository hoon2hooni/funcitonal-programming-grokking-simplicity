try {
  saveCurrentUserData(user);
} catch {
  logToSnapErrors(error);
}

try {
  fetchProduct(productID);
} catch {
  logToSnapErrors(error);
}

function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}
function hoc(f, log) {
  return (...args) => {
    try {
      f(...args);
    } catch (error) {
      log(error);
    }
  };
}

const logFetch = hoc(fetchProduct,logToSnapErrors)
logFetch(args)