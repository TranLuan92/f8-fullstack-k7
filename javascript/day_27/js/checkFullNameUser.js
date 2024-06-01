import { fullName, checkFullName } from "./variables";

export function checkFullNameUser() {
  var fullNameValue = this.value;
  if (!fullNameValue) {
    checkFullName.innerText = "Vui lòng nhập thông tin !";
    checkFullName.classList.replace("close", "open");
  } else {
    checkFullName.innerText = "";
    checkFullName.classList.replace("open", "close");
  }
}
