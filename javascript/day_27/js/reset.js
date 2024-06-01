function resetInput(e) {
  e.preventDefault();
  email.value = "";
  password.value = "";
  if (fullName) {
    fullName.value = "";
  }
}
