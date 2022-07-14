try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

function withLogging() {
  try {
    saveUserData(user);
  } catch (error) {
    logToSnapErrors(error);
  }
}

function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}

withLogging(() => {
  saveUserData(user);
});

const saveCurrentUserData = () => {
  saveUserData(user);
};

withLogging(saveCurrentUserData);
