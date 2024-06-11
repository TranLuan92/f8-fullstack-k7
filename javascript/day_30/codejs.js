function voiceRecording() {
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Trình duyệt của bạn không hỗ trợ tính năng nhận dạng giọng nói.");
    return;
  }

  var recognition = new SpeechRecognition();
  recognition.lang = "vi-VN"; // Thiết lập ngôn ngữ cho nhận dạng là tiếng Việt

  recognition.onresult = function (event) {
    var convertToText = event.results[0][0].transcript.toLowerCase();
    performAction(convertToText);
  };

  recognition.onerror = function (event) {
    alert("Đã xảy ra lỗi xin vui lòng thử lại sau ! : " + event.error);
  };

  recognition.start();
}

function performAction(convertToText) {
  if (convertToText.includes("google")) {
    window.open("https://www.google.com", "_blank");
  } else if (convertToText.includes("facebook")) {
    window.open("https://www.facebook.com", "_blank");
  } else if (convertToText.includes("youtube")) {
    window.open("https://www.youtube.com", "_blank");
  } else if (convertToText.includes("google drive")) {
    window.open("https://drive.google.com", "_blank");
  } else if (
    convertToText.includes("google maps") ||
    convertToText.includes("bản đồ")
  ) {
    if (
      convertToText.includes("chỉ đường") ||
      convertToText.includes("đường tới") ||
      convertToText.includes("tới")
    ) {
      var locationName = locationProcess(convertToText);
      if (locationName) {
        window.open(
          `https://www.google.com/maps/dir//${locationName}`,
          "_blank"
        );
      } else {
        alert("Vui lòng cung cấp địa điểm đến!");
      }
    } else {
      window.open("https://maps.google.com", "_blank");
    }
  } else if (convertToText.includes("video")) {
    var videoName = video(convertToText);
    if (videoName) {
      window.open(
        `https://www.youtube.com/results?search_query=${videoName}`,
        "_blank"
      );
    } else {
      alert("Vui lòng cung cấp tên video cần tìm!");
    }
  } else {
    alert("Không thực hiện được yêu cầu.");
  }
}

function locationProcess(convertToText) {
  var keywords = ["chỉ đường", "đường tới", "tới"];
  var locationName = convertToText;
  keywords.forEach(function (keyword) {
    locationName = locationName.replace(keyword, "");
  });
  return locationName.trim();
}

function video(convertToText) {
  var keyword = "video";
  var videoName = convertToText.replace(keyword, "").trim();
  if (videoName.startsWith("mở"))
    videoName = videoName.replace("mở", "").trim();
  return videoName;
}

document.querySelector(".btn").addEventListener("click", function () {
  voiceRecording();
});
