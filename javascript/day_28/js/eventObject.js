var btnTaskContent = document.querySelector(".add_task");
var checkErrorInput = document.querySelector(".check_error_input");
var contentEl = document.querySelector(".content_task");
var listContent = document.querySelector(".list_content");
var form = document.querySelector(".box_add_task");
var boxList = document.querySelector(".list");
var check_error_input = document.querySelector(".check_error_input");
//--------------------------------------------------------------------
// var textContent = document.querySelector(".text-content");
// var editTask = document.querySelector(".edit");
var editData = document.querySelector(".edit_task");
//___________________button ___________________________________

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var valueS = contentEl.value;
  contentEl.value = "";

  if (valueS.trim()) {
    checkErrorInput.innerText = "";
    elementValue(valueS);
  } else {
    checkErrorInput.innerText = "Xin vui lòng nhập thông tin công việc!";
  }
});
//_________________Check Error____________________
function checkError() {
  console.log(contentEl.value);
  if (!contentEl.value) {
    checkErrorInput.innerText = "Xin vui lòng nhập thông tin công việc!";
  } else {
    checkErrorInput.innerText = "";
  }
}
contentEl.addEventListener("input", checkError);
contentEl.addEventListener("blur", checkError);
//______________________________________________________

function elementValue(data) {
  var task = document.createElement("li");
  task.classList.add("list_content");
  var divContent = document.createElement("div");
  divContent.classList.add("task_content");
  var updateContent = document.createElement("p");
  updateContent.classList.add("text-content");
  updateContent.innerText = data;
  //--------------------------------------------
  var inputEditData = document.createElement("input");
  inputEditData.value = data;
  inputEditData.classList.add("edit");
  inputEditData.classList.add("close");
  //------------------------------------------------
  divContent.appendChild(updateContent);

  var boxLink = document.createElement("div");
  boxLink.classList.add("icon");
  var btn = document.createElement("a");
  btn.classList.add("btn");
  //_______________________Edit Task ________________________
  var btnEditTaskContent = document.createElement("a");
  btnEditTaskContent.classList.add("fa-regular");
  btnEditTaskContent.classList.add("fa-pen-to-square");
  btnEditTaskContent.classList.add("edit_task");

  btnEditTaskContent.addEventListener("click", function () {
    inputEditData.classList.replace("close", "open");
    updateContent.remove();
    deleteTask.remove();
    btnEditTaskContent.remove();
    inputEditData.style.background = "white";
    inputEditData.style.color = "black";
    boxLink.appendChild(btn);
    btn.innerHTML = "Add Task";
  });
  btn.addEventListener("click", function () {
    btn.remove();
    updateContent.innerText = inputEditData.value;
    boxLink.appendChild(btnEditTaskContent);
    boxLink.appendChild(deleteTask);
    inputEditData.classList.replace("open", "close");
    divContent.appendChild(updateContent);
    updateContent.classList.remove("line_through");
  });

  updateContent.addEventListener("click", function () {
    updateContent.classList.add("line_through");
  });
  //_______________________delete Task ________________________

  var deleteTask = document.createElement("a");
  deleteTask.classList.add("fa-regular");
  deleteTask.classList.add("fa-trash-can");
  deleteTask.classList.add("delete_task");

  deleteTask.addEventListener("click", function () {
    task.remove();
  });
  //_______________________________________________________________

  //_____________________________________________
  boxLink.appendChild(btnEditTaskContent);
  boxLink.appendChild(deleteTask);

  boxList.appendChild(task);
  divContent.appendChild(inputEditData);

  task.appendChild(divContent);
  task.appendChild(boxLink);
}
