import {
  loginAccount,
  createAccount,
  fullName,
  btnProcessInfo,
  checkEmail,
  checkFullName,
  checkPassword,
} from "./variables.js";
export function showFormCreateAccount() {
  fullName.classList.replace("close", "open");
  createAccount.classList.replace("hidden__color", "show__color");
  loginAccount.classList.replace("show__color", "hidden__color");
  btnProcessInfo.innerText = "Create Account";
  //--------------------------------------------
  checkFullName.classList.replace("open", "close");
  checkEmail.classList.replace("open", "close");
  checkPassword.classList.replace("open", "close");
}
