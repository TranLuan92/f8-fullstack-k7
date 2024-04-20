var a = prompt("Nhập số a :");
b = prompt("Nhập số b :");
c = prompt("Nhập số c :");
var soLonNhat = b;
if (soLonNhat < a) {
  soLonNhat = a;
} else if (soLonNhat < c) {
  soLonNhat = c;
}
console.log(`so lon nhat : ${soLonNhat}`);
