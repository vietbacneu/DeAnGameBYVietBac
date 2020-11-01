const btnStart = document.querySelector(".btn-start");
const startGame = document.querySelector(".startGame");
const playGame = document.querySelector(".playGame");
const endGame = document.querySelector(".endGame");
const startMusic = document.querySelector("#start-music");
const ingameMusic = document.querySelector("#ingame-music");
const question = document.querySelector(".ques");
const answer = document.querySelectorAll(".answer");
const scoreMoney = document.querySelectorAll(".scoreMoney");
const money = document.querySelectorAll(".money");
const timeDown = document.querySelector(".CountDown");
const totalMoney = document.querySelector(".end");
const helpBy5050 = document.querySelectorAll(".helpitem")[0];
const helpByLooker = document.querySelectorAll(".helpitem")[1];
const resultSupport = document.querySelector(".result");
const winMusic = document.querySelector("#success-music");
const failMusic = document.querySelector("#failed-music");
const endMusic = document.querySelector("#endgame-music");
const reload = document.querySelector(".reset");
const help5050Music = document.querySelector("#help-5050-music");
const helpLookerMusic = document.querySelector("#help-looker-music");
const highScore = document.querySelector(".btn-hightscore");
const highScoreDisplay = document.querySelector(".highScore");
const name = document.querySelector("input");
const idhighScore = document.querySelectorAll(".idhighScore");
const moneyid = document.querySelectorAll(".moneyid");
const donvi = document.querySelectorAll(".donvi");
startMusic.play();
let arrayUser = [{ id: "NoName", money: "0", donvi: "$" }];
if (JSON.parse(localStorage.getItem("array"))) {
  arrayUser = JSON.parse(localStorage.getItem("array"));
}
arrayUser = arrayUser.sort(function (a, b) {
  return b.money - a.money;
});
let countDown = 60;
let timeout = 0;
function display() {
  timeDown.innerText = `${countDown}s`;
  highScoreDisplay.style.display = "none";
  playGame.style.display = "none";
  endGame.style.display = "none";
}
display();
function Time() {
  timeout = setInterval(function () {
    countDown--;
    if (countDown > 10) {
      timeDown.innerText = `${countDown}s`;
      timeDown.style.color = "white";
    } else if (0 < countDown <= 10) {
      timeDown.innerText = `${countDown}s`;
      timeDown.style.color = "red";
    }
    if (countDown == 0) {
      clearInterval(timeout);
      endGame.style.display = "block";
      playGame.style.display = "none";
    }
  }, 1000);
}
function idHighScore() {
  let lengthUser = 0;
  if (arrayUser.length > 15) {
    lengthUser = 15;
  } else {
    lengthUser = arrayUser.length;
  }
  for (let i = 0; i < lengthUser; i++) {
    idhighScore[i].innerText = arrayUser[i].id;
    moneyid[i].innerText = arrayUser[i].money;
    donvi[i].innerText = arrayUser[i].donvi;
  }
}
highScore.addEventListener("click", function () {
  highScoreDisplay.style.display = "block";
  startGame.style.display = "none";

  idHighScore();
});
btnStart.addEventListener("click", function () {
  startGame.style.display = "none";
  playGame.style.display = "grid";
  startMusic.pause();
  ingameMusic.play();
  startMusic.load();
  setTimeout(function () {
    Time();
  }, 500);
});
let arrayQues = [
  [
    {
      question:
        "Có một tàu điện đi về hướng nam. Gió hướng tây bắc. Vậy khói từ con tàu sẽ theo hướng nào?",
      answerResult: ["Đông", "Tây", "Bắc", "Không hướng nào"],
      correct: 3,
    },
    {
      question:
        "Làm thế nào để không đụng phải ngón tay khi bạn đập búa vào một cái móng tay?",
      answerResult: [
        "Cầm búa bằng cả 2 tay",
        "Cầm búa bằng tay trái",
        "Cầm búa bằng tay phải",
        "Cầm búa bằng chân",
      ],
      correct: 0,
    },
  ],
  [
    {
      question:
        "Nếu bạn nhìn thấy con chim đang đậu trên nhánh cây, làm sao để lấy nhánh cây mà không làm động con chim? ",
      answerResult: [
        "Bắt chim bỏ ra ngoài",
        "Đợi chim bay đi.",
        "Ru chim ngủ rồi lấy",
        "Cứ đến mà lấy",
      ],
      correct: 1,
    },
    {
      question: "Miệng rộng lớn nhưng không nói một từ, là con gì?",
      answerResult: ["Con cá voi", "Con khỉ đột", "Con sông", "Con voi"],
      correct: 2,
    },
  ],
  [
    {
      question: "Loại nước giải khát nào chứa Canxi và Sắt?",
      answerResult: ["CoCa", "Pepsi", "Cafe", "Sinh tố"],
      correct: 2,
    },
    {
      question: "Cái gì bạn không mượn mà trả?      ",
      answerResult: ["Tiền", "Lời cảm ơn", "Tình", "Không có thứ gì"],
      correct: 1,
    },
  ],
  [
    {
      question:
        "Vào lúc nửa đêm đồng hồ bất chợt gõ 13 tiếng, chuyện gì xảy ra?",
      answerResult: [
        "Có ma",
        "Chuyện xấu sẽ đến        ",
        "Ngày tận thế",
        "Mang đồng hồ đi sửa",
      ],
      correct: 3,
    },
    {
      question: "Cái gì luôn đi đến mà không bao giờ đến nơi?      ",
      answerResult: [
        "Cơn gió",
        "Tình yêu",
        "Ngày mai",
        " Không biết là cái gì",
      ],
      correct: 2,
    },
  ],
  [
    {
      question:
        "Tìm điểm sai trong câu: 'Dưới ánh nắng sương long lanh triệu cành hồng khoe sắc thắm'",
      answerResult: [
        "Triệu cành hồng",
        "Ánh nắng sương ",
        " Khoe sắc thắm",
        "Sương long lanh",
      ],
      correct: 2,
    },
    {
      question: "8 chia 4 = ? ",
      answerResult: ["1/4", "1/2", "3/4", "4/3"],
      correct: 3,
    },
  ],
  [
    {
      question: "Một anh thanh niên đánh 1 bà già hỏi anh ấy mất gì?",
      answerResult: ["Mất tiền", "Mất trí", " Mất sức", "Mất dạy"],
      correct: 3,
    },
    {
      question:
        "Có 2 người cha và 2 người con cùng chia đều số tiền là 27 nghìn. Hỏi mỗi người được bao nhiều?",
      answerResult: ["6,75", " 7", "7,5", "9"],
      correct: 3,
    },
  ],
  [
    {
      question: "Cái gì mà đi thì nằm, đứng cũng nằm, nhưng nằm lại đứng?",
      answerResult: [" Cái bàn", "Cái ghế", "Bàn chân", "Bàn tay"],
      correct: 2,
    },
    {
      question:
        "Có 2 người cha và 2 người con cùng chia đều số tiền là 27 nghìn. Hỏi mỗi người được bao nhiều?",
      answerResult: ["6,75", " 7", "7,5", "9"],
      correct: 3,
    },
  ],
  [
    {
      question:
        "Chồng người da đen, vợ người da trắng vừa sinh một đứa bé, răng của nó màu gì?",
      answerResult: ["Trắng", "Đen", "Vàng", "Không có màu"],
      correct: 3,
    },
    {
      question:
        "Bố mẹ có 6 người con trai, mỗi người con trai có một đứa em gái. Vậy gia đình đó có mấy người?",
      answerResult: ["8", " 9", "10", "12"],
      correct: 1,
    },
  ],
  [
    {
      question: "Một anh thanh niên đánh 1 bà già hỏi anh ấy mất gì?",
      answerResult: ["Mất tiền", "Mất trí", " Mất sức", "Mất dạy"],
      correct: 3,
    },
    {
      question:
        "Có 2 người cha và 2 người con cùng chia đều số tiền là 27 nghìn. Hỏi mỗi người được bao nhiều?",
      answerResult: ["6,75", " 7", "7,5", "9"],
      correct: 3,
    },
  ],
  [
    {
      question:
        "Nếu bạn nhìn thấy con chim đang đậu trên nhánh cây, làm sao để lấy nhánh cây mà không làm động con chim? ",
      answerResult: [
        "Bắt chim bỏ ra ngoài",
        "Đợi chim bay đi.",
        "Ru chim ngủ rồi lấy",
        "Cứ đến mà lấy",
      ],
      correct: 1,
    },
    {
      question: "Miệng rộng lớn nhưng không nói một từ, là con gì?",
      answerResult: ["Con cá voi", "Con khỉ đột", "Con sông", "Con voi"],
      correct: 2,
    },
  ],
  [
    {
      question:
        "Nếu bạn nhìn thấy con chim đang đậu trên nhánh cây, làm sao để lấy nhánh cây mà không làm động con chim? ",
      answerResult: [
        "Bắt chim bỏ ra ngoài",
        "Đợi chim bay đi.",
        "Ru chim ngủ rồi lấy",
        "Cứ đến mà lấy",
      ],
      correct: 1,
    },
    {
      question: "Miệng rộng lớn nhưng không nói một từ, là con gì?",
      answerResult: ["Con cá voi", "Con khỉ đột", "Con sông", "Con voi"],
      correct: 2,
    },
  ],
  [
    {
      question: "Loại nước giải khát nào chứa Canxi và Sắt?",
      answerResult: ["CoCa", "Pepsi", "Cafe", "Sinh tố"],
      correct: 1,
    },
    {
      question: "Cái gì bạn không mượn mà trả?      ",
      answerResult: ["Tiền", "Lời cảm ơn", "Tình", "Không có thứ gì"],
      correct: 1,
    },
  ],
  [
    {
      question:
        "Tìm điểm sai trong câu: 'Dưới ánh nắng sương long lanh triệu cành hồng khoe sắc thắm'",
      answerResult: [
        "Triệu cành hồng",
        "Ánh nắng sương ",
        " Khoe sắc thắm",
        "Sương long lanh",
      ],
      correct: 2,
    },
    {
      question: "8 chia 4 = ? ",
      answerResult: ["1/4", "1/2", "3/4", "4/3"],
      correct: 3,
    },
  ],
  [
    {
      question:
        "Tìm điểm sai trong câu: 'Dưới ánh nắng sương long lanh triệu cành hồng khoe sắc thắm'",
      answerResult: [
        "Triệu cành hồng",
        "Ánh nắng sương ",
        " Khoe sắc thắm",
        "Sương long lanh",
      ],
      correct: 2,
    },
    {
      question: "8 chia 4 = ? ",
      answerResult: ["1/4", "1/2", "3/4", "4/3"],
      correct: 3,
    },
  ],
  [
    {
      question: "Một anh thanh niên đánh 1 bà già hỏi anh ấy mất gì?",
      answerResult: ["Mất tiền", "Mất trí", " Mất sức", "Mất dạy"],
      correct: 3,
    },
    {
      question:
        "Có 2 người cha và 2 người con cùng chia đều số tiền là 27 nghìn. Hỏi mỗi người được bao nhiều?",
      answerResult: ["6,75", " 7", "7,5", "9"],
      correct: 3,
    },
  ],
];
let number = 0;
let ramdomQue = 0;
function random(n) {
  return Math.floor(Math.random() * n);
}
function renderQues(number) {
  for (let i = 0; i <= number; i++) {
    randomQue = random(2);
    question.innerText = arrayQues[number][randomQue].question;
    answer.forEach((e, index) => {
      e.innerText = arrayQues[number][randomQue].answerResult[index];
      e.style.backgroundColor = "rgb(3, 14, 51)";
      e.style.color = "white";
    });
  }
}
function signCheck() {
  if (
    number == 10 ||
    number == 11 ||
    number == 12 ||
    number == 13 ||
    number == 14 ||
    number == 15
  ) {
    alert(
      `Chúc mừng bạn nhận được tấm séc trị giá ${(totalMoney.innerText =
        money[15 - number].innerText)}`
    );
  }
}
renderQues(number);
totalMoney.innerText = "$0";
let value = 0;
answer.forEach((e, index) => {
  e.addEventListener("click", function () {
    clearInterval(timeout);
    e.style.backgroundColor = "rgb(255, 204, 0)";
    e.style.color = "rgb(16, 10, 10)";
    setTimeout(function () {
      scoreMoney.forEach((e) => (e.style.backgroundColor = "rgb(3, 14, 51)"));
      if (number != 0) {
        scoreMoney[15 - number].style.backgroundColor = "rgb(255, 204, 0)";
      }
      answer[arrayQues[value][randomQue].correct].style.backgroundColor =
        "yellowgreen";
      answer[arrayQues[value][randomQue].correct].style.color = "white";
      value++;
    }, 1000);
    if (index == arrayQues[number][randomQue].correct) {
      number++;
      setTimeout(() => {
        ingameMusic.pause();
        winMusic.play();
        signCheck();
      }, 1000);
      if (number == arrayQues.length) {
        let id = name.value;
        let userMoney = money[15 - number].innerText;
        let userObject = {
          id: `${id ? name.value : "NoName"}`,
          money: `${Number(userMoney.substr(1).split(".").join(""))}`,
          donvi: "$",
        };
        arrayUser.push(userObject);
        localStorage.setItem("array", JSON.stringify(arrayUser));
        setTimeout(function () {
          winMusic.pause();
          endMusic.play();
          playGame.style.display = "none";
          endGame.style.display = "block";
          totalMoney.innerText = money[15 - number].innerText;
        }, 6000);
      } else {
        setTimeout(() => {
          countDown = 60;
          timeDown.innerText = `${countDown}s`;
        }, 1000);
        setTimeout(function () {
          Time();
          ingameMusic.load();
          ingameMusic.play();
          winMusic.pause();
          winMusic.load();
          resultSupport.innerText = "";
          renderQues(number);
        }, 4500);
      }
    } else {
      setTimeout(() => {
        ingameMusic.pause();
        failMusic.play();
      }, 1000);
      setTimeout(() => {
        failMusic.pause();
        endMusic.play();
        clearInterval(timeout);
        playGame.style.display = "none";
        endGame.style.display = "block";
        if (number >= 1) {
          totalMoney.innerText = money[15 - number].innerText;
          let id = name.value;
          let userMoney = money[15 - number].innerText;
          let userObject = {
            id: `${id ? name.value : "NoName"}`,
            money: `${Number(userMoney.substr(1).split(".").join(""))}`,
            donvi: "$",
          };
          arrayUser.push(userObject);
          console.log(arrayUser);
          localStorage.setItem("array", JSON.stringify(arrayUser));
        } else {
          totalMoney.innerText = "$0";
          let id = name.value;
          let userMoney = "$0";
          let userObject = {
            id: `${id ? name.value : "NoName"}`,
            money: `${Number(userMoney.substr(1).split(".").join(""))}`,
            donvi: "$",
          };
          arrayUser.push(userObject);
          console.log(arrayUser);
          localStorage.setItem("array", JSON.stringify(arrayUser));
        }
      }, 4000);
    }
  });
});
let arrayHelp = [];
let number1 = 0;
helpBy5050.addEventListener("click", function Remove5050() {
  number1 = number;
  let arrayRomove = [];
  let arrayRomove1 = [];
  for (let i = 0; i < 4; i++) {
    if (i != arrayQues[number][randomQue].correct) {
      arrayRomove.push(i);
    }
  }
  let valueRandom1 = arrayRomove[Math.floor(Math.random() * 3)];
  for (let i = 0; i < 4; i++) {
    if (i != valueRandom1 && i != arrayQues[number][randomQue].correct) {
      arrayRomove1.push(i);
    }
  }
  let valueRandom2 = arrayRomove1[Math.floor(Math.random() * 2)];
  for (let i = 0; i < 4; i++) {
    if (i != valueRandom1 && i != valueRandom2) {
      arrayHelp.push(answer[i].innerText);
    }
  }
  answer[valueRandom1].innerText = "";
  answer[valueRandom2].innerText = "";
  helpBy5050.disabled = true;
  help5050Music.play();
  helpBy5050.style.textDecoration = "line-through";
});
helpByLooker.addEventListener("click", function SupportByLooker() {
  console.log(arrayHelp);
  console.log(number1);
  console.log(number);
  if (arrayHelp.length>0 ){
    console.log('true');
  }
  if( number1 == number)
  {
    console.log('true2');
  }
  helpLookerMusic.play();
  if (arrayHelp.length>0 && number1 == number) {
    setTimeout(() => {
      resultSupport.innerText = `Chúng tôi nghĩ là ${arrayHelp[random(2)]}`;
      helpLookerMusic.pause();
      console.log(1);
    }, 500);
  }
  if (arrayHelp.length>0 && number1 != number) {
    setTimeout(() => {
      resultSupport.innerText = `Chúng tôi nghĩ là ${
        arrayQues[number][randomQue].answerResult[random(4)]
      }`;
      console.log(2);
      helpLookerMusic.pause();
    }, 500);
  }
  if (arrayHelp.length==0) {
    setTimeout(() => {
      resultSupport.innerText = `Chúng tôi nghĩ là ${
        arrayQues[number][randomQue].answerResult[random(4)]
      }`;
      console.log(3);

      helpLookerMusic.pause();
    }, 500);
  }
  helpByLooker.disabled = true;
  helpByLooker.style.textDecoration = "line-through";
});
reload.addEventListener("click", function () {
  window.location.reload();
});
