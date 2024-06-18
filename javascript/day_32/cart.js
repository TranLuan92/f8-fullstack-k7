var products = [
  { stt: 1, name: "sản phẩm 1", price: 1000 },
  { stt: 2, name: "sản phẩm 2", price: 2000 },
  { stt: 3, name: "sản phẩm 3", price: 3000 },
  { stt: 4, name: "sản phẩm 4", price: 4000 },
];

var table = document.createElement("table");
var title = ["STT", "Tên sản phẩm", "Giá sản phẩm", "Thêm vào giỏ hàng"];
function createTable() {
  var rowTitle = table.insertRow();
  title.forEach(function (value) {
    var tableTh = document.createElement("th");
    tableTh.innerText = value;
    rowTitle.appendChild(tableTh);
  });
  document.querySelector(".table-container").append(table);
}
createTable();
//-------------------------------------------------------------
var productAddToCart = [];
products.forEach(function (product, index) {
  var row = table.insertRow();
  Object.values(product).forEach(function (key, index) {
    var cell = row.insertCell();
    cell.innerText = key;
  });
  var cellLast = row.insertCell();
  var input = document.createElement("input");
  input.min = 0;
  input.type = "number";
  var button = document.createElement("button");
  button.innerText = "Thêm vào giỏ";
  cellLast.appendChild(input); // thêm input cột cuối cùng
  cellLast.appendChild(button); //thêm button cột cuối cùng
  button.addEventListener("click", function () {
    if (input.value < 1) {
      console.log("Chưa có số lượng sản phẩm !");
    }
    var productData = products[index];
    var totalMoney = productData.price * input.value;
    var quantity = input.value;
    productData.quantity = quantity;
    productData.totalMoney = totalMoney;
    productAddToCart.push(productData);
    // console.log(productAddToCart);
    addTable();
  });
});
var tableShopping = document.createElement("table");
var titleShoppingCart = [
  "STT",
  "Tên sản phẩm",
  "Giá sản phẩm",
  "Số lượng",
  "Thành tiền",
  "Xóa",
];
function addTable() {
  // Xóa nội dung trước đó trong tableShopping (nếu có)
  tableShopping.innerHTML = "";

  // Tạo hàng tiêu đề của bảng
  var headerRow = tableShopping.insertRow();
  titleShoppingCart.forEach(function (title) {
    var th = document.createElement("th");
    th.innerText = title;
    headerRow.appendChild(th);
  });

  // Tạo các hàng cho từng sản phẩm
  productAddToCart.forEach(function (prod, index) {
    var rowShopping = tableShopping.insertRow();
    Object.values(prod).forEach(function (value, idx) {
      var cell = rowShopping.insertCell();
      if (idx === 3) {
        var input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.value = value;
        cell.appendChild(input);
      } else {
        cell.innerText = value;
      }
    });

    // Thêm nút xóa
    var deleteCell = rowShopping.insertCell();
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Xóa";
    deleteButton.addEventListener("click", function () {
      // Xử lý sự kiện xóa sản phẩm
      productAddToCart.splice(index, 1); // Xóa sản phẩm khỏi mảng productAddToCart
      addTable(); // Làm mới lại bảng sau khi xóa
    });
    deleteCell.appendChild(deleteButton);
  });

  // Thêm bảng vào container
  document.querySelector(".table-container").appendChild(tableShopping);
}
