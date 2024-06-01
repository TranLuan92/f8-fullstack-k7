//__________________________________________________
// import { variables } from "./variables.js";
// import { showAndHiddenForm } from "./showAndHiddenForm.js";
// import { validateEmail } from "./validateEmail.js";
// import { showFormLoginAccount } from "./showFormCreateAccount.js";
// import { showFormLoginAccount } from "./showFormLoginAccount.js";
// import { checkPasswordLogin } from "./checkPasswordLogin.js";
// import { checkFullNameUser } from "./checkFullNameUser.js";
// import { checkError } from "./checkError.js";

var inputUsername = document.querySelector(".login a");
var overlay = document.querySelector(".overlay");
var rowContainer = document.querySelector(".row_container");
//-----------------------------------
var createAccount = document.querySelector(".create_account");
var loginAccount = document.querySelector(".login_account");
//--------------------------------
var formProcess = document.querySelector(".form_process");
var fullName = document.querySelector("#full_name");
var checkFullName = document.querySelector(".check_full_name");
var email = document.querySelector("#email");
var checkEmail = document.querySelector(".check_email");
var passWord = document.querySelector("#password");
var checkPassword = document.querySelector(".check_password");
var btnProcessInfo = document.querySelector(".process_user_information");
var closeForm = document.querySelector(".off");
//_________________________________________________________________________
function showAndCloseForm() {
  rowContainer.classList.replace("open", "close");
  overlay.classList.replace("open", "close");
}
closeForm.addEventListener("click", showAndCloseForm);
//__________________________overlay click__________________
function overlayClose() {
  rowContainer.classList.replace("open", "close");
  overlay.classList.replace("open", "close");
}
overlay.addEventListener("click", overlayClose);
// //_____________show and hidden form_____________________________________
function showAndHiddenForm() {
  rowContainer.classList.replace("close", "open");
  overlay.classList.replace("close", "open");
}
inputUsername.addEventListener("click", showAndHiddenForm);

function showFormCreateAccount() {
  fullName.classList.replace("close", "open");
  createAccount.classList.replace("hidden__color", "show__color");
  loginAccount.classList.replace("show__color", "hidden__color");
  btnProcessInfo.innerText = "Create Account";
  //--------------------------------------------
  checkFullName.classList.replace("open", "close");
  checkEmail.classList.replace("open", "close");
  checkPassword.classList.replace("open", "close");
}
createAccount.addEventListener("click", showFormCreateAccount);

function showFormLoginAccount() {
  loginAccount.classList.replace("hidden__color", "show__color");
  createAccount.classList.replace("show__color", "hidden__color");
  fullName.classList.replace("open", "close");
  btnProcessInfo.innerText = "Login Account";
  //---------------------------------------------
  checkFullName.classList.replace("open", "close");
  checkFullName.innerText = " ";
  checkEmail.classList.replace("open", "close");
  checkPassword.classList.replace("open", "close");
}
loginAccount.addEventListener("click", showFormLoginAccount);

// function btnProcessUserInformation(){

// }
// btnProcessInfo.addEventListener("click",btnProcessUserInformation)

//______________________________________________________-

function validateEmail() {
  var emailValue = this.value;
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
email.addEventListener("input", validateEmail);

//___________________________________
function checkFullNameUser() {
  var fullNameValue = this.value;
  if (!fullNameValue) {
    checkFullName.innerText = "Vui lòng nhập thông tin !";
    checkFullName.classList.replace("close", "open");
  } else {
    checkFullName.innerText = "";
    checkFullName.classList.replace("open", "close");
  }
}
fullName.addEventListener("input", checkFullNameUser);

//________________________________________________
function checkPasswordLogin() {
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
passWord.addEventListener("input", checkPasswordLogin);

//_________________________________________________________________
function checkError() {
  if (email.value === "" || email.value === null) {
    checkEmail.textContent = "Vui lòng nhập thông tin";
    checkEmail.classList.replace("close", "open");
  }
  if (passWord.value === "" || password.value === null) {
    checkPassword.textContent = "Vui lòng nhập thông tin";
    checkPassword.classList.replace("close", "open");
  }
  // if (fullName.value === "" || fullName.value === null) {
  //   checkFullName.textContent = "Vui lòng nhập thông tin";
  //   checkFullName.classList.replace("close", "open");
  // }
}

function resetInput(e) {
  e.preventDefault();
  email.value = "";
  passWord.value = "";
  if (fullName) {
    fullName.value = "";
  }
}

if (email) {
  email.addEventListener("blur", checkError);
  email.addEventListener("input", validateEmail);
}

if (passWord) {
  passWord.addEventListener("blur", checkError);
}

if (formProcess) {
  formProcess.addEventListener("submit", resetInput);
  createAccount.addEventListener("click", resetInput);
  loginAccount.addEventListener("click", resetInput);
}
