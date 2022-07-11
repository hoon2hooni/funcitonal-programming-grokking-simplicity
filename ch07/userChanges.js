userChanges.subscribe((user) => {
  const copyUser = deepCopy(user)
  processUser(copyUser)
})