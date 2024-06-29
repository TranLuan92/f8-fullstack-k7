let btnTxt = document.querySelector(".txt-btn");
let btnPdf = document.querySelector(".pdf-btn");
let btnNew = document.querySelector(".new-btn");
let dropDown = document.querySelector(".btn-primary");
let dropDownMenu = document.querySelector(".dropdown-menu");

//---------------------------------------------------------
//show and hidden dropdownMenu
let isDropDown = false;
dropDown.addEventListener("click", function (event) {
  let eventEL = event.target;
  //   console.log("event: ", eventEL);
  if (eventEL.classList.contains("btn-primary")) {
    if (!isDropDown) {
      dropDownMenu.style.display = "block";
      //   isDropDown = true;
      //   console.log("on");
    } else {
      //   console.log("off");
      dropDownMenu.style.display = "none";
      isDropDown = false;
    }
  }
});

document.addEventListener("click", function (event) {
  if (!dropDown.contains(event.target)) {
    dropDownMenu.style.display = "none";
    isDropdownVisible = false;
  }
});
//-----------------------------------------------------------------
//display style letter (bol, italic, underline)
let isBold = false;
let isItalic = false;
let isUnderLine = false;
function displayLetterStyle() {
  let controlBtnContainer = document.querySelector(
    ".controls .control-btn-container"
  );
  let content = document.querySelector("#content");
  controlBtnContainer.addEventListener("click", function (event) {
    let classEvent = event.target;
    if (
      classEvent.id === "bold-btn" ||
      classEvent.classList.contains("span_bold")
    ) {
      isBold = !isBold; // convert style letters
      content.style.fontWeight = isBold ? "900" : "normal"; // letters bold
    }
    if (
      classEvent.id === "underline-btn" ||
      classEvent.classList.contains("span_underline")
    ) {
      isUnderLine = !isUnderLine;
      content.style.textDecoration = isUnderLine ? "underline" : "none"; // letters underline
    }
    if (
      classEvent.id === "italic-btn" ||
      classEvent.classList.contains("span_italic")
    ) {
      isItalic = !isItalic;
      content.style.fontStyle = isItalic ? "italic" : "normal"; // letters italic
    }
  });
}
displayLetterStyle();
function countLetter() {
  let content = document.querySelector("#content");
  let charCount = document.querySelector(".char_count");
  let word = document.querySelector(".word");
  content.addEventListener("input", function () {
    let letter = content.innerText;
    charCount.textContent = `Số ký tự :  ${letter.length}`;
    let wordsAr = letter.split(" ");
    wordsAr.filter(function () {
      if (wordsAr.length > 0 && letter) {
        word.textContent = ` Số từ : ${wordsAr.length}`;
      } else {
        word.textContent = ` Số từ : ${wordsAr.length - 1}`;
      }
    });
  });
}
countLetter();
//------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const inputData = document.querySelector("#input_data");
  const content = document.querySelector("#content");

  function generatePDF() {
    content.addEventListener("input", function () {
      var contentHtml = content.innerHTML; // Sử dụng innerHTML thay vì innerText
      var options = {
        margin: 1,
        filename: `${inputData.value}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().set(options).from(contentHtml).save();
    });
  }

  generatePDF();
});
