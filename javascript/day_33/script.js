var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;

progressBar.addEventListener("mousedown", function (e) {
  offsetX = e.offsetX;
  var rate = (offsetX / progressBarWidth) * 100;
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});

var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";

  var currentTime = (rate / 100) * audio.duration;
  currentTimeEl.innerText = getTimeFormat(currentTime);

  audio.currentTime = currentTime;
};

var audio = document.querySelector("audio");
var duration = 0;
var playerBtn = document.querySelector(".play-btn i");
var playerTimer = document.querySelector(".play-timer");
var currentTimeEl = playerTimer.firstElementChild;
var durationEl = playerTimer.lastElementChild;
var lyricsContainer = document.querySelector(".lyrics");
var lyricsData = {
  err: 0,
  msg: "Success",
  data: {
    sentences: [
      {
        words: [
          {
            startTime: 41169,
            endTime: 41609,
            data: "Cũng",
          },
          {
            startTime: 41619,
            endTime: 41939,
            data: "đã",
          },
          {
            startTime: 41939,
            endTime: 42219,
            data: "lâu",
          },
          {
            startTime: 42229,
            endTime: 42709,
            data: "rồi",
          },
        ],
      },
      {
        words: [
          {
            startTime: 43179,
            endTime: 43579,
            data: "Mình",
          },
          {
            startTime: 43589,
            endTime: 44110,
            data: "không",
          },
          {
            startTime: 44119,
            endTime: 44810,
            data: "thấy",
          },
          {
            startTime: 45030,
            endTime: 45250,
            data: "nhau",
          },
        ],
      },
      {
        words: [
          {
            startTime: 47119,
            endTime: 47500,
            data: "Em",
          },
          {
            startTime: 47500,
            endTime: 47819,
            data: "giờ",
          },
          {
            startTime: 47829,
            endTime: 48209,
            data: "sao",
          },
          {
            startTime: 48839,
            endTime: 49099,
            data: "hạnh",
          },
          {
            startTime: 49099,
            endTime: 49129,
            data: "phúc",
          },
        ],
      },
      {
        words: [
          {
            startTime: 49619,
            endTime: 49900,
            data: "Đắm",
          },
          {
            startTime: 49910,
            endTime: 50460,
            data: "say",
          },
          {
            startTime: 50520,
            endTime: 51279,
            data: "không",
          },
          {
            startTime: 51409,
            endTime: 51779,
            data: "nào",
          },
        ],
      },
      {
        words: [
          {
            startTime: 52500,
            endTime: 52939,
            data: "Bên",
          },
          {
            startTime: 52939,
            endTime: 53209,
            data: "anh",
          },
          {
            startTime: 53229,
            endTime: 53629,
            data: "thì",
          },
          {
            startTime: 53629,
            endTime: 53739,
            data: "mưa",
          },
        ],
      },
      {
        words: [
          {
            startTime: 54409,
            endTime: 55020,
            data: "Bên",
          },
          {
            startTime: 55030,
            endTime: 55479,
            data: "em",
          },
          {
            startTime: 55609,
            endTime: 55930,
            data: "có",
          },
          {
            startTime: 55940,
            endTime: 56440,
            data: "nắng",
          },
          {
            startTime: 56780,
            endTime: 57440,
            data: "chưa",
          },
        ],
      },
      {
        words: [
          {
            startTime: 58139,
            endTime: 58379,
            data: "Bao",
          },
          {
            startTime: 58460,
            endTime: 58850,
            data: "nhiêu",
          },
          {
            startTime: 58850,
            endTime: 59230,
            data: "dư",
          },
          {
            startTime: 59230,
            endTime: 59360,
            data: "thừa",
          },
        ],
      },
      {
        words: [
          {
            startTime: 59829,
            endTime: 60240,
            data: "Chôn",
          },
          {
            startTime: 60389,
            endTime: 60620,
            data: "dấu",
          },
          {
            startTime: 61039,
            endTime: 61370,
            data: "kỷ",
          },
          {
            startTime: 61370,
            endTime: 61629,
            data: "niệm",
          },
          {
            startTime: 61909,
            endTime: 62249,
            data: "xưa",
          },
        ],
      },
      {
        words: [
          {
            startTime: 63649,
            endTime: 64109,
            data: "Giá",
          },
          {
            startTime: 64119,
            endTime: 64429,
            data: "như",
          },
          {
            startTime: 64429,
            endTime: 64859,
            data: "lúc",
          },
          {
            startTime: 64859,
            endTime: 65279,
            data: "này",
          },
        ],
      },
      {
        words: [
          {
            startTime: 65850,
            endTime: 66279,
            data: "Người",
          },
          {
            startTime: 66329,
            endTime: 66479,
            data: "ở",
          },
          {
            startTime: 66729,
            endTime: 67369,
            data: "bên",
          },
          {
            startTime: 67369,
            endTime: 67389,
            data: "anh",
          },
        ],
      },
      {
        words: [
          {
            startTime: 69439,
            endTime: 69839,
            data: "Tựa",
          },
          {
            startTime: 69839,
            endTime: 70379,
            data: "đầu",
          },
          {
            startTime: 70379,
            endTime: 70459,
            data: "gục",
          },
          {
            startTime: 70459,
            endTime: 70479,
            data: "ngã",
          },
        ],
      },
      {
        words: [
          {
            startTime: 71599,
            endTime: 72000,
            data: "Bình",
          },
          {
            startTime: 72000,
            endTime: 72020,
            data: "yên",
          },
          {
            startTime: 72199,
            endTime: 72700,
            data: "trong",
          },
          {
            startTime: 72700,
            endTime: 73030,
            data: "anh",
          },
          {
            startTime: 73030,
            endTime: 73650,
            data: "đến",
          },
          {
            startTime: 73760,
            endTime: 74090,
            data: "lạ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 75279,
            endTime: 75519,
            data: "Yêu",
          },
          {
            startTime: 75519,
            endTime: 75779,
            data: "em",
          },
          {
            startTime: 75789,
            endTime: 76279,
            data: "thật",
          },
          {
            startTime: 76279,
            endTime: 76589,
            data: "nhiều",
          },
        ],
      },
      {
        words: [
          {
            startTime: 77169,
            endTime: 77599,
            data: "Nhưng",
          },
          {
            startTime: 77609,
            endTime: 77859,
            data: "anh",
          },
          {
            startTime: 77869,
            endTime: 78119,
            data: "gặp",
          },
          {
            startTime: 78129,
            endTime: 78289,
            data: "phải",
          },
        ],
      },
      {
        words: [
          {
            startTime: 78589,
            endTime: 78939,
            data: "Đắng",
          },
          {
            startTime: 78949,
            endTime: 79529,
            data: "cay",
          },
          {
            startTime: 79539,
            endTime: 80059,
            data: "bao",
          },
          {
            startTime: 80089,
            endTime: 80450,
            data: "điều",
          },
        ],
      },
      {
        words: [
          {
            startTime: 80660,
            endTime: 80869,
            data: "Gió",
          },
          {
            startTime: 80989,
            endTime: 81389,
            data: "rét",
          },
          {
            startTime: 81449,
            endTime: 81769,
            data: "từng",
          },
          {
            startTime: 81839,
            endTime: 82099,
            data: "cơn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 82929,
            endTime: 83259,
            data: "Cô",
          },
          {
            startTime: 83259,
            endTime: 83510,
            data: "đơn",
          },
          {
            startTime: 83520,
            endTime: 83840,
            data: "siết",
          },
          {
            startTime: 83940,
            endTime: 84370,
            data: "anh",
          },
          {
            startTime: 84480,
            endTime: 84840,
            data: "chặt",
          },
          {
            startTime: 85730,
            endTime: 85760,
            data: "hơn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 86059,
            endTime: 86859,
            data: "Biết",
          },
          {
            startTime: 87119,
            endTime: 87489,
            data: "không",
          },
          {
            startTime: 87489,
            endTime: 87509,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 88479,
            endTime: 88830,
            data: "Đoạn",
          },
          {
            startTime: 88840,
            endTime: 89229,
            data: "đường",
          },
          {
            startTime: 89229,
            endTime: 89439,
            data: "mà",
          },
          {
            startTime: 89439,
            endTime: 89830,
            data: "ta",
          },
          {
            startTime: 89949,
            endTime: 90119,
            data: "qua",
          },
        ],
      },
      {
        words: [
          {
            startTime: 91989,
            endTime: 92349,
            data: "Nhiều",
          },
          {
            startTime: 92349,
            endTime: 92539,
            data: "lúc",
          },
          {
            startTime: 92630,
            endTime: 93010,
            data: "vô",
          },
          {
            startTime: 93099,
            endTime: 93279,
            data: "tâm",
          },
        ],
      },
      {
        words: [
          {
            startTime: 94130,
            endTime: 94390,
            data: "Đôi",
          },
          {
            startTime: 94400,
            endTime: 94900,
            data: "khi",
          },
          {
            startTime: 94900,
            endTime: 95210,
            data: "anh",
          },
          {
            startTime: 95210,
            endTime: 95400,
            data: "vội",
          },
          {
            startTime: 95439,
            endTime: 95910,
            data: "vã",
          },
        ],
      },
      {
        words: [
          {
            startTime: 96949,
            endTime: 97229,
            data: "Đã",
          },
          {
            startTime: 97229,
            endTime: 97659,
            data: "làm",
          },
          {
            startTime: 97659,
            endTime: 97679,
            data: "em",
          },
          {
            startTime: 97879,
            endTime: 98639,
            data: "phải",
          },
          {
            startTime: 98689,
            endTime: 98729,
            data: "buồn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 99789,
            endTime: 100119,
            data: "Đã",
          },
          {
            startTime: 100119,
            endTime: 100539,
            data: "làm",
          },
          {
            startTime: 100539,
            endTime: 100689,
            data: "em",
          },
          {
            startTime: 100699,
            endTime: 101289,
            data: "phải",
          },
          {
            startTime: 101939,
            endTime: 102339,
            data: "đau",
          },
        ],
      },
      {
        words: [
          {
            startTime: 103509,
            endTime: 103880,
            data: "Anh",
          },
          {
            startTime: 103880,
            endTime: 104230,
            data: "xin",
          },
          {
            startTime: 104380,
            endTime: 104490,
            data: "lỗi",
          },
          {
            startTime: 104910,
            endTime: 105740,
            data: "em",
          },
          {
            startTime: 105740,
            endTime: 106010,
            data: "giờ",
          },
          {
            startTime: 106170,
            endTime: 106330,
            data: "nơi",
          },
          {
            startTime: 107230,
            endTime: 107440,
            data: "đâu",
          },
        ],
      },
      {
        words: [
          {
            startTime: 108609,
            endTime: 108849,
            data: "Tay",
          },
          {
            startTime: 109499,
            endTime: 109699,
            data: "anh",
          },
          {
            startTime: 109699,
            endTime: 110089,
            data: "đấy",
          },
          {
            startTime: 110909,
            endTime: 111459,
            data: "sao",
          },
          {
            startTime: 111469,
            endTime: 111639,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 112060,
            endTime: 112459,
            data: "Không",
          },
          {
            startTime: 112459,
            endTime: 112800,
            data: "dắt",
          },
          {
            startTime: 112900,
            endTime: 113310,
            data: "anh",
          },
          {
            startTime: 113369,
            endTime: 113909,
            data: "đi",
          },
          {
            startTime: 113909,
            endTime: 114219,
            data: "cùng",
          },
        ],
      },
      {
        words: [
          {
            startTime: 114899,
            endTime: 115299,
            data: "Chẳng",
          },
          {
            startTime: 115299,
            endTime: 115730,
            data: "cần",
          },
          {
            startTime: 115730,
            endTime: 115819,
            data: "biết",
          },
        ],
      },
      {
        words: [
          {
            startTime: 116379,
            endTime: 116779,
            data: "Bên",
          },
          {
            startTime: 116789,
            endTime: 117349,
            data: "em",
          },
          {
            startTime: 117359,
            endTime: 117809,
            data: "sai",
          },
          {
            startTime: 117809,
            endTime: 118189,
            data: "hoặc",
          },
          {
            startTime: 118189,
            endTime: 118489,
            data: "đúng",
          },
        ],
      },
      {
        words: [
          {
            startTime: 119569,
            endTime: 119809,
            data: "Và",
          },
          {
            startTime: 119959,
            endTime: 120089,
            data: "tìm",
          },
          {
            startTime: 120369,
            endTime: 120619,
            data: "đâu",
          },
          {
            startTime: 120889,
            endTime: 121750,
            data: "thấy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 122299,
            endTime: 122779,
            data: "Hạnh",
          },
          {
            startTime: 123150,
            endTime: 123449,
            data: "phúc",
          },
          {
            startTime: 123459,
            endTime: 123800,
            data: "cho",
          },
          {
            startTime: 123810,
            endTime: 124390,
            data: "riêng",
          },
          {
            startTime: 124610,
            endTime: 124880,
            data: "mình",
          },
        ],
      },
      {
        words: [
          {
            startTime: 126139,
            endTime: 126619,
            data: "Giống",
          },
          {
            startTime: 126629,
            endTime: 127059,
            data: "như",
          },
          {
            startTime: 127059,
            endTime: 127139,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 128199,
            endTime: 128390,
            data: "Cô",
          },
          {
            startTime: 128390,
            endTime: 128610,
            data: "gái",
          },
          {
            startTime: 129120,
            endTime: 129410,
            data: "anh",
          },
          {
            startTime: 129410,
            endTime: 129570,
            data: "từng",
          },
          {
            startTime: 130240,
            endTime: 130530,
            data: "yêu",
          },
        ],
      },
      {
        words: [
          {
            startTime: 170959,
            endTime: 171410,
            data: "Giá",
          },
          {
            startTime: 171419,
            endTime: 171739,
            data: "như",
          },
          {
            startTime: 171739,
            endTime: 172170,
            data: "lúc",
          },
          {
            startTime: 172170,
            endTime: 172520,
            data: "này",
          },
        ],
      },
      {
        words: [
          {
            startTime: 173090,
            endTime: 173609,
            data: "Người",
          },
          {
            startTime: 173639,
            endTime: 173909,
            data: "ở",
          },
          {
            startTime: 173909,
            endTime: 174689,
            data: "bên",
          },
          {
            startTime: 174699,
            endTime: 175039,
            data: "anh",
          },
        ],
      },
      {
        words: [
          {
            startTime: 176879,
            endTime: 177109,
            data: "Tựa",
          },
          {
            startTime: 177109,
            endTime: 177589,
            data: "đầu",
          },
          {
            startTime: 177589,
            endTime: 177799,
            data: "gục",
          },
          {
            startTime: 177809,
            endTime: 178189,
            data: "ngã",
          },
        ],
      },
      {
        words: [
          {
            startTime: 178879,
            endTime: 179339,
            data: "Bình",
          },
          {
            startTime: 179339,
            endTime: 179439,
            data: "yên",
          },
          {
            startTime: 179469,
            endTime: 179999,
            data: "trong",
          },
          {
            startTime: 180009,
            endTime: 180309,
            data: "anh",
          },
          {
            startTime: 180309,
            endTime: 180879,
            data: "đến",
          },
          {
            startTime: 180999,
            endTime: 181419,
            data: "lạ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 182399,
            endTime: 182789,
            data: "Yêu",
          },
          {
            startTime: 182789,
            endTime: 183039,
            data: "em",
          },
          {
            startTime: 183039,
            endTime: 183490,
            data: "thật",
          },
          {
            startTime: 183500,
            endTime: 183720,
            data: "nhiều",
          },
        ],
      },
      {
        words: [
          {
            startTime: 184449,
            endTime: 184919,
            data: "Nhưng",
          },
          {
            startTime: 184929,
            endTime: 185169,
            data: "anh",
          },
          {
            startTime: 185179,
            endTime: 185269,
            data: "gặp",
          },
          {
            startTime: 185269,
            endTime: 185299,
            data: "phải",
          },
        ],
      },
      {
        words: [
          {
            startTime: 185870,
            endTime: 186229,
            data: "Đắng",
          },
          {
            startTime: 186229,
            endTime: 186929,
            data: "cay",
          },
          {
            startTime: 186929,
            endTime: 187399,
            data: "bao",
          },
          {
            startTime: 187399,
            endTime: 187429,
            data: "điều",
          },
        ],
      },
      {
        words: [
          {
            startTime: 187959,
            endTime: 188329,
            data: "Gió",
          },
          {
            startTime: 188329,
            endTime: 188719,
            data: "rét",
          },
          {
            startTime: 188719,
            endTime: 189099,
            data: "từng",
          },
          {
            startTime: 189099,
            endTime: 189219,
            data: "cơn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 190229,
            endTime: 190509,
            data: "Cô",
          },
          {
            startTime: 190509,
            endTime: 190799,
            data: "đơn",
          },
          {
            startTime: 190809,
            endTime: 191179,
            data: "siết",
          },
          {
            startTime: 191189,
            endTime: 191839,
            data: "anh",
          },
          {
            startTime: 191849,
            endTime: 192309,
            data: "chặt",
          },
          {
            startTime: 192309,
            endTime: 192429,
            data: "hơn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 193399,
            endTime: 193760,
            data: "Biết",
          },
          {
            startTime: 193919,
            endTime: 194819,
            data: "không",
          },
          {
            startTime: 194829,
            endTime: 195329,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 195769,
            endTime: 196179,
            data: "Đoạn",
          },
          {
            startTime: 196179,
            endTime: 196499,
            data: "đường",
          },
          {
            startTime: 196509,
            endTime: 196729,
            data: "mà",
          },
          {
            startTime: 196729,
            endTime: 197089,
            data: "ta",
          },
          {
            startTime: 197089,
            endTime: 197449,
            data: "qua",
          },
        ],
      },
      {
        words: [
          {
            startTime: 199329,
            endTime: 199679,
            data: "Nhiều",
          },
          {
            startTime: 199679,
            endTime: 199999,
            data: "lúc",
          },
          {
            startTime: 199999,
            endTime: 200309,
            data: "vô",
          },
          {
            startTime: 200309,
            endTime: 200760,
            data: "tâm",
          },
        ],
      },
      {
        words: [
          {
            startTime: 201359,
            endTime: 201599,
            data: "Đôi",
          },
          {
            startTime: 201619,
            endTime: 202190,
            data: "khi",
          },
          {
            startTime: 202190,
            endTime: 202509,
            data: "anh",
          },
          {
            startTime: 202519,
            endTime: 202819,
            data: "vội",
          },
          {
            startTime: 202819,
            endTime: 203400,
            data: "vã",
          },
        ],
      },
      {
        words: [
          {
            startTime: 204269,
            endTime: 204420,
            data: "Đã",
          },
          {
            startTime: 204609,
            endTime: 205139,
            data: "làm",
          },
          {
            startTime: 205139,
            endTime: 205159,
            data: "em",
          },
          {
            startTime: 205169,
            endTime: 205689,
            data: "phải",
          },
          {
            startTime: 205689,
            endTime: 206099,
            data: "buồn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 206999,
            endTime: 207419,
            data: "Đã",
          },
          {
            startTime: 207419,
            endTime: 207819,
            data: "làm",
          },
          {
            startTime: 207819,
            endTime: 207969,
            data: "em",
          },
          {
            startTime: 207979,
            endTime: 208520,
            data: "phải",
          },
          {
            startTime: 208520,
            endTime: 209049,
            data: "đau",
          },
        ],
      },
      {
        words: [
          {
            startTime: 210789,
            endTime: 211140,
            data: "Anh",
          },
          {
            startTime: 211140,
            endTime: 211530,
            data: "xin",
          },
          {
            startTime: 211650,
            endTime: 212250,
            data: "lỗi",
          },
          {
            startTime: 212250,
            endTime: 213030,
            data: "em",
          },
          {
            startTime: 213040,
            endTime: 213400,
            data: "giờ",
          },
          {
            startTime: 213490,
            endTime: 213729,
            data: "nơi",
          },
          {
            startTime: 214519,
            endTime: 214679,
            data: "đâu",
          },
        ],
      },
      {
        words: [
          {
            startTime: 215939,
            endTime: 216299,
            data: "Tay",
          },
          {
            startTime: 216409,
            endTime: 217019,
            data: "anh",
          },
          {
            startTime: 217019,
            endTime: 217859,
            data: "đấy",
          },
          {
            startTime: 218239,
            endTime: 218719,
            data: "sao",
          },
          {
            startTime: 218719,
            endTime: 218839,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 219309,
            endTime: 219729,
            data: "Không",
          },
          {
            startTime: 219729,
            endTime: 220109,
            data: "dắt",
          },
          {
            startTime: 220119,
            endTime: 220519,
            data: "anh",
          },
          {
            startTime: 220569,
            endTime: 221189,
            data: "đi",
          },
          {
            startTime: 221189,
            endTime: 221439,
            data: "cùng",
          },
        ],
      },
      {
        words: [
          {
            startTime: 222230,
            endTime: 222550,
            data: "Chẳng",
          },
          {
            startTime: 222610,
            endTime: 223000,
            data: "cần",
          },
          {
            startTime: 223000,
            endTime: 223610,
            data: "biết",
          },
          {
            startTime: 223620,
            endTime: 224069,
            data: "bên",
          },
          {
            startTime: 224079,
            endTime: 224179,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 224609,
            endTime: 225069,
            data: "Sai",
          },
          {
            startTime: 225069,
            endTime: 225309,
            data: "hoặc",
          },
          {
            startTime: 225449,
            endTime: 225859,
            data: "đúng",
          },
        ],
      },
      {
        words: [
          {
            startTime: 226759,
            endTime: 226979,
            data: "Và",
          },
          {
            startTime: 227239,
            endTime: 227649,
            data: "tìm",
          },
          {
            startTime: 227659,
            endTime: 228189,
            data: "đâu",
          },
          {
            startTime: 228189,
            endTime: 228400,
            data: "thấy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 229419,
            endTime: 229929,
            data: "Hạnh",
          },
          {
            startTime: 230009,
            endTime: 230699,
            data: "phúc",
          },
          {
            startTime: 230709,
            endTime: 230939,
            data: "cho",
          },
          {
            startTime: 231009,
            endTime: 231399,
            data: "riêng",
          },
          {
            startTime: 231859,
            endTime: 232429,
            data: "mình",
          },
        ],
      },
      {
        words: [
          {
            startTime: 233449,
            endTime: 233910,
            data: "Giống",
          },
          {
            startTime: 233920,
            endTime: 234309,
            data: "như",
          },
          {
            startTime: 234309,
            endTime: 234329,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 235459,
            endTime: 235689,
            data: "Cô",
          },
          {
            startTime: 235689,
            endTime: 235829,
            data: "gái",
          },
          {
            startTime: 236219,
            endTime: 236640,
            data: "anh",
          },
          {
            startTime: 236650,
            endTime: 237130,
            data: "từng",
          },
          {
            startTime: 237520,
            endTime: 237690,
            data: "yêu",
          },
        ],
      },
      {
        words: [
          {
            startTime: 238220,
            endTime: 240550,
            data: "Biết không anh ",
          },
        ],
      },
      {
        words: [
          {
            startTime: 241009,
            endTime: 241269,
            data: "Đoạn",
          },
          {
            startTime: 241369,
            endTime: 241909,
            data: "đường",
          },
          {
            startTime: 241909,
            endTime: 242029,
            data: "mà",
          },
          {
            startTime: 242769,
            endTime: 243049,
            data: "ta",
          },
          {
            startTime: 243369,
            endTime: 243459,
            data: "qua",
          },
        ],
      },
      {
        words: [
          {
            startTime: 244519,
            endTime: 244879,
            data: "Nhiều",
          },
          {
            startTime: 244879,
            endTime: 245209,
            data: "lúc",
          },
          {
            startTime: 245209,
            endTime: 245539,
            data: "vô",
          },
          {
            startTime: 245619,
            endTime: 245769,
            data: "tâm",
          },
        ],
      },
      {
        words: [
          {
            startTime: 246649,
            endTime: 246809,
            data: "Đôi",
          },
          {
            startTime: 246879,
            endTime: 247149,
            data: "khi",
          },
          {
            startTime: 247350,
            endTime: 247689,
            data: "em",
          },
          {
            startTime: 247689,
            endTime: 248080,
            data: "vội",
          },
          {
            startTime: 248090,
            endTime: 248479,
            data: "vã",
          },
        ],
      },
      {
        words: [
          {
            startTime: 249429,
            endTime: 249749,
            data: "Đã",
          },
          {
            startTime: 249749,
            endTime: 250199,
            data: "làm",
          },
          {
            startTime: 250199,
            endTime: 250419,
            data: "anh",
          },
          {
            startTime: 250439,
            endTime: 250990,
            data: "phải",
          },
          {
            startTime: 250990,
            endTime: 251020,
            data: "buồn",
          },
        ],
      },
      {
        words: [
          {
            startTime: 252239,
            endTime: 252620,
            data: "Đã",
          },
          {
            startTime: 252620,
            endTime: 253000,
            data: "làm",
          },
          {
            startTime: 253000,
            endTime: 253200,
            data: "anh",
          },
          {
            startTime: 253210,
            endTime: 253760,
            data: "phải",
          },
          {
            startTime: 254750,
            endTime: 254860,
            data: "đau",
          },
        ],
      },
      {
        words: [
          {
            startTime: 256210,
            endTime: 256420,
            data: "Em",
          },
          {
            startTime: 256420,
            endTime: 256570,
            data: "xin",
          },
          {
            startTime: 256570,
            endTime: 256600,
            data: "lỗi",
          },
          {
            startTime: 257850,
            endTime: 258039,
            data: "anh",
          },
          {
            startTime: 258179,
            endTime: 258419,
            data: "giờ",
          },
          {
            startTime: 258709,
            endTime: 258809,
            data: "nơi",
          },
          {
            startTime: 258809,
            endTime: 258839,
            data: "đâu",
          },
        ],
      },
      {
        words: [
          {
            startTime: 261649,
            endTime: 261669,
            data: "Tay",
          },
          {
            startTime: 261669,
            endTime: 261689,
            data: "anh",
          },
          {
            startTime: 262189,
            endTime: 262570,
            data: "đấy",
          },
          {
            startTime: 263419,
            endTime: 263859,
            data: "sao",
          },
          {
            startTime: 263879,
            endTime: 264179,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 264560,
            endTime: 264889,
            data: "Không",
          },
          {
            startTime: 264909,
            endTime: 265259,
            data: "dắt",
          },
          {
            startTime: 265269,
            endTime: 265889,
            data: "anh",
          },
          {
            startTime: 265889,
            endTime: 266359,
            data: "đi",
          },
          {
            startTime: 266439,
            endTime: 266589,
            data: "cùng",
          },
        ],
      },
      {
        words: [
          {
            startTime: 267389,
            endTime: 267779,
            data: "Chẳng",
          },
          {
            startTime: 267779,
            endTime: 268179,
            data: "cần",
          },
          {
            startTime: 268179,
            endTime: 268820,
            data: "biết",
          },
          {
            startTime: 268879,
            endTime: 269269,
            data: "bên",
          },
          {
            startTime: 269269,
            endTime: 269369,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 269790,
            endTime: 270239,
            data: "Sai",
          },
          {
            startTime: 270249,
            endTime: 270600,
            data: "hoặc",
          },
          {
            startTime: 270610,
            endTime: 271060,
            data: "đúng",
          },
        ],
      },
      {
        words: [
          {
            startTime: 272019,
            endTime: 272190,
            data: "Và",
          },
          {
            startTime: 272400,
            endTime: 272690,
            data: "tìm",
          },
          {
            startTime: 272810,
            endTime: 273390,
            data: "đâu",
          },
          {
            startTime: 273390,
            endTime: 273710,
            data: "thấy",
          },
        ],
      },
      {
        words: [
          {
            startTime: 274819,
            endTime: 275309,
            data: "Hạnh",
          },
          {
            startTime: 275649,
            endTime: 275899,
            data: "phúc",
          },
          {
            startTime: 275899,
            endTime: 276229,
            data: "cho",
          },
          {
            startTime: 276239,
            endTime: 276820,
            data: "riêng",
          },
          {
            startTime: 276820,
            endTime: 276850,
            data: "mình",
          },
        ],
      },
      {
        words: [
          {
            startTime: 278599,
            endTime: 279139,
            data: "Giống",
          },
          {
            startTime: 279139,
            endTime: 279289,
            data: "như",
          },
          {
            startTime: 279289,
            endTime: 279309,
            data: "em",
          },
        ],
      },
      {
        words: [
          {
            startTime: 280699,
            endTime: 280890,
            data: "Cô",
          },
          {
            startTime: 280890,
            endTime: 281050,
            data: "gái",
          },
          {
            startTime: 281539,
            endTime: 281860,
            data: "anh",
          },
          {
            startTime: 281930,
            endTime: 282369,
            data: "từng",
          },
          {
            startTime: 282589,
            endTime: 282929,
            data: "yêu",
          },
        ],
      },
      {
        words: [
          {
            startTime: 293620,
            endTime: 293799,
            data: "Đã",
          },
          {
            startTime: 293999,
            endTime: 294279,
            data: "bao",
          },
          {
            startTime: 294279,
            endTime: 294499,
            data: "lâu",
          },
          {
            startTime: 294569,
            endTime: 294859,
            data: "rồi",
          },
        ],
      },
      {
        words: [
          {
            startTime: 296339,
            endTime: 296690,
            data: "Chẳng",
          },
          {
            startTime: 296729,
            endTime: 296759,
            data: "thấy",
          },
          {
            startTime: 297189,
            endTime: 297249,
            data: "mở",
          },
          {
            startTime: 297249,
            endTime: 297299,
            data: "lời",
          },
        ],
      },
      {
        words: [
          {
            startTime: 300030,
            endTime: 300069,
            data: "Em",
          },
          {
            startTime: 300099,
            endTime: 300489,
            data: "sẽ",
          },
          {
            startTime: 300489,
            endTime: 300529,
            data: "quên",
          },
        ],
      },
    ],
  },
};

var setDuration = function () {
  duration = audio.duration;
  durationEl.innerText = getTimeFormat(duration);
};

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  var secs = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
};

var updateLyrics = function (currentTime) {
  var currentLyric = "";
  for (var time in lyricsData) {
    if (currentTime >= time) {
      currentLyric = lyricsData[time];
    } else {
      break;
    }
  }
  lyricsContainer.innerText = currentLyric;
};

window.addEventListener("load", function () {
  setDuration();

  playerBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener("play", function () {
    playerBtn.classList.replace("fa-play", "fa-pause");
  });

  audio.addEventListener("pause", function () {
    playerBtn.classList.replace("fa-pause", "fa-play");
  });

  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    var rate = (currentTime / duration) * 100;
    progress.style.width = `${rate}%`;
    currentTimeEl.innerText = getTimeFormat(currentTime);
    updateLyrics(currentTime);
  });
});
