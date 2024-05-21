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
  var fieldArr = errors[field];
  if (!fieldArr) return false; //nếu trường không có return false.
  if (fieldArr.required) return fieldArr.required; //Trường mặc định
  var keyWord = Object.keys(fieldArr); //lấy keys trong fieldArr
  if (0 < keyWord.length) {
    return fieldArr[keyWord[0]];
  }
  return false;
}
console.log(getError("")); // "Vui lòng nhập họ tên"

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
  for (var email of user) {
    if (!user.email.include(email)) {
      return user.email === email;
    } else {
      console.error("Email đã được sử dụng.");
      return;
    }
  }
}
