//_________________________________________________________
//Bài tập 1:
// Định nghĩa các lỗi cho từng trường (field)
var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

// console.log(Object.keys(errors));
// Object.keys(errors).forEach(function (key) {
//   console.log(errors[key]);
// });
// function getError(keys) {
//   var keysArr = keys.split("."); //keysArr =['keysNameInput']
//   console.log(keysArr);
//   if (
//     typeof errors[keysArr[0]] === "object" && // errors[name]
//     !Array.isArray(errors) &&
//     errors !== null
//   ) {
//     if (1 <= keysArr.length) {
//       //nếu trong keysArr là 2 phần tử trở lên
//       return errors[keysArr[0]][keysArr[1]];
//     }
//     console.log(`lo`, errors[keysArr[0]]);
//     return errors[keysArr[0]].required;
//   } else {
//     console.log("Lỗi khác");
//   }
// }
// console.log(getError("email.min")); // "Vui lòng nhập họ tên"

function error(field) {
  var fieldAr = field.split("."); // ["name", "min"]
  if (
    typeof errors[fieldAr[0]] === "object" &&
    !Array.isArray(errors) &&
    errors !== null
  ) {
    if (1 < fieldAr.length) {
      console.log(errors[fieldAr[0]]); // r
      return errors[fieldAr[0]][fieldAr[1]]; /// name["min"]
    }
    return errors[fieldAr[0]].required;
  } else {
    console.log("Lỗi khác");
  }
}
console.log(error("name.min"));
//_________________________________________________
//Bài tập 2 :

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function processCustomers(customers) {
  customers.sort(function (a, b) {
    return a.age - b.age;
  });
  for (var value of customers) {
    let name = value.name.split(" ");
    let nameShort = name[0] + " " + name[name.length - 1];
    value.nameShort = nameShort;
  }
  return customers;
}
console.log(processCustomers(customers));

//____________________________________________________________
//Bài tập 3:

const data = [];

// create account
function createUser(name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
}

// processor login username
function handleRegister(name, password, email) {
  // check info all
  if (!name || !password || !email) {
    console.error("Thông tin không đầy đủ.");
    return;
  }
  // check email creating
  for (var user of data) {
    if (user.email === email) {
      console.error("Email đã được sử dụng.");
      return;
    }
  }
  var newUser = createUser(name, password, email);
  // console.log(newUser);
  data.push(newUser);
  // console.log(data);
}
console.log(handleRegister("luan", "password", "email"));
console.log(handleRegister("luan1", "password1", "email1"));
console.log(handleRegister("luan2", "password2", "email2"));
console.log(handleRegister("luan3", "password3", "email3"));

var handleLogin = function (email, password) {
  var userLogin = null;
  for (var user of data) {
    if (user.email === email) {
      userLogin = user;
      break;
    }
  }
  if (!userLogin || userLogin.password !== password) {
    console.log("Thông tin đăng nhập không hợp lệ");
    return;
  }
  return userLogin;
};
console.log(handleLogin("email2", "password2"));
