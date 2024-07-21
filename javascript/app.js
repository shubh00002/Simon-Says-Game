/* SIMON GAME */
let userSeq = [];
let gameSeq = [];

let color = ["red", "green", "yellow", "blue"];
let userColor;

let level = 0;
let started = false;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started !!!");
    started = true;
  }

  levelUp();
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `level ${level}`;

  // random btn
  let rndmIdx = Math.floor(Math.random() * 3);
  let rndmClr = color[rndmIdx];
  let rndmBtn = document.querySelector(`.${rndmClr}`);
  // console.log(rndmBtn);
  // console.log(rndmClr);
  // console.log(rndmIdx);
  gameSeq.push(rndmClr);
  console.log(gameSeq);
  gameFlash(rndmBtn);
}
function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
function check(index) {
  if (userSeq[index] == gameSeq[index]) {
    // console.log("same");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game Over <br> <b>your score was ${level}</b> <br>Press any key to start again`;
    // console.log("Game Over ,Press any key to start again ");
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 850);
    resetGame();
  }
}
function btnPress() {
  // console.log("button was pressed !! ");
  // console.log(this);
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  // console.log(`button pressed by user is ${userColor}`);
  userSeq.push(userColor);

  check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
