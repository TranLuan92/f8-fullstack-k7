//--------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");

  let draggedItem = null;

  // Thêm thuộc tính draggable vào mỗi item và xử lý sự kiện Drag and Drop
  items.forEach((item) => {
    item.draggable = true;

    // Xử lý sự kiện kéo (drag start)
    item.addEventListener("dragstart", function () {
      draggedItem = item;
      setTimeout(function () {
        item.style.display = "none"; // Ẩn item khi bắt đầu kéo
      }, 0);
    });

    // Xử lý sự kiện kéo thả vào vị trí mới (drag over)
    item.addEventListener("dragover", function (e) {
      e.preventDefault(); // Ngăn chặn hành động mặc định
    });

    // Xử lý sự kiện thả (drop)
    item.addEventListener("drop", function () {
      // Thêm item vào vị trí mới
      this.parentNode.insertBefore(draggedItem, this);
    });

    // Xử lý sự kiện kết thúc kéo (drag end)
    item.addEventListener("dragend", function () {
      setTimeout(function () {
        draggedItem.style.display = "block"; // Hiển thị lại item sau khi kéo
        draggedItem = null;
      }, 0);
    });
  });
});
//-------------------------------------------------------------------------
