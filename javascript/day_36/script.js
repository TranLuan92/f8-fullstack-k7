document.addEventListener("DOMContentLoaded", function () {
  var countElement = document.querySelector(".count");
  var getLinkElement = document.getElementById("getLink");

  var count = parseInt(countElement.textContent);
  var startTime;

  function countdown(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    var elapsedTime = timestamp - startTime;
    var secondsPassed = Math.floor(elapsedTime / 1000);
    var remainingSeconds = count - secondsPassed;

    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      countElement.textContent = remainingSeconds;
      getLinkElement.classList.add("active");
      getLinkElement.addEventListener("click", function (event) {
        event.preventDefault();
        redirectToNextPage();
      });
    } else {
      countElement.textContent = remainingSeconds;
      requestAnimationFrame(countdown);
    }
  }

  function redirectToNextPage() {
    window.location.href =
      "https://fullstack-nodejs.fullstack.edu.vn/?id=4278f92b-967f-42a5-aef7-161e2a59b37d";
  }

  requestAnimationFrame(countdown); // Bắt đầu đếm ngược
});
