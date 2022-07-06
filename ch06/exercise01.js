let mailingList = [];

function addContact(mailingList, email) {
  // mailingList.push(email);
  const copy = mailingList.slice();
  copy.push(email);
  return copy;
}

function submitFormHandler(event) {
  const form = event.target;
  const email = form.elements["email"].value;
  mailingList = addContact(mailingList, email);
}
