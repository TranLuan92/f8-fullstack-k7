//Bài 1 : Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

var sum = function (...parameter) {
  for (var value of parameter) {
    if (typeof value !== "number") {
      return "Lỗi : Giá trị nhập vào phải là số !";
    }
  }
  let result = parameter.reduce(function (prevValue, current) {
    return prevValue + current;
  }, 0);
  return result;
};
console.log(sum(2, 3, 5));

//Bài 2 : Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
//Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ

function GetUnit(price, unit) {
  this.price = price;
  this.unit = unit;
}
GetUnit.prototype.getUnit = function () {
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

//____________________________________________________________
//Bài 4 : Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
// var numberArray = [2, 3, 4, 5];
// Array.prototype.reduceOne = function (callback, value) {
//   if (typeof callback !== "function") {
//     return "Đây không phải hàm Callback !";
//   }
//   var accumulator = value;

// };
// reduceOne(numberArray)
// var total = numberArray.reduceOne(function (prevValue, current) {
//   return prevValue + current;
// });
