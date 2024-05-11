// tìm giá trị lớn nhất và giá trị nhỏ nhất
document.write(`<h3>Bài 01 :
Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí</h3> <br/>`);
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

var numberIsPrime = [1, 3, 4, 5, 6, 7, 9, 11];
var isPrimeArr = [];
for (var value of numberIsPrime) {
}
//_____________________________________________________________
document.write(`<h3>Bài 03:
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý`);

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
  document.write(newArNumber);
}
valueArrayOne(numArray);
//______________sắp xếp tăng dần__________________
document.write(`<h3>Bài 04
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau<br/>Bước 1: Sắp xếp mảng theo thứ tự tăng dần<br/>
Bước 2: Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng`);

var newArr = [1, 4, 20, 3, 8, 0];
var newArrayValueOne = 2; // giá trị thêm
var positionValue = 3; //vị trí cần thêm
var newArOne = [];
var lengthAr = newArr.length;
//____________________________
function array(newArr) {
  if (0 <= positionValue && positionValue <= newArr.length) {
    var position = newArr.slice(0, positionValue);
    var valueArr = position;
    valueArr[valueArr.length] = newArrayValueOne;
    for (var value of newArr.slice(positionValue)) {
      valueArr[valueArr.length] = value;
      newArOne = valueArr;
    }
  } else {
    document.write(
      `<br/>Vị trí thêm giá trị phải nhỏ hơn độ dài của mảng`,
      " " + lengthAr
    );
  }
}
array(newArr);
for (var index in newArOne) {
  for (var i = 0; i < newArOne.length; i++) {
    if (newArOne[i] > newArOne[i + 1]) {
      var value = newArOne[i];
      newArOne[i] = newArOne[i + 1];
      newArOne[i + 1] = value;
    }
  }
}
console.log(newArOne);
document.write(`<br/>${newArOne}`);
