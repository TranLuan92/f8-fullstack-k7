// bài 1 : Tính tiền taxi.
var km = 6;
price = 0;
startingPrice = 15000;
priceLevelTwo = 13500;
priceLevelThree = 11000;
if (km <= 1) {
  console.log(startingPrice); // level 1
} else if (km > 1 && km <= 5) {
  money = (km - 1) * priceLevelTwo + startingPrice; // level 2
  console.log(money);
} else if (km > 5 && km <= 120) {
  //level 3
  money = (km - 5) * priceLevelThree + 4 * priceLevelTwo + startingPrice;
  console.log(money);
} else {
  money =
    ((km - 5) * priceLevelThree + 4 * priceLevelTwo + startingPrice) * 0.1;
  console.log(`Tổng thanh toán : ${money}`);
}

// Bài 2 : tính tiền điện.
var kwh = 405;
var money = 0;
var total;
var priceLevelOne = 1.678;
var priceLevelTwo = 1.734;
var priceLevelThree = 2.014;
var priceLevelFour = 2.536;
var priceLevelFive = 2.834;
var priceLevelSix = 2.927;
if (kwh > 0 && kwh <= 50) {
  money = kwh * priceLevelOne; //level 1
  console.log(money);
} else if (kwh > 50 && kwh <= 100) {
  money = (kwh - 50) * priceLevelTwo + moneyOne; //level 2
  console.log(money);
} else if (kwh > 100 && kwh <= 200) {
  // level 3
  money =
    (kwh - 100) * priceLevelThree + 50 * priceLevelOne + 50 * priceLevelTwo;
  console.log(money);
} else if (kwh > 200 && kwh <= 300) {
  // level 4
  money =
    (kwh - 100) * priceLevelFour +
    50 * priceLevelOne +
    50 * priceLevelTwo +
    100 * priceLevelThree;
  console.log(money);
} else if (kwh > 300 && kwh <= 400) {
  // level 5
  money =
    (kwh - 300) * priceLevelFive +
    50 * priceLevelOne +
    50 * priceLevelTwo +
    100 * priceLevelThree +
    100 * priceLevelFour;
  console.log(money);
} else {
  money =
    (kwh - 400) * priceLevelSix +
    50 * priceLevelOne +
    50 * priceLevelTwo +
    100 * priceLevelThree +
    100 * priceLevelFive +
    100 * priceLevelFour;
  console.log(money);
}

// bài 3 : Tính giá trị biểu thức .
var n = 5;
var s = 0;
for (var i = 1; i <= n; i++) {
  s += i * (i + 1); // s = 0 + count ;
}
console.log(`${s}`);

//bài 5 : Vẽ tam giác số .

document.write(`bài 5: `);
document.write("<br/>");
var n = 5;
result = 0;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    result++;
    document.write(result);
  }
  document.write("<br/>");
}

// bài 7 :

document.write(`bài 7 : vẽ bảng cửu chương !`);

document.write(`<br/>`);
for (var i = 2; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    document.write(`<div">${i} * ${j} = ${i * j} </div>`);
    document.write("<br/>");
  }
  document.write("<br/>");
}
