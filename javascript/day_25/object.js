//Bài 1 : Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

// var sum = function (...numbers) {
//   for (var value of numbers) {
//     if (typeof value !== "number") {
//       return "Lỗi : Giá trị nhập vào phải là số !";
//     }
//   }
//   let result = numbers.reduce(function (prevValue, current) {
//     return prevValue + current;
//   }, 0);
//   return result;
// };
// console.log(sum(2, 3, 5, "2"));

var getTotal = function (...number) {
  if (number.length) {
    // var total = 0;
    var check = number.every(function (value) {
      if (value !== null) {
        value = +value;
        if (!Number.isNaN(value)) {
          return true;
        }
      }
      return false;
    });
    // if (check) return total;
    if (check) {
      return number.reduce(function (total, value) {
        return +total + +value;
      });
    }
    return "Dữ liệu không hợp lệ !";
  }
};
console.log(getTotal(2, 3, 5, "10"));
// //Bài 2 : Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
// //Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

function GetUnit(price, unit) {
  this.price = price;
  this.unit = unit;
}
console.log(typeof GetUnit);

Object.prototype.getUnit = function () {
  function isNumber(number, innerUnit) {
    // function a(number) {
    //   if (!isNaN(number)) return !isNaN(Number(number));
    // }
    if (isNaN(number)) return "Giá trị nhập vào không hợp lệ !";
    else if (number < 0) {
      return "Số nhập vào phải là số dương !";
    }
    var newArrNumber = [];
    let count = 0;
    let numberString = number.toString();

    function numberTwo(numberString) {
      for (let i = numberString.length - 1; i >= 0; i--) {
        newArrNumber.unshift(numberString[i]);
        count++;
        if (count % 3 === 0 && i !== 0) {
          newArrNumber.unshift(",");
        }
      }
      return newArrNumber.join("");
    }
    var numberThree = numberTwo(numberString);
    return numberThree + " " + innerUnit;
    //Xử lý chuỗi___end
  }
  return isNumber(this.price, this.unit);
};

var price = "200000";
var getPrice = new GetUnit(price, "đ");
console.log(getPrice.getUnit());
// //_____________________________________________________________
// //Bài 3 :
var nestedArray = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function nedArr(nestedArray, parent = 0) {
  var newArray = [];
  for (var value of nestedArray) {
    if (parent === value.parent) {
      var children = nedArr(nestedArray, value.id);
      var a = { id: value.id, name: value.name };
      if (children.length > 0) {
        a.children = children;
        console.log(children);
      }
      newArray.push(a);
    }
  }
  return newArray;
}
console.log(nedArr(nestedArray));

// //____________________________________________________________

// //Bài 4 : Chuyển đổi mảng 1 chiều thành dạng lồng (nested)

// var numberArray = [2, 3, 4, 5];
// Array.prototype.reduceOne = function (callback, value) {
//   if (typeof callback !== "function") {
//     return "Đây không phải hàm Callback !";
//   }
//   var accumulator = value;
// };
// reduceOne(numberArray);
// var total = numberArray.reduceOne(function (prevValue, current) {
//   return prevValue + current;
// });
