document.write(`<h3>Bài tập 1:</h3>`);
var count = 10;
function fibonacci(n) {
  if (n <= 0) {
    document.write("Giá trị nhập sai xin vui lòng nhập lại");
  }
  if (n > 0) {
    function fib(a = 0, result = 1) {
      count--;
      document.write(`${result},`);
      if (count > 0) {
        fib(result, (result += a));
      }
    }
    fib();
  }
}
fibonacci(10);

// //____________________Bài tập 2_____________________________________
// document.write(`<br/><h3>Bài tập 2: </h3>`);
// var hundred = "";
// function soDaoNguoc(seriesNumber) {
//   // console.log(number);
//   if (seriesNumber < 10) {
//     document.write(seriesNumber);
//   } else if (10 <= seriesNumber && seriesNumber <= 99) {
//     hundred += "" + (seriesNumber % 10) + parseInt(seriesNumber / 10);
//     document.write(hundred);
//   } else if (100 <= seriesNumber && seriesNumber <= 999) {
//     hundred +=
//       "" +
//       ((seriesNumber % 100) % 10) +
//       parseInt((seriesNumber % 100) / 10) +
//       parseInt(seriesNumber / 100);
//     document.write(hundred);
//   } else if (1000 <= seriesNumber && seriesNumber <= 9999) {
//     hundred +=
//       "" +
//       (((seriesNumber % 1000) % 100) % 10) +
//       parseInt(((seriesNumber % 1000) % 100) / 10) +
//       parseInt((seriesNumber % 1000) / 100) +
//       parseInt(seriesNumber / 1000);
//     document.write(hundred);
//   } else {
//     document.write(
//       "Dãy số nhập vào vượt quá ngưỡng cho phép" +
//         "<br/> Xin vui lòng nhập lại !" +
//         " <br/> Max : 9999"
//     );
//   }
// }
// soDaoNguoc(1123);
// //________________________________________bai tập 3 ;
// document.write(`<br/><h3>Bài tập 3: </h3>`);
// function seriesNumber(number) {
//   var unit = [
//     " không",
//     "một",
//     "hai",
//     "ba",
//     "bốn",
//     "năm",
//     "sáu",
//     "bảy",
//     "tám",
//     "chín",
//   ];
//   var tens = [
//     " linh",
//     "mười",
//     "hai mươi",
//     "ba mươi",
//     "bốn mươi",
//     "năm mươi",
//     "sáu mươi",
//     "bảy mươi",
//     "tám mươi",
//     "chín mươi",
//   ];
//   var scales = ["", "trăm", "nghìn", "tỷ"];
//   var result = "";
//   var a = parseInt(number / 1000);
//   var b = parseInt((number % 1000) / 100);
//   var c = parseInt((number % 100) / 10);
//   var d = parseInt((number % 100) % 10);

//   if (a !== 0) {
//     result += unit[a] + " " + scales[2];
//   }
//   if (b !== 0) {
//     result += " " + unit[b] + " " + scales[1];
//   } else if ((a !== 0 && d !== 0) || (c !== 0 && a !== 0)) {
//     result += " " + unit[b] + " " + scales[1];
//   }
//   if (c !== 0) {
//     result += " " + tens[c];
//   } else if (d !== 0) {
//     result += " " + " linh";
//   }
//   if (d !== 0) {
//     result += " " + unit[d];
//     if (d === 0) {
//       result += " ";
//     }
//   }
//   if (number <= 9) {
//     result = unit[number];
//   }
//   document.write(result);
// }
// seriesNumber(1101);
