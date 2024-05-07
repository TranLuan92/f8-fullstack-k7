// lặp lại và tô màu cho từng chữ trong văn bản
// var content = `<h1>Học lập trình rất khó</h1>`;
// var words = content.split(" ");
// var lengthWords = words.length;
// console.log(lengthWords);
// var position = 0; // tạo biến để gắn từng từ đã tách ra được
// var count = 0;

// setInterval(function () {
//   if (position >= words.length) {
//     position = 0; // Quay lại từ đầu nếu đã chạy hết đoạn văn bản.
//   }
//   var word = words[position];
//   var result = "";
//   for (var i = 0; i < words.length; i++) {
//     if (position === i) {
//       result += `<span style="color: red;">${word}</span>`;
//     } else {
//       result += words[i];
//     }
//     result += " "; // Thêm dấu cách sau mỗi từ
//     // console.log(result);
//   }
//   document.body.innerHTML = result;
//   position++;
//   // console.log(position++);
// }, 500);
// // var display = setInterval();
// // display();
//______________________karaoke____________________________;
// var words = "Học lập trình rất rất khó";
// var key = " ";
// var position = 0;

// setInterval(function () {
//   if (position >= words.length) {
//     position = 0;
//   }

//   var contentOne = words.indexOf(key, position);
//   var contentTwo = `<span style="color: red">${
//     words.slice(0, contentOne) + key
//   }</span>`;

//   if (contentOne < 0) {
//     contentOne = words.length;
//   }
//   var contentThree = words.slice(contentOne + key.length);
//   var result = contentTwo + contentThree;

//   document.body.innerHTML = result;
//   position = contentOne + key.length; // Tăng vị trí bằng độ dài của khóa cộng một
// }, 1000);
//______________________karaoke____________________________;
var words = "Học lập trình rất rất khó";
var key = " ";
var position = 0;
setInterval(function () {
  if (position >= words.length) {
    position = 0;
  }
  var index = words.indexOf(key, position); // lần đầu chạy không "3"
  var contentOne = words.slice(0, position); // lần đầu chạy là không "0"
  var contentTwo = "";
  if (index >= 0) {
    contentTwo = `<span style="color: red">${
      words.slice(position, index) + key // nếu tìm thấy key được ấn định sẽ chạy đoạn mã này cho tói khi không còn key.
    }</span>`;
  } else {
    contentTwo = `<span style="color: red">${words.slice(position)}</span>`; //cắt từ được thay dổi màu
    index = words.length; // độ dài của đoạn văn bản khi không tim thấy khoảng trắng sau khi chạy hết đoạn văn bản
  }
  var contentThree = words.slice(index + key.length);
  var result = contentOne + contentTwo + contentThree; // nối 3 đoạn văn bản lại với nhau
  document.body.innerHTML = result;
  position = index + key.length; // Tăng vị trí bằng độ dài của khóa cộng một
}, 1000);
