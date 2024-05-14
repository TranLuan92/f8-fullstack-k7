document.write(`Bài tập 1: Lấy kết quả giao giữa 2 mảng <br/>`);
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 4, 1];
var newArr = [];
for (var value of arrA) {
  for (var index in arrB) {
    if (value === arrB[index]) newArr.push(value);
  }
}
document.write(`- Phần tử chung của hai mảng là : ${newArr} <br/>`);
// arrA.forEach(function (number) {
//   if (arrB.includes(number)) {
//     newArr.push(number);
//   }
// });
// document.write(`- Phần tử chung của hai mảng là : ${newArr} <br/>`);
//____________________________________________________________________
document.write(
  `<br/><br/>Bài tập 2: Làm phẳng array sau (Chuyển về mảng 1 chiều) Không được sử dụng flat() <br/>`
);
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function numberArr(arr) {
  var newArray = [];
  for (var value of arr) {
    if (Array.isArray(value)) {
      newArray = newArray.concat(numberArr(value));
    } else if (!Array.isArray(value)) {
      newArray.push(value);
    }
  }
  return newArray;
}
document.write(numberArr(arr));
console.log(numberArr(arr));

//____________________________________________
// function numberArr(arr) {
//   let newArray = [];
//   arr.forEach(function (value) {
//     if (Array.isArray(value)) {
//       newArray = newArray.concat(numberArr(value));
//     } else {
//       newArray.push(value);
//     }
//   });
//   return newArray;
// }
// numberArr(arr);
// console.log(numberArr(arr));

document.write(
  `<br/><br/>Bài tập 3: Tách phần tử trong mảng theo đúng kiểu dữ liệu <br/>`
);
var arrC = [
  ["a", 1, true],
  ["b", 2, false],
];
var newArr = [];
function typeOfArr(arrC) {
  arrC.forEach(function (element) {
    if (Array.isArray(element)) {
      newArr = newArr.concat(element);
    }
  });
  var result = [];
  var stringArray = [];
  var numberArray = [];
  var booleanArray = [];

  for (var value of newArr) {
    if (typeof value === "string") {
      stringArray.push(value);
    } else if (typeof value === "number") {
      numberArray.push(value);
    } else if (typeof value === "boolean") {
      booleanArray.push(value);
    }
  }
  result = [stringArray, numberArray, booleanArray];
  document.write(`[[${stringArray}], [${numberArray}],[${booleanArray}]]`);
  console.log(result);
  return result;
}

typeOfArr(arrC);

document.write(`<br/><br/>Bài tập 4:  <br/>`);
