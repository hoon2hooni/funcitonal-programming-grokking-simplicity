tryCatch(sendEmail, logToSnapErrors);

try {
  sendEmail();
} catch (error) {
  logToSnapErrors(error);
}

function tryCatch(f, errorHandler) {
  try {
    return f();
  } catch (error) {
    return errorHandler(error);
  }
}


