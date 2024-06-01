import {
  email,
  password,
  checkEmail,
  checkPassword,
  checkFullName,
  fullName,
} from "./variables.js";

export function checkError() {
  if (email.value === "" || email.value === null) {
    checkEmail.textContent = "Vui lòng nhập thông tin";
    checkEmail.classList.replace("close", "open");
  }
  if (password.value === "" || password.value === null) {
    checkPassword.textContent = "Vui lòng nhập thông tin";
    checkPassword.classList.replace("close", "open");
  }
  if (fullName.value === "" || fullName.value === null) {
    checkFullName.textContent = "Vui lòng nhập thông tin";
    checkFullName.classList.replace("close", "open");
  }
}
