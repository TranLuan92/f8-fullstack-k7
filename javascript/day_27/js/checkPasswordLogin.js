import { checkPassword, passWord } from "./variables.js";

export function checkPasswordLogin() {
  var passWordValue = this.value;
  if (!passWordValue) {
    checkPassword.innerText = "Vui lòng nhập mật khẩu !";
    checkPassword.classList.replace("close", "open");
  } else if (passWordValue.length < 8) {
    checkPassword.innerText = "Mật khẩu tối thiểu 8 ký tự !";
    checkPassword.classList.replace("close", "open");
  } else {
    checkPassword.innerText = "";
    checkPassword.classList.replace("open", "close");
  }
}
