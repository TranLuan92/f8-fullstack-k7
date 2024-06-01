import {
  loginAccount,
  createAccount,
  fullName,
  btnProcessInfo,
  checkEmail,
  checkFullName,
  checkPassword,
} from "./variables.js";
export function showFormLoginAccount() {
  loginAccount.classList.replace("hidden__color", "show__color");
  createAccount.classList.replace("show__color", "hidden__color");
  fullName.classList.replace("open", "close");
  btnProcessInfo.innerText = "Login Account";
  //---------------------------------------------
  checkFullName.classList.replace("open", "close");
  checkEmail.classList.replace("open", "close");
  checkPassword.classList.replace("open", "close");
}
