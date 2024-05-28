//Bài 1 : Viết 1 hàm tính tổng giá trị biểu thức, tham số truyền vào ở dạng Rest Parameter

var sum = function (...numbers) {
  // console.log(numbers);
  for (var value of numbers) {
    if (typeof value !== "number") {
      return "Lỗi : Giá trị nhập vào phải là số !";
    }
  }
  let result = numbers.reduce(function (prevValue, current) {
    return prevValue + current;
  }, 0);
  return result;
};
console.log(sum(2, 3, 5));

//_______________________________________________________________
// Bài 2 : Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị

function GetUnit(price, unit) {
  this.price = price;
  this.unit = unit;
}
// console.log(typeof GetUnit);

Object.prototype.getUnit = function () {
  function isNumber(price, innerUnit) {
    // function a(price) {
    //   var check = price.every(function (price) {
    //     if (price !== null) {
    //       price = +price;
    //       if (!Number.isNaN(price)) return true;
    //     }
    //     return false;
    //   });
    //   return check;
    // }
    // console.log(a(price));

    function a(price) {
      if (price !== null) {
        price = +price;
        if (!Number.isNaN(price)) return price;
      }
      return "Số nhập vào không hợp lệ";
    }
    // console.log(a(price));

    // if (isNaN(price)) return "Giá trị nhập vào không hợp lệ !";
    // else if (price < 0) {
    //   return "Số nhập vào phải là số dương !";
    // }
    var newArrNumber = [];
    let count = 0;
    let numberString = price.toString();

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

var price = "-200000";
var getPrice = new GetUnit(price, "đ");
console.log(getPrice.getUnit());

// //_________________________________
//Bài 3 : Viết lại hàm push() trong Array. Đặt tên là push2()

// function newArray() {
//   this.length = 0;
// }
// newArray.prototype.push2 = function (...value) {
//   for (var element of value) {
//     this[this.length] = element;
//     this.length++;
//   }

//   return Array.from(this.length).values();
// };
// var arr = new newArray();
// arr.push2(1, 2, 3);
// console.log(arr);

//____________________________________________________________

// Bài 4: Viết làm vòng lặp filter trong Array. Đặt tên là filter2()

Array.prototype.filter2 = function (callback, elementArr) {
  if (typeof callback !== "function") {
    return callback + " Không phải là function";
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // Gọi hàm callback với các tham số (phần tử hiện tại, vị trí, mảng gốc)
      if (callback.call(elementArr, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    // if (i in this) {
    //   const element = this[i];
    //   const index = i;
    //   const array = this;
    //   const shouldInclude = callback.call(thisArg, element, index, array);
    //   if (shouldInclude) {
    //     result.push(element);
    //   }
    // }
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter2(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

//__________________________________________
// Bài 5 :
// var nestedArray = [
//   {
//     id: 1,
//     name: "Chuyên mục 1",
//     parent: 0,
//   },
//   {
//     id: 2,
//     name: "Chuyên mục 2",
//     parent: 0,
//   },
//   {
//     id: 3,
//     name: "Chuyên mục 3",
//     parent: 0,
//   },
//   {
//     id: 4,
//     name: "Chuyên mục 2.1",
//     parent: 2,
//   },
//   {
//     id: 5,
//     name: "Chuyên mục 2.2",
//     parent: 2,
//   },
//   {
//     id: 6,
//     name: "Chuyên mục 2.3",
//     parent: 2,
//   },
//   {
//     id: 7,
//     name: "Chuyên mục 3.1",
//     parent: 3,
//   },
//   {
//     id: 8,
//     name: "Chuyên mục 3.2",
//     parent: 3,
//   },
//   {
//     id: 9,
//     name: "Chuyên mục 3.3",
//     parent: 3,
//   },
//   {
//     id: 10,
//     name: "Chuyên mục 2.2.1",
//     parent: 5,
//   },
//   {
//     id: 11,
//     name: "Chuyên mục 2.2.2",
//     parent: 5,
//   },
// ];

// function nedArr(nestedArray, parent = 0) {
//   var newArray = [];
//   for (var value of nestedArray) {
//     if (parent === value.parent) {
//       var children = nedArr(nestedArray, value.id);
//       var a = { id: value.id, name: value.name };
//       if (children.length > 0) {
//         a.children = children;
//         console.log(children);
//       }
//       newArray.push(a);
//     }
//   }
//   return newArray;
// }
// console.log(nedArr(nestedArray));

{
  /* <form action="">
  <label for="" id="select__option">
    Chuyên Mục
    <select name="select__option" id="select__option">
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  </label>
</form>; */
}
