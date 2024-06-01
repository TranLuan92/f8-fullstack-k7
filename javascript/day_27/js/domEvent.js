// var wrapper = document.querySelector(".wrapper");
// var wrapperTwo = document.querySelector("section.wrapper");

// var off = document.querySelector(".off");
// // console.log(rowContainer);
// //___________Show and hidden form login_______________
// item.addEventListener("click", function () {
//   rowContainer.classList.replace("close", "open");
//   overlay.classList.replace("close", "open");
// });

// overlay.addEventListener("click", function () {
//   rowContainer.classList.replace("open", "close");
//   overlay.classList.replace("open", "close");
//   login.classList.add("show__color");
//   //   login.classList.replace("close", "open");
//   create.classList.remove("show__color");
// });
// off.addEventListener("click", function () {
//   overlay.classList.replace("open", "close");
//   rowContainer.classList.replace("open", "close");
// });
// //_______________Show and hidden form create and login____________________________________
// login.addEventListener("click", function () {
//   create.classList.replace("show__color", "hidden__color");
//   login.classList.add("show__color");
//   fromLogin.classList.replace("close", "open");
//   fromCreate.classList.replace("open", "close");
// });
// create.addEventListener("click", function () {
//   create.classList.replace("hidden__color", "show__color");
//   login.classList.remove("show__color");
//   fromCreate.classList.replace("close", "open");
//   fromLogin.classList.replace("open", "close");
// });
// //__________________process form ________________________________

// //________Process user input information___________

// function checkMail() {
//   var processLogin = document.querySelector(".check_mail");
//   var email = document.getElementById("email");
//   var content = processLogin.innerText; //lấy text trong thẻ có class là .check_mail
//   var checkMailLogin = email.value;

//   if (checkMailLogin !== null) {
//     if (!checkMailLogin.includes("@")) {
//       processLogin.innerText = content;
//       processLogin.classList.replace("close", "open");
//     } else {
//       processLogin.innerText = "";
//       processLogin.classList.replace("open", "close");
//     }
//   }
// }

// //_______________________________________________________
// function checkPassword() {
//   var checkPassword = document.querySelector(".checkPassword");
//   var passWord = document.getElementById("passWord");
//   // var content = checkPassword.innerText; //lấy text trong thẻ có class là
//   var checkPasswordLogin = passWord.value;

//   if (checkPasswordLogin) {
//     if (checkPasswordLogin.length < 8) {
//       checkPassword.innerText = "Password tối thiểu là 8 ký tự !";
//       checkPassword.classList.replace("close", "open");
//     } else {
//       checkPassword.innerText = " ";
//       checkPassword.classList.replace("open", "close");
//     }
//   } else {
//     checkPassword.innerText = "Vui lòng nhập thông tin !";
//     checkPassword.classList.replace("close", "open");
//   }
// }
// //_______________________________________________________
// function fullName() {
//   var checkFullName = document.querySelector(".checkFullName"); //span
//   var contentCheckFullName = checkFullName.innerText;
//   var fullName = document.querySelector("#full_name");
//   var stringFullName = fullName.value;
//   console.log(stringFullName);
//   if (stringFullName !== null) {
//     if (stringFullName.length < 8) {
//       checkFullName.innerText = contentCheckFullName;
//       checkFullName.classList.replace("close", "open");
//     } else {
//       checkFullName.innerHTML = "";
//       checkFullName.classList.replace("open", "close");
//     }
//   }
// }
// //___________________________________________________________
// function userName() {
//   var createEmail = document.querySelector(".create_email"); //span
//   var contentEmail = createEmail.innerText;
//   var createUserName = document.querySelector("#email_create");
//   var stringUsername = createUserName.value;

//   if (stringUsername !== null) {
//     if (!stringUsername.includes("@")) {
//       createEmail.innerText = contentEmail;
//       createEmail.classList.replace("close", "open");
//     } else {
//       createEmail.innerHTML = "";
//       createEmail.classList.replace("open", "close");
//     }
//   }
// }
// //_____________________________________________________________

// function createPassWord() {
//   var createPass = document.querySelector(".create_pass"); //span
//   var contentPass = createPass.innerText;
//   var createPassWord = document.querySelector("#create_password");
//   var stringPassWord = createPassWord.value;
//   if (stringPassWord !== null) {
//     if (stringPassWord.length < 8) {
//       createPass.innerText = contentPass;
//       createPass.classList.replace("close", "open");
//     } else {
//       createPass.innerHTML = "";
//       createPass.classList.replace("open", "close");
//     }
//   }
// }

// // // //___________________Process Enter data___________________________________

// // var form = document.querySelector("form");
// // form.addEventListener("submit", function (e) {
// //   //Ngăn hành động mặc định của trình duyệt với thẻ HTML
// //   e.preventDefault();
// //   var email = document.getElementById("email");
// //   var emailString = email.value;
// //   console.log(emailString);
// // });

// // var allOpen = document.querySelector(".all_pen");
// // var contentOpen = allOpen.innerText;
// // rowContainer.addEventListener("click", function () {});

// //________________________________________________________________
