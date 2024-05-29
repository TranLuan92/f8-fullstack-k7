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
var price = 200000;

Object.prototype.getCurrency = function (unit) {
  if (!Number.isNaN(Number(this)) && Number(this) >= 0) {
    var numberString = this.toString().split("").reverse();
    if (String(this).includes("-")) {
      console.log("Số không hợp lệ !");
      return;
    }
    var result = numberString.map(function (char, index) {
      if ((index + 1) % 3 === 0 && index < numberString.length - 1) {
        return "," + char;
      }
      return char;
    });
    console.log(result.reverse().join("") + " " + unit);
  } else {
    console.log("Số không hợp lệ !");
    return;
  }
};
price.getCurrency("đ");

// //_________________________________
//Bài 3 : Viết lại hàm push() trong Array. Đặt tên là push2()
Object.prototype.push2 = function (...value) {
  for (var element of value) {
    this[this.length] = element;
  }
};
var array = [];
array.push2(1, 2, 3, 4, 0);
console.log(array);
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

// // function nedArr(nestedArray, parent = 0) {
// //   var newArray = [];
// //   for (var value of nestedArray) {
// //     if (parent === value.parent) {
// //       var children = nedArr(nestedArray, value.id);
// //       var a = { id: value.id, name: value.name };
// //       if (children.length > 0) {
// //         a.children = children;
// //         console.log(children);
// //       }
// //       newArray.push(a);
// //     }
// //   }
// //   return newArray;
// // }
// // console.log(nedArr(nestedArray));

// // {
// /* <form action="">
//   <label for="" id="select__option">
//     Chuyên Mục
//     <select name="select__option" id="select__option">
//       <option value=""></option>
//       <option value=""></option>
//       <option value=""></option>
//       <option value=""></option>
//       <option value=""></option>
//     </select>
//   </label>
// </form>; */
// // }

// for (var value of nestedArray) {
//   console.log(value);
//   if (value.id === 3) {
//     value.parent = 20;
//   }
// }
