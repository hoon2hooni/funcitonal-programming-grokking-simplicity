function when(condition, f) {
  if (condition) {
    return f()
  }
}


function IF(condition, f, ELSE) {
  if (condition) {
    return f()
  } else {
    return ELSE()
  }
}