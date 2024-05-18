document.write(`bài 1 : Cho một số nguyên n, trả về số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n.
<br/>`);
var n = 3;
function smalLestNumberOfParallels(n) {
  function isPrime(number) {
    if (number < 2) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  function isNumberRev(num) {
    let numberString = num.toString();
    return numberString === numberString.split("").reverse().join("");
  }
  for (var i = n; ; i++) {
    if (isPrime(i) && isNumberRev(i)) {
      return i;
    }
  }
}
document.write(
  `- Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n là:`,
  smalLestNumberOfParallels(n)
);
//_________________
//
document.write(
  `<br/><br/>Bài 2: Cho hai mảng đã sắp xếp nums1 và nums2 có kích thước lần lượt là m và n, trả về trung vị của hai mảng đã sắp xếp đó.`
);
var numS1 = [1, 5, 9];
var numS2 = [2, 4];
var unifyArr = numS1.concat(numS2);
function arrange(unifyArr) {
  unifyArr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
  });
  return unifyArr;
}
//_______________________________________________
function numberArr(unifyArr) {
  document.write(`<br/>Hai mảng đã sắp xếp : `, arrange(unifyArr));
  var lengthUnifyArr = unifyArr.length;
  var index = Math.floor(lengthUnifyArr / 2);
  if (lengthUnifyArr % 2 === 0) {
    //lấy vị trí của 2 phần tử giữa mảng nếu tổng số phần tử trong mảng là chẵn.
    return (unifyArr[index - 1] + unifyArr[index]) / 2;
  } else {
    //lấy phần tử ở giữa mảng nếu tổng số phần tử trong mảng là lẻ.
    return unifyArr[index];
  }
}
document.write(`<br/>Trung vị của 2 mảng là : `, numberArr(unifyArr));
//___________________________________________________
document.write(
  `<br/><br/> Bài 3 : Cho một mảng số nguyên chưa được sắp xếp nums. Hãy trả về số nguyên dương nhỏ nhất không có trong nums. `
);
var minNumber = 1;
var minNumberAr = function (unifyArr) {
  for (let index in unifyArr) {
    if (unifyArr[index] === minNumber) {
      minNumber++;
    }
  }
  return minNumber;
};
document.write(
  `<br/>- Số nguyên dương nhỏ nhất không có trong mảng là :`,
  minNumberAr(unifyArr)
);
