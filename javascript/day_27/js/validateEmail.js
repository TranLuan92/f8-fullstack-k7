import { email, checkEmail } from "./variables.js";

export function validateEmail() {
  var emailValue = email.value;
  if (!emailValue) {
    checkEmail.innerText = "Vui lòng nhập thông tin !";
    checkEmail.classList.replace("close", "open");
  } else if (!emailValue.includes("@")) {
    checkEmail.innerText = "Xin vui lòng nhập đúng định dạng email !";
    checkEmail.classList.replace("close", "open");
  } else {
    checkEmail.innerText = "";
    checkEmail.classList.replace("open", "close");
  }
}
