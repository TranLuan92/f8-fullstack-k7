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

function getError(field) {
  var fieldArr = field.split(".");
  console.log(fieldArr);
  if (
    typeof errors[fieldArr[0]] === "object" &&
    !Array.isArray(errors) &&
    errors !== null
  ) {
    if (1 < fieldArr.length) {
      return errors[fieldArr[0]][fieldArr[1]];
    }
    console.log(`lo`, errors[fieldArr[0]]);
    return errors[fieldArr[0]].required;
  } else {
    console.log("Lỗi khác");
  }
}
console.log(getError("name")); // "Vui lòng nhập họ tên"
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
