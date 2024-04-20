var a = prompt("Nhap so a");
b = prompt("nhap so b:");
c = prompt("nhập số c:");
if (a > b) {
  min = a;
  a = b;
  b = min;
}
if (a > c) {
  min = a;
  a = c;
  c = min;
}
if (b > c) {
  min = b;
  b = c;
  c = min;
}
console.log(`${a},${b},${c}`);
