// tìm giá trị lớn nhất và giá trị nhỏ nhất
// document.write(`<h3>Bài 01 :
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí</h3> <br/>`);
var numbersAr = [8, 2, -1, 9, 0, 5, 7, 10];
document.write(`Mảng cho trước : ${numbersAr} <br/>`);
var max = numbersAr[0];
var min = numbersAr[0];
var position;
for (var index in numbersAr) {
  if (max < numbersAr[index]) {
    max = numbersAr[index];
    position = +index;
  }
  if (min > numbersAr[index]) {
    min = numbersAr[index];
    var positionMin = +index;
  }
}
document.write(`Gía trị lớn nhất : ${max} Vị trí : ${position} `);
document.write(`<br/>Gía trị nhỏ nhất : ${min} Vị trí : ${positionMin} `);
//__________________________________________________________________________
document.write(`<h3>Bài 02 : 
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”</h3> <br/>`);

var numberIsPrime = [1, 2, 4, 6, 9];
var isPrimeArr = [];
for (var value of numberIsPrime) {
  for (var i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      value = false;
    }
  }
  if (value === false || value <= 0 || value === 1) {
    continue;
  }
  isPrimeArr[isPrimeArr.length] = value;
}
if (isPrimeArr.length === 0) {
  document.write("No PrimeArr!");
} else {
  var total = 0;
  for (var value of isPrimeArr) {
    total += value;
  }
  var average = total / isPrimeArr.length;
  document.write(average);
}
console.log(average);

//_____________________________________________________________
// document.write(`<h3>Bài 03:
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý`);

var numArray = [1, 3, 4, 5, 5];
var newArNumber = [];
function valueArrayOne(numArray) {
  for (var index in numArray) {
    for (var i = 0; i <= newArNumber.length; i++) {
      if (numArray[index] === newArNumber[i]) {
        numArray[index] = false;
      }
    }
    if (numArray[index] === false) {
      continue;
    }
    newArNumber[newArNumber.length] = numArray[index];
  }
  return newArNumber;
}
console.log(valueArrayOne(numArray));
//______________sắp xếp tăng dần__________________
// document.write(`<h3>Bài 04
// Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau<br/>Bước 1: Sắp xếp mảng theo thứ tự tăng dần<br/>
// Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng`);
var arr = [1, 7, 9, 2, 3, 0, 5, 6, 11, 8];
var input = 7;
var newArr = [];
function arrange(arr) {
  for (var value of arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var max = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = max;
      }
    }
  }
  return arr;
}
var arrangeArr = arrange(arr);
function number(arrangeArr) {
  for (var index in arrangeArr) {
    if (input <= arrangeArr[index]) {
      //nếu input nhỏ hơn hoặc bằng phần tử đầu tiên của mảng thì chèn vào vị trí đầu tiên
      newArr[index] = input;
      // console.log(newArr);
      for (var i = 1; i <= arrangeArr.length; i++) {
        // duyệt qua các phần tử của mảng.
        newArr[i] = arrangeArr[i - 1];
        // chuyển tất cả các phần tử của mảng ban đầu sang mảng mới.
      }
    } else if (input >= arrangeArr[arrangeArr.length - 1]) {
      for (var index in arrangeArr) {
        newArr[index] = arrangeArr[index];
        // console.log(newArr);
      }
      newArr[newArr.length] = input;
      break;
    } else {
      for (var i = 0; i < arrangeArr.length; i++) {
        if (input <= arrangeArr[i]) {
          newArr[i] = input;
          for (var j = i + 1; j <= arrangeArr.length; j++) {
            newArr[j] = arrangeArr[j - 1];
          }
          break;
        } else {
          newArr[i] = arrangeArr[i];
        }
      }
    }
  }
  return newArr;
}
console.log(number(arrangeArr));
