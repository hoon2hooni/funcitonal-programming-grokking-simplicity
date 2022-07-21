const user = {
  firstName: "JOE",
  lastName: "Nash",
  email: "JOE@EXAMPLE.COM",
};

function updateLowerEmail(user) {
  return update(user, "email", (value) => value.toLowerCase());
}
